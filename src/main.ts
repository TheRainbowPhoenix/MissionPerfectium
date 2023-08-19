import Phaser from 'phaser'
import Level from './scenes/Level'
import Preload from './scenes/Preload'
import StartMenu from './scenes/StartMenu'
import MMScene from './scenes/MMScene'
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
  type: Phaser.AUTO,
  width: 1280, // WIDTH
  height: 800, // HEIGHT
  backgroundColor: '#2f2f2f',
  input: {
    gamepad: true,
  },
  physics: {
    default: 'arcade', // 'matter',
    matter: {
      debug: true,
    },
    arcade: {
      gravity: {
        y: 10, // 1
      },
      debug: true,
      debugShowBody: true,
      debugShowStaticBody: true,
    },
  },
  render: {
    pixelArt: false,
  },
  scale: {
    mode: Phaser.Scale.ScaleModes.FIT,
    autoRound: true,
    autoCenter: Phaser.Scale.Center.CENTER_BOTH,
  },
  scene: [Boot, Preload, Level, StartMenu, SettingsScreen, SaveScreen, MMScene],
})

game.scene.start('Boot')
