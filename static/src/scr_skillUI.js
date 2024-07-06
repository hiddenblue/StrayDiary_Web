scr_skillUI = [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "ae252WOSz5CF6dAaVPNVzC8", "scr_skillUI");
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
        onLoad: function () {
            var t = e("scr_data"), n = (3 * t.orderTimes[1] - t.orderTimes[4]);
            //1 == t.publicVar[1] && (n = t.orderTimes[1] - t.orderTimes[4]);
            var a = {
                0: "0:【饥饿】当饥饿值低于0时激活。饥饿状态下，前进/探索有几率减少健康值，且睡觉时必定减少健康！（另外：饥饿时系统会自动使用食物，直到用光为止哦^_^）",
                1: "1:【精力强化1】精力上限+10，战斗胜利8次后激活（" + t.winTimes + "/8）。",
                2: "2:【生命强化1】最大生命值+50，吃「果子」30次后激活(" + t.orderTimes[5] + "/30）。",
                3: "3：【恢复1】前进/探索时，生命恢复量提高8点。使用「伤药」15次后激活（" + t.orderTimes[0] + "/15）。",
                4: "4:【烟瘾】攻击/防御减少" + n + "%！每天有" + n + "%概率激活，效果持续1天。（抽烟次数越多激活概率越高，每次增加3%）",
                5: "5:【平衡架势】造成" + (t.figthExp[0] / 5 + 100).toFixed(1) + "%伤害，承受" + (100 - t.figthExp[0] / 5).toFixed(1) + "%伤害。效果随熟练度提升而提升（" + t.figthExp[0] + "/100）。战斗胜利15次(" + t.winTimes + "/15)后开启。",
                6: "6:【捡钱】每天40%概率额外捡到1毛钱，扶老奶奶10次激活！此特性可升级，每扶10次涨1毛哈~(^_−)☆！（" + t.randomEvent[6] + "/10）。",
                7: "7:【精力强化2】精力上限+20，吃「熟肉」30次后激活（" + t.orderTimes[2] + "/30）。",
                8: "8:【防御强化1】防御增加10点，平衡架势熟练度达20后激活（" + t.figthExp[0] + "/20）。",
                9: "9:【拼命架势】可切换到拼命架势。攻击时，造成" + (t.figthExp[1] / 2 + 132).toFixed(1) + "%伤害，每次攻击损失8%最大生命值。效果随熟练度而提升（" + t.figthExp[1] + "/100）。战斗胜利" + t.winTimes + "/20次后激活。注意1：一场战斗中，使用最多的架势将获得1点熟练度",
                10: "10:【自愈1】睡觉时40%几率恢复1点健康值/健康上限，帐篷达到5级激活。",
                11: "11:【攻击强化1】攻击增加10点，拼命架势熟练度达30激活（" + t.figthExp[1] + "/30）。",
                12: "12:【精力强化3】精力上限+30，吃果子666次后激活，吃草更健康哦（" + t.orderTimes[5] + "/666）。",
                13: "13:【大胃王】饥饿上限+50，吃（" + t.orderTimes[5] + "/200）次「果子」和（" + t.orderTimes[2] + "/60）次「熟肉」后激活。",
                14: "14:【猥琐架势】可切换到猥琐架势。受击时，承受" + (70 - t.figthExp[2] / 6).toFixed(1) + "%的伤害，且恢复" + parseInt(t.figthExp[2] + 10) + "点生命，但造成伤害减也少30%。效果随熟练度而提升（" + t.figthExp[2] + "/100）。战斗胜利" + t.winTimes + "/60次后激活。注意2：逃跑时系统将自动切换为猥琐架势！",
                15: "15:【生命强化2】最大生命值+100，猥琐架势熟练度达40激活（" + t.figthExp[2] + "/40）。",
                16: "16:【防御强化2】防御+20，第三次击败山脉中「山顶巨人」后激活。",
                17: "17:【恢复2】前进/探索时，生命恢复量提高36点，使用「伤药」99次后激活（" + t.orderTimes[0] + "/99）。",
                18: "18:【攻击强化2】攻击+20，击败挑战副本中「女剑士」后激活。",
                19: "19:【生命强化3】最大生命值+150。在省城市中心的晓风料理店食用4次「巨无霸」套餐后激活！（" + t.publicVar3[13] + "/4）",
                20: "20:【防御强化3】防御+30。击败省城郊外的「杀.破.狼」4次后激活！",
                21: "21:【恢复强化】前进/探索时，生命恢复效果翻倍。「驱蚊工具」等级达到10级后激活（" + t.itemNum2[6] + "/10）。你目前前进/探索回恢复量为" + (4 + 8 * t.skillLv[3] + 36 * t.skillLv[17] + 2 * t.itemNum2[23]) * (1 + t.skillLv[21]) + "（激活后此数值将会翻倍，创可贴恢复效果也将翻倍！）。",
                22: "22:【攻击强化3】攻击+30，击败挑战副本中「双枪老太婆」后激活。",
                23: "23:【非酋逆袭】如果前进/探索时没发现道具，则必定获得1毛钱！没发现道具次数达233次后激活（" + t.publicVar2[1] + "/233）。",
                24: "24:【圣斗士】战斗失败后，" + Math.min(Math.max(parseInt(t.publicVar3[12] / 5), 20), 40).toFixed(1) + "%几率满血复活！战斗失败79次后激活（" + t.publicVar3[12] + "/79）",
                25: "25:【霸气】狂拽炫酷吊炸天！攻击时，10%几率无视目标防御，且恢复自身3%生命。木棍、麻布衣达到15级时激活",
                26: "26:【不屈的精神力】睡觉时30%几率额外再恢复30%精力！击败「草带男孩」40次后激活！（" + t.kills[2] + "/40）",
                27: "27:【宿醉】前一天每喝一口酒增加15%概率触发，当天造成的伤害减少30%，【自信】请看秋良版更新日志",
                28: "28:【营养均衡】",
                29: "29:【闪避】郊外小伙子飞刀技术15开启，由于你经常陪他练习，现在你有20%概率闪避所有伤害（舍弃回血效果，保持血量不变）",
                30: "30：【破防】战斗中，均衡架势下，如果均衡架势熟练度达到100以上，且本次攻击触发【暴击】，则把【嗜血】替换为破防，无视对方防御和任何格挡技能",
                31: "31：【黑刀】等级升级后会获得效果，你当前黑刀为" + t.itemNum2[10] + "级。1级：你造成的所有伤害中的" + t.itemNum2[10] * 10 + "%转化为流血效果。3级：【居合】每场战斗限一次，战斗中每攻击一次增加当前轮数*" + t.itemNum2[10] * 100 + "%倍率，你可以随时使用技能并使得下次攻击增加对应倍率。5级：【振刀】居合使用之后的敌人下一次攻击的伤害会被完全抵挡。7级：",//todo 黑刀特效描述
                32: "32：【吾心超凡】（当前等级" + t.evil.virtueLevel + "）。1级：商店基础物资打折20%。2级：没想好",
                //tag 特性的描述文本
            },
                skillvalues = e("scr_data").skillLv, c = cc.find("Canvas/Scroll/view/content"),
                daystoT = parseInt(1 + t.day / 3), skillcount = Object.keys(a).length;
            "undefined" == typeof skillcount && (skillcount = 99);
            (function () {// 新特性
                var guozi = 2 * t.orderTimes[10], shurou = 1 * t.orderTimes[11], rate = guozi / shurou, exp = t.publicVar2[26], min = ((500 + exp) / (350 - exp)).toFixed(1), max = ((850 + exp) / (150 - exp)).toFixed(1);
                a[28] = "28:【营养均衡】额外恢复20精力,需要" + rate + "（素食和肉食比）在" + min + "和" + max + "之间";
            })();
            for (var keysF in a) {
                var l = skillcount - keysF - 1;
                if (l > 999); else {//从下往上显示，如果（比如27）大于天数除以3，（80天）则不显示，改成999   daystoT - 1
                    this.creatText(c, "skill" + l, a[l]);
                    skillvalues[l] > 0 && (c.getChildByName("skill" + l).color = new cc.Color(0, 255, 0));
                }
            }
            var u = cc.find("Canvas/Button_loadAchieve"), p = cc.find("Canvas/Button_system");
            u.on("touchstart", function () {
                cc.director.loadScene("achieve");
            }, u);
            p.on("touchstart", function () {
                cc.director.loadScene("system");
            }, p);
        }
    });
    //tag 开局套餐属性传送门
    cc._RF.pop();
}, {
    scr_data: "scr_data"
}]