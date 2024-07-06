scr_shop2 = [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "83a81yV4XxNdIIu5OySpYvE", "scr_shop2");
    cc.Class({
        extends: cc.Component,
        properties: {},
        onLoad: function () {
            var t = e("scr_data"), n = e("scr_effect"), a = e("scr_public"), i = cc.find("Canvas/UI1"), c = i.getChildByName("choice1"), o = i.getChildByName("choice2"), r = i.getChildByName("choice3"), s = i.getChildByName("choice4"), l = i.getChildByName("choice5"), u = i.getChildByName("choice6"), p = i.getChildByName("choice7");
            f();
            (function () {
                c.on("touchstart", d, this);
                o.on("touchstart", m, this);
                r.on("touchstart", h, this);
                s.on("touchstart", v, this);
                l.on("touchstart", y, this);
                u.on("touchstart", g, this);
                p.on("touchstart", b, this);
            })();
            function f() {
                cc.find("Canvas/money").getComponent("cc.Label").string = "白色粉末：" + t.itemNum[11] + " / 金钱:" + (t.money / 10).toFixed(1);
                cc.find("Canvas/UI1/choice5/text").getComponent("cc.Label").string = "枪（需" + (10 + 10 * t.itemNum2[19]) + "个白色粉末）";
                cc.find("Canvas/UI1/choice7/text").getComponent("cc.Label").string = "出售所有漂亮石头（每个1毛，已有" + t.itemNum2[16] + "个）";
            }
            function d() {
                if (t.itemNum[11] >= 1) {
                    t.itemNum[11] -= 1;
                    t.money += 10;
                    a.save();
                    n.playText("Canvas/notify", "获得1元！", 60);
                    f();
                } else n.playText("Canvas/notify", "白色粉末不足！", 60);
            }
            function m() {
                if (t.itemNum[11] >= 4 && 0 == t.publicVar2[29]) {
                    t.itemNum[11] -= 4;
                    t.publicVar2[29] = 1;
                    n.playText("Canvas/notify", "获得《少妇白洁》！请到看书界面使用。", 60);
                    f();
                } else t.itemNum[11] < 4 ? n.playText("Canvas/notify", "白色粉末不足！", 60) : n.playText("Canvas/notify", "你已拥有此书！", 60);
            }
            function h() {
                if (t.money >= 60 && 0 == t.publicVar2[23]) {
                    t.money -= 60;
                    t.publicVar2[23] = 1;
                    n.playText("Canvas/notify", "获得《搬砖，从入门到放弃》！请到看书界面使用。", 60);
                    f();
                } else t.money < 60 ? n.playText("Canvas/notify", "金钱不足！", 60) : n.playText("Canvas/notify", "你已拥有此书！", 60);
            }
            function v() {
                if (t.money >= 60 && 0 == t.publicVar2[26]) {
                    t.money -= 60;
                    t.publicVar2[26] = 1;
                    n.playText("Canvas/notify", "获得《中国居民膳食指南1997版》！请到看书界面使用。", 60);
                    f();
                } else t.money < 60 ? n.playText("Canvas/notify", "金钱不足！", 60) : n.playText("Canvas/notify", "你已拥有此书！", 60);
            }
            function y() {
                var e = 10 + 10 * t.itemNum2[19];
                if (t.itemNum[11] >= e) {
                    t.itemNum[11] -= e;
                    t.itemNum2[19] += 1;
                    n.playText("Canvas/notify", "获得「枪」！", 60);
                    f();
                } else n.playText("Canvas/notify", "白色粉末不足！", 60);
            }
            function g() {
                if (t.itemNum[11] >= 1) {
                    t.itemNum[11] -= 1;
                    t.itemNum2[14] += 2;
                    n.playText("Canvas/notify", "获得「子弹」*1", 60);
                    f();
                } else n.playText("Canvas/notify", "粉末不够！", 60);
            }
            function b() {
                if (t.itemNum2[16] > 0) {
                    var e = t.itemNum2[16];
                    t.money += e;
                    t.itemNum2[16] -= e;
                    n.playText("Canvas/notify", "出售「漂亮石头」*" + e + "，获得" + (e / 10).toFixed(1) + "元！", 60);
                    f();
                } else n.playText("Canvas/notify", "你身上没有漂亮石头~", 60);
            }
        }
    });
    cc._RF.pop();
}, {
    scr_data: "scr_data",
    scr_effect: "scr_effect",
    scr_public: "scr_public"
}]