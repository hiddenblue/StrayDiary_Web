scr_data = [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "cc6a6czpoJOeJjLRi9RcHDb", "scr_data");
    cc.Class({
        extends: cc.Component,
        properties: {},
        onLoad: function () {
            var e = {
                distance: 1,
                stayDay: [1, 1, 1, 1],
                role: {
                    hp: 250,
                    maxHp: 250,
                    att: 50,
                    def: 10
                },
                money: 10,
                day: 1,
                energy: 100,
                maxEnergy: 100,
                hunger: 100,
                maxHunger: 100,
                health: 30,
                maxHealth: 100,
                achieve: 0,
                shopPoint: 0,
                enemyId: 0,
                //初始属性传送门
                publicVar: [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                publicVar2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                publicVar3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                orderTimes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                //加入ordertimes8,9,10,11,12
                randomEvent: [0, 0, 0, 0, 0, 0, 0, 99, 588, 0, 0, 0, 0, 0],
                choice: [2, 0, 0, 0, 0, 0, 0, 0, 0],
                friend_xiaoyue: {
                    favorability: 0,
                },
                chioce2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                kills: [0, 0, 0, 0],
                itemNum: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//ITEMNUM【17】
                itemNum2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                //tag 新变量在这加
                discount: 0,
                Collectibles: {
                    goodPeopleCard: 0,
                },
                evil: {
                    evilValue: 0,
                    virtueLevel: 0,
                    evilLevel: 0,
                },
                ifFollow: [0, 0],
                plotId: 0,
                talkTimes: [0, 0],
                cigaretteuptimes: 0,
                button: [!0, !1, !1],
                figthState: 0,
                figthExp: [0, 0, 0],
                workExp: 0,
                winTimes: 0,
                winsstreaks: 0,
                randomModel: 0,
                gift: [0, 0, 0, 0],
                randomBuff: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                escapeBattle: 0,
                winEnemy: [],
                escapeExp: 0,
                energyconsumetimes: 1,
                inBattle: 0,
                Askills: [0, 0, 0, 0],
                buffState: [0, 0, 0, 0],
                ifNotify: !1,
                skillLv: {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0,
                    10: 0,
                    11: 0,
                    12: 0,
                    13: 0,
                    14: 0,
                    15: 0,
                    16: 0,
                    17: 0,
                    18: 0,
                    19: 0,
                    20: 0,
                    21: 0,
                    22: 0,
                    23: 0,
                    24: 0,
                    25: 0,
                    26: 0,
                    27: 0,
                    28: 0,
                    29: 0,
                    30: 0,
                    31: 0,
                    32: 0,
                    33: 0,
                    34: 0,
                    35: 0
                },
                //特殊敌人传送门
                specialEnemy: {
                    100001: {
                        lv: 1,
                        hp: 20,
                        maxHp: 20,
                        att: 1,
                        def: 0
                    },
                    100002: {
                        lv: 25,
                        hp: 875,
                        maxHp: 875,
                        att: 0,
                        def: 0
                    },
                    200001: {
                        lv: 8,
                        hp: 310,
                        maxHp: 310,
                        att: 20,
                        def: 0
                    },
                    300001: {
                        lv: 20,
                        hp: 510,
                        maxHp: 510,
                        att: 0,
                        def: 0
                    },
                    300002: {
                        lv: 45,
                        hp: 1550,
                        maxHp: 1550,
                        att: 0,
                        def: 0
                    },
                    300003: {
                        lv: 35,
                        hp: 3270,
                        maxHp: 3270,
                        att: 0,
                        def: 0
                    },
                    400001: {
                        lv: 100,
                        hp: 3345,
                        maxHp: 3345,
                        att: 0,
                        def: 234
                    },
                    400002: {
                        lv: 199,
                        hp: 19999,
                        maxHp: 19999,
                        att: 0,
                        def: 20
                    },
                    400003: {
                        lv: 60,
                        hp: 2050,
                        maxHp: 2050,
                        att: 310,
                        def: 121
                    },
                    900001: {
                        lv: 15,
                        hp: 575,
                        maxHp: 575,
                        att: 59,
                        def: 16
                    },
                    900002: {
                        lv: 20,
                        hp: 998,
                        maxHp: 998,
                        att: 50,
                        def: 36
                    },
                    900003: {
                        lv: 500,
                        hp: 16500,
                        maxHp: 16500,
                        att: 1500,
                        def: 1150
                    },
                    900004: {
                        lv: 1,
                        hp: 999999,
                        maxHp: 999999,
                        att: 999,
                        def: 0
                    },
                    900005: {
                        lv: 500,
                        hp: 599999,
                        maxHp: 599999,
                        att: 0,
                        def: 0
                    },
                    900006: {
                        lv: 200,
                        hp: 299999,
                        maxHp: 299999,
                        att: 0,
                        def: 0
                    },
                    900007: {
                        lv: 40,
                        hp: 3900,
                        maxHp: 3900,
                        att: 90,
                        def: 50
                    }
                },
                friendSkill1: [1, 0, 0, 0, 0],
                friendSkill2: [1, 0, 0, 0, 0],
                friendSkill: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            };
            JSON.parse(cc.sys.localStorage.getItem("userData")) && function (e) {
                "undefined" == typeof e.itemNum[17] && (e.itemNum[17] = 0);
                "undefined" == typeof e.energyconsumetimes && (e.energyconsumetimes = 1);
                "undefined" == typeof e.itemNum2[36] && (e.itemNum2[36] = 0);
                "undefined" == typeof e.Askills && (e.Askills = [0, 0, 0, 0]);
                //"undefined" == typeof e.itemNum2[37] && (e.itemNum2[37] = 0);
                "undefined" == typeof e.orderTimes[10] && (e.orderTimes[10] = 0);
                "undefined" == typeof e.orderTimes[11] && (e.orderTimes[11] = 0);
                "undefined" == typeof e.orderTimes[12] && (e.orderTimes[12] = 0);
                "undefined" == typeof e.orderTimes[13] && (e.orderTimes[13] = 0);
                "undefined" == typeof e.orderTimes[14] && (e.orderTimes[14] = 0);
                "undefined" == typeof e.friendSkill[9] && (e.friendSkill[9] = 0);
                "undefined" == typeof e.skillLv[28] && (e.skillLv[28] = 0);
                "undefined" == typeof e.skillLv[29] && (e.skillLv[29] = 0);
                "undefined" == typeof e.skillLv[30] && (e.skillLv[30] = 0);
                "undefined" == typeof e.skillLv[31] && (e.skillLv[31] = 0);
                "undefined" == typeof e.skillLv[32] && (e.skillLv[32] = 0);
                "undefined" == typeof e.skillLv[33] && (e.skillLv[33] = 0);
                "undefined" == typeof e.skillLv[34] && (e.skillLv[34] = 0);
                "undefined" == typeof e.skillLv[35] && (e.skillLv[35] = 0);
                //新增物品传送门
                "undefined" == typeof e.escapeBattle && (e.escapeBattle = 0);
                "undefined" == typeof e.winEnemy && (e.winEnemy = []);
                "undefined" == typeof e.randomModel && (e.randomModel = 0);
                "undefined" == typeof e.gift && (e.gift = [0, 0, 0, 0]);
                "undefined" == typeof e.randomBuff && (e.randomBuff = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                "undefined" == typeof e.gift[0] && (e.gift[0] = 0);
                "undefined" == typeof e.gift[1] && (e.gift[1] = 0);
                "undefined" == typeof e.gift[2] && (e.gift[2] = 0);
                "undefined" == typeof e.gift[3] && (e.gift[3] = 0);
                "undefined" == typeof e.maxHealth && (e.maxHealth = 100);
                "undefined" == typeof e.choice[6] && (e.choice[6] = 0);
                "undefined" == typeof e.choice[7] && (e.choice[7] = 0);
                "undefined" == typeof e.choice[8] && (e.choice[8] = 0);
                "undefined" == typeof e.plotId && (e.plotId = 0);
                "undefined" == typeof e.cigaretteuptimes && (e.cigaretteuptimes = 0);//新加的东西
                "undefined" == typeof e.winsstreaks && (e.winsstreaks = 0);
                "undefined" == typeof e.buffState[2] && (e.buffState[2] = 0)
                "undefined" == typeof e.buffState[3] && (e.buffState[3] = 0)
                "undefined" == typeof e.escapeExp && (e.escapeExp = 0);
                "undefined" == typeof e.randomEvent[13] && (e.randomEvent[13] = 0);
            }(e = JSON.parse(cc.sys.localStorage.getItem("userData")));
            t.exports = e;
        },
    });
    cc._RF.pop();
}, {}]