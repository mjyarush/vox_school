import WaveSurfer from 'https://unpkg.com/wavesurfer.js@beta'
import TimelinePlugin from 'https://unpkg.com/wavesurfer.js@beta/dist/plugins/timeline.js'
import RegionsPlugin from 'https://unpkg.com/wavesurfer.js@beta/dist/plugins/regions.js'

const button = document.createElement('a')
button.textContent = 'Воспроизвести'
button.className += 'btn btn-alternative ml-2 text-white'
document.querySelector("#controls").appendChild(button);

const topTimeline = TimelinePlugin.create({
    height: 30,
    insertPosition: 'beforebegin',
    timeInterval: 0.4,
    primaryLabelInterval: 5,
    secondaryLabelInterval: 1,
    style: {
        fontSize: '20px',
        color: '#dd5e98',
    },
})

// Create a second timeline
const bottomTimline = TimelinePlugin.create({
    height: 30,
    timeInterval: 0.1,
    primaryLabelInterval: 1,
    style: {
        fontSize: '10px',
        color: '#6A3274',
    },
})
const wavesurfer = WaveSurfer.create({
    container: '#waveform',
    url: 'demo/Аудиодорожка-1.mp3',
    minPxPerSec: 50,
    plugins: [topTimeline, bottomTimline],
    height: 200,
    waveColor: '#1C125F',
    /** The color of the progress mask */
    progressColor: '#dd5e98',
    /** The color of the playpack cursor */
    cursorColor: '#ddd5e9',
    /** The cursor width */
    cursorWidth: 2,
    // Set a bar width
    barHeight: 0.6,
    barWidth: 3,
    // Optionally, specify the spacing between bars
    barGap: 1,
    // And the bar radius
    barRadius: 3,
})

wavesurfer.on('play', () => {
    button.textContent = 'Остановить'
})
// And when it's paused
wavesurfer.on('pause', () => {
    button.textContent = 'Воспроизвести'
})
// Subscribe to wavesurfer's `ready` event to know when we can interact with the player
wavesurfer.on('ready', () => {
    // Finally, inside the callback, we'll add a click listener to the button.
    button.addEventListener('click', () => {
        if (wavesurfer.isPlaying()) {
            wavesurfer.pause()
        } else {
            wavesurfer.play()
        }
    })
})