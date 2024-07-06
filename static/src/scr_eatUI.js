scr_eatUI = [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "d3b81KfDgxIVoCTL1xk+Q03", "scr_eatUI");
    cc.Class({
        extends: cc.Component,
        properties: {
            itemUI: {
                default: null,
                type: cc.Prefab
            }
        },
        //进食物品传送门
        itemContent: function () {
            var t = this;
            this.data = e("scr_data");
            var n = 3 * this.data.orderTimes[1] - this.data.orderTimes[4];
            //1 == this.data.publicVar[1] && (n = 1 * this.data.orderTimes[1] - this.data.orderTimes[4]);
            var a = {
                0: {
                    itemName: " 果子 ",
                    needDes: "※拥有：" + this.data.itemNum[0],
                    des: "※效果：饥饿+20，15%几率恢复1点健康值,今天你吃了" + this.data.orderTimes[10] + "次果子",
                    ifEnough: function (t) {
                        e("scr_data").itemNum[0] > 0 && (cc.find("Canvas/Page/view/content/page_1/" + t + "/button/name").color = new cc.color(0, 255, 0));
                    },
                    button: function () {
                        var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = n.itemNum[0], o = i.maxHunger();
                        if (n.hunger < o) if (c >= 1) {
                            var r = "饥饿+20", s = 100 * Math.random();
                            n.itemNum[0] -= 1;
                            n.hunger += 20;
                            n.orderTimes[5] += 1;
                            n.orderTimes[10] += 1;
                            if (s < 15) {
                                n.health += 1;
                                r += "，健康值+1";
                            }
                            i.save();
                            a.playText("Canvas/notify", r + "！", 100);
                            t.delayCreatItemUI1();
                        } else a.playText("Canvas/notify", "道具不足！", 100); else a.playText("Canvas/notify", "已经吃不下了！", 100);
                    }
                },
                1: {
                    itemName: " 熟肉 ",
                    needDes: "※拥有：" + this.data.itemNum2[0],
                    des: "※效果：饥饿+70,今天你吃了" + this.data.orderTimes[11] + "次熟肉",
                    ifEnough: function (t) {
                        e("scr_data").itemNum2[0] > 0 && (cc.find("Canvas/Page/view/content/page_1/" + t + "/button/name").color = new cc.color(0, 255, 0));
                    },
                    button: function () {
                        var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = n.itemNum2[0], o = i.maxHunger();
                        if (n.hunger < o) if (c >= 1) {
                            n.itemNum2[0] -= 1;
                            n.hunger += 70;
                            n.orderTimes[2] += 1;
                            n.orderTimes[11] += 1;
                            i.save();
                            a.playText("Canvas/notify", "饥饿+70！", 60);
                            t.delayCreatItemUI1();
                        } else a.playText("Canvas/notify", "道具不足！", 100); else a.playText("Canvas/notify", "已经吃不下了！", 100);
                    }
                },
                2: {
                    itemName: " 伤药 ",
                    needDes: "※拥有：" + this.data.itemNum2[1],
                    des: "※效果：恢复" + (30 + this.data.orderTimes[0]) + "生命值，增加10点基础最大生命值，且每次使用恢复量永久提高1点",
                    ifEnough: function (t) {
                        e("scr_data").itemNum2[1] > 0 && (cc.find("Canvas/Page/view/content/page_1/" + t + "/button/name").color = new cc.color(0, 255, 0));
                    },
                    button: function () {
                        var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 30 + n.orderTimes[0], o = n.itemNum2[1], r = n.role.hp, s = i.role.maxHp();
                        if (r < s) if (o >= 1) {
                            n.itemNum2[1] -= 1;
                            n.role.maxHp += 10;
                            n.role.hp += c;
                            n.role.hp > s && (n.role.hp = s);
                            n.orderTimes[0] += 1;
                            i.save();
                            a.playText("Canvas/notify", "Hp+" + c + "maxHp + 10 ", 60);
                            t.delayCreatItemUI1();
                        } else a.playText("Canvas/notify", "道具不足！", 100); else a.playText("Canvas/notify", "生命已达最大值！", 100);
                    }
                },
                3: {//tag 进食物品传送门
                    itemName: " 香烟 ",
                    needDes: "※拥有：" + this.data.itemNum2[7] + "（你当前烟瘾为" + n + "%）",
                    des: "※效果：减少1点健康。恢复" + (50 + this.data.orderTimes[8] * 5) + "精力，解除【烟瘾】BUFF！你，今天第" + this.data.orderTimes[8] + "次抽烟",
                    ifEnough: function (t) {
                        e("scr_data").itemNum2[7] > 0 && (cc.find("Canvas/Page/view/content/page_1/" + t + "/button/name").color = new cc.color(0, 255, 0));
                    },
                    button: function () {
                        var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = n.itemNum2[7],
                            //Energy = 10 * parseInt(Math.max(0.05 - 0.01 * n.orderTimes[8], 0) * i.maxEnergy());
                            //Energy = 10 * parseInt(0.05 * i.maxEnergy());
                            Energy = 50 + n.orderTimes[8] * 5,
                            text = "";
                        if (2 == n.publicVar[1]) {
                            a.playText("Canvas/notify", "好孩子不能抽烟哦！", 100)
                        }
                        else if (c >= 1) {

                            n.itemNum2[7] -= 1;
                            n.energy += Energy;

                            n.orderTimes[8] += 1;
                            //n.role.hp = i.role.maxHp();
                            n.skillLv[4] = 0;
                            n.itemNum[7] += 1;
                            n.buffState[2] = 1;

                            var rate = n.orderTimes[8] * 3 + n.orderTimes[1] * 3 - n.orderTimes[4];
                            if (Math.random() * 100 < 15) {
                                n.orderTimes[1] += 1;
                                n.health -= 1;
                                text = "烟瘾增加！健康-1"
                            }
                            if (Math.random() * 100 < rate) {
                                n.orderTimes[1] += 1;
                                n.health -= 1;
                                n.maxHealth -= 1;
                                text = "烟瘾增加！健康/最大健康-1"
                            }

                            i.save();
                            a.playText("Canvas/notify", "精力恢复" + Energy + "！获得烟头*1" + text, 100);
                            t.delayCreatItemUI1();
                        } else a.playText("Canvas/notify", "道具不足！", 100);
                    }
                },
                4: {
                    itemName: " 啤酒 ",
                    needDes: "※拥有：" + this.data.itemNum2[12],
                    des: "※效果：恢复30精力，并获得一个【易拉罐】。开罐有奖！你今天已经喝了"
                        + this.data.orderTimes[9] + "次酒，30%几率获得【暴躁】状态（伤害增加30%，战后一定几率消失）",
                    ifEnough: function (t) {
                        e("scr_data").itemNum2[12] > 0 && (cc.find("Canvas/Page/view/content/page_2/" + t + "/button/name").color = new cc.color(0, 255, 0));
                    },
                    button: function () {
                        var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
                        if (2 == n.publicVar[1]) {
                            a.playText("Canvas/notify", "好孩子不能喝酒哦！", 100)
                        }
                        else if (n.itemNum2[12] >= 1) {
                            var c = 100 * Math.random(), o = 100 * Math.random(), r = "精力+30，获得【易拉罐】*1";
                            n.itemNum2[12] -= 1;
                            n.orderTimes[9] += 1;
                            n.energy += 30;
                            n.itemNum[2] += 1;
                            if (c >= 90 && c < 97) {
                                n.itemNum2[12] += 1;
                                r += "，恭喜再来一瓶！";
                            }
                            if (c >= 97) {
                                n.money += 10;
                                r += "，恭喜获得1元大奖！";
                            }
                            if (o < 30) {
                                n.buffState[0] = 1;
                                r += "，获得【暴躁】！";
                            }
                            i.save();
                            a.playText("Canvas/notify", r, 100);
                            t.delayCreatItemUI2();
                        } else a.playText("Canvas/notify", "道具不足！", 100);
                    }
                },
                5: {
                    itemName: " 晓月的爱心料理 ",
                    needDes: "※注满了晓月对你的爱，你有" + this.data.itemNum[13] + "个",
                    des: "※你发誓，这是你这辈子吃过最好吃的东西 。所有属性全面提高，晓月好感越高，加成越高",
                    ifEnough: function (t) {
                        e("scr_data").itemNum[13] > 0 && (cc.find("Canvas/Page/view/content/page_2/" + t + "/button/name").color = new cc.color(255, 0, 0));
                    },
                    button: function () {
                        var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = n.friend_xiaoyue.favorability,
                            r = "入口的那一刻，你快哭出来了";
                        if (n.itemNum[13] > 0) {
                            n.itemNum[13] -= 1;
                            n.maxHunger += parseInt(Math.max(c / 50, 0));
                            n.maxEnergy += parseInt(Math.max(c / 50, 0));
                            n.health += parseInt(Math.max(10, 0));
                            n.energy = i.maxEnergy();
                            n.hunger = i.maxHunger();
                            n.role.att += parseInt(Math.max(c / 10, 0));
                            n.maxHp += parseInt(Math.max(c / 5, 0));
                            n.role.def += parseInt(Math.max(c / 25, 0));
                            n.role.hp = i.role.maxHp();
                            i.save();
                            a.playText("Canvas/notify", r + "！", 100);
                            t.delayCreatItemUI1();
                        } else a.playText("Canvas/notify", "道具不足！", 100);
                    }
                },
                6: {
                    itemName: " 剩饭 ",
                    needDes: "※在餐厅后厨里偷出来的没吃完的饭，你有" + this.data.itemNum[14] + "个",
                    des: "※有些上好的菜几乎只吃了几口...更多的是你没见过的菜，你已经吃了"
                        + this.data.orderTimes[12] + "次剩饭，你吃的次数越多将越能够分辨饭菜是否能吃",
                    ifEnough: function (t) {
                        e("scr_data").itemNum[14] > 1 && (cc.find("Canvas/Page/view/content/page_2/" + t + "/button/name").color = new cc.color(0, 0, 255));
                    },
                    button: function () {
                        var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = n.itemNum[0], o = i.maxHunger();
                        if (n.hunger < o) if (n.itemNum[14] >= 1) {
                            var r = "你大吃了一顿，感觉味道还不错", s = 100 * Math.random(), rate = Math.max(40 + n.orderTimes[12], 75);
                            n.itemNum[14] -= 1;
                            n.hunger += 100;
                            n.orderTimes[12] += 1;
                            if (s <= 40) {
                                n.energy += 50;
                                r += "，似乎有些挺不错的饭菜，精力恢复50";
                            }
                            if (s > rate && s < 80) {
                                n.role.hp = 1;
                                n.hunger -= 90;
                                r = "饭菜似乎变质了，你吃吐了，生命清零";
                            }
                            i.save();
                            a.playText("Canvas/notify", r + "！", 100);
                            t.delayCreatItemUI2();
                        } else a.playText("Canvas/notify", "道具不足！", 100); else a.playText("Canvas/notify", "已经吃不下了！", 100);
                    }
                },
                7: {
                    itemName: " 时光炸弹·败者食尘 ",
                    needDes: "※拥有：" + this.data.itemNum2[33],
                    des: "※通过轰炸时间线来让时间回溯到前一天，并且距离减少50km。这是从帝国科研部冒着九死一生的风险偷来的无价之宝，拥有扭曲时间的能力",
                    ifEnough: function (t) {
                        e("scr_data").itemNum2[33] > 0 && (cc.find("Canvas/Page/view/content/page_2/" + t + "/button/name").color = new cc.color(255, 182, 193));
                    },
                    button: function () {
                        var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = n.itemNum2[33];
                        if (n.distance >= 60) if (c >= 1) {
                            n.itemNum2[33] -= 1;
                            n.distance -= 50;
                            n.day -= 1;
                            n.button[0] = !0;
                            n.button[1] = !0;
                            n.button[2] = !0;
                            i.save();
                            a.playText("Canvas/notify", "随着一段记忆在眼前闪过，你回到了昨天", 60);
                            t.delayCreatItemUI2();
                        } else a.playText("Canvas/notify", "道具不足！", 100); else a.playText("Canvas/notify", "无法回头！", 100);
                    }
                }
            };
            return a;
        },
        creatPrefab: function (e, t) {
            var n = cc.instantiate(this.itemUI), a = this.itemContent()[e], i = a.button, c = "item" + e;
            n.name = c;
            n.getChildByName("button").getChildByName("name").getComponent("cc.Label").string = a.itemName;
            n.getChildByName("need").getComponent("cc.Label").string = a.needDes;
            n.getChildByName("des").getComponent("cc.Label").string = a.des;
            n.getChildByName("button").getChildByName("name").getComponent("cc.Button").scheduleOnce(function () {
                n.getChildByName("button").getChildByName("name").on("touchstart", i, this);
            }, .02);
            cc.find("Canvas/Page/view/content").getChildByName(t).addChild(n);
            "undefined" != typeof a.ifEnough && a.ifEnough(c);
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
            for (var e = 8; e <= 11; e++) this.creatPrefab(e, "page_3");
        },
        initText: function () {
            var t = e("scr_data"), n = e("scr_public");
            cc.find("Canvas/hunger").getComponent("cc.Label").string = "饥饿：" + t.hunger + "/" + n.maxHunger() + "  精力：" + t.energy + "/" + n.maxEnergy() + "  生命：" + t.role.hp + "/" + n.role.maxHp()
        }, delayCreatItemUI1: function () {
            this.scheduleOnce(this.creatItemUI1, .1);//使用 scheduleOnce 方法，在当前帧结束后延迟 0.1 秒执行 creatItemUI1 函数。
        }, delayCreatItemUI2: function () {
            this.scheduleOnce(this.creatItemUI2, .1);
        }, delayCreatItemUI3: function () {
            this.scheduleOnce(this.creatItemUI3, .1);
        }, onLoad: function () {
            this.creatItemUI1(); this.creatItemUI2();
        }
    });
    cc._RF.pop();
}, {
    scr_data: "scr_data",
    scr_effect: "scr_effect",
    scr_public: "scr_public"
}]