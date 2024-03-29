// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Player from "../prefabs/Player";
/* START-USER-IMPORTS */
// import { createWorld, IWorld } from "bitecs";
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
    // Write your code here.
    // this.world = createWorld()
    /* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// map
		const map = this.add.tilemap("test");
		map.addTilesetImage("tiles", "tiles");

		// text
		const text = this.add.text(397, 229, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "TODO: My Game ";
		text.setStyle({ "align": "center", "fontFamily": "Arial", "fontSize": "3em" });

		// player
		const player = new Player(this, 96, 220);
		this.add.existing(player);

		// layer
		const layer = map.createLayer("Tile Layer 1", ["tiles"], 0, 0);

		// lists
		const items: Array<any> = [];
		const enemies: Array<any> = [];

		this.player = player;
		this.layer = layer;
		this.map = map;
		this.items = items;
		this.enemies = enemies;

		this.events.emit("scene-awake");
	}

	private player!: Player;
	private layer!: Phaser.Tilemaps.TilemapLayer;
	private map!: Phaser.Tilemaps.Tilemap;
	private items!: Array<any>;
	private enemies!: Array<any>;

	/* START-USER-CODE */
  /*init()
	{
		this.cursors = this.input.keyboard.createCursorKeys()

		const onAfterUpdate = () => {
			if (!this.afterPhysicsPipeline || !this.world)
			{
				return
			}

			this.afterPhysicsPipeline(this.world)
		}

		this.matter.world.on(Phaser.Physics.Matter.Events.AFTER_UPDATE, onAfterUpdate)

		this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
			this.matter.world.off(Phaser.Physics.Matter.Events.AFTER_UPDATE, onAfterUpdate)
		})

	}
	*/

  // Write your code here
  create() {
    this.editorCreate()

    // this.initEnities()

    // create MatterSpriteSystem
    /*
		this.pipeline = pipe(
			createMatterSpriteSystem(this.matter, TextureKeys),
			createMatterStaticSpriteSystem(),
			createPlayerSystem(this.cursors),
			createSteeringSystem(5),
			createMatterPhysicsSystem()
		)

		this.afterPhysicsPipeline = pipe(
			createMatterPhysicsSyncSystem()
		)
		*/

    this.initColliders()

    this.bindKeys()

    this.initCamera()
  }

  initCamera() {
    const cam = this.cameras.main

    let cameraOptions = {
      x: 50, // x position of the camera (default = 0)
      y: 50, // y position of the camera (default = 0)
      width: 300, // width of the camera (default = game.config.width)
      height: 500, // height of the camera (default = game.config.height)
      top: 600, // Top bound of scroll (default = 0)
      bottom: 3175, // Bottom bound of scroll (default = 5000)
      wheel: true, // Does this camera use mouse wheel? (default = false)
      drag: 0.9, // Reduces the scroll speed per game step in 10%. (default = 0.95)
      minSpeed: 9, // Bellow this speed value (pixels/second), the scroll is stopped. (default = 4)
      snap: true, // Does this camera use snap points? (default = false)
      snapConfig: {
        // Defines snap points
        topMargin: 50, // y position of first snap point (default = 0)
        padding: 50, // Space in pixels between snap points (default = 20)
        deadZone: 0, // % of space between points not influenced by snap effect (0 - 1) (default = 0)
      },
    }

    // let myCamera = new ScrollingCamera(this, cameraOptions)

    const controlConfig = {
      camera: this.cameras.main,
      left: this.wasd.left,
      right: this.wasd.right,
      acceleration: 0.06,
      drag: 0.0005,
      maxSpeed: 1.0,
    }

    // TODO: fix the camera !!

    // let controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig)

    cam.setBounds(0, 0, this.layer.width, this.layer.height)
    // cam.setSize(640, 400)
    cam.setRoundPixels(true)

    cam.startFollow(this.player, true)
    // cam.startFollow(this.player, true, 1, 1, 8, 2)
    cam.setZoom(2)

    // cam.followOffset.set(-300, 0)
  }

  /*initEnities()
	{
		if(this.player)
		{
			this.player.emit('ecs-world', this.world)
		}
	}
	*/

  update() {
    /*
		if (!this.world || !this.pipeline)
		{
			return
		}
		*/

    this.movePlayer()

    const cam = this.cameras.main

    const col = Math.floor(this.player.x / cam.width)
    const row = Math.floor(this.player.y / cam.height)

    cam.scrollX = col * cam.width
    cam.scrollY = row * cam.height

    // this.pipeline(this.world)
  }

  movePlayer() {
    if (this.player.hurtFlag) {
      return
    }

    const body = this.player.getBody()

    const jumpDown = this.wasd.jump.isDown // || ControllerButton.getComponent(this.jump_button).isDown;
    const leftDown = this.wasd.left.isDown // || ControllerButton.getComponent(this.left_button).isDown;
    const rightDown = this.wasd.right.isDown // || ControllerButton.getComponent(this.right_button).isDown;

    /* @ts-ignore */
    if (jumpDown && body.onFloor()) {
      this.player.body.velocity.y = -270
    }

    var vel = 150

    if (leftDown) {
      this.player.body.velocity.x = -vel
      // this.player.play("player/run/player-run", true);
      this.player.doFlipX(true)
    } else if (rightDown) {
      this.player.body.velocity.x = vel
      // this.player.play("player/run/player-run", true);
      this.player.doFlipX(false)
    } else {
      this.player.body.velocity.x = 0

      if (this.wasd.crouch.isDown) {
        // this.player.play("player/crouch/player-crouch", true);
      } else {
        // this.player.play("player/idle/player-idle", true);
      }
    }
    // jump animation

    if (this.player.body.velocity.y < 0) {
      // this.player.play("player/jump/player-jump-1", true);
    } else if (this.player.body.velocity.y > 0) {
      // this.player.play("player/jump/player-jump-2", true);
    }
  }

  bindKeys() {
    this.wasd = {
      jump: this.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.SPACE,
        true
      ),
      left: this.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.LEFT,
        true
      ),
      right: this.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.RIGHT,
        true
      ),
      crouch: this.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.DOWN,
        true
      ),
    }
  }

  initColliders() {
    this.map.setCollision([
      257, 258, 259, 260, 389, 390, 769, 770, 771, 772, 1025, 1026, 1027, 1028,
      1153, 1154, 1155, 1156,
    ])
    this.setTopCollisionTiles([35, 36, 84, 86, 134, 135, 366, 367, 368, 262])

    this.physics.add.collider(this.player, this.layer)
    // this.physics.add.collider(this.enemies, this.layer);
    // this.physics.add.overlap(this.player, this.items, this.pickItem, null, this);
    // this.physics.add.overlap(this.player, this.enemies, this.checkAgainstEnemies, null, this);
  }

  /**
   * @param {number[]} tiles
   */
  setTopCollisionTiles(tiles: number[]) {
    const tileSet = new Set(tiles)

    for (let x = 0; x < this.map.width; x++) {
      for (let y = 0; y < this.map.height; y++) {
        const tile = this.layer.getTileAt(x, y)

        if (tile && tileSet.has(tile.index)) {
          tile.setCollision(false, false, true, false)
        }
      }
    }
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
