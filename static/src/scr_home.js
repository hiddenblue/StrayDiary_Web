scr_home = [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "82a35cQvNJE9LzHff6utW/P", "scr_home");
    cc.Class({
        extends: cc.Component,
        properties: {},
        onLoad: function () {
            var t = e("scr_data"), n = e("scr_effect"), a = e("scr_public"), i = cc.find("Canvas/UI1"), c = cc.find("Canvas/UI2"), o = cc.find("Canvas/UI3"), r = cc.find("Canvas/UI4"), s = cc.find("Canvas/UI5"), l = i.getChildByName("choice1"), u = i.getChildByName("choice2"), p = i.getChildByName("choice3"), f = i.getChildByName("choice4"), d = i.getChildByName("choice5"), m = i.getChildByName("choice6"), h = t.publicVar2[23] + t.publicVar2[24] + t.publicVar2[25] + t.publicVar2[26] + t.publicVar2[27] + t.publicVar2[28] + t.publicVar2[29];
            (function () {
                i.getChildByName("back").on("touchstart", function () {
                    e("scr_public").save();
                    cc.director.loadScene("main");
                }, this);
                t.publicVar2[17] > 0 ? l.on("touchstart", v, l) : l.on("touchstart", J, l);
                u.on("touchstart", function () {
                    e("scr_data").energy >= 10 ? cc.director.loadScene("notice2") : cc.director.loadScene("diary");
                }, this);
                p.on("touchstart", y, this);
                f.on("touchstart", g, this);
                h > 0 ? d.on("touchstart", b, this) : d.on("touchstart", J, this);
                t.stayDay[3] > 12 ? m.on("touchstart", _, this) : m.on("touchstart", J, this);
                c.getChildByName("choice1").on("touchstart", x, this);
                c.getChildByName("choice2").on("touchstart", C, this);
                c.getChildByName("choice3").on("touchstart", E, this);
                o.getChildByName("choice1").on("touchstart", I, this);
                o.getChildByName("choice2").on("touchstart", V, this);
                o.getChildByName("choice3").on("touchstart", N, this);
                0 != t.publicVar2[23] && r.getChildByName("choice7").on("touchstart", T, this);
                0 != t.publicVar2[24] && r.getChildByName("choice6").on("touchstart", k, this);
                0 != t.publicVar2[25] && r.getChildByName("choice5").on("touchstart", S, this);
                0 != t.publicVar2[26] && r.getChildByName("choice4").on("touchstart", H, this);
                0 != t.publicVar2[27] && r.getChildByName("choice3").on("touchstart", R, this);
                0 != t.publicVar2[28] && r.getChildByName("choice2").on("touchstart", w, this);
                0 != t.publicVar2[29] && r.getChildByName("choice1").on("touchstart", M, this);
                s.getChildByName("choice1").on("touchstart", L, this);
                s.getChildByName("choice2").on("touchstart", B, this);
                t.stayDay[3] < 30 || s.getChildByName("choice3").on("touchstart", U, this);
                0 != t.publicVar2[21] && s.getChildByName("choice4").on("touchstart", F, this);
                1 == t.publicVar[9] ? s.getChildByName("choice5").on("touchstart", A, this) : 2 == t.publicVar[9] && s.getChildByName("choice5").on("touchstart", D, this);
                c.getChildByName("back").on("touchstart", function () {
                    (function () {
                        a.save();
                        c.runAction(cc.scaleTo(.3, 0));
                    })();
                    K();
                }, this);
                o.getChildByName("back").on("touchstart", function () {
                    (function () {
                        a.save();
                        o.runAction(cc.scaleTo(.3, 0));
                    })();
                    K();
                }, this);
                r.getChildByName("back").on("touchstart", function () {
                    (function () {
                        a.save();
                        r.runAction(cc.scaleTo(.3, 0));
                    })();
                    K();
                }, this);
                s.getChildByName("back").on("touchstart", function () {
                    (function () {
                        a.save();
                        s.runAction(cc.scaleTo(.3, 0));
                    })();
                    K();
                }, this);
            })();
            O();
            (function () {
                i.active = !0;
                c.active = !0;
                o.active = !0;
                r.active = !0;
                s.active = !0;
                c.scale = 0;
                o.scale = 0;
                r.scale = 0;
                s.scale = 0;
                0 == h && (d.getChildByName("text").getComponent("cc.Label").string = "？？？？");
                t.stayDay[3] > 12 && (m.getChildByName("text").getComponent("cc.Label").string = "外出");
            })();
            (function () {
                if (t.publicVar[7] > 0 && 0 == t.publicVar[8]) {
                    t.plotId = 98;
                    a.save();
                    cc.director.loadScene("plot");
                }
            })();
            function v() {
                t.energy >= 10 ? function () {
                    t.publicVar[7];
                    t.talkTimes[1] += 1;
                    var e = parseInt(t.publicVar2[20] + 2 * t.publicVar[20]), a = 100 * Math.random();
                    if (a < e) {
                        var i = parseInt(7.9 * Math.random()), c = ["liao ♂ 得不错", "“瑶酱~今天也要元气满满喔~”", "“嘿~嘿嘿~”", "“(｡･∀･)ﾉﾞ嗨！~上午好呀！”", "一波调戏", "一波求教", "“早上好呀！”", "“卡哇咿滴斯勒” “？”"];
                        t.publicVar[7] += 1;
                        t.publicVar[8] = 0;// 碧瑶聊天
                        t.publicVar2[20] += parseInt(3 * Math.random() + 1);
                        n.playText("Canvas/notify", c[i] + "，好感+1\n（当前好感：" + t.publicVar[7] + "）\n（下次成功率为" + t.publicVar2[20] + "%+" + 2 * t.publicVar[20] + "）", 60);
                    } else {
                        var i = parseInt(5.9 * Math.random()), c = ["寒暄", "吹逼", "赞美", "沉默", "鸡汤", "分析"];
                        t.publicVar2[20] -= parseInt(3 * Math.random() + 1);
                        n.playText("Canvas/notify", "一顿" + c[i] + "，好感+0\n（下次聊天成功率" + t.publicVar2[20] + "%+" + 2 * t.publicVar[20] + "%）", 60);
                    }
                    if (t.talkTimes[1] == 100) {// 碧瑶聊天奖励 

                    }
                    t.energy -= 10;
                    O();
                }() : n.playText("Canvas/notify", "精力不足！", 60);
            }
            function y() {
                Z();
                (function () {
                    Q();
                    c.runAction(cc.scaleTo(.3, 1));
                })();
                q();
            }
            function g() {
                Z();
                (function () {
                    Q();
                    o.runAction(cc.scaleTo(.3, 1));
                })();
                G();
            }
            function b() {
                Z();
                (function () {
                    Q();
                    r.runAction(cc.scaleTo(.3, 1));
                })();
                z();
            }
            function _() {
                Z();
                (function () {
                    Q();
                    s.runAction(cc.scaleTo(.3, 1));
                })();
                (function () {
                    t.stayDay[3] < 30 && (cc.find("Canvas/UI5/choice3/text").getComponent("cc.Label").string = "？？？？");
                    0 == t.publicVar2[21] && (cc.find("Canvas/UI5/choice4/text").getComponent("cc.Label").string = "？？？？");
                    0 == t.publicVar[9] && (cc.find("Canvas/UI5/choice5/text").getComponent("cc.Label").string = "？？？？");
                })();
            }
            function x() {
                a.autoEat();
                t.energy >= 10 && t.hunger >= 0 ? function () {
                    var e = t.publicVar[14] + t.publicVar[19];
                    if (t.randomBuff[6] == 1) {
                        e -= 15;
                    }
                    if (100 * Math.random() < e) {
                        t.publicVar[15] += 20;
                        n.playText("Canvas/notify", "训练成功！最大生命值+2%！你感觉气血通畅，神清气爽！", 60);
                    } else n.playText("Canvas/notify", "训练失败！你感觉头晕眼花，四肢无力！怕是要升天喽~", 60);
                    t.energy -= 10;
                    t.hunger -= 20;
                    t.publicVar[14] -= 5;
                    O();
                    q();
                }() : t.energy < 10 ? n.playText("Canvas/notify", "精力不足！", 60) : n.playText("Canvas/notify", "饥饿值不足！", 60);
            }
            function C() {
                a.autoEat();
                t.energy >= 10 && t.hunger >= 0 ? function () {
                    var e = t.publicVar[14] + t.publicVar[19];
                    if (t.randomBuff[6] == 1) {
                        e -= 15;
                    }
                    if (100 * Math.random() < e) {
                        t.publicVar[16] += 20;
                        n.playText("Canvas/notify", "训练成功！防御提高2%！你感觉气身体变得更加柔软了呢(ಡωಡ)！再也不怕挨揍啦！", 60);
                    } else n.playText("Canvas/notify", "训练失败！“哎呀！扭到腰了~(´థ౪థ)σ”。", 60);
                    t.energy -= 10;
                    t.hunger -= 20;
                    t.publicVar[14] -= 5;
                    O();
                    q();
                }() : t.energy < 0 ? n.playText("Canvas/notify", "精力不足！", 60) : n.playText("Canvas/notify", "饥饿值不足！", 60);
            }
            function E() {
                a.autoEat();
                t.energy >= 10 && t.hunger >= 0 ? function () {
                    var e = t.publicVar[14] + t.publicVar[19];
                    if (t.randomBuff[6] == 1) {
                        e -= 15;
                    }
                    if (100 * Math.random() < e) {
                        t.publicVar[17] += 10;
                        n.playText("Canvas/notify", "训练成功！攻击提高1%！“哇！~乌拉————！”。", 60);
                    } else n.playText("Canvas/notify", "训练失败！“哎呦~砸到了脚啦！”。", 60);
                    t.energy -= 10;
                    t.hunger -= 20;
                    t.publicVar[14] -= 5;
                    O();
                    q();
                }() : t.energy < 0 ? n.playText("Canvas/notify", "精力不足！", 60) : n.playText("Canvas/notify", "饥饿值不足！需20点", 60);
            }
            function I() {
                var e = 3 * t.publicVar[18] + 40;
                if (t.money >= e) {
                    t.publicVar[18] += 1;
                    t.money -= e;
                    n.playText("Canvas/notify", "升级成功！最大精力+10（累计增加" + 10 * t.publicVar[18] + "）", 60);
                } else n.playText("Canvas/notify", "没钱！", 60);
                G();
            }
            function V() {
                var e = 2 * t.publicVar[19] + 2;
                if (t.money >= e) {
                    t.publicVar[19] += 1;
                    t.money -= e;
                    n.playText("Canvas/notify", "升级成功！锻炼成功率永久增加1%（累计增加" + t.publicVar[19] + "%）", 60);
                } else n.playText("Canvas/notify", "没钱！", 60);
                G();
            }
            function N() {
                var e = 1 * t.publicVar[20] + 1;
                if (t.money >= e) {
                    t.publicVar[20] += 1;
                    t.money -= e;
                    n.playText("Canvas/notify", "升级成功！碧瑶对话成功率永久增加2%（累计增加" + 2 * t.publicVar[20] + "%）", 60);
                } else n.playText("Canvas/notify", "没钱！", 60);
                G();
            }
            //看书界面传送门
            function T() {
                a.autoEat();
                if (0 == t.publicVar2[23]) n.playText("Canvas/notify", "你还没有获得本书！", 60); else if (t.publicVar2[23] >= 101) n.playText("Canvas/notify", "本书已看完！", 60); else if (t.energy >= 10 && t.hunger >= 0) {
                    t.energy -= 10;
                    t.hunger -= 10;
                    t.publicVar2[23] += 1;
                    t.publicVar2[30] += 1;
                    P();
                    z();
                    n.playText("Canvas/notify", "“搜嘎~搜嘎~”。阅历+1！\n（阅历用于提高基础工资）", 60);
                } else n.playText("Canvas/notify", "状态不好，学不进去！（需10点精力，10点饥饿）", 60);
            }
            function k() {
                if (0 == t.publicVar2[24]) n.playText("Canvas/notify", "你还没有获得本书！", 60); else if (t.publicVar2[24] >= 101) n.playText("Canvas/notify", "本书已看完！", 60); else if (t.hunger >= 0) {
                    var e = ["【长期负性情绪会导致大脑功能或结构改变】", "【睡眠是一个极为复杂的大脑活动，任何一个环节出现问题，都会导致睡眠障碍】", "【抑郁症发病原因，1/3为自身性格，1/3为客观环境，1/3为遗传】", "【慢性失眠的本质是大脑功能或者结构出现紊乱】", "【户外活动可能能够缓解负性情绪，并帮助大脑功能的缓慢修复】", "【抑郁症终身患病率为8%（中国），女性患病几率为男性两倍】", "【失眠/早醒、食欲下降/体重减轻、头晕头痛/便秘/腰肩酸痛、思想迟缓/易疲劳，可能是抑郁的危险信号】", "【大量随机对照试验证实、认知行为疗法对多种心理疾病有效】", "【接受思想——无条件接受自身缺陷——可能是一种快速治疗的方法】", "【外貌、身高、性取向是父母给的，既不用自卑也无需炫耀】", "【无论你多么「垃圾」，总会存在适合自己的目标，只是极为隐蔽】", "【获得成就感（哪怕只是打扫卫生、起床走走），可能是行为疗法的核心】", "【旅游、美食、打游戏，不能治疗心理问题（即便是用来分散注意，也有限，并且可能导致新的问题）】", "【任何让你感到痛苦的事，都可以找到对应的不合理认知————认知疗法】"], i = e.length, c = parseInt(Math.random() * (i - 1.01)), o = 10 * parseInt(a.maxEnergy() / 20);
                    t.hunger -= 10;
                    t.publicVar2[24] += 10;
                    t.energy += o;
                    P();
                    z();
                    n.playText("Canvas/notify", "精力+" + o + "！" + e[c], 60);
                } else n.playText("Canvas/notify", "肚子饿了，不想看！（需10点饥饿）", 60);
            }
            function S() {
                if (0 == t.publicVar2[25]) n.playText("Canvas/notify", "你还没有获得本书！", 60); else if (t.publicVar2[25] >= 101) n.playText("Canvas/notify", "本书已看完！", 60); else if (t.energy >= 0) {
                    t.publicVar2[25] += 1;
                    t.energy -= 10;
                    if (3 == t.publicVar2[25]) {
                        t.publicVar[7] += 60;
                        n.playText("Canvas/notify", "研发出「辣激蘑菇汤」。碧瑶：“咕噜噜~咕噜噜~”。碧瑶好感+60！", 60);
                    } else if (7 == t.publicVar2[25]) {
                        t.role.hp += a.role.maxHp();
                        t.hunger += a.maxHunger();
                        n.playText("Canvas/notify", "研发出「急支糖浆拌饭」。“美滋滋~美滋滋~”。饥饿/生命爆满！", 60);
                    } else if (17 == t.publicVar2[25]) {
                        t.maxHunger += 50;
                        n.playText("Canvas/notify", "研发出「晓风牌健胃片」。“嘎吱~嘎吱~”。饥饿值上限提高50点！", 60);
                    } else if (33 == t.publicVar2[25]) {
                        t.maxEnergy += 50;
                        n.playText("Canvas/notify", "研发出「兴奋剂」。“哇~乌拉——！”。精力上限提高50点！", 60);
                    } else if (55 == t.publicVar2[25]) {
                        t.itemNum[11] += 8;
                        n.playText("Canvas/notify", "研发出「白色粉末」。获得【白色粉末】*8！", 60);
                    } else if (101 == t.publicVar2[25]) {
                        t.role.att += 75;
                        t.role.def += 50;
                        t.role.maxHp += 400;
                        n.playText("Canvas/notify", "研发出「生长激素」！攻击+75，防御+50，生命+400！（以上属性为永久性增加）", 60);
                    } else n.playText("Canvas/notify", "一脸懵逼，啥也没学会！", 60);
                    P();
                    z();
                } else n.playText("Canvas/notify", "精力不足（需10点）！", 60);
            }
            function H() {
                a.autoEat();
                if (0 == t.publicVar2[26]) n.playText("Canvas/notify", "你还没有获得本书！", 60); else if (t.publicVar2[26] >= 101) n.playText("Canvas/notify", "本书已看完！", 60); else if (t.energy >= 10 && t.hunger >= 0) {
                    var e = parseInt(5 * (2.99 * Math.random() + 1)), i = ["【每日限制红肉摄入（不高于100g）】", "【每日推荐主食摄入量250~400g】", "【每日推荐蔬果摄入量500~850g】", "【每日推荐鱼禽蛋奶摄入量150~250g】", "【每日食盐摄入不超过6g】", "【每日推荐6000步，或等量活动】", "【每周推荐150分钟以上运动】", "【每日饮水不低于1500ml（7杯）】", "【一瓶可乐215大卡（相当于一碗饭或两斤蔬菜的能量）】", "【在各年龄阶段都应避免超重】", "【肥胖，是隐藏在心血管疾病、癌症背后的真凶】", "【中国44%死于心脑血管疾病，22%死于癌症】", "【90%心脑血管疾病可以通过改变生活习惯预防】", "【70%癌症可以通过改变生活习惯预防】", "【对于超重的人，哪怕丢失少量体重，也可使健康获益】", "【在日常生活中额外做些活动，不管强度如何，都将获益】", "【选择全谷类食物而不是精加工食物】", "【学会阅读食品标签】", "【减肥必须运动+饮食，单独一项很难成功（容易反弹）】", "【100g薯片能量相当于两大碗饭，或者跑步一小时】", "【蔬果的健康获益机制主要在于、可以帮助我们减少能量摄入...】", "【健康人补充复合维生素片，并不能使健康获益】", "【没有证据证明补充抗氧化剂可以预防癌症】", "【终身维持健康体重极为重要】"], c = i.length, o = parseInt(Math.random() * (c - 1.01));
                    t.energy -= 10;
                    t.hunger -= 10;
                    t.publicVar2[26] += 2;
                    t.role.maxHp += e;
                    P();
                    z();
                    n.playText("Canvas/notify", "最大生命值提高" + e + "！" + i[o], 60);
                } else n.playText("Canvas/notify", "状态不够！（需10点精力，10点饥饿）", 60);
            }
            function R() {
                a.autoEat();
                if (0 == t.publicVar2[27]) n.playText("Canvas/notify", "你还没有获得本书！", 60); else if (t.publicVar2[27] >= 101) n.playText("Canvas/notify", "本书已看完！", 60); else if (t.energy >= 10 && t.hunger >= 0) {
                    var e = parseInt(2.99 * Math.random() + 1);
                    t.energy -= 10;
                    t.hunger -= 10;
                    t.publicVar2[27] += 2;
                    t.role.def += e;
                    P();
                    z();
                    n.playText("Canvas/notify", "防御提高" + e + "！", 60);
                } else n.playText("Canvas/notify", "状态不够！（需10点精力，10点饥饿）", 60);
            }
            function w() {
                a.autoEat();
                if (0 == t.publicVar2[28]) n.playText("Canvas/notify", "你还没有获得本书！", 60); else if (t.publicVar2[28] >= 101) n.playText("Canvas/notify", "本书已看完！", 60); else if (t.energy >= 10 && t.hunger >= 0) {
                    var e = parseInt(2.99 * Math.random() + 1);
                    t.energy -= 10;
                    t.hunger -= 10;
                    t.publicVar2[28] += 2;
                    t.role.att += e;
                    P();
                    z();
                    n.playText("Canvas/notify", "攻击提高" + e + "！", 60);
                } else n.playText("Canvas/notify", "状态不够！（需10点精力，10点饥饿）", 60);
            }
            function M() {
                if (0 == t.publicVar2[29]) n.playText("Canvas/notify", "你还没有获得本书！", 60); else if (t.publicVar2[29] >= 101) n.playText("Canvas/notify", "本书已看完！", 60); else if (t.publicVar3[15] >= 3) n.playText("Canvas/notify", "适当怡情，沉迷伤身呐~", 60); else {
                    t.publicVar2[29] += 5;
                    t.publicVar3[4] += 80;
                    t.publicVar3[15] += 1;
                    t.role.hp = a.role.maxHp();
                    a.save();
                    z();
                    n.playText("Canvas/notify", "脸红耳燥，血脉膨胀。生命值全恢复！攻击+80！（睡觉后加攻状态消失）", 60);
                }
            }
            function L() {
                t.publicVar[13] = 0;
                a.save();
                cc.director.loadScene("main", function () {
                    e("scr_effect").playText("Canvas/Text/txt_notify", "你已到达城中村，可以开始探索啦~", 60);
                });
            }
            function B() {
                if (t.energy >= 10) {
                    t.publicVar[13] = 1;
                    t.energy -= 10;
                    a.save();
                    cc.director.loadScene("main", function () {
                        e("scr_effect").playText("Canvas/Text/txt_notify", "你已到达郊外，可以开始探索啦~", 60);
                    });
                } else n.playText("Canvas/notify", "精力不足！", 60);
            }
            function U() {
                if (t.energy >= 20) {
                    t.publicVar[13] = 2;
                    t.energy -= 20;
                    a.save();
                    cc.director.loadScene("main", function () {
                        e("scr_effect").playText("Canvas/Text/txt_notify", "你已到达市中心，可以开始探索啦~", 60);
                    });
                } else n.playText("Canvas/notify", "精力不足！", 60);
            }
            function F() {
                if (t.energy >= 30) {
                    t.publicVar[13] = 3;
                    t.energy -= 30;
                    a.save();
                    cc.director.loadScene("main", function () {
                        e("scr_effect").playText("Canvas/Text/txt_notify", "你已到达山洞，可以开始探索啦~", 60);
                    });
                } else n.playText("Canvas/notify", "精力不足！", 60);
            }
            function A() {
                if (t.energy >= 10) if (t.chioce2[7] <= 5) {
                    var e = t.chioce2[7];
                    t.energy -= 10;
                    t.enemyId = [501, 502, 503, 504, 505, 506][e];
                    a.save();
                    cc.director.loadScene("main");
                } else {
                    t.plotId = 99;
                    a.save();
                    cc.director.loadScene("plot");
                } else n.playText("Canvas/notify", "精力不足！", 60);
            }
            function D() {
                if (0 == t.ifFollow[0]) {
                    t.plotId = 99;
                    a.save();
                    cc.director.loadScene("plot");
                } else 1 == t.ifFollow[0] && n.playText("Canvas/notify", "晓月已成为伙伴！", 60);
            }
            function P() {
                cc.find("Canvas/energy").getComponent("cc.Label").string = "精力 " + t.energy;
            }
            function O() {
                t.publicVar2[17] > 0 ? l.getChildByName("text").getComponent("cc.Label").string = "找碧瑶唠嗑（成功率" + (t.publicVar2[20] + 2 * t.publicVar[20]) + "%）" : l.getChildByName("text").getComponent("cc.Label").string = "？？？？";
                if (t.randomBuff[6] == 1) {
                    p.getChildByName("text").getComponent("cc.Label").string = "锻炼（成功率" + (t.publicVar[14] + t.publicVar[19] - 15) + "%）";
                } else {
                    p.getChildByName("text").getComponent("cc.Label").string = "锻炼（成功率" + (t.publicVar[14] + t.publicVar[19]) + "%）";
                }
                cc.find("Canvas/energy").getComponent("cc.Label").string = "精力 " + t.energy;
            }
            function q() {
                cc.find("Canvas/UI2/hunger").getComponent("cc.Label").string = "饥饿 " + t.hunger;
                if (t.randomBuff[6] == 1) {
                    cc.find("Canvas/UI2/rate").getComponent("cc.Label").string = "成功率 " + (t.publicVar[14] + t.publicVar[19]) + "%（" + t.publicVar[14] + "%+" + t.publicVar[19] + "- 15 %）";
                } else {
                    cc.find("Canvas/UI2/rate").getComponent("cc.Label").string = "成功率 " + (t.publicVar[14] + t.publicVar[19]) + "%（" + t.publicVar[14] + "%+" + t.publicVar[19] + "%）";
                }
                cc.find("Canvas/UI2/choice1/text").getComponent("cc.Label").string = "修仙（生命上限+" + (t.publicVar[15] / 10).toFixed(0) + "%）";
                cc.find("Canvas/UI2/choice2/text").getComponent("cc.Label").string = "第八套广播体操（防御+" + (t.publicVar[16] / 10).toFixed(0) + "%）";
                cc.find("Canvas/UI2/choice3/text").getComponent("cc.Label").string = "举轮胎（攻击+" + (t.publicVar[17] / 10).toFixed(0) + "%）";
            }
            function G() {
                cc.find("Canvas/UI3/money").getComponent("cc.Label").string = "金钱 " + (t.money / 10).toFixed(1);
                cc.find("Canvas/UI3/choice1/text").getComponent("cc.Label").string = "居住区（LV" + t.publicVar[18] + " 提升需" + ((3 * t.publicVar[18] + 40) / 10).toFixed(1) + "元）";
                cc.find("Canvas/UI3/choice2/text").getComponent("cc.Label").string = "运动区（LV" + t.publicVar[19] + " 提升需" + ((2 * t.publicVar[19] + 2) / 10).toFixed(1) + "元）";
                cc.find("Canvas/UI3/choice3/text").getComponent("cc.Label").string = "流浪猫篷（LV" + t.publicVar[20] + " 提升需" + ((1 * t.publicVar[20] + 1) / 10).toFixed(1) + "元）";
            }
            function z() {
                var e = r.getChildByName("choice7").getChildByName("text").getComponent("cc.Label"), n = r.getChildByName("choice6").getChildByName("text").getComponent("cc.Label"), a = r.getChildByName("choice5").getChildByName("text").getComponent("cc.Label"), i = r.getChildByName("choice4").getChildByName("text").getComponent("cc.Label"), c = r.getChildByName("choice3").getChildByName("text").getComponent("cc.Label"), o = r.getChildByName("choice2").getChildByName("text").getComponent("cc.Label"), s = r.getChildByName("choice1").getChildByName("text").getComponent("cc.Label");
                0 == t.publicVar2[23] ? e.string = "？？？？" : e.string = "《搬砖，从入门到放弃》（已看" + Math.max(t.publicVar2[23] - 1) + "%，阅历" + t.publicVar2[30] + "）";
                0 == t.publicVar2[24] ? n.string = "？？？？" : n.string = "《伯恩斯情绪疗法》（已看" + Math.max(t.publicVar2[24] - 1) + "%）";
                0 == t.publicVar2[25] ? a.string = "？？？？" : a.string = "《儿童手工DIY》（已看" + Math.max(t.publicVar2[25] - 1) + "%）";
                0 == t.publicVar2[26] ? i.string = "？？？？" : i.string = "《中国居民膳食指南1997版》（已看" + Math.max(t.publicVar2[26] - 1) + "%）";
                0 == t.publicVar2[27] ? c.string = "？？？？" : c.string = "《坎贝尔骨科手术学》（已看" + Math.max(t.publicVar2[27] - 1) + "%）";
                0 == t.publicVar2[28] ? o.string = "？？？？" : o.string = "《如来神掌》（已看" + Math.max(t.publicVar2[28] - 1) + "%）";
                0 == t.publicVar2[29] ? s.string = "？？？？" : s.string = "《少妇白洁》（已看" + Math.max(t.publicVar2[29] - 1) + "%）";
                cc.find("Canvas/UI4/hunger").getComponent("cc.Label").string = "饥饿 " + t.hunger;
            }
            function J() {
                n.playText("Canvas/notify", "暂未满足开启条件！加油吧~", 60);
            }
            function Z() {
                i.runAction(cc.scaleTo(.3, 0));
            }
            function K() {
                Q();
                i.runAction(cc.scaleTo(.3, 1));
            }
            function Q() {
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