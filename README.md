# ALIGN Marketing Agency Website

A modern, responsive marketing agency website built with React, Vite, Tailwind CSS, and DaisyUI. This project serves as a v1 foundation, showcasing key sections like a hero area with dynamic text, services, recent works, testimonials, and a contact form.

## Features

*   **Responsive Header:** Dynamic navigation that adapts from desktop links to a mobile hamburger menu.
*   **Hero Section:** Engaging hero area with a split-text animation and a typing effect for key messages.
*   **Services Showcase:** Displays various services with custom icons and descriptions.
*   **Recent Works:** A grid showcasing recent projects (placeholder images).
*   **Client Testimonials:** A section to highlight client feedback.
*   **Contact Form:** A functional contact form integrated with Formspree for submissions.
*   **Custom Theming:** Utilizes Tailwind CSS for utility-first styling and DaisyUI for component styling, with custom color and font definitions.
*   **Favicon:** Custom SVG favicon for branding.
*   **Clean File Structure:** Organized components for better maintainability.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **Vite:** A fast build tool that provides a lightning-fast development experience.
*   **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
*   **DaisyUI:** A Tailwind CSS component library that adds pre-built UI components.
*   **GSAP (GreenSock Animation Platform):** For advanced JavaScript animations (e.g., SplitText, TextType).
*   **Formspree:** For handling contact form submissions without a backend.

## Setup

Follow these steps to get the project up and running on your local machine.

### Prerequisites

*   Node.js (LTS version recommended)
*   npm (Node Package Manager)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd ALIGN
    ```
    (Note: If you haven't initialized a Git repository, you can skip this step and just ensure you are in the project's root directory.)

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Development Server

To start the development server and view the application in your browser:

```bash
npm run dev
```

The application will typically be available at `http://localhost:5173` (or another port if 5173 is in use).

## Available Scripts

In the project directory, you can run:

*   `npm run dev`: Starts the development server.
*   `npm run build`: Builds the app for production to the `dist` folder.
*   `npm run lint`: Lints the project for code quality issues.
*   `npm run preview`: Serves the production build locally.

## File Structure

The project follows a component-based architecture:

```
ALIGN/
├── public/                 # Static assets (e.g., favicon)
├── src/
│   ├── assets/             # Images, icons, etc.
│   ├── components/         # Reusable UI components (Header, Footer, Hero, Body, etc.)
│   ├── App.css             # Global application styles
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Entry point of the React application
│   └── index.css           # Tailwind CSS directives
├── index.html              # Main HTML file
├── tailwind.config.js      # Tailwind CSS configuration (including custom colors, fonts, and DaisyUI plugin)
├── postcss.config.js       # PostCSS configuration
├── vite.config.js          # Vite build tool configuration
├── package.json            # Project dependencies and scripts
└── README.md               # This file
```

## Customization

*   **Tailwind CSS:** Modify `tailwind.config.js` to extend themes, add new colors, fonts, or plugins.
*   **DaisyUI:** DaisyUI themes can be configured in `tailwind.config.js` under the `daisyui` key.
*   **Content:** Edit the JSX files in `src/components/` to change text, images, and component layouts.

## Contact

For questions or support, please open an issue on the project's GitHub repository or contact [Your Name/Email/Link].
