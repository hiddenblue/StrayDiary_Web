scr_public = [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "4bdd0LrXWhLypzYw/KwkeQ9", "scr_public");
    cc.Class({
        extends: cc.Component,
        properties: {},
        onLoad: function () {
            var n = {
                itemName: ["果子", "木材", "易拉罐", "生肉", "亚麻", "艾草", "烟草", "烟头", "黑曜石", "火狐皮", "50ml啤酒", "白色粉末", "眼泪"],
                //大部分物品对应名称传送门
                itemName2: ["熟肉", "伤药", "帐篷", "木棍", "麻布衣", "陷阱", "驱蚊工具", "香烟", "匕首", "皮衣", "黑刀", "红夹克", "啤酒", "┑(=^ω^=)┑", "子弹", "晓风披肩", "漂亮石头", "放大镜", "JK制服鞋", "枪", "板砖", "小裤裤", "女装", "创口贴", "JK制服", "护身符", "幸运石", "晓月手链"],
                ifNotify: !1,
                init: function () {//主界面大部分按钮在此处
                    var t = cc.find("Canvas/Text"), n = e("scr_data");
                    t.getChildByName("txt_day").getComponent("cc.Label").string = this.regionName() + n.day + "天";
                    t.getChildByName("txt_energy").getComponent("cc.Label").string = n.energy + "/" + this.maxEnergy();
                    t.getChildByName("txt_hunger").getComponent("cc.Label").string = n.hunger + "/" + this.maxHunger();
                    t.getChildByName("txt_health").getComponent("cc.Label").string = "健康  " + n.health + "/" + n.maxHealth;
                    t.getChildByName("txt_hp").getComponent("cc.Label").string = "血量 " + n.role.hp + "\n最大 " + this.role.maxHp();
                    t.getChildByName("txt_att").getComponent("cc.Label").string = "攻击  " + this.role.att();
                    t.getChildByName("txt_def").getComponent("cc.Label").string = "防御  " + this.role.def();
                    t.getChildByName("txt_money").getComponent("cc.Label").string = "金钱  " + (n.money / 10).toFixed(1);
                    t.getChildByName("txt_distance").getComponent("cc.Label").string = "离家  " + n.distance + "km";
                    t.getChildByName("txt_item1").getComponent("cc.Label").string = "伤药  " + n.itemNum2[1];
                    t.getChildByName("txt_item2").getComponent("cc.Label").string = "食物  " + n.itemNum[0] + "+" + n.itemNum2[0];
                    this.mainUITextColor();
                    this.buttonState();
                    this.showPlace();
                },
                mainUITextColor: function () {
                    var t = e("scr_data"), n = cc.find("Canvas/Button"), a = "";
                    t.hunger <= 0 && (a += "【饥饿】");
                    t.skillLv[4] >= 1 && (a += "【烟瘾】");
                    t.buffState[0] >= 1 && (a += "【暴躁】");
                    t.choice[8] >= 1 && (a += "【陷阱】");
                    t.skillLv[27] >= 1 && (a += "【宿醉】");
                    if (1 == t.buffState[2]) { a += "【自信" + t.winsstreaks + "】" }
                    //if (1==t.buffState[3]) {a+= "【营养不良】"}
                    //tag buff显示传送门
                    n.getChildByName("txt_state").getComponent("cc.Label").string = a;
                },
                //距离显示传送门
                showPlace: function () {
                    var t = e("scr_data");
                    if (300 == t.distance) {
                        var n = cc.find("Canvas/Button/txt_place").getComponent("cc.Label");
                        0 == t.publicVar[13] ? n.string = "「城中村」" : 1 == t.publicVar[13] ? n.string = "「郊外」" : 2 == t.publicVar[13] ? n.string = "「市中心」" : 3 == t.publicVar[13] && (n.string = "「山洞" + t.publicVar3[1] + "米」");
                        if (4 == t.publicVar[13]) {
                            n.string = "「东京」";
                        }
                    }
                },
                buttonState: function () {
                    var t = e("scr_data"), n = cc.find("Canvas/Button"), a = n.getChildByName("button_forward"), i = n.getChildByName("button_shop"), c = n.getChildByName("button_explore");
                    t.button[0] ? a.active = !0 : a.active = !1;
                    t.button[1] && 0 == t.publicVar3[3] ? i.active = !0 : i.active = !1;
                    t.button[2] ? c.active = !0 : c.active = !1;
                },
                save: function () {
                    var t = e("scr_data");
                    cc.sys.localStorage.setItem("userData", JSON.stringify(t));
                },
                save2: function () {
                    var t = e("scr_data2");
                    cc.sys.localStorage.setItem("data2", JSON.stringify(t));
                },
                saveCopy: function () {
                    var t = e("scr_dataCopy");
                    cc.sys.localStorage.setItem("dataCopy", JSON.stringify(t));
                },
                creatText: function (e, t, n, a, i, c) {
                    var o = new cc.Node(t);
                    o.addComponent(cc.Label);
                    o.parent = e;
                    o.setPosition(n, a);
                    o.setContentSize(600, 300);
                    o.setAnchorPoint(.5, .5);
                    o.getComponent(cc.Label).overflow = 3;
                    o.getComponent(cc.Label).string = i;
                    o.getComponent(cc.Label).lineHeight = 60;
                    o.getComponent(cc.Label).fontSize = 40;
                },
                role: {
                    maxHp: function () {
                        var t = e("scr_data"), smokerate = 3 * t.orderTimes[1] - t.orderTimes[4]
                        n = t.role.maxHp + 50 * t.itemNum2[4] + 150 * t.itemNum2[11] + 50 * t.skillLv[2] + 100 * t.skillLv[15] + 150 * t.skillLv[19] + 25 * t.itemNum2[22] + t.publicVar3[16];
                        n += t.itemNum2[29] * 750;//军用夜视镜加生命
                        n += t.itemNum2[9] * 25;//皮衣加血
                        n = n * (1 - (t.skillLv[4] * smokerate) / 100);//烟瘾大改
                        n = Math.round(n * (1 + t.publicVar[15] / 1e3 + t.itemNum2[15] / 100 + t.publicVar3[5] / 100));
                        if (n < 0) {
                            n = 1;
                        }
                        return n;
                    },
                    //tag 三维属性传送门
                    att: function () {
                        var t = e("scr_data"), n = 1, smokerate = 3 * t.orderTimes[1] - t.orderTimes[4];
                        1 == t.publicVar && (n = 1);
                        var a = t.role.att + 10 * t.itemNum2[3] + 20 * t.itemNum2[8] + 30 * t.itemNum2[10] + 10 * t.skillLv[11] + 20 * t.skillLv[18] + 30 * t.skillLv[22] + 5 * t.itemNum2[20] + t.publicVar3[4];
                        a += t.itemNum2[28] * 150;//物理学圣剑加攻击
                        if (1 == t.ifFollow[0]) {
                            a += parseInt(t.friend_xiaoyue.favorability / 4 + 10);
                        }
                        a = Math.round(a * (1 - (t.skillLv[4] * smokerate) / 100) * (1 + t.publicVar[17] / 1e3 + t.itemNum2[15] / 100 + t.publicVar3[5] / 100));
                        if (t.randomBuff[1] == 1) {
                            a *= 1.2;//随机buff1
                        }
                        return a;
                    },
                    def: function () {
                        var t = e("scr_data"), n = 1, smokerate = 3 * t.orderTimes[1] - t.orderTimes[4];
                        1 == t.publicVar && (n = 1);
                        var a = t.role.def + 10 * t.itemNum2[9] + 15 * t.itemNum2[11] + 10 * t.skillLv[8] + 20 * t.skillLv[16] + 30 * t.skillLv[20] + 5 * t.itemNum2[21] + t.publicVar3[10];
                        a = Math.round(a * (1 - (t.skillLv[4] * smokerate) / 100) * (1 + t.publicVar[16] / 1e3 + t.itemNum2[15] / 100 + t.publicVar3[5] / 100));
                        if (t.randomBuff[2] == 1) {
                            a *= 1.4;//随机buff2
                        }
                        return a;
                    }
                },
                //一些功能传送门
                ifMaxHp: function () {
                    var t = e("scr_data"), n = this.role.maxHp();
                    t.role.hp > n && (t.role.hp = n);
                },
                creatNode: function () {
                    var e = this;
                    cc.loader.loadRes("button1", cc.SpriteFrame, function (t, n) {
                        var a = new cc.Node("NewSprite");
                        a.addComponent(cc.Sprite).spriteFrame = n;
                        a.parent = e.node;
                    });
                },
                regionId: function () {
                    var t = 0, n = [100, 300], a = e("scr_data").distance;
                    a < n[0] && (t = 1e3);
                    a == n[0] && (t = 2e3);
                    a > n[0] && a < n[1] && (t = 3e3);
                    a == n[1] && (t = 4e3);
                    return t;
                },
                regionName: function () {
                    var t = 0, n = [100, 300], a = e("scr_data").distance;
                    a < n[0] && (t = "荒野.");
                    a == n[0] && (t = "县城.");
                    a > n[0] && a < n[1] && (t = "山脉.");
                    a == n[1] && (t = "省城.");
                    return t;
                },
                //精力传送门
                maxEnergy: function () {
                    var t = e("scr_data"), n = t.skillLv,
                        a = t.maxEnergy + 10 * n[1] + 20 * n[7] + 30 * n[12] + 10 * t.itemNum2[2] + t.friendSkill1[1] * t.ifFollow[0] * 20 + 10 * t.publicVar[18];
                    return a;
                },
                maxHunger: function () {
                    var t = e("scr_data"), n = t.skillLv, a = t.maxHunger + 50 * n[13];
                    return a;
                },
                autoEat: function () {
                    var t = e("scr_data");
                    if (t.hunger <= 0) {
                        if (t.itemNum[0] >= 1) {
                            t.itemNum[0] -= 1;
                            t.orderTimes[5] += 1;
                            t.hunger += 20;
                            100 * Math.random() < 15 && (t.health += 1);
                            this.save();
                            return !0;
                        }
                        if (t.itemNum2[0] >= 1) {
                            t.itemNum2[0] -= 1;
                            t.orderTimes[2] += 1;
                            t.hunger += 70;
                            this.save();
                            return !0;
                        }
                        return !0;
                    }
                    return !1;
                },
                playBGM: function (e) {
                    cc.audioEngine.stopAll();
                    var t = cc.game._persistRootNodes;
                    for (var n in t) var a = t[n].getComponent("scr_BGM")[e];
                    cc.audioEngine.play(a, !1, 1);
                },
                ifGameOver: function () {
                    if (e("scr_data").health <= 0) {
                        var t = this.regionId();
                        1e3 == t && cc.director.loadScene("over");
                        t > 1e3 && cc.director.loadScene("over2");
                    }
                },
                showText: function (e, t, n, a) {
                    var i = new cc.Node(t);
                    i.addComponent(cc.Label);
                    i.parent = e;
                    i.setPosition(0, 0);
                    i.opacity = 0;
                    i.runAction(cc.fadeIn(.3));
                    i.color = new cc.Color(255, 255, 255);
                    i.getComponent(cc.Label).overflow = 3;
                    i.getComponent(cc.Label).horizontalAlign = 1;
                    i.setContentSize(600, 300);
                    i.getComponent(cc.Label).string = n;
                    i.getComponent(cc.Label).lineHeight = a || 40;
                    i.getComponent(cc.Label).fontSize = 40;
                },
                showText2: function (e, t, n, a) {
                    var i = new cc.Node(t);
                    i.addComponent(cc.Label);
                    i.parent = e;
                    i.setPosition(0, 0);
                    i.color = new cc.Color(115, 115, 115);
                    i.getComponent(cc.Label).overflow = 3;
                    i.setContentSize(630, 300);
                    i.getComponent(cc.Label).string = n;
                    i.getComponent(cc.Label).lineHeight = a;
                    i.getComponent(cc.Label).fontSize = 32;
                },
                QLnewfunction: {//func QL新函数所在地
                    addxiaoyue_favorability: function (num) {
                        var data = e("scr_data"), func = e("scr_public");
                        data.friend_xiaoyue.favorability += num;
                        if (2 == data.publicVar[1]) {
                            if (num > 0) {
                                data.friend_xiaoyue.favorability += num;
                            }
                        }
                    },
                    addevil_value: function (num) {
                        var data = e("scr_data"), func = e("scr_public");
                        data.evil.evilValue += num;
                        if (2 == data.publicVar[1]) {
                            if (num < 0) {
                                data.evil.evilValue += num;
                            } else if (num > 0) {
                                data.evil.evilValue += 2 * num;

                            }
                        }
                    },
                }

            };
            t.exports = n;
        }

    });
    cc._RF.pop();
}, {
    scr_data: "scr_data",
    scr_data2: "scr_data2",
    scr_dataCopy: "scr_dataCopy",
    scr_autodataCopy: "scr_autodataCopy"
}]