scr_fight = [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "e0873SPr91PW4GARejADMmt", "scr_fight");
    cc.Class({
        extends: cc.Component,
        properties: {},
        creatText: function (e, t, n) {
            var a = new cc.Node(t), i = (a.addComponent(cc.Label), cc.sequence(cc.scaleTo(.2, 1.3), cc.scaleTo(.1, 1)));
            a.parent = e;
            a.color = new cc.Color(0, 0, 0);
            a.getComponent(cc.Label).overflow = 3;
            a.getComponent(cc.Label).horizontalAlign = 1;
            a.setContentSize(630, 200);
            a.getComponent(cc.Label).string = n;
            a.getComponent(cc.Label).lineHeight = 60;
            a.getComponent(cc.Label).fontSize = 36;
            a.setScale(0, 0);
            a.runAction(i);
        },
        getItem: function (t) {//func getitem函数，第一位是概率，第二位是在itemnum中的位置，第三个是获得的数量，第四个是判断是itemnum1还是2还是钱
            for (var n = "", a = t.length, i = e("scr_public"), c = e("scr_data"), o = 0; o < a; o++) {
                if (100 * Math.random() < t[o][0]) {
                    var r = t[o][1], s = t[o][2], l = t[o][3];
                    if (c.inBattle != 1) {
                        s *= c.energyconsumetimes;
                    }
                    if (2 == l) {
                        var u = i.itemName2;
                        c.itemNum2[r] += s;
                        n = n + "【" + u[r] + "】*" + s;
                    }
                    if (1 == l) {
                        u = i.itemName;
                        c.itemNum[r] += s;
                        n = n + "【" + u[r] + "】*" + s;
                    }
                    if (3 == l) {
                        c.money += s;
                        n = n + "【金钱】*" + (s / 10).toFixed(1);
                    }
                }
            }
            "" == n && (n = "没发现道具");
            i.save();
            return n;
        },
        fight: function (t) {
            var n = e("scr_data"), a = e("scr_public"), i = e("scr_effect"),
                inFight = this,
                o = e("scr_enemy")[t], theEnemy = {},
                attackButton = cc.find("Canvas/Fight/fight"), ESCbutton = cc.find("Canvas/Fight/escape"), u = cc.find("Canvas/Fight/state"), theescapetext = cc.find("Canvas/Fight/notify2"),
                roleHpLabel = cc.find("Canvas/Fight/roleHp"), d = cc.find("Canvas/Fight/enemyHp"), m = cc.find("Canvas/Fight/escapeRate"), attText = cc.find("Canvas/Fight/notify"),
                gunButton = cc.find("Canvas/Fight/gunButton"),
                // 查找Canvas中的gunButton节点
                blackKnifetimes = 1,
                redTimes = 0,
                bloodnum = 0,
                attTimes = 0,
                glassesTimes = 0,
                g = [0, 0, 0],
                b = n.figthExp,
                stateOnyou = (n.skillLv[4]/*烟瘾*/, n.buffState),
                isWeiLanvaild = n.choice[8],
                ammo = n.itemNum2[19],
                nextCrit = 0,
                BYstatus = {
                    att: parseInt(n.publicVar[7] + 1600),			/*陈碧瑶攻击计算传送门*/
                    crit: 25 + 75 * n.friendSkill[5],
                    bleedNum: 1,
                    attackTimes: 1
                };
            var Askill = cc.instantiate(gunButton);
            Askill.active = true;
            Askill.setPosition(364, -423 + 100);
            cc.find("Canvas/Fight").addChild(Askill);
            var text = ["关", "开"];
            Askill.getComponent("cc.Label").string = "";
            Askill.on("touchstart", function () {
                if (blackKnifetimes > 0) {
                    n.Askills[0] === 0 ? n.Askills[0] = 1 : n.Askills[0] = 0;
                    Askill.getComponent("cc.Label").string = "居合斩\n（" + blackKnifetimes + "）\n【" + text[n.Askills[0]] + "】";
                }
            }, Askill)
            n.publicVar[4] = 0;
            n.Askills[0] = 0;
            n.inBattle = 1;//进入战斗
            n.enemyId = t;
            this.correct = [0, 0];//临时攻击和防御力，随便减少
            this.publicVar = 0;
            for (var I in o) theEnemy[I] = o[I];//这段代码使用 for...in 循环，遍历对象 o 中的所有可枚举属性，并将它们赋值给对象 r。
            var youinFight = {
                maxHp: a.role.maxHp(),
                att: a.role.att(),
                def: a.role.def()
            };
            (function () {//用来判断特殊怪物是不是已经死了，死了就重置血量
                if (6 == t.toString().length) {
                    n.specialEnemy[t].hp <= 0 && (n.specialEnemy[t].hp = n.specialEnemy[t].maxHp);
                    var e = n.specialEnemy[t];
                    theEnemy.lv = e.lv;
                    theEnemy.hp = e.hp;
                    theEnemy.maxHp = e.maxHp;
                    theEnemy.att = e.att;
                    theEnemy.def = e.def;
                }
            })();
            //修罗难度传送门
            (function () {
                if (2 == n.publicVar[1]) {
                    theEnemy.hp += parseInt(Math.max(1 * theEnemy.hp, 1));
                    theEnemy.maxHp += parseInt(Math.max(1 * theEnemy.maxhp, 1));
                    theEnemy.att += parseInt(Math.max(1 * theEnemy.att, 1));
                    theEnemy.def += parseInt(Math.max(1 * theEnemy.def, 1));
                }
                else if (1 == n.publicVar[1]) {
                    var e = n.day, a = e / 40 + 1, i = parseInt(Math.pow(e, 1.5) / 6);
                    if (6 == t.toString().length) {
                        var c = n.specialEnemy[t];
                        theEnemy.hp == theEnemy.maxHp && (theEnemy.hp = parseInt(c.hp * a));
                        theEnemy.maxHp = parseInt(c.maxHp * a);
                        theEnemy.att += 2 * i;
                        theEnemy.def += i;
                    } else {
                        theEnemy.hp = parseInt(theEnemy.hp * a);
                        theEnemy.maxHp = parseInt(theEnemy.maxHp * a);
                        theEnemy.att += 2 * i;
                        theEnemy.def += i;
                    }
                }
            })();
            (function () {
                if (n.escapeBattle == 1) {
                    for (const id in n.winEnemy) {
                        if (n.winEnemy[id] == n.enemyId) {
                            theEnemy.hp = 1;
                            theEnemy.maxHp = 1;
                            theEnemy.att = 1;
                            theEnemy.def = 1;
                            break;
                        }
                    }
                }
            })();

            //tag 战斗特效传送门
            var yourDEF = youinFight.def, Edes = theEnemy.des, k = ["均  衡", "进  攻", "防  御"];
            var rateofshanbi;
            attackButton.targetOff(attackButton);//攻击时隐藏按钮？推测
            ESCbutton.targetOff(ESCbutton);
            attackButton.on("touchstart", function () {
                theEnemy.hp > 0 && n.role.hp > 0 && function () {
                    var youHitsText = "你使用【普攻】", a = "", o = "", s = "", l = "", u = "", f = "", BY = "", theSword = "", thenet = "", booldtext = "", damageTimesText = 100;
                    inFight.publicVar = 0;
                    var m = n.figthState;
                    var laststate;
                    var critChance;
                    rateofshanbi = 20;
                    /*if ("undefined" == laststate) {
                        laststate = m;
                    }
                    if (laststate != m) {// 废弃的功能
                        laststate = m;
                        return thenet = "【网络】御坂美琴射出超电磁炮";
                    }*/
                    if (1 == n.skillLv[25]) {
                        var y = 100 * Math.random();
                        if (y < 10) {
                            var ifTexthaveit = parseInt(.03 * youinFight.maxHp);
                            inFight.publicVar += theEnemy.def;
                            n.role.hp += ifTexthaveit;
                            n.role.hp > youinFight.maxHp && (n.role.hp = youinFight.maxHp);
                            s = "。【霸气】无视防御，生命恢复" + ifTexthaveit;
                        }
                    }
                    "undefined" != typeof theEnemy.defSkill && (u = theEnemy.defSkill());//敌人的防御技能
                    if (function () {
                        {
                            if (1 == n.ifFollow[0] && 1 == n.friendSkill1[2]) {//声援概率计算处
                                var e = parseInt(n.friend_xiaoyue.favorability / 4), t = 100 * Math.random();
                                return t < e;
                            }
                            return !1;
                        }
                    }()) {
                        var N = parseInt(.1 * youinFight.maxHp), T = parseInt(.03 * youinFight.att);
                        n.role.hp += N;
                        inFight.correct[0] += T;
                        n.role.hp > youinFight.maxHp && (n.role.hp = youinFight.maxHp);
                        f = "【声援：生命+" + N + "，攻击+" + T + "】";
                    }
                    if (critChance = 2 * n.itemNum2[3] + 1, 100 * Math.random() < critChance || 1 == nextCrit) {
                        nextCrit = 1;
                    }
                    if (0 == m && b[0] >= 100) {// 破防特效
                        if (RateofKnife = 2 * n.itemNum2[8], 100 * Math.random() < RateofKnife && 1 == nextCrit) {
                            var ifTexthaveit = new RegExp("触发");
                            inFight.publicVar = theEnemy.def;
                            ifTexthaveit.test(youHitsText) ? youHitsText += "【破防】" : youHitsText += "，触发【破防】";
                            a = "，无视防御以及对方的任何格挡技能！";
                        }

                    }
                    //造成伤害计算传送门                                                        此部分攻击力用于无视防御
                    var theDamage = parseInt(Math.max(youinFight.att + inFight.correct[0] + inFight.publicVar - theEnemy.def * (1 - 2 * n.itemNum2[15] / 100), 0));
                    //自己的攻击力    晓月加的临时攻击力     附带的攻击力，来自特性或者敌人技能  减去敌人的防御力（受披风影响） 最低为0
                    if (0 == m) {
                        theDamage = parseInt(theDamage * (1 + b[0] / 500));
                        damageTimesText *= (1 + b[0] / 500);
                        g[0] += 1;
                    }
                    if (1 == m) {
                        if (n.randomBuff[3] == 1) {
                            var S = parseInt(.10 * youinFight.maxHp), damageTimes = ((1.32 + b[1] / 200) * 1.25);
                            theDamage = parseInt(theDamage * damageTimes);
                            n.role.hp -= S;
                            g[1] += 1;
                            damageTimesText *= damageTimes;
                            l = "「暴血：你损失" + S + "点生命(10%最大生命)";//随机buff3
                        } else {
                            var S = parseInt(.08 * youinFight.maxHp), damageTimes = (1.32 + b[1] / 200);
                            theDamage = parseInt(theDamage * damageTimes);
                            n.role.hp -= S;
                            g[1] += 1;
                            damageTimesText *= damageTimes;
                            l = "「拼命：你损失" + S + "点生命(8%最大生命)」";
                        }
                    }
                    if (2 == m) {
                        theDamage = parseInt(.7 * theDamage);
                        g[2] += 1;
                        damageTimesText *= .7;
                    }
                    if (1 == stateOnyou[0]) {
                        theDamage = parseInt(1.3 * theDamage);/*狂暴*/
                        damageTimesText *= 1.3;
                    }
                    if (isWeiLanvaild >= 0) {
                        (theDamage = parseInt((1 + 0.02 * isWeiLanvaild) * theDamage));
                        damageTimesText *= (1 + 0.02 * isWeiLanvaild);
                    }/*陷阱*/
                    if (1 == n.buffState[2]) {//自信buff
                        if (n.winsstreaks <= 3) {
                            theDamage = parseInt((1 + 0.1 * n.winsstreaks) * theDamage);
                            damageTimesText *= (1 + 0.1 * n.winsstreaks);
                        } else {
                            theDamage = parseInt((1 + 0.3) * theDamage);
                            damageTimesText *= (1 + 0.3 * n.winsstreaks);
                        }
                    }
                    if (1 == n.skillLv[27]) {//宿醉特效
                        theDamage = parseInt(.7 * theDamage);
                        damageTimesText *= .7;
                    }
                    if (n.itemNum2[10] > 2 && n.Askills[0] == 1 && blackKnifetimes > 0) {// 黑刀大招
                        let damageTimes = 1 + 1;
                        for (let int = 0; int <= attTimes; int++) {
                            damageTimes += (int / 2);
                        }
                        damageTimesText *= damageTimes;
                        youHitsText = youHitsText.replace(/普攻|割裂|枪击/, "居合");
                        /暴击|爆头/.test(youHitsText) && (youHitsText = youHitsText.replace(/暴击|爆头/, "「斩，无赦！」"));
                        theDamage = parseInt(theDamage * damageTimes);
                        n.Askills[0] = 0;
                        blackKnifetimes -= 1;
                    }
                    if (1 == nextCrit) {
                        theDamage = parseInt(2 * theDamage);
                        youHitsText += "，触发【暴击】";
                        damageTimesText *= 2;
                        nextCrit = 0;
                        A();
                    }
                    if (n.itemNum2[19] > 0 && n.itemNum2[14] > 0 && n.publicVar[4] > 0) {//判断是否开枪
                        if (ammo > 0) {
                            ammo -= 1;
                        } else {
                            n.itemNum2[14] -= 1;
                        }
                        n.publicVar3[14] += 1;// 枪特效
                        var damageTimes = 1 + 0.5 * n.itemNum2[19];
                        theDamage = parseInt(theDamage * (damageTimes));
                        damageTimesText *= damageTimes;
                        youHitsText = youHitsText.replace(/普攻|割裂/, "枪击");
                        /暴击/.test(youHitsText) && (youHitsText = youHitsText.replace(/暴击/, "爆头"));
                    }
                    //特效传送门
                    if (!(0 == m && b[0] >= 100)) {
                        if (RateofKnife = 2 * n.itemNum2[8], 100 * Math.random() < RateofKnife) {//嗜血效果
                            var N = parseInt(.20 * theDamage), ifTexthaveit = new RegExp("触发");
                            n.role.hp += N;
                            n.role.hp > youinFight.maxHp && (n.role.hp = youinFight.maxHp);
                            ifTexthaveit.test(youHitsText) ? youHitsText += "【嗜血】" : youHitsText += "，触发【嗜血】";
                            a = "，恢复" + N + "点生命(出伤的20%)";
                        }
                    }
                    if (n.itemNum2[10] > 0) {//黑刀流血
                        var H = parseInt(n.itemNum2[10] * 0.1 * theDamage);
                        bloodnum += H;
                        youHitsText = youHitsText.replace("普攻", "割裂");
                        o = "，割裂流血" + H + "(出伤的" + n.itemNum2[10] * 10 + "%)";
                    }
                    0 != n.itemNum2[28] && (theSword = function () {// 物理学圣剑攻击特性
                        var thehit = parseInt((n.itemNum2[28] * 3 * theEnemy.maxHp) / 100);
                        thehit = thehit - theEnemy.def + inFight.publicVar;
                        thehit = Math.min(thehit, (youinFight.att + inFight.correct[0]) * n.itemNum2[28]);
                        thehit = Math.max(thehit, 0);
                        theEnemy.hp -= thehit;
                        return theSword = "【圣剑】造成" + thehit + "点伤害";
                    }())
                    var RateofKnife;//碧瑶攻击特效
                    1 == n.ifFollow[1] && (BY = function () {
                        var BYsattText = "。碧瑶使用【普攻】",
                            BYskillText = "", a = 100 * Math.random(),
                            BYsDamage = BYstatus.att - theEnemy.def + inFight.publicVar;
                        BYsDamage = Math.max(BYsDamage, 0);
                        if (a < BYstatus.crit) {
                            BYsDamage = parseInt(2.5 * BYsDamage);
                            BYsattText = BYsattText.replace(/普攻/, "暗杀250%");
                            if (n.friendSkill[8] > 0 && BYstatus.attackTimes % 2 == 0) {
                                BYsDamage = parseInt(4 * BYsDamage);
                                BYsattText = /暗杀250%/.test(BYsattText) ? BYsattText.replace(/暗杀250%/, "终结.蝶舞1000%") : BYsattText.replace(/普攻/, "终结400%");
                            }
                            if (n.friendSkill[3] > 0) {
                                var o = parseInt(.25 * BYsDamage * BYstatus.bleedNum), s = parseInt(.25 * theEnemy.def);
                                theEnemy.hp -= o;
                                theEnemy.def -= s;
                                BYstatus.bleedNum += 1;
                                BYskillText = BYskillText + "，附加" + o + "流血(25%出伤)，减少" + s + "点防御(25%敌防)";
                            }
                            if (n.friendSkill[4] > 0) {
                                var l = parseInt(.50 * BYsDamage);
                                n.role.hp += l;
                                BYskillText = BYskillText + "。你恢复" + l + "生命(50%出伤)";
                            }
                            if (n.friendSkill[6] > 0) {
                                nextCrit = 1;
                                BYskillText += "，你下次攻击必定暴击！";
                            }
                        }
                        theEnemy.hp -= BYsDamage;
                        BYstatus.attackTimes += 1;
                        return BYsattText = BYsattText + ("，造成" + BYsDamage + "点伤害") + BYskillText;
                    }());
                    theEnemy.hp -= theDamage;
                    if (bloodnum > 0) {
                        theEnemy.hp -= bloodnum;
                        booldtext = "。流血造成" + bloodnum + "伤害";
                    }
                    attTimes += 1;
                    youHitsText = youHitsText + "，对" + theEnemy.name + "造成" + theDamage + "点伤害" + a + o + s + l + u + f + BY + theSword + booldtext + "。你的总倍率为" + parseInt(damageTimesText) + "%";
                    cleanAttText();
                    inFight.creatText(attText, "roleNotify", youHitsText);
                    (function () {
                        refreshEnemyStatus();
                        theescapetext.getComponent("cc.Label").string = "";
                        i.textZoon2("Canvas/Fight/enemyHp");
                    })();
                    P();
                    isBattleEnd();
                    isYouLOst();
                    SaveGame();
                }();
                theEnemy.hp > 0 && n.role.hp > 0 && attackButton.getComponent("cc.Button").scheduleOnce(enemysturn, 0.3);//战斗没有结束则判断敌人是否逃跑，本来为一秒，改成0.3
            }, attackButton);
            ESCbutton.on("touchstart", function () {//逃跑功能
                var EscapeRate = calEscapeRate(), t = 100 * Math.random();
                n.skillLv[14] > 0 && (n.figthState = 2);//逃跑时自动进猥琐
                n.buffState[2] = 0;//清除自信
                cc.find("Canvas/Fight/state/text").getComponent("cc.Label").string = k[n.figthState];
                P();
                if (t > EscapeRate) {
                    theEnemy.hp > 0 && n.role.hp > 0 ? attackButton.getComponent("cc.Button").scheduleOnce(enemysturn, .2) : isYouLOst();
                    n.publicVar2[6] += 1;
                    cleanAttText();
                    i.playText("Canvas/Fight/notify2", "逃跑失败！", 60);
                } else {
                    var a = 1 + n.itemNum2[18];
                    n.escapeExp += a;
                    i.playText("Canvas/Text/txt_notify", "逃跑成功！\n逃跑技术+" + a + "（累计" + n.escapeExp + "）", 80);
                    leaveBattle();
                    afterbattleskill();
                }
            }, ESCbutton);
            refreshEnemyStatus();
            (function () {
                // 查找Canvas中的Fight节点，并设置其初始状态
                var e = cc.find("Canvas/Fight");
                cc.find("Canvas/Button").setScale(0, 0);  // 将Button节点的缩放设置为0，即不可见
                e.active = true;  // 设置Fight节点为可见
                e.scale = 0;  // 设置Fight节点的缩放为0
                e.runAction(cc.scaleTo(.5, 1));  // 使用动作使Fight节点缩放从0到1，动作时间为0.5秒
                cc.find("Canvas/Text/txt_notify").opacity = 0;  // 将通知文本节点的透明度设置为0
                O();  // 调用函数O()                
                (function () {
                    if (n.itemNum2[19] > 0) {  // 如果枪大于0
                        var e = cc.find("Canvas/Fight/gunButton");  // 查找Canvas中的gunButton节点
                        e.active = true;  // 设置gunButton节点为可见
                        gunLabel();  // 调用函数w()
                        e.targetOff(e);  // 移除之前的事件监听器
                        e.on("touchstart", function () {
                            // 在触摸事件发生时切换publicVar数组中索引为4的值，也就是是否使用枪
                            n.publicVar[4] === 0 ? n.publicVar[4] = 1 : n.publicVar[4] = 0;
                            gunLabel();  // 调用函数w()
                        }, e);
                    }
                })();

                // 设置f和m节点的缩放为1
                roleHpLabel.scale = 1;
                m.scale = 1;
            })();
            i.playText("Canvas/Fight/notify2", Edes, 80);
            function enemysturn() {
                var temp = n.role.hp;
                var e = theEnemy.enemyEscapeRate;
                if (0 != e) {
                    if (100 * Math.random() < e - 5 * n.itemNum2[15]) {
                        (function () {
                            P();
                            i.playText("Canvas/Text/txt_notify", theEnemy.name + "逃跑啦！", 80);
                            afterbattleskill();
                        })();
                        return;
                    }
                }
                var rateofRed,
                    enemyAttText = theEnemy.name + "攻击",
                    isTexthaveit = new RegExp("触发"), redjacker = "", jacker = "", state = "",
                    battleStance = n.figthState;
                if (rateofRed = 2 * n.itemNum2[11], 100 * Math.random() < rateofRed) {
                    //blackKnifetimes > 20 && (blackKnifetimes = 20);//防止黑刀层数超过20层
                    var d = 20 * (redTimes += 1), m = Math.round(.05 * youinFight.maxHp);
                    youinFight.def = Math.round(yourDEF * (d / 100 + 1));
                    n.role.hp += m;
                    n.role.hp > youinFight.maxHp && (n.role.hp = youinFight.maxHp);
                    enemyAttText += "。【火狐之灵】触发";
                    redjacker = "，生命恢复" + m + "，防御加成" + d + "%";
                }
                var mabuyirate, JackerRate, glassesRate, enemyATT = parseInt(Math.max(theEnemy.att - inFight.correct[1] - youinFight.def, 0));
                0 == battleStance && (enemyATT = parseInt(enemyATT * (1 - b[0] / 500)));
                if (2 == battleStance) {
                    var C = 100 + b[2];
                    enemyATT = parseInt(enemyATT * (.6 - b[2] / 500));
                }
                if (mabuyirate = Math.min(2 * n.itemNum2[4], 100), 100 * Math.random() < mabuyirate) {
                    //enemyATT = 0;
                    C = parseInt(.25 * youinFight.maxHp);
                    n.role.hp += C;
                    n.role.hp > youinFight.maxHp && (n.role.hp = youinFight.maxHp);
                    isTexthaveit.test(enemyAttText) ? enemyAttText = enemyAttText.replace("触发", "【自愈】触发，恢复" + C + "点生命(25%最大生命)") : enemyAttText += "。【自愈】触发，恢复" + C + "点生命(25%最大生命)";
                }
                if (JackerRate = 2 * n.itemNum2[9], 100 * Math.random() < JackerRate) {
                    C = parseInt((youinFight.maxHp - n.role.hp) / 2);
                    isTexthaveit.test(enemyAttText) ? enemyAttText = enemyAttText.replace("触发", "【止伤】触发") : enemyAttText += "。【止伤】触发";
                    jacker = "，恢复" + C + "点生命(50%已损生命)";
                }
                if (glassesRate = n.itemNum2[29] * 10, 100 * Math.random() < glassesRate) {// 军用护目镜在这里
                    var d = 10 * (glassesTimes += 1);
                    youinFight.def = Math.round(yourDEF * (d / 100 + 1));
                }
                n.role.hp -= enemyATT;
                if (2 == battleStance) {
                    C = parseInt(.15 * youinFight.maxHp);
                    n.role.hp += C;
                    n.role.hp > youinFight.maxHp && (n.role.hp = youinFight.maxHp);
                    state = "「猥琐：你恢复" + C + "点生命(15%最大生命)」";
                }
                enemyAttText = enemyAttText + "，你受到" + enemyATT + "点伤害" + jacker + redjacker + state;
                var temp_nowhp = n.role.hp;
                "undefined" != typeof theEnemy.skill && (enemyAttText = enemyAttText + "！" + theEnemy.skill());//敌人的攻击技能
                var temp_afterhp = n.role.hp;
                var damage = temp_nowhp - temp_afterhp;
                if (1 == n.skillLv[29]) {// 闪避技能！！！
                    var rate = Math.random() * 100;
                    if (rate < rateofshanbi) {
                        n.role.hp = temp;
                        enemyAttText = enemyAttText + "【闪避】你闪避了攻击！本回合你不受任何伤害";
                    }
                }
                if (1 == n.ifFollow[1]) {
                    var Text = "【守护】碧瑶帮你挡下了致命攻击并脱离了战斗";
                    if (n.role.hp <= 0) {
                        if (n.friendSkill[9] > 0) {
                            var m = Math.round(.05 * youinFight.maxHp);
                            n.role.hp = m;
                            enemyAttText += Text;
                            n.publicVar[8] = 0;
                            n.ifFollow[1] = 0;
                        }
                    }
                }// 碧瑶新技能
                inFight.creatText(attText, "enemyNotify", enemyAttText);
                O();
                (function () {
                    refreshEnemyStatus();
                    A();
                    theescapetext.getComponent("cc.Label").string = "";
                    i.textZoon2("Canvas/Fight/roleHp");
                    i.textZoon2("Canvas/Fight/escapeRate");
                })();
                isYouLOst();
                isBattleEnd();
                SaveGame();
            }
            function calEscapeRate() {
                var //e = Math.round(100 * (1 - theEnemy.hp / theEnemy.maxHp)), 
                    e = 10;
                t = (theEnemy.escapeRate + e + n.escapeExp / 10 + 2 * n.itemNum2[24] + n.publicVar3[11]).toFixed(1);
                t < 0 && (t = 0);
                return t = Math.min(t, 100);
            }
            function refreshEnemyStatus() {//战斗场景标签的内容
                roleHpLabel.getComponent("cc.Label").string = "ATT" + (youinFight.att + inFight.correct[0]) + "|" + "DEF" + (youinFight.def + inFight.correct[1]);
                d.getComponent("cc.Label").string = theEnemy.name + "LV" + theEnemy.lv + "\nHP" + theEnemy.hp + "\nATT" + theEnemy.att + " | " + "DEF" + theEnemy.def;
                m.getComponent("cc.Label").string = calEscapeRate() + "%";
                n.publicVar[4] > 0 && gunLabel();
                n.itemNum2[10] > 2 && blackknifeLabel();
            }
            function gunLabel() {
                cc.find("Canvas/Fight/gunButton").getComponent("cc.Label").string = "（" + n.itemNum2[14] + "）\n【" + ["关", "开"][n.publicVar[4]] + "】";
            }
            function blackknifeLabel() {
                var text = ["关", "开"];
                Askill.getComponent("cc.Label").string = "居合斩\n（" + blackKnifetimes + "）\n【" + text[n.Askills[0]] + "】";
            }
            function SaveGame() {
                a.save();
                a.save2();
                a.init();
            }
            function afterbattleskill() {
                var e = cc.find("Canvas/Button"), t = cc.find("Canvas/Text/txt_notify");
                if (n.role.hp <= 0) {
                    if (n.skillLv[24] > 0) {
                        if (100 * Math.random() < Math.min(Math.max(parseInt(n.publicVar3[12] / 5), 20), 40) && -9567 != theEnemy.escapeRate) {
                            n.role.hp = a.role.maxHp();
                            i.playText("Canvas/Text/txt_notify", "【圣斗士：我又回来啦！~】", 80);
                        } else n.role.hp = 1 + parseInt(50 * n.itemNum2[25] + .03 * a.role.maxHp() * n.itemNum2[25]);
                    } else n.role.hp = 1 + parseInt(50 * n.itemNum2[25] + .03 * a.role.maxHp() * n.itemNum2[25]);
                    if (n.day <= 1) {
                        n.role.hp = a.role.maxHp();
                        n.health += theEnemy.lostHealth;
                        i.playText("Canvas/Text/txt_notify", "【作者的守护：游戏前1天战斗失败不会受到惩罚，并且帮你补满血，请开心点玩游戏吧~】", 80);
                    }
                }
                cc.find("Canvas/Fight").runAction(cc.scaleTo(.3, 0));
                e.active = !0;
                e.runAction(cc.scaleTo(.3, 1));
                t.opacity = 255;
                n.enemyId = 0;
                (function () {
                    if (n.buffState[0] > 0) {
                        var e = 100 * Math.random();
                        e < 50 && (n.buffState[0] = 0);
                    }
                    if (n.choice[8] > 0) {
                        var e = 100 * Math.random();
                        e < 100 && (n.choice[8] = 0);
                    }
                })();
                cleanAttText();
                SaveGame();
            }
            function leaveBattle() {
                n.enemyId = 0;
                n.inBattle = 0;
                Askill.removeFromParent(false);
                SaveGame();
            }
            function isBattleEnd() {//func 战斗结束函数
                if (theEnemy.hp <= 0) {
                    P();
                    var alreadywin = false;
                    for (const id in n.winEnemy) {
                        if (n.winEnemy[id] == n.enemyId) {
                            alreadywin = true;
                            break;
                        }
                    }
                    if (!alreadywin) {
                        n.winEnemy.push(n.enemyId);
                    } else {
                    }
                    var e = theEnemy.drop, JKshoes = "", shouliandu = "",
                        fightwinText = "战斗胜利！\n获得", o = inFight.getItem(e),
                        achieve = function () {
                            var e = "", t = theEnemy.achieve;
                            if (0 != t && "undefined" != typeof t) {
                                n.achieve += t;
                                e = "。声望+" + t;
                            }
                            return e;
                        }();
                    1 == n.skillLv[5] && (shouliandu = function () {
                        var e = ["【平衡架势】", "【拼命架势】", "【猥琐架势】"], t = g.indexOf(Math.max.apply(Math, g));
                        n.figthExp[t] += 1;
                        {
                            if (n.figthExp[t] > 100) {
                                n.figthExp[t] = 100;
                                return "。" + e[t] + "熟练度已达最大值";
                            }
                            return "。" + e[t] + "熟练度+1";
                        }
                    }());
                    0 != n.itemNum2[18] && (JKshoes = function () {
                        var LV = 2 * n.itemNum2[18], rate = 100 * Math.random();
                        if (rate < LV) {
                            var getnum = 10;
                            n.energy += getnum;
                            return "【JK制服鞋】恢复" + getnum + "点精力!";
                        }
                        return "";
                    }());
                    var addstate = function () {
                        var e = theEnemy.getAtt, t = 100 * Math.random();
                        if (3 == n.publicVar[1]) {
                            e *= 2;
                        }
                        {
                            if (t < 20) {
                                n.role.def += e;
                                return "。防御提高" + e + "点！";
                            }
                            if (t < 60) {
                                n.role.att += e;
                                return "。攻击提高" + e + "点！";
                            }
                            n.role.maxHp += 5 * e;
                            return "。最大生命值提高" + 5 * e + "点！";
                        }
                    }(), XY = function (e) {
                        {
                            if (1 == n.ifFollow[0] && 1 == n.friendSkill1[3]) {
                                var t = 100 * Math.random();
                                if (t < 101) {
                                    var a = inFight.getItem(e);
                                    return "【晓月：" + a + "】";
                                }
                                return "";
                            }
                            return "";
                        }
                    }(e), XL = function (e) {
                        {
                            if (1 == n.publicVar[1]) {
                                var t = n.day + 20, a = 100 * Math.random();
                                if (a < t) {
                                    var i = inFight.getItem(e);
                                    return "【修罗：" + i + "】";
                                }
                                return "";
                            }
                            return "";
                        }
                    }(e), lucky = function (e) {
                        {
                            if (n.itemNum2[26] > 0) {
                                var t = 100 * Math.random(), a = n.itemNum2[26] + n.publicVar3[18];
                                if (t < a) {
                                    var i = inFight.getItem(e);
                                    return "【幸运石：" + i + "】";
                                }
                                return "";
                            }
                            return "";
                        }
                    }(e);
                    n.winTimes += 1;
                    n.winsstreaks += 1;

                    "没发现道具" == o && (fightwinText = fightwinText.replace("获得", ""));
                    fightwinText = lucky + XY + XL + JKshoes + fightwinText + o + addstate + shouliandu + achieve;
                    "undefined" != typeof theEnemy.winEvent && (fightwinText = fightwinText + "！\n" + theEnemy.winEvent()/*获胜之后在这里调用了一下敌人的函数*/);
                    leaveBattle();
                    inFight.scheduleOnce(function () {
                        i.playText("Canvas/Text/txt_notify", fightwinText, 80);
                        afterbattleskill();
                    }, 1);
                }
            }
            function isYouLOst() {
                if (n.role.hp <= 0) {
                    var e = "";
                    P();
                    roleHpLabel.stopAllActions();
                    m.stopAllActions();
                    var t = theEnemy.lostHealth || 0;
                    e = n.day < 20 ? "战斗失败！健康-" + t + "（健康为0时游戏结束）" : "战斗失败！健康-" + t;
                    n.winsstreaks = 0;
                    n.buffState[2] = 0;
                    n.health -= t;
                    "undefined" != typeof theEnemy.lostEvent && (e = e + "！\n" + theEnemy.lostEvent());
                    n.publicVar3[12] += 1;
                    leaveBattle();
                    inFight.scheduleOnce(function () {
                        i.playText("Canvas/Text/txt_notify", e, 80);
                        afterbattleskill();
                    }, 0.3);
                }
            }
            function A() {
                var e = [[4, 0], [0, 0], [-4, 0], [0, 0], [4, 0], [0, 0]], t = 0;
                inFight.schedule(function () {
                    cc.find("Canvas").parent.setPosition(e[t][0], e[t][1]);
                    t++;
                }, .05, 5);
            }
            function cleanAttText() {
                attText.removeAllChildren(!0);
            }
            function P() {
                roleHpLabel.scale = 0;
                m.scale = 0;
                attackButton.scale = 0;
                ESCbutton.scale = 0;
                u.scale = 0;
            }
            function O() {
                attackButton.scale = 1;
                ESCbutton.scale = 1;
                u.scale = 1;
            }
        },
        ifBeAttacked: function () {//传参函数
            var t = e("scr_data").enemyId;
            t && this.fight(t);
        },
        onLoad: function () {
            this.ifBeAttacked();
        }
    });
    cc._RF.pop();
}, {
    scr_data: "scr_data",
    scr_effect: "scr_effect",
    scr_enemy: "scr_enemy",
    scr_public: "scr_public"
}]