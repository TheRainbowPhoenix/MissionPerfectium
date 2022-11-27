// You can write more code here

/* START OF COMPILED CODE */
import Phaser from 'phaser'
/* START-USER-IMPORTS */
import Physics from '../components/Physics'
import PhysicsBody from '../components/PhysicsBody'
/* END-USER-IMPORTS */

export default class Player extends Phaser.GameObjects.Sprite {
  constructor(scene: Phaser.Scene, x?: number, y?: number) {
    super(scene, x ?? 0, y ?? 0, 'chara')
    /* START-USER-CTR-CODE */
    const p_physics = new Physics(this)
    p_physics.bodyGravity = 500

    const p_physicsBody = new PhysicsBody(this)
    p_physicsBody.bodyX = 8
    p_physicsBody.bodyY = 2
    p_physicsBody.bodyWidth = 34
    p_physicsBody.bodyHeight = 60

    // Write your code here.
    // this.setVisible(false)
    // this.setActive(false)

    this.hurtFlag = false

    this.scene.time.addEvent({
      loop: true,
      delay: 500,
      callback: () => {
        this.hurtFlag = false
      },
    })

    /*
		this.once('ecs-world', (w: IWorld) => {
			this.world = w;
			this.setActive(false)
			this.setVisible(false)
			this.constructEnity(this.x, this.y)
		}, this)

		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this)
		*/

    this.scene.events.on('update', () => this.updatePlayer())

    // this.start(x, y)
    /* END-USER-CTR-CODE */
  }

  /* START-USER-CODE */
  public hurtFlag: boolean
  // private world?: IWorld
  // Write your code here.

  /**
   * @return {Phaser.Physics.Arcade.Body}
   */
  getBody() {
    return this.body
  }

  doFlipX(flip: boolean) {
    // debugger;
    if (flip) {
      /* @ts-ignore */
      this.body.setOffset(64 - this.body.width - 8, 2)
    } else {
      /* @ts-ignore */
      this.body.setOffset(8, 2)
    }
    this.flipX = flip
  }

  updatePlayer() {
    if (this.hurtFlag) {
      console.log(`Hurt !`)
      // this.play("player/hurt/player-hurt", true);
    }
  }
  /*
	start()
	{
		
	}

	constructEnity(x: number = 0, y: number = 0)
	{
		if(!this.world)
		{
			return
		}

		const tank = addEntity(this.world)

		console.log(`tank: ${tank}`)

		const compList = [
			Velocity,
			Position,
			Rotation,
			MatterSprite,
			Input,
			Player
		]

		compList.forEach(comp => {
			if(!this.world)
			{
				return
			}
			addComponent(this.world, comp, tank)
		})

		MatterSprite.texture[tank] = Textures.TankBlue
		Position.x[tank] = x
		Position.y[tank] = y

	}
	*/

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
