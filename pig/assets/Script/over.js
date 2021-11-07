import{sum1,sum2}from"./mopai.js"
cc.Class({
    extends: cc.Component,

    properties: {
        result1:cc.Label,
        result2:cc.Label,
        result:cc.Label,
        ReturnMainMenu: cc.Button,
    },

     onLoad () {

     },

    start () {
        //输出结果
        this.result1.string="Player1:"+sum1;
        this.result2.string="Player2:"+sum2;
        if(sum1>sum2){
            this.result.string="Player2 胜利";
        }
        else if(sum2>sum1){
            this.result.string="Player1 胜利";

        }
        else{
            this.result.string="平局";
        }
        //返回按钮
        this.ReturnMainMenu.node.on('click', this.callback1, this);


    },
    callback1: function (button1) {
        cc.director.loadScene("initialization")
    },








    // update (dt) {},
});
