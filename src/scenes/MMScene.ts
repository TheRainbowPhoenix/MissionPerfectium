// You can write more code here

/* START OF COMPILED CODE */

import GameScene from "./Base/GameScene";
import InvisibleWallPrefab from "../prefabs/map/InvisibleWallPrefab";
import StairsPrefab from "../prefabs/map/StairsPrefab";
import FloorPrefab from "../prefabs/map/FloorPrefab";
import Hasumi from "../prefabs/Hasumi";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MMScene extends GameScene {

	constructor() {
		super("MMScene");

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// arcadeimage_1
		const arcadeimage_1 = this.physics.add.image(661, 750, "L_Ground_G03");
		arcadeimage_1.scaleX = 4;
		arcadeimage_1.body.setSize(303, 121, false);

		// l_Ground_G03
		const l_Ground_G03 = this.add.image(549, 195, "L_Ground_G03");
		l_Ground_G03.scaleY = 0.02;

		// ground_layer
		const ground_layer = this.add.layer();

		// invisibleWallPrefab
		const invisibleWallPrefab = new InvisibleWallPrefab(this, 1197, 331, 32, 1024);
		ground_layer.add(invisibleWallPrefab);

		// stairsPrefab
		const stairsPrefab = new StairsPrefab(this, 195, 563);
		ground_layer.add(stairsPrefab);

		// floorPrefab_1
		const floorPrefab_1 = new FloorPrefab(this, 1495, 750);
		ground_layer.add(floorPrefab_1);

		// floorPrefab
		const floorPrefab = new FloorPrefab(this, 490, 750);
		ground_layer.add(floorPrefab);

		// hasumi
		const hasumi = new Hasumi(this, 718, 526);
		this.add.existing(hasumi);

		// collider
		this.physics.add.collider(hasumi, arcadeimage_1);

		this.arcadeimage_1 = arcadeimage_1;
		this.ground_layer = ground_layer;
		this.hasumi = hasumi;

		this.events.emit("scene-awake");
	}

	private arcadeimage_1!: Phaser.Physics.Arcade.Image;
	private ground_layer!: Phaser.GameObjects.Layer;
	private hasumi!: Hasumi;

	/* START-USER-CODE */

  private cursors?: Phaser.Types.Input.Keyboard.CursorKeys
  private jumping?: boolean = false
  private flip!: boolean = false

  // Write your code here

  create() {
    this.editorCreate()

    const MAP_widthInPixels = 1800
    const MAP_heightInPixels = 1600

    this.matter.world.setBounds(
      0,
      0,
      MAP_widthInPixels,
      MAP_heightInPixels,
      32,
      true,
      true,
      false,
      true
    )

    this.arcadeimage_1.setCollideWorldBounds(true)

    // this.ground_layer.setCollisionByProperty({ collides: true })

    // this.hasumi.setCollideWorldBounds(true)
    // this.hasumi.setVelocity(0, 200)
    // this.hasumi.setBounce(0)

    this.cursors = this.input.keyboard.createCursorKeys()

    const camera = this.cameras.main
    // camera.startFollow(this.hasumi, false, 0.5, 0.5)
    // camera.setBounds(0, 0, MAP_widthInPixels, MAP_heightInPixels)
  }

  // JUMP : 1.5x player.height

  update(time, delta) {
    // const speed = 175
    // const prevVelocity = this.hasumi.body.velocity

    /*this.hasumi.setVelocity(0)

    if (this.cursors?.left.isDown) {
      this.hasumi.setVelocityX(-speed) // move left
    } else if (this.cursors?.right.isDown) {
      this.hasumi.setVelocityX(speed) // move right
    } else {
      if (this.hasumi.body.blocked.down) {
        this.hasumi.setVelocityX(0)
      }
    }*/

    /*
    if (
      (this.hasumi.body.velocity.x < 0 && !this.flip) ||
      (this.hasumi.body.velocity.x > 0 && this.flip)
    ) {
      this.flip = this.hasumi.body.velocity.x < 0
      this.hasumi.flipX = this.flip
    }

    if (this.hasumi.body.blocked.down) {
      this.hasumi.setTexture('down')
      this.jumping = false
    } else {
      if (this.hasumi.body.velocity.y > 0) {
        this.hasumi.setTexture('fall')
      }
    }
    */

    if (
      /*(*/ this.cursors?.space.isDown &&
      !this.jumping /*|| this.cursors?.up.isDown) &&
      this.hasumi.onFloor()*/
    ) {
      // this.hasumi.setTexture('jump')
      this.jumping = true
      // this.hasumi.setVelocityY(-1400) // jump up
    }
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
