# My Portfolio

This is a personal portfolio website showcasing my development skills and projects. Built with modern web technologies, it provides a responsive and engaging experience for visitors.

## Features

*   **Responsive Design**: Optimized for various screen sizes, from mobile to desktop.
*   **Interactive UI**: Engaging user interface built with React and Radix UI components.
*   **Smooth Animations**: Utilizes the Motion library for fluid and eye-catching animations.
*   **Project Showcase**: Dedicated section to highlight key projects with details and links.
*   **Contact Form**: (Assuming there's a contact form based on `Contact.tsx`)
*   **Skills Section**: (Assuming there's a skills section based on `Skills.tsx`)

## Technologies Used

*   **Frontend**:
    *   [React](https://react.dev/) - A JavaScript library for building user interfaces.
    *   [TypeScript](https://www.typescriptlang.org/) - A superset of JavaScript that adds static types.
    *   [Vite](https://vitejs.dev/) - A fast build tool that provides a lightning-fast development experience.
    *   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.
    *   [Radix UI](https://www.radix-ui.com/) - A collection of unstyled, accessible UI components for building high-quality design systems.
    *   [Motion](https://www.framer.com/motion/) - A production-ready motion library for React.
    *   [Lucide React](https://lucide.dev/) - A beautiful & consistent icon toolkit.

## Installation

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   npm (Node Package Manager)
    ```bash
    npm install npm@latest -g
    ```

### Clone the repository

```bash
git clone https://github.com/your-username/My-Portfolio.git # Replace with your actual repository URL
cd My-Portfolio
```

### Install dependencies

```bash
npm install
```

## Usage

### Development Server

To run the project in development mode:

```bash
npm run dev
```

This will start the development server, usually at `http://localhost:5173`.

### Build for Production

To build the project for production:

```bash
npm run build
```

This will create a `build` directory with the optimized production-ready files.

### Deployment

This project uses `gh-pages` for deployment.

```bash
npm run deploy
```

## Project Structure

```
.
├── public/
├── src/
│   ├── assets/                 # Images and other static assets
│   ├── components/             # Reusable React components
│   │   ├── figma/              # Components possibly related to Figma designs
│   │   └── ui/                 # UI components (Radix UI, custom)
│   ├── styles/                 # Global styles (Tailwind CSS)
│   ├── App.tsx                 # Main application component
│   ├── Attributions.md         # (If it contains attributions)
│   ├── index.css               # Main CSS file
│   └── main.tsx                # Entry point of the React application
├── .gitignore                  # Specifies intentionally untracked files to ignore
├── index.html                  # Main HTML file
├── package.json                # Project metadata and dependencies
├── package-lock.json           # Records the exact versions of dependencies
├── tsconfig.json               # TypeScript configuration for the project
├── tsconfig.node.json          # TypeScript configuration for Node.js environment
└── vite.config.ts              # Vite build configuration
```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information. (Assuming MIT License, you might need to create a LICENSE file)


