
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import StartMenuButton from "../prefabs/UI/StartMenuButton";
import StartSceneOnClick from "../components/StartSceneOnClick";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class StartMenu extends Phaser.Scene {

	constructor() {
		super("StartMenu");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// bg_rect
		const bg_rect = this.add.rectangle(800, 450, 1600, 900);
		bg_rect.isFilled = true;
		bg_rect.fillColor = 987929;

		// image_1
		const image_1 = this.add.image(802, 451, "waifu_bg_2");
		image_1.scaleX = 0.85;
		image_1.scaleY = 0.85;
		image_1.alphaBottomLeft = 0;

		// actionable_layer
		const actionable_layer = this.add.layer();

		// container_2
		const container_2 = this.add.container(80, 620);
		actionable_layer.add(container_2);

		// NewGameBtn
		const newGameBtn = new StartMenuButton(this, 0, 0);
		container_2.add(newGameBtn);

		// ContinueBtn
		const continueBtn = new StartMenuButton(this, 0, 40);
		container_2.add(continueBtn);

		// SettingsBtn
		const settingsBtn = new StartMenuButton(this, 0, 80);
		container_2.add(settingsBtn);

		// BonusBtn
		const bonusBtn = new StartMenuButton(this, 0, 120);
		container_2.add(bonusBtn);

		// QuitBtn
		const quitBtn = new StartMenuButton(this, 0, 160);
		container_2.add(quitBtn);

		// lists
		const menuButtons = [newGameBtn, continueBtn, settingsBtn, bonusBtn, quitBtn];

		// newGameBtn (prefab fields)
		newGameBtn.btn_label = "New Game Plus";
		newGameBtn.onClick = () => {};

		// continueBtn (prefab fields)
		continueBtn.btn_label = "Continue";

		// settingsBtn (prefab fields)
		settingsBtn.btn_label = "Settings";

		// settingsBtn (components)
		const settingsBtnStartSceneOnClick = new StartSceneOnClick(settingsBtn);
		settingsBtnStartSceneOnClick.sceneKey = "SettingsScreen";

		// bonusBtn (prefab fields)
		bonusBtn.btn_label = "Bonuses";

		// quitBtn (prefab fields)
		quitBtn.btn_label = "Quit Game";

		this.menuButtons = menuButtons;

		this.events.emit("scene-awake");
	}

	private menuButtons!: StartMenuButton[];

	/* START-USER-CODE */

	private cursors!: Phaser.Types.Input.Keyboard.CursorKeys
	private menuButtonsIndex!: number
	private mypad?: Phaser.Input.Gamepad.Gamepad
	private lastGamepadKey?: number
	private emitter?: any

	// Write your code here

	create() {

		this.editorCreate();

		this.bindKeys();

		this.setupFx();
	}

	bindKeys() {

		this.cursors = this.input.keyboard.createCursorKeys()
		this.menuButtonsIndex = 0

		// this.wasd = {
		// 	jump: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE, true),
		// 	left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT, true),
		// 	right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT, true),
		// 	crouch: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN, true)
		// };

		this.menuButtons[this.menuButtonsIndex].doSelect(true)

		this.mypad = this.input.gamepad.pad1
	}

	setupFx() {
		let particles = this.add.particles('star')

		this.emitter = particles.createEmitter({
			speed: 100,
			gravityY: 200,
			lifespan: {min: 500, max: 1500},
			blendMode: 'ADD'
		})
		// this.emitter.startFollow(this.menuButtons[this.menuButtonsIndex]);
		this.emitter.stop();
	}

	selectButton(order: number) {
		if (this.menuButtons.length == 0) {
			return
		}

		if (order == 0) {
			console.log("Do button click !")
		} else {
			console.log(this.menuButtonsIndex)
			this.menuButtons[this.menuButtonsIndex].doSelect(false);
			this.menuButtonsIndex = (this.menuButtons.length + this.menuButtonsIndex + order) % this.menuButtons.length;
			console.log(this.menuButtonsIndex)
			this.menuButtons[this.menuButtonsIndex].doSelect(true);
		}
	}

	update(t: number, dt: number) {
		if (this.input.gamepad.pad1 && !this.mypad) {
			this.mypad = this.input.gamepad.pad1
		}

		let upJustPressed = Phaser.Input.Keyboard.JustDown(this.cursors.up!)
		let downJustPressed = Phaser.Input.Keyboard.JustDown(this.cursors.down!)
		let spaceJustPressed = Phaser.Input.Keyboard.JustDown(this.cursors.space!)

		if (this.mypad) {
			if (this.mypad.leftStick.y < -0.4 || this.mypad.leftStick.y > 0.4 || this.mypad.isButtonDown(0)) {
				if (!this.lastGamepadKey || (this.lastGamepadKey > 0 && t - this.lastGamepadKey > 200)) {
					upJustPressed = upJustPressed || this.mypad.leftStick.y < -0.4
					downJustPressed = downJustPressed || this.mypad.leftStick.y > 0.4
					spaceJustPressed = spaceJustPressed || this.mypad.isButtonDown(0)



					this.lastGamepadKey = t
				}
			} else {

			}
		}

		if (upJustPressed || downJustPressed || spaceJustPressed) {
			let lastitem = (this.menuButtons.length + this.menuButtonsIndex +1) % this.menuButtons.length 
			this.emitter.setPosition(
				this.menuButtons[lastitem].parentContainer.x,
				this.menuButtons[lastitem].parentContainer.y + this.menuButtons[lastitem].y + 24
			)
			// this.emitter.startFollow(this.menuButtons[this.menuButtonsIndex]);
			this.emitter.start();
		} else {
			this.emitter.stop();
		}






		if (upJustPressed)
		{
			console.log("up");
			this.selectButton(-1);
		}
		else if (downJustPressed)
		{
			console.log(t, dt)
			console.log("down");
			this.selectButton(1);
		}
		else if (spaceJustPressed)
		{
			console.log("space");
			this.selectButton(0);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
