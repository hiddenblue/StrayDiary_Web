scr_makeUI = function (e, t, n) {
    "use strict";
    cc._RF.push(t, "65413JSLq1B/LWVXwKnjL2L", "scr_makeUI");
    cc.Class({
        extends: cc.Component,
        properties: {
            itemUI: {
                default: null,
                type: cc.Prefab
            }
        },
        creatText: function (e, t, n) {
            var a = new cc.Node(t);
            a.addComponent(cc.Label);
            a.parent = e;
            a.setPosition(0, -300);
            a.color = new cc.Color(0, 255, 0);
            a.getComponent(cc.Label).overflow = 3;
            a.setContentSize(530, 300);
            a.getComponent(cc.Label).string = n;
            a.getComponent(cc.Label).lineHeight = 80;
            a.getComponent(cc.Label).fontSize = 40;
        },
        //tag 制作传送门
        itemContent: function () {
            this.data = e("scr_data");
            this.data2 = e("scr_data2");
            this.status = e("scr_public");
            var t = this, n = e("scr_effect"), a = {
                0: {
                    itemName: " 熟肉 ",
                    needDes: "※需【生肉】" + this.data.itemNum[3] + "/1【木材】" + this.data.itemNum[1] + "/" + Math.max(1 - this.data.itemNum2[30], 0),
                    des: "※获得【熟肉】（已拥有" + this.data.itemNum2[0] + "）",
                    ifEnough: function (e) {
                        t.data.itemNum[3] >= 1 && (t.data.itemNum[1] >= 1 || 0 != t.data.itemNum[30]) && (cc.find("Canvas/Page/view/content/page_1/" + e + "/button/name").color = new cc.color(0, 255, 0));
                    },
                    button: function () {
                        var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
                        var consume = Math.max(2 - 2 * n.itemNum2[30], 0);
                        if (n.energy < consume) {
                            a.playText("Canvas/notify", "精力不足！", 100);
                            return;
                        }
                        n.energy -= consume;
                        if (n.itemNum[3] >= 1 && (n.itemNum[1] >= 1 || 0 != n.itemNum2[30])) {
                            var xq = Math.max(1 - n.itemNum2[30], 0)
                            n.itemNum[3] -= 1;
                            n.itemNum[1] -= xq;
                            n.itemNum2[0] += 1;

                            i.save();
                            a.playText("Canvas/notify", "获得【熟肉】*1" + "消耗" + consume + "精力", 100);
                            t.delayCreatItemUI();
                        } else a.playText("Canvas/notify", "材料不足！", 100);
                    }
                },
                1: {
                    itemName: " 伤药 ",
                    needDes: "※需【艾草】" + this.data.itemNum[5] + "/2",
                    des: "※获得【伤药】（拥有" + this.data.itemNum2[1] + "）",
                    ifEnough: function (e) {
                        t.data.itemNum[5] >= 2 && (cc.find("Canvas/Page/view/content/page_1/" + e + "/button/name").color = new cc.color(0, 255, 0));
                    },
                    button: function () {
                        var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
                        var consume = 2;
                        if (n.energy < consume) {
                            a.playText("Canvas/notify", "精力不足！", 100);
                            return;
                        }
                        n.energy -= consume;
                        if (n.itemNum[5] >= 2) {
                            n.itemNum[5] -= 2;
                            n.itemNum2[1] += 1;
                            i.save();
                            a.playText("Canvas/notify", "获得【伤药】*1" + "消耗" + consume + "精力", 100);
                            t.delayCreatItemUI();
                        } else a.playText("Canvas/notify", "材料不足！", 100);
                    }
                },
                2: {
                    itemName: "帐篷LV" + this.data.itemNum2[2],
                    needDes: "※需【木材】" + this.data.itemNum[1] + "/" + (4 + 1 * this.data.itemNum2[2]) + "【亚麻】" + this.data.itemNum[4] + "/" + (4 + 1 * this.data.itemNum2[2]),
                    des: "※精力上限增加" + 1 * this.data.itemNum2[2] + "点，每级提供2%精力恢复效率。你当前精力恢复效率为" + (this.status.role.energyResumeRate() * 100) + "%，你的精力上限为" + this.status.maxEnergy() + "点，你将会恢复" + (this.status.role.energyResumeRate() * this.status.maxEnergy()) + "点精力。恢复精力不会超过精力上限。",
                    ifEnough: function (e) {
                        t.data.itemNum[1] >= 4 + 1 * t.data.itemNum2[2] && t.data.itemNum[4] >= 4 + 1 * t.data.itemNum2[2] && (cc.find("Canvas/Page/view/content/page_1/" + e + "/button/name").color = new cc.color(0, 255, 0));
                    },
                    button: function () {
                        var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 4 + 1 * n.itemNum2[2], o = n.itemNum[1], r = 4 + 1 * n.itemNum2[2], s = n.itemNum[4];
                        if (n.itemNum2[2] >= 10) {
                            a.playText("Canvas/notify", this.name + "已经满级了！", 100);
                            return;
                        }
                        var consume = Math.ceil(n.itemNum2[2] / 5) * 5;;
                        if (n.energy < consume) {
                            a.playText("Canvas/notify", "精力不足！", 100);
                            return;
                        }
                        if (o >= c && s >= r) {
                            n.itemNum[1] -= c;
                            n.itemNum[4] -= r;
                            n.itemNum2[2] += 1;
                            i.save();
                            a.playText("Canvas/notify", "精力上限+1！" + "消耗" + consume + "精力", 100);
                            t.delayCreatItemUI();
                        } else a.playText("Canvas/notify", "材料不足！", 100);
                    }
                },
                3: {
                    itemName: "木棍LV" + this.data.itemNum2[3],
                    needDes: "※需【木材】" + this.data.itemNum[1] + "/" + (4),//+ 2 * this.data.itemNum2[3]
                    des: "※增加" + 10 * this.data.itemNum2[3] + "点攻击。【暴击】" + 2 * this.data.itemNum2[3] + "%几率触发暴击",
                    ifEnough: function (e) {
                        t.data.itemNum[1] >= 4 + 2 * t.data.itemNum2[3] && (cc.find("Canvas/Page/view/content/page_1/" + e + "/button/name").color = new cc.color(0, 255, 0));
                    },
                    button: function () {
                        var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 4;
                        var data2 = e("scr_data2");
                        if (n.itemNum2[3] >= 10 + data2.achieveMent[9] * 15) {
                            a.playText("Canvas/notify", "木棍已经满级了！", 100);
                            return;
                        }
                        var consume = Math.ceil(n.itemNum2[3] / 5) * 5;;
                        if (n.energy < consume) {
                            a.playText("Canvas/notify", "精力不足！", 100);
                            return;
                        }
                        n.energy -= consume;
                        if (n.itemNum[1] >= c) {
                            n.itemNum[1] -= c;
                            n.itemNum2[3] += 1;


                            i.save();
                            a.playText("Canvas/notify", "攻击+10！" + "消耗" + consume + "精力", 100);
                            t.delayCreatItemUI();
                        } else a.playText("Canvas/notify", "材料不足！", 100);
                    }
                },
                4: {
                    itemName: "麻布衣LV" + this.data.itemNum2[4],
                    needDes: "※需【亚麻】" + this.data.itemNum[4] + "/" + (4 + 2 * this.data.itemNum2[4]),
                    des: "※增加" + 50 * this.data.itemNum2[4] + "点生命上限。受到攻击时" + Math.min(2 * this.data.itemNum2[4], 100) + "%几率触发【自愈】，回复25%最大生命值",
                    ifEnough: function (e) {
                        t.data.itemNum[4] >= 4 + 2 * t.data.itemNum2[4] && (cc.find("Canvas/Page/view/content/page_2/" + e + "/button/name").color = new cc.color(0, 255, 0));
                    },
                    button: function () {
                        var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 4 + 2 * n.itemNum2[4];
                        if (n.itemNum2[4] >= 50) {
                            a.playText("Canvas/notify", "麻布衣已经满级了！", 100);
                            return;
                        }
                        var consume = Math.ceil(n.itemNum2[4] / 5) * 5;
                        if (n.energy < consume) {
                            a.playText("Canvas/notify", "精力不足！", 100);
                            return;
                        }
                        n.energy -= consume;
                        if (n.itemNum[4] >= c) {
                            n.itemNum[4] -= c;
                            n.itemNum2[4] += 1;

                            i.save();
                            a.playText("Canvas/notify", "生命上限+50！" + "消耗" + consume + "精力", 100);
                            t.delayCreatItemUI();
                        } else a.playText("Canvas/notify", "材料不足！", 100);
                    }
                },
                5: {
                    itemName: "驱蚊工具LV" + this.data.itemNum2[6],
                    needDes: "※需【艾草】" + this.data.itemNum[5] + "/" + (8 + 2 * this.data.itemNum2[6]),
                    des: "※睡觉时恢复" + 30 * this.data.itemNum2[6] + "点生命值，每级提供1%精力恢复效率",
                    ifEnough: function (t) {
                        var n = e("scr_data");
                        n.itemNum[5] >= 8 + 2 * n.itemNum2[6] && (cc.find("Canvas/Page/view/content/page_2/" + t + "/button/name").color = new cc.color(0, 255, 0));
                    },
                    button: function () {
                        var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 8 + 2 * n.itemNum2[6];
                        if (n.itemNum2[6] >= 50) {
                            a.playText("Canvas/notify", "驱蚊工具已经满级了！" + "消耗" + consume + "精力", 100);
                            return;
                        }
                        var consume = Math.ceil(n.itemNum2[6] / 5) * 5;
                        if (n.energy < consume) {
                            a.playText("Canvas/notify", "精力不足！", 100);
                            return;
                        }
                        n.energy -= consume;
                        if (n.itemNum[5] >= c) {
                            n.itemNum[5] -= c;
                            n.itemNum2[6] += 1;


                            i.save();
                            a.playText("Canvas/notify", "讨厌的蚊子减少啦~", 100);
                            t.delayCreatItemUI();
                        } else a.playText("Canvas/notify", "材料不足！", 100);
                    }
                },
                6:
                {
                    itemName: "陷阱LV" + this.data.itemNum2[5],
                    needDes: "※需【木材】" + this.data.itemNum[1] + "/" + (10 + 10 * this.data.itemNum2[5]),
                    des: "※战斗时获得增益，每级增加2%伤害，如果是每天第一次战斗效果*5",
                    ifEnough: function (t) {
                        var n = e("scr_data");
                        n.itemNum[1] >= 10 + 10 * n.itemNum2[5] && (cc.find("Canvas/Page/view/content/page_2/" + t + "/button/name").color = new cc.color(0, 255, 0));
                    },
                    button: function () {
                        var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 10 + 10 * n.itemNum2[5];
                        if (n.itemNum2[5] >= 10) {
                            a.playText("Canvas/notify", "陷阱已经满级了！", 100);
                            return;
                        }
                        var consume = Math.ceil(n.itemNum2[5] / 5) * 5;
                        if (n.energy < consume) {
                            a.playText("Canvas/notify", "精力不足！", 100);
                            return;
                        }
                        n.energy -= consume;
                        if (n.itemNum[1] >= c) {
                            n.itemNum[1] -= c;
                            n.itemNum2[5] += 1;
                            i.save();
                            a.playText("Canvas/notify", "升级成功！" + "消耗" + consume + "精力", 100);
                            t.delayCreatItemUI();
                        } else a.playText("Canvas/notify", "材料不足！", 100);
                    }
                },
                7: {
                    itemName: "  香烟：【自信】（" + (50 - this.data.cigaretteuptimes * 50) + "） ",
                    needDes: "※需【烟草】" + this.data.itemNum[6] + "/4 或者【烟头】" + this.data.itemNum[7] + "/8",
                    des: "※获得【香烟】。游戏中重要的“软货币”，也可自己使用",
                    ifEnough: function (t) {
                        var n = e("scr_data");
                        if (n.itemNum[6] >= 4 || n.itemNum[7] >= 8) {
                            cc.find("Canvas/Page/view/content/page_2/" + t + "/button/name").color = new cc.color(0, 255, 0)
                        } else {
                            e("scr_data").achieve >= 50 && (cc.find("Canvas/Page/view/content/page_2/" + t + "/button/name").color = new cc.color(255, 0, 0))
                        }
                    },
                    button: function () {
                        var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = n.itemNum[6], o = n.itemNum[7];
                        var consume = 2;
                        if (n.energy < consume) {
                            a.playText("Canvas/notify", "精力不足！", 100);
                            return;
                        }
                        n.energy -= consume;
                        if (c >= 4) {
                            n.itemNum[6] -= 4;
                            n.itemNum2[7] += 1;
                            i.save();
                            a.playText("Canvas/notify", "获得【香烟】*1！" + "消耗" + consume + "精力", 100);
                            t.delayCreatItemUI();
                        } else if (o >= 8) {
                            n.itemNum[7] -= 8;
                            n.itemNum2[7] += 1;
                            var consume = 2;
                            n.energy -= consume;
                            i.save();
                            a.playText("Canvas/notify", "获得【香烟】*1！" + "消耗" + consume + "精力", 100);
                            t.delayCreatItemUI();
                        } else if (n.achieve >= 50 && 0 == n.cigaretteuptimes) {//done 烟的新功能
                            n.achieve >= 50;
                            n.cigaretteuptimes += 1;
                            t.delayCreatItemUI();
                            a.playText("Canvas/notify", "升级成功", 100);
                        } else if (n.cigaretteuptimes >= 0) {
                            a.playText("Canvas/notify", "已经升级过了", 100);
                        } else {
                            a.playText("Canvas/notify", "材料不足！", 100);
                        }
                    }
                },
                8: {
                    itemName: "啤酒",
                    needDes: "※需【50ml啤酒】" + this.data.itemNum[10] + "/5",
                    des: "※获得一罐【啤酒】！",
                    ifEnough: function (t) {
                        e("scr_data").itemNum[10] >= 5 && (cc.find("Canvas/Page/view/content/page_3/" + t + "/button/name").color = new cc.color(0, 255, 0));
                    },
                    button: function () {
                        var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
                        var consume = 2;
                        if (n.energy < consume) {
                            a.playText("Canvas/notify", "精力不足！", 100);
                            return;
                        }
                        n.energy -= consume;
                        if (n.itemNum[10] >= 5) {
                            n.itemNum[10] -= 5;
                            n.itemNum2[12] += 1;

                            n.energy -= consume;
                            i.save();
                            a.playText("Canvas/notify", "获得【啤酒】*1！" + "消耗" + consume + "精力", 100);
                            t.delayCreatItemUI3();
                        } else a.playText("Canvas/notify", "材料不足！", 100);
                    }
                },
                9: {
                    itemName: "匕首LV" + this.data.itemNum2[8],
                    needDes: "※十级木棍和一级匕首和20个亚麻可以合成长矛，点击匕首合成",
                    des: "※增加" + 100 * this.data.itemNum2[8] + "点攻击。【破防】攻击时，" + (20 * this.data.itemNum2[8] + this.data.figthExp[1] / 2) + "%概率恢复造成伤害20%的生命",
                    ifEnough: function (t) {//todo shulliiandu
                        var n = e("scr_data");
                        if (n.itemNum2[3] >= 10 && n.itemNum2[8] >= 1) {
                            (cc.find("Canvas/Page/view/content/page_3/" + t + "/button/name").color = new cc.color(0, 0, 255))
                        }
                    },
                    button: function () {
                        var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
                        if (n.itemNum2[3] >= 10 && n.itemNum2[8] >= 1 && n.itemNum[4] >= 20) {
                            if (n.ultraweapon.spear >= 1) {
                                a.playText("Canvas/notify", "你已经合成过了！", 100);
                                return;
                            }
                            n.itemNum2[8] -= 1;
                            n.itemNum2[3] -= 10;
                            n.itemNum[4] -= 20;
                            n.ultraweapon.spear += 1;
                            n.ultrabuff.DoubleHit = 1;
                            a.playText("Canvas/notify", "合成超武，长矛！", 100);
                            t.delayCreatItemUI();
                            return;
                        }
                        a.playText("Canvas/notify", "材料不足！", 100);
                    }
                },
                10: {
                    itemName: "皮衣LV" + this.data.itemNum2[9],
                    needDes: "※可通过购买，或者打怪掉落提高等级",
                    des: "※增加" + 10 * this.data.itemNum2[9] + "点防御和" + 25 * this.data.itemNum2[9] + "点生命。【止伤】受击时，" + Math.min(2 * this.data.itemNum2[9], 100) + "%几率触发【止伤】，回复50%已损生命值",
                    button: function () {
                        n.playText("Canvas/notify", "请去商店购买！", 100);
                    }
                },
                11: {
                    itemName: "┑(=^ω^=)┑LV" + this.data.itemNum2[13],
                    needDes: "※获得方法未知",
                    des: "※每天自动获得「0.1*LV」元",
                    button: function () {
                        n.playText("Canvas/notify", "喵~", 100);
                    }
                },
                12: {
                    itemName: "幸运石LV" + (this.data.itemNum2[26] + this.data.publicVar3[18]),
                    needDes: "※收集类道具",
                    des: "※增加" + (this.data.itemNum2[26] + this.data.publicVar3[18]) + "%的额外掉落奖励",
                    button: function () { }
                },
                13: {
                    itemName: "晓月手链LV" + (this.data.itemNum2[27] + this.data.publicVar3[17]),
                    needDes: "※收集类道具",
                    des: "※如果前进/探索，则有" + 1 * (this.data.itemNum2[27] + this.data.publicVar3[17]) + "%概率（LV*1%）再一次获得奖励",
                    button: function () {
                        n.playText("Canvas/notify", "晓月手链触发时，必定获得奖励，且可以与「非酋逆袭」特性同时触发", 100);
                    }
                },
                14: {
                    itemName: "黑刀LV" + this.data.itemNum2[10],
                    needDes: "※需【黑曜石】" + this.data.itemNum[8] + "/" + (10 + 2 * this.data.itemNum2[10]),
                    des: "※增加" + 30 * this.data.itemNum2[10] + "点攻击。黑刀特效请看特性第31条",///todo 黑刀
                    ifEnough: function (t) {
                        var n = e("scr_data");
                        n.itemNum[8] >= 10 + 2 * n.itemNum2[10] && (cc.find("Canvas/Page/view/content/page_4/" + t + "/button/name").color = new cc.color(0, 255, 0));
                    },
                    button: function () {
                        var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 10 + 2 * n.itemNum2[10];
                        var consume = Math.ceil(n.itemNum2[10] / 5) * 25;;
                        if (n.energy < consume) {
                            a.playText("Canvas/notify", "精力不足！", 100);
                            return;
                        }
                        n.energy -= consume;
                        if (n.itemNum[8] >= c) {
                            n.itemNum[8] -= c;
                            n.itemNum2[10] += 1;


                            i.save();
                            a.playText("Canvas/notify", "获得【黑刀】*1！" + "消耗" + consume + "精力", 100);
                            t.delayCreatItemUI4();
                        } else a.playText("Canvas/notify", "材料不足！", 100);
                    }
                },
                15: {
                    itemName: "红夹克LV" + this.data.itemNum2[11],
                    needDes: "※需【火狐皮】" + this.data.itemNum[9] + "/" + (10 + 2 * this.data.itemNum2[11]),
                    des: "※增加" + 150 * this.data.itemNum2[11] + "点生命上限，" + 15 * this.data.itemNum2[11] + "点防御。【火狐之灵】受击时，" + 2 * this.data.itemNum2[11] + "%概率免疫100%伤害，并且对敌方造成8%最大生命值伤害",
                    ifEnough: function (t) {
                        var n = e("scr_data");
                        n.itemNum[9] >= 10 + 2 * n.itemNum2[11] && (cc.find("Canvas/Page/view/content/page_4/" + t + "/button/name").color = new cc.color(0, 255, 0));
                    },
                    button: function () {
                        var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 10 + 2 * n.itemNum2[11];
                        var consume = Math.ceil(n.itemNum2[11] / 5) * 25;;
                        if (n.energy < consume) {
                            a.playText("Canvas/notify", "精力不足！", 100);
                            return;
                        }
                        n.energy -= consume;
                        if (n.itemNum[9] >= c) {
                            n.itemNum[9] -= c;
                            n.itemNum2[11] += 1;

                            i.save();
                            a.playText("Canvas/notify", "获得【红夹克】*1！" + "消耗" + consume + "精力", 100);
                            t.delayCreatItemUI4();
                        } else a.playText("Canvas/notify", "材料不足！", 100);
                    }
                },
                16: {
                    itemName: "晓风披肩LV" + this.data.itemNum2[15],
                    needDes: "※用于增加自信。",
                    des: "※每级增加1%全战斗属性（攻防血）。【帅呆】每级减少敌方2%防御！【拉风】每级减少敌方5%逃跑率！",
                    button: function () {
                        n.playText("Canvas/notify", "听说穿上这件披肩的人，最后都被打死了...", 100);
                    }
                },
                17: {
                    itemName: "放大镜LV" + (this.data.itemNum2[17] + this.data.publicVar3[9]),
                    needDes: "※收集类道具",
                    des: "※前进/探索时，" + (this.data.itemNum2[17] + this.data.publicVar3[9]) + "%几率额外获得一次奖励！",
                    button: function () {
                        n.playText("Canvas/notify", "(O_o)", 100);
                    }
                },
                18:
                {
                    itemName: "JK制服鞋LV" + this.data.itemNum2[18],
                    needDes: "※似乎是从某个美少女处获得的原味JK制服鞋子（10）",
                    des: "※战斗结束后恢复" + this.data.itemNum2[18] * 2 + "%概率恢复，10点精力，当前声望" + e("scr_data").achieve,
                    ifEnough: function (t) {
                        e("scr_data").achieve >= 10 && (cc.find("Canvas/Page/view/content/page_5/" + t + "/button/name").color = new cc.color(255, 0, 0));
                    },
                    button:
                        function () {
                            var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
                            if (n.achieve >= 10) {
                                n.itemNum2[18] += 1;
                                n.achieve -= 10;
                                i.save();
                                a.playText("Canvas/notify", "获得【JK制服鞋】*1！", 100);
                                t.delayCreatItemUI5();
                            } else a.playText("Canvas/notify", "声望不足！", 100);
                        }
                },
                19: {
                    itemName: "枪LV" + this.data.itemNum2[19],
                    needDes: "※白色粉末（拥有" + this.data.itemNum[11] + "）兑换，可能会招来麻烦！",
                    des: "※使用枪攻击时，会触发【连击】" + this.data.itemNum2[19] + "次，连击的效果相当于多次点击攻击按钮，所有效果均可触发。进入战斗时会获得「枪等级」数量的免费子弹，然后每次消耗1颗子弹（已有" + this.data.itemNum2[14] + "）。点击战斗界面右下角文字可以打开/关闭枪效果！",
                    button: function () {
                        e("scr_data").itemNum2[19] > 0 ? n.playText("Canvas/notify", "点击战斗界面右下角（逃跑率右边）【开/关】才会生效哦~", 100) : n.playText("Canvas/notify", "你还没有枪！", 100);
                    }
                },
                20: {
                    itemName: "板砖LV" + this.data.itemNum2[20],
                    needDes: "※收集类道具",
                    des: "※每级增加5点攻击！",
                    ifEnough: function (t) {
                        e("scr_data").itemNum2[20] >= 21 && (cc.find("Canvas/Page/view/content/page_6/" + t + "/button/name").color = new cc.color(0, 0, 255));
                    },
                    button: function () {
                        var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
                        if (n.itemNum2[20] >= 21) {
                            n.itemNum2[20] -= 21;
                            n.itemNum2[28] += 1;
                            i.save();
                            a.playText("Canvas/notify", "获得【物理学圣剑】*1！", 100);
                            t.delayCreatItemUI6();
                        } else a.playText("Canvas/notify", "听说集齐21块可以召唤城管哦~", 100);
                    }
                },
                21: {
                    itemName: "小裤裤LV" + this.data.itemNum2[21],
                    needDes: "※收集类道具",
                    des: "※每级增加5点防御！",
                    button: function () {
                        n.playText("Canvas/notify", "有股淡淡的清香呢~(ಡωಡ)~", 100);
                    }
                },
                22: {
                    itemName: "女装LV" + this.data.itemNum2[22],
                    needDes: "※收集类道具",
                    des: "※每级增加25点生命！",
                    ifEnough: function (t) {
                        e("scr_data").itemNum2[22] >= 18 && (cc.find("Canvas/Page/view/content/page_6/" + t + "/button/name").color = new cc.color(0, 0, 255));
                    },
                    button: function () {
                        var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
                        if (n.itemNum2[22] >= 18) {
                            n.itemNum2[22] -= 18;
                            n.itemNum2[29] += 1;
                            i.save();
                            a.playText("Canvas/notify", "获得【军用夜视镜】*1！", 100);
                            t.delayCreatItemUI6();
                        } else a.playText("Canvas/notify", "听说集齐18件可以变成女人哦~", 100);
                    }
                },
                23: {
                    itemName: "创可贴LV" + this.data.itemNum2[23],
                    needDes: "※收集类道具",
                    des: "※每级提高2点前进/探索时生命回复量！",
                    button: function () {
                        n.playText("Canvas/notify", "“老鼠药~蟑螂药~臭脚克星...”", 100);
                    }
                },
                24: {
                    itemName: "JK制服LV" + this.data.itemNum2[24],
                    needDes: "※似乎是从某个美少女处获得的原味JK制服（10）",
                    des: "※前进或者探索后有" + this.data.itemNum2[24] * 2 + "%概率增加晓月和碧瑶的一点好感",
                    ifEnough: function (t) {
                        e("scr_data").achieve >= 10 && (cc.find("Canvas/Page/view/content/page_7/" + t + "/button/name").color = new cc.color(255, 0, 0));
                    },
                    button:
                        function () {
                            var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public");
                            if (n.achieve >= 10) {
                                n.itemNum2[24] += 1;
                                n.achieve -= 10;
                                i.save();
                                a.playText("Canvas/notify", "获得【JK制服】*1！", 100);
                                t.delayCreatItemUI5();
                            } else a.playText("Canvas/notify", "声望不足！", 100);
                        }
                },
                25: {
                    itemName: "护身符LV" + this.data.itemNum2[25],
                    needDes: "※收集类道具",
                    des: "※战败后，保留" + parseInt(1 + 50 * this.data.itemNum2[25] + .03 * e("scr_public").role.maxHp() * this.data.itemNum2[25]) + "点生命！",
                    button: function () {
                        n.playText("Canvas/notify", "上边似乎画着一个性感的二次元妹子~", 100);
                    }
                },
                26: {//tag 制作的新物品都在这
                    itemName: "物理学圣剑LV" + this.data.itemNum2[28],
                    needDes: "※合成类道具",
                    des: "※21个板砖合成，增加" + this.data.itemNum2[28] * 150 + "点攻击！【圣剑】普通攻击时，造成敌人" + this.data.itemNum2[28] * 3 + "%最大生命值的一次伤害,但不超过当前攻击力的" + this.data.itemNum2[28] * 100 + "%",
                    button: function () {
                        n.playText("Canvas/notify", "主打的就是一个力大砖飞", 100);
                    }
                },
                27: {
                    itemName: "军用夜视镜LV" + this.data.itemNum2[29],
                    needDes: "※合成类道具",
                    des: "※18个女装合成，增加" + this.data.itemNum2[29] * 750 + "点生命！【网络】战斗中将可以查看敌人的攻防属性，受到攻击时，防御力有" + this.data.itemNum2[29] * 10 + "%概率增加10%",
                    button: function () {
                        n.playText("Canvas/notify", "御坂妹妹会佩戴的一种感应电磁场变化的设备", 100);
                    }
                },
                28: {
                    itemName: "电饭煲LV" + this.data.itemNum2[30],
                    needDes: "※购买类道具升级",
                    des: "※制作熟肉时不再需要木材",
                    button: function () {
                        n.playText("Canvas/notify", "御坂妹妹会佩戴的一种感应电磁场变化的设备", 100);
                    }
                },
                29: {//todo
                    itemName: "1-长矛LV" + this.data.ultraweapon.spear,
                    needDes: "※你看这个木棍，前面绑一个匕首，是不是强多了？（终极武器最高只有一级）",
                    des: "※提供50%暴击率，50暴击伤害，300点基础攻击，获得特性【连击】。",
                    button: function () {
                        n.playText("Canvas/notify", "简单粗暴，但是好用", 100);
                    }
                },
                30: {//todo
                    itemName: "1-防御流超武LV" + this.data.ultraweapon.spear,
                    needDes: "※待更新",
                    des: "※待更新。",
                    button: function () {
                        n.playText("Canvas/notify", "待更新", 100);
                    }
                },
                31: {//todo 藏身处
                    itemName: "工作台LV" + this.data.ultraweapon.spear,
                    needDes: "※1：10木板2：10黑曜石3：10火狐皮",
                    des: "※制造高级物品和设施的基础设施，最高为三级",
                    button: function () {
                        n.playText("Canvas/notify", "万物起源", 100);
                    }
                },
                32: {//todo 藏身处
                    itemName: "仓库LV" + this.data.ultraweapon.spear,
                    needDes: "※1：0-10木板2：1-25木板3：1-50麻布",
                    des: "※提高物资存放上限，最高为五级",
                    button: function () {
                        var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 8 + 2 * n.itemNum2[6];
                        if (n.itemNum2[6] >= 50) {
                            a.playText("Canvas/notify", "驱蚊工具已经满级了！" + "消耗" + consume + "精力", 100);
                            return;
                        }
                        if (n.itemNum[5] >= c) {
                            n.itemNum[5] -= c;
                            n.itemNum2[6] += 1;
                            var consume = Math.ceil(n.itemNum2[6] / 5) * 5;;
                            n.energy -= consume;
                            i.save();
                            a.playText("Canvas/notify", "讨厌的蚊子减少啦~", 100);
                            t.delayCreatItemUI();
                        } else a.playText("Canvas/notify", "材料不足！", 100);
                    }
                },
                33: {//todo 藏身处
                    itemName: "健身房LV" + this.data.ultraweapon.spear,
                    needDes: "※1：0-10木板2：1-25木板3：1-50麻布",
                    des: "※解锁健身功能",
                    button: function () {
                        var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 8 + 2 * n.itemNum2[6];
                        if (n.itemNum2[6] >= 50) {
                            a.playText("Canvas/notify", "驱蚊工具已经满级了！" + "消耗" + consume + "精力", 100);
                            return;
                        }
                        if (n.itemNum[5] >= c) {
                            n.itemNum[5] -= c;
                            n.itemNum2[6] += 1;
                            var consume = Math.ceil(n.itemNum2[6] / 5) * 5;;
                            n.energy -= consume;
                            i.save();
                            a.playText("Canvas/notify", "讨厌的蚊子减少啦~", 100);
                            t.delayCreatItemUI();
                        } else a.playText("Canvas/notify", "材料不足！", 100);
                    }
                },
                34: {//todo 藏身处
                    itemName: "草药台LV" + this.data.ultraweapon.spear,
                    needDes: "※1：1-10麻布2：1-15艾草3：1-50麻布",
                    des: "※解锁各种医用物品",
                    button: function () {
                        var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 8 + 2 * n.itemNum2[6];
                        if (n.itemNum2[6] >= 50) {
                            a.playText("Canvas/notify", "驱蚊工具已经满级了！" + "消耗" + consume + "精力", 100);
                            return;
                        }
                        if (n.itemNum[5] >= c) {
                            n.itemNum[5] -= c;
                            n.itemNum2[6] += 1;
                            var consume = Math.ceil(n.itemNum2[6] / 5) * 5;;
                            n.energy -= consume;
                            i.save();
                            a.playText("Canvas/notify", "讨厌的蚊子减少啦~", 100);
                            t.delayCreatItemUI();
                        } else a.playText("Canvas/notify", "材料不足！", 100);
                    }
                },
            };
            return a;
        },
        creatPrefab: function (index, t) {
            var n = cc.instantiate(this.itemUI), a = this.itemContent()[index], itemMakeFunction = a.button, c = "item" + index;
            n.name = c;
            var itemnamelabel = n.getChildByName("button").getChildByName("name");
            itemnamelabel.getComponent("cc.Label").string = a.itemName;
            n.getChildByName("need").getComponent("cc.Label").string = a.needDes;
            n.getChildByName("des").getComponent("cc.Label").string = a.des;
            itemnamelabel.getComponent("cc.Button").scheduleOnce(function () {
                //itemnamelabel.on("touchend", itemMakeFunction, this);
                e("scr_public").QLnewfunction.bindMouseEventonButton(itemnamelabel, itemMakeFunction);
            }, .04);
            cc.find("Canvas/Page/view/content").getChildByName(t).addChild(n);
            "undefined" != typeof a.ifEnough && a.ifEnough(c);
        },
        creatPrefabbynode: function (startIndex, endIndex, target) {
            for (var index = startIndex; index <= endIndex; index++) {
                var n = cc.instantiate(this.itemUI), a = this.itemContent()[index], itemMakeFunction = a.button, c = "item" + index;
                n.name = c;
                var itemnamelabel = n.getChildByName("button").getChildByName("name");
                itemnamelabel.getComponent("cc.Label").string = a.itemName;
                n.getChildByName("need").getComponent("cc.Label").string = a.needDes;
                n.getChildByName("des").getComponent("cc.Label").string = a.des;
                itemnamelabel.getComponent("cc.Button").scheduleOnce(function () {
                    //itemnamelabel.on("touchend", itemMakeFunction, this);
                    e("scr_public").QLnewfunction.bindMouseEventonButton(itemnamelabel, itemMakeFunction);
                }, .04);
                target.addChild(n);
                "undefined" != typeof a.ifEnough && a.ifEnough(c);
            }
        },
        creatItemUI1: function () {
            cc.find("Canvas/Page/view/content/page_1").removeAllChildren();
            for (var e = 0; e <= 3; e++) this.creatPrefab(e, "page_1");
        },
        creatItemUI2: function () {
            cc.find("Canvas/Page/view/content/page_2").removeAllChildren();
            for (var e = 4; e <= 7; e++) this.creatPrefab(e, "page_2");
        },
        creatItemUI3: function () {
            if (e("scr_data").distance >= 0) {
                cc.find("Canvas/Page/view/content/page_3").removeAllChildren();
                for (var t = 8; t <= 11; t++) this.creatPrefab(t, "page_3");
            } else this.creatText(cc.find("Canvas/Page/view/content/page_3"), "notify", "※第3页内容，将在到达县城后解锁！");
        },
        creatItemUI4: function () {
            if (e("scr_data").distance >= 0) {
                cc.find("Canvas/Page/view/content/page_4").removeAllChildren();
                for (var t = 12; t <= 15; t++) this.creatPrefab(t, "page_4");
            } else this.creatText(cc.find("Canvas/Page/view/content/page_4"), "notify", "※第4页内容，将在到达县城后解锁！");
        },
        creatItemUI5: function () {
            if (e("scr_data").distance >= 0) {
                cc.find("Canvas/Page/view/content/page_5").removeAllChildren();
                for (var t = 16; t <= 19; t++) this.creatPrefab(t, "page_5");
            } else this.creatText(cc.find("Canvas/Page/view/content/page_5"), "notify", "※第5页内容，将在到达县城后解锁！");
        },
        creatItemUI6: function () {
            if (e("scr_data").distance >= 0) {
                cc.find("Canvas/Page/view/content/page_6").removeAllChildren();
                for (var t = 20; t <= 23; t++) this.creatPrefab(t, "page_6");
            } else this.creatText(cc.find("Canvas/Page/view/content/page_6"), "notify", "※第6页内容，将在到达县城后解锁！");
        },
        creatItemUI7: function () {
            if (e("scr_data").distance >= 0) {
                cc.find("Canvas/Page/view/content/page_7").removeAllChildren();
                for (var t = 24; t <= 27; t++) this.creatPrefab(t, "page_7");
            } else this.creatText(cc.find("Canvas/Page/view/content/page_7"), "notify", "※第7页内容，将在到达县城后解锁！");
        },
        creatItemUI8: function () {
            let blankpage = cc.instantiate(cc.find("Canvas/Page/view/content/page_8"));

            if (e("scr_data").distance >= 0) {
                cc.find("Canvas/Page/view/content/page_8").removeAllChildren();
                for (var t = 28; t <= 30; t++) this.creatPrefab(t, "page_8");
            } else this.creatText(cc.find("Canvas/Page/view/content/page_8"), "notify", "※第8页内容，将在到达县城后解锁！");

            let parent = cc.find("Canvas/Page/view/content");
            let page9 = cc.instantiate(blankpage);
            let page10 = cc.instantiate(blankpage);
            let page11 = cc.instantiate(blankpage);
            let page12 = cc.instantiate(blankpage);
            let page13 = cc.instantiate(blankpage);
            let page14 = cc.instantiate(blankpage);
            parent.addChild(page9);
            parent.addChild(page10);
            parent.addChild(page11);
            parent.addChild(page12);
            parent.addChild(page13);
            parent.addChild(page14);
            this.creatPrefabbynode(31, 34, page9);
        },
        delayCreatItemUI: function () {
            var e = this;
            this.scheduleOnce(function () {
                e.creatItemUI1();
                e.creatItemUI2();
            }, .2);
        },
        delayCreatItemUI1: function () {
            this.scheduleOnce(this.creatItemUI1, .05);//制造按钮延迟时间，降低
        },
        delayCreatItemUI2: function () {
            this.scheduleOnce(this.creatItemUI2, .05);
        },
        delayCreatItemUI3: function () {
            this.scheduleOnce(this.creatItemUI3, .05);
        },
        delayCreatItemUI4: function () {
            this.scheduleOnce(this.creatItemUI4, .05);
        },
        delayCreatItemUI5: function () {
            this.scheduleOnce(this.creatItemUI5, .05);
        },
        delayCreatItemUI6: function () {
            this.scheduleOnce(this.creatItemUI6, .05);
        },
        delayCreatItemUI7: function () {
            this.scheduleOnce(this.creatItemUI7, .05);
        },
        onLoad: function () {
            this.creatItemUI1();
            this.creatItemUI2();
            this.creatItemUI3();
            this.creatItemUI4();
            this.creatItemUI5();
            this.creatItemUI6();
            this.creatItemUI7();
            this.creatItemUI8();
        }
    });
    cc._RF.pop();
}