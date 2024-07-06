scr_fightState = [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "c4f80DG6eFB/bvHazsL2je9", "scr_fightState");
    cc.Class({
        extends: cc.Component,
        properties: {},
        onLoad: function () {
            var t = ["均  衡", "进  攻", "防  御"], n = e("scr_data"), a = this, i = this.node.getChildByName("text").getComponent("cc.Label");
            c();
            0 == n.skillLv[5] ? a.node.active = !1 : a.node.active = !0;
            this.node.on("touchstart", function () {
                if (1 == n.skillLv[9] && 0 == n.skillLv[14]) {
                    n.figthState += 1;
                    n.figthState > 1 && (n.figthState = 0);
                    c();
                }
                if (1 == n.skillLv[9] && 1 == n.skillLv[14]) {
                    n.figthState += 1;
                    n.figthState > 2 && (n.figthState = 0);
                    c();
                }
            }, this);
            function c() {
                var e = t[n.figthState];
                i.string = e;
            }
        }
    });
    cc._RF.pop();
}, {
    scr_data: "scr_data"
}]