AFRAME.registerComponent('my-component', {
  schema: {
    color: { default: 'red' }
  },



  init: function () {
    var data = this.data;
    var el = this.el;
    console.log(el);
    var defaultColor = el.getAttribute('color');
    console.log(data);

    el.addEventListener('mouseenter', function () {
      el.setAttribute('color', data.color);
    });

    el.addEventListener('mouseleave', function () {
      el.setAttribute('color', defaultColor);
    });
  },



  remove: function () {
    // Do something the component or its entity is detached.
  },

  tick: function (time, timeDelta) {

  }
});
