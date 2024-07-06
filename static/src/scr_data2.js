scr_data2 = [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "77dc9QHo3RF5IGfGNhXskkd", "scr_data2");
    cc.Class({
        extends: cc.Component,
        properties: {},
        onLoad: function () {
            var e = {
                initMoney: 0,
                achieveMent: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//新增一堆数据，用来永久保存成就
                dieChoice: [0, 0, 0, 0, 0],
                gameData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                gameData2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            };
            JSON.parse(cc.sys.localStorage.getItem("data2")) && function (e) {
                "undefined" == typeof e.achieveMent && (e.achieveMent = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                "undefined" == typeof e.gameData && (e.gameData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                "undefined" == typeof e.gameData2 && (e.gameData2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);				/*新增gamedate函数传送门*/
            }(e = JSON.parse(cc.sys.localStorage.getItem("data2")));
            t.exports = e;
        }
    });
    cc._RF.pop();
}, {}]