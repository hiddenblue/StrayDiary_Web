moduleDefinitions = {
    scr_BGM: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "8d8c2z+e3xAIqUkxCqE4NZW", "scr_BGM");
        cc.Class({
            extends:
                cc.Component, properties:
            {
                BGM1: { url: cc.AudioClip, default: null },
                BGM2: { url: cc.AudioClip, default: null },
                BGM3: { url: cc.AudioClip, default: null },
                BGM4: { url: cc.AudioClip, default: null }
            },
            onLoad: function () { }
        });
        cc._RF.pop();
    }],
    /*scr_QQpay: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "fc884/pvDpG6bLBf547DI5C", "scr_QQpay");
        cc.Class({
            extends: cc.Component,
            properties: {},
            callBack: function () {
                cc.director.loadScene("support3");
            },
            onLoad: function () {
                this.node.on("touchstart", this.callBack, this);
            }
        });
        cc._RF.pop();
    }],*/
    scr_achieve: scr_achieve,
    scr_backMainUI: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "3e3ebJJTbNAf4EOh0d4HMO1", "scr_backMainUI");
        cc.Class({
            extends: cc.Component,
            properties: {},
            callBack: function () {
                e("scr_public").save();
                cc.director.loadScene("main");
            },
            onLoad: function () {
                this.node.on("touchstart", this.callBack, this);
            }
        });
        cc._RF.pop();
    }, {
        scr_public: "scr_public"
    }],
    scr_backStartUI: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "d5fa6dHVPtCmIx1Z7ZMSeDh", "scr_backStartUI");
        cc.Class({
            extends: cc.Component,
            properties: {},
            callBack: function () {
                cc.director.loadScene("start");
            },
            onLoad: function () {
                this.node.on("touchstart", this.callBack, this);
            }
        });
        cc._RF.pop();
    }, {}],
    scr_backSupport: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "210d2Bb6a1Dho5//c333ltz", "scr_backSupport");
        cc.Class({
            extends: cc.Component,
            properties: {},
            callBack: function () {
                cc.director.loadScene("support");
            },
            onLoad: function () {
                this.node.on("touchstart", this.callBack, this);
            }
        });
        cc._RF.pop();
    }, {}],
    scr_continueButton: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "4ffa5hmUdNEyJa2jWF2c0nr", "scr_continueButton");
        cc.Class({
            extends: cc.Component,
            properties: {},
            callBack: function () {
                JSON.parse(cc.sys.localStorage.getItem("userData")) && cc.director.loadScene("main");
            },
            onLoad: function () {
                this.node.on("touchstart", this.callBack, this);
            }
        });
        cc._RF.pop();
    }, {}],
    scr_data2: scr_data2,
    scr_dataCopy: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "44ab5HIdTVLaYk0L5S0uxkB", "scr_dataCopy");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                var e = {};
                "undefined" == typeof JSON.parse(cc.sys.localStorage.getItem("dataCopy")) && (e = JSON.parse(cc.sys.localStorage.getItem("userData")));
                t.exports = e;
            }
        });
        cc._RF.pop();
    }, {}],
    scr_autodataCopy: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "FUNautodataCopy", "scr_autodataCopy");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                var e = {};
                "undefined" == typeof JSON.parse(cc.sys.localStorage.getItem("autogamesave")) && (e = JSON.parse(cc.sys.localStorage.getItem("userData")));
                t.exports = e;
            }
        });
        cc._RF.pop();
    }, {}],
    scr_data: scr_data,
    scr_diaryDetermine: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "12297Yy5bdDErxPgTf9kaM9", "scr_diaryDetermine");
        cc.Class({
            extends: cc.Component,
            properties: {},
            callBack: function () {
                cc.director.loadScene("rest");
            },
            onLoad: function () {
                this.node.on("touchstart", this.callBack, this);
            }
        });
        cc._RF.pop();
    }, {}],
    scr_diary: scr_diary,
    scr_eatButton: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "c5f14lLVmRA6r8LzGX0k1Ik", "scr_eatButton");
        cc.Class({
            extends: cc.Component,
            properties: {},
            callBack: function () {
                cc.director.loadScene("eat");
            },
            onLoad: function () {
                this.node.on("touchstart", this.callBack, this);
            }
        });
        cc._RF.pop();
    }, {}],
    scr_eatUI: scr_eatUI,
    scr_effect: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "25c8dKmEHlHoYjQ6qvBKaef", "scr_effect");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                var e = this, n = {
                    playText: function (e, t, n) {//文字逐渐显示函数，万恶之源
                        var a = 0;
                        cc.game.startPlay && window.clearTimeout(cc.game.startPlay);
                        (function i() {
                            if (null != cc.find(e)) if (a <= t.length) {
                                var c = t.slice(0, a++);
                                cc.find(e).getComponent("cc.Label").string = c;
                                cc.game.startPlay = window.setTimeout(i, 10);//本来是n的，但是大部分是100，我直接改成10
                            } else cc.game.startPlay && window.clearTimeout(cc.game.startPlay);
                        })();
                    },
                    textZoon: function (e) {
                        var t = cc.sequence(cc.scaleTo(.2, 1.3), cc.scaleTo(.2, 1));
                        cc.find(e).runAction(t);
                    },
                    blink2: function (e) {
                        var t = cc.sequence(cc.tintBy(.1, 0, -200, -200), cc.tintBy(.1, 0, 200, 200));
                        cc.find(e).runAction(t);
                    },
                    blink: function (t) {
                        var n = 0;
                        e.schedule(function () {
                            var e = n % 2;
                            cc.find(t).color = new cc.Color(255, 255 - 200 * e, 255 - 200 * e);
                            n++;
                        }, .06, 4);
                    },
                    textZoon2: function (e) {
                        cc.find(e).setScale(0, 0);
                        var t = cc.sequence(cc.scaleTo(.2, 1.3), cc.scaleTo(.1, 1));
                        cc.find(e).runAction(t);
                    },
                    attackEfect1: function () {
                        var e = cc.find("Canvas/Text").children, t = cc.find("Canvas/Fight").children;
                        for (var n in e) {
                            var a = 500 * Math.random() - 300, i = 1e3 * Math.random() - 500;
                            e[n].x = a;
                            e[n].y = i;
                        }
                        for (var c in t) {
                            var o = 500 * Math.random() - 300, r = 1e3 * Math.random() - 500;
                            t[c].x = o;
                            t[c].y = r;
                        }
                    }
                };
                t.exports = n;
            }
        });
        cc._RF.pop();
    }, {}],
    scr_end: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "0fdab+YcARFVIOBpUAMxsNQ", "scr_end");
        cc.Class({
            extends: cc.Component,
            properties: {},
            creatText: function (e, t, n) {
                var a = new cc.Node(t);
                a.addComponent(cc.Label);
                a.parent = e;
                a.setPosition(0, 0);
                a.opacity = 0;
                a.runAction(cc.fadeIn(.3));
                a.color = new cc.Color(255, 255, 255);
                a.getComponent(cc.Label).overflow = 3;
                a.getComponent(cc.Label).horizontalAlign = 0;
                a.setContentSize(600, 300);
                a.getComponent(cc.Label).string = n;
                a.getComponent(cc.Label).lineHeight = 50;
                a.getComponent(cc.Label).fontSize = 36;
            },
            onLoad: function () {
                var t = ["正式开始全职制作游戏已有大半年，我并不担心自己的生存问题，但是对于能否长期做下去却感到有些焦虑。", "国产独立游戏的发展其实上是取决于玩家（或者说市场），而不是开发商或者平台（有市场才会有平台，有平台才会有开发商...）。虽然可能短期内不会有太大问题，但是能否长期、甚至终身坚持，我不是很确定，因为有太多难以控制的因素掺杂。不过，至少目前我会坚持下去——我的目标是打造文字游戏精品品牌。", "如果你真的喜欢独立游戏，恳求您推荐给周围的人————我真的需要你的帮助。", "我是晓风。（2017.10.1）"], n = (t.length,
                    this), a = e("scr_data2"), i = e("scr_data"), c = 0,
                    o = cc.find("Canvas/Show"), r = cc.find("Canvas/choice"),
                    s = r.getChildByName("determine1"), l = r.getChildByName("determine2"),
                    u = e("scr_public");
                (function () {
                    var e = i.friend_xiaoyue.favorability + i.publicVar[7];
                    if (0 == a.gameData[3]) {
                        a.gameData[1] += 1;
                        a.gameData[3] = 1;
                    }
                    e >= 799 && (a.gameData[5] = 1);
                    u.save2();
                })();
                e("scr_data2").gameData[4] = 0;
                e("scr_public").save2();
                function p() {
                    n.creatText(o, "plot" + c, t[c]);
                    c++;
                }
                (function () {
                    window.setInterval(function () {
                        var t = {
                            2000: function () {
                                p();
                            },
                            5000: function () {
                                p();
                            },
                            8000: function () {
                                p();
                            },
                            11000: function () {
                                p();
                            },
                            15000: function () {
                                (function () {
                                    r.active = !0;
                                    r.runAction(cc.fadeIn(.2));
                                    s.on("touchstart", f, this);
                                    l.on("touchstart", d, this);
                                })();
                            }
                        };
                        "undefined" != typeof t[e += 1e3] && t[e]();
                    }, 1e3);
                    var e = 0;
                })();
                function f() {
                    u.save2();
                    cc.director.loadScene("start");
                }
                function d() {
                    u.save2();
                    JSON.parse(cc.sys.localStorage.getItem("userData")) && cc.sys.localStorage.removeItem("userData");
                    cc.director.loadScene("start");
                }
            }
        });
        cc._RF.pop();
    }, {
        scr_data: "scr_data",
        scr_data2: "scr_data2",
        scr_public: "scr_public"
    }],
    scr_enemy: scr_enemy,
    scr_eventData: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "2944e+wEixMS7sVFHLOkrHX", "scr_eventData");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () { }
        });
        cc._RF.pop();
    }, {}],
    scr_eventDetermine: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "9e235Y/Ke9BkbMuLhAsJW6/", "scr_eventDetermine");
        cc.Class({
            extends: cc.Component,
            properties: {},
            callBack: function () {
                cc.director.loadScene("main");
            },
            onLoad: function () {
                this.node.on("touchstart", this.callBack, this);
            }
        });
        cc._RF.pop();
    }, {}],
    scr_event: scr_event,
    //tag 探索传送门
    scr_explore: scr_explore,
    scr_fightState: scr_fightState,
    scr_fight: scr_fight,
    //tag 前进按钮传送门
    scr_forwardButton: scr_forwardButton,
    scr_friendSkillJudge1: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "fc5f8Ub5xdFcbVtSTj8STEm", "scr_friendSkillJudge1");
        cc.Class({
            extends: cc.Component,
            properties: {},
            skillJugge: function () {
                var t = e("scr_data"), n = e("scr_public"), a = t.friendSkill1, i = {
                    1:
                        function () {
                            0 == a[1] && t.friend_xiaoyue.favorability >= 1 && (a[1] = 1);
                        },
                    2:
                        function () {
                            0 == a[2] && t.friend_xiaoyue.favorability >= 500 && (a[2] = 1);
                        },
                    3:
                        function () {
                            0 == a[3] && t.friend_xiaoyue.favorability >= 800 && (a[3] = 1);
                        },
                    4:
                        function () {
                            0 == a[4] && t.friend_xiaoyue.favorability >= 1000 && (a[4] = 1);
                        }
                };
                for (var c in i) i[c]();
                n.save();
            },
            onLoad: function () {
                this.skillJugge();
            },
        });
        cc._RF.pop();
    }, {
        scr_data: "scr_data",
        scr_public: "scr_public"
    }],
    scr_friendSkillUI1: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "0992cbWpqJNPIJFvroUyU98", "scr_friendSkillUI1");
        cc.Class({
            extends: cc.Component,
            properties: {},
            skillDes: function () {// 晓月技能文本
                var t = e("scr_data"),
                    n = ["【陪伴】给主角增加" + parseInt(t.friend_xiaoyue.favorability / 4 + 10) + "点攻击，增加幅度与好感有关。天生自带，无需激活！",
                        "【小伙伴】精力上限+20，好感达到1激活！",
                    "【声援】每回合，" + Math.min(parseInt(t.friend_xiaoyue.favorability / 4), 100) + "%几率给主角恢复10%生命，并增加主角3%攻击（可无限叠加），触发概率与好感相关，好感达到500激活！",
                        "【复刻】胜利后，100%几率再获得一次奖励，全怪物有效，好感达到800激活！",
                        "【元气少女】睡觉时，健康恢复效果翻倍，生命恢复效果翻倍，精力额外再恢复20！好感达到1000激活！"];
                return n;
            },
            showDes: function () {
                for (var t = e("scr_data"), n = e("scr_public"), a = t.friendSkill1, i = this.skillDes(), c = i.length, o = cc.find("Canvas/Show"), r = 0; r <= c - 1; r++) {
                    n.showText2(o, "skill" + r, i[r], 60);
                    a[r] > 0 && (o.getChildByName("skill" + r).color = new cc.Color(0, 255, 0));
                }
            },
            onLoad: function () {
                this.showDes();
                cc.find("Canvas/back").on("touchstart", function () {
                    cc.director.loadScene("friend1");
                }, this);
            }
        });
        cc._RF.pop();
    }, {
        scr_data: "scr_data",
        scr_public: "scr_public"
    }],
    scr_friendSkillUI2: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "d0387ZXPPtJs4Lfy6jPllmL", "scr_friendSkillUI2");
        cc.Class({
            extends: cc.Component,
            properties: {},
            skillDes: function () {
                var t = e("scr_data"),
                    n = ["【并肩】碧瑶与主角并肩作战，攻击" + parseInt(t.publicVar[7] + 1600) + "",
                        "【敏捷】碧瑶每次攻击暴击提高5%！需100好感，碧瑶的暴击效果为250%",
                    "【捐款】每天" + Math.max(parseInt(t.publicVar[7] / 20 + 25), 25) + "%几率获得碧瑶总存款的2%（碧瑶存款为" + (t.publicVar2[18] / 10).toFixed(1) + "元，你能到手的零钱为" + (.02 * t.publicVar2[18] / 10).toFixed(1) + "元）。需200好感",
                        "【刺杀】碧瑶暴击后，附加给目标一层流血效果，降低目标25%防御。需300好感",
                        "【保护】碧瑶暴击后，伤害的50%用于治疗主角。需400好感",
                        "【冷静】碧瑶基础暴击率+75%。基础25%。需500好感",
                        "【双飞】碧瑶暴击后，主角下次攻击必定触发暴击！需600好感",
                    "【监督】每天" + Math.max(parseInt(t.publicVar[7] / 20 + 20), 20) + "%几率降低主角1%烟瘾，触发几率随好感提升。需700好感",
                        "【终结】碧瑶每间隔1次攻击，触发一次「终结」技400%伤害。需800好感",
                        "【守护】当你战斗中受到致命伤后，碧瑶会帮你挡下致命一击，然后脱离战场，随后你需要重新招募碧瑶。需聊天100次"];
                return n;
            },
            showDes: function () {
                for (var t = e("scr_data"), n = e("scr_public"), a = t.friendSkill, i = this.skillDes(), c = i.length, o = cc.find("Canvas/Show"), r = 0; r <= c - 1; r++) {
                    n.showText2(o, "skill" + r, i[r], 50);
                    a[r] > 0 && (o.getChildByName("skill" + r).color = new cc.Color(0, 255, 0));
                }
            },
            onLoad: function () {
                this.showDes();
                cc.find("Canvas/goods").getComponent("cc.Label").string = "当前好感：" + e("scr_data").publicVar[7];
                cc.find("Canvas/back").on("touchstart", function () {
                    cc.director.loadScene("main");
                }, this);
            }
        });
        cc._RF.pop();
    }, {
        scr_data: "scr_data",
        scr_public: "scr_public"
    }],
    scr_friendUI1: scr_friendUI1,
    //大部分UI界面传送门
    scr_home: scr_home,
    scr_initData: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "c335afOsddDPoVdzNq+7r/A", "scr_initData");
        cc.Class({
            extends: cc.Component,
            properties: {},
            //类似初始但不知道什么用传送门
            onLoad: function () {
                var t = e("scr_data"), n = e("scr_data2");
                "undefined" == typeof t.itemNum2[18] && (t.itemNum2[18] = 0);
                "undefined" == typeof t.itemNum2[19] && (t.itemNum2[19] = 0);
                "undefined" == typeof t.itemNum2[20] && (t.itemNum2[20] = 0);
                "undefined" == typeof t.itemNum2[21] && (t.itemNum2[21] = 0);
                "undefined" == typeof t.itemNum2[22] && (t.itemNum2[22] = 0);
                "undefined" == typeof t.itemNum2[23] && (t.itemNum2[23] = 0);
                "undefined" == typeof t.itemNum2[24] && (t.itemNum2[24] = 0);
                "undefined" == typeof t.itemNum2[25] && (t.itemNum2[25] = 0);
                "undefined" == typeof t.itemNum2[26] && (t.itemNum2[26] = 0);
                "undefined" == typeof t.itemNum2[27] && (t.itemNum2[27] = 0);
                "undefined" == typeof t.ifFollow && (t.ifFollow = [0, 0]);
                "undefined" == typeof t.talkTimes && (t.talkTimes = [0, 0]);
                "undefined" == typeof t.friendSkill1 && (t.friendSkill1 = [1, 0, 0, 0, 0]);
                "undefined" == typeof t.friendSkill2 && (t.friendSkill2 = [1, 0, 0, 0, 0]);
                "undefined" == typeof t.friendSkill && (t.friendSkill = [1, 0, 0, 0, 0, 0, 0, 0]);
                "undefined" == typeof t.choice[6] && (t.choice[6] = 0);
                "undefined" == typeof t.choice[7] && (t.choice[7] = 0);
                "undefined" == typeof t.choice[8] && (t.choice[8] = 0);
                "undefined" == typeof t.chioce2 && (t.chioce2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                "undefined" == typeof t.plotId && (t.plotId = 0);
                "undefined" == typeof t.escapeExp && (t.escapeExp = 0);
                "undefined" == typeof t.randomEvent[11] && (t.randomEvent[11] = 0);
                "undefined" == typeof t.randomEvent[12] && (t.randomEvent[12] = 0);
                "undefined" == typeof t.randomEvent[13] && (t.randomEvent[13] = 0);
                "undefined" == typeof t.publicVar && (t.publicVar = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                "undefined" == typeof t.publicVar2 && (t.publicVar2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                "undefined" == typeof t.publicVar3 && (t.publicVar3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                "undefined" == typeof t.specialEnemy[300001] && (t.specialEnemy[300001] = {
                    lv: 20,
                    hp: 710,
                    maxHp: 710,
                    att: 0,
                    def: 20
                });
                "undefined" == typeof t.specialEnemy[300002] && (t.specialEnemy[300002] = {
                    lv: 45,
                    hp: 2470,
                    maxHp: 2470,
                    att: 0,
                    def: 40
                });
                "undefined" == typeof t.specialEnemy[300003] && (t.specialEnemy[300003] = {
                    lv: 35,
                    hp: 3270,
                    maxHp: 3270,
                    att: 0,
                    def: 0
                });
                "undefined" == typeof t.specialEnemy[400001] && (t.specialEnemy[400001] = {
                    lv: 100,
                    hp: 3345,
                    maxHp: 3345,
                    att: 0,
                    def: 234
                });
                "undefined" == typeof t.specialEnemy[400002] && (t.specialEnemy[400002] = {
                    lv: 199,
                    hp: 19999,
                    maxHp: 19999,
                    att: 0,
                    def: 20
                });
                "undefined" == typeof t.specialEnemy[400003] && (t.specialEnemy[400003] = {
                    lv: 60,
                    hp: 2050,
                    maxHp: 2050,
                    att: 310,
                    def: 121
                });
                "undefined" == typeof t.specialEnemy[900001] && (t.specialEnemy[900001] = {
                    lv: 15,
                    hp: 575,
                    maxHp: 575,
                    att: 59,
                    def: 16
                });
                "undefined" == typeof t.specialEnemy[900002] && (t.specialEnemy[900002] = {
                    lv: 20,
                    hp: 998,
                    maxHp: 998,
                    att: 50,
                    def: 36
                });
                "undefined" == typeof t.specialEnemy[900003] && (t.specialEnemy[900003] = {
                    lv: 500,
                    hp: 16500,
                    maxHp: 16500,
                    att: 1500,
                    def: 1150
                });
                "undefined" == typeof t.specialEnemy[900004] && (t.specialEnemy[900004] = {
                    lv: 1,
                    hp: 999999,
                    maxHp: 999999,
                    att: 999,
                    def: 0
                });
                "undefined" == typeof t.specialEnemy[900005] && (t.specialEnemy[900005] = {
                    lv: 500,
                    hp: 599999,
                    maxHp: 599999,
                    att: 0,
                    def: 0
                });
                "undefined" == typeof t.specialEnemy[900006] && (t.specialEnemy[900006] = {
                    lv: 200,
                    hp: 299999,
                    maxHp: 299999,
                    att: 0,
                    def: 0
                });
                "undefined" == typeof t.specialEnemy[900007] && (t.specialEnemy[900007] = {
                    lv: 40,
                    hp: 3900,
                    maxHp: 3900,
                    att: 90,
                    def: 50
                });
                "undefined" == typeof n.gameData && (n.gameData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                "undefined" == typeof n.gameData2 && (n.gameData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            }
        });
        cc._RF.pop();
    }, {
        scr_data: "scr_data",
        scr_data2: "scr_data2"
    }],
    scr_initGame: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "6ef62YkKgVEPbATA/Rgpij9", "scr_initGame");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                var t = e("scr_data"), n = e("scr_data2"), a = e("scr_public");
                if (0 != n.initMoney) {
                    t.money += n.initMoney;
                    n.initMoney = 0;
                }
                if (n.gameData[2] < 9999) {
                    var i = new Date(), c = parseInt(i.getTime() / 36e5);
                    n.gameData[2] = c;
                }
                //func 游戏初始化加属性
                n.gameData[3] = 0;
                t.publicVar[6] = 2;
                a.save();
                a.save2();
            }
        });
        cc._RF.pop();
    }, {
        scr_data: "scr_data",
        scr_data2: "scr_data2",
        scr_public: "scr_public"
    }],
    scr_liveModeMain: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "b3dbdX/PEZG2b06UXyCtd3Z", "scr_liveModeMain");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () { }
        });
        cc._RF.pop();
    }, {}],
    scr_mainUIEvent: scr_mainUIEvent,
    scr_mainUIinit: scr_mainUIinit,//游戏开始界面的ui设置
    scr_makeButton: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "fbf64sNmm5MYp/UrY57mFiI", "scr_makeButton");
        cc.Class({
            extends: cc.Component,
            properties: {},
            callBack: function () {
                cc.director.loadScene("make");
            },
            onLoad: function () {
                this.node.on("touchstart", this.callBack, this);
            }
        });
        cc._RF.pop();
    }, {}],
    scr_makeUI: [function (e, t, n) {
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
                            if (n.itemNum[3] >= 1 && (n.itemNum[1] >= 1 || 0 != n.itemNum2[30])) {
                                var xq = Math.max(1 - n.itemNum2[30], 0)
                                n.itemNum[3] -= 1;
                                n.itemNum[1] -= xq;
                                n.itemNum2[0] += 1;
                                var consume = Math.max(2 - 2 * n.itemNum2[30], 0);
                                n.energy -= consume;
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
                            if (n.itemNum[5] >= 2) {
                                n.itemNum[5] -= 2;
                                n.itemNum2[1] += 1;
                                var consume = 2;
                                n.energy -= consume;
                                i.save();
                                a.playText("Canvas/notify", "获得【伤药】*1" + "消耗" + consume + "精力", 100);
                                t.delayCreatItemUI();
                            } else a.playText("Canvas/notify", "材料不足！", 100);
                        }
                    },
                    2: {
                        itemName: "帐篷LV" + this.data.itemNum2[2],
                        needDes: "※需【木材】" + this.data.itemNum[1] + "/" + (1 + this.data.itemNum2[2]) + "【亚麻】" + this.data.itemNum[4] + "/" + (4 + 2 * this.data.itemNum2[2]),
                        des: "※精力上限增加" + 10 * this.data.itemNum2[2] + "点",
                        ifEnough: function (e) {
                            t.data.itemNum[1] >= 1 + t.data.itemNum2[2] && t.data.itemNum[4] >= 4 + 2 * t.data.itemNum2[2] && (cc.find("Canvas/Page/view/content/page_1/" + e + "/button/name").color = new cc.color(0, 255, 0));
                        },
                        button: function () {
                            var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 1 + n.itemNum2[2], o = n.itemNum[1], r = 4 + 2 * n.itemNum2[2], s = n.itemNum[4];
                            if (o >= c && s >= r) {
                                n.itemNum[1] -= c;
                                n.itemNum[4] -= r;
                                n.itemNum2[2] += 1;
                                var consume = Math.ceil(n.itemNum2[2] / 5) * 5;;
                                n.energy -= consume;
                                i.save();
                                a.playText("Canvas/notify", "精力上限+10！" + "消耗" + consume + "精力", 100);
                                t.delayCreatItemUI();
                            } else a.playText("Canvas/notify", "材料不足！", 100);
                        }
                    },
                    3: {
                        itemName: "木棍LV" + this.data.itemNum2[3],
                        needDes: "※需【木材】" + this.data.itemNum[1] + "/" + (4 + 2 * this.data.itemNum2[3]),
                        des: "※增加" + 10 * this.data.itemNum2[3] + "点攻击。【暴击】" + 2 * this.data.itemNum2[3] + "%几率触发暴击",
                        ifEnough: function (e) {
                            t.data.itemNum[1] >= 4 + 2 * t.data.itemNum2[3] && (cc.find("Canvas/Page/view/content/page_1/" + e + "/button/name").color = new cc.color(0, 255, 0));
                        },
                        button: function () {
                            var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 4 + 2 * n.itemNum2[3];
                            if (n.itemNum2[3] >= 50) {
                                a.playText("Canvas/notify", "木棍已经满级了！", 100);
                                return;
                            }
                            if (n.itemNum[1] >= c) {
                                n.itemNum[1] -= c;
                                n.itemNum2[3] += 1;
                                var consume = Math.ceil(n.itemNum2[3] / 5) * 5;;
                                n.energy -= consume;
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
                            if (n.itemNum[4] >= c) {
                                n.itemNum[4] -= c;
                                n.itemNum2[4] += 1;
                                var consume = Math.ceil(n.itemNum2[4] / 5) * 5;;
                                n.energy -= consume;
                                i.save();
                                a.playText("Canvas/notify", "生命上限+50！" + "消耗" + consume + "精力", 100);
                                t.delayCreatItemUI();
                            } else a.playText("Canvas/notify", "材料不足！", 100);
                        }
                    },
                    5: {
                        itemName: "驱蚊工具LV" + this.data.itemNum2[6],
                        needDes: "※需【艾草】" + this.data.itemNum[5] + "/" + (8 + 2 * this.data.itemNum2[6]),
                        des: "※睡觉时恢复" + 30 * this.data.itemNum2[6] + "点生命值",
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
                    6:
                    {
                        itemName: "陷阱LV" + this.data.itemNum2[5],
                        needDes: "※需【木材】" + this.data.itemNum[1] + "/" + (4 + 2 * this.data.itemNum2[5]),
                        des: "※每天第一次进入战斗时可以获得增益，专坑不看路的小妹妹XD",
                        ifEnough: function (t) {
                            var n = e("scr_data");
                            n.itemNum[1] >= 4 + 2 * n.itemNum2[5] && (cc.find("Canvas/Page/view/content/page_2/" + t + "/button/name").color = new cc.color(0, 255, 0));
                        },
                        button: function () {
                            var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 4 + 2 * n.itemNum2[5];
                            if (n.itemNum2[5] >= 50) {
                                a.playText("Canvas/notify", "陷阱已经满级了！", 100);
                                return;
                            }
                            if (n.itemNum[1] >= c) {
                                n.itemNum[1] -= c;
                                n.itemNum2[5] += 1;
                                var consume = Math.ceil(n.itemNum2[5] / 5) * 5;;
                                n.energy -= consume;
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
                            if (c >= 4) {
                                n.itemNum[6] -= 4;
                                n.itemNum2[7] += 1;
                                var consume = 2;
                                n.energy -= consume;
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
                            } if (n.cigaretteuptimes >= 0) {
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
                            if (n.itemNum[10] >= 5) {
                                n.itemNum[10] -= 5;
                                n.itemNum2[12] += 1;
                                var consume = 2;
                                n.energy -= consume;
                                i.save();
                                a.playText("Canvas/notify", "获得【啤酒】*1！" + "消耗" + consume + "精力", 100);
                                t.delayCreatItemUI3();
                            } else a.playText("Canvas/notify", "材料不足！", 100);
                        }
                    },
                    9: {
                        itemName: "匕首LV" + this.data.itemNum2[8],
                        needDes: "※可通过购买，或者打怪掉落提高等级",
                        des: "※增加" + 20 * this.data.itemNum2[8] + "点攻击。【嗜血】攻击时，" + 2 * this.data.itemNum2[8] + "%概率恢复造成伤害20%的生命",
                        button: function () {
                            n.playText("Canvas/notify", "请去商店购买！", 100);
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
                            if (n.itemNum[8] >= c) {
                                n.itemNum[8] -= c;
                                n.itemNum2[10] += 1;
                                var consume = Math.ceil(n.itemNum2[10] / 5) * 25;;
                                n.energy -= consume;
                                i.save();
                                a.playText("Canvas/notify", "获得【黑刀】*1！" + "消耗" + consume + "精力", 100);
                                t.delayCreatItemUI4();
                            } else a.playText("Canvas/notify", "材料不足！", 100);
                        }
                    },
                    15: {
                        itemName: "红夹克LV" + this.data.itemNum2[11],
                        needDes: "※需【火狐皮】" + this.data.itemNum[9] + "/" + (10 + 2 * this.data.itemNum2[11]),
                        des: "※增加" + 150 * this.data.itemNum2[11] + "点生命上限，" + 15 * this.data.itemNum2[11] + "点防御。【火狐之灵】受击时，" + 2 * this.data.itemNum2[11] + "%概率提高20%防御（最多叠加20次），并且恢复自身5%的生命",
                        ifEnough: function (t) {
                            var n = e("scr_data");
                            n.itemNum[9] >= 10 + 2 * n.itemNum2[11] && (cc.find("Canvas/Page/view/content/page_4/" + t + "/button/name").color = new cc.color(0, 255, 0));
                        },
                        button: function () {
                            var n = e("scr_data"), a = e("scr_effect"), i = e("scr_public"), c = 10 + 2 * n.itemNum2[11];
                            if (n.itemNum[9] >= c) {
                                n.itemNum[9] -= c;
                                n.itemNum2[11] += 1;
                                var consume = Math.ceil(n.itemNum2[11] / 5) * 25;;
                                n.energy -= consume;
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
                        des: "※使用枪攻击时，会增加50%*「枪等级」伤害，进入战斗时会获得「枪等级」数量的免费子弹，然后每次消耗1颗子弹（已有" + this.data.itemNum2[14] + "）。点击战斗界面右下角文字可以打开/关闭枪效果！",
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
                }, .04);
                cc.find("Canvas/Page/view/content").getChildByName(t).addChild(n);
                "undefined" != typeof a.ifEnough && a.ifEnough(c);
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
                if (e("scr_data").distance >= 0) {
                    cc.find("Canvas/Page/view/content/page_8").removeAllChildren();
                    for (var t = 28; t <= 28; t++) this.creatPrefab(t, "page_8");
                } else this.creatText(cc.find("Canvas/Page/view/content/page_8"), "notify", "※第8页内容，将在到达县城后解锁！");
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
    }, {
        scr_data: "scr_data",
        scr_effect: "scr_effect",
        scr_public: "scr_public"
    }],
    scr_newGame: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "116b0dQK4RNd6tA1hozVnWG", "scr_newGame");
        cc.Class({
            extends: cc.Component,
            properties: {},
            callBack: function () {
                JSON.parse(cc.sys.localStorage.getItem("userData")) ? cc.director.loadScene("notice") : cc.director.loadScene("choice");
            },
            onLoad: function () {
                this.node.on("touchstart", this.callBack, this);
            }
        });
        cc._RF.pop();
    }, {}],
    scr_notice2: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "5d6b1w/rEpC5bWSm2L4xLZt", "scr_notice2");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                var t = cc.find("Canvas/button");
                cc.find("Canvas/button/button1").on("touchstart", function () {
                    cc.director.loadScene("main");
                }, this);
                cc.find("Canvas/button/button2").on("touchstart", function () {
                    cc.director.loadScene("diary");
                }, this);
                e("scr_effect").playText("Canvas/text", "系统检测到你还有没用完的精力，你确定要睡觉吗？", 80);
                t.opacity = 0;
                this.scheduleOnce(function () {
                    t.runAction(cc.fadeIn(.2));
                }, .2);
            }
        });
        cc._RF.pop();
    }, {
        scr_effect: "scr_effect"
    }],
    scr_notice: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "8a8f3K8uShD74FI50VPMkWg", "scr_notice");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                var t = cc.find("Canvas/button");
                cc.find("Canvas/button/button1").on("touchstart", function () {
                    cc.sys.localStorage.removeItem("userData");
                    cc.director.loadScene("choice");
                }, this);
                cc.find("Canvas/button/button2").on("touchstart", function () {
                    cc.director.loadScene("start");
                }, this);
                e("scr_effect").playText("Canvas/text", "新开会删除旧存档，你确定要新开吗？", 80);
                t.opacity = 0;
                this.scheduleOnce(function () {
                    t.runAction(cc.fadeIn(.2));
                }, .2);
            }
        });
        cc._RF.pop();
    }, {
        scr_effect: "scr_effect"
    }],
    scr_open: scr_open,
    scr_over2_1: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "62e498iaclK8KXOlDUYWsAs", "scr_over2_1");
        cc.Class({
            extends: cc.Component,
            properties: {},
            creatText: function (e, t, n) {
                var a = new cc.Node(t);
                a.addComponent(cc.Label);
                a.parent = e;
                a.setPosition(0, 0);
                a.opacity = 0;
                a.runAction(cc.fadeIn(.3));
                a.color = new cc.Color(255, 255, 255);
                a.getComponent(cc.Label).overflow = 3;
                a.getComponent(cc.Label).horizontalAlign = 1;
                a.setContentSize(600, 300);
                a.getComponent(cc.Label).string = n;
                a.getComponent(cc.Label).lineHeight = 70;
                a.getComponent(cc.Label).fontSize = 40;
            },
            onLoad: function () {
                e("scr_data");
                var t = e("scr_data2"), n = e("scr_public"), a = ["很好，", "你可能有点轻微的强迫症，", "但是我还是决定给你一点补偿,", "虽然我认为你接受的可能性只有\n20%，", "但是，你也没办法寄刀片给我\n(｀・ω・´)", "因为我是一个虚拟现实角色！"];
                console.log(a);
                var i = a.length, c = 0, o = cc.find("Canvas/Show"), r = cc.find("Canvas/Determine"), s = this, l = Math.min(20 + 10 * t.dieChoice[3], 40);
                cc.find("Canvas/Determine/choice1/text").getComponent("cc.Label").string = "带着作者给的" + parseInt(l / 10) + "元钱，重新开始";
                r.active = !1;
                r.opacity = 0;
                this.schedule(function () {
                    s.creatText(o, "plot" + c, a[c]);
                    console.log(a[c]);
                    c++;
                }, 3, i - 1);
                this.scheduleOnce(function () {
                    r.active = !0;
                    r.runAction(cc.fadeIn(.2));
                }, .3 * (i + 1));
                r.getChildByName("choice1").on("touchstart", function () {
                    t.initMoney = l;
                    t.dieChoice[3] += 0;
                    n.save2();
                    (function () {
                        JSON.parse(cc.sys.localStorage.getItem("userData")) && cc.sys.localStorage.removeItem("userData");
                        cc.director.loadScene("start");
                    })();
                }, this);
                r.getChildByName("choice2").on("touchstart", function () {
                    t.dieChoice[3] += 1;
                    n.save2();
                    cc.director.loadScene("over");
                }, this);
            }
        });
        cc._RF.pop();
    }, {
        scr_data: "scr_data",
        scr_data2: "scr_data2",
        scr_public: "scr_public"
    }],
    scr_over2: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "aca905dFBlPoYq+iajnsZIA", "scr_over2");
        cc.Class({
            extends: cc.Component,
            properties: {},
            creatText: function (e, t, n) {
                var a = new cc.Node(t);
                a.addComponent(cc.Label);
                a.parent = e;
                a.setPosition(0, 0);
                a.opacity = 0;
                a.runAction(cc.fadeIn(.3));
                a.color = new cc.Color(255, 255, 255);
                a.getComponent(cc.Label).overflow = 3;
                a.getComponent(cc.Label).horizontalAlign = 1;
                a.setContentSize(600, 300);
                a.getComponent(cc.Label).string = n;
                a.getComponent(cc.Label).lineHeight = 60;
                a.getComponent(cc.Label).fontSize = 40;
            },
            onLoad: function () {
                var t = e("scr_data"), n = e("scr_public"), a = ["由于一些人的吐槽，\n(；′⌒`)", "从现在开始，\n→_→", "神一般存在的作者可以将你复活，\n︿(￣︶￣)︿", "但是，你必须放弃一样东西！\n(╬￣皿￣)", "——请做出你的选择！\n(●｀エ´)"], i = a.length, c = 0, o = cc.find("Canvas/Show"), r = cc.find("Canvas/Determine"), s = this;
                r.active = !1;
                r.opacity = 0;
                this.schedule(function () {
                    s.creatText(o, "plot" + c, a[c]);
                    c++;
                }, .5, i - 1);
                this.scheduleOnce(function () {
                    r.active = !0;
                    r.runAction(cc.fadeIn(.2));
                }, .5 * (i + 1));
                r.getChildByName("choice1").on("touchstart", function () {
                    var e = t.role;
                    e.maxHp -= parseInt(.04 * n.role.maxHp());
                    e.def -= parseInt(.04 * n.role.def());
                    e.att -= parseInt(.04 * n.role.att());
                    l();
                }, this);
                r.getChildByName("choice2").on("touchstart", function () {
                    t.maxEnergy -= 10;
                    l();
                }, this);
                r.getChildByName("choice3").on("touchstart", function () {
                    if (t.money >= 80 || t.itemNum2[7] >= 8 || t.itemNum2[12] >= 16) {
                        t.money >= 80 ? t.money -= 80 : t.itemNum2[7] >= 8 ? t.itemNum2[7] -= 8 : t.itemNum2[12] >= 16 && (t.itemNum2[12] -= 16);
                        l();
                    } else cc.find("Canvas/Determine/choice3/text").getComponent("cc.Label").string = "你怕是一个条件都不满足喔（笑）！";
                }, this);
                r.getChildByName("choice4").on("touchstart", function () {
                    cc.director.loadScene("over2_1");
                }, this);
                4e3 == n.regionId() && (r.getChildByName("choice4").active = !1);
                function l() {
                    t.health = 30;
                    t.role.hp = n.role.maxHp();
                    t.hunger = n.maxHunger();
                    n.save();
                    cc.director.loadScene("main");
                }
            }
        });
        cc._RF.pop();
    }, {
        scr_data: "scr_data",
        scr_public: "scr_public"
    }],
    scr_over: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "6d161adbZhGOIo8GmNaz6i6", "scr_over");
        cc.Class({
            extends: cc.Component,
            properties: {},
            creatText: function (e, t, n) {
                var a = new cc.Node(t);
                a.addComponent(cc.Label);
                a.parent = e;
                a.setPosition(0, 0);
                a.opacity = 0;
                a.runAction(cc.fadeIn(.3));
                a.color = new cc.Color(255, 255, 255);
                a.getComponent(cc.Label).overflow = 3;
                a.getComponent(cc.Label).horizontalAlign = 1;
                a.setContentSize(600, 300);
                a.getComponent(cc.Label).string = n;
                a.getComponent(cc.Label).lineHeight = 50;
                a.getComponent(cc.Label).fontSize = 40;
            },
            onLoad: function () {
                var t = [["几天后，", "你在草丛中被人发现，", "全身浮肿，面目全非。", "结局——", "【客死他乡】"], ["几天后，", "你在草丛中被人发现，", "奄奄一息，身上散发着难闻的味道。", "你立刻被送往救助站。", "父亲当晚从老家赶来，", "你的流浪生涯就此结束。", "结局——", "【无奈的人生】"]], n = "", a = e("scr_public").regionId(), i = (n = a < 4e3 ? t[0] : t[1]).length, c = 0, o = cc.find("Canvas/Show"), r = cc.find("Canvas/Determine"), s = this;
                this.schedule(function () {
                    s.creatText(o, "plot" + c, n[c]);
                    c++;
                }, .2, i - 1);
                this.scheduleOnce(function () {
                    r.active = !0;
                    r.runAction(cc.fadeIn(.2));
                }, .2 * (i + 1));
                r.on("touchstart", function () {
                    JSON.parse(cc.sys.localStorage.getItem("userData")) && cc.sys.localStorage.removeItem("userData");
                    cc.director.loadScene("start");
                }, this);
            }
        });
        cc._RF.pop();
    }, {
        scr_public: "scr_public"
    }],
    scr_plot: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "22594SzhLdDFIhFu3G4ZURs", "scr_plot");
        cc.Class({
            extends: cc.Component,
            properties: {},
            creatText: function (e, t, n) {
                var a = new cc.Node(t);
                a.addComponent(cc.Label);
                a.parent = e;
                a.setPosition(0, 0);
                a.opacity = 0;
                a.runAction(cc.fadeIn(.2));
                a.color = new cc.Color(255, 255, 255);
                a.getComponent(cc.Label).overflow = 3;
                a.getComponent(cc.Label).horizontalAlign = 1;
                a.setContentSize(600, 300);
                a.getComponent(cc.Label).string = n;
                a.getComponent(cc.Label).lineHeight = 60;
                a.getComponent(cc.Label).fontSize = 40;
            },
            plotData: function () {
                var t = e("scr_data"), n = e("scr_public");
                e("scr_effect");
                return {
                    0: {
                        text: ["你好，我是本游戏作者，", "你可能现在一脸懵逼。", "我现在要给你两个选项，", "因为我想知道你接下来会怎么处理。", "回到认识晓月之前", "不管她，把我复活，继续赶路"],
                        BGM: "",
                        choice1: function () { },
                        choice2: function () { }
                    },
                    1: {
                        text: ["安静的午后，", "一阵剧烈的尖叫声划破天际，", "我慌忙赶到，", "一个光膀子大汉正将晓月按在身下！", "", "我要杀了他！"],
                        BGM: "",
                        choice1: function () { },
                        choice2: function () {
                            if (0 == e("scr_data2").gameData[4]) {
                                t.skillLv[4] = 0;
                                t.enemyId = 108;
                                t.role.hp = n.role.maxHp();
                                n.save();
                                cc.director.loadScene("main");
                            } else cc.director.loadScene("main", function () {
                                e("scr_data").itemNum2[10] += 1;
                                e("scr_public").save();
                                e("scr_effect").playText("Canvas/Text/txt_notify", "“美女没摔到吧~”，大汉担心的说道，“这荒郊野外的，走路也不当心点！摔伤倒是小事，你这么漂亮，要是碰到流氓可咋整？这样，我送你一把小刀，留着防身用哈~”。获得【黑刀】*1", 60);
                            });
                        }
                    },
                    2: {
                        text: ["你好，欢迎来到小黑屋，", "虽然你可能现在是一脸懵逼", "但是事实就是这么不讲道理——", "如果你无法通过挑战，你就不能拥有晓月", "我要回到认识晓月的前一天，我再试试", "我选择放弃晓月"],
                        BGM: "",
                        choice1: function () {
                            var t = e("scr_data");
                            e("scr_data2").gameData[0] += 1;
                            t = JSON.parse(cc.sys.localStorage.getItem("dataCopy"));
                            cc.sys.localStorage.setItem("userData", JSON.stringify(t));
                            n.save2();
                            cc.director.loadScene("main");
                        },
                        choice2: function () {
                            t.health += 999;
                            t.distance += 1;
                            t.enemyId = 0;
                            t.role.hp = n.role.maxHp();
                            n.save();
                            cc.director.loadScene("main", function () {
                                e("scr_data").itemNum[12] += 1;
                                e("scr_public").save();
                                e("scr_effect").playText("Canvas/Text/txt_notify", "晓月在你背后，流下了一滴眼泪，获得【眼泪】*1", 60);
                            });
                        }
                    },
                    3: {
                        text: ["“如果你不能给她呵护和未来，", "那么，请放手。”", "“也许，从一开始就选择不认识，才是对她真正的保护”", "回到认识晓月之前", "好吧，我放弃"],
                        BGM: "",
                        choice1: function () {
                            var t = e("scr_data");
                            e("scr_data2").gameData[0] += 1;
                            t = JSON.parse(cc.sys.localStorage.getItem("dataCopy"));
                            cc.sys.localStorage.setItem("userData", JSON.stringify(t));
                            n.save2();
                            cc.director.loadScene("main", function () {
                                e("scr_data").itemNum[12] += 1;
                                e("scr_public").save();
                                e("scr_effect").playText("Canvas/Text/txt_notify", "晓月在你背后，流下了一滴眼泪，获得【眼泪】*1", 60);
                            });
                        },
                        choice2: function () {
                            t.health += 999;
                            t.distance += 1;
                            t.enemyId = 0;
                            t.role.hp = n.role.maxHp();
                            n.save();
                            cc.director.loadScene("main", function () {
                                e("scr_data").itemNum[12] += 1;
                                e("scr_public").save();
                                e("scr_effect").playText("Canvas/Text/txt_notify", "晓月在你背后，流下了一滴眼泪，获得【眼泪】*1", 60);
                            });
                        }
                    },
                    4: {
                        text: ["“不是你喜欢，", "所以就应该得到。”", "“你太过偏执，才容易遍体鳞伤”", "作者，我要杀了你", "把我复活"],
                        BGM: "",
                        choice1: function () {
                            t.enemyId = 998;
                            t.health += 999;
                            t.role.hp = n.role.maxHp();
                            n.save();
                            cc.director.loadScene("main");
                        },
                        choice2: function () {
                            t.health += 999;
                            t.distance += 1;
                            t.enemyId = 0;
                            t.role.hp = n.role.maxHp();
                            n.save();
                            cc.director.loadScene("main", function () {
                                e("scr_data").itemNum[12] += 1;
                                e("scr_public").save();
                                e("scr_effect").playText("Canvas/Text/txt_notify", "晓月在你背后，流下了一滴眼泪，获得【眼泪】*1", 60);
                            });
                        }
                    },
                    5: {
                        text: ["虽然很不舍，", "但是晓月也需要回家报告平安了...", "摸摸头，道别", "拍拍肩膀，道别"],
                        BGM: "",
                        choice1: function () {
                            t.distance += 1;
                            t.ifFollow[0] = 0;
                            n.save();
                            cc.director.loadScene("main", function () {
                                e("scr_effect").playText("Canvas/Text/txt_notify", "晓月依依不舍的离开了", 60);
                            });
                        },
                        choice2: function () {
                            t.distance += 1;
                            n.QLnewfunction.addxiaoyue_favorability(1);
                            //t.friend_xiaoyue.favorability += 10;
                            t.ifFollow[0] = 0;
                            n.save();
                            cc.director.loadScene("main", function () {
                                e("scr_effect").playText("Canvas/Text/txt_notify", "“我还会来找你玩的！( • ̀ω•́ )✧”", 60);
                            });
                        }
                    },
                    98: {
                        text: ["陈碧瑶好感已满足要求，是否邀请碧瑶成为伙伴？（如果碧瑶成为伙伴，其它伙伴将不会被顶掉，且无无法再邀请其它伙伴；如果你拒绝邀请，以后则不不会再有机会邀请碧瑶，请不考虑清楚！）", "是", "算了"],
                        BGM: "",
                        choice1: function () {
                            t.ifFollow[1] = 1;
                            t.publicVar[8] = 1;
                            n.save();
                            cc.director.loadScene("home", function () {
                                e("scr_effect").playText("Canvas/notify", "陈碧瑶成为伙伴！请好好珍惜吧~", 60);
                            });
                        },
                        choice2: function () {
                            t.publicVar[8] = 1;
                            cc.director.loadScene("home");
                        }
                    },
                    99: {
                        text: ["是否邀请晓月成为伙伴？（如果晓月成为伙伴，其它伙伴将会被顶掉，且无法再邀请其它伙伴，请考虑清楚）", "是", "算了"],
                        BGM: "",
                        choice1: function () {
                            t.ifFollow[0] = 1;
                            n.save();
                            cc.director.loadScene("home", function () {
                                e("scr_effect").playText("Canvas/notify", "晓月成为伙伴！请好好珍惜吧~", 60);
                            });
                        },
                        choice2: function () {
                            cc.director.loadScene("home");
                        }
                    },
                    //结局传送门
                    1001: {
                        text: ["五十年后，在城中村、一间充满恶臭的破旧出租屋内，几名带着消毒面具的消防人员正在清理地上的垃圾。", "房间很小，阴暗而潮湿，墙角堆满了酒瓶和没来得及处理的烟头。", "一位中年消防员拍了拍一个年轻消防员的肩膀责备道，“别看啦，该干活了”。“知道啦。没想到这位奇怪的老人还有这么一段往事啊~”，说完，年轻人把手中发黄的日记本\n丢进了焚烧箱...", "", "...全剧终..."],
                        BGM: "",
                        choice1: function () { },
                        choice2: function () {
                            cc.director.loadScene("end");
                        }
                    },
                    1002: {
                        text: ["一年后，在一座人迹罕至的深山中，一间新建的小木屋旁，淡青色的花朵在清晨的阳光下、轻盈地跳起了舞蹈。", "这是房子的男主人，给一位短发女孩精心修建的小花园。", "他对女孩说，“我们在这里相守一辈子吧~”", "...待续...", "", "本游戏已完结，后续待开发"],
                        BGM: "",
                        choice1: function () { },
                        choice2: function () {
                            cc.director.loadScene("end");
                        }
                    },
                    1003: {
                        text: ["半年后，冬日的夜幕悄悄降临；在一所大学门口，嬉笑的学生三三两两的走出校门。", "橘黄色的路灯下，一个穿着破旧军大衣的男孩、安静的等在门口，丝毫不在意旁人异样的眼光。", "不一会儿，一个干干净净、梳着单马尾的女孩，焦急的跑出校门，她停在男孩旁边，微笑着拉起他的手，一起消失在寒冬的夜幕中...", "...全剧终...", "", "本游戏已完结，后续待定..."],
                        BGM: "",
                        choice1: function () { },
                        choice2: function () {
                            cc.director.loadScene("end");
                        }
                    }
                };
            },
            startPlot: function () {
                var t = e("scr_data"), n = (e("scr_public"), this.plotId || t.plotId), a = this.plotData()[n], i = a.text, c = i.pop(), o = i.pop(), r = i.length, s = 0, l = cc.find("Canvas/EventText");
                (function () {
                    var e = cc.find("Canvas/Choice");
                    e.stopAllActions();
                    e.opacity = 0;
                    cc.find("Canvas/EventText").removeAllChildren();
                    e.getChildByName("Choice1").targetOff(this);
                    e.getChildByName("Choice2").targetOff(this);
                })();
                this.schedule(function () {
                    this.creatText(l, "plot" + s, i[s]);
                    s++;
                }, 2.5, r - 1);
                this.scheduleOnce(function () {
                    var e = a.choice1, t = a.choice2, n = cc.find("Canvas/Choice/Choice1"), i = cc.find("Canvas/Choice/Choice2");
                    n.getChildByName("choiceText").getComponent("cc.Label").string = o;
                    i.getChildByName("choiceText").getComponent("cc.Label").string = c;
                    if ("" == o) {
                        n.active = !1;
                        cc.find("Canvas/Choice/label").active = !1;
                    }
                    cc.find("Canvas/Choice").runAction(cc.fadeIn(.2));
                    n.on("touchstart", e, this);
                    i.on("touchstart", t, this);
                }, 2.5 * (r + 1));
            },
            onLoad: function () {
                this.startPlot();
            }
        });
        cc._RF.pop();
    }, {
        scr_data: "scr_data",
        scr_data2: "scr_data2",
        scr_effect: "scr_effect",
        scr_public: "scr_public"
    }],
    scr_public: scr_public,
    scr_quitGame: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "b8981TVaLZEQZriw0Ikoosd", "scr_quitGame");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                cc.eventManager.addListener({
                    event: cc.EventListener.KEYBOARD,
                    onKeyPressed: function (e, t) {
                        e === cc.KEY.back && cc.director.end();
                    }
                }, this.node);
            }
        });
        cc._RF.pop();
    }, {}],
    scr_readConfession: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "edbeey5ue9CDZU2M2ziBjld", "scr_readConfession");
        cc.Class({
            extends: cc.Component,
            properties: {},
            read: function () {
                var t = ["1111111", "我是个失败的人", "aaa", "bbb", "ccc"], n = e("scr_effect"), a = e("scr_data").achieve, i = Math.random(), c = t.length, o = parseInt(a / 100);
                o > c - 5 && (o = c - 5);
                var r = Math.round(4 * Math.random() + o);
                i > .5 ? n.playText("Canvas/Text/txt_confession", "我该做点什么呢？", 120) : n.playText("Canvas/Text/txt_confession", t[r], 120);
            },
            onLoad: function () {
                this.schedule(this.read, 30);
            }
        });
        cc._RF.pop();
    }, {
        scr_data: "scr_data",
        scr_effect: "scr_effect"
    }],
    scr_restDetermine: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "64f6f/B7StMlZJx3Vgs0Rn/", "scr_restDetermine");
        cc.Class({
            extends: cc.Component,
            properties: {},
            callBack: function () {
                cc.director.loadScene("event");
            },
            onLoad: function () {
                this.node.on("touchstart", this.callBack, this);
            }
        });
        cc._RF.pop();
    }, {}],
    scr_rest: scr_rest,
    scr_shop2: scr_shop2,
    scr_shop3: scr_shop3,
    //商店UI页码传送门
    scr_shop4: scr_shop4,
    scr_shopButton: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "46243Z6bxNGuK5lVJQiKZD4", "scr_shopButton");
        cc.Class({
            extends: cc.Component,
            properties: {},
            callBack: function () {
                cc.director.loadScene("shop");
            },
            onLoad: function () {
                this.node.on("touchstart", this.callBack, this);
            }
        });
        cc._RF.pop();
    }, {}],
    scr_shopUI: scr_shopUI,
    scr_skillButton: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "46028T60zdCgZQPViIBJA6V", "scr_skillButton");
        cc.Class({
            extends: cc.Component,
            properties: {},
            callBack: function () {
                cc.director.loadScene("skill");
            },
            onLoad: function () {
                this.node.on("touchstart", this.callBack, this);
            }
        });
        cc._RF.pop();
    }, {}],
    scr_skillJudge2: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "fbb08mI2F9N/4eaXqX0Gf87", "scr_skillJudge2");
        cc.Class({
            extends: cc.Component,
            properties: {},
            skillJugge: function () {
                var t = e("scr_data"), n = e("scr_public"), a = t.friendSkill, i = {
                    1: function () {
                        0 == a[1] && t.publicVar[7] >= 100 && (a[1] = 1);
                    },
                    2: function () {
                        0 == a[2] && t.publicVar[7] >= 200 && (a[2] = 1);
                    },
                    3: function () {
                        0 == a[3] && t.publicVar[7] >= 300 && (a[3] = 1);
                    },
                    4: function () {
                        0 == a[4] && t.publicVar[7] >= 400 && (a[4] = 1);
                    },
                    5: function () {
                        0 == a[5] && t.publicVar[7] >= 500 && (a[5] = 1);
                    },
                    6: function () {
                        0 == a[6] && t.publicVar[7] >= 600 && (a[6] = 1);
                    },
                    7: function () {
                        0 == a[7] && t.publicVar[7] >= 700 && (a[7] = 1);
                    },
                    8: function () {
                        0 == a[8] && t.publicVar[7] >= 800 && (a[8] = 1);
                    },
                    9: function () {
                        0 == a[9] && t.talkTimes[1] >= 100 && (a[9] = 1);
                    }
                };
                for (var c in i) i[c]();
                n.save();
            },
            onLoad: function () {
                this.skillJugge();
            }
        });
        //特性传送门
        cc._RF.pop();
    }, {
        scr_data: "scr_data",
        scr_public: "scr_public"
    }],
    scr_skillJudge: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "daeebn9rLFFwagiEBrNgbsO", "scr_skillJudge");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                var t = e("scr_data"), n = e("scr_public"), a = t.skillLv, i = {
                    0: function () {
                        t.hunger <= 0 ? a[0] = 1 : a[0] = 0;
                    },
                    1: function () {
                        0 == a[1] && t.winTimes >= 8 && (a[1] = 1);
                    },
                    2: function () {
                        0 == a[2] && t.orderTimes[5] >= 30 && (a[2] = 1);
                    },
                    3: function () {
                        0 == a[3] && t.orderTimes[0] >= 15 && (a[3] = 1);
                    },
                    5: function () {
                        0 == a[5] && t.winTimes >= 15 && (a[5] = 1);
                    },
                    6: function () {
                        0 == a[6] && t.randomEvent[6] >= 10 && (a[6] = 1);
                    },
                    7: function () {
                        0 == a[7] && t.orderTimes[2] >= 30 && (a[7] = 1);
                    },
                    8: function () {
                        0 == a[8] && t.figthExp[0] >= 20 && (a[8] = 1);
                    },
                    9: function () {
                        0 == a[9] && t.winTimes >= 20 && (a[9] = 1);
                    },
                    10: function () {
                        0 == a[10] && t.itemNum2[2] >= 5 && (a[10] = 1);
                    },
                    11: function () {
                        0 == a[11] && t.figthExp[1] >= 30 && (a[11] = 1);
                    },
                    12: function () {
                        0 == a[12] && t.orderTimes[5] >= 666 && (a[12] = 1);
                    },
                    13: function () {
                        0 == a[13] && t.orderTimes[5] >= 200 && t.orderTimes[2] >= 60 && (a[13] = 1);
                    },
                    14: function () {
                        0 == a[14] && t.winTimes >= 60 && (a[14] = 1);
                    },
                    15: function () {
                        0 == a[15] && t.figthExp[2] >= 40 && (a[15] = 1);
                    },
                    17: function () {
                        0 == a[17] && t.orderTimes[0] >= 99 && (a[17] = 1);
                    },
                    19: function () {
                        0 == a[19] && t.publicVar3[13] >= 4 && (a[19] = 1);
                    },
                    21: function () {
                        0 == a[21] && t.itemNum2[6] >= 10 && (a[21] = 1);
                    },
                    23: function () {
                        0 == a[23] && t.publicVar2[1] >= 233 && (a[23] = 1);
                    },
                    24: function () {
                        0 == a[24] && t.publicVar3[12] >= 79 && (a[24] = 1);
                    },
                    25: function () {
                        0 == a[25] && t.itemNum2[3] >= 15 && t.itemNum2[4] >= 15 && (a[25] = 1);
                    },
                    26: function () {
                        0 == a[26] && t.kills[2] >= 40 && (a[26] = 1);
                    },
                    27: function () {
                        a[27] == 1 ? a[27] = 1 : a[27] = 0;
                    },
                    28: function () {
                        var guozi = 2 * t.orderTimes[10], shurou = 1 * t.orderTimes[11], rate = guozi / shurou, exp = t.publicVar2[26],
                            min = ((500 + exp) / (350 - exp)), max = ((850 + exp) / (150 - exp));
                        if (rate < max && min < rate && rate != NaN) { return 1; }
                        else return 0;
                    },
                    29: function () {
                        a[29] == 1 ? a[29] = 1 : a[29] = 0;
                    },
                    30: function () {
                        0 == a[30] && t.figthExp[0] >= 100 && (a[30] = 1);

                    }
                };
                for (var c in i) i[c]();
                n.save();
            }
        });
        cc._RF.pop();
    }, {
        scr_data: "scr_data",
        scr_public: "scr_public"
    }],
    scr_skillUI: scr_skillUI,
    scr_startChoice: scr_startChoice,
    scr_startUI: scr_startUI,//开始游戏界面的按钮在这设置！！！
    scr_system: scr_system,
    scr_weixin: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "30448HDiXRBAKQpqrA00msY", "scr_weixin");
        cc.Class({
            extends: cc.Component,
            properties: {},
            callBack: function () {
                cc.director.loadScene("support2");
            },
            onLoad: function () {
                this.node.on("touchstart", this.callBack, this);
            }
        });
        cc._RF.pop();
    }, {}],
    testAll: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "90bfc8sWA1FKba1y8235I0Y", "testAll");
        cc.Class({
            extends: cc.Component,
            properties: {},
            callBack: function () {
                this.changeData();
            },
            changeData: function () {
                var t = e("scr_data"), n = e("scr_public");
                e("scr_data2");
                t.day = 179;
                t.ifFollow[0] = 0;
                t.publicVar[7] = 999;
                t.publicVar3[3] = 0;
                n.save();
                n.save2();
                n.init();
            },
            changeData2: function () {
                //传送门
                var t = e("scr_data"), n = e("scr_public");
                t.itemNum2[3] = 30;
                t.itemNum2[4] = 30;
                t.itemNum2[8] = 15;
                t.itemNum2[9] = 15;
                t.itemNum2[10] = 6;
                t.itemNum2[11] = 6;
                t.itemNum2[14] = 999;
                t.itemNum2[19] = 2;
                t.itemNum2[20] = 500;
                t.itemNum2[21] = 200;
                t.itemNum2[22] = 200;
                t.ifFollow[0] = 1;
                t.friend_xiaoyue.favorability = 999;
                t.skillLv[5] = 1;
                t.skillLv[9] = 1;
                t.skillLv[14] = 1;
                t.skillLv[25] = 1;
                t.figthExp[0] = 150;
                t.figthExp[1] = 150;
                t.figthExp[2] = 150;
                t.role.hp = n.role.maxHp();
            },
            onLoad: function () {
                this.node.on("touchstart", this.callBack, this);
            }
        });
        cc._RF.pop();
    }, {
        scr_data: "scr_data",
        scr_data2: "scr_data2",
        scr_public: "scr_public"
    }],
    test: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "8d2adDidEdDNoDEfhV+1NKI", "test");
        cc.Class({
            extends: cc.Component,
            properties: {},
            callBack: function () { },
            onLoad: function () { }
        });
        cc._RF.pop();
    }, {}]
}
needLoadModuleIDList = ["scr_eatButton", "scr_makeButton", "scr_shopButton", "scr_skillButton", "scr_backMainUI", "scr_diaryDetermine", "scr_eventDetermine", "scr_restDetermine"/*, "scr_QQpay"*/, "scr_backStartUI", "scr_backSupport", "scr_continueButton", "scr_initGame", "scr_newGame", "scr_notice", "scr_notice2", "scr_open", "scr_startChoice", "scr_startUI", "scr_weixin", "scr_achieve", "scr_eatUI", "scr_eventData", "scr_makeUI", "scr_shop2", "scr_shop3", "scr_shop4", "scr_shopUI", "scr_skillJudge", "scr_skillUI", "scr_data", "scr_data2", "scr_dataCopy", "scr_diary", "scr_event", "scr_mainUIEvent", "scr_plot", "scr_rest", "scr_enemy", "scr_explore", "scr_fight", "scr_fightState", "scr_forwardButton", "scr_friendSkillJudge1", "scr_friendSkillUI1", "scr_friendSkillUI2", "scr_friendUI1", "scr_skillJudge2", "scr_effect", "scr_public", "scr_home", "scr_mainUIinit", "scr_readConfession", "scr_end", "scr_initData", "scr_over", "scr_over2", "scr_over2_1", "scr_system", "scr_BGM", "scr_quitGame", "test", "testAll", "scr_liveModeMain"];