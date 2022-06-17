# GuestME Frontend

This is the frontend built using React for GuestME Web app. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

## Development Environment

Details about how to configure the development environment.

---

### Extension Installation

Please ensure the following extensions are installed:

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) (optional)

---

### VSCode Settings

Please open the settings.json file in your VSCode. You can do so by:

1. Press `Ctrl+Shift+p`
2. Enter `settings.json`
3. Select: `Preferences: Open Settings (JSON)`

Then copy and paste the following into the file and save:

```
// <-- EDITOR --> //
  "editor.tabSize": 2,
  "editor.formatOnPaste": true,
  "editor.formatOnType": true,
  "editor.formatOnSave": true,
  "editor.bracketPairColorization.enabled": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.addMissingImports": true,
    "source.organizeImports": true,
    "source.autoFixOnSave": true
  },
  "editor.suggestSelection": "first",
  "diffEditor.ignoreTrimWhitespace": false,
  "files.trimTrailingWhitespace": true,
  // <-- ESLINT --> //
  "eslint.quiet": false,
  "eslint.format.enable": true,
  // <-- LANGUAGE-SPECIFIC SETTINGS --> //
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets": true,
  "javascript.preferences.quoteStyle": "single",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[javascriptreact]": {
    "editor.formatOnSave": true
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
```

**Warning!** you must install the extensions first otherwise VSCode may complain that some of the settings do not exist.

---

### Env File

_More Options will be added later_

Default values are shown inside brackets()

| Key                      | Value                                                 |
| ------------------------ | ----------------------------------------------------- |
| REACT_APP_MODE           | (DEVELOPMENT) \| PRODUCTION                           |
| REACT_APP_ENDPOINT       | Production Server Endpoint (guestmeapp.herokuapp.com) |
| REACT_APP_PROTOCOL       | Production Server Protocol [http \| (https)]          |
| REACT_APP_LOCAL_ENDPOINT | Local Server Endpoint (localhost:8080)                |
| REACT_APP_LOCAL_PROTOCOL | Local Server Protocol [(http) \| https]               |

## Note

The app mode decides which server the react app will try to connect for backend. If the value for `REACT_APP_MODE` is `DEVELOPMENT` it will look for local backend server running at port `8080`. If you want to connect to `heroku` server use `REACT_APP_MODE` as `PRODUCTION`

### Scripts

The following is a summary of the scripts (more will be added later):

| Script | Command       | Description                         |
| ------ | ------------- | ----------------------------------- |
| test   | npm run test  | Not currently implemented.          |
| dev    | npm run start | Starts the development environment. |
| build  | npm run build | Builds the application.             |

---

### Running The Project

Ensure you first run `npm install`. Then there are two methods to run the app:

**Development**

1. Ensure your machine is connected to the Internet for API server access. Alternatively you can also run the backend server on localhost.

2. `npm run start` will start the application in development mode. The application should hot reload after saving changes to a file

**Production**

1. `npm run build` to build the application

Please work off of the `dev` branch. Changes on `main` branch are ready for live deployment.

---

### Testing

When running the start script, it should automatically open the app in default web browser(**Chrome Recommended**)

---
