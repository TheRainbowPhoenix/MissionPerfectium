
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import StartMenuButton from "../prefabs/UI/StartMenuButton";
import StartSceneOnClick from "../components/StartSceneOnClick";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SettingsScreen extends Phaser.Scene {

	constructor() {
		super("SettingsScreen");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// bg_rect
		const bg_rect = this.add.rectangle(0, 0, 1600, 900);
		bg_rect.setOrigin(0, 0);
		bg_rect.isFilled = true;
		bg_rect.fillColor = 987929;

		// startMenuButton
		const startMenuButton = new StartMenuButton(this, 391, 297);
		this.add.existing(startMenuButton);

		// startMenuButton_1
		const startMenuButton_1 = new StartMenuButton(this, 389, 351);
		this.add.existing(startMenuButton_1);

		// startMenuButton_2
		const startMenuButton_2 = new StartMenuButton(this, 389, 405);
		this.add.existing(startMenuButton_2);

		// startMenuButton (prefab fields)
		startMenuButton.btn_label = "Back Main Menu";

		// startMenuButton (components)
		const startMenuButtonStartSceneOnClick = new StartSceneOnClick(startMenuButton);
		startMenuButtonStartSceneOnClick.sceneKey = "StartMenu";

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
