import Entity from './Core/Entity.js'
import './Components/myComponent.js'

// Adds an a-entity to the scene with given attributes
new Entity(
    {
        'my-component': '',
        'geometry': 'primitive:sphere; radius: 0.2',
        'material': 'emissive:#00ff66',
        'position': '0 1 -4',
        'light': 'type:point; intensity:1.0; color:#00ff66',
        'color': '#00ff66'
    }
)

AFRAME.registerComponent('thumbstick-logging', {
    init: function () {
        this.el.addEventListener('thumbstickmoved', this.logThumbstick);
        this.el.addEventListener('gripdown', (e) => { console.log("GRIP DOWN", e) });
        this.el.addEventListener('gripup', (e) => { console.log("GRIP UP", e) });
    },
    logThumbstick: function (evt) {
        if (evt.detail.y > 0.95) { console.log("DOWN"); }
        if (evt.detail.y < -0.95) { console.log("UP"); }
        if (evt.detail.x < -0.95) { console.log("LEFT"); }
        if (evt.detail.x > 0.95) { console.log("RIGHT"); }
    }
});