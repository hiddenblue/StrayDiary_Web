scr_achieve = [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "141caSLnsJIHJZ46hPGujwi", "scr_achieve");
    cc.Class({
        extends: cc.Component,
        properties: {},
        creatText: function (e, t, n) {
            var a = new cc.Node(t);
            a.addComponent(cc.Label);
            a.parent = e;
            a.setPosition(0, 0);
            a.color = new cc.Color(115, 115, 115);
            a.getComponent(cc.Label).overflow = 3;
            a.setContentSize(630, 300);
            a.getComponent(cc.Label).string = n;
            a.getComponent(cc.Label).lineHeight = 50;
            a.getComponent(cc.Label).fontSize = 32;
        },
        day: function () {
            var t = new Date(), n = parseInt(t.getTime() / 36e5);
            return parseInt(n - e("scr_data2").gameData[2]);
        },
        //成就传送门            
        onLoad: function () {
            var t = e("scr_data"), n = e("scr_data2"), a = e("scr_public"), i = t.publicVar2[2] + t.publicVar2[3] + t.publicVar2[4], c = t.itemNum2[17] + t.itemNum2[18] + t.itemNum2[20] + t.itemNum2[21] + t.itemNum2[22] + t.itemNum2[23] + t.itemNum2[24] + t.itemNum2[25], o = this.day(), r = t.friend_xiaoyue.favorability + t.publicVar[7], s = {
                0: "【第一次】第一次击败女贼（小学生）",
                1: "【dalao】声望达到99（" + t.achieve + "/99，目前版本声望系统暂未开放）",
                2: "【非酋矿老板】被劫匪抢劫66次！（" + t.publicVar2[0] + "/66，包括66次以上，下同）",
                3: "【非酋勘察队】前进探索999次，且啥也没找到比例超过25%！你目前一共前进探索" + i + "次，其中有" + t.publicVar2[1] + "次啥也没找到，占比" + (100 * t.publicVar2[1] / i).toFixed(1) + "%",
                4: "【非酋流浪汉】捡钱被打10次（" + t.randomEvent[0] + "/10），翻垃圾被抢10次（" + t.publicVar2[13] + "/10）",
                5: "【一身骚气∠( ᐛ 」∠)＿】前进探索999次，且战斗占比超过24%！你目前一共前进探索" + i + "次，其中战斗" + t.publicVar2[2] + "次（占比" + (100 * t.publicVar2[2] / i).toFixed(1) + "%），捡道具" + t.publicVar2[3] + "次（占比" + (100 * t.publicVar2[3] / i).toFixed(1) + "%），事件" + t.publicVar2[4] + "次（占" + (100 * t.publicVar2[4] / i).toFixed(1) + "%）",
                6: "【震惊！一小伙被十个阿姨轮流摸】被老奶奶摸钱10次（" + t.publicVar2[5] + "/10）！",
                7: "【扶我起来，我还能跑】逃跑失败999次（" + t.publicVar2[6] + "/999）",
                8: "【一个约定】“10年后，如果你还在，咱们就结婚吧！”女流氓：“嗯...”碰到女流氓49次（" + t.publicVar2[12] + "/49）！",
                9: "【巨人杀手】击杀山顶巨人10只或以上（" + t.kills[3] + "/10）",
                10: "【县城一霸】击败刀疤男",
                11: "【残废】触发烟瘾36次（" + t.publicVar2[8] + "/36）",
                12: "【对不起，我要做个坏人】罪恶值60（" + t.evil.evilValue + "/60）",
                13: "【抱走晓月】晓月好感400（" + t.friend_xiaoyue.favorability + "/400）",
                14: "【饥渴少女（晓月）】“老哥，我想要...”“没有！滚~”。连续30天不喂食晓月！（" + t.publicVar2[10] + "/30）",
                15: "【真.爱】触发回到认识晓月前一天后，放弃认识晓月，并到达省城",
                16: "【决心】击败通缉犯",
                17: "【你是个好人】拥有6个人的「好人卡」（" + t.Collectibles.goodPeopleCard + "/6）",
                18: "【珍.爱】击败草带男孩40次（" + t.kills[2] + "/40），并且被击败20次（" + t.publicVar2[7] + "/20）",
                19: "【雷电法王】电疗成功21次（" + t.orderTimes[3] + "/21）",
                20: "【收集癖】拥有99个收集类道具（" + c + "/99）",
                21: "【就算被伤透，我依然爱着你】找工作失败49次（" + t.publicVar2[9] + "/49）",
                22: "【生而为人，我很抱歉】拥有6个人的「眼泪」（" + t.itemNum[12] + "/6，最难成就 ）",
                23: "【鬼武者】拥有9级黑刀和9级红夹克",
                24: "【人狠话不多】打出99颗以上子弹（" + t.publicVar3[14] + "/99）",
                25: "【表白女神】陈碧瑶好感600（" + t.publicVar[7] + "/600），且晓月好感等于0",
                26: "【调戏女神】还没想到hiahiahia(ಡωಡ)",
                27: "【蛰居族】晓月好感+陈碧瑶达好感达1999（" + r + "/1999）",
                28: "【天下第二】通关挑战副本",
                29: "【真爱粉】本游戏通关6次以上（" + n.gameData[1] + "/6）",
                30: "【作者亲爹妈】本游戏在你手机中存活达300小时（" + o + "/300）"
            }, l = {
                0: function () {
                    if (n.gameData2[0] == 1) { n.achieveMent[0] = 1; }
                    return n.achieveMent[0] == 1;

                },
                1: function () {
                    if (t.achieve >= 99) { n.achieveMent[1] = 1; }
                    return n.achieveMent[1] == 1;
                },
                2: function () {
                    if (t.publicVar2[0] >= 66) { n.achieveMent[2] = 1; }
                    return n.achieveMent[2] == 1;
                },
                3: function () {
                    if ((t.publicVar2[1] / i) >= .25 && i >= 999) { n.achieveMent[3] = 1; }
                    return n.achieveMent[3] == 1;
                },
                4: function () {
                    if (t.randomEvent[0] >= 10 && t.publicVar2[13] >= 10) { n.achieveMent[4] = 1; }
                    return n.achieveMent[4] == 1;
                },
                5: function () {
                    var e = 100 * t.publicVar2[2] / i;
                    if (i >= 999 && e >= 24) { n.achieveMent[5] = 1; }
                    return n.achieveMent[5] == 1;
                },
                6: function () {
                    if (t.publicVar2[5] >= 10) { n.achieveMent[6] = 1; }
                    return n.achieveMent[6] == 1;
                },
                7: function () {
                    if (t.publicVar2[6] >= 999) { n.achieveMent[7] = 1; }
                    return n.achieveMent[7] == 1;
                },
                8: function () {
                    if (t.publicVar2[12] >= 49) { n.achieveMent[8] = 1; }
                    return n.achieveMent[8] == 1;
                },
                9: function () {
                    if (t.kills[3] >= 10) { n.achieveMent[9] = 1; }
                    return n.achieveMent[9] == 1;
                },
                10: function () {
                    if (1 == t.publicVar[5]) { n.achieveMent[10] = 1; }
                    return n.achieveMent[10] == 1;
                },
                11: function () {
                    if (t.publicVar2[8] >= 36) { n.achieveMent[11] = 1; }
                    return n.achieveMent[11] == 1;
                },
                12: function () {
                    if (t.evil.evilValue >= 60) { n.achieveMent[12] = 1; }
                    return n.achieveMent[12] == 1;
                },
                13: function () {
                    if (t.friend_xiaoyue.favorability >= 400) { n.achieveMent[13] = 1; }
                    return n.achieveMent[13] == 1;
                },
                14: function () {
                    if (t.publicVar2[10] >= 30 || 1 == t.publicVar2[11]) {
                        t.publicVar2[11] = 1;
                        n.achieveMent[14] = 1;
                        a.save();
                        return !0;
                    }
                    return !1;
                },
                15: function () {
                    if (300 == t.distance && n.gameData[0] > 0 && 0 == t.friend_xiaoyue.favorability) { n.achieveMent[15] = 1; }
                    return n.achieveMent[15] == 1;
                },
                16: function () {
                    if (t.publicVar[3] > 0) { n.achieveMent[16] = 1; }
                    return n.achieveMent[16] == 1;
                },
                17: function () {
                    if (t.Collectibles.goodPeopleCard >= 6) { n.achieveMent[17] = 1; }
                    return n.achieveMent[17] == 1;
                },
                18: function () {
                    if (t.kills[2] >= 40 && t.publicVar2[7] >= 20) { n.achieveMent[18] = 1; }
                    return n.achieveMent[18] == 1;
                },
                19: function () {
                    if (t.orderTimes[3] >= 21) { n.achieveMent[19] = 1; }
                    return n.achieveMent[19] == 1;
                },
                20: function () {
                    if (c >= 99) { n.achieveMent[20] = 1; }
                    return n.achieveMent[20] == 1;
                },
                21: function () {
                    if (t.publicVar2[9] >= 49) { n.achieveMent[21] = 1; }
                    return n.achieveMent[21] == 1;
                },
                22: function () {
                    if (t.itemNum[12] >= 6) { n.achieveMent[22] = 1; }
                    return n.achieveMent[22] == 1;
                },
                23: function () {
                    if (t.itemNum2[10] >= 9 && t.itemNum2[11] >= 9) { n.achieveMent[23] = 1; }
                    return n.achieveMent[23] == 1;
                },
                24: function () {
                    if (t.publicVar3[14] >= 99) { n.achieveMent[24] = 1; }
                    return n.achieveMent[24] == 1;
                },
                25: function () {
                    if (t.publicVar[7] >= 600 && t.friend_xiaoyue.favorability <= 0) { n.achieveMent[25] = 1; }
                    return n.achieveMent[25] == 1;
                },
                26: function () {
                    if (t.publicVar2[9] >= 49) { n.achieveMent[26] = 1; }
                    return n.achieveMent[26] == 1;
                },
                27: function () {
                    if (r >= 1999) { n.achieveMent[27] = 1; }
                    return n.achieveMent[27] == 1;
                },
                28: function () {
                    if (t.choice[6] >= 17) { n.achieveMent[28] = 1; }
                    return n.achieveMent[28] == 1;
                },
                29: function () {
                    if (n.gameData[1] + 1 >= 6) { n.achieveMent[29] = 1; }
                    return n.achieveMent[29] == 1;
                },
                30: function () {
                    if (o >= 300) { n.achieveMent[30] = 1; }
                    return o >= 300;
                }
            },
                u = cc.find("Canvas/Scroll/view/content");
            for (var p in s) {//把文字内容输出到屏幕上
                this.creatText(u, "skill" + p, s[p]);
                l[p]() && (u.getChildByName("skill" + p).color = new cc.Color(0, 255, 0));
            }
            var f = cc.find("Canvas/Button_backMainUI");
            f.on("touchstart", function () {
                cc.director.loadScene("main");
                a.save2();
            }, f);
        }
    });
    cc._RF.pop();
}]