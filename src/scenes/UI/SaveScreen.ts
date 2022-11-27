
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import StartMenuButton from "../../prefabs/UI/StartMenuButton";
import StartSceneOnClick from "../../components/StartSceneOnClick";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SaveScreen extends Phaser.Scene {

	constructor() {
		super("SaveScreen");

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

		// loadSaveSlot0
		const loadSaveSlot0 = new StartMenuButton(this, 395, 372);
		this.add.existing(loadSaveSlot0);

		// loadSaveSlot1
		const loadSaveSlot1 = new StartMenuButton(this, 398, 415);
		this.add.existing(loadSaveSlot1);

		// loadSaveSlot2
		const loadSaveSlot2 = new StartMenuButton(this, 401, 467);
		this.add.existing(loadSaveSlot2);

		// startMenuButton (prefab fields)
		startMenuButton.btn_label = "Back Main Menu";

		// startMenuButton (components)
		const startMenuButtonStartSceneOnClick = new StartSceneOnClick(startMenuButton);
		startMenuButtonStartSceneOnClick.sceneKey = "StartMenu";

		// loadSaveSlot0 (prefab fields)
		loadSaveSlot0.btn_label = "Save 0";

		// loadSaveSlot1 (prefab fields)
		loadSaveSlot1.btn_label = "Save 1";

		// loadSaveSlot2 (prefab fields)
		loadSaveSlot2.btn_label = "Save 2";

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
