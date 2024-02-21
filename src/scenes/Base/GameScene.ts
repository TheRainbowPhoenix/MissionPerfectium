export default class GameScene extends Phaser.Scene {
  constructor(name: string) {
    super({
      key: name,
      physics: {
        default: 'matter',
        arcade: {
          tileBias: 140, // 20,
          gravity: {
            y: 3500, // 1
          },
          debug: true,
          debugShowBody: true,
          debugShowStaticBody: true,
        },
        matter: {
          gravity: { y: 0.1 },
          debug: true,
        },
      },
    })
  }
}
