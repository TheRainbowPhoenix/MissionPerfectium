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

		// actions
		const actions = this.add.container(80, 820);

		// SelectBox
		const selectBox = this.add.container(0, 0);
		actions.add(selectBox);

		// SelectText
		const selectText = this.add.text(32, 0, "", {});
		selectText.setOrigin(0, 0.5);
		selectText.text = "Select";
		selectText.setStyle({ "fontFamily": "Rajdhani", "fontSize": "24px" });
		selectBox.add(selectText);

		// a_tile_action
		const a_tile_action = this.add.tileSprite(0, 0, 47, 47, "JoystickAtlas_Big", 10);
		a_tile_action.tileScaleX = 0.5;
		a_tile_action.tileScaleY = 0.5;
		selectBox.add(a_tile_action);

		// CancelBox
		const cancelBox = this.add.container(150, 0);
		actions.add(cancelBox);

		// CancelText
		const cancelText = this.add.text(32, 0, "", {});
		cancelText.setOrigin(0, 0.5);
		cancelText.text = "Cancel";
		cancelText.setStyle({ "fontFamily": "Rajdhani", "fontSize": "24px" });
		cancelBox.add(cancelText);

		// b_tile_action
		const b_tile_action = this.add.tileSprite(0, 0, 47, 47, "JoystickAtlas_Big", 11);
		b_tile_action.tileScaleX = 0.5;
		b_tile_action.tileScaleY = 0.5;
		cancelBox.add(b_tile_action);

		// DeleteBox
		const deleteBox = this.add.container(300, 0);
		actions.add(deleteBox);

		// DeleteText
		const deleteText = this.add.text(32, 0, "", {});
		deleteText.setOrigin(0, 0.5);
		deleteText.text = "Delete";
		deleteText.setStyle({ "fontFamily": "Rajdhani", "fontSize": "24px" });
		deleteBox.add(deleteText);

		// y_tile_action
		const y_tile_action = this.add.tileSprite(0, 0, 47, 47, "JoystickAtlas_Big", 13);
		y_tile_action.tileScaleX = 0.5;
		y_tile_action.tileScaleY = 0.5;
		deleteBox.add(y_tile_action);

		// lists
		const saveSlots = [startMenuButton_2, startMenuButton_1, startMenuButton];

		// startMenuButton (prefab fields)
		startMenuButton.btn_label = "Back Main Menu";

		// startMenuButton (components)
		const startMenuButtonStartSceneOnClick = new StartSceneOnClick(startMenuButton);
		startMenuButtonStartSceneOnClick.sceneKey = "StartMenu";

		this.saveSlots = saveSlots;

		this.events.emit("scene-awake");
	}

	private saveSlots!: StartMenuButton[];

	/* START-USER-CODE */

  // Write your code here

  create() {
    this.editorCreate()

    console.log(this.saveSlots)
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
