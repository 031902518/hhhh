let myset = new Set([]);
let arandom, loc = 0, flag = 0;//flag判断牌堆里有没有牌,arandom[loc]是还未摸出的最顶一张牌号
let centertop,cnum=0;
let cnt3=0,cnt4=0,cnt5=0,cnt6=0;
let cnt7=0,cnt8=0,cnt9=0,cnt10=0;
let sum1=0,sum2=0;
cc.Class({
    extends: cc.Component,

    properties: {
        button1: cc.Button,
        button2: cc.Button,
        btn3: cc.Button,
        btn4: cc.Button,
        btn5: cc.Button,
        btn6: cc.Button,
        btn7: cc.Button,
        btn8: cc.Button,
        btn9: cc.Button,
        btn10: cc.Button,
        card: {
            default: [],
            type: [cc.Node],
            name: "string"
        },
        center: {//中心区卡牌
            default: [],
            type: [cc.Node],
            name: "string",
        },
        p13:  {
            default: [],
            type: [cc.Node],
            name: "string"
        },
        p14: {
            default: [],
            type: [cc.Node],
            name: "string"
        },
        p15: {
            default: [],
            type: [cc.Node],
            name: "string"
        },
        p16: {
            default: [],
            type: [cc.Node],
            name: "string"
        },
        p27: {
            default: [],
            type: [cc.Node],
            name: "string"
        },
        p28: {
            default: [],
            type: [cc.Node],
            name: "string"
        },
        p29: {
            default: [],
            type: [cc.Node],
            name: "string"
        },
        p20: {
            default: [],
            type: [cc.Node],
            name: "string"
        },
        i: 0
    },

    onLoad() {
        for (; ;) {//获得0~51之间的所有整数
            let rans = Math.floor(Math.random() * 52);
            myset.add(rans)
            if (myset.size === 52) {
                break;
            }
        }
        arandom = [...myset];//arandom中存放52个随机数:0~51
        for (let j = 0; j < 52; j++) {
            if (j >= 0 && j <= 12) this.card[j].name = "fangkuai";
            if (j >= 13 && j <= 25) this.card[j].name = "heitao";
            if (j >= 26 && j <= 38) this.card[j].name = "hongtao";
            if (j >= 39 && j <= 51) this.card[j].name = "meihua";
        }
    },

    start() {
        this.btn3.interactable = false;
        this.btn4.interactable = false;
        this.btn5.interactable = false;
        this.btn6.interactable = false;
        this.btn7.interactable = false;
        this.btn8.interactable = false;
        this.btn9.interactable = false;
        this.btn10.interactable = false;
        this.button1.node.on('click', this.callback1, this);
        this.button2.node.on('click', this.callback2, this);
        this.btn3.node.on('click', this.callback3, this);
        this.btn4.node.on('click', this.callback4, this);
        this.btn5.node.on('click', this.callback5, this);
        this.btn6.node.on('click', this.callback6, this);
        this.btn7.node.on('click', this.callback7, this);
        this.btn8.node.on('click', this.callback8, this);
        this.btn9.node.on('click', this.callback9, this);
        this.btn10.node.on('click', this.callback10, this);
    },
    callback1: function (button1) {
        this.destroy1();
        this.destroy2();
        let finished = cc.callFunc(function () { this.button2.interactable = true;
            if(cnt7) this.btn7.interactable = true;
            if(cnt8) this.btn8.interactable = true;
            if(cnt9) this.btn9.interactable = true;
            if(cnt10) this.btn10.interactable = true;
         }, this);
        let action1 = cc.sequence(cc.moveTo(0.1, 100, 100), finished);//去牌堆
        // let action2 = cc.sequence(cc.moveTo(2, 330, -250), finished);//去p1heitao
        // let action3 = cc.sequence(cc.moveTo(2, 230, -250), finished);//去p1meihua
        // let action4 = cc.sequence(cc.moveTo(2, 130, -250), finished);//去p1hongtao
        // let action5 = cc.sequence(cc.moveTo(2, 30, -250), finished);//去p1fangkuai
        // let action6 = cc.sequence(cc.moveTo(1, -300, 230), finished);//去p2heitao
        // let action7 = cc.sequence(cc.moveTo(1, -200, 230), finished);//去p2meihua
        // let action8 = cc.sequence(cc.moveTo(1, -100, 230), finished);//去p2hongtao
        // let action9 = cc.sequence(cc.moveTo(1, 0, 230), finished);//去p2fangkuai
        //动作回调  let finished = cc.callFunc(this.myMethod, this, opt);
        if (this.i < 52) {
            let k = this.i;
            if (flag && (this.card[arandom[k]].name == this.center[cnum-1].name)) {//摸到的牌与顶牌花色相同
                flag = 0;
                this.center[cnum++]=this.card[arandom[k]];//摸到的牌先算入中心区
                for (let j = 0; j <cnum; j++) {
                    let action2 = cc.sequence(cc.moveTo(0.1, 330, -250), finished);//去p1heitao
                    let action3 = cc.sequence(cc.moveTo(0.1, 230, -250), finished);//去p1meihua
                    let action4 = cc.sequence(cc.moveTo(0.1, 130, -250), finished);//去p1hongtao
                    let action5 = cc.sequence(cc.moveTo(0.1, 30, -250), finished);//去p1fangkuai
                    this.card[arandom[j]].zIndex = 1;//手牌的zIndex=1;
                    let nowCard = this.center[j];
                    // if (nowCard.name == "heitao") this.card[arandom[j]].runAction(action2);
                    // if (nowCard.name == "meihua") this.card[arandom[j]].runAction(action3);
                    // if (nowCard.name == "hongtao") this.card[arandom[j]].runAction(action4);
                    // if (nowCard.name == "fangkuai") this.card[arandom[j]].runAction(action5);
                    if (nowCard.name == "heitao") this.p16[cnt6]=nowCard,cnt6++,nowCard.runAction(action2);
                    if (nowCard.name == "meihua") this.p15[cnt5]=nowCard,cnt5++,nowCard.runAction(action3);
                    if (nowCard.name == "hongtao") this.p14[cnt4]=nowCard,cnt4++,nowCard.runAction(action4);
                    if (nowCard.name == "fangkuai") this.p13[cnt3]=nowCard,cnt3++,nowCard.runAction(action5);
                }
                cnum=0,loc = k + 1;
            }
            else {
                
                this.card[arandom[k]].zIndex = 1;//放上去的牌z改为1
                if(flag) this.center[cnum-1].zIndex=0;
                this.center[cnum++]=this.card[arandom[k]];
                this.card[arandom[k]].runAction(action1);
                
                flag = 1;
            }
            this.i = k + 1;
            cc.log(this.i)
        }
        else {
            sum1=cnt3+cnt4+cnt5+cnt6;
            sum2=cnt7+cnt8+cnt9+cnt10;
            cc.log(sum1);
            cc.log(sum2);
            cc.director.loadScene("GameOver")
            //卡牌摸完,判断胜负
        }
    },
    callback2: function (button2) {
        this.destroy1();
        this.destroy2();
        let finished = cc.callFunc(function () { //结束自己回合让对面的按钮亮
            this.button1.interactable = true; 
             if(cnt3) this.btn3.interactable = true;
            if(cnt4) this.btn4.interactable = true;
            if(cnt5) this.btn5.interactable = true;
            if(cnt6) this.btn6.interactable = true;
        }, this);
        let action1 = cc.sequence(cc.moveTo(0.1, 100, 100), finished);
        if (this.i < 52) {
            let k = this.i;
            if (flag  && (this.card[arandom[k]].name == this.center[cnum-1].name)) {//摸到的牌与顶牌花色相同
                flag = 0;
                this.center[cnum++]=this.card[arandom[k]];//摸到的牌先算入中心区
                for (let j = 0; j < cnum; j++) {
                    let action6 = cc.sequence(cc.moveTo(0.1, -300, 230), finished);//去p2heitao
                    let action7 = cc.sequence(cc.moveTo(0.1, -200, 230), finished);//去p2meihua
                    let action8 = cc.sequence(cc.moveTo(0.1, -100, 230), finished);//去p2hongtao
                    let action9 = cc.sequence(cc.moveTo(0.1, 0, 230), finished);//去p2fangkuai
                    this.card[arandom[j]].zIndex = 1;
                    let nowCard = this.center[j];
                    if (nowCard.name == "heitao") this.p20[cnt10]=nowCard,cnt10++,nowCard.runAction(action6);
                    if (nowCard.name == "meihua") this.p29[cnt9]=nowCard,cnt9++,nowCard.runAction(action7);
                    if (nowCard.name == "hongtao") this.p28[cnt8]=nowCard,cnt8++,nowCard.runAction(action8);
                    if (nowCard.name == "fangkuai") this.p27[cnt7]=nowCard,cnt7++,nowCard.runAction(action9);
                }
                cnum=0,loc = k + 1;
            }
            else {
                this.card[arandom[k]].zIndex = 1;//放上去的牌z改为1
                if(flag) this.center[cnum-1].zIndex=0;
                this.center[cnum++]=this.card[arandom[k]];
                this.card[arandom[k]].runAction(action1);
                
                flag = 1;
            }
            this.i = k + 1;
            cc.log(this.i)

        }
        else{
             sum1=cnt3+cnt4+cnt5+cnt6;
             sum2=cnt7+cnt8+cnt9+cnt10;
             cc.log(sum1);
             cc.log(sum2);
            cc.director.loadScene("GameOver")
             //卡牌摸完,判断胜负
        }
    },
    callback3: function (btn3) {
        this.destroy1();
        let finished = cc.callFunc(function () { //结束自己回合让对面的按钮亮
            this.button2.interactable = true; 
              if(cnt7) this.btn7.interactable = true;
             if(cnt8) this.btn8.interactable = true;
            if(cnt9) this.btn9.interactable = true;
           if(cnt10) this.btn10.interactable = true;
        }, this);
        let nowCard=this.p13[cnt3-1];
        if(flag  && (nowCard.name == this.center[cnum-1].name)){//出牌花色与牌堆顶部花色相同
                this.move1();
        }
        else{
        let action1 = cc.sequence(cc.moveTo(0.1, 100, 100), finished);
        nowCard.zIndex = 1;//放上去的牌z改为1
        this.center[cnum]=nowCard;
        if (cnum) this.center[cnum-1].zIndex = 0;
        cnum++;
        nowCard.runAction(action1);
        flag=1;cnt3--;
        }
    },
    callback4: function (btn4) {
        this.destroy1();
        let finished = cc.callFunc(function () { //结束自己回合让对面的按钮亮
            this.button2.interactable = true; 
            if(cnt7) this.btn7.interactable = true;
            if(cnt8) this.btn8.interactable = true;
           if(cnt9) this.btn9.interactable = true;
          if(cnt10) this.btn10.interactable = true;
        }, this);
        let nowCard=this.p14[cnt4-1];
        if(flag  && (nowCard.name == this.center[cnum-1].name)){//出牌花色与牌堆顶部花色相同
            this.move1();
    }
    else{
    let action1 = cc.sequence(cc.moveTo(0.1, 100, 100), finished);
    nowCard.zIndex = 1;//放上去的牌z改为1
    this.center[cnum]=nowCard;
    if (cnum) this.center[cnum-1].zIndex = 0;
    cnum++;
    nowCard.runAction(action1);
    flag=1;cnt4--;
     }
    },
    callback5: function (btn5) {
        this.destroy1();
        let finished = cc.callFunc(function () { //结束自己回合让对面的按钮亮
            this.button2.interactable = true; 
            if(cnt7) this.btn7.interactable = true;
             if(cnt8) this.btn8.interactable = true;
            if(cnt9) this.btn9.interactable = true;
           if(cnt10) this.btn10.interactable = true;
        }, this);
        let nowCard=this.p15[cnt5-1];
        if(flag  && (nowCard.name == this.center[cnum-1].name)){//出牌花色与牌堆顶部花色相同
            this.move1();
    }
    else{
    let action1 = cc.sequence(cc.moveTo(0.1, 100, 100), finished);
    nowCard.zIndex = 1;//放上去的牌z改为1
    this.center[cnum]=nowCard;
    if (cnum) this.center[cnum-1].zIndex = 0;
    cnum++;
    nowCard.runAction(action1);
    flag=1;cnt5--;
     }
    },
    callback6: function (btn6) {
        this.destroy1();
        let finished = cc.callFunc(function () { //结束自己回合让对面的按钮亮
            this.button2.interactable = true; 
            if(cnt7) this.btn7.interactable = true;
            if(cnt8) this.btn8.interactable = true;
           if(cnt9) this.btn9.interactable = true;
          if(cnt10) this.btn10.interactable = true;
        }, this);
        let nowCard=this.p16[cnt6-1];
        if(flag  && (nowCard.name == this.center[cnum-1].name)){//出牌花色与牌堆顶部花色相同
            this.move1();
    }
    else{
    let action1 = cc.sequence(cc.moveTo(0.1, 100, 100), finished);
    nowCard.zIndex = 1;//放上去的牌z改为1
    this.center[cnum]=nowCard;
    if (cnum) this.center[cnum-1].zIndex = 0;
    cnum++;
    nowCard.runAction(action1);
    flag=1;cnt6--;
     }
    },
    callback7: function (btn7) {
        this.destroy1();
        this.destroy2();
        let finished = cc.callFunc(function () { //结束自己回合让对面的按钮亮
            this.button1.interactable = true; 
              if(cnt3) this.btn3.interactable = true;
             if(cnt4) this.btn4.interactable = true;
             if(cnt5) this.btn5.interactable = true;
             if(cnt6) this.btn6.interactable = true;
        }, this);
        let action1 = cc.sequence(cc.moveTo(0.1, 100, 100), finished);
        let nowCard=this.p27[cnt7-1];
        if(flag  && (nowCard.name == this.center[cnum-1].name)){//出牌花色与牌堆顶部花色相同
            this.move2();
    }
    else{
    let action1 = cc.sequence(cc.moveTo(0.1, 100, 100), finished);
    nowCard.zIndex = 1;//放上去的牌z改为1
    this.center[cnum]=nowCard;
    if (cnum) this.center[cnum-1].zIndex = 0;
    cnum++;
    nowCard.runAction(action1);
    flag=1;cnt7--;
     }
    },
    callback8: function (btn8) {
        this.destroy1();
        this.destroy2();
        let finished = cc.callFunc(function () { //结束自己回合让对面的按钮亮
            this.button1.interactable = true; 
              if(cnt3) this.btn3.interactable = true;
             if(cnt4) this.btn4.interactable = true;
             if(cnt5) this.btn5.interactable = true;
             if(cnt6) this.btn6.interactable = true;
        }, this);
        let nowCard=this.p28[cnt8-1];
        if(flag  && (nowCard.name == this.center[cnum-1].name)){//出牌花色与牌堆顶部花色相同
            this.move2();
    }
    else{
    let action1 = cc.sequence(cc.moveTo(0.1, 100, 100), finished);
    nowCard.zIndex = 1;//放上去的牌z改为1
    this.center[cnum]=nowCard;
    if (cnum) this.center[cnum-1].zIndex = 0;
    cnum++;
    nowCard.runAction(action1);
    flag=1;cnt8--;
     }
    },
    callback9: function (btn9) {
        this.destroy1();
        this.destroy2();
        let finished = cc.callFunc(function () { //结束自己回合让对面的按钮亮
            this.button1.interactable = true; 
              if(cnt3) this.btn3.interactable = true;
             if(cnt4) this.btn4.interactable = true;
             if(cnt5) this.btn5.interactable = true;
             if(cnt6) this.btn6.interactable = true;
        }, this);
        let nowCard=this.p29[cnt9-1];
        if(flag  && (nowCard.name == this.center[cnum-1].name)){//出牌花色与牌堆顶部花色相同
            this.move2();
    }
    else{
    let action1 = cc.sequence(cc.moveTo(0.1, 100, 100), finished);
    nowCard.zIndex = 1;//放上去的牌z改为1
    this.center[cnum]=nowCard;
    if (cnum) this.center[cnum-1].zIndex = 0;
    cnum++;
    nowCard.runAction(action1);
    flag=1;cnt9--;
     }
    },
    callback10: function (btn10) {
        this.destroy1();
        this.destroy2();
        let finished = cc.callFunc(function () { //结束自己回合让对面的按钮亮
            this.button1.interactable = true; 
              if(cnt3) this.btn3.interactable = true;
             if(cnt4) this.btn4.interactable = true;
             if(cnt5) this.btn5.interactable = true;
             if(cnt6) this.btn6.interactable = true;
        }, this);
        let nowCard=this.p20[cnt10-1];
        if(flag  && (nowCard.name == this.center[cnum-1].name)){//出牌花色与牌堆顶部花色相同
            this.move2();
    }
    else{
    let action1 = cc.sequence(cc.moveTo(0.1, 100, 100), finished);
    nowCard.zIndex = 1;//放上去的牌z改为1
    this.center[cnum]=nowCard;
    if (cnum) this.center[cnum-1].zIndex = 0;
    cnum++;
    nowCard.runAction(action1);
    flag=1;cnt10--;
     }
    },
    destroy1()//禁用p1,p2摸牌和p1的出牌
    {
        this.button2.interactable = false;
        this.button1.interactable = false;
        this.btn3.interactable = false;
        this.btn4.interactable = false;
        this.btn5.interactable = false;
        this.btn6.interactable = false;
    },
    destroy2()//禁用p1,p2摸牌和p2的出牌
    {
        this.button2.interactable = false;
        this.button1.interactable = false;
        this.btn7.interactable = false;
        this.btn8.interactable = false;
        this.btn9.interactable = false;
        this.btn10.interactable = false;
    },
    move1(){//牌堆里的牌都到p1手中
        let finished = cc.callFunc(function () { //结束自己回合让对面的按钮亮
            this.button2.interactable = true; 
              if(cnt7) this.btn7.interactable = true;
             if(cnt8) this.btn8.interactable = true;
            if(cnt9) this.btn9.interactable = true;
           if(cnt10) this.btn10.interactable = true;
        }, this);
        for (let j = 0; j <cnum; j++){
        let action2 = cc.sequence(cc.moveTo(0.1, 330, -250), finished);//去p1heitao
        let action3 = cc.sequence(cc.moveTo(0.1, 230, -250), finished);//去p1meihua
        let action4 = cc.sequence(cc.moveTo(0.1, 130, -250), finished);//去p1hongtao
        let action5 = cc.sequence(cc.moveTo(0.1, 30, -250), finished);//去p1fangkuai
        let nowCard = this.center[j];
        if (nowCard.name == "heitao") this.p16[cnt6]=nowCard,cnt6++,nowCard.runAction(action2);
        if (nowCard.name == "meihua") this.p15[cnt5]=nowCard,cnt5++,nowCard.runAction(action3);
        if (nowCard.name == "hongtao") this.p14[cnt4]=nowCard,cnt4++,nowCard.runAction(action4);
        if (nowCard.name == "fangkuai") this.p13[cnt3]=nowCard,cnt3++,nowCard.runAction(action5);}
        cnum=0,flag=0;
    },
    move2(){
        let finished = cc.callFunc(function () { //结束自己回合让对面的按钮亮
            this.button1.interactable = true; 
             if(cnt3) this.btn3.interactable = true;
            if(cnt4) this.btn4.interactable = true;
            if(cnt5) this.btn5.interactable = true;
            if(cnt6) this.btn6.interactable = true;
        }, this);
        for (let j = 0; j < cnum; j++) {
            let action6 = cc.sequence(cc.moveTo(0.1, -300, 230), finished);//去p2heitao
            let action7 = cc.sequence(cc.moveTo(0.1, -200, 230), finished);//去p2meihua
            let action8 = cc.sequence(cc.moveTo(0.1, -100, 230), finished);//去p2hongtao
            let action9 = cc.sequence(cc.moveTo(0.1, 0, 230), finished);//去p2fangkuai
            let nowCard = this.center[j];
            if (nowCard.name == "heitao") this.p20[cnt10]=nowCard,cnt10++,nowCard.runAction(action6);
            if (nowCard.name == "meihua") this.p29[cnt9]=nowCard,cnt9++,nowCard.runAction(action7);
            if (nowCard.name == "hongtao") this.p28[cnt8]=nowCard,cnt8++,nowCard.runAction(action8);
            if (nowCard.name == "fangkuai") this.p27[cnt7]=nowCard,cnt7++,nowCard.runAction(action9);
        }
        cnum=0,flag=0;
    }
});
export{
    sum1,
    sum2
};