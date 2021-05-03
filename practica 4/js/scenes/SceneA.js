import SceneB from './SceneB.js'

class SceneA extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'SceneA', active: true});
        this.i = 0;
    }

    preload()
    {
        this.load.image('fondo', 'assets/skys.png');
    }

    create ()
    {
        this.add.image(400, 300, 'fondo');

        this.hsv = Phaser.Display.Color.HSVColorWheel();
        //  Rainbow Stroke
        this.text2 = this.add.text(105, 250, 'Empezar', { font: "80px Arial Black", fill: "#fff" });

        this.input.on('pointerdown', function () {
            this.cameras.main.fadeOut(250, 0, 0, 0);
        }, this);

        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.isSleeping('SceneA');
            this.scene.add('SceneB', new SceneB, true, {x:0,y:0});
            this.scene.moveUp('SceneB');
        })

    }

    update ()
    {
        const top = this.hsv[this.i].color;
        const bottom = this.hsv[359 - this.i].color;

        this.text2.setTint(top, top, bottom, bottom);
        this.i++;

        if (this.i === 360)
        {
            this.i = 0;
        }
    }
}
export default SceneA;