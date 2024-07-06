scr_rest = [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "6fbc4dkoxJCWoP/GvoxW/9l", "scr_rest");
    cc.Class({
        extends: cc.Component,
        properties: {},
        creatText: function (e, t) {
            var n = new cc.Node(e);
            n.addComponent(cc.Label);
            n.parent = cc.find("Canvas/SkillShow");
            n.setPosition(0, 0);
            n.color = new cc.Color(255, 255, 255);
            n.getComponent(cc.Label).overflow = 3;
            n.getComponent(cc.Label).horizontalAlign = 0;
            n.setContentSize(600, 300);
            n.getComponent(cc.Label).string = t;
            n.getComponent(cc.Label).lineHeight = 60;
            n.getComponent(cc.Label).fontSize = 40;
        },
        //休息按钮传送门
        restMain: function () {
            var t = e("scr_data"), n = e("scr_public"), a = t.skillLv, i = this;
            (function () {
                t.publicVar2[20] = parseInt(100 * Math.random() - 40);
                t.publicVar[14] = parseInt(50 * Math.random());
                t.publicVar3[4] = 0;
                t.publicVar3[9] = 0;
                t.publicVar3[10] = 0;
                t.publicVar3[11] = 0;
                t.publicVar3[16] = 0;
                t.publicVar3[17] = 0;
                t.publicVar3[18] = 0;
                t.orderTimes[8] = 0;
                0 == t.publicVar3[2] ? t.publicVar[13] = 0 : t.publicVar[13] = 1;
                t.publicVar3[15] = 0;
                t.plotId = 0;
            })();
            (function () {
                t.day += 1;
                cc.find("Canvas/Day").getComponent("cc.Label").string = "第" + t.day + "天";
            })();
            n.autoEat();
            (function () {
                var e = 3 * t.orderTimes[1] - t.orderTimes[4], n = 100 * Math.random();
                //1 == t.publicVar[1] && (e = t.orderTimes[1] - t.orderTimes[4]);
                if (n < e) {
                    t.publicVar2[8] += 1;
                    t.skillLv[4] = 1;//(t.skillLv[4] * 0.1 * (3 * t.orderTimes[1] - t.orderTimes[4]))
                    i.creatText("smoke", "【烟瘾】攻击防御减少" + t.skillLv[4] * 100 + "%");
                } else t.skillLv[4] = 0;
            })();
            (function () {
                var e = 15 * t.orderTimes[9], n = 100 * Math.random();
                t.orderTimes[9] = 0;
                if (n < e) {
                    t.skillLv[27] = 1;
                    i.creatText("drunk", "【宿醉】伤害减少30%");
                } else {
                    t.skillLv[27] = 0
                };
            })();
            (function () {// 新特性
                var guozi = 2 * t.orderTimes[10], shurou = 1 * t.orderTimes[11], rate = guozi / shurou, exp = t.publicVar2[26],
                    min = ((500 + exp) / (350 - exp)), max = ((850 + exp) / (150 - exp));
                t.orderTimes[10] = 0;
                t.orderTimes[11] = 0;
                if (rate < max && min < rate) {
                    t.buffState[3] = 1;
                    i.creatText("some", "【营养均衡】额外恢复20精力");
                } else {
                    t.buffState[3] = 0;
                };
            })();
            //tag 每天事件早上结算传送门
            (function () {
                cc.find("Canvas/energy/text");
                var e = 0, a = n.maxEnergy();
                t.energy += a;
                t.energy > a && (t.energy = a);
                if (c()) {
                    e = 20;
                    t.energy += e;
                }
                if (1 == t.buffState[3]) {
                    e = 20;
                    t.energy += e;
                }
                cc.find("Canvas/AttrShow/energy/text").getComponent("cc.Label").string = "精力 +" + (a + e) + "（" + t.energy + "/" + a + "）";
            })();
            (function () {
                if (t.itemNum2[6] > 0) {
                    var e = 30 * t.itemNum2[6];
                    n.role.maxHp();
                    c() && (e *= 2);
                    t.role.hp += e;
                    n.ifMaxHp();
                    cc.find("Canvas/AttrShow/hp/text").getComponent("cc.Label").string = "生命 +" + e + "（" + t.role.hp + "/" + n.role.maxHp() + "）";
                } else cc.find("Canvas/AttrShow/hp").active = !1;
            })();
            (function () {
                var e = n.regionId();
                1e3 == e && (t.stayDay[0] += 1);
                2e3 == e && (t.stayDay[1] += 1);
                3e3 == e && (t.stayDay[2] += 1);
                4e3 == e && (t.stayDay[3] += 1);
            })();
            //每日刷新怪物对应编号传送门
            (function () {
                if (100 * Math.random() < 20) {
                    var e = function () {
                        var e = 100 * Math.random(), a = n.regionId(), i = 800, c = 10 * (t.itemNum2[19] - 1) + 1;
                        if (e < 70) {
                            var o = t.randomEvent[3], r = [800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 881, 882, 0];
                            i = r[o];
                        } else if (4e3 == a) {
                            var o = t.randomEvent[3], r = [800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 881, 882, 0];
                            i = r[o];
                        } else s = t.randomEvent[4], i = [700, 701, 702, 703, 704, 705, 0][s];
                        var s;
                        t.day >= 21 && 1e3 == a && (i = 997);
                        t.day >= 83 && 3e3 == a && (i = 996);
                        e < c && (i = 900003);
                        t.day >= 178 && (i = 0);
                        return i;
                        //遇到怪传送门
                    }();
                    0 != e && (t.enemyId = e);
                }
            })();
            !function () {
                if (100 == t.distance && t.stayDay[1] >= 23) {
                    t.button[0] = !0;
                    t.button[1] = !0;
                }
            }();
            //tag 每天早上道具结算传送门
            (function () {
                (function () {
                    if (t.hunger <= 0) {
                        t.health -= 2;
                        i.creatText("hunger", "【饥饿】健康值降低2点！");
                    }
                })();
                (function () {
                    var e = 100 * Math.random(), n = t.itemNum2[5];
                    if (t.itemNum2[5] > 0 && e < 100) {
                        var a = 100 * Math.random();
                        t.choice[8] = n;
                        i.creatText("skill1", "【陷阱】获得伤害加成" + 2 * n + "%");
                        if (a <= 29) {
                            t.itemNum[3] += n;
                            i.creatText("skill1", "【陷阱】获得「生肉」*" + n);
                            return !0;
                        }
                        if (a > 29 && a <= 30) {
                            t.itemNum[5] += n;
                            i.creatText("skill1", "【陷阱】获得「艾草」*" + n);
                            return !0;
                        }
                        if (a > 30 && a <= 50) {
                            t.itemNum[0] += n;
                            i.creatText("skill1", "【陷阱】获得「果子」*" + n);
                            return !0;
                        }
                        if (a > 50 && a <= 70) {
                            t.itemNum[1] += n;
                            i.creatText("skill1", "【陷阱】获得「木材」*" + n);
                            return !0;
                        }
                        if (a > 70) {
                            t.itemNum[4] += n;
                            i.creatText("skill1", "【陷阱】获得「亚麻」*" + n);
                        }
                    }
                })();
                (function () {
                    if (a[10] > 0) {
                        var e = 100 * Math.random();
                        if (e < 40) {
                            var n = a[10];
                            c() && (n *= 2);
                            t.health += n;
                            t.maxHealth += 5;
                            i.creatText("skill2", "【自愈】最大健康+5，健康值+" + n);
                        }
                    }
                })();
                (function () {
                    var e = 100 * Math.random();
                    if (a[6] > 0 && e < 40) {
                        var n = a[6] + parseInt(t.randomEvent[6] / 10);
                        t.money += n;
                        i.creatText("skill3", "【好报】获得" + (n / 10).toFixed(1) + "元");
                    }
                })();
                (function () {
                    var e = t.itemNum2[13];
                    if (e > 0) {
                        var n = 1 * e;
                        t.money += n;
                        i.creatText("getMoney", "【┑(=^ω^=)┑】获得" + (n / 10).toFixed(1) + "元");
                    }
                })();
                (function () {
                    var e = 100 * Math.random();
                    if (t.skillLv[26] > 0 && e < 30) {
                        t.energy += parseInt(.3 * n.maxEnergy());
                        i.creatText("spirit", "【不屈的精神力】额外恢复30%精力！");
                    }
                })();
                (function () {
                    var e = 100 * Math.random(), evilNum = t.evil.evilValue;
                    if (e < evilNum) {
                        t.energy -= parseInt(.5 * t.energy);
                        i.creatText("hunger", "【失眠】精力-50%！");
                    }
                })();
                (function () {
                    if (1 == t.ifFollow[0] && 0 == t.publicVar[2]) {
                        t.publicVar2[10] += 1;
                        i.QLnewfunction.addxiaoyue_favorability(-1);
                        //t.friend_xiaoyue.favorability -= 1;
                        i.creatText("ifEat", "【不开森】晓月好感-1（哼！）");
                    }
                    t.publicVar[2] = 0;
                })();
                (function () {
                    if (t.publicVar2[17] > 0) {
                        var e = 10 * Math.random() + 1;
                        t.publicVar2[18] += e;
                    }
                })();
                (function () {
                    if (t.publicVar2[17] > 0 && t.itemNum2[16] > 0) {
                        var e = t.itemNum2[16], n = 2 * e, a = parseInt(n * t.publicVar2[21] / 10), c = Math.max(parseInt(n - a + 7 - t.publicVar2[21] + 3), 0);
                        t.money += a;
                        t.publicVar2[18] += n - a;
                        t.itemNum2[16] = 0;
                        t.publicVar[7] += c;
                        i.creatText("sell", "【出售】漂亮石头" + e + "个，总售额" + (n / 10).toFixed(1) + "元，你分到" + (a / 10).toFixed(1) + "元！碧瑶好感+" + c);
                    }
                })();
                (function () {
                    if (1 == t.ifFollow[1] && t.friendSkill[2] > 0) {
                        var e = 100 * Math.random(), n = Math.max(parseInt(t.publicVar[7] / 15 + 25), 25);
                        if (e < n) {
                            var a = parseInt(.02 * t.publicVar2[18]);
                            t.publicVar2[18] -= a;
                            t.money += a;
                            i.creatText("sell", "【爱心】碧瑶给了你" + (a / 10).toFixed(1) + "元零钱！");
                        }
                    }
                })();
                (function () {
                    if (1 == t.ifFollow[1] && t.friendSkill[7]) {
                        var e = 100 * Math.random(), n = Math.max(parseInt(t.publicVar[7] / 10 + 20), 20);
                        if (e < n) {
                            t.orderTimes[4] += 1;
                            i.creatText("reduceSmoke", "【监督】烟瘾降低1%！");
                        }
                    }
                })();
                (function () {
                    if (t.publicVar3[5] > 0) {
                        var e = parseInt(.2 * t.publicVar3[5] + 1);
                        t.publicVar3[5] -= e;
                        t.publicVar3[5] < 0 && (t.publicVar3[5] = 0);
                        i.creatText("gameBuff", "【兴奋消退】玩游戏获得的属性加成效果消退" + e + "%，还剩下" + t.publicVar3[5] + "%");
                    }
                })();
                (function () {
                    if (t.stayDay[3] > 3) {
                        t.publicVar3[7] += parseInt(15 * Math.random() + 5);
                        t.publicVar3[8] += 1;
                    }
                })();
            })();
            (function () {
                var e = 20;
                Math.random();
                t.hunger <= 0 && (e = 0);
                t.hunger -= e;
                cc.find("Canvas/AttrShow/hunger/text").getComponent("cc.Label").string = "饥饿 -" + e + "（" + t.hunger + "/" + n.maxHunger() + "）";
            })();
            (function () {
                if (9 == t.stayDay[2]) {//在山脉停留的第9天，将会保存一个存档
                    var n = e("scr_dataCopy");
                    n = JSON.parse(cc.sys.localStorage.getItem("userData"));
                    cc.sys.localStorage.setItem("dataCopy", JSON.stringify(n));
                }
            })();
            (function () {//非常重要！！！！每天睡觉保存一次存档！！！用来回档！！！
                var n = e("scr_dataCopy");
                n = JSON.parse(cc.sys.localStorage.getItem("userData"));
                cc.sys.localStorage.setItem("autogamesave", JSON.stringify(n));
            })();
            n.save();
            function c() {
                return 1 == t.ifFollow[0] && 1 == t.friendSkill1[4];
            }
        },
        onLoad: function () {
            var t = 0;
            e("scr_data");
            this.restMain();
            cc.find("Canvas/Day").runAction(cc.fadeIn(.1));
            this.schedule(function () {
                var e = ["Canvas/AttrShow", "Canvas/SkillShow", "Canvas/Determine"];
                "Canvas/Determine" == e[t] && (cc.find("Canvas/Determine").active = !0);
                cc.find(e[t]).runAction(cc.fadeIn(.1));
                t++;
            }, .1, 2);
            e("scr_public").save();
        }
    });
    cc._RF.pop();
}, {
    scr_data: "scr_data",
    scr_dataCopy: "scr_dataCopy",
    scr_public: "scr_public"
}]