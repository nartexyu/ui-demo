# UI Demo

Hi Ben,thanks for taking the time to check out my project!

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
- [Upcoming Improvements](#upcoming-improvements)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [License](#license)
- [Contact](#contact)

## Introduction

This project came about as a fun way for me to dive back into frontend development by experimenting with various UI/UX design trends. Over the span of a little over a week, I decided to create five distinct design themes, dedicating a couple of days to each one. My goal wasn’t just to capture the visual essence of each trend but also to align the functionality to match the style, ensuring that each theme feels cohesive and true to its design philosophy.

Each theme is its own mini-project, showcasing the unique characteristics and interactions associated with that particular design trend. I also integrated a few APIs and modern frontend tools to make the experience more dynamic and interactive.

## Live Demo

You can explore the live demo of the project [here](https://ui-demo-psi.vercel.app/).

## Features

### Neubrutalism (Days 1-2)

**Description:**  
Neubrutalism is a bold, unapologetic design style that draws inspiration from the Brutalist movement. This theme is presented as a standard web app with a hero section, features, and history sections that discuss the theme itself. I used GSAP for simple animations that align with the raw and stark aesthetic of Neubrutalism.

**Key Features:**

- Bold, geometric layouts with strong color contrasts.
- GSAP-driven animations that enhance the visual impact.
- A focus on functionality with a distinctly raw UI.

**Future Improvements**

- Add more sections/substance to make it fuller, more fleshed out.
- Improve mobile responsiveness and integrate animations.

**Screenshots:**

### Neumorphism (Day 3)

**Description:**  
Neumorphism combines elements of skeuomorphism and flat design, creating soft, extruded shapes that feel modern yet familiar. I chose to implement this theme as a dashboard, as I felt the style lent itself well to displaying metrics and data. Although the metrics are currently hardcoded, the design is reminiscent of the futuristic aesthetic I've seen in tours of the Vast's office.

**Key Features:**

- Soft shadows and highlights create a 3D effect.
- Interactive buttons and controls that respond smoothly.
- A dashboard layout that emphasizes clarity and subtlety.

**Future Improvements**

- Implement some sort of API for metrics and dynamically change the values.
- React-dnd to be able to customize the layout the bento-box grid.

**Screenshots:**

### Bauhaus (Day 4)

**Description:**  
Inspired by the Bauhaus art movement, this theme emphasizes geometric shapes, primary colors, and a focus on simplicity and functionality. The Bauhaus design is implemented as a weather app, which, in my opinion, looks best on mobile. The desktop version features a calendar and color blocks alongside shapes inspired by Bauhaus geometric patterns to fill the space and maintain visual balance.

**Key Features:**

- Strong geometric designs and patterns.
- Dynamic background colors and SVG graphics.
- A modular layout that’s both functional and visually appealing.

**Future Improvements**

- Add more custom SVGs and background colors that dynamically change based on the weather from the API response.
- Make it more Bauhaus-y.

**Screenshots:**

### Glassmorphism (Days 5-6)

**Description:**  
Glassmorphism is characterized by translucent elements and frosted glass effects layered over vibrant backgrounds. For this theme, I created a Spotify player that interacts with the Spotify API. Ideally, I should have used the Spotify Playback SDK, which is on my to-do list. As it stands, the player requires a Spotify account and an active session on a different device to work correctly, which I recognize is not ideal.

**Key Features:**

- Transparent cards and containers with a glass-like effect.
- Integration with the Spotify API for dynamic content.
- Interactive media controls with a sleek, modern design.

**Future Improvements**

- Implement the Spotify Web Playback SDK for better performance and reduce the number of API calls.
- Improve authorization by using OAuth 2.0 flow.
- Finish converting to jotai and fix file structure.

**Screenshots:**

### Retro Futurism (Days 7-9)

**Description:**  
Retro Futurism combines nostalgic design elements with futuristic concepts, creating a visually rich and engaging experience. This is the theme I’m most proud of, as it showcases some of my photography through a Three.js project. To represent the 'retro' aspect, I used a magazine format to display my photos. The 'futurism' part is represented by a dynamic mesh of dots that move in a wave pattern, adding a modern, tech-forward feel to the presentation.

**Key Features:**

- Bold, contrasting colors and geometric patterns.
- Three.js integration for a 3D, interactive experience.
- A magazine-style layout to showcase photography.
- Dynamic animations and mesh effects that embody the futuristic theme.

**Future Improvements**

- Add more photos.
- Add a loading screen for the books.
- Improve mobile responsiveness.
- Finish converting to jotai and fix file structure.

**Screenshots:**

## Upcoming Improvements

- **File Structure Refactoring:** I’m in the process of reorganizing the project’s file structure to make it more maintainable and scalable as it grows.
- **State Management Conversion:** I’m transitioning the state management to [Jotai](https://jotai.org/) to streamline the code and improve performance.
- **Performance Optimizations:** I’ll be implementing lazy loading and code-splitting to make the application faster and more efficient.
- **Accessibility Enhancements:** I’m working to ensure that all themes meet accessibility standards (WCAG) to provide a better user experience for everyone.
- **Cross-Browser Compatibility:** I’m testing and adjusting the designs to make sure they look great and function well across all major browsers.

## Technologies Used

- **Frontend Framework:** [React](https://reactjs.org/)
- **State Management:** [Jotai](https://jotai.org/)
- **Styling:** CSS Modules, SCSS, and styled-components
- **API Integrations:**
  - [Spotify API](https://developer.spotify.com/documentation/web-api/)
  - [OpenWeather API](https://openweathermap.org/api) _(planned)_
- **Tooling and Bundling:** [Webpack](https://webpack.js.org/), [Babel](https://babeljs.io/)
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

3. **Building for Production:**

   ```bash
   # Using npm
   npm run build

   # Or using yarn
   yarn build
   ```

   The optimized production build will be available in the `build` directory.

## Project Structure

```
ui-demo/
├── public/
│   ├── index.html
│   └── assets/
│       └── images/
├── src/
│   ├── components/
│   │   ├── Neumorphism/
│   │   ├── Glassmorphism/
│   │   ├── RetroFuturism/
│   │   ├── Minimalism/
│   │   └── Bauhaus/
│   ├── styles/
│   ├── state/
│   ├── utils/
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
├── README.md
└── webpack.config.js
```

**Description:**

- `public/`: Contains static files and the main HTML template.
- `src/`: Main source code for the application.
  - `components/`: Individual theme components.
  - `styles/`: Global and theme-specific styles.
  - `state/`: Jotai atoms and state management logic.
  - `utils/`: Helper functions and utility modules.
  - `App.js`: Root component managing routing and layout.
  - `index.js`: Entry point of the application.
- `webpack.config.js`: Configuration for webpack bundler.
- `package.json`: Lists project dependencies and scripts.

_(Note: The project structure is subject to change as refactoring progresses.)_

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this software in accordance with the license terms.

## Contact

**Author:** Nathaniel Yu  
**GitHub:** [nartexyu](https://github.com/nartexyu)  
**Email:** your.email@example.com  
**LinkedIn:** [Your LinkedIn Profile](https://www.linkedin.com/in/yourprofile/)

Feel free to reach out for any inquiries, suggestions, or collaborations!
