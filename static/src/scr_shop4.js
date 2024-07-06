scr_shop4 = [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "981fdTWKwRAN6F2FBk0OJHn", "scr_shop4");
    cc.Class({
        extends: cc.Component,
        properties: {},
        onLoad: function () {
            var t = this, n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = cc.find("Canvas/UI1"), o = c.getChildByName("choice2"), r = c.getChildByName("choice3"), s = c.getChildByName("choice4"), l = [["放大镜*1", 17, 1, 50], ["熟肉*3", 0, 3, 12], ["晓月手链*1", 27, 1, 50], ["幸运石*1", 26, 1, 50], ["啤酒*1", 12, 1, 30], ["伤药*4", 1, 4, 12]];
            t.itemId = parseInt(5.99 * Math.random());
            t.itemDiscount = Math.random();
            t.ifSellOut = 0;
            var u = parseInt(l[t.itemId][3] * t.itemDiscount), p = l[t.itemId][0], f = l[t.itemId][1], d = l[t.itemId][2];
            var origin = s;
            var newBtn_1 = cc.instantiate(origin);//复制一个一模一样的按钮 1
            newBtn_1.setPosition(0, 318 - 100);//设置位置 往第一个按钮的下方移动100像素 2
            cc.find("Canvas/UI1").addChild(newBtn_1);  // 将按钮节点作为当前节点的子节点 3
            newBtn_1.getChildByName("text").getComponent("cc.Label").string = "倍 率";
            //获得按钮上的节点，用名字搜索子节点       子节点上有一个组件    修改组件的字符  4
            //newBtn_1.color = cc.Color.RED;  //设置新节点的颜色
            //text.string = "测试按钮";//text.parent = ex;//text.color = cc.Color.RED;
            m();
            (function () {
                o.on("touchstart", h, this);
                r.on("touchstart", v, this);
                s.on("touchstart", y, this);
                newBtn_1.on("touchstart", FnewBtn_1, this);
            })();
            function m() {
                cc.find("Canvas/money").getComponent("cc.Label").string = "金钱：" + (n.money / 10).toFixed(1) + " 罪恶值：" + n.evil.evilValue;
                cc.find("Canvas/UI1/choice2/text").getComponent("cc.Label").string = "出售伤药（每个1毛，已拥有" + n.itemNum2[1] + "）";
                cc.find("Canvas/UI1/choice3/text").getComponent("cc.Label").string = "出售烟（每个6毛，已拥有" + n.itemNum2[7] + "）";
                cc.find("Canvas/UI1/choice4/text").getComponent("cc.Label").string = p + "（活动价" + (u / 10).toFixed(1) + "元，限购！！！）";
                newBtn_1.getChildByName("text").getComponent("cc.Label").string = "吾心超凡LV." + n.evil.virtueLevel + "(罪恶值上涨10)";//todo 新的罪恶机制
            }
            function h() {
                if (n.itemNum2[1] > 0) {
                    var e = parseInt(.5 * n.itemNum2[1] + 1);
                    n.money += e;
                    n.itemNum2[1] -= e;
                    i.save();
                    a.playText("Canvas/notify", "出售【伤药】*" + e + "，获得" + e + "毛", 100);
                    m();
                } else a.playText("Canvas/notify", "道具不足！", 100);
            }
            function v() {
                if (n.itemNum2[7] > 0) {
                    n.money += 6;
                    n.itemNum2[7] -= 1;
                    i.save();
                    a.playText("Canvas/notify", "出售【烟】*1，获得6毛", 100);
                    m();
                } else a.playText("Canvas/notify", "道具不足！", 100);
            }
            function y() {
                if (1 == t.ifSellOut) a.playText("Canvas/notify", "本次活动每人只能购买一次哦，下次再来吧~", 100); else if (n.money >= u) {
                    n.money -= u;
                    n.itemNum2[f] += d;
                    t.ifSellOut = 1;
                    i.save();
                    a.playText("Canvas/notify", "获得【" + p + "】！", 100);
                    m();
                } else a.playText("Canvas/notify", "余额不足...", 100);
            }
            function FnewBtn_1() {
                if (n.evil.evilValue < -10) {
                    n.evil.evilValue += 10;
                    n.evil.virtueLevel += 1;
                    i.save();
                    a.playText("Canvas/notify", "【吾心超凡】等级+1！", 100);
                    m();
                } else a.playText("Canvas/notify", "罪恶值不足", 100);
            }
        }
    });
    cc._RF.pop();
}, {
    scr_data: "scr_data",
    scr_effect: "scr_effect",
    scr_public: "scr_public"
}]