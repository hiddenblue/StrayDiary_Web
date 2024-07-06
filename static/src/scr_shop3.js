scr_shop3 = [function (e, t, n) {// 晓风大楼
    "use strict";
    cc._RF.push(t, "bddbc1AxUZNv63YXc4kCfkQ", "scr_shop3");
    cc.Class({
        extends: cc.Component,
        properties: {},
        onLoad: function () {
            var thisModule = this, data = e("scr_data"), a = e("scr_effect"), i = e("scr_public"),
                floorchooseUI = cc.find("Canvas/UI1"), canteen = cc.find("Canvas/UI2"),
                floor1 = floorchooseUI.getChildByName("choice1"), floor2 = floorchooseUI.getChildByName("choice2"), floor3 = floorchooseUI.getChildByName("choice3"), floor4 = floorchooseUI.getChildByName("choice4"), floor5 = floorchooseUI.getChildByName("choice5"),
                floor6 = floorchooseUI.getChildByName("choice6"),
                rateoffloor = [70, 70, 70, 70, 50, 100],//test 100出现率
                dataofiteminffloor1 = [["披风", 15, 1, 100], ["小裤裤", 21, 1, 20], ["晓月手链", 27, 1, 20], ["幸运石", 26, 1, 20], ["板砖", 20, 1, 20], ["JK制服", 24, 1, 20]];
            (function () {
                floorchooseUI.active = !0;
                canteen.active = !0;
                canteen.scale = 0;
                thisModule.calltimesinF5 = 0;
                thisModule.gameTime1 = data.publicVar3[6];
                thisModule.gameTime2 = data.publicVar3[6];
                thisModule.r1 = 100 * Math.random();
                thisModule.r2 = 100 * Math.random();
                thisModule.r3 = 100 * Math.random();
                thisModule.r4 = 100 * Math.random();
                thisModule.r5 = 100 * Math.random();
                thisModule.r6 = 100 * Math.random();
                thisModule.makeMoneyRate = (50 * Math.random() + 25).toFixed(1);
                thisModule.makeMoneyProfit = (50 * Math.random()).toFixed(1);
                thisModule.r3 < rateoffloor[2] && (floor3.getChildByName("text").getComponent("cc.Label").string = "三楼：晓风料理");
                thisModule.itemId = parseInt(5.99 * Math.random());
                thisModule.itemDiscount = parseInt(30 * Math.random() + 60);
                thisModule.itemName = dataofiteminffloor1[thisModule.itemId][0];
                thisModule.itemPrice = dataofiteminffloor1[thisModule.itemId][3];
                thisModule.finalPrice = parseInt(thisModule.itemPrice * thisModule.itemDiscount / 100);
            })();
            givetexttobutton();
            (function () {
                floorchooseUI.getChildByName("back").on("touchstart", function () {
                    e("scr_public").save();
                    cc.director.loadScene("main");
                }, this);
                thisModule.r1 < rateoffloor[0] ? floor1.on("touchstart", functionofF1, floor1) : floor1.on("touchstart", callbacknotopen, floor1);
                thisModule.r2 < rateoffloor[1] ? floor2.on("touchstart", functionofF2, floor2) : floor2.on("touchstart", callbacknotopen, floor2);
                thisModule.r3 < rateoffloor[2] ? floor3.on("touchstart", justfade, floor3) : floor3.on("touchstart", callbacknotopen, floor3);
                thisModule.r4 < rateoffloor[3] ? floor4.on("touchstart", functionofF4, floor4) : floor4.on("touchstart", callbacknotopen, floor4);
                data.publicVar3[7] > 800 ? floor5.on("touchstart", showfloor5disable, floor5) : thisModule.r5 < rateoffloor[4] ? floor5.on("touchstart", showdisable, floor5) : floor5.on("touchstart", functionofF5, floor5);
                thisModule.r6 < rateoffloor[5] ? floor6.on("touchstart", functionofF6, floor6) : floor6.on("touchstart", function () {
                    a.playText("Canvas/notify", "“现在还不是时候！”", 60);
                }, floor6);
                canteen.getChildByName("choice1").on("touchstart", eathanbeger, this);
                canteen.getChildByName("choice2").on("touchstart", eatguozi, this);
                canteen.getChildByName("back").on("touchstart", function () {
                    canteen.runAction(cc.scaleTo(.3, 0));
                    (function () {
                        settextclear();
                        floorchooseUI.runAction(cc.scaleTo(.3, 1));
                    })();
                }, this);
            })();
            judgefloor2();
            judgefloor6();
            function judgefloor6() {
                thisModule.r6 < rateoffloor[5] ? floor6.getChildByName("text").getComponent("cc.Label").string = "六楼：秋良传送门" : floor6.getChildByName("text").getComponent("cc.Label").string = "？？？？？（未开启...）";
            }
            function functionofF6() {
                // 创建一个新的场景
                data.publicVar[13] = 4;
                e("scr_public").save();
                cc.director.loadScene("main", function () {
                    e("scr_effect").playText("Canvas/Text/txt_notify", "你已到达日本，可以开始探索啦~", 60);
                });
                /*t.plotId = 1;
                t.enemyId = 108;
                a.save();
                cc.director.loadScene("plot");*/
            }
            function functionofF5() {
                if (thisModule.calltimesinF5 >= 3) a.playText("Canvas/notify", "“啊哈哈哈哈哈~有些累了...下次再来哈~”", 60); else if (data.money >= 10) {
                    var e = Math.max(100 - data.publicVar3[8], 0), i = 100 * Math.random();
                    data.publicVar3[7] -= 10;
                    thisModule.calltimesinF5 += 1;
                    data.money -= 10;
                    if (i < e) {
                        data.orderTimes[4] += 1;
                        a.playText("Canvas/notify", "电疗成功！烟瘾减少1%，电疗店总资产+1元", 60);
                    } else {
                        data.health -= 1;
                        a.playText("Canvas/notify", "电疗失败...健康减1点...电疗店总资产+1元", 60);
                    }
                    givetexttobutton();
                } else a.playText("Canvas/notify", "没钱！", 60);
            }
            function functionofF4() {
                if (thisModule.gameTime2 - thisModule.gameTime1 > 30) a.playText("Canvas/notify", "“小兄弟，没身份证的人只能临时上机两小时哦，我怕警察来查，请下次再玩吧~”", 60); else if (20 == data.publicVar3[6]) {
                    data.money += 1;
                    data.publicVar3[6] += 1;
                    a.playText("Canvas/notify", "你玩游戏的热情让网吧老板很是感动，老板鼓励你坚持梦想，并奖励你0.1元，~", 60);
                } else if (50 == data.publicVar3[6]) {
                    data.money += 5;
                    data.publicVar3[6] += 1;
                    a.playText("Canvas/notify", "你成功晋级青铜段位，老板流出喜悦的泪水，并奖励你0.5元~", 60);
                } else if (90 == data.publicVar3[6]) {
                    data.hunger = i.maxHunger();
                    data.publicVar3[6] += 1;
                    a.playText("Canvas/notify", "你成功晋级白银段位，老板高兴的请你吃了一顿麻辣烫，饥饿全恢复！", 60);
                } else if (140 == data.publicVar3[6]) {
                    data.money += 20;
                    data.itemNum2[25] += 1;
                    data.publicVar3[6] += 1;
                    givetexttobutton();
                    a.playText("Canvas/notify", "你成功晋级黄金段位，老板奖励你2元钱，和一件个护身符~", 60);
                } else if (200 == data.publicVar3[6]) {
                    data.itemNum2[21] += 1;
                    data.itemNum2[22] += 1;
                    data.publicVar3[6] += 1;
                    a.playText("Canvas/notify", "你成功晋级白金段位，老板赠送你她的贴身衣物，获得【女装】*1和【小裤裤】*1！", 60);
                } else if (300 == data.publicVar3[6]) {
                    data.hunger = i.maxHunger();
                    data.publicVar3[6] += 1;
                    givetexttobutton();
                    a.playText("Canvas/notify", "你成功晋级砖石段位，老板兴奋的邀你去她房里睡一觉，精力全恢复！", 60);
                } else if (450 == data.publicVar3[6]) {
                    data.itemNum2[17] += 1;
                    data.itemNum2[26] += 1;
                    data.itemNum2[27] += 1;
                    data.publicVar3[6] += 1;
                    a.playText("Canvas/notify", "你成功晋级大师段位，老板赠送你一些收集品，获得【晓月手链】*1【幸运石】*1【放大镜】*1！", 60);
                } else if (700 == data.publicVar3[6]) {
                    data.role.att += 50;
                    data.role.def += 25;
                    data.role.maxHp += 250;
                    data.publicVar3[6] += 1;
                    i.save();
                    a.playText("Canvas/notify", "你成功晋级王者段位，老板授予你「王的男人」称号，攻击永久+50，防御永久+25，生命永久+250！", 60);
                } else if (data.money >= 1) {
                    var e = Math.min((40 + data.publicVar3[6] / 10).toFixed(1), 75), c = 100 * Math.random();
                    data.money -= 1;
                    if (c < e) {
                        data.publicVar3[5] < 99 && (data.publicVar3[5] += 1);
                        data.publicVar3[6] += 1;
                        thisModule.gameTime2 += 1;
                        a.playText("Canvas/notify", "游戏胜利！炒开森~攻防血提高1%（临时效果，随天数缓慢衰减）。游戏技术+1", 60);
                        givetexttobutton();
                    } else {
                        data.publicVar3[5] = 0;
                        data.publicVar3[6] += 1;
                        thisModule.gameTime2 += 1;
                        a.playText("Canvas/notify", "游戏失败！不开心~属性加成消失...游戏技术+1", 60);
                        givetexttobutton();
                    }
                } else a.playText("Canvas/notify", "没钱...", 60);
            }
            function justfade() {
                floorchooseUI.runAction(cc.scaleTo(.3, 0));
                (function () {
                    settextclear();
                    canteen.runAction(cc.scaleTo(.3, 1));
                })();
            }
            function eathanbeger() {
                if (data.hunger > i.maxHunger()) a.playText("Canvas/notify", "已经吃不下啦...", 60); else if (data.itemNum[3] >= 4 && data.itemNum[0] >= 5) {
                    data.hunger += 350;
                    data.maxHunger += 15;
                    data.itemNum[3] -= 4;
                    data.itemNum[0] -= 5;
                    data.publicVar3[13] += 1;
                    a.playText("Canvas/notify", "饥饿+350，最大饥饿值提高15点！", 60);
                    givetexttobutton();
                } else a.playText("Canvas/notify", "食材不足~", 60);
            }
            function eatguozi() {
                if (data.hunger > i.maxHunger()) a.playText("Canvas/notify", "已经吃不下啦...", 60); else if (data.itemNum[0] >= 5) {
                    data.hunger += 100;
                    data.health += 2;
                    data.itemNum[0] -= 5;
                    a.playText("Canvas/notify", "饥饿+100，健康值+2！", 60);
                    givetexttobutton();
                } else a.playText("Canvas/notify", "食材不足~", 60);
            }
            function functionofF1() {
                var e = 100 * Math.random();
                if (0 == thisModule.makeMoneyRate) a.playText("Canvas/notify", "“今日已投资，请明日再来吧~”", 60); else if (0 == data.money) a.playText("Canvas/notify", "“不好意思，请你出去~”", 60); else if (data.money > 500) a.playText("Canvas/notify", "“不好意思，你已超过国家监管限定金额，请你去实体银行吧，我们只是网上的小银行~”", 60); else if (e < thisModule.makeMoneyRate) {
                    var i = parseInt(data.money * thisModule.makeMoneyProfit / 100);
                    data.money += i;
                    a.playText("Canvas/notify", "投资成功！金钱增加" + thisModule.makeMoneyProfit + "%(+" + (i / 10).toFixed(1) + ")", 60);
                    thisModule.makeMoneyRate = 0;
                    givetexttobutton();
                } else {
                    i = parseInt(data.money * thisModule.makeMoneyProfit / 100);
                    data.money -= i;
                    a.playText("Canvas/notify", "投资失败...金钱缩水" + thisModule.makeMoneyProfit + "%(-" + (i / 10).toFixed(1) + ")", 60);
                    thisModule.makeMoneyRate = 0;
                    givetexttobutton();
                }
            }
            function functionofF2() {
                if (thisModule.itemDiscount >= 9999) a.playText("Canvas/notify", "商品已售罄~", 60); else if (data.money >= thisModule.finalPrice) {
                    var e = dataofiteminffloor1[thisModule.itemId][1], i = dataofiteminffloor1[thisModule.itemId][2];
                    data.money -= thisModule.finalPrice;
                    data.itemNum2[e] += i;
                    a.playText("Canvas/notify", "获得【" + thisModule.itemName + "】*" + i, 60);
                    thisModule.itemDiscount = 9999;
                    givetexttobutton();
                    judgefloor2();
                } else a.playText("Canvas/notify", "金钱不足！", 60);
            }
            function judgefloor2() {
                thisModule.itemDiscount >= 9999 ? floor2.getChildByName("text").getComponent("cc.Label").string = "二楼：晓风服饰（已售罄~）" : thisModule.r2 < rateoffloor[1] ? floor2.getChildByName("text").getComponent("cc.Label").string = "二楼：晓风服饰（" + thisModule.itemName + "," + thisModule.itemDiscount + "折," + (thisModule.finalPrice / 10).toFixed(1) + "元）" : floor2.getChildByName("text").getComponent("cc.Label").string = "？？？？（放假中...）";
            }
            function givetexttobutton() {
                thisModule.r1 < rateoffloor[0] ? floor1.getChildByName("text").getComponent("cc.Label").string = "一楼：晓风金融（赢钱概率" + thisModule.makeMoneyRate + "%）" : floor1.getChildByName("text").getComponent("cc.Label").string = "？？？？（放假中...）";
                thisModule.r4 < rateoffloor[3] ? floor4.getChildByName("text").getComponent("cc.Label").string = "四楼：晓风网咖（属性+" + data.publicVar3[5] + "%,胜率" + Math.min((40 + data.publicVar3[6] / 10).toFixed(1), 75) + "%）" : floor4.getChildByName("text").getComponent("cc.Label").string = "？？？？（放假中...）";
                cc.find("Canvas/UI2/hunger").getComponent("cc.Label").string = "饥饿 " + data.hunger + "/" + i.maxHunger();
                cc.find("Canvas/money").getComponent("cc.Label").string = "金钱 " + (data.money / 10).toFixed(1);
                data.publicVar3[7] > 800 ? floor5.getChildByName("text").getComponent("cc.Label").string = "关门大吉！转行啦~" : thisModule.r5 < rateoffloor[4] ? floor5.getChildByName("text").getComponent("cc.Label").string = "？？？？（心情不好，外出旅游啦~）" : floor5.getChildByName("text").getComponent("cc.Label").string = "五楼：小风电疗（资产" + ((800 - data.publicVar3[7]) / 10).toFixed(1) + "元,成功率" + Math.max(100 - data.publicVar3[8], 0) + "%）";
                i.save();
            }
            function showfloor5disable() {
                a.playText("Canvas/notify", "由于经济不景气，公司倒闭，老板转行卖土鸡蛋去啦~", 60);
            }
            function callbacknotopen() {
                a.playText("Canvas/notify", "“放假啦！哈哈哈哈哈！”", 60);
            }
            function showdisable() {
                a.playText("Canvas/notify", "“再为难~也不能耽误放假呀！哈哈哈哈哈！”", 60);
            }
            function settextclear() {
                cc.find("Canvas/notify").getComponent("cc.Label").string = "";
            }
        }
    });
    cc._RF.pop();
}, {
    scr_data: "scr_data",
    scr_effect: "scr_effect",
    scr_public: "scr_public"
}]