# Setup: 
 - ##### Requirements
    - VS Code
    - Node: "15.6.0"
    - React: "16.13.1"
    - EXPO version: "~40.0.0"
    
# Run instructions

commands -

```sh
cd "~/TestProject"
yarn
expo start
```

# Directory structure
```sh

├── App
│   ├── Constants
│   │   ├── Colors.js
│   │   └── Fonts.js
│   ├── index.js
│   ├── Navigation
│   │   ├── NavigatorFactory.js
│   │   └── screens.json
│   ├── Network
│   │   └── WS.js
│   ├── Reducers
│   │   ├── index.js
│   │   └── loading.js
│   ├── Screens
│   │   └── Trading
│   │       ├── Components
│   │       │   ├── Accordion.js
│   │       │   ├── OrderBookHeader.js
│   │       │   ├── OrderBook.js
│   │       │   ├── TickerView.js
│   │       │   ├── TradesHeader.js
│   │       │   └── Trades.js
│   │       └── index.js
│   └── Store.js
├── app.json
├── assets
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash.png
├── babel.config.js
├── package.json
└── yarn.lock

```

The directory structure is described below:

- components: Contains all the reusable components in the application.
- screens: Contains screens/views (Functional components).
- constants: Colors, Fonts etc.
- navigation: Application Navigation stack.
- services: Contains networking files like config, utils(Axios calls) etc.
- reducers: Contains all the reducer files used in state management(ToolKit).
- redux: Contains redux store.

### Note

- Application currently developed using JS, but for better type and compile time safety Typescript can be used
- For state management I have used Redux-toolkit kind of abstraction of redux. It is using Redux-thunk as a middleware. We can also use Redux-saga as per need.
- For linter I have used - eslint
- I have used React Hooks and functional components
