scr_friendUI1 = [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "871fc61bpBNRLPJHo54vOLw", "scr_friendUI1");
    cc.Class({
        extends: cc.Component,
        properties: {},
        dialog: function () {
            return ["“我叫晓月，今年17，在省城三中读书”", "“暑假开头的、三天母女保温期一过，我妈就成天说我懒，还贪吃。\n(ಥ_ಥ)”", "“骗我，不让我吃太多肉，说对身体不好，合着我就是捡来的。\n╮(╯﹏╰）╭”", "“如果不能吃肉，只吃草，那活着有啥意思呢？对吧。”", "“如是，我打算出来闯闯，做一个持酒闯江湖的女侠，哈~哈——哈！\nヽ(ﾟДﾟ)ﾉ”", "“我偷偷爬上一辆货车，一觉醒来，就在山里。\n(*´・ｖ・)”", "“趁着老司机方便，我溜下车，准备去路边的村子弄点吃的。\n︿(￣︶￣)︿”", "“结果碰到一只巨丑无比的大黑狗，我一路狂奔，啥也不管了。\n(;´༎ຶД༎ຶ`)”", "“猿后，我也不知道到了那里。\n(ಥ_ಥ)”", "“我想随便采几个蘑菇充充饥，结果发现没带火（幸好没带...）。\n(｡･ω･｡)”", "“不过呢，我聪明啊，我沿着货车路，捡到几罐喝剩的啤酒。\n︿(￣︶￣)︿”", "“我躲在路边，暗中观察那些、光着膀子开车的老司机，准备拦一个可靠点的。\n( • ̀ω•́ )✧”", "“结果，选中了你，你说我选得对吗？\n(*/ω＼*)”", "“其实哇，你打招呼后，我已经跟踪你一天了，嘿嘿~\n(｡･ω･｡)”"];
        },
        randomDialog: function () {
            return ["“(ಡωಡ)hiahiahia....嗝~”", "“跟你讲我可是很厉害的哦ｸﾞｯ!\n(๑•̀ㅂ•́)و✧”", "“游戏里都是骗人的，哪有什么果子、野兔，全是荆棘和虫子\n(╥╯^╰╥)”", "“偷偷告诉你...这个游戏作者没有女朋友\n(ಡωಡ)hiahiahia”", "“偷偷告诉你...长得漂亮的女孩子大多都平胸，但是反过来，就不好说啦╮(╯﹏╰）╭”", "“我跟你讲哈！那些一个人、背着双肩包旅游的女孩子，最好别去搭讪=￣ω￣=”", "“啊嘞嘞~这样真让人头疼呢╮(￣▽￣)╭”", "“人家天生就不怎么会撒娇呢\n(ಡωಡ)hiahiahia”", "“嘿嘿(º﹃º )，放心放心姐姐不是什么好人~”", "“听说这个游戏的最终BOSS是个变态╮(￣▽￣)╭”"];
        },
        initUI: function () {
            var t = e("scr_data");
            cc.find("Canvas/inf/good").getComponent("cc.Label").string = "晓月好感：" + t.friend_xiaoyue.favorability;
        },
        initUI2: function () {
            var t = e("scr_data");
            cc.find("Canvas/inf/good").getComponent("cc.Label").string = "碧瑶好感：" + t.publicVar[7];
        },
        eat: function () {
            var t = e("scr_data"), n = e("scr_effect"), a = e("scr_public");
            if (t.itemNum[0] > 0 || t.itemNum2[0] > 0) {
                if (t.itemNum[0] > 0) {
                    t.publicVar2[10] = 0;
                    t.publicVar[2] = 1;
                    t.itemNum[0] -= 1;
                    a.QLnewfunction.addxiaoyue_favorability(1);
                    //t.friend_xiaoyue.favorability += 1;
                    this.initUI();
                    cc.find("Canvas/Show").removeAllChildren();
                    n.playText("Canvas/notify", "果子-1，晓月好感+1", 80);
                } else if (t.itemNum2[0] > 0) {
                    t.publicVar2[10] = 0;
                    t.publicVar[2] = 1;
                    t.itemNum2[0] -= 1;
                    //t.friend_xiaoyue.favorability += 3;
                    a.QLnewfunction.addxiaoyue_favorability(3);
                    this.initUI();
                    cc.find("Canvas/Show").removeAllChildren();
                    n.playText("Canvas/notify", "熟肉-1，晓月好感+3", 80);
                }
                a.save();
            } else {
                cc.find("Canvas/Show").removeAllChildren();
                n.playText("Canvas/notify", "吃光光啦！", 80);
            }
        },
        takePill: function () {
            var t = e("scr_data"), n = e("scr_effect"), a = e("scr_public");
            if (t.itemNum2[1] > 0) {
                var amount = t.itemNum2[1];
                a.QLnewfunction.addxiaoyue_favorability(2 * amount);
                //t.friend_xiaoyue.favorability += 2 * amount;
                t.itemNum2[1] -= amount;
                this.initUI();
                a.save();
                cc.find("Canvas/Show").removeAllChildren();
                n.playText("Canvas/notify", "“张嘴，吃药~”\n“啊~~~~emmmmm~”\n晓月好感+" + 2 * amount + "", 80);
            } else {
                cc.find("Canvas/Show").removeAllChildren();
                n.playText("Canvas/notify", "没药啦~！", 80);
            }
        },
        talk: function () {
            var t = e("scr_data"), n = e("scr_effect");
            if (t.energy >= 10) {
                var a = this.dialog(), i = e("scr_public"), c = t.talkTimes[0], o = cc.find("Canvas/Show"), r = a[c];
                if ("undefined" == typeof r) {
                    var s = this.randomDialog(), l = s.length;
                    r = s[parseInt(Math.max(Math.random() * l - .1))];
                }
                c % 3 == 0 && o.removeAllChildren();
                i.showText(o, "plot" + c, r, 60);
                t.talkTimes[0] += 1;
                t.energy -= 10;
                i.QLnewfunction.addxiaoyue_favorability(1);
                //t.friend_xiaoyue.favorability += 1;
                if (t.talkTimes[0] == 100) {// 晓月聊天处
                    n.itemNum[13] += 1;
                    i.showText(o, "plot" + c,
                        "晓月很开心，于是她打算亲手下厨给你做饭！你获得神秘道具*1"
                        , 60);
                }
                this.initUI();
                i.save();
            } else {
                cc.find("Canvas/Show").removeAllChildren();
                n.playText("Canvas/notify", "精力不足！", 80);
            }
        },
        onLoad: function () {
            e("scr_data"), e("scr_public");
            var t = cc.find("Canvas/button");
            cc.find("Canvas/close").on("touchstart", function () {
                e("scr_public").save();
                cc.director.loadScene("main");
            }, this);
            this.initUI();//按钮功能在这设置！！！
            t.getChildByName("button1").on("touchstart", this.talk, this);
            t.getChildByName("button2").on("touchstart", this.eat, this);
            t.getChildByName("button4").on("touchstart", this.takePill, this);
            t.getChildByName("button3").on("touchstart", function () {
                cc.director.loadScene("friendSkill1");
            }, this);
        }
    });
    cc._RF.pop();
}, {
    scr_data: "scr_data",
    scr_effect: "scr_effect",
    scr_public: "scr_public"
}]