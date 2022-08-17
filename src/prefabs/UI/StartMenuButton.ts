
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import InteractiveObject from "../../components/InteractiveObject";
import MouseHandler from "../../components/MouseHandler";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class StartMenuButton extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// shadow_container
		const shadow_container = scene.add.container(1, 23);
		this.add(shadow_container);

		// poly_shadow_2
		const poly_shadow_2 = scene.add.polygon(0, 2, "0 24 0 55 343 55 360 38 360 16 8 16");
		poly_shadow_2.setOrigin(0, 1);
		poly_shadow_2.alpha = 0.1;
		poly_shadow_2.isFilled = true;
		poly_shadow_2.fillColor = 1319480;
		shadow_container.add(poly_shadow_2);

		// poly_shadow
		const poly_shadow = scene.add.polygon(1, 1, "0 23 0 53 342 53 358 37 358 16 7 16");
		poly_shadow.setOrigin(0, 1);
		poly_shadow.alpha = 0.1;
		poly_shadow.isFilled = true;
		poly_shadow.fillColor = 1319480;
		shadow_container.add(poly_shadow);

		// poly_shadow_1
		const poly_shadow_1 = scene.add.polygon(2, 0, "0 22 0 51 341 51 356 36 356 16 6 16");
		poly_shadow_1.setOrigin(0, 1);
		poly_shadow_1.alpha = 0.1;
		poly_shadow_1.isFilled = true;
		poly_shadow_1.fillColor = 1319480;
		shadow_container.add(poly_shadow_1);

		// poly_bg_border
		const poly_bg_border = scene.add.polygon(4, 22, "0 21 0 49 340 49 354 35 354 16 5 16");
		poly_bg_border.setOrigin(0, 1);
		poly_bg_border.isFilled = true;
		poly_bg_border.fillColor = 737643;
		this.add(poly_bg_border);

		// poly_bg_color
		const poly_bg_color = scene.add.polygon(6, 20, "0 20 0 45 337 45 350 32 350 16 4 16");
		poly_bg_color.setOrigin(0, 1);
		poly_bg_color.isFilled = true;
		poly_bg_color.fillColor = 1843240;
		poly_bg_color.strokeColor = 737643;
		poly_bg_color.lineWidth = 2;
		this.add(poly_bg_color);

		// btn_text
		const btn_text = scene.add.text(48, 10, "", {});
		btn_text.text = "Button text";
		btn_text.setStyle({ "color": "#58e6f3", "fontFamily": "Rajdhani", "fontSize": "22px" });
		this.add(btn_text);

		// this (components)
		new InteractiveObject(this);
		const thisMouseHandler = new MouseHandler(this);
		thisMouseHandler.onClick = () => {this.onClick() };
		thisMouseHandler.onHover = () => {this.doBtnHover()};
		thisMouseHandler.onOut = () => {this.doBtnOut()};

		this.poly_bg_border = poly_bg_border;
		this.poly_bg_color = poly_bg_color;
		this.btn_text = btn_text;
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		this.setInteractive(new Phaser.Geom.Rectangle(4,4,352,32), Phaser.Geom.Rectangle.Contains)

		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	private poly_bg_border: Phaser.GameObjects.Polygon;
	private poly_bg_color: Phaser.GameObjects.Polygon;
	private btn_text: Phaser.GameObjects.Text;
	public btn_label: string = "Button text";
	public onClick: ()=>void = () => {};

	/* START-USER-CODE */
	private _btn_selected: boolean = false;

	awake() {
		this.btn_text.text = this.btn_label || this.btn_text.text;

		this.on("pointerup", () => {
			console.log("this pointerup");
		});
	}

	doSelect(select: boolean) {
		if (select && !this._btn_selected) {
			this._btn_selected = true;

			this.poly_bg_border.fillColor = 0x21b9f4;
			// this.poly_bg_color.fillColor = 0x21b9f4;
			this.btn_text.setColor("#0f1319");

			this.poly_bg_color.scene.add.tween({
				targets: this.poly_bg_color,
				alpha: {from: 1, to: 0},
				// props: {
				// 	y: "-=" + this.offset,
				// },
				ease: 'Cubic', //'Elastic',
				yoyo: false,
				repeat: 0,
				duration: 800
			});
		}

		if (!select) {
			this._btn_selected = false;

			this.poly_bg_border.fillColor = 0x0b416b;
			// this.poly_bg_color.fillColor = 0x1c2028;

			this.poly_bg_color.scene.add.tween({
				targets: this.poly_bg_color,
				alpha: {from: 0, to: 1},
				// props: {
				// 	y: "-=" + this.offset,
				// },
				ease: 'Cubic',
				yoyo: false,
				repeat: 0,
				duration: 800
			});

			this.btn_text.setColor("#58e6f3");
		}
	}

	doBtnHover() {
		this.doSelect(true);
	}

	doBtnOut() {
		this.doSelect(false);
	}

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
