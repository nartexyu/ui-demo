# UI Demo

Hi Ben, thanks for taking the time to check out my project! I haven't had time to make it perfectly responsive yet, so it's preferable for you to use a decently large screen to view it!

Welcome to the **UI Demo** repository, where I’ve brought together some of the more recent UI design trends into a single collection of themed interfaces. This project has been both a personal exploration and a way for me to get back into the swing of frontend development. I couldn’t decide on just one theme, so I decided to do them all! Each theme was crafted over the course of a couple days, so feel free to dive in, explore, and hopefully get inspired by the different UI designs.

## Table of Contents

- [Introduction](#introduction)
- [Live Demo](#live-demo)
- [Features](#features)
  - [Neubrutalism](#neubrutalism)
  - [Neumorphism](#neumorphism)
  - [Bauhaus](#bauhaus)
  - [Glassmorphism](#glassmorphism)
  - [Retro Futurism](#retro-futurism)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)

## Introduction

Over the last two years, my focus has been primarily on machine learning and completing my Master's program. However, my passion for design has recently been reignited when I was exploring ways to present data. This project was a fun way to reimmerse myself in frontend development by exploring various UI/UX design trends. Over a little more than a week, I challenged myself to create five distinct design themes, dedicating a couple of days to each. I started each day by browsing Dribbble for inspiration, sketching wireframes on paper, and considering the best presentation medium for each theme. My objective wasn't just to capture the visual essence of each trend but also to ensure that the functionality aligned with the style, creating a cohesive and authentic representation of each design philosophy.

Each theme is its own mini-project, showcasing the unique characteristics and interactions associated with that particular design trend. I recommend first reading through the description and key features for each theme as you explore them on the live demo.  I also integrated a few APIs and modern frontend tools to make the experience more dynamic and interactive.

## Live Demo

You can explore the live demo of the project [here](https://ui-demo-psi.vercel.app/).

## Features

### Neubrutalism (Days 1-2)

**Description:**  
Neubrutalism is a bold, unapologetic design style that draws inspiration from the Brutalist movement. This theme is presented as a standard web app with a hero section, features, and history sections that discuss the theme itself. I used GSAP for simple animations that align with the raw and stark aesthetic of Neubrutalism.

**Key Features:**

- This style is characterized by raw, utilitarian design elements with a strong emphasis on geometry and high contrast.
- Prioritizes functionality with an intentionally unrefined user interface.
- Utilizes GSAP animations to amplify the bold and striking visual impact of the design.

**Future Improvements**

- Add more sections/substance to make it fuller, more fleshed out.
- Improve mobile responsiveness and integrate animations.

**Screenshots:**

### Neumorphism (Day 3)

**Description:**  
Neumorphism combines elements of skeuomorphism and flat design, creating soft, extruded shapes that feel modern yet familiar. I chose to implement this theme as a dashboard, as I felt the style lent itself well to displaying metrics and data. Although the metrics are currently hardcoded, the design is reminiscent of the futuristic aesthetic I've seen in tours of the Vast's office.

**Key Features:**

- This style has soft, extruded shapes with gentle shadows and highlights to create a subtle 3D effect.
- Smooth, responsive interactions with buttons and controls that enhance the tactile feel.
- A clean, minimalist dashboard layout that prioritizes clarity and subtle design elements.

**Future Improvements**

- Implement some sort of API for metrics and dynamically change the values.
- React-dnd to be able to customize the layout the bento-box grid.

**Screenshots:**

### Bauhaus (Day 4)

**Description:**  
Inspired by the Bauhaus art movement, this theme emphasizes geometric shapes, primary colors, and a focus on simplicity and functionality. The Bauhaus design is implemented as a weather app, which, in my opinion, looks best on mobile. The desktop version features a calendar and color blocks alongside shapes inspired by Bauhaus geometric patterns to fill the space and maintain visual balance. Input a city into the top left and hit enter to search. The calendar on the right also allows you to select between today and the next two days to retrieve the weather forecast. 

**Key Features:**

- This style is defined by its use of precise geometric shapes, grid-based layouts, and balanced compositions that prioritize functionality and harmony. 
- Integration with the Weather API to provide real-time weather data, enhancing the app's practicality and user experience.
- A clickable calendar feature that allows users to view weather forecasts for selected dates.
  
**Future Improvements**

- Add more custom SVGs and background colors that dynamically change based on the weather from the API response.
- Make it more Bauhaus-y.

**Screenshots:**

### Glassmorphism (Days 5-6)

**Description:**  
Glassmorphism is characterized by translucent elements and frosted glass effects layered over vibrant backgrounds. For this theme, I created a Spotify player that interacts with the Spotify API. Ideally, I should have used the Spotify Playback SDK, which is on my to-do list. As it stands, the player requires a Spotify account and an active session on a different device to work correctly, which I recognize is not ideal. It's basically no more than a remote control without the playback SDK. To make it work, login to Spotify through the demo. Then open Spotify on your phone or desktop app to create an active session (may require you to play/pause a song if previously inactive) and keep it open in the background. Finally, refresh the demo. Hovering on the left side of the screen will also allow you to search for a song to play. 

**Key Features:**

- This style showcases translucent cards and containers with frosted glass effects, creating a sense of depth and layering.
- Integration with the Spotify API for dynamic content.
- Features a song search functionality and a light/dark mode toggle, offering users customization and an enhanced interactive experience.

**Future Improvements**

- Implement the Spotify Web Playback SDK for better performance and reduce the number of API calls.
- Integration with the Spotify API to deliver dynamic, real-time music content.
- Finish converting to jotai and fix file structure.

**Screenshots:**

### Retro Futurism (Days 7-9)

**Description:**  
Retro Futurism combines nostalgic design elements with futuristic concepts, creating a visually rich and engaging experience. This is the theme I’m most proud of, as it showcases some of my hobby photography through a Three.js project. To represent the 'retro' aspect, I used grays and mono fonts, as well as a magazine format to display my photos. The 'futurism' aspect is represented by a dynamic mesh of dots that move in a wave pattern, adding a modern, tech-forward feel to the presentation. Hover and click on the pages to flip through the magazine. You can also change books on the left pagination to view more photos. 

**Key Features:**

- This style combines vintage design elements with futuristic technology, featuring bold typography, neon accents, and sleek metallic textures.
- Emphasizes a blend of nostalgia and innovation, incorporating 3D elements, dynamic animations, and minimalistic, yet impactful, layouts.
- Utilizes a magazine-style layout to effectively showcase digital photography in a retro-futuristic context.
- Incorporates dynamic animations and mesh effects that capture the essence of a futuristic, tech-driven aesthetic.

**Future Improvements**

- Add more of my photos.
- Add a loading screen for the books.
- Improve mobile responsiveness.
- Finish converting to jotai and fix file structure.

**Screenshots:**

## Technologies Used

- **Frontend Framework:** [React](https://reactjs.org/)
- **State Management:** [Jotai](https://jotai.org/)
- **Styling:** Tailwindcss
- **API Integrations:**
  - [Spotify API](https://developer.spotify.com/documentation/web-api/)
  - [Weather API](https://www.weatherapi.com/docs/)
- **Version Control:** [Git](https://git-scm.com/)
- **Package Management:** [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- **Node.js:** Ensure you have Node.js installed. Download it from [here](https://nodejs.org/en/download/).
- **npm or yarn:** Package manager for installing dependencies.
- **Git:** For cloning the repository.

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/nartexyu/ui-demo.git
   ```
2. **Navigate to the Project Directory:**
   ```bash
   cd ui-demo
   ```
3. **Install Dependencies:**

   ```bash
   # Using npm
   npm install

   # Or using yarn
   yarn install
   ```

### Running the Application

1. **Start the Development Server:**

   ```bash
   # Using npm
   npm start

   # Or using yarn
   yarn start
   ```

2. **Access the Application:**
   Open your browser and navigate to `http://localhost:3000` to view the application.
