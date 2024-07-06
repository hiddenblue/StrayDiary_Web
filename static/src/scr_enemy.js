scr_enemy = [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "9ca7eoc05dELIgnx18JSNGI", "scr_enemy");
    function a(e, t, n) {
        t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n;
        return e;
    }
    cc.Class({
        extends: cc.Component,
        properties: {},
        onLoad: function () {
            var n, i = e("scr_public"), c = e("scr_data"), o = {
                maxHp: i.role.maxHp(),
                att: i.role.att(),
                def: i.role.def()
            }, r = {
                0: {
                    name: "女贼",
                    lv: 99,
                    hp: 750,
                    maxHp: 750,
                    att: 25,
                    def: 0,
                    publicVar: 0,
                    escapeRate: 10,
                    enemyEscapeRate: 0,
                    lostHealth: 30,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[50, 1, 2, 1], [20, 2, 1, 1], [5, 3, 1, 1], [100, 99, 1, 3]],
                    des: "遭到怪物袭击！",
                    skill: function () {
                        c.money -= 1;
                        c.role.hp -= 1;
                        return "【你被偷走0.1元,hp-1】！";
                    },
                    defSkill: void 0,
                    winEvent: void 0,
                    lostEvent: function () {
                        e("scr_data").money -= 1;
                        return "被抢0.1元！";
                    }
                },
                //普通敌人传送门
                1: {
                    name: "小蚊",
                    lv: 1,
                    hp: 100,
                    maxHp: 100,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: 100,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[50, 0, 1, 1], [50, 1, 1, 2]],
                    des: "遭到怪物袭击！",
                    skill: function () {
                        var t = Math.max(10 - o.def, 0);
                        e("scr_data").role.hp -= t;
                        this.hp += t;
                        return "【你被吸取" + t + "点生命！】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        var t = e("scr_data");
                        t.kills[0] += 1;
                        return "【你已消灭" + t.kills[0] + "只蚊子】";
                    },
                    lostEvent: void 0
                },
                2: {
                    name: "小小兔",
                    lv: 3,
                    hp: 425,
                    maxHp: 425,
                    att: 0,
                    def: 5,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 40,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 3, 1, 1]],
                    des: "遭到怪物袭击！",
                    skill: function () {
                        var t = e("scr_data");
                        this.publicVar += 1;
                        t.itemNum[0] += 1;
                        return "【" + this.name + "向你吐出一个果子！你受到0点伤害】你获得【果子*1】";
                    },
                    defSkill: void 0,
                    winEvent: void 0,
                    lostEvent: void 0
                },
                3: {
                    name: "小小蛇",
                    lv: 5,
                    hp: 325,
                    maxHp: 325,
                    att: 48,
                    def: 0,
                    publicVar: 0,
                    escapeRate: 50,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[50, 3, 1, 1], [60, 1, 1, 2]],
                    des: "遭到怪物袭击！",
                    skill: void 0,
                    defSkill: void 0,
                    winEvent: void 0,
                    lostEvent: void 0
                },
                4: {
                    name: "小青（精英）",
                    lv: 8,
                    hp: 585,
                    maxHp: 585,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: 60,
                    enemyEscapeRate: 0,
                    lostHealth: 2,
                    achieve: 1,
                    getAtt: 2,
                    drop: [[100, 3, 1, 1], [100, 1, 1, 2], [5, 27, 1, 2]],
                    des: "发现一条翠绿色的蛇！",
                    skill: function () {
                        var t = Math.max(21 - o.def, 0);
                        this.publicVar += 1;
                        var n = t * this.publicVar;
                        e("scr_data").role.hp -= n;
                        return "【中毒：每回合损失" + n + "点生命（" + this.publicVar + "层）】";
                    },
                    defSkill: void 0,
                    winEvent: void 0,
                    lostEvent: void 0
                },
                21: {
                    name: "葬爱.蚊乐队",
                    lv: 8,
                    hp: 666,
                    maxHp: 666,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: 50,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[50, 0, 1, 1], [100, 1, 1, 2]],
                    des: "头套给你耗一地",
                    skill: function () {
                        var t = Math.max(66 - o.def, 0);
                        e("scr_data").role.hp -= t;
                        return "【" + this.name + "使用「上下」，你损失" + t + "点生命】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        var t = e("scr_data");
                        t.kills[0] += 2;
                        return "【你已消灭" + t.kills[0] + "只蚊子】";
                    },
                    lostEvent: void 0
                },
                22: {
                    name: "小混混",
                    lv: 11,
                    hp: 1355,
                    maxHp: 1355,
                    att: 88,
                    def: 0,
                    publicVar: 0,
                    escapeRate: 50,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[50, 99, 2, 3], [100, 1, 1, 2]],
                    des: "“你笑啥？啊？！”",
                    skill: void 0,
                    defSkill: function () {
                        if (100 * Math.random() < 25) {
                            cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 9999;
                            return "【" + this.name + "使用「格挡」（25%）！】";
                        }
                        return "";
                    },
                    winEvent: void 0,
                    lostEvent: void 0
                },
                23: {
                    name: "丐帮304代弟子",
                    lv: 16,
                    hp: 1855,
                    maxHp: 1855,
                    att: 100,
                    def: 25,
                    publicVar: 0,
                    escapeRate: 60,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[50, 0, 1, 2], [100, 1, 1, 2], [5, 23, 1, 2]],
                    des: "“兄弟，这是我们的地盘耶~”",
                    skill: void 0,
                    defSkill: function () {
                        var t = e("scr_public"), n = t.role.att() - t.role.def();
                        if (100 * Math.random() < 25) {
                            e("scr_data").role.hp -= n;
                            return "【" + this.name + "使用「反震」，你损失" + n + "点生命！】";
                        }
                        return "";
                    },
                    winEvent: void 0,
                    lostEvent: void 0
                },
                24: {
                    name: "恶霸（精英）",
                    lv: 20,
                    hp: 750,
                    maxHp: 750,
                    att: 0,
                    def: 20,
                    publicVar: 0,
                    escapeRate: 80,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 0, 3, 3], [100, 1, 1, 2], [5, 17, 1, 2]],
                    des: "“不批准，也敢翻垃圾桶？”",
                    skill: function () {
                        var t = e("scr_data"), n = parseInt(Math.max(.25 * this.hp - o.def, 0));
                        t.role.hp -= n;
                        return "【" + this.name + "使用「咆哮」，你受到" + n + "点伤害】";
                    },
                    defSkill: void 0,
                    winEvent: void 0,
                    lostEvent: void 0
                },
                25: {
                    name: "麻城女警",
                    lv: 65,
                    hp: 2145,
                    maxHp: 2145,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 0,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 99, 1, 3], [100, 1, 1, 2], [15, 21, 1, 2]],
                    des: "“别跑！还不快回家喝奶去！”",
                    skill: function () {
                        var t = e("scr_data"), n = 100 * Math.random();
                        t = e("scr_data");
                        this.publicVar += 1;
                        if (this.publicVar <= 3) {
                            if (n < 75) return "【" + this.name + "操起电棍，向你打来！但是被你躲开啦~】";
                            t.role.hp -= 999;
                            return "【你被电棍击中！损失999点生命！】（25%）";
                        }
                        this.hp -= 9999;
                        return "";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        return "【" + this.name + "气急败坏！一棍打在自己脑门上，晕了过去\n_8(:з」∠)_】";
                    },
                    lostEvent: function () {
                        var t = e("scr_data");
                        e("scr_public");
                        t.role.hp = o.maxHp;
                        return "【你被带到警局，小姐姐给你包扎了下伤口。然后，被放了出来...生命全恢复！】";
                    }
                },
                26: {
                    name: "煤老板",
                    lv: 17,
                    hp: 545,
                    maxHp: 545,
                    att: 0,
                    def: 40,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 40,
                    lostHealth: 0,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 99, 10, 3]],
                    des: "“我真的是一分钱也没有啊”",
                    skill: function () {
                        e("scr_data").money += 1;
                        return "【" + this.name + "丢了你0.1元，准备要溜了！】";
                    },
                    defSkill: void 0,
                    winEvent: void 0,
                    lostEvent: void 0
                },
                27: {
                    name: "城管104小分队",
                    lv: 45,
                    hp: 1535,
                    maxHp: 1535,
                    att: 99,
                    def: 0,
                    publicVar: 0,
                    escapeRate: 30,
                    enemyEscapeRate: 0,
                    lostHealth: 0,
                    achieve: 3,
                    getAtt: 1,
                    drop: [[100, 11, 2, 1]],
                    des: "“这里不许睡觉！听到没！”",
                    skill: function () {
                        var t = e("scr_data"), n = parseInt(4.9 * Math.random());
                        if (0 == n) {
                            var a = 2 * this.att;
                            t.role.hp -= a;
                            return "【城管使用「真皮皮鞋」，踢中了你的屁股，你损失" + a + "点生命！】";
                        }
                        if (1 == n) {
                            cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= 30;
                            return "【城管使用「38元皮鞋」，踢中了你的腹部，你降低30点防御！】";
                        }
                        if (2 == n) {
                            cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= 30;
                            return "【城管使用「铁鞋」，踢中了你的胳膊，你降低30点攻击！】";
                        }
                        if (3 == n) {
                            this.publicVar += 2;
                            a = this.att * this.publicVar;
                            t.role.hp -= a;
                            return "【城管使用「碎骨鞋」，踢中了你的脸部，你的脸上开始流血，损失" + a + "点生命！】";
                        }
                        if (4 == n) {
                            a = 5 * this.att;
                            t.role.hp -= a;
                            return "【城管使用「破鞋」，踢中了你的蛋蛋，你受到" + a + "点伤害！】";
                        }
                    },
                    defSkill: function () {
                        var e = parseInt(.3 * (this.maxHp - this.hp)), t = 100 * Math.random(), n = "";
                        this.hp += e;
                        if (t < 40) {
                            cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 9999;
                            n = "【城管使用「防爆盾」！】";
                        }
                        return "【城管使用「急救」，恢复" + e + "点生命】" + n;
                    },
                    winEvent: void 0,
                    lostEvent: function () {
                        var t = e("scr_data");
                        t.itemNum[7] > 0 && (t.itemNum[7] -= 1);
                        return "【你被抢走1个..烟头..】";
                    }
                },
                31: {
                    name: "皮皮猴",
                    lv: 16,
                    hp: 575,
                    maxHp: 575,
                    att: 63,
                    def: 17,
                    publicVar: 0,
                    escapeRate: 50,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 0, 1, 1], [100, 1, 1, 2]],
                    des: "遭到怪物袭击！",
                    skill: function () {
                        var t = 100 * Math.random(), n = e("scr_data");
                        if (t < 15) {
                            this.enemyEscapeRate += 20;
                            if (n.itemNum[0] >= 1) {
                                n.itemNum[0] -= 1;
                                this.publicVar += 1;
                            }
                            return "【你被偷走「果子」*1】！";
                        }
                        return "";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        e("scr_data").itemNum[0] += this.publicVar;
                        return "【你抢回被偷的果子】";
                    },
                    lostEvent: void 0
                },
                32: {
                    name: "野猪",
                    lv: 24,
                    hp: 1100,
                    maxHp: 1100,
                    att: 0,
                    def: 40,
                    publicVar: 0,
                    escapeRate: 50,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 3, 1, 1], [100, 1, 1, 2]],
                    des: "遭到怪物袭击！",
                    skill: function () {
                        var t = 100 * Math.random(), n = e("scr_data");
                        if (t < 20) {
                            var a = Math.max(3 * (120 - o.def), 0);
                            n.role.hp -= a;
                            return "【野猪使用「冲撞」！你被猪撞飞啦！你损失" + a + "点生命！】";
                        }
                        this.hp -= 120;
                        return "【野猪使用「冲撞」！撞到树上啦！野猪损失120点生命！】";
                    },
                    defSkill: void 0,
                    winEvent: void 0,
                    lostEvent: void 0
                },
                33: {
                    name: "药贩",
                    lv: 32,
                    hp: 999,
                    maxHp: 999,
                    att: 140,
                    def: 0,
                    publicVar: 0,
                    escapeRate: 60,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 1, 2, 2]],
                    des: "“嘿嘿~我家里有132种颜色哟~”",
                    skill: function () {
                        var t = 100 * Math.random(), n = e("scr_data");
                        if (t < 30) {
                            if (n.itemNum[1] > 0) {
                                this.publicVar += 1;
                                n.itemNum[1] -= 1;
                                this.enemyEscapeRate += 20;
                                return "【你的伤药被偷啦！" + this.name + "准备要溜！】";
                            }
                            return "";
                        }
                        return "";
                    },
                    defSkill: function () {
                        if (30 < 100 * Math.random()) {
                            var e = parseInt(.1 * this.maxHp);
                            this.hp += e;
                            this.def += 20;
                            return "【" + this.name + "使用「猥琐2」，防御+20，生命+" + e + "】";
                        }
                        return "";
                    },
                    winEvent: function () {
                        e("scr_data").itemNum2[1] += this.publicVar;
                        return "【你抢回全部伤药】";
                    },
                    lostEvent: void 0
                },
                34: {
                    name: "流浪剑客",
                    lv: 45,
                    hp: 1535,
                    maxHp: 1535,
                    att: 0,
                    def: 46,
                    publicVar: 0,
                    escapeRate: 70,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[50, 4, 2, 1], [50, 1, 2, 1], [100, 1, 2, 2], [5, 26, 1, 2]],
                    des: "“在杀戮中，我终将绽放”",
                    skill: function () {
                        var t = e("scr_data"), n = parseInt(1.5 * (212 - o.def)), a = parseInt(.15 * this.hp);
                        this.hp -= a;
                        t.role.hp -= n;
                        return "【" + this.name + "使用「拼命2」，你损失" + n + "点生命，" + this.name + "损失" + a + "点生命】";
                    },
                    defSkill: void 0,
                    winEvent: void 0,
                    lostEvent: void 0
                },
                35: {
                    name: "黑熊（精英）",
                    lv: 60,
                    hp: 2025,
                    maxHp: 2025,
                    att: 110,
                    def: 60,
                    publicVar: 0,
                    escapeRate: 80,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 3, 2, 1], [100, 1, 2, 2]],
                    des: "发现一只奶奶的熊！（「咆哮」：自身当前血量越高，伤害越高）",
                    skill: function () {
                        var t = e("scr_data"), n = parseInt(Math.max(.2 * this.hp - o.def, 0));
                        t.role.hp -= n;
                        return "【黑熊使用「咆哮」，你受到" + n + "点伤害】";
                    },
                    defSkill: function () {
                        this.def += 10;
                        return "【黑熊使用「霸气护体」，增加10点防御】";
                    },
                    winEvent: void 0,
                    lostEvent: void 0
                },
                36: {
                    name: "果树",
                    lv: 999,
                    hp: 99999,
                    maxHp: 99999,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: 100,
                    enemyEscapeRate: 1,
                    lostHealth: 0,
                    achieve: 0,
                    getAtt: 1,
                    drop: [],
                    des: "“呜呜呜~”",
                    skill: function () {
                        this.publicVar += 1;
                        if (5 == this.publicVar) {
                            this.hp -= 999999;
                            return "【果树自杀了！】";
                        }
                        return "【果树正在哭~】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        var t = this.maxHp - this.hp - 999999, n = Math.max(Math.min(Math.round(t / 500 + 1), 4), 1);
                        e("scr_data").itemNum[0] += n;
                        return "【果树自杀了！你对果树造成" + t + "点伤害，获得【果子】*" + n + "】";
                    },
                    lostEvent: void 0
                },
                41: {
                    name: "熊孩子",
                    lv: 28,
                    hp: 999,
                    maxHp: 999,
                    att: 0,
                    def: 72,
                    publicVar: 0,
                    escapeRate: 100,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 0, 1, 1]],
                    des: "“大伙快来看哇——！来了个SX！”",
                    skill: function () {
                        this.publicVar += 1;
                        var e = Math.pow(this.publicVar, 2), t = 20 * e, n = Math.pow(this.publicVar + 1, 2) - e;
                        c.role.hp -= t;
                        this.hp += 50 * n;
                        return "【" + e + "个熊孩子向你扔石头！你损失" + t + "点生命！（" + n + "个新孩子加入战斗！）】";
                    },
                    defSkill: void 0,
                    winEvent: void 0,
                    lostEvent: void 0
                },
                42: {
                    name: "阿宾",
                    lv: 40,
                    hp: 1370,
                    maxHp: 1370,
                    att: 0,
                    def: 180,
                    publicVar: 0,
                    escapeRate: 60,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[80, 0, 1, 1]],
                    des: "“我的眼睛在哪里？我给钱你，请还给我！”",
                    skill: function () {
                        var e = 100 * Math.random(), t = 4 * Math.random() + 2;
                        if (e < 70) {
                            this.publicVar += 1;
                            if (this.publicVar < t) {
                                if (100 * Math.random() < 50) {
                                    c.money += 1;
                                    return "【阿宾给了你1毛钱！】";
                                }
                                var n = 599 - o.def;
                                c.role.hp -= n;
                                return "【“还我眼睛！”。阿宾咬了你一口，你损失" + n + "点生命！】";
                            }
                            n = 599 - o.def;
                            c.role.hp -= n;
                            return "【“还我眼睛！”。阿宾咬了你一口，你损失" + n + "点生命！】";
                        }
                        this.hp -= 200;
                        return "【“啊！~不要杀我！我没偷你们的东西！”。阿宾生命-200！】";
                    },
                    defSkill: void 0,
                    winEvent: void 0,
                    lostEvent: void 0
                },
                43: {
                    name: "卖片老板",
                    lv: 50,
                    hp: 1700,
                    maxHp: 1700,
                    att: 0,
                    def: 120,
                    publicVar: 0,
                    escapeRate: 60,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[60, 99, 2, 3], [40, 1, 1, 2]],
                    des: "“刚到新货，要不要来两张？”",
                    skill: function () {
                        var e = 100 * Math.random();
                        if (e < 20) {
                            c.money > 0 && (c.money -= 1);
                            return "【老板向你飞出一张《夫妻成长日记》。你损失1毛钱！】";
                        }
                        if (e < 80) {
                            var t = 399 - o.def;
                            c.role.hp -= t;
                            return "【老板向你甩出一把「老王飞刀」。你损失" + t + "点生命！】";
                        }
                        c.role.hp += 99;
                        return "【老板向你飞出一张《爱拼才会赢》。你恢复99点生命！】";
                    },
                    defSkill: void 0,
                    winEvent: void 0,
                    lostEvent: void 0
                },
                44: {
                    name: "阿龙",
                    lv: 70,
                    hp: 2385,
                    maxHp: 2385,
                    att: 0,
                    def: 167,
                    publicVar: 0,
                    escapeRate: 70,
                    enemyEscapeRate: 0,
                    lostHealth: 2,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 99, 2, 3], [5, 27, 1, 2]],
                    des: "“这里的小妹全归老子管！”",
                    skill: function () {
                        c.role.hp -= 382;
                        return "【阿龙使用「空气拳！」你损失382点生命！】";
                    },
                    defSkill: function () {
                        var e = parseInt(382 - .3 * o.att);
                        this.hp += e;
                        return "【阿龙使用「放气治疗！」，恢复" + e + "点生命！】";
                    },
                    winEvent: void 0,
                    lostEvent: void 0
                },
                45: {
                    name: "大龄站街妹",
                    lv: 30,
                    hp: 1040,
                    maxHp: 1040,
                    att: 0,
                    def: 99,
                    publicVar: 0,
                    escapeRate: 60,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 99, 2, 3]],
                    des: "“小伙子，来玩玩嘛，嗯~哼~”",
                    skill: function () {
                        if (c.money >= 1) {
                            c.money -= 1;
                            return "【站街妹在你身上蹭了蹭，你被摸走1毛钱！】！";
                        }
                        var e = Math.max(600 - o.def, 0);
                        c.role.hp -= e;
                        this.enemyEscapeRate += 100;
                        return "【“蛤？没钱！？...来人呀——！抓小流氓啦——！”你损失" + e + "点生命！】";
                    },
                    defSkill: function () {
                        this.escapeRate -= 10;
                        return "【站街使用「拖拽！」你逃跑几率-10%！】！";
                    },
                    winEvent: function () {
                        return "【“我说没偷你的钱就是没偷，你想怎么着？”】！";
                    },
                    lostEvent: void 0
                },
                1001: {
                    name: "金环蛇",
                    lv: 70,
                    hp: 2385,
                    maxHp: 2385,
                    att: 0,
                    def: 150,
                    publicVar: 0,
                    escapeRate: 50,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[80, 3, 1, 1]],
                    des: "滋溜~滋溜~",
                    skill: function () {
                        var t = Math.max(220 - o.def, 0) + 30;
                        this.publicVar += 1;
                        var n = t * this.publicVar;
                        e("scr_data").role.hp -= n;
                        return "【中毒：每回合损失" + n + "点生命（" + this.publicVar + "层）】";
                    },
                    defSkill: void 0,
                    winEvent: void 0,
                    lostEvent: void 0
                },
                1002: {
                    name: "铃女",
                    lv: 90,
                    hp: 3075,
                    maxHp: 3075,
                    att: 400,
                    def: 200,
                    publicVar: 0,
                    escapeRate: 40,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 99, 2, 3]],
                    des: "“喔~~呵~呵~呵~”",
                    skill: function () {
                        var e = 100 * Math.random();
                        if (e < 30) {
                            cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= parseInt(.5 * o.att);
                            return "【铃女使用「挠痒痒」，你笑得像个二愣子，攻击下降一半！】";
                        }
                        if (e < 70) {
                            if (c.money > 0) {
                                c.money -= 1;
                                return "【铃女使用「光速贴近」，你损失0.1元！】";
                            }
                            this.enemyEscapeRate += 100;
                            return "【铃女使用「光溜~(光速溜走)」！】";
                        }
                        this.def += 60;
                        return "【铃女使用「喵盾~」，防御+60！】";
                    },
                    defSkill: void 0,
                    winEvent: void 0,
                    lostEvent: void 0
                },
                1003: {
                    name: "流浪大叔",
                    lv: 120,
                    hp: 4035,
                    maxHp: 4035,
                    att: 0,
                    def: 280,
                    publicVar: 0,
                    escapeRate: 100,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[50, 0, 1, 2], [100, 1, 1, 2], [5, 26, 1, 2]],
                    des: "“小伙，来热热身子？”",
                    skill: function () {
                        var e = Math.max(parseInt(650 + 50 * this.publicVar - .5 * o.def), 0);
                        c.role.hp -= e;
                        return "【大叔使用「穿心.气合」，你损失" + e + "点生命，大叔攻击提高！】";
                    },
                    defSkill: function () {
                        var t = e("scr_public").role.att();
                        if (100 * Math.random() < 30) {
                            c.role.hp -= t;
                            return "【大叔使用「反震.碎骨」，你损失" + t + "点生命！】";
                        }
                        return "";
                    },
                    winEvent: void 0,
                    lostEvent: void 0
                },
                2001: {
                    name: "喵妹",
                    lv: 105,
                    hp: 3599,
                    maxHp: 3599,
                    att: 0,
                    def: 250,
                    publicVar: 0,
                    escapeRate: 40,
                    enemyEscapeRate: 8,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[30, 0, 1, 1], [30, 0, 1, 1], [30, 0, 1, 1], [30, 0, 1, 1], [3, 21, 1, 2]],
                    des: "“(づ◡ど)”",
                    skill: function () {
                        var e = parseInt(.2 * c.role.hp + 50);
                        c.role.hp -= e;
                        return "【喵妹使用「撩裙」，你损失" + e + "点生命(当前生命的20%)！】";
                    },
                    defSkill: function () {
                        c.role.hp -= 233;
                        cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= 99;
                        return "【喵妹使用「比心」，你降低99点攻击，233点生命！】";
                    },
                    winEvent: function () {
                        return "“呜呜呜~我只是想找个人玩玩嘛~(ಥ_ಥ)”";
                    },
                    lostEvent: function () {
                        return "“帅锅，记得再过来玩哈~❥(^_-)”";
                    }
                },
                2002: {
                    name: "高级金融分析师",
                    lv: 125,
                    hp: 8125,
                    maxHp: 8125,
                    att: 0,
                    def: 297,
                    publicVar: 0,
                    escapeRate: 40,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 99, 4, 3]],
                    des: "“你好，我是从华尔街回国的数据挖掘师！”",
                    skill: function () {
                        this.publicVar += 1;
                        if (this.publicVar % 3 == 0) {
                            if (c.money >= 4) {
                                c.money -= 4;
                                c.itemNum[4] += 1;
                                this.enemyEscapeRate += 30;
                                return "【分析师使用「嘴强王者」，你消费了0.4元，获得赠品「亚麻」*1！】";
                            }
                            c.itemNum[4] -= 3;
                            c.itemNum[4] < 0 && (c.itemNum[4] = 0);
                            this.enemyEscapeRate += 100;
                            return "【“mmp，你知道我时间有多宝贵吗？把东西还给我！”。你失去「果子」*3】";
                        }
                        if (c) {
                            this.escapeRate -= 30;
                            this.enemyEscapeRate += 5;
                            return "【分析师使用「抱大腿」，你逃跑率-30%！】";
                        }
                    },
                    defSkill: function () {
                        c.itemNum[0] += 1;
                        var e = parseInt(.1 * o.att);
                        cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= e;
                        return "【分析师丢给你一个果子，你获得「果子」*1，你攻击降低" + e + "！】";
                    },
                    winEvent: function () {
                        return "【“mmp！不买就算了~你的钱我不还啦~有本事你报警去呀~”】";
                    },
                    lostEvent: void 0
                },
                2003: {
                    name: "胖虎",
                    lv: 155,
                    hp: 5155,
                    maxHp: 5155,
                    att: 0,
                    def: 360,
                    publicVar: 0,
                    escapeRate: 30,
                    enemyEscapeRate: 0,
                    lostHealth: 2,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[30, 7, 1, 1], [30, 1, 1, 2], [30, 1, 1, 2], [5, 17, 1, 2]],
                    des: "“你是要挑战我胖虎？”",
                    skill: function () {
                        this.publicVar += 1;
                        if (this.publicVar % 3 != 0) {
                            var e = parseInt(o.def), t = parseInt(.2 * this.def * this.publicVar);
                            c.role.hp -= e + t;
                            return "【胖虎使用「黑虎袭胸！」，你损失" + e + "，附加" + t + "点流血！】";
                        }
                        var n = parseInt(this.def * this.publicVar);
                        c.role.hp -= n;
                        return "【胖虎使用「绝活！千年杀！」，你损失" + n + "点生命！】";
                    },
                    defSkill: function () {
                        var e = parseInt(.5 * this.def);
                        c.role.hp -= e;
                        this.def += 99;
                        return "【胖虎使用「白鹤起舞」，防御增加99，你受到" + e + "反弹伤害！】";
                    },
                    winEvent: function () {
                        return "“可以！论骚气，我胖虎服！”";
                    },
                    lostEvent: function () {
                        return "“你能拿我胖虎怎么办？”";
                    }
                },
                2004: {
                    name: "龙啸天",
                    lv: 195,
                    hp: 6470,
                    maxHp: 6470,
                    att: 1199,
                    def: 480,
                    publicVar: 0,
                    escapeRate: 40,
                    enemyEscapeRate: 0,
                    lostHealth: 3,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[50, 0, 1, 2], [10, 14, 1, 2]],
                    des: "“新来的，保护费没交？”",
                    skill: function () {
                        if (480 == this.def) {
                            var e = parseInt(this.publicVar * o.att * .2 + this.att - o.def), t = parseInt(.08 * o.def);
                            c.role.hp -= e;
                            cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= t;
                            return "【龙傲天使用「龙啸」！你受到" + e + "点伤害，防御-" + t + "！】";
                        }
                        return "";
                    },
                    defSkillfunction: function () {
                        if (100 * Math.random() < 25) {
                            this.publicVar += 1;
                            if (480 == this.def) {
                                this.def += 480;
                                this.att -= 480;
                                return "【龙啸天启动「防御姿态」，防御+480，攻击-480，气势+1！】";
                            }
                            this.def += 480;
                            this.att -= 680;
                            return "【龙啸天启动「战斗姿态」，防御-480，攻击+480，气势+1！】";
                        }
                        if (this.def > 480) {
                            var e = parseInt(this.publicVar * o.def * .4 + .2 * this.def), t = parseInt(.08 * o.att);
                            c.role.hp -= e;
                            cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= t;
                            return "【龙啸天使用「反震」！你受到" + e + "点伤害，攻击-" + t + "！】";
                        }
                        return "";
                    },
                    winEvent: function () {
                        c.money += 5;
                        return "“大哥！以后我就跟你混了！”【获得0.5元】";
                    },
                    lostEvent: function () {
                        c.money -= parseInt(.1 * c.money);
                        return "“你永远都学不乖？”【你损失10%金钱！】";
                    }
                },
                2005: {
                    name: "排球少女",
                    lv: 85,
                    hp: 2850,
                    maxHp: 2850,
                    att: 0,
                    def: 250,
                    publicVar: 0,
                    escapeRate: 50,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 1,
                    getAtt: 1,
                    drop: [[100, 99, 2, 3], [6, 27, 1, 2], [6, 26, 1, 2]],
                    des: "“我一定会进省队的！”「特注：随天数成长型对手」",
                    skill: function () {
                        var e = c.day;
                        if (e < 120) {
                            var t = cc.find("Event/scr_fight").getComponent("scr_fight").correct[1], n = parseInt(4 * e + .05 * o.maxHp - o.def - t);
                            c.role.hp -= n;
                            return "【少女使用「晴空霹雳.一段！」，你受到" + n + "点伤害】";
                        }
                        if (e < 150) {
                            var a = 2 * (c.day - 90);
                            cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= a;
                            t = cc.find("Event/scr_fight").getComponent("scr_fight").correct[1], n = parseInt(4 * e + .05 * o.maxHp - o.def - t);
                            c.role.hp -= n;
                            return "【少女使用「晴空霹雳.二段！」，你受到" + n + "点伤害，防御减少" + a + "！】";
                        }
                        a = parseInt(.1 * o.maxHp);
                        cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= a;
                        var i = parseInt(.1 * o.maxHp);
                        t = cc.find("Event/scr_fight").getComponent("scr_fight").correct[1], n = parseInt(4 * e + .05 * o.maxHp - o.def - t);
                        c.role.hp -= n;
                        this.hp += a;
                        return "【少女使用「晴空霹雳.三段！」，你受到" + n + "点伤害，防御减少" + a + "，少女恢复" + i + "点生命！】";
                    },
                    defSkill: function () {
                        var e = 100 * Math.random(), t = c.day - 90;
                        if (t < 40) {
                            if (e < t) {
                                cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999;
                                return "【少女使用「幻影旋风.一段！」】";
                            }
                            return "";
                        }
                        if (t < 65) {
                            if (e < t) {
                                var n = parseInt(.3 * o.def);
                                this.def += n;
                                cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999;
                                return "【少女使用「幻影旋风.二段！」，少女增加" + n + "点防御！】";
                            }
                            return "";
                        }
                        if (e < t) {
                            n = parseInt(.3 * o.def);
                            var a = parseInt(.7 * o.att);
                            this.def += n;
                            c.role.hp -= a;
                            cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999;
                            return "【少女使用「幻影旋风.三段！」，少女增加" + n + "点防御！你受到" + a + "点反弹伤害！】";
                        }
                        return "";
                    },
                    winEvent: function () {
                        return "“我一定会更强的！”";
                    },
                    lostEvent: void 0
                },
                3001: {
                    name: "吸血蝙蝠",
                    lv: 120,
                    hp: 12e3,
                    maxHp: 12e3,
                    att: 360,
                    def: 140,
                    publicVar: 0,
                    escapeRate: 20,
                    enemyEscapeRate: 0,
                    lostHealth: 2,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 16, 1, 2], [100, 16, 1, 2]],
                    des: "“乌~拉！”",
                    skill: function () {
                        var t = Math.max(parseInt(.5 * this.att), 0);
                        e("scr_data").role.hp -= t;
                        this.hp += t;
                        return "【你被吸取" + t + "点生命！】";
                    },
                    defSkill: void 0,
                    winEvent: void 0,
                    lostEvent: void 0
                },
                3002: {
                    name: "彩色蜘蛛",
                    lv: 150,
                    hp: 15e3,
                    maxHp: 15e3,
                    att: 450,
                    def: 175,
                    publicVar: 0,
                    escapeRate: 10,
                    enemyEscapeRate: 0,
                    lostHealth: 2,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 16, 1, 2], [100, 16, 1, 2]],
                    des: "",
                    skill: function () {
                        if (100 * Math.random() < 30) {
                            this.escapeRate -= 10;
                            cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= parseInt(.25 * o.att);
                            return "【" + this.name + "使用「束缚」，你攻击降低25%，逃跑率降低10%！】";
                        }
                        return "【" + this.name + "使用「束缚」，但是被你躲开啦！】";
                    },
                    defSkill: void 0,
                    winEvent: void 0,
                    lostEvent: void 0
                },
                3003: {
                    name: "黑头剑蛇",
                    lv: 190,
                    hp: 19999,
                    maxHp: 19999,
                    att: 599,
                    def: 221,
                    publicVar: 0,
                    escapeRate: 0,
                    enemyEscapeRate: 0,
                    lostHealth: 2,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 16, 1, 2], [100, 16, 1, 2]],
                    des: "",
                    skill: function () {
                        var t = parseInt(.2 * this.att), n = parseInt(.1 * o.def);
                        this.publicVar += 1;
                        var a = t * this.publicVar;
                        e("scr_data").role.hp -= a;
                        cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= n;
                        return "【毒酸：每回合损失" + a + "点生命，" + n + "点防御！】";
                    },
                    defSkill: void 0,
                    winEvent: void 0,
                    lostEvent: void 0
                },
                3004: {
                    name: "变异的巨型猫",
                    lv: 240,
                    hp: 24865,
                    maxHp: 24865,
                    att: 740,
                    def: 270,
                    publicVar: 0,
                    escapeRate: -10,
                    enemyEscapeRate: 0,
                    lostHealth: 2,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 16, 1, 2], [100, 16, 1, 2]],
                    des: "",
                    skill: function () {
                        if (100 * Math.random() < 30) {
                            var e = parseInt(.2 * c.role.hp);
                            c.role.hp -= e;
                            return "【巨猫使用「疯狂撕咬」你损失" + e + "点生命！】";
                        }
                        return "";
                    },
                    defSkill: function () {
                        if (100 * Math.random() < 30) {
                            cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 99999;
                            return "【" + this.name + "躲避你的攻击！】";
                        }
                        return "";
                    },
                    winEvent: void 0,
                    lostEvent: void 0
                },
                3005: {
                    name: "变异的流浪狗",
                    lv: 300,
                    hp: 3e4,
                    maxHp: 3e4,
                    att: 900,
                    def: 350,
                    publicVar: 0,
                    escapeRate: -20,
                    enemyEscapeRate: 0,
                    lostHealth: 2,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 16, 1, 2], [100, 16, 1, 2]],
                    des: "",
                    skill: function () {
                        var t = e("scr_data"), n = 100 * Math.random();
                        this.publicVar += 1;
                        if (n < 10 * this.publicVar + 20) {
                            var a = 2 * (this.att - o.def);
                            t.role.hp -= a;
                            return "【" + this.name + "使用「疯狂暴击」，你损失" + a + "点生命！】";
                        }
                        return "";
                    },
                    defSkill: function () {
                        this.att += parseInt(.1 * this.att);
                        this.def -= parseInt(.1 * this.def);
                        return "【流浪狗狂躁，攻击提高10%，防御降低10%！】";
                    },
                    winEvent: void 0,
                    lostEvent: void 0
                },
                3006: {
                    name: "变异的巨蜥",
                    lv: 375,
                    hp: 36e3,
                    maxHp: 36e3,
                    att: 1150,
                    def: 434,
                    publicVar: 0,
                    escapeRate: -30,
                    enemyEscapeRate: 0,
                    lostHealth: 2,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 16, 1, 2], [100, 16, 1, 2]],
                    des: "",
                    skill: function () {
                        cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= parseInt(.08 * o.def);
                        cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= parseInt(.08 * o.def);
                        return "【巨蜥使用「粘液」，你降低8%攻击，8%防御！】";
                    },
                    defSkill: function () {
                        var e = parseInt(.06 * this.maxHp);
                        this.hp += e;
                        return "【巨蜥使用自愈，恢复" + e + "点生命！】";
                    },
                    winEvent: void 0,
                    lostEvent: void 0
                },
                3007: {
                    name: "被割掉舌头的人",
                    lv: 475,
                    hp: 45e3,
                    maxHp: 45e3,
                    att: 1400,
                    def: 599,
                    publicVar: 0,
                    escapeRate: -40,
                    enemyEscapeRate: 0,
                    lostHealth: 2,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 16, 1, 2], [100, 16, 1, 2]],
                    des: "“啊~呜~呜~”",
                    skill: function () {
                        if (100 * Math.random() < 50) {
                            var e = this.att;
                            c.role.hp += e;
                            return "【无舌人对你使用「治疗」，你恢复" + e + "点生命】";
                        }
                        this.publicVar += 3;
                        var t = 3 * this.att - o.def;
                        c.role.hp -= t;
                        return "【无舌人对你使用「撕咬」，你损失" + t + "点生命，并附加3层毒素伤害！】";
                    },
                    defSkill: function () {
                        if (this.publicVar > 0) {
                            var t = e("scr_data"), n = parseInt(.1 * this.att);
                            this.publicVar += 1;
                            var a = n * this.publicVar;
                            t.role.hp -= a;
                            return "【毒素：每回合损失" + a + "点生命】";
                        }
                        return "";
                    },
                    winEvent: void 0,
                    lostEvent: void 0
                },
                3008: {
                    name: "看守的士兵",
                    lv: 600,
                    hp: 6e4,
                    maxHp: 6e4,
                    att: 1800,
                    def: 699,
                    publicVar: 0,
                    escapeRate: -50,
                    enemyEscapeRate: 0,
                    lostHealth: 2,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 16, 1, 2], [100, 16, 1, 2]],
                    des: "“这里不准进入！”",
                    skill: function () {
                        this.publicVar += 1;
                        if (this.publicVar % 4 == 0) {
                            var e = 5 * this.att;
                            c.role.hp -= e;
                            return "【" + this.name + "向你发射了一颗子弹！击中！你损失" + e + "点生命！】";
                        }
                        return "【“警告！赶紧离开~不然就开枪了~”】";
                    },
                    defSkill: function () {
                        if (100 * Math.random() < 30) {
                            cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 99999;
                            return "【" + this.name + "使用「防爆盾」！】";
                        }
                        return "";
                    },
                    winEvent: void 0,
                    lostEvent: void 0
                },
                3009: {
                    name: "军官",
                    lv: 800,
                    hp: 75e3,
                    maxHp: 75e3,
                    att: 2499,
                    def: 999,
                    publicVar: 0,
                    escapeRate: -60,
                    enemyEscapeRate: 0,
                    lostHealth: 2,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 16, 1, 2], [100, 16, 1, 2]],
                    des: "“你怕是没见过会用刀的人！”",
                    skill: function () {
                        if (4 == this.publicVar) {
                            var e = this.att * (1 + this.publicVar);
                            c.role.hp -= e;
                            return "【" + this.name + "使用「终结.斩杀！」，你受到" + e + "点生命！】";
                        }
                        this.publicVar += 1;
                        var t = this.att, n = parseInt(.1 * this.att * this.publicVar);
                        c.role.hp -= t + n;
                        cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= parseInt(.05 * o.def);
                        cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= parseInt(.05 * o.att);
                        return "【" + this.name + "使用「剔骨小刀！」你受到" + t + "点伤害，附加" + n + "流血，攻防降低5%！】";
                    },
                    defSkill: function () {
                        this.att += parseInt(.05 * this.att);
                        return "【" + this.name + "使用「集中」，" + this.name + "攻击强化！】";
                    },
                    winEvent: void 0,
                    lostEvent: void 0
                },
                3010: {
                    name: "科学家",
                    lv: 1e3,
                    hp: 99999,
                    maxHp: 99999,
                    att: 2999,
                    def: 1199,
                    publicVar: 0,
                    escapeRate: -70,
                    enemyEscapeRate: 0,
                    lostHealth: 2,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 16, 1, 2], [100, 16, 1, 2]],
                    des: "“入侵者，既然你来到这里，就不太可能出去了~”",
                    skill: function () {
                        this.publicVar += 1;
                        var e = parseInt(this.att * (1 + this.publicVar / 10));
                        c.role.hp -= e;
                        this.hp += e;
                        return "【" + this.name + "喷出「靶向喷雾」你受到" + e + "点伤害。" + this.name + "恢复" + e + "点生命，并收集1点能量！】";
                    },
                    defSkill: function () {
                        if (this.publicVar % 4 == 0) {
                            this.def = 899;
                            return "【" + this.name + "「无敌屏障」被击破！】";
                        }
                        if (this.publicVar % 2 == 0) {
                            this.def = 99999;
                            return "【" + this.name + "启动「无敌屏障」！】";
                        }
                        var e = parseInt(o.att * (.2 + this.publicVar / 10));
                        c.role.hp -= e;
                        return "【" + this.name + "开启「反射屏障」你受到" + e + "点伤害！】";
                    },
                    winEvent: void 0,
                    lostEvent: void 0
                },
                4001: {
                    name: "日本怪1",
                    lv: 1e3,
                    hp: 99999,
                    maxHp: 99999,
                    att: 2999,
                    def: 1199,
                    publicVar: 0,
                    escapeRate: -70,
                    enemyEscapeRate: 0,
                    lostHealth: 2,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 16, 1, 2], [100, 16, 1, 2]],
                    des: "“入侵者，既然你来到这里，就不太可能出去了~”",
                    skill: function () {
                        this.publicVar += 1;
                        var e = parseInt(this.att * (1 + this.publicVar / 10));
                        c.role.hp -= e;
                        this.hp += e;
                        return "【" + this.name + "喷出「靶向喷雾」你受到" + e + "点伤害。" + this.name + "恢复" + e + "点生命，并收集1点能量！】";
                    },
                    defSkill: function () {
                        if (this.publicVar % 4 == 0) {
                            this.def = 899;
                            return "【" + this.name + "「无敌屏障」被击破！】";
                        }
                        if (this.publicVar % 2 == 0) {
                            this.def = 99999;
                            return "【" + this.name + "启动「无敌屏障」！】";
                        }
                        var e = parseInt(o.att * (.2 + this.publicVar / 10));
                        c.role.hp -= e;
                        return "【" + this.name + "开启「反射屏障」你受到" + e + "点伤害！】";
                    },
                    winEvent: void 0,
                    lostEvent: void 0
                },
                100: {
                    name: "女贼(呆萌)",
                    lv: 1,
                    hp: 60,
                    maxHp: 60,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 0,
                    achieve: 0,
                    getAtt: 1,
                    drop: [],
                    des: "把钱交出来<(｀^′)>",
                    skill: function () {
                        var t = e("scr_data");
                        if (t.money > 0) {
                            t.money -= 1;
                            this.publicVar += 1;
                            return "【你被偷走0.1元(笑)】";
                        }
                        return "【“哼！不跟你玩了！”】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        var t = e("scr_data"), n = Math.min(10, this.publicVar + 3);
                        t.money += n;
                        return "【你从女贼身上抢到" + (n / 10).toFixed(1) + "元】";
                    },
                    lostEvent: void 0
                },
                101: {
                    name: "胡渣壮汉（精英）",
                    lv: 12,
                    hp: 485,
                    maxHp: 485,
                    att: 30,
                    def: 0,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 3,
                    achieve: 2,
                    getAtt: 2,
                    drop: [[100, 1, 2, 2], [100, 7, 1, 2], [100, 12, 1, 2], [100, 20, 1, 2]],
                    des: "“给老子滚远点~！”",
                    skill: function () {
                        this.att += 7;
                        return "【壮汉暴跳如雷，攻击强化！】";
                    },
                    defSkill: function () {
                        var t = e("scr_public"), n = t.role.att() - t.role.def();
                        if (100 * Math.random() < 35) {
                            e("scr_data").role.hp -= n;
                            return "【壮汉使用「反震」，你损失" + n + "点生命！】";
                        }
                        return "";
                    },
                    winEvent: function () {
                        e("scr_data").choice[0] = 0;
                        return "【“你给老子等着！”】";
                    },
                    lostEvent: function () {
                        var t = e("scr_data");
                        t.itemNum2[0] -= t.itemNum2[0];
                        t.itemNum2[7] -= t.itemNum2[7];
                        return "【你损失全部的熟肉和香烟！】【“别让老子再看到你，听见没！”】";
                    }
                },
                102: {
                    name: "西装男(精英)",
                    lv: 10,
                    hp: 410,
                    maxHp: 410,
                    att: 30,
                    def: 0,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 3,
                    achieve: 1,
                    getAtt: 1,
                    drop: [[100, 1, 4, 2], [50, 25, 1, 2]],
                    des: "“小兄弟，过来一下”",
                    skill: function () {
                        this.publicVar += 1;
                        if (this.publicVar % 3 == 0) {
                            this.hp += 99;
                            this.att += 5;
                            return "【" + this.name + "使用「治疗」，恢复99点生命，攻击提高5点！】";
                        }
                        return "";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        e("scr_data").choice[0] = 1;
                        return "【" + this.name + "逃走了！】";
                    },
                    lostEvent: function () {
                        var t = e("scr_data"), n = t.money;
                        t.money -= n;
                        return "【你损失全部的钱！】";
                    }
                },
                103: {
                    name: "刀疤男（BOSS）",
                    lv: 23,
                    hp: 855,
                    maxHp: 855,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 3,
                    achieve: 3,
                    getAtt: 3,
                    drop: [[100, 11, 1, 2]],
                    des: "“x你x！”",
                    skill: function () {
                        var t = e("scr_data"), n = parseInt(Math.max(.25 * (this.maxHp - this.hp) - o.def + 20, 0)), a = parseInt(.3 * n);
                        this.hp += a;
                        t.role.hp -= n;
                        return "【刀疤男使用「嗜血狂魔」，你受到" + n + "点伤害,刀疤男恢复" + a + "点生命】";
                    },
                    defSkill: function () {
                        if (100 * Math.random() < 15) {
                            cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 9999;
                            return "【刀疤男使用「格挡」（15%）！】";
                        }
                        return "";
                    },
                    winEvent: function () {
                        var t = e("scr_data");
                        t.choice[0] = 1;
                        t.publicVar[5] = 1;
                        return "【" + this.name + "被人救走了！】";
                    },
                    lostEvent: function () {
                        var t = e("scr_data");
                        t.energy = 0;
                        t.choice[0] = 2;
                        return "【你受重伤！损失全部的精力】";
                    }
                },
                104: {
                    name: "看守者",
                    lv: 15,
                    hp: 540,
                    maxHp: 540,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 11, 1, 1]],
                    des: "“我叫你滚啦！——”",
                    skill: function () {
                        var t = Math.max(40 - o.def, 0);
                        this.hp -= 50;
                        e("scr_data").role.hp -= t;
                        return "【看守者使用「拼命」，对你造成" + t + "点伤害，看守者损失50点生命】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        var t = e("scr_data");
                        t.choice[3] = 2;
                        return "【你已拥有白色粉末*" + t.itemNum[11] + "】";
                    },
                    lostEvent: void 0
                },
                105: {
                    name: "追杀者",
                    lv: 35,
                    hp: 1498,
                    maxHp: 1498,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 3,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 11, 2, 1]],
                    des: "“我不跟你多BB哈~杀手得有个B样！”",
                    skill: function () {
                        var t = e("scr_data"), n = 100 * Math.random();
                        this.publicVar += 1;
                        if (this.publicVar <= 20) {
                            if (n < 85) return "【追杀者拿起铁锹，向你发射了一颗子弹！但是未命中】";
                            var a = 699 - o.def;
                            t.role.hp -= a;
                            return "【追杀者拿起铁锹，向你发射了一颗子弹！击中！你损失" + a + "点生命！】";
                        }
                        return "【追杀者拿起铁锹，但是发现没子弹啦！】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        return "【你已拥有白色粉末*" + e("scr_data").itemNum[11] + "】";
                    },
                    lostEvent: function () {
                        e("scr_data").itemNum[11] = 0;
                        return "，你失去所有【白色粉末】";
                    }
                },
                106: {
                    name: "劫匪（精英）",
                    lv: 40,
                    hp: 1370,
                    maxHp: 1370,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 2,
                    achieve: 2,
                    getAtt: 1,
                    drop: [[100, 99, 6, 3], [50, 23, 1, 2]],
                    des: "“别挡老子路！”",
                    skill: function () {
                        var t = Math.max(100 - o.def, 0);
                        this.publicVar += 1;
                        var n = t * this.publicVar;
                        e("scr_data").role.hp -= n;
                        return "【劫匪使用「放血」，每回合损失" + n + "点生命（" + this.publicVar + "层）】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        return "“大爷饶命啊！m(_ _)m”";
                    },
                    lostEvent: function () {
                        return "“叫NM多管闲事！”";
                    }
                },
                107: {
                    name: "不干净的流浪汉（精英）",
                    lv: 50,
                    hp: 1700,
                    maxHp: 1700,
                    att: 243,
                    def: 50,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 3,
                    achieve: 1,
                    getAtt: 1,
                    drop: [[100, 25, 1, 2], [100, 24, 1, 2], [50, 27, 1, 2]],
                    des: "“我长啥样，心里会没个B数？”",
                    skill: void 0,
                    defSkill: function () {
                        var t = e("scr_public"), n = t.role.att() - t.role.def();
                        if (100 * Math.random() < 40) {
                            e("scr_data").role.hp -= n;
                            return "【流浪汉使用「反震」，你损失" + n + "点生命！】";
                        }
                        return "";
                    },
                    winEvent: function () {
                        return "“你给老子等着！老子还有来的”";
                    },
                    lostEvent: function () {
                        return "“老子脸上写着王八蛋？”";
                    }
                },
                108: {
                    name: "通缉犯（BOSS）",
                    lv: 60,
                    hp: 2199,
                    maxHp: 2199,
                    att: 0,
                    def: 20,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 999,
                    achieve: 5,
                    getAtt: 5,
                    drop: [[100, 11, 2, 1], [100, 8, 1, 2], [100, 27, 2, 2], [100, 17, 1, 2]],
                    des: "“cnm！别坏老子好事！”",
                    skill: function () {
                        var t = e("scr_data"), n = e("scr_data2");
                        this.publicVar += 1;
                        var a = 30 * this.publicVar, i = Math.max(parseInt(180 + 10 * this.publicVar - o.def - 40 * n.gameData[0]), 0);
                        t.role.hp -= i + a;
                        var c = parseInt(.05 * this.hp);
                        this.hp -= c;
                        return "【" + this.name + "使用「拼命3」，你损失" + i + "点生命，每回合损失" + a + "点生命（流血），杀人犯损失" + c + "点生命】";
                    },
                    defSkill: function () {
                        var t = e("scr_data"), n = this.def;
                        this.def += 20;
                        t.role.hp -= n;
                        return "【杀人犯使用「霸气护体2」，增加20点防御，你受到" + n + "点伤害】";
                    },
                    winEvent: function () {
                        var t = e("scr_data");
                        t.distance += 1;
                        t.publicVar[3] = 1;
                        return "";
                    },
                    lostEvent: function () {
                        var t = e("scr_data"), n = e("scr_data2");
                        t.ifFollow[0] = 0;
                        t.plotId = Math.min(2 + n.gameData[0], 4);
                        e("scr_public").save();
                        cc.director.loadScene("plot");
                        return "";
                    }
                },
                109: {
                    name: "城中村大佬（精英）",
                    lv: 70,
                    hp: 2460,
                    maxHp: 2460,
                    att: 0,
                    def: 141,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 3,
                    achieve: 1,
                    getAtt: 1,
                    drop: [],
                    des: "“你是个sb？”",
                    skill: function () {
                        var e = parseInt(.15 * (this.maxHp - this.hp)), t = 317 + o.def;
                        c.role.hp -= t;
                        return "【dalao使用「穿透」，你损失" + t + "点生命，小兰使用「崇拜」，dalao恢复" + e + "点生命！】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        c.publicVar2[15] += 1;
                        if (0 == c.publicVar2[27]) {
                            c.publicVar2[27] = 1;
                            return "你从大佬身上找到一本书，获得《坎贝尔骨科手术学》书籍（请去看书界面使用）！";
                        }
                        return "";
                    },
                    lostEvent: function () {
                        c.money = 0;
                        return "你损失全部的金钱！！！";
                    }
                },
                110: {
                    name: "城市治安管理408分队",
                    lv: 199,
                    hp: 6222,
                    maxHp: 6222,
                    att: 405,
                    def: 200,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 2,
                    achieve: 1,
                    getAtt: 1,
                    drop: [[60, 7, 1, 2], [60, 7, 1, 2], [60, 7, 1, 2]],
                    des: "“不许睡觉，听到没！”",
                    skill: void 0,
                    defSkill: void 0,
                    winEvent: function () {
                        if (0 == c.publicVar[8]) {
                            c.ifFollow[1] = 0;
                            c.publicVar[7] -= 700;
                            c.friendSkill[1] = 0;
                            c.friendSkill[3] = 0;
                            c.friendSkill[4] = 0;
                            c.friendSkill[5] = 0;
                            c.friendSkill[6] = 0;
                            c.friendSkill[8] = 0;
                            i.init();
                        }
                        return "“可以，你们两个给我等好喽！”";
                    },
                    lostEvent: function () {
                        if (0 == c.publicVar[8]) {
                            c.ifFollow[1] = 0;
                            c.publicVar[7] -= 700;
                            c.friendSkill[1] = 0;
                            c.friendSkill[3] = 0;
                            c.friendSkill[4] = 0;
                            c.friendSkill[5] = 0;
                            c.friendSkill[6] = 0;
                            c.friendSkill[8] = 0;
                        }
                        c.money -= parseInt(.5 * c.money);
                        i.init();
                        return "你损失一半的金钱！";
                    }
                },
                111: {
                    name: "城中村大佬（精英）",
                    lv: 70,
                    hp: 2460,
                    maxHp: 2460,
                    att: 0,
                    def: 121,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 3,
                    achieve: 1,
                    getAtt: 1,
                    drop: [],
                    des: "“你是个sb？”",
                    skill: function () {
                        var e = 317 + o.def;
                        c.role.hp -= e;
                        return "【大佬使用「穿透」，你损失" + e + "点生命！】";
                    },
                    defSkill: function () {
                        var e = parseInt(.15 * (o.maxHp - c.role.hp) + 50);
                        c.role.hp += e;
                        return "【小兰对你使用「协助」，你恢复" + e + "点生命！】";
                    },
                    winEvent: function () {
                        c.publicVar2[15] += 1;
                        if (0 == c.publicVar2[27]) {
                            c.publicVar2[27] = 1;
                            return "你从大佬身上找到一本书，获得《坎贝尔骨科手术学》书籍（请去看书界面使用）！";
                        }
                        return "";
                    },
                    lostEvent: function () {
                        return "“老子打自己的女人，要你管？”";
                    }
                },
                112: {
                    name: "皮衣男（小BOSS）",
                    lv: 199,
                    hp: 19999,
                    maxHp: 19999,
                    att: 0,
                    def: 499,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 3,
                    achieve: 1,
                    getAtt: 1,
                    drop: [],
                    des: "“你和她啥关系？”",
                    skill: function () {
                        var e = parseInt(699 - .5 * o.def - cc.find("Event/scr_fight").getComponent("scr_fight").correct[1]);
                        if (4 == this.publicVar) {
                            var t = 3 * e;
                            c.role.hp -= t;
                            return "【" + this.name + "使用「终结.剔骨」，你受到" + t + "点生命！】";
                        }
                        cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= parseInt(.05 * o.def);
                        cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= parseInt(.05 * o.att);
                        this.publicVar += 1;
                        var n = parseInt(49 * this.publicVar);
                        c.role.hp -= e + n;
                        return "【" + this.name + "使用「放血」你受到" + e + "点伤害，附加" + n + "流血，攻防降低5%！】";
                    },
                    defSkill: function () {
                        var t = e("scr_public"), n = parseInt(.6 * (t.role.att() - t.role.def()));
                        if (100 * Math.random() < 35) {
                            e("scr_data").role.hp -= n;
                            return "【皮衣男使用「反震」，你损失" + n + "点生命！】";
                        }
                        return "";
                    },
                    winEvent: function () {
                        if (0 == c.publicVar2[25]) {
                            c.publicVar2[25] = 1;
                            return "你从大佬身上找到一本书，获得《儿童手工DIY》书籍（请去看书界面使用）！";
                        }
                        return "";
                    },
                    lostEvent: function () {
                        return "“老子打自己的女人，要你管？”";
                    }
                },
                113: {
                    name: "皮衣男（小BOSS）",
                    lv: 199,
                    hp: 19999,
                    maxHp: 19999,
                    att: 0,
                    def: 499,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 3,
                    achieve: 1,
                    getAtt: 1,
                    drop: [],
                    des: "“你和她啥关系？”",
                    skill: function () {
                        var e = parseInt(499 - .3 * o.def - .5 * cc.find("Event/scr_fight").getComponent("scr_fight").correct[1]);
                        if (4 == this.publicVar) {
                            var t = 3 * e;
                            c.role.hp -= t;
                            return "【" + this.name + "使用「终结.剔骨」，你受到" + t + "点生命！】";
                        }
                        cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= parseInt(.05 * o.def);
                        cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= parseInt(.05 * o.att);
                        this.publicVar += 1;
                        var n = parseInt(39 * this.publicVar);
                        c.role.hp -= e + n;
                        return "【" + this.name + "使用「放血」你受到" + e + "点伤害，附加" + n + "流血，攻防降低5%！】";
                    },
                    defSkill: function () {
                        var t = e("scr_public"), n = t.role.att() - t.role.def();
                        if (100 * Math.random() < 35) {
                            e("scr_data").role.hp -= n;
                            return "【皮衣男使用「反震」，你损失" + n + "点生命！】";
                        }
                        return "";
                    },
                    winEvent: function () {
                        if (0 == c.publicVar2[25]) {
                            c.publicVar2[25] = 1;
                            return "你从大佬身上找到一本书，获得《儿童手工DIY》书籍（请去看书界面使用）！";
                        }
                        return "";
                    },
                    lostEvent: void 0
                },
                //挑战怪物传送门
                201: {
                    name: "眼镜王蛇（精英）",
                    lv: 15,
                    hp: 545,
                    maxHp: 545,
                    att: 1,
                    def: 0,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 1,
                    getAtt: 1,
                    drop: [[100, 3, 2, 1], [100, 23, 1, 2]],
                    des: "呼哧~呼哧~",
                    skill: function () {
                        var t = Math.max(60 - o.def, 0);
                        this.publicVar += 1;
                        var n = t * this.publicVar;
                        e("scr_data").role.hp -= n;
                        return "【中毒：每回合损失" + n + "点生命（" + this.publicVar + "层）】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        e("scr_data").choice[6] += 1;
                        return "";
                    },
                    lostEvent: void 0
                },
                202: {
                    name: "逃犯（精英）",
                    lv: 25,
                    hp: 850,
                    maxHp: 850,
                    att: 80,
                    def: 20,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 1,
                    getAtt: 1,
                    drop: [[100, 1, 2, 2], [100, 17, 1, 2]],
                    des: "",
                    skill: function () {
                        var t = e("scr_data"), n = parseInt(Math.max(.2 * this.hp - o.def, 0));
                        t.role.hp -= n;
                        return "【" + this.name + "使用「咆哮」，你受到" + n + "点伤害】";
                    },
                    defSkillfunction: function () {
                        var t = e("scr_public"), n = t.role.att() - t.role.def();
                        if (100 * Math.random() < 30) {
                            e("scr_data").role.hp -= n;
                            return "【" + this.name + "使用「反震」，你损失" + n + "点生命！】";
                        }
                        return "";
                    },
                    winEvent: function () {
                        e("scr_data").choice[6] += 1;
                        return "";
                    },
                    lostEvent: void 0
                },
                203: {
                    name: "机械人（被害妄想症）",
                    lv: 45,
                    hp: 1500,
                    maxHp: 1500,
                    att: 0,
                    def: 60,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 1,
                    getAtt: 1,
                    drop: [[100, 17, 1, 2], [100, 99, 6, 3], [100, 17, 1, 2]],
                    des: "“我必需得这么走路，别人才不会害我”",
                    skill: function () {
                        var t = e("scr_data");
                        if (100 * Math.random() < 70) return "【机械人使用「电钻！」，但是戳歪了！】";
                        var n = 699 - o.def;
                        t.role.hp -= n;
                        return "【机械人使用「电钻！」，戳中！你损失" + n + "点生命】";
                    },
                    defSkill: function () {
                        cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= 40;
                        return "【机械人使用「神奇舞蹈」，太逗啦！你降低40点攻击】";
                    },
                    winEvent: function () {
                        e("scr_data").choice[6] += 1;
                        return "";
                    },
                    lostEvent: void 0
                },
                204: {
                    name: "女剑士（中二病他姐）",
                    lv: 60,
                    hp: 2100,
                    maxHp: 2100,
                    att: 310,
                    def: 0,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 1,
                    getAtt: 1,
                    drop: [[100, 27, 1, 2], [100, 99, 8, 3]],
                    des: "“我在找一个小男孩”",
                    skill: function () {
                        if (100 * Math.random() < 50) {
                            cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= 20;
                            return "【女剑士使用「弱点打击」，你降低20点防御】";
                        }
                        cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= 40;
                        return "【女剑士使用「弱点打击」，你降低40点攻击】";
                    },
                    defSkill: function () {
                        if (100 * Math.random() < Math.min(20 + 5 * this.publicVar, 40)) {
                            var t = parseInt(.5 * o.att);
                            e("scr_data").role.hp -= t;
                            cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 99999;
                            return "【" + this.name + "使用「格挡」「反弹」，你减少" + t + "点生命！】";
                        }
                        return "";
                    },
                    winEvent: function () {
                        var t = e("scr_data");
                        t.choice[6] += 1;
                        if (0 == t.skillLv[18]) {
                            t.skillLv[18] = 1;
                            return "【激活特性「攻击强化2」】";
                        }
                        return "";
                    },
                    lostEvent: void 0
                },
                205: {
                    name: "天下第一乖（么么啾）",
                    lv: 80,
                    hp: 2680,
                    maxHp: 2680,
                    att: 0,
                    def: 80,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 1,
                    getAtt: 1,
                    drop: [[100, 21, 1, 2], [100, 26, 2, 2]],
                    des: "“m(_ _)m主银饶命啊！我是你的女仆(*･ω-q)  ”",
                    skill: function () {
                        var t = e("scr_data"), n = 100 * Math.random();
                        if (n < 30) {
                            t.role.hp += 233;
                            return "【么么啾给在给你捏脚，你恢复233点生命！】";
                        }
                        if (n >= 30 && n < 70) {
                            cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= 99;
                            return "【么么啾袭击了你的胸部，你降低130点防御】";
                        }
                        if (n >= 70) {
                            var a = parseInt(3 * (660 - o.def));
                            t.role.hp -= a;
                            return "【么么啾使用「大铁锤」——绝后一击！你损失" + a + "点生命！】";
                        }
                    },
                    defSkillfunction: function () {
                        cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= 40;
                        return "【么么啾使用「萌你一脸」，你降低40点攻击！】";
                    },
                    winEvent: function () {
                        e("scr_data").choice[6] += 1;
                        return "“呜呜呜，主银你不要我吗\n(ಥ﹏ಥ)”";
                    },
                    lostEvent: void 0
                },
                206: {
                    name: "红狼",
                    lv: 120,
                    hp: 12e3,
                    maxHp: 12e3,
                    att: 360,
                    def: 140,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 9, 3, 1], [100, 23, 2, 2]],
                    des: "“喵？”「晓风提示：从此怪开始，后续怪血量激增，但是攻防下调~」",
                    skill: function () {
                        var t = e("scr_data"), n = 100 * Math.random();
                        this.publicVar += 1;
                        if (n < Math.min(20 + 4 * this.publicVar, 50)) {
                            var a = parseInt(1.5 * this.att - o.def);
                            t.role.hp -= a;
                            return "【" + this.name + "使用「暴击」，你损失" + a + "点生命！】";
                        }
                        return "";
                    },
                    defSkill: function () {
                        if (100 * Math.random() < Math.min(20 + 4 * this.publicVar, 50)) {
                            cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 99999;
                            return "【" + this.name + "躲避了你的攻击！】";
                        }
                        return "";
                    },
                    winEvent: function () {
                        c.choice[6] += 1;
                        return "";
                    },
                    lostEvent: void 0
                },
                207: {
                    name: "8号拳师",
                    lv: 155,
                    hp: 15155,
                    maxHp: 15155,
                    att: 470,
                    def: 180,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 26, 2, 2], [100, 20, 2, 2]],
                    des: "“已经好多年没人来过这里啦~”",
                    skill: function () {
                        this.publicVa += 1;
                        var e = this.att, t = parseInt(.1 * this.att * this.publicVar);
                        c.role.hp -= e + t;
                        cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= parseInt(.05 * o.def);
                        return "【" + this.name + "使用「碎骨爆裂拳！」你受到" + e + "点伤害，附加" + t + "流血，防御降低5%！】";
                    },
                    defSkill: function () {
                        this.att += parseInt(.05 * this.att);
                        return "【" + this.name + "使用「集中」，" + this.name + "攻击强化！】";
                    },
                    winEvent: function () {
                        c.choice[6] += 1;
                        return "";
                    },
                    lostEvent: void 0
                },
                209: {
                    name: "双枪老太婆",
                    lv: 245,
                    hp: 24120,
                    maxHp: 24120,
                    att: 0,
                    def: 280,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 14, 6, 2], [100, 22, 2, 2]],
                    des: "“其实我最擅长的不是枪~”",
                    skill: function () {
                        if (100 * Math.random() < 50) {
                            var e = parseInt(.25 * c.role.hp);
                            c.role.hp -= e;
                            return "【" + this.name + "使用「P18C手枪」！你损失" + e + "点生命(当前生命的25%)！】";
                        }
                        e = parseInt(.25 * (o.maxHp - c.role.hp));
                        c.role.hp -= e;
                        return "【" + this.name + "使用「AKM突击枪」！你损失" + e + "点生命(已损失生命的25%)！】";
                    },
                    defSkill: function () {
                        if (100 * Math.random() < 30 + 10 * this.publicVar) {
                            this.publicVar += 1;
                            cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 99999;
                            return "【" + this.name + "闪避了你的攻击！并且下次闪避概率提升！】";
                        }
                        return "";
                    },
                    winEvent: function () {
                        var t = e("scr_data");
                        t.choice[6] += 1;
                        t.randomEvent[3] += 1;
                        if (0 == t.skillLv[22]) {
                            t.skillLv[22] = 1;
                            return "【激活特性「攻击强化3」】";
                        }
                        return "";
                    },
                    lostEvent: void 0
                },
                210: {
                    name: "自爆蛋",
                    lv: 300,
                    hp: 99999,
                    maxHp: 99999,
                    att: 0,
                    def: 350,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 13, 1, 2], [100, 25, 2, 2]],
                    des: "惹不起~惹不起~",
                    skill: function () {
                        this.def += parseInt(.1 * this.def);
                        return "【" + this.name + "就这么静静的看着你~】";
                    },
                    defSkill: function () {
                        if (this.publicVar < 8) {
                            var e = parseInt(this.def);
                            c.role.hp -= e;
                            return "【" + this.name + "「蛋身一震」！你受到" + e + "点反弹伤害！】";
                        }
                        c.role.hp -= 9999999;
                        return "【自爆！！！！】";
                    },
                    winEvent: function () {
                        c.choice[6] += 1;
                        return "";
                    },
                    lostEvent: function () {
                        return "【天啦噜！自爆蛋爆炸啦啊啊啊啊！你被炸飞啦~】";
                    }
                },
                211: {
                    name: "机甲少女",
                    lv: 380,
                    hp: 36570,
                    maxHp: 36570,
                    att: 1143,
                    def: 440,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 27, 4, 2], [100, 21, 2, 2]],
                    des: "“(ಡωಡ)hiahiahia”\n「碾压」技能效果：对于防御低于自身的目标造成2倍伤害",
                    skill: function () {
                        if (o.def < this.def) {
                            var e = 2 * (this.att - o.def);
                            c.role.hp -= e;
                            return "【机甲少女使用「碾压」对你造成" + e + "点伤害】";
                        }
                        this.def += parseInt(.3 * this.def);
                        return "【机甲少女使用「护甲强化」防御增加30%】";
                    },
                    defSkill: function () {
                        if (100 * Math.random() < Math.min(20 + 5 * this.publicVar, 100)) {
                            var e = parseInt(o.att);
                            c.role.hp -= e;
                            return "【机甲少女使用「机甲护体」，你受到" + e + "点弹刀伤害！（你攻击的100%）】";
                        }
                        this.publicVar += 1;
                        return "【机甲少女「机甲护体」触发几率提高！】";
                    },
                    winEvent: function () {
                        c.choice[6] += 1;
                        return "";
                    },
                    lostEvent: void 0
                },
                213: {
                    name: "炮击少女",
                    lv: 600,
                    hp: 60815,
                    maxHp: 60815,
                    att: 1804,
                    def: 700,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 26, 4, 2], [100, 20, 4, 2]],
                    des: "“要来一炮吗？”",
                    skill: function () {
                        if (this.publicVar % 3 == 0) return "【" + this.name + "使用「战争践踏！」，你被一脚剁飞啦！】";
                        if (this.publicVar % 3 == 1) {
                            var e = 4 * this.att;
                            c.role.hp -= e;
                            return "【" + this.name + "使用「对空一击！」！你损失" + e + "点生命！】";
                        }
                        if (this.publicVar % 3 == 2) {
                            this.att += parseInt(.4 * this.att);
                            this.hp += parseInt(.3 * this.maxHp);
                            return "【" + this.name + "坐地点了一根烟，吐了一个烟圈，生命恢复30%，攻击提高40%！】";
                        }
                        this.publicVar += 1;
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        c.choice[6] += 1;
                        return "";
                    },
                    lostEvent: void 0
                },
                214: {
                    name: "吾王",
                    lv: 750,
                    hp: 72e3,
                    maxHp: 72e3,
                    att: 2299,
                    def: 999,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 10, 1, 2], [100, 11, 1, 2]],
                    des: "“嗷嗷嗷~吃早饭咯~”\n「不屈的意志！」技能效果:如果对方生命百分比高于自身，则造成3倍无视防御的伤害！并恢复自身10%生命",
                    skill: function () {
                        if (c.role.hp / o.maxHp / (this.hp / this.maxHp) > 1) {
                            var e = 3 * this.att;
                            c.role.hp -= e;
                            this.hp += parseInt(.1 * this.maxHp);
                            this.publicVar -= 3;
                            return "【吾王使用「不屈的意志！」，造成" + e + "点伤害！自身恢复10%生命！吾王怒气减3】";
                        }
                        if (100 * Math.random() < Math.min(30 + 5 * this.publicVar, 100)) {
                            e = parseInt(1.2 * this.att);
                            c.role.hp -= e;
                            this.publicVar -= 1;
                            return "【吾王使用「誓约胜利之剑！暴击！」，造成" + e + "点伤害！吾王怒气减1】";
                        }
                        e = this.att - o.def;
                        c.role.hp -= e;
                        this.hp += parseInt(.1 * this.maxHp);
                        this.publicVar += 1;
                        return "【吾王使用「誓约胜利之剑！」，造成" + e + "点伤害，并获得2点怒气（下次暴击率提高！）】";
                    },
                    defSkill: function () {
                        if (100 * Math.random() < Math.min(30 + 5 * this.publicVar, 60)) {
                            this.att += parseInt(.05 * this.att);
                            cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999;
                            return "【" + this.name + "使用「风王结界」，免疫伤害，攻击增加5%，！】";
                        }
                        this.publicVar += 2;
                        return "【吾王获得2点怒气（下次结界触发几率提高！）】";
                    },
                    winEvent: function () {
                        c.choice[6] += 1;
                        return "";
                    },
                    lostEvent: void 0
                },
                215: {
                    name: "晓风",
                    lv: 999,
                    hp: 99999,
                    maxHp: 99999,
                    att: 0,
                    def: 1999,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 0,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 15, 3, 2]],
                    des: "",
                    skill: void 0,
                    defSkill: function () {
                        var e = ["「对于国产游戏，」”", "「我始终坚信，」", "「什么样的环境孕育出什么样的作品。」", "「那些嘲讽国产游戏的人，」", "「本质上是在嘲讽自己————你低估了自己的力量。」”", "「国产游戏的未来，」", "「在你的手中，」", "「而不是开发商或者平台...」", "「一起共勉吧。晓风 2017.10.16」"], t = "";
                        "undefined" != typeof e[this.publicVar] && (t = e[this.publicVar]);
                        this.publicVar += 1;
                        this.def -= 200;
                        return t;
                    },
                    winEvent: function () {
                        c.choice[6] += 1;
                        return "“再会吧~朋友...”";
                    },
                    lostEvent: void 0
                },
                216: {
                    name: "秋良·左轮",
                    lv: 999,
                    hp: 1e6,
                    maxHp: 1e6,
                    att: 5000,
                    def: 2000,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 100,
                    getAtt: 1,
                    drop: [[50, 19, 1, 2]],
                    des: "如果这个游戏没有一个最终boss不是很无聊吗？\n（催更请录屏战斗过程）",
                    skill: function () {
                        this.publicVar = Math.ceil(Math.random() * 6);
                        if (this.publicVar <= 2) {
                            return "【秋良正在上子弹】";
                        } else if (this.publicVar == 3) {
                            var e = 1 * this.att - o.def;
                            c.role.hp -= e;
                            return "【秋良使用「射击」，造成" + e + "点伤害】"
                        } else if (this.publicVar == 4) {
                            var e = 2 * this.att - o.def;
                            c.role.hp -= e;
                            cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= parseInt(.5 * o.def);
                            return "【秋良使用「爆头」，造成" + e + "点伤害，减少防御50%】"
                        } else if (this.publicVar == 5) {
                            this.att += parseInt(1 * this.att);
                            return "【秋良使用「过热」，攻击力翻倍】"
                        } else if (this.publicVar == 6) {
                            var e = 6 * this.att - o.def;
                            c.role.hp -= e;
                            return "【秋良使用「快速扳机」，造成" + e + "点伤害，】"
                        }
                        e = this.att - o.def;
                        c.role.hp -= e;
                        return "【枪灵「自动攻击」，造成" + e + "点伤害】";
                    },
                    defSkill: function () {
                        if (c.itemNum2[19] > 9 || c.itemNum2[27] > 1000) {
                            c.itemNum2[0] = 0;
                            c.itemNum2[1] = 0;
                            c.itemNum2[2] = 0;
                            c.itemNum2[3] = 0;
                            c.itemNum2[4] = 0;
                            c.itemNum2[5] = 0;
                            c.itemNum2[6] = 0;
                            c.itemNum2[7] = 0;
                            c.itemNum2[8] = 0;
                            c.itemNum2[9] = 0;
                            c.itemNum2[10] = 0;
                            c.itemNum2[11] = 0;
                            c.itemNum2[12] = 0;
                            c.itemNum2[13] = 0;
                            c.itemNum2[14] = 0;
                            c.itemNum2[15] = 0;
                            c.itemNum2[16] = 0;
                            c.itemNum2[17] = 0;
                            c.itemNum2[18] = 0;
                            c.itemNum2[19] = 0;
                            c.itemNum2[20] = 0;
                            c.itemNum2[21] = 0;
                            c.itemNum2[22] = 0;
                            c.itemNum2[23] = 0;
                            c.itemNum2[24] = 0;
                            c.itemNum2[25] = 0;
                            c.itemNum2[27] = 0;
                            c.itemNum2[28] = 0;
                            c.itemNum2[29] = 0;
                            c.ifFollow[0] = 0;
                            c.ifFollow[1] = 0;
                            c.health = 1;
                            c.money = 0;
                            this.punish();
                            return "【你是不是永远都学不乖？】";
                            ;
                        }
                        this.publicVar = Math.ceil(Math.random() * 6);
                        if (this.publicVar <= 3) {
                            var e = parseInt(o.att);
                            c.role.hp -= e;
                            cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999999;
                            return "【" + this.name + "使用「枪魂附体」，反弹伤害！】";
                        }
                        return "";
                    },
                    winEvent: function () {
                        c.choice[6] += 1;
                        return "“好好好，这样玩是吧”";
                    },
                    lostEvent: void 0,
                    punish: function () {
                        var t = e("scr_data2");
                        JSON.parse(cc.sys.localStorage.getItem("userData")) && cc.sys.localStorage.removeItem("userData");
                        JSON.parse(cc.sys.localStorage.getItem("autogamesave")) && cc.sys.localStorage.removeItem("autogamesave");
                        t.initMoney = 50;
                        t.gameData[0] = 0;
                        e("scr_public").save2();
                        cc.director.loadScene("start");
                        return "你的存档已被作者清除，游戏即将自动关闭";
                    }
                },
                217: {
                    name: "御坂美琴",//tag 挑战新怪
                    lv: 5,
                    hp: 1e6,
                    maxHp: 1e6,
                    att: 10000,
                    def: 2000,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 100,
                    getAtt: 1,
                    drop: [[100, 22, 10, 2]],
                    des: "这里是什么地方...黑子的超能力把我传送到哪里了",
                    skill: function () {
                        if (this.publicVar == 0) {
                            this.publicVar += 1;
                            var e = 1 * this.att - o.def;
                            c.role.hp -= e;
                            cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= parseInt(.25 * o.def);
                            return "【" + this.name + "使用「铁砂之剑」，造成" + e + "点伤害，你减少25%防御】"

                        }
                        else if (this.publicVar == 1) {
                            this.publicVar += 1;
                            var e = 2 * this.att - o.def;
                            c.role.hp -= e;
                            cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= parseInt(.25 * o.att);
                            return "【" + this.name + "使用「雷击之枪」，造成" + e + "点伤害，你减少25%攻击】"
                        }
                        else if (this.publicVar == 2) {
                            this.publicVar += 1;
                            return "【御坂美琴掏出了一个硬币】";
                        }
                        else if (this.publicVar == 3) {
                            this.publicVar = 0;
                            var e = 5 * this.att - o.def;
                            c.role.hp -= e;
                            return "【" + this.name + "使用「超电磁炮」，造成" + e + "点伤害】"
                        }
                        else if (this.publicVar == 4) {
                            this.publicVar = 1;
                            /*this.def += parseInt(1 * this.def);
                            this.att += parseInt(1 * this.att);
                            return "【秋良对" + this.name + "使用「放大灯」，攻防翻倍】"*/
                        }
                        e = this.att - o.def;
                        c.role.hp -= e;
                        return "【" + this.name + "释放「落雷」，造成" + e + "点伤害】";
                    },
                    defSkill: function () {
                        var e = parseInt(o.att / 4);
                        cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= e;
                        return "【" + this.name + "使用「电磁护盾」，受到的伤害减少25%！】";
                    },
                    winEvent: function () {
                        c.choice[6] += 1;
                        return "“诶？这个黑洞是！（御坂美琴被黑洞吸走了）”";
                    },
                    lostEvent: void 0
                },
                218: {
                    name: "路明非",
                    lv: "·S",
                    hp: 1e6,
                    maxHp: 1e6,
                    att: 1000,
                    def: 1000,
                    publicVar: 2,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 100,
                    getAtt: 1,
                    drop: [[100, 10, 2, 2]],
                    des: "是我害死了绘梨衣...",
                    skill: function () {
                        var text = this.name + "使用";
                        if (1 == this.lostHealth) {
                            c.itemNum2[14] = 0;
                            c.ifFollow[0] = 0;
                            c.ifFollow[1] = 0;
                            this.lostHealth += 1;
                            text += "「Noglue」，你失去所有技能和伙伴,"
                        } else if (2 == this.lostHealth) {
                            this.lostHealth += 1;
                            this.hp = this.maxHp / 2;
                            this.publicVar += 5;
                            text += "「七宗罪」，" + this.name + "以血为引，开启了七宗罪，";
                        }
                        else if (3 == this.lostHealth) {
                            this.lostHealth += 1;
                            this.att += this.att * 1;
                            var e = 1 * this.att - o.def;
                            c.role.hp -= e;
                            this.publicVar += 1;
                            text += "「色欲」，" + this.name + "造成" + e + "伤害";
                        }
                        else if (4 == this.lostHealth) {
                            this.lostHealth += 1;
                            this.att += this.att * 1;
                            var e = 2 * this.att - o.def;
                            c.role.hp -= e;
                            this.publicVar += 2;
                            text += "「饕餮」，" + this.name + "造成" + e + "伤害";
                        }
                        else if (5 == this.lostHealth) {
                            this.lostHealth += 1;
                            this.att += this.att * 1;
                            var e = 3 * this.att - o.def;
                            c.role.hp -= e;
                            this.publicVar += 3;
                            text += "「贪婪」，" + this.name + "造成" + e + "伤害";
                        } else if (6 == this.lostHealth) {
                            this.lostHealth += 1;
                            this.att += this.att * 1;
                            var e = 3 * this.att - o.def;
                            c.role.hp -= e;
                            this.publicVar += 4;
                            text += "「懒惰」，" + this.name + "造成" + e + "伤害";
                        } else if (7 == this.lostHealth) {
                            this.lostHealth += 1;
                            this.att += this.att * 1;
                            var e = 3 * this.att - o.def;
                            c.role.hp -= e;
                            this.publicVar += 5;
                            text += "「妒忌」，" + this.name + "造成" + e + "伤害";
                        } else if (8 == this.lostHealth) {
                            this.lostHealth += 1;
                            this.att += this.att * 1;
                            var e = 3 * this.att - o.def;
                            c.role.hp -= e;
                            this.publicVar += 6;
                            text += "「傲慢」，" + this.name + "造成" + e + "伤害";
                        } else if (9 == this.lostHealth) {
                            this.att += this.att * 1;
                            var e = 3 * this.att - o.def;
                            c.role.hp -= e;
                            this.publicVar += 7;
                            text += "「暴怒」，" + this.name + "造成" + e + "伤害";
                        }
                        if (this.publicVar > 10 && (this.hp / this.maxHp) < 0.25) {
                            if (this.getAtt == 1) {
                                this.getAtt = 2;
                                this.maxHp = this.maxHp * (this.publicVar / 10);
                                this.att = this.att * (this.publicVar / 10);
                                this.def = this.def * (this.publicVar / 10);
                                this.hp = this.maxHp;
                                text += "【something for nothing】融合度" + 100 * (this.publicVar / 10) + "%";
                                this.name = "路鸣泽";
                                this.lv = "未知";
                                this.publicVar = 2;
                            } else if (this.getAtt == 2 && this.publicVar > 16) {
                                this.getAtt = 3;
                                this.maxHp = this.maxHp * (this.publicVar / 10);
                                this.att = this.att * (this.publicVar / 10);
                                this.def = this.def * (this.publicVar / 10);
                                this.hp = this.maxHp;
                                text += "【something for nothing】" + 1 * this.publicVar + "倍增幅";
                                this.name = "路鸣泽";
                                this.lv = "龙王再世";
                                this.publicVar = 2;
                            }
                        }
                        if (this.getAtt == 1) {
                            text += "路明非是个废物";
                        }
                        else if (this.getAtt == 2) {
                            if (this.publicVar % 3 == 0) {
                                this.publicVar += 1;
                                var e = this.att * 2;
                                c.role.hp -= e;
                                text += "「审判」，造成" + e + "点真实伤害";
                            } else if (this.publicVar % 3 == 1) {
                                this.publicVar += 1;
                                var e = 3 * this.att - o.def;
                                c.role.hp -= e;
                                text += "「烛龙」，造成" + e + "点伤害";
                            } else if (this.publicVar % 3 == 2) {
                                this.publicVar += 1;
                                text += "「江南老贼」，路明非永远找不到老婆";
                            } else {
                                this.publicVar += 1;
                            }
                        }
                        else if (this.getAtt == 3) {
                            if (this.publicVar % 3 == 0) {
                                this.publicVar += 1;
                                this.att = this.att * 2;
                                text += "「时零」，攻击力翻倍";
                            } else if (this.publicVar % 3 == 1) {
                                this.publicVar += 1;
                                this.def = this.def * 2;
                                text += "「王权」，防御力翻倍";
                            } else if (this.publicVar % 3 == 2) {
                                this.publicVar += 1;
                                this.att = 1;
                                this.def = 1;
                                this.hp = 1;
                                text += "「江南老贼」，路明非纯废物";
                            } else {
                                this.publicVar += 1;
                            }
                        }
                        if (this.getAtt == 1) {
                            if ((this.hp / this.maxHp) < 0.5 && (this.publicVar > 0)) {
                                this.publicVar -= 1;
                                this.maxHp = parseInt(this.maxHp * 0.75);
                                this.hp = this.maxHp;
                                text += "「不要死」，失去25%最大生命,回满生命"
                            }
                        } else if (this.getAtt == 2) {
                            if ((this.hp / this.maxHp) < 0.5 && (this.publicVar > 0)) {
                                this.publicVar -= 1;
                                this.maxHp = parseInt(this.maxHp * 0.75);
                                this.hp = this.maxHp;
                                text += "「不要死」，失去25%最大生命,回满生命"
                            }
                        } else if (this.getAtt == 2) {

                        }
                        return text;
                    },
                    defSkill: function () {

                        if (this.publicVar == 0) {
                            return "【你也是来夺走她的吗！】";
                        }
                        return "";
                    },
                    winEvent: function () {
                        c.ifFollow[0] = 1;
                        c.ifFollow[1] = 1;
                        c.choice[6] += 1;
                        return "“啊啊啊啊！”";
                    },
                    lostEvent: function () {
                        c.ifFollow[0] = 1;
                        c.ifFollow[1] = 1;
                        return "“别来烦我！”";
                    }
                },
                //终焉怪物传送门
                401: {
                    name: "城管1队",
                    lv: 100,
                    hp: 16e3,
                    maxHp: 16e3,
                    att: 199,
                    def: 120,
                    publicVar: 0,
                    escapeRate: -9567,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 99, 50, 3]],
                    des: "",
                    skill: function () {
                        var e = parseInt(this.att - .3 * o.def + this.publicVar);
                        c.role.hp -= e;
                        return "【" + this.name + "使用「连拖带拽」！你损失" + e + "点生命！】";
                    },
                    defSkill: function () {
                        this.publicVar += 20;
                        return "【" + this.name + "使用「抱大腿」！你降低20点防御】";
                    },
                    winEvent: function () {
                        c.orderTimes[4] += 4;
                        i.save();
                        return "【奖励：烟瘾永久降低4%】“不想走是吧？可以的！”";
                    },
                    lostEvent: function () {
                        c.publicVar3[2] = 1;
                        c.ifFollow[0] = 0;
                        c.ifFollow[1] = 0;
                        c.publicVar[13] = 1;
                        i.init();
                        return c.ifFollow[0] > 0 ? "【你被强行赶出城...你与晓月失去了联系。】" : "【你被强行赶出城...】";
                    }
                },
                402: {
                    name: "城管2队",
                    lv: 140,
                    hp: 23333,
                    maxHp: 23333,
                    att: 280,
                    def: 160,
                    publicVar: 0,
                    escapeRate: -9567,
                    enemyEscapeRate: 0,
                    lostHealth: 2,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 99, 80, 3]],
                    des: "",
                    skill: function () {
                        var e = 100 * Math.random(), t = parseInt(this.att - .3 * o.def);
                        if (e < 30 + 5 * this.publicVar) {
                            t *= 2;
                            c.role.hp -= t;
                            return "【" + this.name + "使用「致命一击」，你损失" + t + "点生命！】";
                        }
                        this.publicVar += 5;
                        c.role.hp -= t;
                        return "【" + this.name + "使用「电棍」，你损失" + t + "点生命！】";
                    },
                    defSkill: function () {
                        if (100 * Math.random() < 30) {
                            cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 99999;
                            return "【" + this.name + "使用「防爆盾」！】";
                        }
                        return "";
                    },
                    winEvent: function () {
                        c.money += 100;
                        i.save();
                        return "【奖励：10元钱】“小伙子，虽然你确实有两下子，但是你是不可能干过政府的~”";
                    },
                    lostEvent: function () {
                        c.publicVar3[2] = 1;
                        c.ifFollow[0] = 0;
                        c.ifFollow[1] = 0;
                        c.publicVar[13] = 1;
                        i.init();
                        return c.ifFollow[0] > 0 ? "【你被强行赶出城...你与晓月失去了联系。】" : "【你被强行赶出城...】";
                    }
                },
                403: {
                    name: "城管3队",
                    lv: 200,
                    hp: 33332,
                    maxHp: 33332,
                    att: 400,
                    def: 240,
                    publicVar: 0,
                    escapeRate: -9567,
                    enemyEscapeRate: 0,
                    lostHealth: 3,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 99, 120, 3]],
                    des: "",
                    skill: function () {
                        var e = parseInt(this.att - .3 * o.def);
                        c.role.hp -= e;
                        this.hp += e;
                        return "【" + this.name + "使用「强行验血」，你损失" + e + "点生命，3队恢复" + e + "点生命！】";
                    },
                    defSkill: function () {
                        this.att += 10;
                        return "【" + this.name + "攻击+10！】";
                    },
                    winEvent: function () {
                        c.itemNum2[12] += 10;
                        i.save();
                        return "【奖励：啤酒*10】“报告，你惹了一个惹不起的人！”";
                    },
                    lostEvent: function () {
                        c.publicVar3[2] = 1;
                        c.ifFollow[0] = 0;
                        c.ifFollow[1] = 0;
                        c.publicVar[13] = 1;
                        i.init();
                        return c.ifFollow[0] > 0 ? "【你被强行赶出城...你与晓月失去了联系。】" : "【你被强行赶出城...】";
                    }
                },
                404: {
                    name: "城管4队",
                    lv: 280,
                    hp: 48865,
                    maxHp: 48865,
                    att: 560,
                    def: 330,
                    publicVar: 0,
                    escapeRate: -9567,
                    enemyEscapeRate: 0,
                    lostHealth: 4,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 99, 170, 3]],
                    des: "",
                    skill: function () {
                        var e = parseInt(this.att - .3 * o.def), t = Math.min(20 + 2 * this.publicVar, 60);
                        if (100 * Math.random() < t) {
                            e *= 5;
                            c.role.hp -= e;
                            return "【" + this.name + "使用「枪击」！击中！你损失" + e + "点生命！】";
                        }
                        return "【" + this.name + "使用「枪击」，但是未命中！】";
                    },
                    defSkill: function () {
                        this.publicVar += 1;
                        this.att += 15;
                        return "【" + this.name + "使用集中，攻击+15，且下次枪击命中率提高！】";
                    },
                    winEvent: function () {
                        c.itemNum2[14] += 20;
                        i.save();
                        return "【奖励：子弹*20】“老大要来了！”";
                    },
                    lostEvent: function () {
                        c.publicVar3[2] = 1;
                        c.ifFollow[0] = 0;
                        c.ifFollow[1] = 0;
                        c.publicVar[13] = 1;
                        i.init();
                        return c.ifFollow[0] > 0 ? "【你被强行赶出城...你与晓月失去了联系。】" : "【你被强行赶出城...】";
                    }
                },
                405: {
                    name: "陈晓（大大）",
                    lv: 380,
                    hp: 65865,
                    maxHp: 65865,
                    att: 762,
                    def: 450,
                    publicVar: 0,
                    escapeRate: -9567,
                    enemyEscapeRate: 0,
                    lostHealth: 4,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 99, 230, 3]],
                    des: "“小伙，看我，帅不帅？”",
                    skill: function () {
                        var e = this.att + o.def, t = parseInt(.015 * (this.maxHp - this.hp));
                        c.role.hp -= e;
                        this.hp += t;
                        return "【陈晓使用「晓风.霸王拳」，对你造成" + e + "点伤害，自身恢复" + t + "点生命】";
                    },
                    defSkill: function () {
                        if (100 * Math.random() < Math.min(3 * this.publicVar + 20, 60)) {
                            var t = parseInt(.3 * o.att);
                            e("scr_data").role.hp -= t;
                            cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999;
                            return "【" + this.name + "使用「格挡」「反弹」，你减少" + t + "点生命！】";
                        }
                        return "【陈晓下次格挡概率增加！】";
                    },
                    winEvent: function () {
                        c.itemNum2[15] += 5;
                        c.itemNum2[7] += 3;
                        c.itemNum2[12] += 5;
                        c.orderTimes[4];
                        i.save();
                        return "【奖励：烟瘾降低15%，烟*3，晓风披肩*5，啤酒*5！】“但愿你能赢过政府，虽然我是政府的狗...”";
                    },
                    lostEvent: function () {
                        c.publicVar3[2] = 1;
                        c.ifFollow[0] = 0;
                        c.ifFollow[1] = 0;
                        c.publicVar[13] = 1;
                        i.init();
                        return c.ifFollow[0] > 0 ? "【你被强行赶出城...你与晓月失去了联系。】" : "【你被强行赶出城...】";
                    }
                },
                406: {
                    name: "挖掘机（BOSS）",
                    lv: 999,
                    hp: 299999,
                    maxHp: 299999,
                    att: 0,
                    def: 1299,
                    publicVar: 0,
                    escapeRate: -9567,
                    enemyEscapeRate: -9999,
                    lostHealth: 5,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 12, 1, 1]],
                    des: "“这是专门为你们这些刁民研发的隐藏武器，除了高层，世界上没有人知道，因为知道的都死了！”\n「特点：钢甲巨兽，慢热型对手；高血高防，但前期伤害较低」",
                    skill: function () {
                        var e = 1e4 + this.enemyEscapeRate;
                        this.publicVar += 1;
                        if (this.publicVar % 7 == 0) {
                            var t = Math.max(parseInt(.04 * this.def * e + 999 - o.def), 1);
                            c.role.hp -= t;
                            this.hp += t;
                            this.enemyEscapeRate += 1;
                            return "【挖掘机使用「加农炮！」你受到" + t + "点伤害！挖掘机充能+1，恢复" + t + "点生命！（回复量与挖掘机充能量/主角防御有关）】";
                        }
                        if (this.publicVar % 4 == 0) {
                            this.enemyEscapeRate += 4;
                            return "【挖掘机使用「机甲进化」，充能+4！】";
                        }
                        var n = Math.max(parseInt(.01 * this.def * e + 499 - .5 * o.def), 0);
                        c.role.hp -= n;
                        return "【挖掘机「喷油！灼烧」你受到" + n + "点灼烧伤害（伤害与挖掘机充能量/主角防御有关）！】";
                    },
                    defSkill: function () {
                        this.publicVar < 1 && (this.publicVar += 1);
                        var t = 1e4 + this.enemyEscapeRate;
                        if (this.publicVar % 11 == 0) {
                            var n = parseInt(.06 * (this.maxHp - this.hp));
                            this.hp += n;
                            return "【挖掘机启动紧急修复！恢复已损失生命的6%（" + n + "点）】";
                        }
                        if (this.publicVar % 5 == 0) {
                            var a = parseInt(.2 * o.att + .2 * this.def);
                            e("scr_data").role.hp -= a;
                            cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 99999;
                            return "【挖掘机使用「荆棘钢甲」！你受到" + a + "点伤害！】";
                        }
                        if (this.publicVar % 3 == 0) {
                            var i = parseInt(.06 * this.def);
                            this.def += i;
                            return "【挖掘机启动「防御系统」！防御增加6%（" + i + "点）】";
                        }
                        if (100 * Math.random() < Math.min(30 + 2 * t, 60)) {
                            this.enemyEscapeRate += 1;
                            cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999;
                            return "【挖掘机使用「电离屏障」，免疫伤害，充能+1！（触发几率与充能有关）】";
                        }
                        var c = 2 * t + 20;
                        this.def += c;
                        return "【挖掘机启动「警戒系统」，防御+" + c + "（增加量与挖掘机当前充能量有关）！】";
                    },
                    winEvent: function () {
                        return "【你已战胜最终BOSS，游戏即将结束，可以看看还有啥没做完的~】";
                    },
                    lostEvent: function () {
                        c.publicVar3[2] = 1;
                        c.ifFollow[0] = 0;
                        c.ifFollow[1] = 0;
                        c.publicVar[13] = 1;
                        i.init();
                        return c.ifFollow[0] > 0 ? "【你被驱逐出城。你与晓月失去了联系。】" : "【你桥底的窝被挖掘机铲平...你被赶出城区...】";
                    }
                },
                //晓月家传送门
                501: {
                    name: "晓月家大狼狗",
                    lv: 80,
                    hp: 2685,
                    maxHp: 2685,
                    att: 0,
                    def: 187,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [],
                    des: "emmmmmm",
                    skill: function () {
                        this.publicVar += 1;
                        if (this.publicVar <= 5) {
                            c.role.hp += 99;
                            return "【狗狗使用「添~滋溜~滋溜~」，你恢复99点生命！】";
                        }
                        this.enemyEscapeRate += 100;
                        return "【狗狗有些伤心，准备要离开了！】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        c.chioce2[7] += 1;
                        c.itemNum2[0] += 3;
                        return "【狗狗点了点头，开心的离开了。狗狗的祝福：获得「熟肉」*3！】";
                    },
                    lostEvent: void 0
                },
                502: {
                    name: "晓月后援1群",
                    lv: 100,
                    hp: 3345,
                    maxHp: 3345,
                    att: 0,
                    def: 234,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [],
                    des: "“加入我们，才能偷看喔~”",
                    skill: function () {
                        this.publicVar += 1;
                        if (this.publicVar <= 4) {
                            cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] += 30;
                            return "【后援队使用「加油！」，你增加30点攻击！】";
                        }
                        this.enemyEscapeRate += 100;
                        return "【后援队有些失望，准备要离开了！】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        var t = e("scr_data");
                        t.chioce2[7] += 1;
                        t.itemNum2[22] += 1;
                        return "【“好吧，你确实配得上我老婆，加油吧~”。粉丝的祝福：获得「女装」*1！】";
                    },
                    lostEvent: void 0
                },
                503: {
                    name: "晓月管家",
                    lv: 130,
                    hp: 4335,
                    maxHp: 4335,
                    att: 0,
                    def: 300,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [],
                    des: "“不好意思，这里没大米哈~”",
                    skill: function () {
                        this.publicVar += 1;
                        if (this.publicVar <= 3) {
                            c.money += 1;
                            return "【管家给了你1毛钱~】";
                        }
                        c.role.hp -= 99999;
                        return "【“还不走？”】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        var t = e("scr_data");
                        t.money -= this.publicVar;
                        t.chioce2[7] += 1;
                        t.money += 20;
                        return "【“现在年轻人脸皮都这么厚嘛！”。你把钱还给了管家。管家的祝福：获得2元！】";
                    },
                    lostEvent: function () {
                        c.money -= 3;
                        return "【“做人不要太贪！滚出去！”。你被轰出院子，失去3毛钱！】";
                    }
                },
                504: {
                    name: "晓月哥",
                    lv: 170,
                    hp: 5650,
                    maxHp: 5650,
                    att: 0,
                    def: 500,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [],
                    des: "“想抢走我妹妹？先从我身上踏过去！”",
                    skill: function () {
                        var e = 100 * Math.random(), t = 999;
                        if (e < 40) {
                            this.hp -= t;
                            return "【" + this.name + "使用「信心打击」，反弹，" + this.name + "受到" + t + "点伤害！】";
                        }
                        if (e < 60) {
                            this.hp += 2 * t;
                            return "【" + this.name + "感觉有点口干，喝了一口水，恢复" + 2 * t + "点生命！】";
                        }
                        t = parseInt(t - o.def);
                        c.role.hp -= t;
                        return "【" + this.name + "使用「信心打击」，你受到" + t + "点伤害！】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        var e = Math.min(parseInt(.05 * c.friend_xiaoyue.favorability + 5), 55);
                        c.role.def += e;
                        c.chioce2[7] += 1;
                        return "【“你走吧，我想静静~”。哥哥的祝福：防御永久增加" + e + "（与晓月好感有关）！】";
                    },
                    lostEvent: void 0
                },
                505: {
                    name: "晓月妈",
                    lv: 220,
                    hp: 7300,
                    maxHp: 7300,
                    att: 0,
                    def: 510,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [],
                    des: "“做啥工作？工资多少？有没有买房？”",
                    skill: void 0,
                    defSkill: function () {
                        var e = parseInt(.3 * c.money);
                        this.att += 1;
                        if (this.att <= 3) {
                            this.publicVar += e;
                            c.money -= e;
                            return "【你给了晓月妈" + (e / 10).toFixed(1) + "元！】";
                        }
                        if (this.att >= 3 && this.publicVar < 50) {
                            c.role.hp -= 999999;
                            return "【“就这么点钱？胖猫都给了谭竹50万”】";
                        } else if (this.publicVar > 50) {
                            this.hp -= 999999;
                            return "【“哈哈哈哈哈”】";
                        }
                    },
                    winEvent: function () {
                        var e = Math.min(parseInt(.5 * c.friend_xiaoyue.favorability + 50), 550);
                        c.role.maxHp += e;
                        c.chioce2[7] += 1;
                        return "【“好像还有点钱嗷~”。母上大人的祝福：生命永久增加" + e + "（与晓月好感有关）！】";
                    },
                    lostEvent: function () {
                        return "【“穷成这样~我敢把女儿交给你？”。你被赶出屋来！】";
                    }
                },
                506: {
                    name: "晓月爸",
                    lv: 300,
                    hp: 9999,
                    maxHp: 9999,
                    att: 1200,
                    def: 500,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [],
                    des: "“你要是能打败我，我就让你带走晓月”",
                    skill: function () {
                        if (4 == this.publicVar) {
                            var e = this.att * (1 + this.publicVar);
                            return "【" + this.name + "使用「空手道.锁喉！」，你受到" + e + "点生命！】";
                        }
                        this.publicVar += 1;
                        var t = parseInt(.5 * this.att);
                        c.role.hp -= t;
                        cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= parseInt(.1 * o.def);
                        return "【" + this.name + "使用「空手道.穿心！」你受到" + t + "点伤害，防御降低10%！】";
                    },
                    defSkill: function () {
                        this.att += parseInt(.05 * this.att);
                        return "【" + this.name + "使用「空手道.蓄气！」，" + this.name + "攻击强化！】";
                    },
                    winEvent: function () {
                        var e = Math.min(parseInt(.1 * c.friend_xiaoyue.favorability + 10), 110);
                        c.role.att += e;
                        c.chioce2[7] += 1;
                        return "【父亲大人的祝福：攻击永久增加" + e + "（与晓月好感有关）！】";
                    },
                    lostEvent: void 0
                },
                600: {
                    name: "毛贼",
                    lv: 10,
                    hp: 380,
                    maxHp: 380,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: 50,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 1, 1, 1], [100, 4, 1, 1]],
                    des: "嗡嗡-嗡！",
                    skill: function () {
                        var t = Math.max(20 - o.def, 0);
                        e("scr_data").role.hp -= t;
                        this.hp += t;
                        return "【你被吸取" + t + "点生命！】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        c.publicVar[10] += 1;
                        return "";
                    },
                    lostEvent: void 0
                },
                601: {
                    name: "精分患者",
                    lv: 20,
                    hp: 710,
                    maxHp: 710,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: 40,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 1, 2, 1], [100, 4, 2, 1]],
                    des: "%$#%$#%#^&^",
                    skill: function () {
                        var t = Math.max(60 - o.def, 0);
                        this.att += 10;
                        e("scr_data").role.hp -= t;
                        this.hp += t;
                        return "【你被吸取" + t + "点生命！" + this.name + "攻击+10】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        c.publicVar[10] += 1;
                        return "";
                    },
                    lostEvent: void 0
                },
                602: {
                    name: "盯谁谁怀孕大妈",
                    lv: 35,
                    hp: 1200,
                    maxHp: 1200,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: 30,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 1, 3, 1], [100, 4, 3, 1]],
                    des: "嗡--------！",
                    skill: function () {
                        var t = Math.max(120 + 20 * this.publicVar - o.def, 0);
                        e("scr_data").role.hp -= t;
                        this.hp += t;
                        return "【你被吸取" + t + "点生命！" + this.name + "吸血能力强化！】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        c.publicVar[10] += 1;
                        return "";
                    },
                    lostEvent: void 0
                },
                603: {
                    name: "阿龙",
                    lv: 50,
                    hp: 1665,
                    maxHp: 1665,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: 25,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 1,
                    getAtt: 1,
                    drop: [[100, 1, 4, 1], [100, 4, 4, 1]],
                    des: "",
                    skill: function () {
                        var t = Math.max(200 - o.def, 0);
                        this.def += 30;
                        e("scr_data").role.hp -= t;
                        this.hp += t;
                        return "【你被吸取" + t + "点生命！" + this.name + "防御+30】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        c.publicVar[10] += 1;
                        return "";
                    },
                    lostEvent: void 0
                },
                //蚊子系列怪物传送门
                700: {
                    name: "蚊小满",
                    lv: 10,
                    hp: 380,
                    maxHp: 380,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: 50,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 1, 1, 1], [100, 4, 1, 1]],
                    des: "嗡嗡-嗡！",
                    skill: function () {
                        var t = Math.max(20 - o.def, 0);
                        e("scr_data").role.hp -= t;
                        this.hp += t;
                        return "【你被吸取" + t + "点生命！】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        var t = e("scr_data");
                        t.kills[0] += 1;
                        t.randomEvent[4] += 1;
                        return "【你已消灭" + t.kills[0] + "只蚊子】";
                    },
                    lostEvent: void 0
                },
                701: {
                    name: "大毛蚊",
                    lv: 20,
                    hp: 710,
                    maxHp: 710,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: 40,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 1, 2, 1], [100, 4, 2, 1]],
                    des: "%$#%$#%#^&^",
                    skill: function () {
                        var t = Math.max(60 - o.def, 0);
                        this.att += 10;
                        e("scr_data").role.hp -= t;
                        this.hp += t;
                        return "【你被吸取" + t + "点生命！" + this.name + "攻击+10】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        var t = e("scr_data");
                        t.kills[0] += 1;
                        t.randomEvent[4] += 1;
                        return "【你已消灭" + t.kills[0] + "只蚊子】";
                    },
                    lostEvent: void 0
                },
                702: {
                    name: "密斯特蚊",
                    lv: 35,
                    hp: 1200,
                    maxHp: 1200,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: 35,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 1, 3, 1], [100, 4, 3, 1]],
                    des: "嗡--------！",
                    skill: function () {
                        var t = Math.max(120 + 20 * this.publicVar - o.def, 0);
                        e("scr_data").role.hp -= t;
                        this.hp += t;
                        return "【你被吸取" + t + "点生命！" + this.name + "吸血能力强化！】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        var t = e("scr_data");
                        t.kills[0] += 1;
                        t.randomEvent[4] += 1;
                        return "【你已消灭" + t.kills[0] + "只蚊子】";
                    },
                    lostEvent: void 0
                },
                703: {
                    name: "阿蚊",
                    lv: 50,
                    hp: 1665,
                    maxHp: 1665,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: 30,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 1,
                    getAtt: 1,
                    drop: [[100, 1, 4, 1], [100, 4, 4, 1]],
                    des: "",
                    skill: function () {
                        var t = Math.max(200 - o.def, 0);
                        this.def += 30;
                        e("scr_data").role.hp -= t;
                        this.hp += t;
                        return "【你被吸取" + t + "点生命！" + this.name + "防御+30】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        var t = e("scr_data");
                        t.kills[0] += 1;
                        t.randomEvent[4] += 1;
                        return "【你已消灭" + t.kills[0] + "只蚊子】";
                    },
                    lostEvent: void 0
                },
                704: {
                    name: "徐蚊强",
                    lv: 70,
                    hp: 2465,
                    maxHp: 2465,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: 25,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 1,
                    getAtt: 1,
                    drop: [[100, 1, 5, 1], [100, 4, 5, 1]],
                    des: "",
                    skill: function () {
                        var t = parseInt(Math.max((320 - o.def) * (2 - this.hp / this.maxHp), 0));
                        e("scr_data").role.hp -= t;
                        this.hp += t;
                        return "【你被吸取" + t + "点生命！】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        var t = e("scr_data");
                        t.kills[0] += 1;
                        t.randomEvent[4] += 1;
                        return "【你已消灭" + t.kills[0] + "只蚊子】";
                    },
                    lostEvent: void 0
                },
                705: {
                    name: "女王",
                    lv: 90,
                    hp: 3333,
                    maxHp: 3333,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: 20,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 2,
                    getAtt: 1,
                    drop: [[100, 1, 10, 1], [100, 4, 10, 1], [100, 26, 1, 2]],
                    des: "血红的肚子，如同宝石般纯净无暇！",
                    skill: function () {
                        var t = Math.max(520 - o.def, 0);
                        e("scr_data").role.hp -= t;
                        this.hp += t;
                        return "【你被吸取" + t + "点生命！】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        var t = e("scr_data");
                        t.kills[0] += 1;
                        return "【你已消灭" + t.kills[0] + "只蚊子】";
                    },
                    lostEvent: void 0
                },
                706: {
                    name: "蚊.媛",
                    lv: 29,
                    hp: 599,
                    maxHp: 599,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 0,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[1, 12, 1, 1]],
                    des: "%&#@*#%*%##%！",
                    skill: function () {
                        e("scr_data").role.hp += 200;
                        this.hp -= 200;
                        e("scr_public").ifMaxHp();
                        return this.name + "在给你输送营养！你增加200点生命";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        var t = e("scr_data");
                        t.kills[0] += 1;
                        return "【" + this.name + "变成了一具干尸！你已消灭" + t.kills[0] + "只蚊子】";
                    },
                    lostEvent: void 0
                },
                //女贼系列怪物传送门
                800: {
                    name: "女贼(小学生)",
                    lv: 7,
                    hp: 210,
                    maxHp: 210,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: 30,
                    enemyEscapeRate: 0,
                    lostHealth: 0,
                    achieve: 0,
                    getAtt: 1,
                    drop: [],
                    des: "..嘻嘻..(≥▽≤)y",
                    skill: function () {
                        var t = e("scr_data");
                        this.enemyEscapeRate += 20;
                        if (t.money > 0) {
                            t.money -= 1;
                            this.publicVar += 1;
                            return "【你被偷走0.1元，女贼想要溜(￣﹏￣)】";
                        }
                        return "【“穷成这B样也敢出来？”】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        var t = e("scr_data"), n = this.publicVar + 5;
                        t.money += n;
                        e("scr_data2").gameData2[0] += 1;
                        t.randomEvent[3] += 1;
                        return "【获得" + (n / 10).toFixed(1) + "元！】【“呜呜呜，我告诉我姐去”】";
                    },
                    lostEvent: void 0
                },
                801: {
                    name: "女贼她姐",
                    lv: 16,
                    hp: 575,
                    maxHp: 575,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: 30,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 99, 4, 3]],
                    des: "( ' – ' )你就那个怪蜀黍？",
                    skill: function () {
                        var t = Math.max(20 - o.def + 15 * this.publicVar, 0), n = e("scr_data");
                        this.publicVar += 1;
                        n.role.hp -= t;
                        cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= 15;
                        return "【" + this.name + "使用「泰山压顶（130kg）」，你受到" + t + "点伤害！你感觉喘呼吸困难！防御降低15点！】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        e("scr_data").randomEvent[3] += 1;
                        return "";
                    },
                    lostEvent: function () {
                        var t = e("scr_data"), n = parseInt(Math.max(.2 * t.money, 0));
                        t.money -= n;
                        return "【你损失20%的钱！】";
                    }
                },
                802: {
                    name: "女贼她小姨",
                    lv: 20,
                    hp: 700,
                    maxHp: 700,
                    att: 80,
                    def: 0,
                    publicVar: 0,
                    escapeRate: 30,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 99, 6, 3]],
                    des: "来嘛！过来玩会儿~",
                    skill: function () {
                        cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= 25;
                        var t = e("scr_data"), n = Math.max(30 - o.def, 5);
                        this.publicVar += 1;
                        var a = this.publicVar * n;
                        t.money -= this.publicVar;
                        t.role.hp -= a;
                        t.money < 0 && (t.money = 0);
                        return "【" + this.name + "用身体在你身上蹭了蹭，你攻击减少25，生命减少" + a + "，金钱减少" + (this.publicVar / 10).toFixed(1) + "元】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        var t = e("scr_data");
                        t.money += Math.min(this.publicVar, 10);
                        t.randomEvent[3] += 1;
                        return "【你抢回被偷的钱！】";
                    },
                    lostEvent: function () {
                        var t = e("scr_data"), n = parseInt(Math.max(.15 * t.money, 0));
                        t.money -= n;
                        return "【你损失15%的钱！】";
                    }
                },
                803: (n = {
                    name: "女贼她妈",
                    lv: 35,
                    hp: 1200,
                    maxHp: 1200,
                    att: 150,
                    def: 36,
                    publicVar: 0,
                    escapeRate: 30,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 99, 8, 3]],
                    des: "快把钱交出来！",
                    skill: function () {
                        var e = parseInt(.03 * o.maxHp);
                        cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= 30;
                        return "【" + this.name + "使用色诱，你的攻击降低30点，生命减少" + e + "】";
                    },
                    defSkill: void 0,
                    winEvent: void 0
                }, a(n, "winEvent", function () {
                    e("scr_data").randomEvent[3] += 1;
                    return "";
                }), a(n, "lostEvent", function () {
                    var t = e("scr_data"), n = parseInt(Math.max(.1 * t.money, 0));
                    t.money -= n;
                    return "【你损失10%的钱！】";
                }), n),
                804: {
                    name: "女贼她奶奶",
                    lv: 45,
                    hp: 1500,
                    maxHp: 1500,
                    att: 0,
                    def: 30,
                    publicVar: 0,
                    escapeRate: 30,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 99, 10, 3]],
                    des: "打劫(〃'▽'〃)！",
                    skill: function () {
                        this.publicVar += 1;
                        var t = 80 * this.publicVar;
                        e("scr_data").role.hp -= t;
                        return "【放血：每回合损失" + t + "点生命（" + this.publicVar + "层）】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        e("scr_data").randomEvent[3] += 1;
                        return "";
                    },
                    lostEvent: function () {
                        var t = e("scr_data"), n = parseInt(Math.max(.1 * t.money, 0));
                        t.money -= n;
                        return "【你损失10%的钱！】";
                    }
                },
                805: {
                    name: "女贼集团总裁（精英）",
                    lv: 60,
                    hp: 1999,
                    maxHp: 1999,
                    att: 310,
                    def: 50,
                    publicVar: 0,
                    escapeRate: 30,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 1,
                    getAtt: 2,
                    drop: [[100, 99, 12, 3]],
                    des: "快把钱交出来！",
                    skill: function () {
                        this.publicVar += 1;
                        var t = 100 * this.publicVar;
                        e("scr_data").role.hp -= t;
                        return "【流血：每回合损失" + t + "点生命（" + this.publicVar + "层）】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        e("scr_data").randomEvent[3] += 1;
                        return "";
                    },
                    lostEvent: function () {
                        var t = e("scr_data"), n = parseInt(Math.max(.15 * t.money, 0));
                        t.money -= n;
                        return "【你损失15%的钱！】";
                    }
                },
                806: {
                    name: "贼女王（精英）",
                    lv: 80,
                    hp: 2700,
                    maxHp: 2700,
                    att: 0,
                    def: 60,
                    publicVar: 0,
                    escapeRate: 30,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 2,
                    getAtt: 3,
                    drop: [[100, 99, 15, 3], [100, 99, 15, 3], [100, 27, 1, 2]],
                    des: "嘿嘿(º﹃º )，咱们来玩cosplay吧~",
                    skill: function () {
                        var t = e("scr_data");
                        this.publicVar += 1;
                        if (this.publicVar % 3 == 0) {
                            var n = 400 + 100 * this.publicVar - o.def, a = 20 * this.publicVar;
                            t.role.hp -= n;
                            cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= a;
                            return "【女王使用「黑色高跟鞋」，你损失" + n + "点生命，并降低" + a + "点攻击】";
                        }
                        t.role.hp += 200;
                        return "【女王使用「皮鞭」，你恢复200点生命，降低100点防御】";
                    },
                    defSkill: function () {
                        this.hp += 200;
                        return "【女王有点小兴奋，恢复200点生命】";
                    },
                    winEvent: function () {
                        c.randomEvent[3] += 1;
                        return "";
                    },
                    lostEvent: function () {
                        var t = e("scr_data"), n = parseInt(Math.max(.15 * t.money, 0));
                        t.money -= n;
                        return "【你损失15%的钱！】";
                    }
                },
                807: {
                    name: "吸毒男（BOSS）",
                    lv: 120,
                    hp: 3999,
                    maxHp: 3999,
                    att: 760,
                    def: 120,
                    publicVar: 0,
                    escapeRate: 20,
                    enemyEscapeRate: 0,
                    lostHealth: 2,
                    achieve: 3,
                    getAtt: 3,
                    drop: [[100, 11, 2, 1]],
                    des: "“没错，她就是为了我才当贼女王的...我是个废物..”",
                    skill: function () {
                        var t = e("scr_data"), n = parseInt(Math.max(.25 * (this.maxHp - this.hp) - o.def + .01 * this.hp, 0)), a = parseInt(.3 * n);
                        this.hp += a;
                        t.role.hp -= n;
                        return "【毒男使用「嗜血狂魔」，你受到" + n + "点伤害,毒男恢复" + a + "点生命】";
                    },
                    defSkill: function () {
                        var t = e("scr_data");
                        this.publicVar += 1;
                        var n = 200 * this.publicVar;
                        t.role.hp -= n;
                        return "【中毒：每回合损失" + n + "点生命】";
                    },
                    winEvent: function () {
                        c.randomEvent[3] += 1;
                        return "“也许，死是一种解脱吧...再见了...我的女王...”";
                    },
                    lostEvent: function () {
                        var t = e("scr_data"), n = parseInt(Math.max(.2 * t.money, 0));
                        t.money -= n;
                        return "【你损失20%的钱！】";
                    }
                },
                808: {
                    name: "吸毒男2阶（BOSS）",
                    lv: 180,
                    hp: 5980,
                    maxHp: 5980,
                    att: 1087,
                    def: 418,
                    publicVar: 0,
                    escapeRate: 10,
                    enemyEscapeRate: 0,
                    lostHealth: 2,
                    achieve: 3,
                    getAtt: 3,
                    drop: [[100, 11, 2, 1]],
                    des: "“我是不会死的，我一定要为她报仇！”",
                    skill: function () {
                        var t = e("scr_data"), n = parseInt(Math.max(.25 * (this.maxHp - this.hp) - o.def + .01 * this.hp, 0)), a = parseInt(.3 * n);
                        this.hp += a;
                        t.role.hp -= n;
                        return "【毒男使用「嗜血狂魔」，你受到" + n + "点伤害,毒男恢复" + a + "点生命】";
                    },
                    defSkill: function () {
                        var t = e("scr_data"), n = parseInt(.2 * this.att);
                        this.publicVar += 1;
                        var a = n * this.publicVar;
                        t.role.hp -= a;
                        return "【中毒：每回合损失" + a + "点生命】";
                    },
                    winEvent: function () {
                        c.randomEvent[3] += 1;
                        return "“...不甘心...啊...”";
                    },
                    lostEvent: function () {
                        var t = e("scr_data"), n = parseInt(Math.max(.2 * t.money, 0));
                        t.money -= n;
                        return "【你损失20%的钱！】";
                    }
                },
                809: {
                    name: "吸毒男3阶（BOSS）",
                    lv: 300,
                    hp: 9999,
                    maxHp: 9999,
                    att: 1800,
                    def: 700,
                    publicVar: 0,
                    escapeRate: 0,
                    enemyEscapeRate: 0,
                    lostHealth: 2,
                    achieve: 3,
                    getAtt: 3,
                    drop: [[100, 11, 2, 1]],
                    des: "“就算没手，我还有脚！”",
                    skill: function () {
                        var t = e("scr_data"), n = parseInt(Math.max(.25 * (this.maxHp - this.hp) - o.def + .01 * this.hp, 0)), a = parseInt(.3 * n);
                        this.hp += a;
                        t.role.hp -= n;
                        return "【毒男使用「嗜血狂魔」，你受到" + n + "点伤害,毒男恢复" + a + "点生命】";
                    },
                    defSkill: function () {
                        var t = e("scr_data"), n = parseInt(.2 * this.att);
                        this.publicVar += 1;
                        var a = n * this.publicVar;
                        t.role.hp -= a;
                        return "【中毒：每回合损失" + a + "点生命】";
                    },
                    winEvent: function () {
                        c.randomEvent[3] += 1;
                        return "“啊！我的脚！”";
                    },
                    lostEvent: function () {
                        var t = e("scr_data"), n = parseInt(Math.max(.2 * t.money, 0));
                        t.money -= n;
                        return "【你损失20%的钱！】";
                    }
                },
                881: {
                    name: "吸毒男4阶（BOSS）",
                    lv: 500,
                    hp: 16520,
                    maxHp: 16520,
                    att: 3e3,
                    def: 1200,
                    publicVar: 0,
                    escapeRate: -10,
                    enemyEscapeRate: 0,
                    lostHealth: 2,
                    achieve: 3,
                    getAtt: 3,
                    drop: [[100, 11, 2, 1]],
                    des: "“就算没手没脚，我还有嘴！”",
                    skill: function () {
                        var t = e("scr_data"), n = parseInt(Math.max(.25 * (this.maxHp - this.hp) - o.def + .01 * this.hp, 0)), a = parseInt(.3 * n);
                        this.hp += a;
                        t.role.hp -= n;
                        return "【毒男使用「嗜血狂魔」，你受到" + n + "点伤害,毒男恢复" + a + "点生命】";
                    },
                    defSkill: function () {
                        var t = e("scr_data"), n = parseInt(.2 * this.att);
                        this.publicVar += 1;
                        var a = n * this.publicVar;
                        t.role.hp -= a;
                        return "【中毒：每回合损失" + a + "点生命】";
                    },
                    winEvent: function () {
                        c.randomEvent[3] += 1;
                        return "..e..e.e..e..a..a";
                    },
                    lostEvent: function () {
                        var t = e("scr_data"), n = parseInt(Math.max(.2 * t.money, 0));
                        t.money -= n;
                        return "【你损失20%的钱！】";
                    }
                },
                882: {
                    name: "吸毒男5阶（BOSS）",
                    lv: 999,
                    hp: 32995,
                    maxHp: 32995,
                    att: 6e3,
                    def: 2400,
                    publicVar: 0,
                    escapeRate: -20,
                    enemyEscapeRate: 0,
                    lostHealth: 2,
                    achieve: 3,
                    getAtt: 3,
                    drop: [[100, 11, 2, 1]],
                    des: "哧溜~哧溜~毒男拖着半截身子爬了过来~",
                    skill: function () {
                        var t = e("scr_data"), n = parseInt(Math.max(.25 * (this.maxHp - this.hp) - o.def + .01 * this.hp, 0)), a = parseInt(.3 * n);
                        this.hp += a;
                        t.role.hp -= n;
                        return "【毒男使用「嗜血狂魔」，你受到" + n + "点伤害,毒男恢复" + a + "点生命】";
                    },
                    defSkill: function () {
                        var t = e("scr_data"), n = parseInt(.2 * this.att);
                        this.publicVar += 1;
                        var a = n * this.publicVar;
                        t.role.hp -= a;
                        return "【中毒：每回合损失" + a + "点生命】";
                    },
                    winEvent: function () {
                        return "毒男化成一缕青烟，飘散在蓝天白云中...";
                    },
                    lostEvent: function () {
                        var t = e("scr_data"), n = parseInt(Math.max(.2 * t.money, 0));
                        t.money -= n;
                        return "【你损失20%的钱！】";
                    }
                },
                //贼系列怪物传送门
                810: {
                    name: "流浪汉(懒)",
                    lv: 5,
                    hp: 215,
                    maxHp: 215,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 0,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 99, 1, 3]],
                    des: "“求求你放过我吧，我两天没吃饭啦~(ㄒoㄒ)”",
                    skill: function () {
                        var t = e("scr_data");
                        cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= 10;
                        this.enemyEscapeRate += 15;
                        if (t.money >= 1) {
                            t.money -= 1;
                            this.publicVar += 1;
                            return "【" + this.name + "使用「求饶」，你的攻击下降10点，并给了对方0.1元】";
                        }
                        this.escapeRate += 100;
                        return "【流浪汉发现你根本没钱，打算要溜了！】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        var t = e("scr_data");
                        t.money += this.publicVar;
                        t.randomEvent[10] += 1;
                        return "【你拿回" + (this.publicVar / 10).toFixed(1) + "元】【“你们全是没同情心的坏人！”】";
                    },
                    lostEvent: void 0
                },
                811: {
                    name: "流浪汉(宅)",
                    lv: 12,
                    hp: 445,
                    maxHp: 445,
                    att: 0,
                    def: 9999,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 99, 2, 3]],
                    des: "“没看见我在玩手机吗！”",
                    skill: function () {
                        if (100 * Math.random() < 50) {
                            this.hp -= 99;
                            return "【" + this.name + "使用「嘴遁」，但是被你反弹，" + this.name + "受到99点伤害！】";
                        }
                        e("scr_data").role.hp -= 99;
                        return "【" + this.name + "使用「嘴遁」，你受到99点伤害！】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        e("scr_data").randomEvent[10] += 1;
                        return "【“老子特么就服你！”】";
                    },
                    lostEvent: function () {
                        var t = e("scr_data"), n = parseInt(Math.max(.1 * t.money, 0));
                        t.money -= n;
                        return "【你损失10%的钱！】";
                    }
                },
                812: {
                    name: "流浪汉(女)",
                    lv: 20,
                    hp: 775,
                    maxHp: 775,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 3,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 22, 1, 2]],
                    des: "“我真的没偷你的钱！不信你搜啊！”",
                    skill: function () {
                        var t = 100 * Math.random(), n = 20 * this.publicVar;
                        this.publicVar += 1;
                        if (t < n) {
                            e("scr_data").role.hp -= 9999;
                            return "【你被吃瓜群众围殴，损失9999点生命！】";
                        }
                        return "【" + this.name + "在大声呼救！】";
                    },
                    defSkill: function () {
                        var t = 100 * Math.random(), n = e("scr_public"), a = e("scr_data");
                        if (t <= 40) {
                            var i = 50 - o.def;
                            a.role.hp -= i;
                            return "【你从" + this.name + "身上搜到发霉的男式内衣，你损失" + i + "点生命！】";
                        }
                        if (t > 40 && t <= 60) {
                            a.money += 1;
                            return "【你从" + this.name + "身上搜到0.1元！】";
                        }
                        if (t > 60) {
                            this.hp -= n.role.att();
                            return "【你碰到一个奇怪的东西...】";
                        }
                    },
                    winEvent: function () {
                        e("scr_data").randomEvent[10] += 1;
                        return "【“(ಥ_ಥ)有人耍流氓哇”】";
                    },
                    lostEvent: function () {
                        return "【你被吃瓜群众围殴，损失9999点生命！】";
                    }
                },
                813: {
                    name: "流浪汉(暴)",
                    lv: 32,
                    hp: 1150,
                    maxHp: 1150,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 99, 5, 3]],
                    des: "快把钱交出来，就饶你一命！",
                    skill: function () {
                        var t = Math.random(), n = Math.max(parseInt(400 * t - o.def), 0);
                        e("scr_data").role.hp -= n;
                        return "【" + this.name + "使用「疯狂」，你受到" + n + "点伤害】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        e("scr_data").randomEvent[10] += 1;
                        return "【你抢回被偷的钱！】";
                    },
                    lostEvent: function () {
                        var t = e("scr_data"), n = parseInt(Math.max(.2 * t.money, 0));
                        t.money -= n;
                        return "【你损失20%的钱！】";
                    }
                },
                814: {
                    name: "流浪汉(失业)",
                    lv: 46,
                    hp: 1670,
                    maxHp: 1670,
                    att: 0,
                    def: 99999,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 3,
                    drop: [[100, 0, 6, 1]],
                    des: "求求你给我找一份工作吧！(ಥ﹏ಥ)~哇！哇~哇——！",
                    skill: function () {
                        var t = (233 - o.def) * (this.publicVar + 1), n = 233 * (this.publicVar + 1);
                        e("scr_data").role.hp -= t;
                        this.hp -= n;
                        this.publicVar += 1;
                        return "【你和流浪一起抱头痛哭，你损失" + t + "点生命，流浪汉损失" + n + "点生命】";
                    },
                    defSkill: function () {
                        e("scr_data");
                        var t = 66 * this.publicVar;
                        this.hp += t;
                        return "【你在安慰流浪汉，流浪汉恢复了" + t + "点生命】";
                    },
                    winEvent: function () {
                        e("scr_data").randomEvent[10] += 1;
                        return "";
                    },
                    lostEvent: void 0
                },
                815: {
                    name: "流浪汉(赌)",
                    lv: 66,
                    hp: 2300,
                    maxHp: 2300,
                    att: 0,
                    def: 60,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 99, 9, 3]],
                    des: "如果你赢啦我给你1毛钱，输啦我剁你一根手指，如何？",
                    skill: function () {
                        var t = e("scr_data");
                        if (100 * Math.random() < 20 + 20 * this.publicVar) {
                            var n = 3 * (353 - o.def);
                            t.role.hp -= n;
                            return "【你输啦，损失" + n + "点生命】";
                        }
                        this.publicVar += 1;
                        t.money += 1;
                        return "【你赢啦，获得0.1元！】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        e("scr_data").randomEvent[10] += 1;
                        return "";
                    },
                    lostEvent: function () {
                        var t = e("scr_data"), n = parseInt(Math.max(.25 * t.money + this.publicVar, 0));
                        t.money -= n;
                        return "【你损失全部赢得钱，和自己25%的钱！】";
                    }
                },
                816: {
                    name: "流浪汉(毒)",
                    lv: 92,
                    hp: 3080,
                    maxHp: 3080,
                    att: 0,
                    def: 92,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 3,
                    achieve: 2,
                    getAtt: 2,
                    drop: [[100, 11, 2, 1]],
                    des: "！",
                    skill: function () {
                        var t = e("scr_data"), n = 560 - o.def;
                        this.publicVar += 1;
                        var a = 60 * this.publicVar;
                        t.role.hp -= n + a;
                        return "【流浪汉使用「撕咬」，你受到" + n + "点伤害，每回合损失" + a + "点生命（" + this.publicVar + "层）】";
                    },
                    defSkill: function () {
                        var t = e("scr_data");
                        this.publicVar += 1;
                        var n = 60 * this.publicVar;
                        t.role.hp -= n;
                        return "【中毒：每回合损失" + n + "点生命（" + this.publicVar + "层）】";
                    },
                    winEvent: function () {
                        e("scr_data").randomEvent[10] += 1;
                        return "";
                    },
                    lostEvent: function () {
                        var t = e("scr_data"), n = parseInt(Math.max(.3 * t.money, 0));
                        t.money -= n;
                        return "【你损失30%的钱！】";
                    }
                },
                //特殊事件怪物属性传送门
                900: {
                    name: "电锯男",
                    lv: 35,
                    hp: 1200,
                    maxHp: 1200,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 0,
                    achieve: 2,
                    getAtt: 2,
                    drop: [[100, 4, 1, 2]],
                    des: "“站好喽~别动啊~”",
                    skill: function () {
                        e("scr_data").role.hp -= 9999;
                        return "【电锯男使用「电锯！」，你损失9999点生命！】";
                    },
                    defSkill: void 0,
                    winEvent: void 0,
                    lostEvent: function () {
                        var t = e("scr_data"), n = 2 * t.randomEvent[13] + 2;
                        t.money += n;
                        t.randomEvent[13] = 0;
                        return "【“哎呀~舒服了~舒服了”。你获得" + (n / 10).toFixed(1) + "元】";
                    }
                },
                901: {
                    name: "受伤的火狐",
                    lv: 20,
                    hp: 200,
                    maxHp: 1e3,
                    att: 10,
                    def: 0,
                    publicVar: 0,
                    escapeRate: 0,
                    enemyEscapeRate: 0,
                    lostHealth: 3,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 9, 1, 1]],
                    des: "火狐周身散发着火红的光芒！",
                    skill: function () {
                        this.hp += 60;
                        return "【火狐正在自愈！恢复自身60点生命】";
                    },
                    defSkill: void 0,
                    winEvent: void 0,
                    lostEvent: void 0
                },
                902: {
                    name: "再生虫",
                    lv: 1,
                    hp: 5,
                    maxHp: 5,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: 100,
                    enemyEscapeRate: 0,
                    lostHealth: 20,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 9, 1, 1]],
                    des: "散发着彩色光芒的蝴蝶",
                    skill: function () {
                        var t = e("scr_data"), n = e("scr_public"), a = t.kills[1];
                        if (0 == a) {
                            t.role.hp += 200;
                            t.role.hp > n.role.maxHp() && (t.role.hp = n.role.maxHp());
                            return "【" + this.name + "在给你治疗！你回复200点生命】";
                        }
                        this.publicVar += 2;
                        var i = 200 * a * this.publicVar;
                        t.role.hp -= i;
                        return "【剧毒：每回合损失" + i + "点生命】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        var t = e("scr_data");
                        t.kills[1] += 1;
                        if (1 == t.kills[1]) return "「我知道，这是我无法逃脱的宿命。但是啊，愚蠢的人类，你将为此付出代价！」";
                    },
                    lostEvent: void 0
                },
                903: {
                    name: "恶狗",
                    lv: 6,
                    hp: 250,
                    maxHp: 250,
                    att: 15,
                    def: 0,
                    publicVar: 0,
                    escapeRate: 35,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 3, 2, 1]],
                    des: "“%&cnm#@*”",
                    skill: function () {
                        var t = e("scr_data"), n = 100 * Math.random();
                        this.publicVar += 1;
                        if (n < 20 * this.publicVar) {
                            var a = 2 * this.att;
                            t.role.hp -= a;
                            return "【" + this.name + "使用「疯咬」，你损失" + a + "点生命！】";
                        }
                        return "";
                    },
                    defSkill: void 0,
                    winEvent: void 0,
                    lostEvent: void 0
                },
                904: {
                    name: "孩子她妈",
                    lv: 8,
                    hp: 315,
                    maxHp: 315,
                    att: 10,
                    def: 0,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[30, 7, 1, 2], [50, 12, 1, 2]],
                    des: "“N——M——B——！”",
                    skill: function () {
                        var t = e("scr_data");
                        if (100 * Math.random() < 50) return "【" + this.name + "使用「红色高跟鞋」，但是被你躲开啦！】";
                        var n = 4 * this.att - o.def;
                        t.role.hp -= n;
                        return "【" + this.name + "使用「红色高跟鞋」，正中靶心，你损失" + n + "点生命！】";
                    },
                    defSkill: void 0,
                    winEvent: void 0,
                    lostEvent: void 0
                },
                907: {
                    name: "勒索二人组",
                    lv: 20,
                    hp: 710,
                    maxHp: 710,
                    att: 85,
                    def: 10,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 99, 5, 3]],
                    des: "来人呀！！！抓小偷啦！————",
                    skill: void 0,
                    defSkill: void 0,
                    winEvent: void 0,
                    lostEvent: function () {
                        var t = e("scr_data"), n = parseInt(Math.max(.5 * t.money, 0));
                        t.money -= n;
                        return "【你损失一半的钱！】";
                    }
                },
                908: {
                    name: "银环蛇（精英）",
                    lv: 6,
                    hp: 210,
                    maxHp: 210,
                    att: 1,
                    def: 0,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 3,
                    achieve: 1,
                    getAtt: 2,
                    drop: [[100, 3, 3, 1]],
                    des: "~嘶~嘶！~",
                    skill: function () {
                        var t = Math.max(7 - o.def, 0);
                        this.publicVar += 1;
                        var n = t * this.publicVar;
                        e("scr_data").role.hp -= n;
                        return "【中毒：每回合损失" + n + "点生命（" + this.publicVar + "层）】";
                    },
                    defSkill: void 0,
                    winEvent: void 0,
                    lostEvent: void 0
                },
                909: {
                    name: "醉汉（精英）",
                    lv: 15,
                    hp: 545,
                    maxHp: 545,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 1,
                    getAtt: 2,
                    drop: [[100, 20, 1, 2]],
                    des: "“不还酒，就别想走！”",
                    skill: function () {
                        var t = Math.max(120 - o.def, 0);
                        this.hp -= 99;
                        e("scr_data").role.hp -= t;
                        return "【醉汉使用「拼命」，你损失" + t + "点生命，醉汉损失99点生命！】";
                    },
                    defSkill: void 0,
                    winEvent: void 0,
                    lostEvent: void 0
                },
                910: {
                    name: "大肚男（幕后操手）",
                    lv: 200,
                    hp: 6645,
                    maxHp: 6645,
                    att: 1200,
                    def: 450,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 2,
                    achieve: 1,
                    getAtt: 2,
                    drop: [[100, 99, 60, 3]],
                    des: "“滚开！敢打老子女人的注意？”",
                    skill: void 0,
                    defSkill: void 0,
                    winEvent: function () {
                        e("scr_data").chioce2[6] += 1;
                        return "";
                    },
                    lostEvent: void 0
                },
                911: {
                    name: "大肚男（幕后操手）",
                    lv: 200,
                    hp: 6645,
                    maxHp: 6645,
                    att: 1200,
                    def: 450,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 2,
                    achieve: 1,
                    getAtt: 2,
                    drop: [[100, 99, 60, 3]],
                    des: "“滚开！敢打老子女人的注意？”",
                    skill: void 0,
                    defSkill: void 0,
                    winEvent: function () {
                        e("scr_data").chioce2[6] += 1;
                        return "";
                    },
                    lostEvent: void 0
                },
                996: {
                    name: "蒙面人",
                    lv: 99,
                    hp: 99999,
                    maxHp: 99999,
                    att: 0,
                    def: 9999,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 0, 4, 1], [10, 4, 1, 2]],
                    des: "“想知道我是谁？那是不可能的！”",
                    skill: function () {
                        var t = e("scr_data"), n = 2 * Math.random() + 1, a = parseInt(o.maxHp * n);
                        t.role.hp -= a;
                        return "【蒙面人使用「闷棍Max」，你损失" + a + "点生命！】";
                    },
                    defSkill: void 0,
                    winEvent: void 0,
                    lostEvent: function () {
                        var t = e("scr_data"), n = e("scr_public");
                        t.ifFollow[0] = 0;
                        t.distance = 300;
                        t.button[0] = !1;
                        t.button[1] = !0;
                        t.button[2] = !0;
                        n.ifNotify = !0;
                        n.save();
                        n.init();
                        return "【你被蒙面人打晕，趴光衣服被丢在了省城门口！】";
                    }
                },
                997: {
                    name: "蒙面人",
                    lv: 99,
                    hp: 9999,
                    maxHp: 9999,
                    att: 0,
                    def: 9999,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 0, 4, 1], [10, 4, 1, 2]],
                    des: "“想知道我是谁？那是不可能的！”",
                    skill: function () {
                        var t = e("scr_data"), n = 2 * Math.random() + 1, a = parseInt(o.maxHp * n);
                        t.role.hp -= a;
                        return "【蒙面人使用「闷棍Max」，你损失" + a + "点生命！】";
                    },
                    defSkill: void 0,
                    winEvent: void 0,
                    lostEvent: function () {
                        e("scr_data").distance = 99;
                        return "【你被蒙面人打晕，食物全丢，趴光衣服被丢在了县城门口！】";
                    }
                },
                998: {
                    name: "游戏作者",
                    lv: 999,
                    hp: 9999,
                    maxHp: 9999,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 999,
                    achieve: 0,
                    getAtt: 1,
                    drop: [],
                    des: "“哈哈哈哈哈哈！你是想抵抗神的旨意么？”",
                    skill: function () {
                        var t = e("scr_data"), n = parseInt(.3 * o.maxHp);
                        t.role.hp -= n;
                        e("scr_effect").attackEfect1();
                        return "【啊哈哈哈你的游戏数据正在被作者删除啊哈哈哈游戏已损坏游戏已损坏】";
                    },
                    defSkill: function () {
                        return "【啊哈哈哈你的游戏数据正游戏已损坏啊哈哈哈你的游戏数据正】";
                    },
                    winEvent: function () {
                        var t = e("scr_data");
                        t.itemNum[12] += 1;
                        return "获得【MMP】*1【眼泪】*1（用于解锁隐藏剧情，你已拥有" + t.itemNum[12] + "）";
                    },
                    lostEvent: function () {
                        var t = e("scr_data2");
                        JSON.parse(cc.sys.localStorage.getItem("userData")) && cc.sys.localStorage.removeItem("userData");
                        t.initMoney = 50;
                        t.gameData[0] = 0;
                        e("scr_public").save2();
                        cc.director.loadScene("start");
                        return "你的存档已被作者清除，游戏即将自动关闭";
                    }
                },
                999: {
                    name: "游戏GM",
                    lv: 999,
                    hp: 999999,
                    maxHp: 999999,
                    att: 9999,
                    def: 9999,
                    publicVar: 0,
                    escapeRate: 0,
                    enemyEscapeRate: 0,
                    lostHealth: 0,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 0, 4, 1], [10, 4, 1, 2]],
                    des: "“你好，你已经被我盯上了哟~”",
                    skill: function () {
                        var t = e("scr_data"), n = parseInt(.2 * o.maxHp);
                        t.role.hp -= n;
                        return "【“叫你丫的刷！啊！还刷不刷？！”】";
                    },
                    defSkill: function () {
                        var t = e("scr_data"), n = parseInt(.2 * o.hp);
                        t.role.hp -= n;
                        return "【“你丫还敢还手？你还敢还手！”】";
                    },
                    winEvent: void 0,
                    lostEvent: function () {
                        e("scr_data").health = -9999;
                        return "";
                    }
                },
                //特殊怪物传送门
                100001: {
                    name: "草带男孩（中二病）",
                    lv: 1,
                    hp: 30,
                    maxHp: 30,
                    att: 1,
                    def: 1,
                    publicVar: 0,
                    escapeRate: 30,
                    enemyEscapeRate: 0,
                    lostHealth: 0,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[10, 26, 1, 2]],
                    des: "“我是要成为第一剑豪的男人！”",
                    skill: function () {
                        var t = e("scr_data"), n = 10 * t.kills[2];
                        if (100 * Math.random() < n) {
                            var a = 2 * this.att - o.def, i = this.def;
                            t.role.hp -= a;
                            cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= i;
                            return "【男孩使用「啊拖勒啊可痛！」，你受到" + a + "点伤害，并降低" + i + "点防御！】";
                        }
                        return "";
                    },
                    defSkill: function () {
                        var t = e("scr_data");
                        if (100 * Math.random() < Math.min(5 * t.kills[2], 75)) {
                            cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 9999;
                            return "【男孩使用「侯塞给！」】";
                        }
                        return "";
                    },
                    winEvent: function () {
                        var t = e("scr_data"), n = t.kills[2], a = "【“我是不会认输的！\n(▼ヘ▼#)”】";
                        t.specialEnemy[100001].lv += 3;
                        t.specialEnemy[100001].att += 15;
                        t.specialEnemy[100001].hp += 80;
                        t.specialEnemy[100001].maxHp += 80;
                        t.specialEnemy[100001].def += 6;
                        t.kills[2] += 1;
                        if (2 == n) {
                            t.itemNum[0] += 2;
                            a = "【男孩留下2个「果子」！然后逃走了！】你获得「果子」*2";
                        }
                        if (6 == n) {
                            t.itemNum2[1] += 3;
                            a = "【男孩留下3个「伤药」！然后逃走了！】你获得「伤药」*3";
                        }
                        if (12 == n) {
                            t.itemNum2[20] += 1;
                            a = "【男孩留下一块「板砖」！然后逃走了！】你获得「板砖」*1";
                        }
                        if (20 == n) {
                            t.itemNum2[18] += 1;
                            a = "【男孩留下一个「JK制服鞋」！然后逃走了！】你获得「JK制服鞋」*1";
                        }
                        return a;
                    },
                    lostEvent: function () {
                        e("scr_data").publicVar2[7] += 1;
                        return "【︿(￣︶￣)︿】";
                    }
                },
                100002: {
                    name: "泰坦巨蟒（特殊）",
                    lv: 25,
                    hp: 875,
                    maxHp: 875,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: 80,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 3,
                    getAtt: 3,
                    drop: [[100, 3, 3, 1]],
                    des: "特注：战斗结束后巨蟒不会回满血！！！",
                    skill: function () {
                        var t = e("scr_data"), n = parseInt(Math.max(.07 * this.hp - o.def, 0));
                        t.role.hp -= n;
                        return "【" + this.name + "使用「缠绕」，你受到" + n + "点伤害】";
                    },
                    defSkill: function () {
                        e("scr_data").specialEnemy[100002].hp = this.hp;
                        return "";
                    },
                    winEvent: void 0,
                    lostEvent: void 0
                },
                200001: {
                    name: "女流氓",
                    lv: 8,
                    hp: 315,
                    maxHp: 315,
                    att: 20,
                    def: 0,
                    publicVar: 0,
                    escapeRate: 40,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[20, 7, 1, 2], [10, 21, 1, 2], [100, 1, 1, 2]],
                    des: "“小帅哥，要不要跟姐姐玩玩呀”",
                    skill: function () {
                        var t = e("scr_data"), n = parseInt(this.att), a = parseInt(.1 * this.att), i = parseInt(.2 * this.att);
                        cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= a;
                        cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= i;
                        t.role.hp -= n;
                        return "【" + this.name + "使用「壁咚」，你受到" + n + "点伤害，攻击下降" + i + "点，防御下降" + a + "点！】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        var t = e("scr_data");
                        t.specialEnemy[200001].lv += 20;
                        t.specialEnemy[200001].att += 80;
                        t.specialEnemy[200001].hp += 520;
                        t.specialEnemy[200001].maxHp += 520;
                        t.specialEnemy[200001].def += 40;
                        t.orderTimes[7] = 0;
                        return "【姐姐有点小兴奋了呢\n(*/ω＼*)】";
                    },
                    lostEvent: function () {
                        e("scr_data").orderTimes[7] += 2;
                        return "【“￣へ￣！非要逼姐姐？”】";
                    }
                },
                300001: {
                    name: "火狐." + e("scr_data").kills[1] + "转（稀有）",
                    lv: 35,
                    hp: 510,
                    maxHp: 510,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: 100,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 9, 1, 1]],
                    des: "发现一只全身散发红色光芒的狐狸！",
                    skill: function () {
                        var t = e("scr_data"), n = 10 * t.kills[1] + 40;
                        if (100 * Math.random() < n) {
                            var a = parseInt(.12 * t.role.hp + 5 + 10 * t.kills[1]);
                            t.role.hp -= a;
                            this.hp += a;
                            return "【火狐使用「灵魂摄取」，你损失12%的当前生命值（" + a + "），火狐恢复" + a + "点生命！】";
                        }
                        return "";
                    },
                    defSkill: function () {
                        var t = e("scr_data");
                        if (100 * Math.random() < 10 * t.kills[1] + 40) {
                            var n = parseInt(.12 * (this.maxHp - this.hp) + 5 + 10 * t.kills[1]);
                            this.hp += n;
                            t.role.hp -= n;
                            return "【火狐使用「红灵护体」，恢复自身12%已损失的生命！(" + n + "点)，并对你造成" + n + "点伤害！】";
                        }
                        return "";
                    },
                    winEvent: function () {
                        var t = e("scr_data");
                        t.kills[1];
                        t.specialEnemy[300001].lv += 5;
                        t.specialEnemy[300001].att += 35;
                        t.specialEnemy[300001].hp += 210;
                        t.specialEnemy[300001].maxHp += 210;
                        t.specialEnemy[300001].def += 10;
                        t.kills[1] += 1;
                        return "";
                    },
                    lostEvent: void 0
                },
                300002: {
                    name: "山岭巨人（稀有）",
                    lv: 45,
                    hp: 2275,
                    maxHp: 2275,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: 50,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 8, 1, 1]],
                    des: "特注：战斗结束后巨人不会回满血！！！",
                    skill: function () {
                        var t = e("scr_data"), n = parseInt(Math.max(.1 * this.hp - o.def + this.def, 0));
                        t.role.hp -= n;
                        return "【" + this.name + "使用「咆哮」，你受到" + n + "点伤害】";
                    },
                    defSkill: function () {
                        var t = e("scr_data");
                        t.specialEnemy[300002].hp = this.hp;
                        this.def += 10;
                        t.role.hp -= this.def;
                        return "【巨人使用「石化皮肤」「强化反甲」，防御+10，你损失" + this.def + "点生命】";
                    },
                    winEvent: function () {
                        var t = e("scr_data");
                        t.kills[3] += 1;
                        t.specialEnemy[300002].lv += 5;
                        t.specialEnemy[300002].def += 15;
                        t.specialEnemy[300002].maxHp += 400;
                        t.specialEnemy[300002].hp = this.hp;
                        i.save();
                        if (0 == t.skillLv[16] && this.lv >= 55) {
                            t.skillLv[16] = 1;
                            return "【激活特性「防御强化2」】";
                        }
                        return "";
                    },
                    lostEvent: void 0
                },
                300003: {
                    name: "深渊巨蟒",
                    lv: 35,
                    hp: 875,
                    maxHp: 875,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 1,
                    getAtt: 3,
                    drop: [[100, 3, 3, 1], [100, 26, 1, 2]],
                    des: "特注：战斗结束后巨蟒不会回满血！！！",
                    skill: function () {
                        var t = e("scr_data"), n = parseInt(Math.max(.07 * this.hp - o.def, 0));
                        t.role.hp -= n;
                        return "【" + this.name + "使用「缠绕」，你受到" + n + "点伤害】";
                    },
                    defSkill: function () {
                        e("scr_data").specialEnemy[300003].hp = this.hp;
                        return "";
                    },
                    winEvent: function () {
                        e("scr_data").choice[6] += 1;
                        return "";
                    },
                    lostEvent: void 0
                },
                400001: {
                    name: "走私团伙" + parseInt(899 * Math.random() + 100) + "队",
                    lv: 100,
                    hp: 3345,
                    maxHp: 3345,
                    att: 0,
                    def: 234,
                    publicVar: 0,
                    escapeRate: 40,
                    enemyEscapeRate: 0,
                    lostHealth: 2,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[30, 11, 1, 1]],
                    des: "“你知不知道好奇能让人疯掉？”",
                    skill: function () {
                        var t = e("scr_data"), n = 100 * Math.random(), a = this.lv / 5;
                        this.publicVar += 1;
                        if (this.publicVar <= 10) {
                            if (n < a) {
                                var i = 9 * this.lv - o.def;
                                t.role.hp -= i;
                                return "【走私团伙，向你发射了一颗子弹！击中！你损失" + i + "点生命！】";
                            }
                            return "【走私团伙，向你发射了一颗子弹！但是未命中】";
                        }
                        return "【走私团伙没子弹啦！】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        var t = e("scr_data");
                        t.specialEnemy[400001].lv += 20;
                        t.specialEnemy[400001].hp += 500;
                        t.specialEnemy[400001].maxHp += 500;
                        t.specialEnemy[400001].def += 40;
                        return "【“你给老子等着！”】";
                    },
                    lostEvent: void 0
                },
                400002: {
                    name: "古树",
                    lv: 199,
                    hp: 19999,
                    maxHp: 19999,
                    att: 0,
                    def: 20,
                    publicVar: 0,
                    escapeRate: 100,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 0, 10, 1], [100, 1, 10, 1]],
                    des: "......",
                    skill: void 0,
                    defSkill: function () {
                        var t = e("scr_data");
                        t.specialEnemy[400002].hp = this.hp;
                        this.def += 20;
                        t.role.hp -= this.def;
                        return "【反弹！你损失" + this.def + "点生命】";
                    },
                    winEvent: function () {
                        var t = e("scr_data");
                        t.specialEnemy[400002].lv += 100;
                        t.specialEnemy[400002].def += 20;
                        t.specialEnemy[400002].maxHp += 1e4;
                        t.specialEnemy[400002].hp = this.hp;
                        i.save();
                        return "";
                    },
                    lostEvent: void 0
                },
                400003: {
                    name: "杀.破.狼",
                    lv: 60,
                    hp: 2025,
                    maxHp: 2025,
                    att: 310,
                    def: 121,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 3, 2, 1], [80, 9, 1, 1]],
                    des: "“嗷嗷嗷~”",
                    skill: function () {
                        var t = e("scr_data"), n = 100 * Math.random();
                        this.publicVar += 1;
                        if (n < 20 * this.publicVar) {
                            var a = 2 * this.att - o.def;
                            t.role.hp -= a;
                            return "【" + this.name + "使用「暴击」，你损失" + a + "点生命！】";
                        }
                        return "";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        var t = e("scr_data");
                        t.specialEnemy[400003].lv += 20;
                        t.specialEnemy[400003].att += 150;
                        t.specialEnemy[400003].hp += 620;
                        t.specialEnemy[400003].maxHp += 620;
                        t.specialEnemy[400003].def += 50;
                        if (this.lv >= 160 && 0 == t.skillLv[20]) {
                            t.skillLv[20] = 1;
                            return "【激活特性「防御强化3」！】";
                        }
                        return "";
                    },
                    lostEvent: void 0
                },
                900001: {
                    name: "壮汉（精英）",
                    lv: 15,
                    hp: 575,
                    maxHp: 575,
                    att: 60,
                    def: 0,
                    publicVar: 0,
                    escapeRate: 10,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 1,
                    getAtt: 1,
                    drop: [[100, 1, 2, 2], [30, 23, 1, 2]],
                    des: "“老子的钱，你也敢捡？”",
                    skill: function () {
                        this.att += parseInt(.1 * this.att);
                        return "【壮汉使用「狂暴」，壮汉攻击增加】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        var t = e("scr_data");
                        t.specialEnemy[900001].lv += 30;
                        t.specialEnemy[900001].att += 180;
                        t.specialEnemy[900001].hp += 1e3;
                        t.specialEnemy[900001].maxHp += 1e3;
                        t.specialEnemy[900001].def += 60;
                        return "";
                    },
                    lostEvent: function () {
                        var t = e("scr_data"), n = parseInt(Math.max(.5 * t.money, 0));
                        t.money -= n;
                        return "【你损失一半的钱！】";
                    }
                },
                900002: {
                    name: "女(流浪)汉子",
                    lv: 20,
                    hp: 998,
                    maxHp: 998,
                    att: 50,
                    def: 36,
                    publicVar: 0,
                    escapeRate: 10,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 1,
                    getAtt: 1,
                    drop: [[100, 0, 2, 1], [30, 22, 1, 2]],
                    des: "“(╬￣皿￣)=○这是我先看到的”",
                    skill: function () {
                        var e = parseInt(.3 * this.def), t = parseInt(.1 * this.hp);
                        cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= e;
                        this.hp += t;
                        return "【女汉子使用「王之怒视」，你降低" + e + "点防御，女汉子很开心，恢复了" + t + "点生命】";
                    },
                    defSkill: void 0,
                    winEvent: function () {
                        var t = e("scr_data");
                        t.specialEnemy[900002].lv += 40;
                        t.specialEnemy[900002].att += 120;
                        t.specialEnemy[900002].hp += 1400;
                        t.specialEnemy[900002].maxHp += 1400;
                        t.specialEnemy[900002].def += 90;
                        return "";
                    },
                    lostEvent: void 0
                },
                900003: {
                    name: "陈晓（大大）",
                    lv: 500,
                    hp: 16500,
                    maxHp: 16500,
                    att: 1500,
                    def: 1150,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 1,
                    getAtt: 1,
                    drop: [[100, 14, 6, 2], [100, 7, 1, 2]],
                    des: "“小伙，过来抽根烟？”",
                    skill: function () {
                        var e = this.att + o.def, t = parseInt(.2 * (this.maxHp - this.hp));
                        c.role.hp -= e;
                        this.hp += t;
                        return "【陈晓使用「晓风.霸王拳」，对你造成" + e + "点伤害，自身恢复" + t + "点生命】";
                    },
                    defSkill: function () {
                        if (100 * Math.random() < Math.min(this.lv / 50 + 20, 80)) {
                            var t = parseInt(.5 * o.att);
                            e("scr_data").role.hp -= t;
                            cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= 999999;
                            return "【" + this.name + "使用「格挡」「反弹」，你减少" + t + "点生命！】";
                        }
                        return "";
                    },
                    winEvent: function () {
                        var t = e("scr_data");
                        t.specialEnemy[900003].lv += 500;
                        t.specialEnemy[900003].att += 1500;
                        t.specialEnemy[900003].hp += 16e3;
                        t.specialEnemy[900003].maxHp += 16e3;
                        t.specialEnemy[900003].def += 1150;
                        return "";
                    },
                    lostEvent: function () {
                        e("scr_data").itemNum2[19] -= 1;
                        return "【枪被抢走一把！你损失「枪」*1！】";
                    }
                },
                900004: {
                    name: "？？？？",
                    lv: 1,
                    hp: 999999,
                    maxHp: 999999,
                    att: 300,
                    def: 0,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 3,
                    achieve: 1,
                    getAtt: 1,
                    drop: [],
                    des: "",
                    skill: function () {
                        if (this.att < 2 * o.att) {
                            this.att += 20;
                            this.lv += 1;
                            c.specialEnemy[900004].att = this.att;
                        }
                        c.specialEnemy[900004].hp = this.hp;
                        if (this.lv > 30) {
                            var e = 2 * Math.max(this.att - o.def, 0);
                            c.role.hp -= e;
                            return "【？使用「学习.暴击」你受到" + e + "点伤害！】";
                        }
                        if (this.lv > 100) {
                            e = 2 * this.att;
                            c.role.hp -= e;
                            return "【？使用「学习.破防」你受到" + e + "点伤害！】";
                        }
                        if (this.lv > 200) {
                            e = 2 * this.att;
                            var t = parseInt(.2 * e);
                            this.hp += t;
                            c.role.hp -= e;
                            return "【？使用「学习.吸血」你受到" + e + "点伤害，？恢复" + t + "点生命！】";
                        }
                        if (this.lv > 500) {
                            this.publicVar += 1;
                            e = 2 * this.att, t = parseInt(.2 * e);
                            var n = parseInt(.2 * this.att * this.publicVar);
                            this.hp += t;
                            c.role.hp -= e + n;
                            cc.find("Event/scr_fight").getComponent("scr_fight").correct[1] -= parseInt(.05 * o.def);
                            return "【？使用「进化.毒暴」你受到" + e + "点伤害，附加" + n + "点毒性伤害，防御降低5%。？恢复" + t + "点生命！】";
                        }
                        return "";
                    },
                    defSkill: function () {
                        if (this.def < 2 * o.def) {
                            this.def += 10;
                            this.lv += 1;
                            c.specialEnemy[900004].def = this.def;
                            c.specialEnemy[900004].lv = this.lv;
                        }
                        c.specialEnemy[900004].hp = this.hp;
                        if (this.lv > 150) {
                            var e = parseInt(.5 * this.def);
                            c.role.hp -= e;
                            return "【？使用「学习.反弹」你受到" + e + "点伤害！】";
                        }
                        if (this.lv > 700) {
                            e = 2 * this.att;
                            c.role.hp -= e;
                            cc.find("Event/scr_fight").getComponent("scr_fight").publicVar -= parseInt(.4 * o.att);
                            return "【？使用「进化.离子护甲」，格挡40%伤害，你受到" + e + "点反弹伤害！】";
                        }
                        return "";
                    },
                    winEvent: function () {
                        var t = e("scr_data");
                        t.specialEnemy[900004].lv += 999;
                        t.specialEnemy[900004].maxHp += 999999;
                        t.specialEnemy[900004].hp = this.hp;
                        i.save();
                        return "“如果我不存在...整个世界将会陷入混乱...”";
                    },
                    lostEvent: void 0
                },
                900005: {
                    name: "晓风基因计划",
                    lv: 500,
                    hp: 599999,
                    maxHp: 599999,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: 100,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 1,
                    getAtt: 1,
                    drop: [[100, 17, 4, 2]],
                    des: "「晓风：由于基因计划属于研发失败的产品，有些功能并不完善，目前还不具备自动修复能力；但是在这个世界的某处，还沉睡着一个来自同一胚胎、即将完工的伟大作品！」",
                    skill: function () {
                        if (this.att < 1500) {
                            this.att += 4;
                            this.lv += 1;
                            c.specialEnemy[900005].att = this.att;
                        }
                        c.specialEnemy[900005].hp = this.hp;
                        if (this.lv > 580) {
                            this.publicVar += 1;
                            var e = this.att, t = parseInt(.05 * this.att * this.publicVar);
                            c.role.hp -= e + t;
                            return "【基因计划使用「进化.感染」你受到" + e + "点伤害，附加" + t + "点生化伤害！】";
                        }
                        return "";
                    },
                    defSkill: function () {
                        if (this.def < 600) {
                            this.def += 2;
                            this.lv += 1;
                            c.specialEnemy[900005].def = this.def;
                            c.specialEnemy[900005].lv = this.lv;
                        }
                        c.specialEnemy[900005].hp = this.hp;
                        if (this.lv > 530) {
                            var e = Math.max(this.def - 28, 0);
                            c.role.hp -= e;
                            return "【基因计划使用「模仿.反弹」你受到" + e + "点伤害！】";
                        }
                        return "【基因计划静静的看着你...】";
                    },
                    winEvent: function () {
                        c.choice[6] += 1;
                        return "";
                    },
                    lostEvent: void 0
                },
                900006: {
                    name: "一块黑色的石头",
                    lv: 200,
                    hp: 299999,
                    maxHp: 299999,
                    att: 0,
                    def: 0,
                    publicVar: 0,
                    escapeRate: 100,
                    enemyEscapeRate: 0,
                    lostHealth: 1,
                    achieve: 0,
                    getAtt: 1,
                    drop: [[100, 8, 6, 1]],
                    des: "「特注：这真的是块石头！」",
                    skill: function () {
                        c.specialEnemy[900006].hp = this.hp;
                        return "";
                    },
                    defSkill: function () {
                        if (this.def < 300) {
                            this.def += 1;
                            c.specialEnemy[900006].def = this.def;
                        }
                        c.specialEnemy[900006].hp = this.hp;
                        var e = 2 * this.def;
                        c.role.hp -= e;
                        return "【你受到" + e + "点反弹伤害！】";
                    },
                    winEvent: function () {
                        c.choice[6] += 1;
                        return "";
                    },
                    lostEvent: void 0
                },
                900007: {
                    name: "暴走的流浪汉",
                    lv: 40,
                    hp: 3900,
                    maxHp: 3900,
                    att: 90,
                    def: 50,
                    publicVar: 0,
                    escapeRate: -9999,
                    enemyEscapeRate: 0,
                    lostHealth: 2,
                    achieve: 1,
                    getAtt: 1,
                    drop: [],
                    des: "“？NM~敢抢老子东西？”",
                    skill: function () {
                        if (4 == this.publicVar) {
                            var e = this.att * (1 + this.publicVar);
                            c.role.hp -= e;
                            return "【" + this.name + "使用「叫尼玛抢！还敢不敢抢？」，你损失" + e + "点生命！】";
                        }
                        this.publicVar += 1;
                        var t = this.att, n = parseInt(.1 * this.att * this.publicVar);
                        c.role.hp -= t + n;
                        cc.find("Event/scr_fight").getComponent("scr_fight").correct[0] -= parseInt(.05 * o.att);
                        return "【" + this.name + "使用「连推带踹！」你受到" + t + "点伤害，附加" + n + "流血，攻击降低5%！】";
                    },
                    defSkill: function () {
                        this.att += parseInt(.05 * this.att);
                        return "【" + this.name + "使用「暴跳如雷」，流浪汉攻击强化！】";
                    },
                    winEvent: function () {
                        var t = e("scr_data");
                        t.specialEnemy[900007].lv += 20;
                        t.specialEnemy[900007].att += 63;
                        t.specialEnemy[900007].hp += 2e3;
                        t.specialEnemy[900007].maxHp += 2e3;
                        t.specialEnemy[900007].def += 23;
                        var n = cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent").randomItemNum || 3;
                        t.itemNum[2] += n;
                        return "【获得「易拉罐」*" + n + "！】";
                    },
                    lostEvent: function () {
                        var t = e("scr_data");
                        t.money -= parseInt(.3 * t.money);
                        return "【你被抢走30%的金钱！】";
                    }
                }
            };
            t.exports = r;
        }
    });
    cc._RF.pop();
}, {
    scr_data: "scr_data",
    scr_data2: "scr_data2",
    scr_effect: "scr_effect",
    scr_public: "scr_public"
}]