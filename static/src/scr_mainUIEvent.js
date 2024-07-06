scr_mainUIEvent = [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "449f7/pnslKIp1sHAfscrPC", "scr_mainUIEvent");
    cc.Class({
        extends: cc.Component,
        properties: {},
        creatText: function (e, t, n) {
            var a = new cc.Node(t);
            a.addComponent(cc.Label);
            a.parent = e;
            a.setPosition(0, 0);
            a.opacity = 0;
            a.runAction(cc.fadeIn(.1));
            a.color = new cc.Color(0, 0, 0);
            a.getComponent(cc.Label).overflow = 3;
            a.getComponent(cc.Label).horizontalAlign = 1;
            a.setContentSize(600, 300);
            a.getComponent(cc.Label).string = n;
            a.getComponent(cc.Label).lineHeight = 50;
            a.getComponent(cc.Label).fontSize = 40;
        },
        event: function () {
            var t = this, n = e("scr_data"), a = e("scr_public"), i = (e("scr_effect"), parseInt(9 * Math.random() + 1));
            this.randomItemNum = parseInt(7 * Math.random() + 1);
            this.stealMoney = parseInt(50 * Math.random() + 1);
            this.stealRate = parseInt(100 * Math.random());
            var c = [["女装", 22, 1, 1], ["创口贴", 23, 1, 1], ["护身符", 25, 1, 1], ["JK制服", 24, 1, 1], ["晓月手链", 27, 1, 1], ["幸运石", 26, 1, 1], ["板砖", 20, 1, 1], ["放大镜", 17, 1, 1], ["小裤裤", 21, 1, 1]];
            t.drawDiscount = parseInt(9 * Math.random() + 1);
            this.changeItemId2 = parseInt(8.99 * Math.random());
            this.changeItemId3 = parseInt(3.99 * Math.random());
            //随机事件传送门1
            var o = {
                1: {
                    text: ["路上发现0.2元钱，是否要捡起来？", "捡", "不捡"],
                    choice1: function () {
                        if (100 * Math.random() < 25) {
                            n.randomEvent[0] += 1;
                            t.closeUI();
                            cc.find("Canvas/Button").stopAllActions();
                            cc.find("Event/scr_fight").getComponent("scr_fight").fight(900001);
                        } else {
                            n.money += 2;
                            t.closeUI("获得0.2元！");
                        }
                    },
                    choice2: function () {
                        n.energy += 10;
                        t.closeUI("精力恢复10点（消耗返还！）");
                    }
                },
                2: {
                    text: ["一个女流氓拦住了去路...", "你要怎么做？", "刚正面！", "给" + Math.min(1 + n.orderTimes[7], 6) + "毛钱"],
                    choice1: function () {
                        n.publicVar2[12] += 1;
                        t.closeUI();
                        cc.find("Canvas/Button").stopAllActions();
                        cc.find("Event/scr_fight").getComponent("scr_fight").fight(200001);
                    },
                    choice2: function () {
                        var e = Math.min(1 + n.orderTimes[7], 6);
                        if (n.money >= e) {
                            n.publicVar2[12] += 1;
                            n.money -= e;
                            n.orderTimes[7] += 1;
                            t.closeUI("女流氓蹦蹦跳跳的离开了...");
                        } else cc.find("Canvas/Event/Choice/Choice2/choiceText").getComponent("cc.Label").string = "你怕是没那么多钱哦！";
                    }
                },
                3: {
                    text: ["“收药惹~”，一位小贩喊道，是否过去瞄瞄？", "瞄瞄", "算了"],
                    choice1: function () {
                        cc.director.loadScene("shop4");
                    },
                    choice2: function () {
                        n.energy += 10;
                        t.closeUI("精力+10（消耗返还！）");
                    }
                },
                4: {
                    text: ["钱被贼抢啦！", "是否要追赶？", "追！", "算了..."],
                    choice1: function () {
                        var e = [810, 811, 812, 813, 814, 815, 816][n.randomEvent[10]];
                        n.publicVar2[0] += 1;
                        if ("undefined" == typeof e) {
                            n.money += 5;
                            t.closeUI("劫匪见你追来，吓晕了过去！你从身上搜得5毛钱！");
                        } else {
                            t.closeUI();
                            cc.find("Canvas/Button").stopAllActions();
                            cc.find("Event/scr_fight").getComponent("scr_fight").fight(e);
                        }
                    },
                    choice2: function () {
                        n.publicVar2[0] += 1;
                        var e = 1 + n.randomEvent[3];
                        e > 3 && (e = 3);
                        n.money <= 0 && (e = 0);
                        n.money -= e;
                        n.money < 0 && (n.money = 0);
                        t.closeUI("损失" + (e / 10).toFixed(1) + "元");
                    }
                },
                5: {
                    text: ["前边一人，" + (this.stealMoney / 10).toFixed(1) + "元钱露出了裤袋，", "然鹅他似乎并没有觉察。是否顺走？", "顺走！活命要紧（成功率" + this.stealRate.toFixed(1) + "%）", "算了！名声要紧"],
                    choice1: function () {
                        if (100 * Math.random() < t.stealRate) {
                            n.money += t.stealMoney;
                            //n.publicVar[0] += ;
                            a.QLnewfunction.addevil_value(parseInt(t.stealMoney / 2));
                            t.closeUI("偷窃成功！获得" + (t.stealMoney / 10).toFixed(1) + "元。罪恶" + parseInt(t.stealMoney / 2) + "（累计" + n.evil.evilValue + "，高罪恶值会导致失眠）");
                        } else {
                            n.role.hp = 1;
                            t.closeUI("偷窃失败！你被吃瓜群众一顿狂殴，损失全部生命！");
                        }
                        t.stealMoney = parseInt(50 * Math.random() + 1);
                        t.stealRate = parseInt(100 * Math.random());
                    },
                    choice2: function () {
                        t.stealMoney = parseInt(10 * Math.random() + 1);
                        t.stealRate = parseInt(100 * Math.random());
                        n.energy += 10;
                        t.closeUI("精力恢复10点（消耗返还！）");
                    }
                },
                6: {
                    text: ["发现一个垃圾箱！", "是否开启？", "是", "算了"],
                    choice1: function () {
                        if (100 * Math.random() < 75) (function () {
                            var e = 100 * Math.random();
                            if (e <= 20) {
                                var i = 5 * parseInt(a.maxHunger() / 10);
                                n.hunger += i;
                                n.itemNum[14] += 1;
                                t.closeUI("找到一些剩饭！饥饿恢复50%（" + i + "点）！");
                            }
                            if (e > 20) {
                                var c = parseInt(1.9 * Math.random() + 1);
                                n.itemNum2[1] += c;
                                t.closeUI("找到一些伤药！获得【伤药】*" + c);
                            }
                        })(); else {
                            n.publicVar2[13] += 1;
                            t.closeUI();
                            cc.find("Canvas/Button").stopAllActions();
                            cc.find("Event/scr_fight").getComponent("scr_fight").fight(900002);
                        }
                    },
                    choice2:
                        function () {
                            n.energy += 10;
                            t.closeUI("精力恢复10点（消耗返还！）");
                        }
                },
                7: {
                    text: ["路上碰到一位摔倒的老奶奶，", "是否要去扶起来？", "扶", "不扶"],
                    choice1: function () {
                        n.randomEvent[6] += 1;
                        if (20 == n.randomEvent[6]) {
                            //n.randomEvent[1] += 1;
                            n.Collectibles.goodPeopleCard += 1;
                            t.closeUI("老奶奶送给你一个「好人卡」，你获得「好人卡」*1");
                        } else {
                            if (100 * Math.random() <= 15) {
                                n.publicVar2[5] += 1;
                                if (n.money > 0) {
                                    n.money -= parseInt(.5 * n.money);
                                    t.closeUI("你被摸走一半的钱！");
                                } else t.closeUI("cao！你以为一大把年纪，趟地上很容易？耍老娘？呸！");
                            } else {
                                var e = 100 * Math.random();
                                //n.publicVar[0] -= 1;
                                a.QLnewfunction.addevil_value(-1);

                                if (e <= 20) {
                                    n.itemNum[0] += 2;
                                    t.closeUI("老奶奶送给你【果子】*2。罪恶值减1（你目前罪恶" + n.evil.evilValue + "）");
                                }
                                if (e > 20 && e <= 80) {
                                    n.itemNum2[1] += 1;
                                    t.closeUI("老奶奶送给你【伤药】*1。罪恶值减1（你目前罪恶" + n.evil.evilValue + "）");
                                }
                                if (e > 80) {
                                    n.itemNum[4] += 2;
                                    t.closeUI("老奶奶送给你【亚麻】*2。罪恶值减1（你目前罪恶" + n.evil.evilValue + "）");
                                }
                            }
                        }
                    },
                    choice2: function () {
                        t.closeUI("你假装没看见，走开了");
                    }
                },
                8:
                {
                    text:
                        ["发现一个乘凉的好地方", "小憩（精力+40）", "疗伤（生命全恢复）"],
                    choice1:
                        function () {
                            n.energy += 40;
                            t.closeUI("精力恢复40点！");
                        },
                    choice2: function () {
                        n.role.hp += parseInt(a.role.maxHp());
                        t.closeUI("恢复全部生命值！");
                    }
                },
                9: {
                    text: ["“小伙子，我看你印堂发黑，一看就是老烟枪，", "要不要来发电疗？酥酥麻麻的，很虚服哦~”", "来一发!（3毛，成功率" + Math.max(100 - 5 * n.orderTimes[3], 20) + "%）", "滚滚滚！"],
                    choice1: function () {
                        if (n.money >= 3) {
                            var e = 100 * Math.random(), a = Math.max(100 - 5 * n.orderTimes[3], 20);
                            n.money -= 3;
                            if (e < a) {
                                n.orderTimes[4] += 1;
                                n.orderTimes[3] += 1;
                                t.closeUI("电疗成功！烟瘾减少1%");
                            } else {
                                n.role.hp = 1;
                                t.closeUI("电疗失败！你损失全部生命！");
                            }
                        } else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "没钱！( ¯▽¯；)";
                    },
                    choice2: function () {
                        n.energy += 10;
                        t.closeUI("精力+10（消耗返还！）");
                    }
                },
                10: {
                    text: ["“收烟喽~", c[t.changeItemId2][3] + "个烟换" + c[t.changeItemId2][2] + "个「" + c[t.changeItemId2][0] + "」”", "换换换！", "没烟(｀_´)"],
                    choice1: function () {
                        var e = c[t.changeItemId2][3];
                        if (n.itemNum2[7] >= e) {
                            var a = t.changeItemId2, i = c[a];
                            n.itemNum2[7] -= e;
                            n.itemNum2[i[1]] += i[2];
                            t.closeUI("获得【" + i[0] + "】*" + i[2] + "！");
                            t.changeItemId2 = parseInt(5.99 * Math.random());
                        } else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "确实没烟！( ¯▽¯；)";
                    },
                    choice2: function () {
                        n.energy += 10;
                        t.changeItemId2 = parseInt(4.99 * Math.random());
                        t.closeUI("精力+10（消耗返还！）");
                    }
                },
                //随机事件传送门2
                1001:
                {
                    text:
                        ["走路时一个听歌骑车的妹子，不小心把你蹭了一下", "“真对不起啊小兄弟，我补偿你吧”", "要她亲亲！", "要她抱抱！"],
                    choice1:
                        function () {
                            n.energy += 30;
                            t.closeUI("精力恢复30点");
                        },
                    choice2:
                        function () {
                            n.role.maxHp += 50;
                            t.closeUI("生命上限+50");
                        }
                },
                1002:
                {
                    text:
                        ["前边出现不同的光景：", "右边是树林，左边是草地", "你走那边?", "树林", "草地"],
                    choice1:
                        function () {
                            n.itemNum[1] += 3;
                            n.itemNum[4] += 3;
                            t.closeUI("获得【木材】*3【亚麻】*3！");
                        },
                    choice2:
                        function () {
                            n.itemNum[0] += 4;
                            n.itemNum[5] += 4;
                            t.closeUI("获得【果子】*4【艾草】*4！");
                        }
                },
                1003: {
                    text: ["一个小孩正在吃棒棒糖...", "抢了赶紧溜！", "继续赶路"],
                    choice1: function () {
                        if (100 * Math.random() < 25) {
                            t.closeUI();
                            cc.find("Canvas/Button").stopAllActions();
                            cc.find("Event/scr_fight").getComponent("scr_fight").fight(904);
                        } else {
                            e("scr_data").hunger += 40;
                            t.closeUI("恢复40点饥饿！");
                        }
                    },
                    choice2: function () {
                        t.closeUI("你拍了拍肚皮，继续赶路");
                    }
                },
                1004: {
                    text: ["你被一只恶狗穷追不舍，", "你要怎么做？", "正面刚！", "丢个果子？！"],
                    choice1: function () {
                        t.closeUI();
                        cc.find("Canvas/Button").stopAllActions();
                        cc.find("Event/scr_fight").getComponent("scr_fight").fight(903);
                    },
                    choice2: function () {
                        if (n.itemNum[0] >= 1) {
                            n.itemNum[0] -= 1;
                            t.closeUI("你丢了一个果子，恶狗高兴的捡果子去啦！");
                        } else cc.find("Canvas/Event/Choice/Choice2/choiceText").getComponent("cc.Label").string = "果子不够！( ¯▽¯；)";
                    }
                },
                2001: {
                    text: ["路上发现5毛钱，似乎是故意扔在这的，捡不捡？", "捡", "不捡"],
                    choice1: function () {
                        t.closeUI();
                        cc.find("Canvas/Button").stopAllActions();
                        cc.find("Event/scr_fight").getComponent("scr_fight").fight(907);
                    },
                    choice2: function () {
                        t.closeUI();
                    }
                },
                2002: {
                    text: ["有一群流浪汉在树底下押宝，", "是否去试下手气？", "试（45%）", "不试"],
                    choice1: function () {
                        var n = e("scr_data");
                        if (n.money > 0) {
                            var a = 100 * Math.random(), i = Math.min(n.money, 100);
                            if (a < 45) {
                                n.money += i;
                                t.closeUI("手气不错，金钱翻倍！");
                            } else {
                                n.money = 0;
                                t.closeUI("你输光了所有的钱！");
                            }
                        } else cc.find("Canvas/Event/Choice/Choice2/choiceText").getComponent("cc.Label").string = "没钱！( ¯▽¯；)";
                    },
                    choice2: function () {
                        t.closeUI("");
                    }
                },
                2003: {
                    text: ["“好消息，好消息！本店即将拆迁，全场疯狂大甩卖", "每件" + i + "毛！件件" + i + "毛！", "买不买没关系，进来看一哈，瞧一哈。”", "路边一小贩拿着大喇叭喊道。", "挑一个看看", "走喽~"],
                    choice1: function () {
                        if (n.money >= i) {
                            var e = 100 * Math.random();
                            n.money -= i;
                            if (e <= 10) {
                                n.itemNum2[1] += 1;
                                t.closeUI("获得【伤药】*1");
                            }
                            if (e > 10 && e <= 35) {
                                n.itemNum2[12] += 1;
                                t.closeUI("获得【啤酒】*1");
                            }
                            if (e > 35 && e <= 50) {
                                n.itemNum2[0] += 1;
                                t.closeUI("获得【熟肉】*1");
                            }
                            if (e > 50 && e <= 75) {
                                n.itemNum2[22] += 1;
                                t.closeUI("获得【女装】*1");
                            }
                            if (e > 75 && e <= 100) {
                                n.itemNum2[25] += 1;
                                t.closeUI("获得【护身符】*1");
                            }
                        } else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "没钱！( ¯▽¯；)";
                    },
                    choice2:
                        function () {
                            n.energy += 10;
                            t.closeUI("精力恢复10点（消耗返还！）");
                        }
                },
                2004: {
                    text: ["一位正襟危坐、武士模样的男子，", "身旁立着一把寒光凛冽的黑色太刀", "地上一张白布上写道，", "“慈父重病，无钱医治，现出售传家之宝，售价" + (n.randomEvent[7] / 10).toFixed(1) + "！”", "买了", "溜了溜了~"],
                    choice1: function () {
                        if (n.money >= n.randomEvent[7]) {
                            n.money -= n.randomEvent[7];
                            n.itemNum2[10] += 1;
                            n.choice[4] += 1;
                            t.closeUI("获得【黑刀】！");
                            n.randomEvent[7] = 99 + 100 * n.choice[4];
                        } else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "没钱！( ¯▽¯；)";
                    },
                    choice2: function () {
                        n.randomEvent[7] -= 10;
                        n.randomEvent[7] <= 59 && (n.randomEvent[7] = 59);
                        t.closeUI();
                    }
                },
                2005: {
                    text: ["发现一份搬砖（LV.1）的零工，工资0.6元", "是否去试试？", "是（需20饥饿和20精力,成功率" + Math.min(70 + n.workExp, 100) + "%）", "算了"],
                    action: function () {
                        cc.find("Canvas/Event/Choice/label").getComponent("cc.Label").string = "【提示】如果饥饿不足，系统将自动使用食物哦^_^";
                    },
                    choice1: function () {
                        var a = e("scr_public");
                        s();
                        if (n.hunger >= 0) {
                            if (n.energy >= 20) {// 县城打工改进
                                var i = n.workExp, c = 100 * Math.random(), o = 70 + i;
                                var slry = parseInt(6 + n.publicVar2[30] / 15);
                                n.hunger -= 20;
                                a.autoEat();
                                if (c < o) {
                                    n.publicVar2[30] += 1;
                                    n.money += slry;
                                    n.workExp += 2;
                                    n.energy -= 20;
                                    t.closeUI("应聘成功，消耗精力，面试经验+2，阅历+1！\n获得" + (slry / 10).toFixed(1) + "元！");
                                } else {
                                    n.publicVar2[9] += 1;
                                    n.workExp += 1;
                                    n.publicVar2[30] += 1;
                                    t.closeUI("面试经验+1,阅历+1\n【“不好意思，我们可不敢乱用没身份证的小孩，你还是去找找其他工作吧”】");
                                }
                            } else {
                                cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "精力不足！";
                            }
                        } else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "饥饿值不足！";
                    },
                    choice2: function () {
                        t.closeUI();
                    }
                },
                2006: {
                    text: ["发现一份服务生（LV.2）的临时工，工资0.7元", "是否去试试？", "是（需20饥饿，10精力,成功率" + Math.min(20 + n.workExp, 100) + "%）", "算了"],
                    action: function () {
                        cc.find("Canvas/Event/Choice/label").getComponent("cc.Label").string = "【提示】如果饥饿不足，系统将自动使用食物哦^_^";
                    },
                    choice1: function () {
                        var a = e("scr_public");
                        s();
                        if (n.hunger >= 20) {
                            if (n.energy >= 10) {
                                var i = n.workExp, c = 100 * Math.random(), o = 20 + i;
                                var slry = parseInt(7 + n.publicVar2[30] / 15);
                                n.hunger -= 20;
                                a.autoEat();
                                if (c < o) {
                                    n.publicVar2[30] += 3;
                                    n.money += slry;
                                    n.workExp += 5;
                                    n.energy -= 10;
                                    n.itemNum[14] += 1;
                                    t.closeUI("应聘成功，消耗精力，面试经验+5,阅历+3！获得" + (slry / 10).toFixed(1) + "元！你顺便带走了店里的剩饭，获得【剩饭】*1");
                                } else {
                                    n.publicVar2[30] += 2;
                                    n.publicVar2[9] += 1;
                                    n.workExp += 3;
                                    t.closeUI("“面试经验+3，阅历+2\n【“你太内向，对别人评价又很敏感；\n我不建议你做这种需要频繁和各种人、打交道的工作，\n你还是找点技术活做做吧。”】");
                                }
                            } else {
                                cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "精力不足！";
                            }
                        } else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "饥饿值不足！";
                    },
                    choice2: function () {
                        t.closeUI();
                    }
                },
                3001: {
                    text: ["远处有一个小商店", "过去看看", "算啦，太累，还不如小睡一下呢"],
                    choice1: function () {
                        cc.director.loadScene("shop");
                    },
                    choice2:
                        function () {
                            n.energy += 20;
                            t.closeUI("精力+20");
                        }
                },
                3002: {
                    text: [Math.min(n.randomEvent[5] + 1, 7) + "只流浪狗，眼巴巴的看着你，", "是否给点【果子？】？", "给！（需果子*" + Math.min(n.randomEvent[5] + 1, 7) + ")", "不给！"],
                    choice1: function () {
                        var e = Math.min(n.randomEvent[5] + 1, 7);
                        if (n.itemNum[0] >= e) {
                            var evilV = Math.max(Math.round(e / 2), 1);
                            n.randomEvent[5] += 1;
                            //n.publicVar[0] -= a;
                            a.QLnewfunction.addevil_value(-evilV);
                            n.itemNum[0] -= e;
                            if (3 == n.randomEvent[5]) {
                                n.itemNum2[26] += 1;
                                t.closeUI("流浪狗把你带到一个地方，你找到一个「幸运石」。罪恶值减" + evilV + "（你目前罪恶" + n.evil.evilValue + "）");
                            } else if (7 == n.randomEvent[5]) {
                                n.itemNum2[8] += 1;
                                t.closeUI("流浪狗把你带到一堆白骨前，你找到一个「匕首」。罪恶值减" + evilV + "（你目前罪恶" + n.evil.evilValue + "）");
                            } else if (10 == n.randomEvent[5]) {
                                //n.randomEvent[1] += 1;
                                n.Collectibles.goodPeopleCard += 1;
                                t.closeUI("流浪狗送了你一张「好人卡」（用于解锁特殊剧情）！罪恶值减" + evilV + "（你目前罪恶" + n.evil.evilValue + "）");
                            } else t.closeUI("流浪狗似乎从来没吃过这么好吃的东西...罪恶值减" + evilV + "（你目前罪恶" + n.evil.evilValue + "）");
                        } else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "道具不足！";
                    },
                    choice2: function () {
                        t.closeUI("你把流浪狗轰走了");
                    }
                },
                3003: {
                    text: ["前边有两条路，", "左边看起来很好走，", "右边看起来很危险！", "你走哪边?", "左边", "右边"],
                    choice1: function () {
                        n.itemNum[1] += 2;
                        n.itemNum[0] += 2;
                        t.closeUI("获得【木材】*2【果子】*2！");
                    },
                    choice2: function () {
                        n.enemyId = 300002;
                        t.closeUI();
                        cc.find("Canvas/Button").stopAllActions();
                        cc.find("Event/scr_fight").getComponent("scr_fight").fight(300002);
                    }
                },
                3004: {
                    text: ["“有奖套圈喽，", "小伙要不要试下手气，", "2毛一次！", "试试", "溜了溜了"],
                    choice1: function () {
                        if (n.money >= 2) {
                            var e = 100 * Math.random(), a = 20 + 10 * n.randomEvent[12];
                            n.money -= 2;
                            if (e < a) {
                                n.randomEvent[12] += 1;
                                (function () {
                                    var e = 100 * Math.random();
                                    if (e <= 20) {
                                        n.itemNum[0] += 5;
                                        t.closeUI("获得【果子】*4，扔圈熟练度+1");
                                    }
                                    if (e > 20 && e <= 40) {
                                        n.money += 10;
                                        t.closeUI("获得【1元】大奖！扔圈熟练度+1");
                                    }
                                    if (e > 40 && e <= 60) {
                                        n.itemNum2[12] += 1;
                                        t.closeUI("获得【啤酒】*1，扔圈熟练度+1");
                                    }
                                    if (e > 60 && e <= 75) {
                                        n.itemNum2[7] += 1;
                                        t.closeUI("获得【香烟】*1，扔圈熟练度+1");
                                    }
                                    if (e > 75 && e <= 90) {
                                        n.itemNum2[27] += 1;
                                        t.closeUI("获得【晓月手链】*1，扔圈熟练度+1");
                                    }
                                    if (e > 90) {
                                        n.itemNum2[21] += 1;
                                        t.closeUI("获得【小裤裤】*1，扔圈熟练度+1");
                                    }
                                })();
                            } else {
                                n.randomEvent[12] += 1;
                                t.closeUI("你扔空了，啥也没圈到，扔圈熟练度+1");
                            }
                        } else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "没钱！";
                    },
                    choice2: function () {
                        t.closeUI("");
                    }
                },
                3005: {
                    text: ["“兄弟，", "你若能让我砍一刀，我就给你" + (2 * n.randomEvent[13] + 2) + "毛钱”", "一个流浪汉拉着你说道", "行，来呀！", "啊！！！我呸！"],
                    choice1: function () {
                        t.closeUI();
                        cc.find("Canvas/Button").stopAllActions();
                        cc.find("Event/scr_fight").getComponent("scr_fight").fight(900);
                    },
                    choice2: function () {
                        n.randomEvent[13] += 1;
                        t.closeUI("");
                    }
                },
                3006: {
                    text: ["前边有俩村子，", "东边锣鼓喧天，鞭炮齐鸣;", "西边哭天喊地，神号鬼泣！", "你去哪边?", "东边", "西边"],
                    choice1: function () {
                        var e = 100 * Math.random();
                        if (e < 50) {
                            n.money += 3;
                            t.closeUI("抢到【0.3元】红包！");
                        }
                        if (e >= 50) {
                            n.money += 12;
                            t.closeUI("抢到【1.2元】红包！");
                        }
                    },
                    choice2:
                        function () {
                            n.itemNum2[0] += 2;
                            t.closeUI("获得【熟肉】*2！");
                        }
                },
                3007: {
                    text: ["发现一个可疑的地方，", "是否挖挖看？", "是（需20饥饿,成功率" + (40 + 3 * n.randomEvent[11]) + "%）", "算了"],
                    choice1: function () {
                        var a = e("scr_public");
                        s();
                        if (n.hunger >= 20) {
                            var i = 100 * Math.random(), c = 40 + 3 * n.randomEvent[11];
                            n.hunger -= 20;
                            a.autoEat();
                            n.randomEvent[11] += 1;
                            i < c ? function () {
                                var e = 100 * Math.random();
                                if (e < 20) {
                                    n.itemNum[8] += 1;
                                    t.closeUI("挖到【黑曜石】*1");
                                } else if (e < 60) {
                                    n.itemNum[9] += 1;
                                    t.closeUI("挖到出一个盒子，打开一看，发现【火狐皮】*1");
                                } else if (e < 63) {
                                    n.itemNum2[17] += 1;
                                    t.closeUI("挖到出一个宝箱，打开一看，发现【放大镜】*1");
                                } else if (e < 100) {
                                    var a = parseInt(5 * Math.random() + 1);
                                    n.money += a;
                                    t.closeUI("挖到一些硬币，获得" + (a / 10).toFixed(1) + "元！");
                                }
                            }() : t.closeUI("忙活半天，啥也没挖到，挖掘技术+1");
                        } else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "饥饿值不够！";
                    },
                    choice2: function () {
                        t.closeUI("");
                    }
                },
                4001: {
                    text: ["一位衣服褴褛、武士模样的男子，", "在地上写道，", "“爱父重病。王八蛋哥哥，输光所有捐款，欠下万元巨债，现出售绝世武学一本，只要" + (Math.max(parseInt(n.day + n.publicVar2[28] * n.publicVar3[19] - 40), 29) / 10).toFixed(1) + "元，活动特价，仅此一本！”", "哇~活动价~赶紧买！", "......"],
                    choice1: function () {
                        var e = Math.max(parseInt(n.day + n.publicVar2[28] * n.publicVar3[19] - 40), 29);
                        if (n.money >= e) {
                            n.money -= e;
                            n.publicVar2[28] = 1;
                            n.publicVar3[19] += 1;
                            t.closeUI("获得《如来神掌》！请到看书界面使用。如果再次购买此书，此书使用次数将重置，但贼贵！");
                        } else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "没钱！( ¯▽¯；)";
                    },
                    choice2: function () {
                        n.energy += 10;
                        t.closeUI("精力恢复10点（消耗返还！）");
                    }
                },
                4002: {
                    text: ["“兄弟，这儿有市场上买不到的东西，要不要过来看看？”", "过去看看", "算了~"],
                    choice1: function () {
                        cc.director.loadScene("shop2");
                    },
                    choice2: function () {
                        n.energy += 10;
                        t.closeUI("精力+10（消耗返还！）");
                    }
                },
                4003: {
                    text: ["发现一份贴小广告的工作，是否去试试？（消耗10精力）", "是（需20饥饿）", "算了"],
                    action: function () {
                        cc.find("Canvas/Event/Choice/label").getComponent("cc.Label").string = "【提示】如果饥饿不足，系统将自动使用食物哦^_^";
                    },
                    choice1: function () {
                        var a = e("scr_public");
                        s();
                        if (n.hunger >= 0) {
                            var i = parseInt(3 + n.publicVar2[30] / 15);
                            n.money += i;
                            n.publicVar2[30] += 1;
                            n.hunger -= 20;
                            n.energy -= 10;
                            a.autoEat();
                            t.closeUI("获得报酬" + (i / 10).toFixed(1) + "元，阅历+1");
                        } else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "饥饿值不足！";
                    },
                    choice2: function () {
                        t.closeUI();
                    }
                },
                4004:
                {
                    text:
                        ["碰到一位烤红薯的老人，这红薯好吃的很啊！", "买（2毛）", "算了"],
                    choice1:
                        function () {
                            if (n.money >= 2) {
                                var e = Math.min(3 * n.chioce2[4], 50), a = 100 * Math.random();
                                n.money -= 2;
                                if (a < e) {
                                    n.chioce2[4] += 1;
                                    n.hunger += 80;
                                    n.maxHunger += 10;
                                    t.closeUI("“啊吧~啊吧~”，不会说话的老人额外送给你一个红薯，饥饿+80，饥饿上限+10！");
                                } else {
                                    n.chioce2[4] += 1;
                                    n.hunger += 40;
                                    n.maxHunger += 5;
                                    t.closeUI("香喷喷烤红薯，饥饿+40，饥饿上限+5");
                                }
                            } else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "没钱！";
                        },
                    choice2: function () {
                        t.closeUI();
                    }
                },
                4005: {
                    text: ["路上发现" + t.randomItemNum + "个踩扁的易拉罐，四周无人，捡不捡？", "捡", "不捡"],
                    choice1: function () {
                        if (100 * Math.random() < 50) {
                            t.closeUI();
                            cc.find("Canvas/Button").stopAllActions();
                            n.enemyId = 900007;
                            cc.find("Event/scr_fight").getComponent("scr_fight").fight(900007);
                        } else {
                            n.itemNum[2] += t.randomItemNum;
                            t.closeUI("获得" + t.randomItemNum + "个易拉罐！");
                        }
                    },
                    choice2: function () {
                        t.closeUI();
                    }
                },
                7001: {
                    text: ["又逛到那个可疑的地方，是否接着挖？", "是（需30饥饿，当前深度" + n.chioce2[3] + "）", "算了，留着肚子干点别的"],
                    choice1: function () {
                        var a = e("scr_public");
                        i();
                        i();
                        if (n.hunger >= 30) {
                            n.hunger -= 30;
                            a.autoEat();
                            n.chioce2[3] += 1;
                            (function () {
                                var e = n.chioce2[3];
                                if (2 == e) {
                                    n.money += 4;
                                    t.closeUI("挖到两枚银币，获得0.4元！");
                                } else if (4 == e) {
                                    n.itemNum[8] += 2;
                                    t.closeUI("挖到两个黑色石头，获得【黑曜石】*2");
                                } else if (8 == e) {
                                    n.itemNum2[26] += 2;
                                    t.closeUI("挖到一个幸运石，获得【幸运石】*2");
                                } else if (12 == e) {
                                    n.itemNum[9] += 6;
                                    t.closeUI("挖到出一个宝箱，打开一看，发现火狐皮，获得【火狐皮】*6！");
                                } else if (20 == e) {
                                    n.itemNum2[27] += 2;
                                    t.closeUI("挖到出一个宝箱，打开一看，发现晓月手链，获得【晓月手链】*2！");
                                } else if (32 == e) {
                                    n.itemNum[8] += 10;
                                    t.closeUI("挖到大量黑色石头，获得【黑曜石】*10！！！");
                                } else t.closeUI("啥也没挖到！");
                            })();
                        } else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "你怕是会晕死在洞底哦~";
                        function i() {
                            var t = e("scr_data");
                            if (t.hunger <= 30) if (t.itemNum2[0] >= 1) {
                                t.itemNum2[0] -= 1;
                                t.orderTimes[2] += 1;
                                t.hunger += 60;
                            } else if (t.itemNum[0] >= 1) {
                                t.itemNum[0] -= 1;
                                t.orderTimes[5] += 1;
                                t.hunger += 20;
                            }
                        }
                    },
                    choice2: function () {
                        n.energy += 10;
                        t.closeUI("精力+10（消耗返还！）");
                    }
                },
                7002: {
                    text: ["“我的梦想是成为天下第一飞刀手，所以能请你帮个忙个么？”，一个年轻小伙真诚的问道。", "可以呀（报酬0.5元，但有风险）", "...我是sb？"],
                    choice1: function () {
                        var e = 100 * Math.random(), a = Math.min(20 + 5 * n.chioce2[5], 80);
                        n.chioce2[5] += 1;
                        if (n.chioce2[5] > 15) {// 飞刀
                            n.skillLv[29] = 1;
                        }
                        if (e < a) {
                            n.money += 5;
                            n.escapeExp += 3;
                            t.closeUI("“走你！...蛤蛤！完美！”。获得0.5元报酬，小伙飞刀技术提升，逃跑技术+3！");
                        } else {
                            n.money += 10;
                            n.role.hp = 1;
                            n.health -= 1;
                            n.escapeExp += 1;
                            t.closeUI("“走你！...哎呀！不好意思，手滑了下...多给你5毛，拿去买些药吧~”。生命全损失，健康-1，获得1元报酬，小伙飞刀技术提升，逃跑技术+1！");
                        }
                    },
                    choice2: function () {
                        n.chioce2[5] -= 1;
                        t.closeUI("由于小伙子迟迟没有训练，所以飞镖技术退化了...");
                    }
                },
                7003: {
                    text: ["你碰到" + parseInt(n.specialEnemy[400003].lv / 20) + "匹狼，要怎么做？", "干！", "丢块肉..."],
                    choice1: function () {
                        t.closeUI();
                        cc.find("Canvas/Button").stopAllActions();
                        cc.find("Event/scr_fight").getComponent("scr_fight").fight(400003);
                    },
                    choice2: function () {
                        if (n.itemNum[3] >= 1) {
                            n.itemNum[3] -= 1;
                            t.closeUI("丢块生肉，赶紧溜~(ง˙o˙)ว");
                        } else cc.find("Canvas/Event/Choice/Choice2/choiceText").getComponent("cc.Label").string = "没生肉！( ¯▽¯；)";
                    }
                },
                7004: {
                    text: ["路过一片小河环绕的小树林，是弄点吃的还是捡点材料呢？", "弄吃的", "弄材料"],
                    choice1: function () {
                        var e = parseInt(4 * Math.random() + 3), a = parseInt(3 * Math.random() + 3);
                        n.itemNum[0] += e;
                        n.itemNum[3] += a;
                        t.closeUI("获得【果子】*" + e + "【生肉】*" + a + "！");
                    },
                    choice2: function () {
                        var e = parseInt(4 * Math.random() + 3), a = parseInt(4 * Math.random() + 3);
                        n.itemNum[1] += e;
                        n.itemNum[4] += a;
                        t.closeUI("获得【木材】*" + e + "【亚麻】*" + a + "！");
                    }
                },
                7005: {
                    text: ["“在下施半仙，要不要来抽个签呀？现在公司搞活动，限时折扣价！咋样？”", "好呀（" + t.drawDiscount + "折，" + t.drawDiscount + "毛钱）", "算了"],
                    choice1: function () {
                        var e = t.drawDiscount;
                        if (n.money >= e) {
                            n.money -= e;
                            var a = 100 * Math.random();
                            if (a < 25) {
                                n.publicVar3[9] += 30;
                                t.closeUI("“嗯~今天你更容易捡到东西哟~”（再次获得道具几率+30%，持续1天）”");
                            } else if (a < 50) {
                                n.publicVar3[4] += 99;
                                t.closeUI("“嗯~今天适合怼！怼！怼！~”（攻击+99，持续1天）”");
                            } else if (a < 75) {
                                n.publicVar3[10] += 99;
                                t.closeUI("“嗯~今天适合冈！冈！冈！~”（防御+99，持续1天）”");
                            } else {
                                n.publicVar3[11] += 100;
                                t.closeUI("“嗯~今天适合装逼呢~”（逃跑率+100%，持续1天）”");
                            }
                        } else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "“没钱！”";
                    },
                    choice2: function () {
                        t.closeUI("");
                    }
                },
                8001: {
                    text: ["在一个在建筑工地找到一份送水泥的临时工作，做不做呢？（消耗20精力）", "做（需20饥饿）", "算了"],
                    action: function () {
                        cc.find("Canvas/Event/Choice/label").getComponent("cc.Label").string = "【提示】如果饥饿不足，系统将自动使用食物哦^_^";
                    },
                    choice1: function () {
                        var a = e("scr_public");
                        s();
                        if (n.hunger >= 0) {
                            var i = parseInt(5 + n.publicVar2[30] / 15);
                            n.money += i;
                            n.publicVar2[30] += 1;
                            n.hunger -= 20;
                            n.energy -= 20;
                            a.autoEat();
                            t.closeUI("获得报酬" + (i / 10).toFixed(1) + "元，阅历+1");
                        } else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "饥饿值不足！";
                    },
                    choice2: function () {
                        t.closeUI();
                    }
                },
                8002: {
                    text: ["一位长发、外表清纯的妹子，抱膝而坐，身旁几个清秀的粉笔字，“旅游至此，钱包手机被偷，求" + (2 + 2 * n.chioce2[6]) + "毛路费回家...”", "好可爱...给！", "溜了~"],
                    choice1: function () {
                        var e = 2 + 2 * n.chioce2[6];
                        if (n.chioce2[6] > 10) {
                            var i = a.role.maxHp();
                            n.role.hp += parseInt(1 * i);
                            n.role.hp > i && (n.role.hp = i);
                            t.closeUI("妹子拒绝接受你的钱...并偷偷亲了你一口，生命恢复100%！");
                        } else if (n.money < e) cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "没钱~";
                        else if (9 == n.chioce2[6]) {
                            t.closeUI();
                            cc.find("Canvas/Button").stopAllActions();
                            cc.find("Event/scr_fight").getComponent("scr_fight").fight(910);
                        } else if (10 == n.chioce2[6]) {
                            n.money -= e;
                            n.publicVar2[24] += 1;
                            n.chioce2[6] += 1;
                            t.closeUI("妹子送给你一本书，小声说了句「谢谢你」。获得《伯恩斯情绪疗法》！");
                        } else {
                            n.money -= e;
                            n.chioce2[6] += 1;
                            t.closeUI("妹子小声说了句谢谢...");
                        }
                    },
                    choice2: function () {
                        n.energy += 10;
                        t.closeUI("精力+10（消耗返还）");
                    }
                },
                8003:
                {
                    text:
                        ["“有奖套圈...咦？小伙子，咋看起有些面熟呀...", "3毛一次，要不要来一发？", "试试（" + Math.min(2 * n.randomEvent[12] + 20, 100) + "%套中）", "溜了溜了"],
                    choice1:
                        function () {
                            if (n.money >= 3) {
                                var e = 100 * Math.random(), a = Math.min(2 * n.randomEvent[12] + 20, 100);
                                n.money -= 3;
                                if (e < a) {
                                    n.randomEvent[12] += 1;
                                    (function () {
                                        var e = 100 * Math.random();
                                        if (e <= 20) {
                                            n.money += 10;
                                            t.closeUI("获得【1元】，扔圈熟练度+1（累计" + n.randomEvent[12] + "）");
                                        }
                                        if (e > 20 && e <= 40) {
                                            n.itemNum2[12] += 1;
                                            t.closeUI("获得【啤酒】*1，扔圈熟练度+1（累计" + n.randomEvent[12] + "）");
                                        }
                                        if (e > 40 && e <= 60) {
                                            n.itemNum2[17] += 1;
                                            t.closeUI("获得【放大镜】*1，扔圈熟练度+1（累计" + n.randomEvent[12] + "）");
                                        }
                                        if (e > 60 && e <= 70) {
                                            n.itemNum2[22] += 1;
                                            t.closeUI("获得【女装】*1，扔圈熟练度+1（累计" + n.randomEvent[12] + "）");
                                        }
                                        if (e > 70 && e <= 75) {
                                            n.itemNum2[27] += 1;
                                            t.closeUI("获得【晓月手链】*1，扔圈熟练度+1（累计" + n.randomEvent[12] + "）");
                                        }
                                        if (e > 75) {
                                            n.itemNum2[26] += 1;
                                            t.closeUI("获得【幸运石】*1，扔圈熟练度+1（累计" + n.randomEvent[12] + "）");
                                        }
                                    })();
                                } else {
                                    n.randomEvent[12] += 1;
                                    t.closeUI("你扔空了，啥也没圈到，扔圈熟练度+1（累计" + n.randomEvent[12] + "）");
                                }
                            } else cc.find("Canvas/Event/Choice/Choice1/choiceText").getComponent("cc.Label").string = "没钱！";
                        },
                    choice2: function () {
                        n.energy += 10;
                        t.closeUI("精力+10（消耗返还）");
                    }
                },
                8004: {
                    text: ["发现一个有点闪眼的大楼！要进去看看吗？", "去", "不去"],
                    choice1: function () {
                        cc.director.loadScene("shop3");
                    },
                    choice2: function () {
                        n.energy += 10;
                        t.closeUI("精力+10（消耗返还）");
                    }
                },
                90001: {
                    text: ["“欢迎光临，你要做点什么呢？”", "找妹子", "喝点酒（1元）"],
                    choice1: function () { },
                    choice2: function () {
                        n.energy += 10;
                        t.closeUI("精力+10（消耗返还）");
                    }
                },
                90002: {
                    text: ["请问你找哪位？", "", ""],
                    choice1: function () { },
                    choice2: function () {
                        n.energy += 10;
                        t.closeUI("精力+10（消耗返还）");
                    }
                },
                10001: {
                    text: ["在导致流浪的主要原因是：\n（这里仅对比这两类，不讨论身体缺陷问题）", "懒/愚蠢（自身因素）", "精神/心理疾病（客观因素）"],
                    choice1: function () {
                        n.publicVar[11] > 0 && (n.publicVar[11] = 0);
                        n.publicVar[11] += 3;
                        t.closeUI();
                        t.startEvent(10002);
                    },
                    choice2: function () {
                        n.publicVar[11] > 0 && (n.publicVar[11] = 0);
                        n.publicVar[11] += 3;
                        t.closeUI();
                        t.startEvent(10002);
                    }
                },
                10002: {
                    text: ["你是否认为内向是一种性格缺陷？", "是的", "不是的"],
                    choice1: function () {
                        n.publicVar[11] += 3;
                        t.closeUI();
                        t.startEvent(10003);
                    },
                    choice2: function () {
                        n.publicVar[11] += 3;
                        t.closeUI();
                        t.startEvent(10003);
                    }
                },
                10003: {
                    text: ["你认为包容可以解决矛盾吗？", "可以", "不可以"],
                    choice1: function () {
                        n.publicVar[11] += 3;
                        t.closeUI();
                        t.startEvent(10004);
                    },
                    choice2: function () {
                        n.publicVar[11] += 3;
                        t.closeUI();
                        t.startEvent(10004);
                    }
                },
                10004: {
                    text: ["你认为哪种东西更重要？", "个人能力和健康的身体", "良好的人际关系和美满的家庭"],
                    choice1: function () {
                        n.publicVar[11] += 3;
                        t.closeUI();
                        t.startEvent(10005);
                    },
                    choice2: function () {
                        n.publicVar[11] += 3;
                        t.closeUI();
                        t.startEvent(10005);
                    }
                },
                10005: {
                    text: ["你认为那种想法更加不利于人际交往？", "“我有缺陷...我有问题...”", "“我身边的人都应该喜欢我！”"],
                    choice1: function () {
                        n.publicVar[11] += 3;
                        t.closeUI();
                        t.startEvent(10006);
                    },
                    choice2: function () {
                        n.publicVar[11] += 3;
                        t.closeUI();
                        t.startEvent(10006);
                    }
                },
                10006: {
                    text: ["你更需要：", "自己认可自己", "别人认可自己"],
                    choice1: function () {
                        n.publicVar[11] += 3;
                        t.closeUI();
                        t.startEvent(10007);
                    },
                    choice2: function () {
                        n.publicVar[11] += 3;
                        t.closeUI();
                        t.startEvent(10007);
                    }
                },
                10007: {
                    text: ["你认为人活着需要理由吗？", "需要", "不需要"],
                    choice1: function () {
                        n.publicVar[11] += 3;
                        t.closeUI();
                        t.startEvent(10008);
                    },
                    choice2: function () {
                        n.publicVar[11] += 3;
                        t.closeUI();
                        t.startEvent(10008);
                    }
                },
                10008: {
                    text: ["你是否有想过愚蠢和缺乏自制力的人应该都死掉？", "想过", "没想过"],
                    choice1: function () {
                        n.publicVar[11] += 3;
                        t.closeUI();
                        t.startEvent(10009);
                    },
                    choice2: function () {
                        n.publicVar[11] += 3;
                        t.closeUI();
                        t.startEvent(10009);
                    }
                },
                10009: {
                    text: ["在回答以上问题时，你是否有想过这些问题与游戏的联系、或者去揣测作者的意图？", "有", "没有"],
                    choice1: function () {
                        n.publicVar[11] += 3;
                        t.closeUI();
                        t.startEvent(10010);
                    },
                    choice2: function () {
                        n.publicVar[11] += 3;
                        t.closeUI();
                        t.startEvent(10010);
                    }
                },
                10010: {
                    text: ["以上问题你是如实回答的吗？（没有为了通关而去刻意选择答案）", "是的", "不是的"],
                    choice1: function () {
                        n.publicVar[11] += 3;
                        t.closeUI();
                        r();
                    },
                    choice2: function () {
                        n.publicVar[11] += 3;
                        t.closeUI();
                        r();
                    }
                },
                20001: {
                    text: ["你愿意回家吗？", "愿意", "不愿意"],
                    choice1: function () {
                        n.publicVar3[3] = 311;
                        t.closeUI("“回家吧~少年”");
                    },
                    choice2: function () {
                        if (n.ifFollow[0] > 0) {
                            n.publicVar3[3] = 412;
                            n.plotId = 1002;
                            a.save();
                            cc.director.loadScene("plot");
                        } else if (n.publicVar[7] >= 999) {
                            n.publicVar3[3] = 413;
                            n.plotId = 1003;
                            a.save();
                            cc.director.loadScene("plot");
                        } else {
                            n.publicVar3[3] = 411;
                            n.plotId = 1001;
                            a.save();
                            cc.director.loadScene("plot");
                        }
                    }
                }
            };
            function r() {
                var i = 59 - 10 * e("scr_data2").gameData[4];
                n.skillLv[4] = 0;
                t.gamePoint = 3 * n.choice[2] + 6 * n.choice[7] + 6 * n.publicVar2[14] + 2 * (10 - n.publicVar2[21]) + 5 * n.publicVar[9] - Math.max(Math.min((4 * n.orderTimes[1] - n.orderTimes[4]) / 10, 10), 0);
                t.gamePoint += parseInt(3 * n.publicVar2[19] / 50) + 3 * n.publicVar2[15];
                t.attPoint = parseInt(21 - 6 * a.role.maxHp() / 1e4 - 6 * a.role.att() / 2e3 - 6 * a.role.def() / 1e3);
                t.attPoint = Math.min(Math.max(t.attPoint, 0), 18);
                t.totalPoint = t.gamePoint + t.attPoint + n.publicVar[11];
                if (t.totalPoint < i) {
                    n.publicVar3[3] = 111;
                    t.closeUI("......");
                } else {
                    n.publicVar3[3] = 211;
                    t.closeUI("......");
                }
            }
            function s() {
                var t = e("scr_data");
                if (t.hunger <= 20) if (t.itemNum2[0] >= 1) {
                    t.itemNum2[0] -= 1;
                    t.orderTimes[2] += 1;
                    t.hunger += 60;
                } else if (t.itemNum[0] >= 1) {
                    t.itemNum[0] -= 1;
                    t.orderTimes[5] += 1;
                    t.hunger += 20;
                }
            }
            return o;
        },
        startEvent: function (e) {
            var t = this.event()[e], n = t.text, a = n.pop(), i = n.pop(), c = n.length, o = cc.find("Canvas/Event/Choice");
            cc.find("Canvas/Event/EventText").removeAllChildren();
            cc.find("Canvas/Event/Choice/label").getComponent("cc.Label").string = "你选择...";
            "undefined" != typeof t.action && t.action();
            this.showUI();
            this.printEventDes(n);
            this.scheduleOnce(function () {
                o.runAction(cc.scaleTo(.5, 1));
            }, .1 * c);
            (function () {
                var e = t.choice1, n = t.choice2, c = o.getChildByName("Choice1"), r = o.getChildByName("Choice2");
                c.getChildByName("choiceText").getComponent("cc.Label").string = i;
                r.getChildByName("choiceText").getComponent("cc.Label").string = a;
                if ("" == i) {
                    c.opacity = 0;
                    o.getChildByName("label").opacity = 0;
                }
                c.on("touchstart", e, c);
                r.on("touchstart", n, r);
            })();
        },
        //UI传送门
        printEventDes: function (e) {
            var t = e.length, n = 1, a = this, i = cc.find("Canvas/Event/EventText");
            cc.find("Event/scr_mainUIEvent");
            this.creatText(i, "plot0", e[0]);
            this.schedule(function () {
                a.creatText(i, "plot" + n, e[n]);
                n++;
            }, .1, t - 2);
        },
        showUI: function () {
            cc.find("Canvas/Text/txt_notify").opacity = 0;
            cc.find("Canvas/Text/txt_notify").getComponent("cc.Label").string = "";
            cc.find("Canvas/Event").scale = 1;
            cc.find("Canvas/Event/Choice").scale = 0;
            cc.find("Canvas/Button").runAction(cc.scaleTo(0, 0));//修改缩放按钮保护
        },
        closeUI: function (t) {
            var n = cc.find("Canvas/Button"), a = e("scr_public"), i = cc.find("Canvas/Event/Choice/Choice1"), c = cc.find("Canvas/Event/Choice/Choice2");
            cc.find("Canvas/Text/txt_notify").opacity = 255;
            cc.find("Canvas/Event/EventText").removeAllChildren();
            i.targetOff(i);
            c.targetOff(c);
            cc.find("Canvas/Event").scale = 0;
            n.runAction(cc.scaleTo(0, 1));//修改缩放按钮保护
            t = t || "";
            e("scr_effect").playText("Canvas/Text/txt_notify", t, 60);
            a.save();
            a.init();
        },
        onLoad: function () { }
    });
    cc._RF.pop();
}, {
    scr_data: "scr_data",
    scr_data2: "scr_data2",
    scr_effect: "scr_effect",
    scr_public: "scr_public"
}]