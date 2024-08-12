# Real-Time Chat Application

This is a simple real-time chat application built using React, TypeScript, Vite, Redux, and Firebase. The application allows users to register, log in, and participate in a real-time chat with other users. Messages are synchronized in real-time using Firebase Firestore.

## Features

- **User Authentication**: Users can register and log in using their email and password.
- **Real-Time Chat**: Messages are displayed and synchronized in real-time.
- **Message Display**: Each message shows the sender's email and the timestamp.
- **State Management**: Redux is used for managing the application state.
- **TypeScript**: The entire project is written in TypeScript, providing type safety and better development experience.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A fast build tool and development server.
- **Redux**: A predictable state container for JavaScript apps.
- **Firebase**: A platform developed by Google for creating mobile and web applications.
  - **Firebase Authentication**: Used for user registration and authentication.
  - **Firebase Firestore**: Used for storing and syncing chat messages in real-time.
- **Tailwind CSS**: A utility-first CSS framework for styling.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **pnpm**: [Install pnpm](https://pnpm.io/installation)
- **Firebase Account**: Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/keskinkaan/real-time-chat-app.git
cd real-time-chat-app
```

2. Install the dependencies:

```bash
pnpm install
```

3. Set up Firebase Authentication and Firestore in your Firebase project.

- Go to the Firebase Console, create a new project, and add a web app.
- Enable Firebase Authentication with email and password.
- Enable Firebase Firestore.

4. Create a `.env` file in the root directory and add your Firebase configuration:

```env
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID
```

5. Start the development server:

```bash
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

The project is structured as follows:

- `src/`: Contains the source code of the application.
  - `components/`: React components like Chat, Login, and Register.
  - `redux/`: Redux store and slices.
  - `firebaseConfig.ts`: Firebase configuration and initialization.
- `public/`: Contains static files.
- `pnpm-lock.yaml`: The lockfile for pnpm.
- `tsconfig.json`: TypeScript configuration file.
- `vite.config.ts`: Vite configuration file.
- `README.md`: Project README file.

## Deployment

To build the project for production, run:

```bash
pnpm build
```

The build files will be generated in the dist/ directory, which can be deployed to a web server.

## License

This project is licensed under the MIT License. See the [MIT License](LICENSE).

## Acknowledgements

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Redux](https://redux.js.org/)
- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)
