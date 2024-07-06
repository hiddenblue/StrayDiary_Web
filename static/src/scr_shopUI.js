scr_shopUI = [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "ca1d33wMc1MzoV4yHqs7mr9", "scr_shopUI");
    cc.Class({
        extends: cc.Component,
        properties: {
            itemUI: {
                default: null,
                type: cc.Prefab
            }
        },
        //func 商店传送门
        itemContent: function () {
            var thisScrModule = this;
            this.data = e("scr_data");
            this.data.evil.virtueLevel > 0 ? 0.2 : 0;
            class Good {
                constructor(itemName, needDes, price, ifEnough, button1, button2) {
                    this.data = e("scr_data");
                    this.count = 1;
                    this.itemName = itemName;
                    this.needDes = needDes;
                    this.price = price;
                    this.ifEnough = ifEnough;
                    this.button1 = button1;
                    this.button2 = button2;
                }
                displayInfo() {
                    console.log(`Item Name: ${this.itemName}, Price: ${this.price}`);
                }
            }
            var items = [];
            items.push(new Good(" 木材*10（拥有" + this.data.itemNum[1] + ")", "购买1次/5次：1元/5元", 10 * (1), function (t) {
                cc.find("Canvas/Page/view/content/page_1/" + t + "/button2/text").getComponent("cc.Label").string = "购买*5";
                e("scr_data").money >= 10 * (1) && (cc.find("Canvas/Page/view/content/page_1/" + t + "/name").color = new cc.color(0, 255, 0));
            }, function () {
                var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
                var cost = Math.ceil(10 * (1));
                if (n.money >= cost) {
                    if (4 == n.publicVar[1]) {
                        buy(cost, 12, 1, "木材");

                    } else {
                        buy(cost, 10, 1, "木材");
                    }

                } else a.playText("Canvas/notify", "钱不够！", 100);
            }, function () {
                var cost = Math.ceil(10 * (1) * 5);
                var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
                if (n.money >= 50) {
                    if (4 == n.publicVar[1]) {
                        buy(cost, 60, 1, "木材");
                    } else {
                        buy(cost, 50, 1, "木材");
                    }
                } else a.playText("Canvas/notify", "钱不够！", 100);
            }));
            let providedObject = {
                itemName: "亚麻*10（拥有" + this.data.itemNum[4] + ")",
                needDes: "购买1次/5次：1元/5元",
                price: 10 * (1),
                ifEnough: function (t) {
                    cc.find("Canvas/Page/view/content/page_1/" + t + "/button2/text").getComponent("cc.Label").string = "购买*5";
                    e("scr_data").money >= 10 * (1) && (cc.find("Canvas/Page/view/content/page_1/" + t + "/name").color = new cc.color(0, 255, 0));
                },
                button1: function () {
                    var cost = Math.ceil(10 * (1));
                    var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
                    if (n.money >= cost) {
                        if (4 == n.publicVar[1]) {
                            buy(cost, 12, 4, "亚麻");
                        } else {
                            buy(cost, 10, 4, "亚麻");
                        }
                    } else a.playText("Canvas/notify", "钱不够！", 100);
                },
                button2: function () {
                    var cost = Math.ceil(10 * (1) * 5);
                    var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
                    if (n.money >= cost) {
                        if (4 == n.publicVar[1]) {
                            buy(cost, 60, 4, "亚麻");
                        } else {
                            buy(cost, 50, 4, "亚麻");
                        }
                    } else a.playText("Canvas/notify", "钱不够！", 100);
                }
            };

            // 实例化Good对象并添加到items数组
            let goodItem = new Good(providedObject.itemName, providedObject.needDes, providedObject.price, providedObject.ifEnough, providedObject.button1, providedObject.button2);
            items.push(goodItem);
            // 假设Good类已经定义，且items数组已经存在

            // 从提供的对象直接转换并添加到items数组
            items.push(new Good(
                "果子*5（拥有" + this.data.itemNum[0] + ")",
                "购买1次/5次：0.5元/2.5元",
                5 * (1),
                function (t) {
                    cc.find("Canvas/Page/view/content/page_1/" + t + "/button2/text").getComponent("cc.Label").string = "购买*5";
                    e("scr_data").money >= 5 * (1) && (cc.find("Canvas/Page/view/content/page_1/" + t + "/name").color = new cc.color(0, 255, 0));
                },
                function () {
                    var cost = Math.ceil(5 * (1));
                    var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
                    if (n.money >= cost) {
                        if (4 == n.publicVar[1]) {
                            buy(cost, 6, 0, "果子");
                        } else {
                            buy(cost, 5, 0, "果子");
                        }
                    } else a.playText("Canvas/notify", "钱不够！", 100);
                },
                function () {
                    var cost = Math.ceil(10 * (1) * 5);
                    var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
                    if (n.money >= cost) {
                        if (4 == n.publicVar[1]) {
                            buy(cost, 30, 0, "果子");
                        } else {
                            buy(cost, 25, 0, "果子");
                        }
                    } else a.playText("Canvas/notify", "钱不够！", 100);
                }
            ));
            items.push(new Good(
                "易拉罐（拥有" + this.data.itemNum[2] + ")",
                "售价：每只1毛~",
                1,
                function (t) {
                    e("scr_data").itemNum[2] > 0 && (cc.find("Canvas/Page/view/content/page_1/" + t + "/name").color = new cc.color(0, 255, 0));
                },
                undefined,
                function () {
                    var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = n.itemNum[2];
                    if (c > 0) {
                        n.money += c;
                        n.itemNum[2] -= c;
                        n.shopPoint += c;
                        i.save();
                        a.playText("Canvas/notify", "失去【易拉罐】*" + c + "，获得" + c + "毛钱，积分+" + c, 100);
                        thisScrModule.delayCreatItemUI();
                    } else a.playText("Canvas/notify", "道具不足！", 100);
                }
            ));
            items.push(new Good(
                "生肉*2（拥有" + this.data.itemNum[3] + ")",
                "购买1次/5次：0.4元/2元",
                4 * (1),
                function (t) {
                    cc.find("Canvas/Page/view/content/page_2/" + t + "/button2/text").getComponent("cc.Label").string = "购买*5";
                    e("scr_data").money >= 4 * (1) && (cc.find("Canvas/Page/view/content/page_2/" + t + "/name").color = new cc.color(0, 255, 0));
                },
                function () {
                    var cost = Math.ceil(4 * (1));
                    var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
                    if (n.money >= cost) {
                        buy(cost, 2, 3, "生肉");
                    } else a.playText("Canvas/notify", "钱不够！", 100);
                },
                function () {
                    var cost = Math.ceil(4 * (1) * 5);
                    var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
                    if (n.money >= cost) {
                        buy(cost, 10, 3, "生肉");
                    } else a.playText("Canvas/notify", "钱不够！", 100);
                }
            ));
            items.push({
                itemName: "艾草*4（拥有" + this.data.itemNum[5] + ")",
                needDes: "购买/出售：0.4元/0.2元",
                price: 4 * (1),
                ifEnough: function (t) {
                    e("scr_data").money >= 4 * (1) && (cc.find("Canvas/Page/view/content/page_2/" + t + "/name").color = new cc.color(0, 255, 0));
                },
                button1: function () {
                    var cost = Math.ceil(4 * (1));
                    var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
                    if (n.money >= cost) {
                        if (4 == n.publicVar[1]) {
                            buy(cost, 5, 5, "艾草");
                        } else {
                            buy(cost, 4, 5, "艾草");
                        }
                    } else a.playText("Canvas/notify", "钱不够！", 100);
                },
                button2: function () {
                    var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
                    if (n.itemNum[5] >= 4) {
                        if (4 == n.publicVar[1]) {
                            buy(2, -4, 5, "艾草");
                        } else {
                            buy(2, -4, 5, "艾草");
                        }
                    } else a.playText("Canvas/notify", "道具不足！", 100);
                }
            });
            items.push(new Good(
                "匕首（当前等级" + this.data.itemNum2[8] + ")",
                "价格：" + (3.2 + 0.3 * this.data.itemNum2[8]).toFixed(1) + "元",
                parseInt(3.2 + 0.3 * this.data.itemNum2[8]), // 根据需要调整计算方式
                function (t) {
                    cc.find("Canvas/Page/view/content/page_2/" + t + "/button1/text").getComponent("cc.Label").string = "升级";
                    var n = e("scr_data");
                    n.money >= 32 + 3 * n.itemNum2[8] && (cc.find("Canvas/Page/view/content/page_2/" + t + "/name").color = new cc.color(0, 255, 0));
                },
                function () {
                    var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 32 + 3 * n.itemNum2[8], o = n.money;
                    if (n.itemNum2[8] >= 50) {
                        a.playText("Canvas/notify", "匕首已经满级了！", 100);
                        return;
                    }
                    if (o >= c) {
                        n.money -= c;
                        n.itemNum2[8] += 1;
                        n.shopPoint += c; // 注意这里使用c而不是r，因为r未定义
                        i.save();
                        a.playText("Canvas/notify", "匕首等级提高1级！积分*" + c + "！", 100);
                        thisScrModule.delayCreatItemUI();
                    } else a.playText("Canvas/notify", "钱不够！", 100);
                },
                undefined
            ));
            items.push(new Good(
                "皮衣（当前等级" + this.data.itemNum2[9] + ")",
                "价格：" + (2 + .2 * this.data.itemNum2[9]).toFixed(1) + "元",
                20 + 2 * this.data.itemNum2[9], // 根据给定的逻辑计算价格
                function (t) {
                    cc.find("Canvas/Page/view/content/page_2/" + t + "/button1/text").getComponent("cc.Label").string = "升级";
                    var n = e("scr_data");
                    n.money >= 20 + 2 * n.itemNum2[9] && (cc.find("Canvas/Page/view/content/page_2/" + t + "/name").color = new cc.color(0, 255, 0));
                },
                function () {
                    var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 20 + 2 * n.itemNum2[9], o = n.money;
                    if (n.itemNum2[9] >= 50) {
                        a.playText("Canvas/notify", "皮衣已经满级了！", 100);
                        return;
                    }
                    if (o >= c) {
                        n.money -= c;
                        n.itemNum2[9] += 1;
                        n.shopPoint += c; // 使用c而不是重新计算的r，因为它们是相同的
                        i.save();
                        a.playText("Canvas/notify", "皮衣等级提高1级！积分*" + c + "！", 100);
                        thisScrModule.delayCreatItemUI();
                    } else a.playText("Canvas/notify", "钱不够！", 100);
                },
                undefined // button2为void 0，直接使用undefined
            ));
            items.push(new Good(
                "电饭煲（当前等级" + this.data.itemNum2[30] + ")",
                "价格：10元，做饭的时候非常方便",
                100 * (1),
                function (t) {
                    e("scr_data").money >= 100 * (1) && (cc.find("Canvas/Page/view/content/page_3/" + t + "/name").color = new cc.color(0, 255, 0));
                },
                function () {
                    var cost = Math.ceil(100 * (1));
                    var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
                    if (n.money >= 100) {
                        if (0 == n.itemNum2[30]) {
                            n.money -= 100;
                            n.itemNum2[30] += 1;
                            n.shopPoint += 100;
                            i.save();
                            a.playText("Canvas/notify", "获得【电饭煲】*1！积分*100！", 100);
                            thisScrModule.delayCreatItemUI();
                        } else {
                            a.playText("Canvas/notify", "已经买过了", 100);
                        }
                    } else a.playText("Canvas/notify", "钱不够！", 100);
                },
                undefined
            ));
            items.push(new Good(
                "抽奖",
                "价格：100积分，随机获得一份奖励！",
                100,
                function (t) {
                    cc.find("Canvas/Page/view/content/page_3/" + t + "/button1/text").getComponent("cc.Label").string = "抽奖";
                    e("scr_data").shopPoint >= 100 && (cc.find("Canvas/Page/view/content/page_3/" + t + "/name").color = new cc.color(0, 255, 0));
                },
                function () {
                    var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
                    if (n.shopPoint >= 100) {
                        n.shopPoint -= 100;
                        var reward = function () {
                            var result = "", randomNum = 100 * Math.random(), data = e("scr_data");
                            if (randomNum <= 20) {
                                data.money += 10;
                                result = "1元钱！";
                            } else if (randomNum <= 30) {
                                data.itemNum2[23] += 1;
                                result = "【创可贴】*1！";
                            } else if (randomNum <= 50) {
                                data.itemNum2[21] += 1;
                                result = "【小裤裤】*1！";
                            } else if (randomNum <= 70) {
                                data.itemNum2[20] += 1;
                                result = "【板砖】*1！";
                            } else if (randomNum <= 90) {
                                data.itemNum2[26] += 1;
                                result = "【幸运石】*1！";
                            } else if (randomNum <= 95) {
                                data.itemNum2[27] += 1;
                                result = "【晓月手链】*1！";
                            } else if (randomNum <= 100) {
                                data.itemNum2[24] += 1;
                                result = "【JK制服】*1！";
                            }
                            return result;
                        }();
                        i.save();
                        a.playText("Canvas/notify", "恭喜获得，" + reward, 100);
                        thisScrModule.delayCreatItemUI();
                    } else a.playText("Canvas/notify", "积分不够！", 100);
                },
                undefined
            ));

            return items;
        },
        buy: function (cost, count, itemID, itemName) {
            var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
            n.money -= cost;
            n.itemNum[itemID] += count;
            n.shopPoint += cost;
            i.save();
            a.playText("Canvas/notify", "获得【" + itemName + "】*" + count + "！积分*" + cost + "！", 100);
            t.delayCreatItemUI();
        },
        creatPrefab: function (itemID, targetNodeName) {
            var shopNode = cc.instantiate(this.itemUI),
                item = this.itemContent()[itemID],
                button1 = item.button1, button2 = item.button2,
                itemNodeNameInScene = "item" + itemID;
            shopNode.name = itemNodeNameInScene;
            shopNode.getChildByName("name").getComponent("cc.Label").string = item.itemName;
            shopNode.getChildByName("need").getComponent("cc.Label").string = item.needDes;
            if (typeof button1 !== 'undefined') {
                shopNode.getChildByName("button1").getComponent("cc.Button").scheduleOnce(function () {
                    shopNode.getChildByName("button1").on("touchstart", button1, this);
                }, 0.05);
            } else {
                shopNode.getChildByName("button1").active = false;
            }
            if (typeof button2 !== 'undefined') {
                shopNode.getChildByName("button2").getComponent("cc.Button").scheduleOnce(function () {
                    shopNode.getChildByName("button2").on("touchstart", button2, this);
                }, 0.05);
            } else {
                shopNode.getChildByName("button2").active = false;
            }
            cc.find("Canvas/Page/view/content").getChildByName(targetNodeName).addChild(shopNode);
            if (typeof item.ifEnough !== 'undefined') {
                item.ifEnough(itemNodeNameInScene);
            }
        },
        creatItemUI1: function () {
            this.initText();
            cc.find("Canvas/Page/view/content/page_1").removeAllChildren();
            for (var e = 0; e <= 3; e++) this.creatPrefab(e, "page_1");
        },
        creatItemUI2: function () {
            this.initText();
            cc.find("Canvas/Page/view/content/page_2").removeAllChildren();
            for (var e = 4; e <= 7; e++) this.creatPrefab(e, "page_2");
        },
        creatItemUI3: function () {
            this.initText();
            cc.find("Canvas/Page/view/content/page_3").removeAllChildren();
            for (var e = 8; e <= 9; e++) this.creatPrefab(e, "page_3");
        },
        initText: function () {
            var t = e("scr_data");
            cc.find("Canvas/money").getComponent("cc.Label").string = "金钱：" + (t.money / 10).toFixed(1) + "元";
            cc.find("Canvas/point").getComponent("cc.Label").string = "积分：" + t.shopPoint;
        },
        delayCreatItemUI: function () {
            var e = this;
            this.scheduleOnce(function () {
                e.creatItemUI1();
                e.creatItemUI2();
                e.creatItemUI3();
            }, .05);
        },
        delayCreatItemUI1: function () {
            this.scheduleOnce(this.creatItemUI1, .05);
        },
        delayCreatItemUI2: function () {
            this.scheduleOnce(this.creatItemUI2, .05);
        },
        delayCreatItemUI3: function () {
            this.scheduleOnce(this.creatItemUI3, .05);
        },
        onLoad: function () {
            this.creatItemUI1();
            this.creatItemUI2();
            this.creatItemUI3();
        }
    });
    cc._RF.pop();
}, {
    scr_data: "scr_data",
    scr_effect: "scr_effect",
    scr_public: "scr_public"
}]