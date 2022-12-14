
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class StartSceneOnClick extends UserComponent {

	constructor(gameObject: Phaser.GameObjects.Container) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__StartSceneOnClick"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Container): StartSceneOnClick {
		return (gameObject as any)["__StartSceneOnClick"];
	}

	private gameObject: Phaser.GameObjects.Container;
	public sceneKey: string = "";

	/* START-USER-CODE */

	start() {		

		this.gameObject.on("pointerup", () => {

			this.scene.scene.start(this.sceneKey);
		});
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
