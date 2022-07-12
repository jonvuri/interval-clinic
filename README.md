# Interval Clinic

A single-page web app for exploring and training your ear to hear essential musical intervals in the common Western scale of 12-tone equal temperament.

![Screenshot](docs/screenshot.png)

## Features

- **Keyboard**: One octave of piano-style keys playable with mouse or keyboard (doubles as interval selection from the root note).
- **Waveform**: Visual display of the interval's wave phase with respect to the root note, showing how consonant it is - that is, how few cycles it takes for the phase to correlate again.
- **Interval details**: Detailed display of the interval's frequency and ratio with respect to the root note.
- **Tuning**: Toggle to switch between playing 12TET (normal piano tuning) or Just intonated intervals (mathematically perfect ratios), and display of each for comparison.
- **References**: Curated references from several genres for each ascending and descending interval, in order to help memorize them. References play as timestamped Youtube videos inline.
- **Trainer**: An automatic ear trainer that randomly cycles through the selected intervals and plays them while hidden, then reveals which interval was played. Configurable to play ascending, descending, unison, announce before or after, or all of the above.

## Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in interactive watch mode.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
