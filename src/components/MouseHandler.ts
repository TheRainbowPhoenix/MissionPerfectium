
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MouseHandler extends UserComponent {

	constructor(gameObject: Phaser.GameObjects.Container) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__MouseHandler"] = this;

		/* START-USER-CTR-CODE */

		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Container): MouseHandler {
		return (gameObject as any)["__MouseHandler"];
	}

	private gameObject: Phaser.GameObjects.Container;
	public onClick: ()=>void = () => {};
	public onHover: ()=>void = () => {};
	public onOut: ()=>void = () => {};

	/* START-USER-CODE */

	start() {

		this.gameObject.on("pointerup", () => {
			this.onClick();
		});

		this.gameObject.on("pointerover", () => {
			this.onHover();
		});

		this.gameObject.on("pointerout", () => {
			this.onOut();
		});
	}

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
