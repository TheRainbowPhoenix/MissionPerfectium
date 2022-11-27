import Phaser from 'phaser'
import Level from './scenes/Level'
import Preload from './scenes/Preload'
import StartMenu from './scenes/StartMenu'
import SettingsScreen from './scenes/SettingsScreen'
import SaveScreen from './scenes/UI/SaveScreen'

class Boot extends Phaser.Scene {
  constructor() {
    super('Boot')
  }

  preload() {
    this.load.pack('pack', 'assets/preload-asset-pack.json')
  }

  create() {
    this.scene.start('Preload')
  }
}

const game = new Phaser.Game({
  width: 1280,
  height: 800,
  backgroundColor: '#2f2f2f',
  input: {
    gamepad: true,
  },
  physics: {
    default: 'arcade', // 'matter',
    matter: {
      gravity: { y: 0 },
      debug: true,
    },
	arcade: {
	  debug: true
	},
  },
  render: {
	pixelArt: true
  },
  scale: {
    mode: Phaser.Scale.ScaleModes.FIT,
    autoCenter: Phaser.Scale.Center.CENTER_BOTH,
  },
  scene: [Boot, Preload, Level, StartMenu, SettingsScreen, SaveScreen],
})

game.scene.start('Boot')
