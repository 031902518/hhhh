
cc.Class({
    extends: cc.Component,

    properties: {
        begin1:cc.Button,

    },
    // onLoad () {},

    start () {
        this.begin1.node.on('click', this.callback1, this);
    },
    callback1: function (button1) {
        cc.director.loadScene("lndex")
    },

    // update (dt) {},
});
