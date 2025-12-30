import { exec } from 'node:child_process'

// Vite plugin to restart OpenDeck after building the plugin - You will want to symbolically link your plugin folder into the OpenDeck plugins folder for this to work

export default function RestartOpenDeck() {
  return {
    name: 'opendeck-restart-once',
    apply: 'build',
    closeBundle() {
      exec('opendeck --reload-plugin de.perdoctus.streamdeck.homeassistant.sdPlugin', (err, stdout, stderr) => {
        if (err) {
          console.warn('Open Deck plugin restart failed. Ensure the Open Deck app is running and the plugin is loaded.')
        } else {
          console.log(`Restarted OpenDeck Deck plugin.`)
        }
      })
    }
  }
}
