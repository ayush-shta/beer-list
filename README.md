# Beer List

## Running the app

1. Install dependencies with the following script in the project directory:

   #### `yarn`

2. To start the app you can run:

   #### `yarn dev`

   Runs the app in the development mode.\
   Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

   The page will reload if you make edits.\
   You will also see any lint errors in the console.

## Available Scripts

In the project directory, you can run:

### `yarn lint`

Runs eslint.\

### `yarn format`

Formats code with prettier\

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Project Structure Overview (From Root)

- (src/components)

  - Collection of generic UI components that can be shared across the app

- (src/constants)

  - Collection of global app constants
  - Contains app routes, configuration strings

- (src/modules)

  - Collection of UI pages specific to a module or feature
  - Components, services, constants, stores, and hooks related to the individual UI page

- (src/services)

  - Collection of services used throughout the app
  - https
    - Includes axios instance for making http calls

- App.tsx

  - App component that contains app's root level wrappers like react query's QueryClientProvider

- app-router.tsx

  - Route setup for react router

- main.tsx
  - App entry point
