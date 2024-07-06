scr_open = [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "72e60aF4atJaJ3b2ZL0hIlb", "scr_open");
    cc.Class({
        extends: cc.Component,
        properties: {},
        creatText: function (e, t, n) {
            var a = new cc.Node(t);
            a.addComponent(cc.Label);
            a.parent = e;
            a.setPosition(0, 0);
            a.opacity = 0;
            a.runAction(cc.fadeIn(.3));//开场十倍速
            a.color = new cc.Color(255, 255, 255);
            a.getComponent(cc.Label).overflow = 3;
            a.getComponent(cc.Label).horizontalAlign = 1;
            a.setContentSize(600, 300);
            a.getComponent(cc.Label).string = n;
            a.getComponent(cc.Label).lineHeight = 50;
            a.getComponent(cc.Label).fontSize = 40;
        },
        onLoad: function () {
            var text = ["昨天，", "和父亲大吵一架后，", "我双手空空的逃了出来。", "我决定离开这个家，", "再也不回去了..."],
                t = (text.length, this),
                n = 0,
                a = cc.find("Canvas/Layout"),
                i = cc.find("Canvas/skip"),
                data = e("scr_data"),
                Tfunc = e("scr_public"),
                gift = [
                    "什么都没有抽到哦...",
                    "一拳超人：攻击力百分比提升20%",
                    "因为怕痛就全点防御了：提高防御40%",
                    "暴血：进攻架势造成的伤害增加25%，但是额外消耗25%的生命",
                    "破败之刃：下降攻击力20",
                    "大学生体质：降低血量上限100",
                    "不想锻炼：降低锻炼成功率15%",
                    "什么都没有抽到哦...",
                    "什么都没有抽到哦...",
                    "什么都没有抽到哦..."
                ];
            if (data.randomModel == 1) {// 随机模式buff描述
                text = ["随机模式，", "你获得了三个随机buff（重复获得buff只生效一次），", gift[data.gift[0]], gift[data.gift[1]], gift[data.gift[2]]];
            }
            if (data.randomModel == 1) {//tag 随机模式buff
                for (var index = 0; index < 3; index++) {
                    data.randomBuff[data.gift[index]] = 1;
                }
            }
            if (data.randomBuff[4] == 1) {
                data.role.att -= 20;
            }
            if (data.randomBuff[5] == 1) {
                data.role.maxHp = 1;
            }
            Tfunc.save();
            function c() {
                t.creatText(a, "plot" + n, text[n]);
                n++;
            }
            var o = window.setInterval(function () {
                var e = {
                    500: function () {
                        c();
                    },
                    3500: function () {
                        c();
                    },
                    6500: function () {
                        c();
                    },
                    9500: function () {
                        c();
                    },
                    12500: function () {
                        c();
                    },
                    17500: function () {
                        var e = a.children;
                        for (var t in e) e[t].runAction(cc.fadeOut(2));
                    },
                    20000: function () {
                        window.clearInterval(o);
                        cc.director.loadScene("main");
                    }
                };
                "undefined" != typeof e[r += 500] && e[r]();
            }, 500), r = 0;
            i.on("touchstart", function () {
                o && window.clearTimeout(o);
                cc.director.loadScene("main");
            }, this);
            this.scheduleOnce(function () {
                i.active = !0;
                i.runAction(cc.fadeTo(3, 60));
            }, 2);
        }
    });
    cc._RF.pop();
}, {
    scr_data: "scr_data",
    scr_data2: "scr_data2",
    scr_public: "scr_public"
}]