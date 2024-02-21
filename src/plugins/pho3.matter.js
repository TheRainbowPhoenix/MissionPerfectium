// version: 1.0.0
// class MatterSprite extends Phaser.Physics.Matter.Sprite {
//   //   implements ISceneGameObject

//   constructor(
//     scene: Phaser.Physics.Matter.World,
//     x: number,
//     y: number,
//     texture: string | Phaser.Textures.Texture,
//     frame?: string | number,
//     options?: Phaser.Types.Physics.Matter.MatterBodyConfig
//   ) {
//     // constructor(scene, x, y, width, height) {
//     super(scene, x, y, texture, frame, options)
//     // scene.events.once('update', () => this.redraw())
//   }
//   redraw() {}
//   getRadius() {}

//   getEditorSupport() {}
// }

var phasereditor2d
;(function (phasereditor2d) {
  var phaser
  ;(function (phaser) {
    class PhaserPlugin extends colibri.Plugin {
      constructor() {
        super('pho3.phasereditor2d.phaser')
      }
      static getInstance() {
        return this._instance
      }
    }
    PhaserPlugin._instance = new PhaserPlugin()
    phaser.PhaserPlugin = PhaserPlugin
  })((phaser = phasereditor2d.phaser || (phasereditor2d.phaser = {})))
})(phasereditor2d || (phasereditor2d = {}))
