## Stocks Prediction

### Quick Start

-   Run `yarn` to install dependencies.
-   Run `yarn start:dev` to start the react client locally at port 8090. It will also load the app in the browser.
-   Run `yarn start` to start express server and serve graphql api and prod built of react app at port 8091.
-   Run `yarn build` to build prod build of react

<br />

### Project Structure

-   This project is bootstrapped using [Create React App](https://github.com/facebook/create-react-app).
-   **Flux** is used for state management and all Flux specific files are located inside `src/flux`. Transitioning to a more robust solution such as Redux is also fairly simple.
-   All primary templates are located inside `src/views`.
-   There is only one single layout defined (Default) inside `src/layouts`, however, the current structure provides an easy way of extending the UI kit.
-   The `src/components` directory hosts all template-specific subcomponents in their own subdirectory.
-   The layout styles inherited from Shards Dashboard are pulled in from the `src/shards-dashboard` submodule inside `src/App.js`.
-   Other extra styles specific to the libraries used are located inside `src/assets`.
-   The `src/utils` directory contains generic Chart.js utilities.

<br />

### Built using

-   [Shards React](https://github.com/designrevision/shards-react)
-   [Chart.js](https://www.chartjs.org/)
-   [Flux](https://facebook.github.io/flux/)
-   [No UI Slider](https://refreshless.com/nouislider/)
-   [React Datepicker](https://www.npmjs.com/package/react-datepicker)
-   [Quill](https://quilljs.com/)

<br />

### Changelog

Please check out the [CHANGELOG](CHANGELOG.md).
