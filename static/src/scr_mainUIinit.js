scr_mainUIinit = [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "63b63kuwo9N7JpekGEK/q7S", "scr_mainUIinit");
    cc.Class({
        extends: cc.Component,
        properties: {},
        skillShow: function () {
            var t = 0, n = e("scr_data").skillLv;
            for (var a in n) n[a] > 0 && t++;
            return t;
        },
        initSkillShow: function () {
            cc.find("Canvas/Text/txt_skillNum").getComponent("cc.Label").string = "特性  " + this.skillShow() + "/27";
        },
        whichShow: function (t, n) {//控制按钮显示函数
            for (var a = e("scr_data").distance, i = cc.find(n).children, c = t.length, o = 0; o <= c; o++) a >= t[o] ? i[o].active = !0 : i[o].active = !1;
        },
        showButton: function () {
            this.whichShow([3, 2, 4, 5], "Canvas/Button");//当距离大于多少的时候显示按钮    [6, 4, 7, 23]
            e("scr_public").init();
        },
        showfriendButton: function () {
            var t = e("scr_data"), n = cc.find("Canvas/Button/button_friend");
            1 == t.ifFollow[0] || 1 == t.ifFollow[1] ? n.active = !0 : n.active = !1;
        },
        onButton: function () {
            var t = e("scr_data"), n = cc.find("Canvas/Button"), a = n.getChildByName("button_dekaron");
            t.day > 35 && t.publicVar[1] >= -1 ? a.on("touchstart", this.dekaronButton, this) : a.active = !1;//挑战45天才开，加速！
            1 == t.ifFollow[0] ? n.getChildByName("button_friend").on("touchstart", function () {
                cc.director.loadScene("friend1");
            }, this) : 1 == t.ifFollow[1] && n.getChildByName("button_friend").on("touchstart", function () {
                cc.director.loadScene("friendSkill2");
            }, this);
        },
        dekaronButton: function () {
            var t = e("scr_data"), n = e("scr_public"), a = e("scr_effect");
            t.energy >= 10 ? function () {
                var e = [201, 202, 300003, 203, 204, 205, 206, 207, 900006, 209, 210, 211, 900005, 213, 214, 215, 216, 217, 218][t.choice[6]];
                if ("undefined" == typeof e) a.playText("Canvas/Text/txt_notify", "什么都没有...", 60); else {
                    t.energy -= 10;
                    n.save();
                    cc.find("Event/scr_fight").getComponent("scr_fight").fight(e);
                }
            }() : a.playText("Canvas/Text/txt_notify", "挑战需10点精力！", 60);
        },
        hideUI: function () {
            var e = cc.find("Canvas/Button").children, t = cc.find("Canvas/Text").children, n = cc.find("Canvas/Button/button_explore");
            for (var a in e) e[a].active = !1;
            for (var i in t) t[i].active = !1;
            cc.find("Canvas/UI").active = !1;
            cc.find("Canvas/Text/txt_notify").active = !0;
            n.active = !0;
            n.x = 7;
            n.y = 164;
        },
        onLoad: function () {
            var t = e("scr_public"), n = e("scr_data");
            (function () {
                if (300 == n.distance && n.stayDay[3] > 1 && 0 == n.publicVar3[2]) {
                    var t = cc.find("Canvas/Button/button_rest");
                    t.getChildByName("text").getComponent("cc.Label").string = "桥  洞";
                    t.on("touchstart", function () {
                        cc.director.loadScene("home");
                    }, t);
                } else {
                    var t = cc.find("Canvas/Button/button_rest");
                    t.on("touchstart", function () {
                        e("scr_data").energy >= 10 ? cc.director.loadScene("notice2") : cc.director.loadScene("diary");
                    }, t);
                }
            })();
            this.showButton();
            this.initSkillShow();
            this.onButton();
            this.showfriendButton();
            t.autoEat();
            n.role.hp < 0 && (n.role.hp = 1);
            t.init();
            cc.find("Canvas/Fight").active = !1;
            cc.find("Canvas/Button").active = !0;
            n.day >= 180 && this.hideUI();
        }
    });
    cc._RF.pop();
}, {
    scr_data: "scr_data",
    scr_effect: "scr_effect",
    scr_public: "scr_public"
}]