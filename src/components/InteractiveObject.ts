
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class InteractiveObject {

	constructor(gameObject: Phaser.GameObjects.Container) {
		this.gameObject = gameObject;
		(gameObject as any)["__InteractiveObject"] = this;

		/* START-USER-CTR-CODE */

		console.log(this.gameObject)
		this.gameObject.setInteractive();

		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Container): InteractiveObject {
		return (gameObject as any)["__InteractiveObject"];
	}

	private gameObject: Phaser.GameObjects.Container;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
