# Frontend Documentation

## Project Overview
This is the frontend for the website, built using modern web technologies such as React, Tailwind CSS, and ViteJS. The website is designed to provide an interactive and responsive experience for users.

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework used for styling the website.
- **ViteJS**: A fast build tool for development and production.
- **JavaScript (ES6+)**: Modern JavaScript features for better performance and readability.

## Installation

### Prerequisites
- Node.js (v16.0 or higher)
- npm or yarn

### Steps to Get Started

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies**:
   Navigate into the project folder and install the required dependencies.
   ```bash
   cd <project-folder>
   npm install
   # OR if using yarn
   yarn install
   ```

3. **Run the development server**:
   Start the Vite development server to view the project locally.
   ```bash
   npm run dev
   # OR if using yarn
   yarn dev
   ```

   Open `http://localhost:5173` in your browser to see the application in action.

## Folder Structure
```plaintext
├── public/             # Public files (images, icons, etc.)
├── src/                # Source files for React components and logic
│   ├── assets/         # Static assets like images and icons
│   ├── components/     # Reusable React components
│   ├── pages/          # React pages representing different routes
│   ├── App.jsx         # Main application component
│   └── index.js        # Entry point for React app
├── tailwind.config.js  # Tailwind CSS configuration file
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## Available Scripts

- **npm run dev**: Starts the development server and opens the app in the browser.
- **npm run build**: Builds the app for production to the `dist` folder.

thank you ❤️
