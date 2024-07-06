scr_startChoice = [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "abb1fsZ7zZIh7RCgg95JM2L", "scr_startChoice");/*ad中为套餐界面*/
    cc.Class({
        extends: cc.Component,
        properties: {},
        onLoad: function () {
            var t = cc.find("Canvas/Determine"), n = cc.find("Canvas/text2"), a = this, i = e("scr_data"), c = e("scr_data2"), o = e("scr_public"), r = e("scr_effect"), s = 0;
            t.getChildByName("choice1").on("touchstart", function () {
                i.itemNum2[20] = -2;
                i.itemNum2[21] = 2;
                u();
            }, this);
            t.getChildByName("choice2").on("touchstart", function () {
                i.itemNum2[8] = 1;
                u();
            }, this);
            t.getChildByName("choice3").on("touchstart", function () {
                i.publicVar[1] = 3;
                u();
            }, this);
            t.getChildByName("choice4").on("touchstart", function () {
                i.publicVar[1] = 4;
                u();
            }, this);
            t.getChildByName("choice5").on("touchstart", function () {
                i.ifFollow[0] = 1;
                i.ifFollow[1] = 1;
                i.publicVar[7] = -1580;
                u();
            }, this);
            t.getChildByName("choice6").on("touchstart", function () {
                i.publicVar[1] = 2;
                u();
            }, this);
            t.getChildByName("choice7").on("touchstart", function () {
                if (c.gameData[1] > -1) {
                    i.publicVar[1] = 1;
                    u();
                } else r.playText("Canvas/text1", "修罗模式不需先通关游戏", 80);
            }, this);
            t.getChildByName("choice8").on("touchstart", function () {
                i.publicVar[1] = 1;//tag 随机模式
                i.randomModel = 1;
                i.gift[0] = Math.floor(Math.random() * 10);
                i.gift[1] = Math.floor(Math.random() * 10);
                i.gift[2] = Math.floor(Math.random() * 10);
                i.gift[3] = Math.floor(Math.random() * 10);
                u();
            }, this);
            (function () {
                t.opacity = 0;
                n.opacity = 0;
            })();
            (function () {
                r.playText("Canvas/text1", "逃跑的时候，脑子里浮现的是之前的往事...", 80);
                a.schedule(l, .2, 1);
            })();
            function l() {
                cc.find(["Canvas/Determine", "Canvas/text2"][s]).runAction(cc.fadeIn(.2));
                s++;
            }
            function u() {
                cc.find("Canvas/Determine").active = !1;
                cc.find("Canvas/text1").active = !1;
                cc.find("Canvas/text2").active = !1;
                o.save();
                cc.director.loadScene("open");
            }
        }
    });
    cc._RF.pop();
}, {
    scr_data: "scr_data",
    scr_data2: "scr_data2",
    scr_effect: "scr_effect",
    scr_public: "scr_public"
}]