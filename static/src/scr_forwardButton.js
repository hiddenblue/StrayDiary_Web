scr_forwardButton = [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "7e6b7ZHdulNI6LuPQKyXMkr", "scr_forwardButton");
    cc.Class({
        extends: cc.Component,
        properties: {},
        fight: function () {
            var t = this.getFigthId();
            e("scr_data").enemyId = t;
            e("scr_public").save();
            cc.find("Event/scr_fight").getComponent("scr_fight").fight(t);
        },
        getFigthId: function () {
            for (var e = this.getEnemyRate(), t = 100 * Math.random(), n = e.length, a = 0; a <= n - 2; a++) if (t > e[a][0] && t <= e[a + 1][0]) return e[a + 1][1];
        },
        getEnemyRate: function () {
            e("scr_data");
            var t = [], n = e("scr_public").regionId();
            1e3 == n ? t = [[0, 0], [20, 1], [35, 2], [60, 3], [70, 4], [85, 100001], [95, 100002], [100, 706]] : 2e3 == n ? t = [[0, 0], [25, 21], [45, 22], [65, 23], [75, 24], [85, 25], [92, 26], [99, 100001], [100, 27]] : 3e3 == n ? t = [[0, 0], [25, 31], [40, 32], [50, 33], [60, 34], [70, 35], [80, 36], [88, 300001], [95, 300002], [100, 100001]] : 4e3 == n && (t = [[0, 0], [20, 41], [40, 42], [60, 43], [70, 44], [85, 45], [95, 400001], [100, 100001]]);
            return t;
        },
        getItemNum: function () {
            return 2;
        },
        //func 探索找到道具
        getItem: function () {
            e("scr_public").regionId();
            var t = e("scr_data"), n = this.getDrop(), a = cc.find("Event/scr_fight").getComponent("scr_fight").getItem(n), i = function () {
                var t = e("scr_data"), a = t.itemNum2[17] + t.publicVar3[9], i = 100 * Math.random(), c = "";
                i < a && (c = "没发现道具" != (c = cc.find("Event/scr_fight").getComponent("scr_fight").getItem(n)) ? "\n【放大镜：发现" + c + "】" : "\n【放大镜：什么也没有发现！】");
                return c;
            }(), c = function () {
                var t = e("scr_data"), a = "";
                if (1 == t.publicVar[1]) {
                    var i = t.day + 20, c = 100 * Math.random();
                    c < i && (a = "没发现道具" != (a = cc.find("Event/scr_fight").getComponent("scr_fight").getItem(n)) ? "\n【修罗：发现" + a + "】" : "\n【修罗：什么也没有发现！】");
                }
                return a;
            }(), o = function () {// 晓月手链升级
                var t = e("scr_data"), a = 1 * (t.itemNum2[27] + t.publicVar3[17]), i = 100 * Math.random(), c = "";
                if (i < a) if ("没发现道具" != (c = cc.find("Event/scr_fight").getComponent("scr_fight").getItem(n))) c = "\n【晓月：发现" + c + "】";
                else {
                    t.money += 1;
                    c = "\n【晓月：发现0.1元！】";
                }
                return c;
            }();
            if ("没发现道具" != a) a = i + c + o + "发现" + a; else {
                t.publicVar2[1] += 1;
                a = i + c + "什么也没有找到！";
                if (t.skillLv[23] > 0) {
                    t.money += 1;
                    a += "【逆袭：金钱+0.1】";
                }
                if (t.day <= 5) {
                    t.itemNum[4] += 2;
                    a += "【作者的呵护：获得「亚麻」*2（游戏前5天有效）】";
                }
            }
            e("scr_effect").playText("Canvas/Text/txt_notify", a, 60);
        },
        getDrop: function () {
            var t = [], n = this.getItemNum(), a = e("scr_public").regionId();
            1e3 == a && (t = [[20, 0, n, 1], [30, 1, n, 1], [30, 4, n, 1], [20, 5, n, 1], [7, 6, n, 1], [2, 8, 1, 1]]);
            2e3 == a && (t = [[75, 2, n, 1], [22, 99, n, 3], [15, 10, n, 1], [16, 7, n, 1]]);
            3e3 == a && (t = [[15, 0, n, 1], [35, 1, n, 1], [35, 4, n, 1], [15, 5, n, 1], [5, 6, n, 1], [2, 8, 1, 1]]);
            4e3 == a && (t = [[75, 2, n, 1], [25, 99, n, 3], [20, 10, n, 1], [10, 99, 2, 3], [1, 0, 1, 14]]);
            return t;
        },
        randomId: function (e) {
            for (var t = 100 * Math.random(), n = e.length, a = 0; a <= n - 2; a++) if (t > e[a] && t <= e[a + 1]) return a + 1;
        },
        event: function () {
            var e = 1;//判断该区域是否遇到事件
            e = 100 * Math.random() <= this.eventPartitionRate() ? this.randomId([0, 10, 20, 25, 35, 45, 60, 70, 80, 90, 100]) : this.regionEventId();
            cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent").startEvent(e);
        },
        eventPartitionRate: function () {//每个不同的区域遇到事件的概率，
            var t = e("scr_public").regionId();
            return 1e3 == t ? 60 : 2e3 == t ? 30 : 3e3 == t ? 50 : 4e3 == t ? 50 : void 0;
        },
        regionEventId: function () {
            var t = 1, n = e("scr_public").regionId();//todo
            1e3 == n && (t = 1e3 + this.randomId([0, 25, 50, 75, 100]));
            2e3 == n && (t = 2e3 + this.randomId([0, 10, 20, 40, 50, 90, 100]));
            3e3 == n && (t = 3e3 + this.randomId([0, 15, 25, 35, 50, 65, 80, 100]));
            4e3 == n && (t = 4e3 + this.randomId([0, 10, 25, 55, 75, 100]));
            return t;
        },
        JKuniforms: function () {//JK制服的功能在这里哦
            var t = e("scr_data"), random = 100 * Math.random(), rate = 2 * t.itemNum2[24];
            if (random <= rate) {
                i.QLnewfunction.addxiaoyue_favorability(1);
                //t.friend_xiaoyue.favorability += 1;
                t.publicVar[7] += 1;
            }
        },
        smoker: function () {//tag 香烟的功能在这实现
            var t = e("scr_data"), random = 100 * Math.random(), rate = 3 * t.orderTimes[1] - t.orderTimes[4];
            if (random <= rate) {
                t.skillLv[4] = 1;
            }
            //test
            cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent").startEvent(3);
            //var func = e("scr_public");
            //func.QLnewfunction.addxiaoyue_favorability(2);
        },
        //tag 前进各种概率传送门
        forward: function () {
            var rate = 100 * Math.random(), n = e("scr_data");
            this.reduceRes();
            this.recoveryHp();
            this.reduceHealth();
            this.JKuniforms();
            this.smoker();//新手保护措施，可修改是否遇到怪物和敌人
            const BONUS_MULTIPLIER = 10;
            const ENERGY_INCREMENT = 10;
            const CLOSE_DISTANCE = 10;
            const MEDIUM_DISTANCE = 20;
            const LOW_RATE_THRESHOLD = 20 + BONUS_MULTIPLIER * (n.publicVar[1] === 3 ? 1 : 0);
            const MEDIUM_RATE_THRESHOLD = 80;
            const HIGH_RATE_THRESHOLD = 100;

            if (rate <= LOW_RATE_THRESHOLD) {
                if (n.distance <= CLOSE_DISTANCE) {
                    n.publicVar2[3] += 1;
                    this.getItem();
                } else {
                    n.publicVar2[2] += 1;
                    this.fight();
                    n.energy += ENERGY_INCREMENT * (n.energyconsumetimes - 1);
                }
            } else if (rate <= MEDIUM_RATE_THRESHOLD) {
                n.publicVar2[3] += 1;
                this.getItem();
            } else if (rate <= HIGH_RATE_THRESHOLD) {
                if (n.distance <= MEDIUM_DISTANCE) {
                    n.publicVar2[3] += 1;
                    this.getItem();
                } else {
                    n.publicVar2[4] += 1;
                    this.event(); // Restore energy
                    n.energy += ENERGY_INCREMENT * (n.energyconsumetimes - 1);
                }
            }
        },
        reduceHealth: function () {
            var t = e("scr_data");
            if (t.maxHealth > 100) {
                t.maxHealth = 100;
            }
            if (t.health > t.maxHealth) {
                t.health = t.maxHealth;
            }
            if (e("scr_public").autoEat() && t.hunger <= 0) {
                if (100 * Math.random() < 50) {
                    t.health -= 1;
                    e("scr_effect").textZoon("Canvas/Text/txt_health");
                }
            }
        },
        recoveryHp: function () {
            var t = e("scr_data"), n = e("scr_public"),
                a = (4 + 8 * t.skillLv[3] + 36 * t.skillLv[17] + 2 * t.itemNum2[23]) * (1 + t.skillLv[21]), i = n.role.maxHp();
            t.role.hp += a;
            t.role.hp > i && (t.role.hp = i);
        },
        reduceRes: function () {
            var t = e("scr_data");
            e("scr_effect");
            this.addDistance();
            this.switchForwardButton();
            t.energy -= this.Energy;
            t.hunger > 0 && (t.hunger -= 5);
        },
        addDistance: function () {
            e("scr_data").distance += 1;
            e("scr_effect").textZoon("Canvas/Text/txt_distance");
        },
        switchForwardButton: function () {
            var t = e("scr_data"), n = (e("scr_effect"), e("scr_public"));
            //强制传送门2
            if (100 == t.distance && 1 == t.stayDay[1]) {
                t.button[0] = !1;
                t.button[1] = !0;
                t.button[2] = !0;
                n.ifNotify = !0;
            }
            101 == t.distance && (t.button[1] = !1);
        },
        playBGM: function () {
            cc.audioEngine.stopAll();
            var e = cc.game._persistRootNodes;
            for (var t in e) var n = e[t].getComponent("scr_BGM").BGM4;
            cc.audioEngine.play(n, !1, 1);
        },
        callBack: function () {
            var t = e("scr_data"), n = e("scr_effect"), a = e("scr_public"), i = this.dryUp();
            a.ifGameOver();
            this.Energy = 10 * t.energyconsumetimes;
            if (t.energy >= this.Energy && 0 == i)
                if (t.day >= 180) this.end();
                else if (290 == t.distance && 1 == t.ifFollow[0]) {
                    t.plotId = 1;
                    t.enemyId = 108;
                    a.save();
                    cc.director.loadScene("plot");
                } else if (299 == t.distance) if (1 == t.ifFollow[0]) {
                    t.button[0] = !1;
                    t.button[1] = !0;
                    t.button[2] = !0;
                    a.init();
                    t.ifFollow[0];
                    t.plotId = 5;
                    a.save();
                    cc.director.loadScene("plot");
                } else {
                    t.button[0] = !1;
                    t.button[1] = !0;
                    t.button[2] = !0;
                    t.distance += 1;
                    a.save();
                    a.init();
                    //强制传送门
                    n.playText("Canvas/Text/txt_notify", "你已到达省城！", 60);
                } else this.forward();
            else if (t.energy < this.Energy) n.playText("Canvas/Text/txt_notify", "精力不足！", 60);
            else if (100 == t.distance) {
                t.button[0] = !0;
                n.playText("Canvas/Text/txt_notify", "再待下去迟早会被发现，还是去省城看看吧！", 60);
            } else t.distance < 300 && t.distance > 100 && n.playText("Canvas/Text/txt_notify", "还是先去省城整顿一下吧！", 60);
            t.distance < 100 ? cc.find("Game/scr_mainUIinit").getComponent("scr_mainUIinit").showButton() : a.init();
            t.distance > 300 && (t.distance = 300);
            a.autoEat();
            a.init();
            a.save();
            this.shieldButton();
        },
        end: function () {
            var t = e("scr_effect"), n = e("scr_data"), a = e("scr_public");
            ({
                0: function () {
                    n.energy = 1e3;
                    n.publicVar[13] = 2;
                    n.publicVar3[3] += 1;
                    a.save();
                    t.playText("Canvas/Text/txt_notify", "整个城市被大雾笼罩，身边的人影开始慢慢消失，周围没有一点声音...", 60);
                },
                1: function () {
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "一个男人的身影缓缓浮现，一步步向我走了过来...", 60);
                },
                2: function () {
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "“欢迎你的到来，我的朋友；这里是游戏的终点，我是这个游戏的作者”", 60);
                },
                3: function () {
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "“虽然你可能有很多疑问，但是我并不想在这里回答你；我到这里来，只是想收获我的游戏成果”", 60);
                },
                4: function () {
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "“但是在此之前，有些东西我需要向你交代一下。”", 60);
                },
                5: function () {
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "“首先，在这个游戏里，只有两个真正的角色————你和我”", 60);
                },
                6: function () {
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "“其他角色，只不过是我所创造的虚拟角色”", 60);
                },
                7: function () {
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "“这个世界中既不存在「父亲」，也没有「刀疤男」和「通缉犯」”", 60);
                },
                8: function () {
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "“我并不关心这些虚拟角色的「命运」，我只在意你体验完游戏后，获得了什么”", 60);
                },
                9: function () {
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "“希望你能认真的回答我几个问题，我将根据问题的答案、和你在游戏中的所有选择，给出我的个人评价”", 60);
                },
                10: function () {
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "“如果评价没有达到我的预期，你的游戏存档将会被我删除，那么请开始答题吧~”", 60);
                },
                11: function () {
                    cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent").startEvent(10001);
                },
                111: function () {
                    cc.find("Canvas/Text/txt_notify").y = 277;
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "“你的答题评分为" + n.publicVar[11] + "（满分30，与刚才十个题目有关）。\n这部分设计目的、只是想引导你去思考这些问题，你随便怎么选都可以，我不会去要求你必须怎么样”", 60);
                },
                112: function () {
                    var e = cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent");
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "“游戏评分为" + e.gamePoint + "（满分52，与你在游戏中的选择有关）。\n这部分是考察你游戏的策略性和你的性格（游戏性格，不必较真）”", 60);
                },
                113: function () {
                    cc.find("Canvas/Text/txt_notify").y = 577;
                    var e = cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent");
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "“属性评分为" + e.attPoint + "（满分18，攻防血属性越「低」分数越高！）\n这里很有必要解释下为何、要这么设计：\n第一，我想让你注重培养伙伴、被动技和某些道具，而不仅是仅用属性碾压 \n第二，低属性通关比可能比高属性通关更具挑战性！”", 60);
                },
                114: function () {
                    var a = 59 - 10 * e("scr_data2").gameData[4];
                    cc.find("Canvas/Text/txt_notify").y = 77;
                    var i = cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent");
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "“总分为" + i.totalPoint + "，低于通关所需分数（" + a + "分）。”", 60);
                },
                115: function () {
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "“你的存档即将被我删除。”", 60);
                },
                116: function () {
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "“但是，被我删档后，重新开始游戏，会有部分NPC保留对你的记忆，并且通关所需评分将至49分。”", 60);
                },
                117: function () {
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "“我会在这里等着你，再会吧~”", 60);
                },
                118: function () {
                    e("scr_data2").gameData[4] = 1;
                    e("scr_public").save2();
                    JSON.parse(cc.sys.localStorage.getItem("userData")) && cc.sys.localStorage.removeItem("userData");
                    cc.director.loadScene("start");
                },
                211: function () {
                    cc.find("Canvas/Text/txt_notify").y = 277;
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "“你的答题评分为" + n.publicVar[11] + "（满分30，与刚才十个题目有关）。\n这部分设计目的、只是想引导你去思考这些问题，你随便怎么选都可以，我不会去要求你必须怎么样”", 60);
                },
                212: function () {
                    var e = cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent");
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "“游戏评分为" + e.gamePoint + "（满分52，与你在游戏中的选择有关）。\n这部分是考察你游戏的策略性和你的性格（游戏性格，不必较真）”", 60);
                },
                213: function () {
                    cc.find("Canvas/Text/txt_notify").y = 577;
                    var e = cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent");
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "“属性评分为" + e.attPoint + "（满分18，攻防血属性越「低」分数越高！）\n这里很有必要解释下为何、要这么设计：\n第一，我想让你注重培养伙伴、被动技和某些道具，而不仅是仅用属性碾压 \n第二，低属性通关比可能比高属性通关更具挑战性！”", 60);
                },
                214: function () {
                    var a = 59 - 10 * e("scr_data2").gameData[4];
                    cc.find("Canvas/Text/txt_notify").y = 77;
                    var i = cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent");
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "“总分为" + i.totalPoint + "，高于通关所需分数（" + a + "分）。你可以过关啦~”", 60);
                },
                215: function () {
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "“不过你想看到一个什么样的结局，将由你自己去选择。我需要指出的是，无论你如何选择，游戏都将结束。请做出你的选择。”", 60);
                },
                216: function () {
                    cc.find("Event/scr_mainUIEvent").getComponent("scr_mainUIEvent").startEvent(20001);
                },
                311: function () {
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "听说中年大叔遗体被人领走啦，被一个中年妇女。（地点：省城。结局：安息吧，痛苦）", 60);
                },
                312: function () {
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "落满枫叶的小路上，晓月正和几位同学手舞足蹈的说着些什么，不知道她是否还记得那个安静的少年呢？（地点：省城。结局：两个世界）", 60);
                },
                313: function () {
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "再次碰到小兰时，她衣着端庄，在一家化妆品店做销售，她说，“还是自立过得舒坦呀，虽然没啥钱...”（地点：省城。结局：从零开始）", 60);
                },
                314: function () {
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "我再也没有等到碧瑶的消息，她能还清那些巨额的债款吗？”（地点：省城。结局：懵懂的青春）", 60);
                },
                315: function () {
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "老爷爷，你还好吗？（地点：省城。结局：无奈的人生）", 60);
                },
                316: function () {
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "与世隔绝的大山中，地质队长正在台灯下撰写报告；而在另一头，她的女儿正准备在论坛上通宵怼那些侮辱她偶像的人。（地点：山脉。结局：隔阂）", 60);
                },
                317: function () {
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "堂主的母亲突发脑溢血过世，他像孤魂一样终日在山间游荡着...（地点：山脉。结局：游荡的灵魂）", 60);
                },
                318: function () {
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "那个可疑的村庄已被警察封锁。（地点：山脉。结局：封锁的造毒窝点）", 60);
                },
                319: function () {
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "老人的房子前已长满杂草，房内早已空荡荡...（地点：山脉。结局：天空的流星）", 60);
                },
                320: function () {
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "年轻的妈妈和小女孩依旧在河边散步，小女孩对着一个流浪汉做了一个鬼脸...（地点：县城。结局：榜样）", 60);
                },
                321: function () {
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "抽烟的中年女人找到一个胖嘟嘟的男友。“虽然经常挨打，但是总算不是一个人了”，女人抽着烟，淡淡的说道。（地点：县城。结局：可怜还是可恨？）", 60);
                },
                322: function () {
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "送糖的小男孩，作文拿到全县第一名，梦里笑醒的妈妈、大半夜跑到便利店给他买了一大盒五颜六色的棒棒糖...等待着儿子的苏醒。（地点：县城。结局：甜甜的男孩）", 60);
                },
                323: function () {
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "三个流浪汉已经三分县城，各自守着自己的地盘...（地点：县城。结局：扩散的黑暗）", 60);
                },
                324: function () {
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "呆萌的女贼打算放弃原来的职业，因为她找到了更稳定的生存方法————捡塑料瓶...（地点：山脉。结局：孤儿的挣扎）", 60);
                },
                325: function () {
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "推开栅栏，院子里长满了杂草，似乎很久没人居住...（地点：家）", 60);
                },
                326: function () {
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "门是开着的，屋里没有灯火，静悄悄的；青灰色的屋顶、几颗新绿色的嫩芽，在夕阳的余晖下，显得格外的安静。一只猫咪在门前的阳光下打着哈欠（地点：家）", 60);
                },
                327: function () {
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "一个满头白发的老人，忽然呆在了门口....", 60);
                },
                328: function () {
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "...全剧终...", 60);
                },
                329: function () {
                    n.publicVar3[3] += 1;
                    t.playText("Canvas/Text/txt_notify", "「感谢您能陪我看到最后！我是晓风，再会啦~」", 60);
                },
                330: function () {
                    e("scr_data2").gameData[4] = 0;
                    e("scr_public").save2();
                    cc.director.loadScene("end");
                },
                411: function () {
                    n.plotId = 1001;
                    a.save();
                    cc.director.loadScene("plot");
                },
                412: function () {
                    n.plotId = 1002;
                    a.save();
                    cc.director.loadScene("plot");
                },
                413: function () {
                    n.plotId = 1003;
                    a.save();
                    cc.director.loadScene("plot");
                }
            })[n.publicVar3[3]]();
            a.save();
            a.init();
        },
        dryUp: function () {
            return !1;
        },
        shieldButton: function () {
            this.node.off("touchstart", this.callBack, this);
            this.node.runAction(cc.tintTo(.3, 114, 199, 255));
            this.scheduleOnce(this.onLoad, .05);
        },
        autoEat: function () {
            //饱食度传送门
            var t = e("scr_data"), n = e("scr_public");
            if (t.hunger <= 0) {
                if (t.itemNum[0] >= 1) {
                    t.itemNum[0] -= 1;
                    t.orderTimes[5] += 1;
                    t.hunger += 20;
                    100 * Math.random() < 15 && (t.health += 1);
                    n.save();
                    n.textZoon("Canvas/Button/txt_state");
                    return !0;
                }
                if (t.itemNum2[0] >= 1) {
                    t.itemNum2[0] -= 1;
                    t.orderTimes[2] += 1;
                    t.hunger += 70;
                    n.save();
                    n.textZoon("Canvas/Button/txt_state");
                    return !0;
                }
                return !0;
            }
            return !1;
        },
        onLoad: function () {
            this.endActionId = 0;
            this.node.runAction(cc.tintTo(.3, 255, 255, 255));
            this.node.on("touchstart", this.callBack, this);
        }
    });
    cc._RF.pop();
}, {
    scr_data: "scr_data",
    scr_data2: "scr_data2",
    scr_effect: "scr_effect",
    scr_public: "scr_public"
}]