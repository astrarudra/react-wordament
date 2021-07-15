# Wordament - Built using ReactJS

Standalone frontend, developed in a 48h hackathron organised by IPSOS MMA.
## Published Link - [wordament.royin.in](https://wordament.royin.in/)
## Features
- Multi Game Modes - Classic, Scramble, Jump Around.
- Jumple Option with limits (if it becomes impossible to form words)
- Integrated logic for letter probability - letters which have high usage in the dictionary appear more commonly.
- Scoring System - Bigger words, higher the score.
- Bonus Score System - Score multipler for consequent word formations. 
- Multi Timer Modes & Grid Layouts.

## Implimentation Details
List of words are taken from  https://github.com/dwyl/english-words
A script is used to generate a json from the above indexed by 2 letter keys which hold the list of words. ([SCRIPTS/genWordsJson.js](https://github.com/astrarudra/react-wordament/blob/master/SCRIPTS/genWordsJson.js)).

## Tech
The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Simple barebore ReactJS. This is built rapidly for hackathon, so no flux architecture is used. App Js is the starting point and the primary state  maintained in the entire application. The other state is for the timer so that it does not refresh and compute the entire page.

## Development

Want to contribute? Great!
Open your favorite Terminal and run these commands.
```sh
npm install
npm run start
```
To run scripts, goto SCRIPTS folder and use node.
```sh
node [script.js]
```
## License

MIT