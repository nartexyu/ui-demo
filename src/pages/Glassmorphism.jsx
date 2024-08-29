import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const Glassmorphism = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLightMode, setIsLightMode] = useState(true);
    const [token, setToken] = useState('');
    const [playbackState, setPlaybackState] = useState(null);
    const [prevTrack, setPrevTrack] = useState(null);
    const [nextTrack, setNextTrack] = useState(null);
    const [pause, setPause] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isTrackChanging, setIsTrackChanging] = useState(false);
    
    // Function to toggle light mode
    const lightMode = () => {
        setIsLightMode(!isLightMode);
    };

    // useEffect to extract Spotify API token from the URL hash and store it in localStorage. standin for user authentication, would use some sort os sso
    useEffect(() => {
        const hash = window.location.hash;
        let token = window.localStorage.getItem("token");

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
            window.location.hash = "";
            window.localStorage.setItem("token", token);
        }

        setToken(token);
    }, []);

    // useEffect to fetch the current playback state when the token changes
    useEffect(() => {
        if (token) { 
            getPlaybackState();
        }
    }, [token]);

    // Function to fetch the current playback state from Spotify API
    const getPlaybackState = async () => {
        try {
            const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const res = response.data;
            if (res && res.item) {
                if (playbackState && playbackState.id !== res.item.id) {
                    setPrevTrack(playbackState);
                    setIsTrackChanging(true);
                }
                setPlaybackState({
                    id: res.item.id,
                    name: res.item.name,
                    artist: res.item.artists[0].name,
                    img: res.item.album.images[1].url,
                    progress: res.progress_ms,
                    duration: res.item.duration_ms,
                    isPlaying: res.is_playing
                });
                getNextTrack();
            }
        } catch (error) {
            console.error('Error fetching currently playing track:', error);
        }
    };

    // Function to skip to the next track in the queue from Spotify API
    const getNextTrack = async () => {
        try {
            const response = await axios.get('https://api.spotify.com/v1/me/player/queue', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const res = response.data;
            if (res && res.queue && res.queue.length > 0) {
                const next = res.queue[0];
                setNextTrack({
                    name: next.name,
                    artist: next.artists[0].name,
                    img: next.album.images[1].url
                });
            }
        } catch (error) {
            console.error('Error fetching next track:', error);
        }
    };

    // Function to start playback using Spotify API
    const startPlayback = async () => {
        try {
            await axios.put('https://api.spotify.com/v1/me/player/play', {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            getPlaybackState();
            setPause(false);
        } catch (error) {
            console.error('Error starting playback:', error);
        }
    };

    // Function to skip to the previous song using Spotify API
    const pausePlayback = async () => {
        try {
            await axios.put('https://api.spotify.com/v1/me/player/pause', {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            getPlaybackState();
            setPause(true);
        } catch (error) {
            console.error('Error pausing playback:', error);
        }
    };

    const prevSong = async () => {
        setIsTrackChanging(true);
        try {
            await axios.post('https://api.spotify.com/v1/me/player/previous', {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            getPlaybackState();
            setPause(false);
        } catch (error) {
            console.error('Error skipping to previous song:', error);
        }
    };

    const nextSong = async () => {
        setIsTrackChanging(true);
        if (playbackState) {
            setPrevTrack(playbackState);
        }
        try {
            await axios.post('https://api.spotify.com/v1/me/player/next', {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            getPlaybackState();
            setPause(false);
        } catch (error) {
            console.error('Error skipping to next song:', error);
        }
    };

    const seekPlayback = async (position) => {
        try {
            await axios.put(`https://api.spotify.com/v1/me/player/seek?position_ms=${position}`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setPlaybackState((prevState) => ({
                ...prevState,
                progress: position
            }));
        } catch (error) {
            console.error('Error seeking playback:', error);
        }
    };

    useEffect(() => {
        let interval = null;
        if (!pause) {
            interval = setInterval(() => {
                getPlaybackState();
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [pause]);

    const millisToMinutesAndSeconds = (millis) => {
        let minutes = Math.floor(millis / 60000);
        let seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    };

    const handleSliderChange = (event) => {
        const newProgress = event.target.value;
        seekPlayback(newProgress);
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchTerm) return;

        try {
            const response = await axios.get(`https://api.spotify.com/v1/search`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: {
                    q: searchTerm,
                    type: 'track'
                }
            });
            setSearchResults(response.data.tracks.items);
        } catch (error) {
            console.error('Error searching tracks:', error);
        }
    };

    const handleTrackSelect = async (track) => {
        setIsTrackChanging(false);
        try {
            await axios.put(`https://api.spotify.com/v1/me/player/play`, {
                uris: [track.uri]
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setPlaybackState({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                img: track.album.images[1].url,
                progress: 0,
                duration: track.duration_ms,
                isPlaying: true
            });
            setPause(false);
            setSearchResults([]);
            setSearchTerm('');
        } catch (error) {
            console.error('Error playing track:', error);
        }
    };

    return (
        <section className="h-full w-full bg-cover bg-center z-0 overflow-hidden h-screen w-screen" style={{ backgroundImage: playbackState && playbackState.img ? `url(${playbackState.img})` : `url(${process.env.PUBLIC_URL}/brutalism.jpg)` }}>
            <div className={`h-full w-full flex flex-col items-center justify-center backdrop-filter backdrop-blur-3xl z-10 transition-all duration-200 ease-in-out ${isLightMode ? 'bg-white bg-opacity-10' : 'bg-black bg-opacity-50'}`}>
                <div className="h-3/4 w-full flex flex-col items-center justify-center mt-32 lg:mt-24">
                    <div className="relative h-80 w-80 lg:h-96 lg:w-96 bg-white bg-opacity-10 backdrop-blur-3xl rounded-3xl p-6 flex flex-col items-center justify-center shadow-xl">
                        <div className="absolute inset-0 m-4 rounded-3xl">
                            <div className='relative h-full w-full' style={{ perspective: '1000px' }}>
                                {prevTrack && isTrackChanging && (
                                    <img
                                        key={prevTrack.img}  // Force re-render to apply transition
                                        className="absolute top-0 left-0 h-full w-full object-cover rounded-3xl transform transition-transform duration-500"
                                        style={{ transform: 'translateX(-480px) translateZ(-400px) rotateY(45deg)', filter: 'blur(8px)'}}
                                        src={prevTrack.img}
                                        alt="Previous album cover"
                                    />
                                )}
                                {playbackState && (
                                    <img
                                        key={playbackState.img}  // Force re-render to apply transition
                                        className="absolute top-0 left-0 h-full w-full object-cover rounded-3xl transform transition-transform duration-500"
                                        src={playbackState.img}
                                        alt="Album cover"
                                    />
                                )}
                                {nextTrack && isTrackChanging && (
                                    <img
                                        key={nextTrack.img}  // Force re-render to apply transition
                                        className="absolute top-0 left-0 h-full w-full object-cover rounded-3xl transform transition-transform duration-500"
                                        style={{ transform: 'translateX(480px) translateZ(-400px) rotateY(-45deg)', filter: 'blur(8px)'}}
                                        src={nextTrack.img}
                                        alt="Next album cover"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='relative flex flex-col items-center justify-center mt-20 lg:mt-8 text-white drop-shadow-lg'>
                        <h1 className='text-3xl lg:text-3xl font-light mb-4'>{playbackState ? playbackState.name : 'Song Title'}</h1>
                        <h2 className='text-lg lg:text-2xl font-light '>{playbackState ? playbackState.artist : 'Artist Name'}</h2>
                    </div>
                </div>
                <div className="h-1/4 w-full flex flex-col items-center justify-start bg-transparent">
                    <div className='w-5/6 lg:w-full h-[5%] flex items-center justify-center mb-8'>
                        {playbackState && (
                            <div className="text-md lg:text-lg font-light text-white mr-4">
                                <span>{millisToMinutesAndSeconds(playbackState.progress)}</span>
                            </div>
                        )}
                        {playbackState && (
                            <input
                                type="range"
                                min="0"
                                max={playbackState.duration}
                                value={playbackState.progress}
                                onChange={handleSliderChange}
                                className="w-3/4 lg:w-1/3 rounded-full drop-shadow-lg"
                            />
                        )}
                        {playbackState && (
                            <div className="text-md lg:text-lg font-light text-white ml-4">
                                <span>{millisToMinutesAndSeconds(playbackState.duration)}</span>
                            </div>
                        )}
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                        <button className={`${isLightMode ? 'bg-opacity-40' : 'bg-opacity-20 '} bg-white backdrop-filter backdrop-blur-lg rounded-full p-4 shadow-lg transition-all duration-200 ease-in-out`} onClick={prevSong}>
                            {/* Back button icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        {playbackState && playbackState.isPlaying ? (
                            <button className="bg-blue-600 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-full p-4 shadow-lg transform-all ease-in-out duration-200" onClick={pausePlayback}>
                                {/* Pause button icon */}
                                <svg className='w-8 h-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 5V19M16 5V19" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            </button>
                        ) : (
                            <button className="bg-blue-600 backdrop-filter backdrop-blur-lg rounded-full p-4 shadow-lg transform-all ease-in-out duration-200" onClick={startPlayback}>
                                {/* Play button icon */}
                                <svg className='w-8 h-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"></path> </g></svg>
                            </button>
                        )}
                        <button className={`${isLightMode ? 'bg-opacity-40' : 'bg-opacity-20 '} bg-white backdrop-filter backdrop-blur-lg rounded-full p-4 shadow-lg transition-all duration-200 ease-in-out`} onClick={nextSong}>
                            {/* Next button icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white rotate-180">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    </div>
                    {isLightMode ? (
                        <button className="fixed bottom-4 right-4 bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg rounded-full p-4 shadow-lg" onClick={lightMode}>
                            {/* Dark mode icon */}
                            <svg className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </button>
                    ) : (
                        <button className="fixed bottom-4 right-4 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full p-4 shadow-lg" onClick={lightMode}>
                            {/* Light mode icon */}
                            <svg className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </button>
                    )}
                </div>
            </div>

            <div className="fixed h-screen z-20">
                <div className="group h-full">
                    {/* Hover area for desktop */}
                    <div
                        className="fixed top-0 left-0 h-full w-1/5 z-10 bg-transparent"
                        onMouseEnter={() => setIsOpen(true)} // Add this line for hover effect
                    ></div>

                    {/* Sliding Panel */}
                    <div
                        className={`fixed top-0 left-0 h-full w-full lg:w-1/5 bg-white bg-opacity-30 backdrop-blur-xl shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} ${isLightMode ? 'bg-opacity-40 ' : 'bg-opacity-20'}`}
                        onMouseEnter={() => setIsOpen(true)} // Keep panel open on hover
                        onMouseLeave={() => setIsOpen(false)} // Close panel when leaving
                        style={{ zIndex: 30 }} // Ensure the panel is above other elements
                    >
                        <div className="p-8">
                        <button 
                            className={`absolute top-4 right-4 bg-white bg-opacity-30 rounded-full p-2 shadow-lg ${isLightMode ? 'bg-opacity-40 ' : 'bg-opacity-20'}`} 
                            onClick={() => setIsOpen(false)}
                        >
                            {/* X icon */}
                            <svg className="w-6 h-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                            <h2 className="text-lg lg:text-2xl font-normal mb-4">Search Tracks</h2>
                            <form onSubmit={handleSearch}>
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Search for a track"
                                    className="w-full p-2 mb-4 bg-white bg-opacity-40 backdrop-blur-xl shadow-lg rounded-xl"
                                />
                                <button type="submit" className="w-full p-2 bg-blue-600 bg-opacity-80 backdrop-blur-xl shadow-lg text-white rounded-full">Search</button>
                            </form>
                            <ul className="mt-4">
                                {searchResults.map(track => (
                                    <li
                                        key={track.id}
                                        className="p-2 bg-white bg-opacity-40 backdrop-blur-xl shadow-lg rounded-xl mb-2 cursor-pointer hover:bg-opacity-70 transition-all duration-200 ease-in-out"
                                        onClick={() => handleTrackSelect(track)}
                                    >
                                        {track.name} - {track.artists[0].name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Glassmorphism;
