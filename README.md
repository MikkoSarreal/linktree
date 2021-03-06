# Linktree Frontend Assesment

## Requirements

* Node 14 or later

## Installation
1. Make sure that [Node.js](https://nodejs.org/en/download/) is installed and up to date
2. Clone this repo
3. `cd linktree`
4. `npm install`

## Running localhost

1. Start the app by opening a new terminal in the same folder and run `npm start`.  When it's ready the app should start in [http://localhost:3000/](http://localhost:3000/).

## Testing

Unit testing can be started by running `npm test` in the app root folder.

## Future Improvements
* Improve Music player to use html audio element for fine grain control
* Use context to store active states and current music platform choice
* Improve accessbility
* Improve responsiveness
* Fix issues with contrast (logo text, username) incase the background colour is dark
* Handle Errors
* Setup linting and Preetier
* Animations & Transitions

## Decisions
* Utilized css variables instead of library/framework-specific code (styled-components, jss) to apply global styles. This is to make any transistion to different code easier if we do decide in the future.