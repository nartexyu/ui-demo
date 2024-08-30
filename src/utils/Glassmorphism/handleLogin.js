// Redirects the user to the Spotify login page with the required scopes
// Once logged in, Spotify redirects the user back to the specified redirect URI with an access token
export const handleLogin = () => {
  const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const redirectUri = "https://ui-demo-psi.vercel.app/";
  const scopes = [
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
  ];

  window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
};
