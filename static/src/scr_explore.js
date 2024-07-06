scr_explore = [function (e, t, n) {//todo 新地图画饼
    "use strict";
    cc._RF.push(t, "aac8eR1m+lE25FoXnDRrcRr", "scr_explore");
    cc.Class({
        extends: cc.Component,
        properties: {},
        onLoad: function () {
            var t = cc.find("Canvas/Button/button_forward").getComponent("scr_forwardButton").constructor, n = new t(), a = new t(), i = new t(), c = new t(),
                o = this, r = e("scr_data"), Tokyo = new t();
            this.node.runAction(cc.tintTo(.1, 255, 255, 255));//变成黑色
            n.addDistance = function () { };
            a.addDistance = function () { };
            i.addDistance = function () { };
            c.addDistance = function () {
                e("scr_data").publicVar3[1] += 1;
            };
            Tokyo.addDistance = function () { };
            n.shieldButton = function () {
                o.node.off("touchstart", n.callBack, n);
                o.node.runAction(cc.tintTo(.1, 114, 199, 255));//变成淡蓝色，本来是0.3秒，现在改成0.1秒
                o.scheduleOnce(o.onLoad, .05);//按钮保护，0.7秒后才能再次按下，改为0.2
            };
            a.shieldButton = function () {
                o.node.off("touchstart", a.callBack, a);
                o.node.runAction(cc.tintTo(.1, 114, 199, 255));
                o.scheduleOnce(o.onLoad, .05);
            };
            i.shieldButton = function () {
                o.node.off("touchstart", i.callBack, i);
                o.node.runAction(cc.tintTo(.1, 114, 199, 255));
                o.scheduleOnce(o.onLoad, .05);
            };
            c.shieldButton = function () {
                o.node.off("touchstart", c.callBack, c);
                o.node.runAction(cc.tintTo(.1, 114, 199, 255));
                o.scheduleOnce(o.onLoad, .05);
            };
            Tokyo.shieldButton = function () {
                o.node.off("touchstart", c.callBack, c);
                o.node.runAction(cc.tintTo(.1, 114, 199, 255));
                o.scheduleOnce(o.onLoad, .05);
            };
            n.getItemNum = function () {
                return 1;
            };
            a.getItemNum = function () {
                return 1;
            };
            i.getItemNum = function () {
                return 2;
            };
            c.getItemNum = function () {
                return Math.min(parseInt(e("scr_data").publicVar3[1] / 100 + 1), 4);
            };
            Tokyo.getItemNum = function () {
                return 2;
            };
            n.dryUp = function () {
                var t = e("scr_public").regionId(), n = e("scr_data");
                return 2e3 == t && n.day >= 42 || 3e3 == t && n.day >= 80;
            };
            n.playBGM = function () { };
            n.stopForward = function () {
                n.forward();
            };
            a.getEnemyRate = function () {
                return [[0, 0], [30, 1001], [50, 1002], [70, 1003], [80, 400002], [95, 300001], [100, 100001]];
            };
            i.getEnemyRate = function () {
                return [[0, 0], [20, 2001], [40, 2002], [60, 2003], [75, 2004], [100, 2005]];
            };
            c.getFigthId = function () {
                return [3001, 3002, 3003, 3004, 3005, 3006, 3007, 3008, 3009, 3010, 900004][Math.min(parseInt(e("scr_data").publicVar3[1] / 50), 10)];
            };
            Tokyo.getEnemyRate = function () {
                return [[0, 0], [20, 2001], [40, 2002], [60, 2003], [75, 2004], [100, 2005]];
            };
            a.getDrop = function () {
                return [[16, 0, 2, 1], [25, 1, 2, 1], [25, 4, 2, 1], [19, 5, 1, 1], [6, 6, 1, 1]];//a是郊外，i是市中心，c是山洞
            };
            i.getDrop = function () {
                return [[97, 2, 1, 1], [20, 2, 1, 1], [25, 99, 2, 3], [15, 7, 1, 1], [2, 14, 1, 1]];//加入2%剩饭
            };
            c.getDrop = function () {
                return [[60, 16, 1, 2], [20, 16, 1, 2], [8, 8, 1, 1]];
            };
            Tokyo.getDrop = function () {
                return [[60, 16, 1, 2], [20, 16, 1, 2], [8, 8, 1, 1]];
            };
            a.regionEventId = function () {
                return 7e3 + a.randomId([0, 20, 40, 60, 80, 100]);
            };
            i.regionEventId = function () {
                return 8e3 + i.randomId([0, 25, 50, 75, 100]);
            };
            c.regionEventId = function () {
                return 9e3 + c.randomId([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
            };
            Tokyo.regionEventId = function () {
                return 9e3 + c.randomId([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
            };
            c.regionEventId = function () {
                return 0;
            };
            c.event = function () {
                var t = 100 * Math.random(), n = e("scr_data"), a = e("scr_public"), i = e("scr_effect");
                if (t < 10) {
                    n.role.hp = a.role.maxHp();
                    i.playText("Canvas/Text/txt_notify", "生命全恢复！", 60);
                } else if (t < 25) {
                    n.publicVar3[4] += 10;
                    i.playText("Canvas/Text/txt_notify", "攻击+10！（持续1天）", 60);
                } else if (t < 40) {
                    n.publicVar3[10] += 10;
                    i.playText("Canvas/Text/txt_notify", "防御+10！（持续1天）", 60);
                } else if (t < 50) {
                    n.publicVar3[16] += 50;
                    n.role.hp += 50;
                    i.playText("Canvas/Text/txt_notify", "生命上限+50！（持续1天）", 60);
                } else if (t < 60) {
                    n.publicVar3[5] += 1;
                    i.playText("Canvas/Text/txt_notify", "全属性（攻防血）提高1%！（效果随天数缓慢衰减）", 60);
                } else if (t < 70) {
                    n.publicVar3[11] += 6;
                    i.playText("Canvas/Text/txt_notify", "逃跑率+6%！（持续1天）", 60);
                } else if (t < 80) {
                    n.publicVar3[17] += 1;
                    i.playText("Canvas/Text/txt_notify", "「晓月手链」等级+1！（效果持续1天）", 60);
                } else if (t < 90) {
                    n.publicVar3[18] += 1;
                    i.playText("Canvas/Text/txt_notify", "「幸运石」等级+1！（效果持续1天）", 60);
                } else {
                    n.publicVar3[9] += 1;
                    i.playText("Canvas/Text/txt_notify", "「放大镜」等级+1！（效果持续1天）", 60);
                }
                a.save();
            };
            //位移传送门
            switch (r.publicVar[13]) {
                case 0://城中村
                    this.node.on("touchstart", n.callBack, n);
                    break;

                case 1://郊外
                    this.node.on("touchstart", a.callBack, a);
                    break;

                case 2://市中心
                    this.node.on("touchstart", i.callBack, i);
                    break;

                case 3://山洞
                    this.node.on("touchstart", c.callBack, c);
            }
        }
    });
    cc._RF.pop();
}, {
    scr_data: "scr_data",
    scr_effect: "scr_effect",
    scr_public: "scr_public"
}]