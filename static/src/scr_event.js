scr_event = [function (e, t, n) {
    "use strict";
    cc._RF.push(t, "00b3c6RjfdHPbEfl8GaNNla", "scr_event");
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
        //每日早上剧情后续传送门
        event: function () {
            var t = this, n = e("scr_data"), a = e("scr_data2"), i = e("scr_public"), c = e("scr_effect"),
                o = {
                    1: {
                        text: ["来到破旧的小区，", "一位热情的小姐姐将我带到一个房间，\n寒暄一番后，她认真的介绍道，", "“我们的工作内容是向附近居民推广净水器。\n公司要统一着装，\n入职前需交1块钱的服装费，\n交完费明天就可上班，\n日薪2元加提成，你看咋样？”", "我没钱", "交1块钱"],
                        BGM: "",
                        require: [n.distance, 0],
                        choice1: function () {
                            n.enemyId = 102;
                            r("“来人啦，看看他身上到底有没有钱！”");
                        },
                        choice2: function () {
                            if (n.money >= 10) {
                                n.choice[1] = 2;
                                n.money -= 10;
                                r("“很好，明天过来上班吧”");
                            } else c.playText("Canvas/notify2", "钱不够！", 60);
                        }
                    },
                    2: {
                        text: ["“很好，", "今后少侠只需将蚊子尸体封在这八卦炉中，”", "说完怪人掏出一个罐头瓶，", "“在下会定期前来收尸，", "每只一毛。", "在此拜谢！！”", "", "…(⊙_⊙;)…"],
                        BGM: "",
                        require: [],
                        choice1: function () { },
                        choice2: function () {
                            var e = n.kills[0], t = (e / 10).toFixed(1);
                            n.money += e;
                            n.kills[0] = 0;
                            r("“你本次一共消灭" + e + "只蚊子，\n这是" + t + "元，请务必收下！日后自会再见！告辞！”，\n怪人飞一般的逃跑了...\n【你获得" + t + "元】");
                        }
                    },
                    3: {
                        text: ["我敲了敲门，没反应", "又敲了敲，门开了，是一位白发老爷爷", "我解释来意，老人似乎听不太清，但是执意让我进屋，", "家里散乱的堆放着各种垃圾袋，", "弥漫着一股尿臭味。", "雨停了，屋里非常的安静，老人一直呆坐着，他已经记不起来自己孩子的名字。", "【临走时，你选择...】", "帮忙打扫下卫生（消耗全部精力）", "帮忙打扫也无济于事，自然而然吧"],
                        BGM: "",
                        require: [],
                        choice1: function () {
                            n.energy = 0;
                            n.choice[2] = 2;
                            //n.randomEvent[1] += 1;
                            n.Collectibles.goodPeopleCard += 1;
                            r("你帮忙打扫了房间，离开时老爷爷也没有说声谢谢...获得「好人卡」*1");
                        },
                        choice2: function () {
                            r("雨停了，你离开了，静谧的天空上升起一道彩霞，屋内传来电视广告的声音...");
                        }
                    },
                    4: {
                        text: ["   妇女用颤抖的手、赶紧点了一根烟，开始讲述她的故事，也不管你是否想听。", "   她46岁，无子女，中学时就学会了抽烟。因为长得漂亮，嫁了一位有钱人。", "   后来丈夫因肺癌去世，而自己无任何工作技能，生活直转急下，每份工作都是做几天，要么被辞退，要么嫌累。", "中间谈过几次恋爱，因性格不合，最后都以分手告终。", "现在房子也卖了，住在一个5平米的出租屋中，已经两天没吃饭了...", "", "......"],
                        BGM: "BGM3",
                        require: [],
                        choice1: function () { },
                        choice2: function () {
                            r("“我现在一身疾病，也没人要，就等着去见我的老公呢”，临走时，她淡淡的说道。\n【皮衣等级+1！】");
                        }
                    },
                    5: {
                        text: ["洞底的一幕让我有些惊讶，", "一位老太太正帮一位中年男抓虱子，", "中年男正是——灭蚊堂九堂主！", "堂主立马认出了你，像孩子一样手舞足蹈起来。", "老奶奶执意要留你吃饭，", "她讲起了堂主的往事。", "", "继续"],
                        BGM: "",
                        require: [],
                        choice1: function () { },
                        choice2: function () {
                            t.eventId = 6;
                            t.ifTriggerEvent();
                        }
                    },
                    6: {
                        text: ["“堂主是附近镇上一位小老板，", "一天，他载着3岁儿子外出钓鱼，", "天气炎热，车窗未关", "...五小时后，他才想起车内的孩子，", "等他赶到时，孩子全身发烫，气息微弱，全身是包", "最后孩子感染乙脑死亡", "妻子离他而去，人也变得疯疯癫癫", "现在几乎完全失去了自理能力...”", "临走时，你选择", "把身上所有钱留给堂主", "算了，听天由命吧"],
                        BGM: "",
                        require: [],
                        choice1: function () {
                            var e = n.kills[0], t = n.money, a = 5 * e + t;
                            n.kills[0] = 0;
                            n.money = 0;
                            n.role.maxHp += a;
                            n.choice[7] += 1;
                            r("【祝福】你的最大生命值提高" + a + "点\n（提高量与捐钱数和灭蚊数有关，你已击杀" + e + "只蚊子，捐出" + (t / 10).toFixed(1) + "元）");
                        },
                        choice2: function () {
                            r("你走出山洞，已是早晨，蔚蓝的天空中漂浮着朵朵白云");
                        }
                    },
                    7: {
                        text: ["跟随着小姐姐，在蛛网般的城中村、拐弯无数次，", "我来到一个简陋的出租屋。", "突然一个男人破门而入，大骂，“敢碰老子的女人！啊！”", "", "逃走..."],
                        BGM: "",
                        require: [n.distance, 0],
                        choice1: function () { },
                        choice2: function () {
                            n.role.hp = i.role.maxHp();
                            n.enemyId = 109;
                            i.save();
                            cc.director.loadScene("main");
                        }
                    },
                    8: {
                        text: ["中年大叔老家在西北的一个乡村，曾经当过兵，做过工人。早年与妻子离异后，女儿跟着前妻。", "92年独自南下打工，身体不好，也没什么技能，找工作处处碰壁，只能做点零活，赚的一点苦力钱全部用来买彩票和酒了…", "最终无处落脚，没钱、也没脸回家，流落至此…", "", "..."],
                        BGM: "",
                        require: [],
                        choice1: function () { },
                        choice2: function () {
                            n.energy += 60;
                            n.hunger = i.maxHunger();
                            n.role.hp = i.role.maxHp();
                            r("精力+60，饥饿全恢复，生命全恢复！");
                        }
                    },
                    9: {
                        text: ["晓月迫不及待的把我拉到墙角，眉飞色舞的讲述回家后的经历。", "比如离家后父母如何找翻天，她回家后如何没有受到一句批评，现在家人是如何把她当女皇养着...", "临走时晓月让你选一个礼物，你选择...", "晓月的贴身衣物", "食物和钱"],
                        BGM: "",
                        require: [],
                        choice1: function () {
                            n.itemNum2[27] += 1;
                            n.itemNum2[22] += 1;
                            n.itemNum2[21] += 1;
                            r("获得【女装】*1，【小裤裤】*1，【晓月手链】*1");
                        },
                        choice2: function () {
                            n.money += 40;
                            n.itemNum[0] += 20;
                            r("获得4元钱！【果子】*20");
                        }
                    },
                    10: {
                        text: ["“那你这唱歌的钱够还吗？”\n“还行吧，现在一天可以赚三四块，多的时候十几块。现在只想把我妈治好，还钱的事我还没想好...”", "“想过做点别的吗？”，我问。\n“呵~上学时光顾着打架，买上一个三本大学，现在大二，不过休学了\n，啥也不会，只能端盘子、做服务员，但是那点钱根本不够...”", "“你不是会吉他么，可以去教小孩呀！”\n“这只是以前自己瞎玩的，也是个半吊子，那够教学生呀~”", "", "..."],
                        BGM: "",
                        require: [],
                        choice1: function () { },
                        choice2: function () {
                            t.eventId = 11;
                            t.ifTriggerEvent();
                        }
                    },
                    11: {
                        text: ["“不过我有一个主意，一直都想和你说来着”，碧瑶突然有点兴奋的说道。", "“啥点子？”", "“我发现你的生存能力很强，像魔术师一样，会无中生有！我想咱们可以结合一下，你收集一些稀奇的东西，我负责卖出去！怎么样？”", "", "当然可以啊，瑶瑶的业务水平我还是不怀疑的~"],
                        BGM: "",
                        require: [],
                        choice1: function () { },
                        choice2: function () {
                            t.eventId = 12;
                            t.ifTriggerEvent();
                        }
                    },
                    12: {
                        text: ["提示：从现在开始你可以进入山洞副本，每天收集的特殊道具，系统会自动出售（出售金额可在每日的结算界面查看）", "最后，你需要选择分成比例。\n（举例：假设今天卖出10块，选择7成就意味着你可以拿到7块，碧瑶拿3块；选择3成，则反过来）\n（作者：不要问我为啥不能五五开。我不会去设置这种容易选择的保守选项！）", "我最辛苦，应该我拿大头（拿7成）", "我应该帮帮她，我拿小头吧（拿1成）"],
                        BGM: "",
                        require: [],
                        choice1: function () {
                            n.publicVar2[21] = 7;
                            i.save();
                            cc.director.loadScene("main");
                        },
                        choice2: function () {
                            n.publicVar2[21] = 1;
                            i.save();
                            cc.director.loadScene("main");
                        }
                    },
                    13: {
                        text: ["碧瑶急忙向我跑过来，似乎要对我做最后的告别，脸色苍白的说道，", "“我得回家了，我的东西就你拿去用吧，我也带不走。\nemmmm....我也不知道该说啥。总之，加油吧，一起！”", "\n说完碧瑶就匆匆跑开了，坐上民警的巡逻车，消在失温暖的阳光中...", "", "我会的"],
                        BGM: "",
                        require: [],
                        choice1: function () { },
                        choice2: function () {
                            var e = Math.max(parseInt(n.publicVar[7] / 50), 1), t = Math.min(Math.max(parseInt(n.publicVar[7] / 100), 1), 6);
                            n.money += 4 * e;
                            n.money += 10 * e;
                            n.itemNum2[26] += t;
                            n.itemNum2[27] += t;
                            if (n.publicVar[7] >= 600) {
                                n.itemNum2[10] += 1;
                                n.itemNum2[11] += 1;
                                r("你获得【金钱】*" + (10 * e / 10).toFixed(1) + ",【果子】*" + 4 * e + "，【黑刀】*1，【红夹克】*1，【幸运石】*" + t + "，【晓月手链】*" + t + "！\n【说明：奖励与碧瑶最终的好感有关】");
                            } else if (n.publicVar[7] >= 400) {
                                n.itemNum2[10] += 1;
                                n.itemNum2[9] += 1;
                                r("你获得【金钱】*" + (10 * e / 10).toFixed(1) + ",【果子】*" + 4 * e + "，【黑刀】*1，【皮衣】*1，【幸运石】*" + t + "，【晓月手链】*" + t + "！\n【说明：奖励与碧瑶最终的好感有关】");
                            } else {
                                n.itemNum2[8] += 1;
                                n.itemNum2[9] += 1;
                                r("你获得【金钱】*" + (10 * e / 10).toFixed(1) + ",【果子】*" + 4 * e + "，【匕首】*1，【皮衣】*1，【幸运石】*" + t + "，【晓月手链】*" + t + "！\n【说明：奖励与碧瑶最终的好感有关】");
                            }
                        }
                    },
                    14:
                    {
                        text:
                            ["“好的，请选择你要传送的地方‘’", "县城", "省城"],
                        BGM: ""
                        ,
                        require:
                            [],
                        choice1:
                            function () {
                                n.distance = 99;
                                n.day += 20;
                                i.save();
                                cc.director.loadScene("main");
                            },
                        choice2:
                            function () {
                                n.day += 79;
                                n.enemyId = 996;
                                i.save();
                                cc.director.loadScene("main");
                            }
                    },
                    15:
                    {
                        text:
                            ["你把她带到了帐篷里，没多久她就醒了", "“(ﾟДﾟ≡ﾟдﾟ)!?我这是在哪”", "“你在我帐篷门口睡着了，我把你抱进来了”", "“这样啊..谢谢你”她从身上摸了摸，递给了你一个东西", "没想好！", "重置版再说！"],
                        BGM: ""
                        ,
                        require:
                            [],
                        choice1:
                            function () {

                                cc.director.loadScene("main");
                            },
                        choice2:
                            function () {

                                cc.director.loadScene("main");
                            }
                    },
                    //每日早上事件传送门
                    1002:
                    {
                        text:
                            ["你好，朋友", "这是一个未完成的二创作品", "你可以选择直接传送到某个地方来体验剧情", "是", "否"],
                        BGM: ""
                        ,
                        require:
                            [],
                        choice1:
                            function () {
                                t.eventId = 14;
                                t.ifTriggerEvent();
                            },
                        choice2:
                            function () {
                                cc.director.loadScene("main");
                            }
                    },
                    1003:
                    {
                        text:
                            ["早上，我正在睡觉，", "突然传来了踩断树枝的声音，", "是否要出帐篷看看？", "是", "否"],
                        BGM: ""
                        ,
                        require:
                            [],
                        choice1:
                            function () {
                                n.enemyId = 100;
                                i.save();
                                cc.director.loadScene("main");
                            },
                        choice2: function () {
                            cc.director.loadScene("main");
                        }
                    },
                    1005:
                    {
                        text:
                            ["早上醒来，我刚走出帐篷", "却突然看到一个羸弱的女孩躺在我昨晚的火堆旁", "我走进仔细一看，原来是前天试图打劫我的女贼", "她看上去已经睡着了，要不要把她带进帐篷里？", "是", "否"],
                        BGM: ""
                        ,
                        require:
                            [],
                        choice1:
                            function () {
                                t.eventId = 15;
                                t.ifTriggerEvent();
                            },
                        choice2: function () {
                            r("你对她没什么好感，直接走了");
                        }
                    },
                    1007: {
                        text: ["树林中，一条圆柱型的物体似乎正在活动，我远远的就发现了它", "是否搞它?", "是", "否"],
                        BGM: "",
                        require: [],
                        choice1: function () {
                            n.enemyId = 908;
                            i.save();
                            cc.director.loadScene("main");
                        },
                        choice2: function () {
                            cc.director.loadScene("main");
                        }
                    },
                    2002: {
                        text: ["一大早，我正蜷缩在垃圾堆中睡觉，", "突然被几个流浪汉踢醒，", "其中一个满脸胡渣的大汉，骂道，", "“老子注意你半天了，他娘的在这里睡觉，给谁打招呼了？”", "站起来瞪着他", "赶紧递根烟"],
                        BGM: "",
                        require: [],
                        choice1: function () {
                            if (0 == e("scr_data2").gameData[4]) {
                                n.role.hp = i.role.maxHp();
                                n.enemyId = 101;
                                i.save();
                                cc.director.loadScene("main");
                            } else {
                                n.money += 20;
                                r("“开玩笑的嘛，来，拿着买点吃的，早点回去吧孩子~”。获得2元~");
                            }
                        },
                        choice2: function () {
                            if (0 == e("scr_data2").gameData[4]) if (n.itemNum2[7] >= 1) {
                                n.itemNum2[7] -= 1;
                                r("胡渣大汉接过烟，说道，\n“还算有点脑子。不过，你最好给我滚远点，要不没你好果子吃，明白没？”");
                            } else cc.find("Canvas/Notify2").getComponent("cc.Label").string = "你身上没有烟..."; else {
                                n.itemNum2[7] += 1;
                                n.itemNum2[12] += 2;
                                r("“开玩笑的嘛，来，抽根烟压压惊~”。获得【香烟】*1，【啤酒】*2");
                            }
                        }
                    },
                    2004: {
                        text: ["早上，一位小男孩，", "远远看了我好久；", "我浑身不自在，刚想起身，", "小男孩在地上放了个东西，一溜烟跑了。", "我走近一看，地上是一个糖纸，里面包着半个棒棒糖！", "", "(≥﹏ ≤)"],
                        BGM: "BGM1",
                        require: [],
                        choice1: function () {
                            cc.director.loadScene("main");
                        },
                        choice2: function () {
                            n.hunger = i.maxHunger();
                            n.energy += i.maxEnergy();
                            n.role.hp = i.role.maxHp();
                            r("我要努力活下去！\n（状态全恢复+爆满！）");
                        }
                    },
                    2006: {
                        text: ["电线杆一张纸条上写道，", "“急招大量临时工：日薪2元！年龄不限！学历不限！无需身份证！工资日结。\n地址：杨湖小区5楼603”，", "你要去看看吗？", "去", "不去"],
                        BGM: "",
                        require: [],
                        choice1: function () {
                            t.eventId = 1;
                            t.ifTriggerEvent();
                        },
                        choice2: function () {
                            cc.director.loadScene("main");
                        }
                    },
                    2009: {
                        text: ["“少侠请留步”", "一个奇装异服，蓬头垢面的人走过来说道，", "“在下灭蚊堂九堂主，", "立志杀尽天下蚊子,", "近日，在下跟踪多日，", "少侠武功了得，所到之处，蚊尸遍野，", "在下实在佩服，", "不知是否愿帮我完成一个心愿?”", "", "蛤?"],
                        BGM: "",
                        require: [],
                        choice1: function () { },
                        choice2: function () {
                            t.eventId = 2;
                            t.ifTriggerEvent();
                        }
                    },
                    2011: {
                        text: ["一个醉汉说你偷了他的啤酒，非要你还酒，", "给不给?", "不给", "给（需啤酒*1）"],
                        BGM: "",
                        require: [],
                        choice1: function () {
                            n.role.hp = i.role.maxHp();
                            n.enemyId = 909;
                            i.save();
                            cc.director.loadScene("main");
                        },
                        choice2: function () {
                            if (n.itemNum2[12] >= 1) {
                                n.itemNum2[12] -= 1;
                                r("“我就说是你偷的嘛！还不承认？你这种小孩就喜欢偷东西。”");
                            } else cc.find("Canvas/Notify2").getComponent("cc.Label").string = "你身上没啤酒...";
                        }
                    },
                    2014: {
                        text: ["一位浑身散发着异味的中年妇女走过来，说道，", "“小帅哥，麻烦你个事儿，”", "说完她拿出一件旧皮衣。", "“这本来是留着过冬的衣服，还是新的，你看能不能换你几根烟抽抽？”", "换（需香烟*1）", "不换"],
                        BGM: "",
                        require: [],
                        choice1: function () {
                            if (n.itemNum2[7] >= 1) {
                                n.itemNum2[7] -= 1;
                                n.itemNum2[9] += 1;
                                t.eventId = 4;
                                cc.audioEngine.stopAll();
                                cc.audioEngine.play("res/raw-assets/Audio/BGM3.ogg", !1, 1);
                                t.ifTriggerEvent();
                            } else cc.find("Canvas/Notify2").getComponent("cc.Label").string = "你身上没有那么多烟...";
                        },
                        choice2: function () {
                            cc.director.loadScene("main");
                        }
                    },
                    2016: {
                        text: ["流浪汉之间的竞争变得日益激烈，", "很多流浪汉不得不早晨4点、蹲守在各种小饭店和垃圾点...", "这一天，你总算领先了一个长期蹲守据点的老奶奶，几分钟", "你选择", "开左边的垃圾箱（物品）", "开右边的垃圾箱（材料）"],
                        BGM: "",
                        require: [],
                        choice1: function () {
                            n.itemNum2[27] += 1;
                            n.itemNum2[24] += 1;
                            r("获得【晓月手链】*1，【JK制服】*1");
                        },
                        choice2: function () {
                            n.itemNum[0] += 4;
                            n.itemNum[1] += 4;
                            n.itemNum[4] += 3;
                            n.itemNum2[1] += 3;
                            n.money += 8;
                            r("获得【木材】*4【亚麻】*4【果子】*3【伤药】*3【金钱】*0.8");
                        }
                    },
                    2017: {
                        text: ["“你tm还没走？”", "“不知道这是老子的地？”", "", "我在等你！"],
                        BGM: "",
                        require: [n.choice[0], 1],
                        require2: [a.gameData[4], 0],
                        choice1: function () { },
                        choice2: function () {
                            n.enemyId = 101;
                            n.role.hp = i.role.maxHp();
                            i.save();
                            cc.director.loadScene("main");
                        }
                    },
                    2019: {
                        text: ["我正在林荫道下小憩，", "一位小女孩好奇的看着我，似乎想要过来，", "年轻的妈妈慌忙拉住她，然后从钱包抽出2元钱，丢在我的身上，说道，", "“有手有脚的，怎么不去找个活干？”", "把钱收起来", "把钱还给她，离开"],
                        BGM: "BGM1",
                        require: [],
                        choice1: function () {
                            n.money += 20;
                            r("好吧...\n我就是个乞丐\n【获得2元钱！】");
                        },
                        choice2: function () {
                            r("是啊，有手有脚，怎么就活成这样呢？为啥？");
                        }
                    },
                    2020: {
                        text: ["“CNM！", "给老子起来！”", "我的感觉头部受到猛烈一击，鲜血流了下来。", "一个满身肥膘的大汉，凶狠的蹬着我，他的身后是前几天的那几个流浪汉，", "“敢在老子地盘上撒野的就是你小子？”", "是", "掏匕首"],
                        BGM: "BGM1",
                        require: [],
                        choice1: function () {
                            if (0 == a.gameData[4]) {
                                n.skillLv[4] = 0;
                                n.enemyId = 103;
                                n.role.hp = i.role.maxHp();
                                i.save();
                                cc.director.loadScene("main");
                            } else {
                                n.itemNum2[11] += 1;
                                r("“哈哈哈哈哈~果然是条硬汉！小伙子有前途。拿上老子的战袍，征服宇宙吧！”。获得【红夹克】*1");
                            }
                        },
                        choice2: function () {
                            if (0 == a.gameData[4]) {
                                n.enemyId = 103;
                                n.role.hp = i.role.maxHp();
                                i.save();
                                cc.director.loadScene("main");
                            } else {
                                n.itemNum2[11] += 1;
                                r("“哈哈哈哈哈~果然是条硬汉！小伙子有前途。拿上老子的战袍，征服宇宙吧！”。获得【红夹克】*1");
                            }
                        }
                    },
                    3003: {
                        text: ["早上，山里下起了暴雨，", "帐篷里全部湿透，我慌忙逃窜，寻找避雨的地方，", "突然发现山脚有间民房", "【你要进去避雨吗？】", "去", "不去"],
                        require: [n.distance, 0],
                        choice1: function () {
                            t.eventId = 3;
                            t.ifTriggerEvent();
                        },
                        choice2: function () {
                            cc.director.loadScene("main");
                        }
                    },
                    3005: {
                        text: ["来到一个小村庄，", "门口两个抽烟的年轻人，挡住去路，", "不让通行。", "硬闯", "绕道而行"],
                        require: [n.distance, 0],
                        choice1: function () {
                            n.role.hp = i.role.maxHp();
                            n.enemyId = 104;
                            i.save();
                            cc.director.loadScene("main");
                        },
                        choice2: function () {
                            cc.director.loadScene("main");
                        }
                    },
                    3006: {
                        text: ["我正在路边小解，", "突然，一辆黑色轿车疾驰而来，", "我本能一跃，滚落沟底，", "正在此时，车上下来两个拿着铁锹（枪）的农民！", "", "掏武器！"],
                        require: [n.choice[3], 2],
                        choice1: function () { },
                        choice2: function () {
                            n.role.hp = i.role.maxHp();
                            n.enemyId = 105;
                            i.save();
                            cc.director.loadScene("main");
                        }
                    },
                    3010: {
                        text: ["早上我还在睡觉，外面传来一阵阵大哭声和大笑声吵醒，", "我钻出帐篷一看————", "路边，一个叉腿坐地、短发、身着中学校服的妹子，喝着啤酒，一会大笑，一会大哭...", "过去问问", "算了，还是不要生事的好"],
                        require: [],
                        choice1: function () {
                            0 == a.gameData[4] ? i.QLnewfunction.addxiaoyue_favorability(1) : i.QLnewfunction.addxiaoyue_favorability(66);
                            r("女孩（晓月，游戏伙伴之一）瞟了你一眼，并没有理你，只是自顾自的喝完了手上的啤酒", "随后她站起来，拍了拍身上的灰就离开了");
                        },
                        choice2: function () {
                            n.role.hp -= 1;
                            r("女孩（晓月，游戏伙伴之一）向你扔了块石头，\n<(｀^′)>\n你损失1点生命");
                        }
                    },
                    3011: {
                        text: ["晚上，我正在帐篷里睡觉", "一个柔软的身体钻了进来，", "“(；´д｀)ゞ~老哥你好~", "有没有啥吃的a~，", "我两天没吃过东西啦\n(ಥ_ಥ)”", "有哇", "流氓——呀————！"],
                        require: [n.friend_xiaoyue.favorability, 1],
                        choice1: function () {
                            i.QLnewfunction.addxiaoyue_favorability(30);
                            //n.friend_xiaoyue.favorability += 30;
                            n.itemNum[0] -= parseInt(.5 * n.itemNum[0]);
                            n.itemNum2[0] -= parseInt(.5 * n.itemNum2[0]);
                            n.itemNum2[12] -= parseInt(.5 * n.itemNum2[12]);
                            n.ifFollow[0] = 1;
                            r("...“哈哈哈哈哈哈哈哈哈——嗝————谢谢老哥！\n(*≧▽≦)ツ┻━┻！\n老哥你这么好肯定能带我去省城的对不对！”\n【你损失一半的果子熟肉和啤酒！晓月跟随！】");
                        },
                        choice2: function () {
                            r("你一脚把女孩（晓月）踹出了帐篷...");
                        }
                    },
                    3013: {
                        text: ["“嘿~老哥，做早饭咧~(｀・ω・´)", "我做饭可厉害啦(*￣︶￣)，", "让我试试呗( • ̀ω•́ )✧~", "让她试", "不让她试"],
                        require: [n.ifFollow[0], 1],
                        choice1: function () {
                            if (n.friend_xiaoyue.favorability < 35) {
                                n.role.hp = 1;
                                i.QLnewfunction.addxiaoyue_favorability(40);
                                //n.friend_xiaoyue.favorability += 40;
                                r("...你喝了一大盆「黯然销魂十杂大补汤」\n【生命全损失，晓月好感+40】");
                            } else if (n.friend_xiaoyue.favorability < 100) {
                                n.itemNum2[0] += 3;
                                //n.friend_xiaoyue.favorability += 20;
                                i.QLnewfunction.addxiaoyue_favorability(20);
                                r("获得【熟肉】*3\n晓月好感+20");
                            } else {
                                n.itemNum[13] += 1;
                                i.QLnewfunction.addxiaoyue_favorability(50);
                                //n.friend_xiaoyue.favorability += 50;
                                r("获得神秘道具\n晓月好感+50");
                            }
                        },
                        choice2: function () {
                            i.QLnewfunction.addxiaoyue_favorability(-5);
                            //n.friend_xiaoyue.favorability -= 5;
                            r("哼！￣へ￣\n【晓月好感-5】");
                        }
                    },
                    3015: {
                        text: ["发现一个山洞，", "洞里有两条路，", "一条似乎有点亮光，", "一条布满青苔，黑不见底", "你走哪条？", "有亮光的（堂主）", "幽黑的（物品）"],
                        require: [],
                        choice1: function () {
                            t.eventId = 5;
                            t.ifTriggerEvent();
                        },
                        choice2: function () {
                            n.itemNum2[18] += 1;
                            r("你找了一个【JK制服鞋】！拿了赶紧溜了~");
                        }
                    },
                    3016: {
                        text: ["“老哥(ಥ﹏ಥ)，", "刚才打雷啦，听见没，太吓人啦(´థ౪థ)σ，", "emmm..那个..我..能睡你旁边吗？\n(︶.̮︶✽)”", "可以哇", "不太好吧..."],
                        require: [n.ifFollow[0], 1],
                        choice1: function () {
                            n.energy = 0;
                            i.QLnewfunction.addxiaoyue_favorability(100);
                            //n.friend_xiaoyue.favorability += 100;
                            r("由于晓月晚上说梦话（偷笑）、蹬人，你一晚没睡！\n【精力0恢复！晓月好感+100】");
                        },
                        choice2: function () {
                            i.QLnewfunction.addxiaoyue_favorability(-5);
                            //n.friend_xiaoyue.favorability -= 5;
                            r("￣へ￣\n【晓月好感-5】");
                        }
                    },
                    3017: {
                        text: ["有人喊抓贼，", "是否帮忙？", "是", "不要"],
                        require: [],
                        choice1: function () {
                            n.role.hp = i.role.maxHp();
                            n.enemyId = 106;
                            i.save();
                            cc.director.loadScene("main");
                        },
                        choice2: function () {
                            cc.director.loadScene("main");
                        }
                    },
                    3019: {
                        text: ["你路过一个驻地地质勘察队时，里面的人员发现了你，他们邀请你进来吃口饭。", "【你进去吗？】", "进去", "算了"],
                        require: [],
                        choice1: function () {
                            n.hunger = i.maxHunger();
                            n.itemNum[0] += 3;
                            n.itemNum2[13] += 1;
                            n.chioce2[0] = 1;
                            r("地质队和你一起吃了一顿饭。其中一位中年男子托你送一个生日礼物给他的女儿。\n【饥饿全恢复！获得「果子」*3！获得委托礼物「┑(=^ω^=)┑」*1】");
                        },
                        choice2: function () {
                            cc.director.loadScene("main");
                        }
                    },
                    3021: {
                        text: ["你在一个隐蔽的草丛中发现一套水手服，", "似乎是有人故意放在这里的", "你要用它替换掉晓月身上的脏衣服吗？", "这是为她着想！", "想想就行了(º﹃º )"],
                        require: [n.ifFollow[0], 1],
                        choice1: function () {
                            if (n.friend_xiaoyue.favorability > 400) {
                                i.QLnewfunction.addxiaoyue_favorability(75);
                                //n.friend_xiaoyue.favorability += 75;
                                r("(/ω＼)好害羞...不过只要你喜欢我就穿...\no(*////▽////*)q\n晓月好感+75");
                            } else {
                                n.role.hp = 1;
                                r("动~感~少~女~拳——！\n（╬￣皿￣）=○＃（￣＃）３￣）\n你损失全部生命");
                            }
                        },
                        choice2: function () {
                            cc.director.loadScene("main");
                        }
                    },
                    3022: {
                        text: ["一个可怜的流浪汉要求和你一起做个伴，", "你是否同意？", "同意", "拒绝"],
                        require: [],
                        choice1: function () {
                            if (1 == n.ifFollow[0]) {
                                n.role.hp = i.role.maxHp();
                                n.enemyId = 107;
                                i.save();
                                r("晓月：“等等！他有问题”")
                            } else
                                n.money = 0;
                            r("....第二天一大早，流浪汉早就不见踪影。\n【你损失全部金钱！】");
                        },
                        choice2: function () {
                            n.role.hp = i.role.maxHp();
                            n.enemyId = 107;
                            i.save();
                            r("“cnm！老子弄死你！”");
                        }
                    },
                    3024: {
                        text: ["“哥...那啥...e....\n⁄(⁄⁄•⁄ω⁄•⁄⁄)⁄", "到了省城后，你要不来我家玩吧”", "好呀", "算了，你父母肯定不会同意的"],
                        require: [n.ifFollow[0], 1],
                        choice1: function () {
                            r("“耶————！\n(’∇’)シ┳━┳掀桌（开心）\n。。。。\n┬—┬ノ('-'ノ)摆好摆好”");
                        },
                        choice2: function () {
                            r("晓月似乎很伤心...");
                        }
                    },
                    4003: {
                        text: ["中年大叔对于新伙伴似乎很感兴趣，几次想过来搭话。", "最后终于憋不住，", "“兄弟，我琢磨了好几天，发现了一个天大的秘密！”", "他似乎很激动，", "“能不能借我一块钱，这次稳中大奖！跑不了！中了奖咱们一人一半！怎么样？”", "借", "不借"],
                        require: [],
                        choice1: function () {
                            if (n.money >= 10) {
                                n.publicVar2[14] = 1;
                                r("中年大叔抢过钱，一溜烟，不见了...");
                            } else cc.find("Canvas/Notify2").getComponent("cc.Label").string = "你兜里有几个钱，心里没点数？";
                        },
                        choice2: function () {
                            r("“哎~难受哇~看着钱，就没了...”");
                        }
                    },
                    4006: {
                        text: ["我正在在街上捡垃圾，突然一个20上下，穿着短裙、高跟鞋的小姐姐，拉住我的衣服小声说，", "“小帅哥，要不要来玩会儿，只要5毛哟~”", "不去！", "好呀(°_°) "],
                        require: [],
                        choice1: function () {
                            cc.director.loadScene("main");
                        },
                        choice2: function () {
                            n.publicVar2[15] += 1;
                            t.eventId = 7;
                            t.ifTriggerEvent();
                        }
                    },
                    4007: {
                        text: ["中年大叔不知道哪里弄了点回锅肉和啤酒，", "非要叫你过去吃两口，", "当然去呀！", "算了，不想和他有什么瓜葛"],
                        require: [n.publicVar2[14], 1],
                        choice1: function () {
                            t.eventId = 8;
                            t.ifTriggerEvent();
                        },
                        choice2: function () {
                            cc.director.loadScene("main");
                        }
                    },
                    4008: {
                        text: ["这天，桥底下搬来一个吉他女孩（陈碧瑶），", "单马尾、白体恤、牛仔裤，怎么看都不像是流浪汉。", "她似乎有些腼腆，面对中年大叔的质问，只是莞尔一笑", "不行，太特么奇怪了，我也得去问个究竟", "暗中观察一段时间再说"],
                        action: function () {
                            var t = e("scr_data");
                            0 == e("scr_data2").gameData[4] && (t.publicVar[7] = -49);
                            t.publicVar2[17] = 1;
                            i.save();
                        },
                        require: [],
                        choice1: function () {
                            n.publicVar[7] -= 10;
                            r("碧瑶好感-10！");
                        },
                        choice2: function () {
                            cc.director.loadScene("main");
                        }
                    },
                    4012: {
                        text: ["三个身穿制服的胖子来到桥下，", "一脚踢开脚边的水壶，大声叫到，", "“不许在这里搭帐篷，听到没！”", "正面刚", "赶紧递烟（需烟*3，金钱*3）"],
                        require: [],
                        choice1: function () {
                            n.role.hp = i.role.maxHp();
                            n.enemyId = 110;
                            if (0 == n.publicVar[8]) {
                                n.ifFollow[1] = 1;
                                n.publicVar[7] += 700;
                                n.friendSkill[1] = 1;
                                n.friendSkill[3] = 1;
                                n.friendSkill[4] = 1;
                                n.friendSkill[5] = 1;
                                n.friendSkill[6] = 1;
                                n.friendSkill[8] = 1;
                                r("碧瑶加入战斗！");
                            } else {
                                i.save();
                                cc.director.loadScene("main");
                            }
                        },
                        choice2: function () {
                            if (n.itemNum2[7] >= 3 && n.money >= 30) {
                                n.itemNum2[7] -= 3;
                                n.money -= 30;
                                r("“一个星期内，给我搬走，听见没！”");
                            } else cc.find("Canvas/Notify2").getComponent("cc.Label").string = "尴尬，烟不够...";
                        }
                    },
                    4014: {
                        text: ["经过几天的寻找，", "总算找到地质队长描述的小区，", "是否要将委托礼物（┑(=^ω^=)┑）归还呢？", "归还", "自己留着"],
                        require: [n.chioce2[0], 1],
                        choice1: function () {
                            n.itemNum2[13] -= 1;
                            n.chioce2[0] = 2;
                            r("队长的女儿，中学生模样，扎着双马尾，非常可爱。不过她似乎对礼物没啥兴趣，扔到一边，就进屋去了...\n年轻的妈妈邀我进去，我担心弄脏了地板，慌忙推辞...走出小区，恍若隔世...");
                        },
                        choice2: function () {
                            cc.director.loadScene("main");
                        }
                    },
                    4015: {
                        text: ["八月盛夏，林荫路上，我意外的遇到了碧瑶，", "她带着鸭舌帽，似乎不想被人认出；一把吉他，落寞地独唱着。", "虽然围观的人很多，但是打赏的几乎没有，", "“这么漂亮还出来乞讨？是在炒作？！”，有人摸着下巴，大声「嘀咕」", "打赏自己一半的钱", "算啦，这是她自己的事"],
                        require: [],
                        choice1: function () {
                            if (n.money > 0) {
                                var e = parseInt(.5 * n.money + 1), t = parseInt(.5 * e + 4), a = (e / 10).toFixed(1);
                                n.money -= e;
                                n.publicVar[7] += t;
                                r("碧瑶看了你一眼，低下头继续唱着歌...\n【你本次给出" + a + "元，碧瑶存款+" + a + "元，好感+" + t + "】");
                            } else cc.find("Canvas/Notify2").getComponent("cc.Label").string = "你身上一分钱也没有！";
                        },
                        choice2: function () {
                            cc.director.loadScene("main");
                        }
                    },
                    4017: {
                        text: ["“(ಡωಡ)hiahiahia！", "老哥，可算找到你啦！", "就差这里的垃圾箱没找啦！(╥╯^╰╥)", "上次忘了说了，给，这是我家地址，记得过来玩哈(^_−)☆”", "", "(#ﾟДﾟ)"],
                        action: function () {
                            n.publicVar[9] = 1;
                            i.save();
                        },
                        require: [n.publicVar[3], 1],
                        choice1: function () { },
                        choice2: function () {
                            t.eventId = 9;
                            t.ifTriggerEvent();
                        }
                    },
                    4018: {
                        text: ["这天，我在街上游荡，", "意外的碰到了晓月！", "她全是干干净净，依旧留在短发", "我感觉脸颊发烫，刚想找个地方避开，但是还是被发现，", "“hi~老哥~好久不见呀”", "“对不起，我...”", "“啊~~你走了之后，那个大叔就放开了我，还把我送回了家，什么事也没发生┐(´∀｀)┌。我先上学去了，拜拜~”", "", "....."],
                        require: [n.friend_xiaoyue.favorability, 1],
                        require2: [n.publicVar[3], 0],
                        choice1: function () { },
                        choice2: function () {
                            r("那个奇怪的大叔是谁？是她爸爸的恶作剧？");
                        }
                    },
                    4019: {
                        text: ["这天，我在街上游荡，", "意外的碰到了那天的短发女孩（晓月）。", "她全是干干净净，简直像是换了一个人！", "是否过去打招呼？", "是", "算了，这么漂亮的妹子怎可能喜欢我"],
                        require: [],
                        require2: [n.friend_xiaoyue.favorability, 0],
                        choice1: function () {
                            n.publicVar[9] = 2;
                            r("“喔~是你呀~我认得你！要是有啥困难，可以来找我喔︿(￣︶￣)︿”，女孩的热情，让我鼻子一酸，这是我第一次有这种感受...");
                        },
                        choice2: function () {
                            r("注孤生————作者留言");
                        }
                    },
                    4021: {
                        text: ["街上有个男人在对一个女人拳打脚踢，", "我仔细一看，这个女人正是刚来省城时，叫我去玩玩的小姐姐！", "你是否帮她？", "帮忙", "算了，这是她自找的"],
                        require: [],
                        choice1: function () {
                            n.role.hp = i.role.maxHp();
                            n.publicVar2[15] += 1;
                            n.enemyId = 111;
                            i.save();
                            cc.director.loadScene("main");
                        },
                        choice2: function () {
                            cc.director.loadScene("main");
                        }
                    },
                    4024: {
                        text: ["一辆白色面包车开到桥下，", "中年大叔兴奋的跑过来喊道，“快快快，天上掉馅饼啦，一瓶血，2块钱！我体检不过关，不然我全捐喽！”", "献血！（生命上限-70，钱+2元）", "不献！"],
                        action: function () {
                            cc.find("Canvas/Choice/label").getComponent("cc.Label").string = "【申明】此处为游戏效果，不等于真实情况，千万别误解";
                        },
                        require: [],
                        choice1: function () {
                            n.role.maxHp -= 70;
                            n.money += 20;
                            i.save();
                            r("生命上限-70，获得2元。");
                        },
                        choice2: function () {
                            cc.director.loadScene("main");
                        }
                    },
                    4026: {
                        text: ["一帮凶恶的男人将碧瑶团团围住，其中一个皮衣男叫到，", "“念你死去爹的面子，老子一再忍让。给你10天时间，再不还钱，你就给我做小姐去！”", "朦胧夜色下，看不清碧瑶脸上的表情，不过，她一个字也没说。", "帮忙解围（BOSS级对手）", "切莫冲动，以免搞砸，先观察几天再说"],
                        require: [],
                        choice1: function () {
                            n.role.hp = i.role.maxHp();
                            n.enemyId = 112;
                            i.save();
                            cc.director.loadScene("main");
                        },
                        choice2: function () {
                            var e = parseInt(.3 * n.publicVar2[18]), t = (e / 10).toFixed(1);
                            n.publicVar2[18] -= e;
                            r("皮衣男把碧瑶背包翻了一个遍。【碧瑶存款减少" + t + "元！碧瑶存款还剩下" + (n.publicVar2[18] / 10).toFixed(1) + "】");
                        }
                    },
                    4030: {
                        text: ["我在城中村边晃荡，", "一个女人突然冲过来，把一包东西塞到怀里，然后头也不回的跑开了。", "看背影和服装，应该正是小兰", "", "打开包裹"],
                        require: [n.publicVar2[15], 2],
                        choice1: function () { },
                        choice2: function () {
                            n.itemNum[0] += 10;
                            n.itemNum2[23] += 1;
                            n.itemNum2[25] += 1;
                            r("获得【果子】*10，【创口贴】*1，【护身符】*1");
                        }
                    },
                    4032: {
                        text: ["碧瑶极为节俭，她每天晚上回来前，都会去附近一个面包店，购买当天卖剩的、折扣面包。", "这天，看着她背着吉他远远过来了，我决定和她开个玩笑，我冲到面包店里，指着她经常购买的面包，喊道，", "“老板！这种面包我全要了！”（需2元）", "“哎呀，手抽筋了！不好意哈——哈~哈~哈”"],
                        require: [],
                        choice1: function () {
                            if (n.money >= 20) {
                                n.money -= 20;
                                n.publicVar[7] += 20;
                                n.hunger += parseInt(2 * i.maxHunger());
                                r("买完面包，我在门口慢悠悠吃着。不一会儿碧瑶过来了，她看了看我，我吃惊的看着她，塞了一大口面包，她立马转头看别的去了。不一会儿，碧瑶就从店里出来了，涨红了脸问道，“e...，能不能卖我几个面包”，“哦？这个呀？可以呀，一起回去吃吧，嘿嘿~”。【饥饿值爆满，碧瑶好感+20】");
                            } else cc.find("Canvas/Notify2").getComponent("cc.Label").string = "店长：“没钱装啥逼，蛤?”";
                        },
                        choice2: function () {
                            r("你被赶了出来...");
                        }
                    },
                    4035: {
                        text: ["中年大叔拿着之前民警给的几块钱，买了一些啤酒、卤肉，喊你过去吃两口。", "去还是不去呢？", "", "去", "不去"],
                        require: [],
                        choice1: function () {
                            n.publicVar2[16] = parseInt(99 * Math.random() + 1);
                            n.hunger = i.maxHunger();
                            r("吃完饭，中年大叔兴高采烈的抽出两张彩票，给了你一张。获得【彩票】（明晚开奖）！饥饿全恢复！");
                        },
                        choice2: function () {
                            cc.director.loadScene("main");
                        }
                    },
                    4038: {
                        text: ["中年大叔拿着报纸、挺着圆鼓鼓的肚子，气喘吁吁回来桥下。", "俩人激动得不行！", "", "开奖啦！好紧张！"],
                        require: [n.publicVar2[16], 1],
                        choice1: function () { },
                        choice2: function () {
                            if (n.publicVar2[16] < 90) {
                                n.energy = 10 * parseInt(.05 * n.energy);
                                r("...\n......\n.........\n没有中奖\n你气得一晚上没睡好\n精力恢复减半...");
                            } else {
                                n.money += 10;
                                n.energy = 10 * parseInt(.05 * n.energy);
                                r("...\n......\n.........\n恭喜中得1元大奖！\n你兴奋得一晚上没睡好\n精力恢复减半...获得1元...");
                            }
                            n.publicVar2[16] = 0;
                        }
                    },
                    4040: {
                        text: ["皮衣男一伙再次来到桥下，围住碧瑶问道：", "“怎么样？赚的钱呢？你不是在卖唱么？”", "“那是给我妈治病的，你的钱我一定会还的。”，碧瑶有点惊恐。", "“这是你自己的事，我不关心。我只是让你还钱！”，皮衣男拉高了嗓门", "【你要怎么办？】", "先稳住皮衣男，把身上所有钱给他（必须大于2元）", "...这种事，我无能为力"],
                        require: [],
                        choice1: function () {
                            if (n.money >= 20) {
                                var e = n.money, t = parseInt(.5 * e + 5), a = (e / 10).toFixed(1);
                                n.money -= e;
                                n.publicVar2[18] += e;
                                n.publicVar[7] += t;
                                r("“哦？这么快就找到男朋友啦？虽然不够塞牙缝。不过我也不是那么不通情达理，我就给「你们」多点时间。”，说完皮衣男离开了。\n【你本次给出" + a + "元，碧瑶存款+" + a + "元，好感+" + t + "】");
                            } else cc.find("Canvas/Notify2").getComponent("cc.Label").string = "这点钱恐怕会激怒对方...";
                        },
                        choice2: function () {
                            var e = parseInt(.5 * n.publicVar2[18]), t = (e / 10).toFixed(1);
                            n.publicVar2[18] -= e;
                            r("几个跟班上前围住碧瑶，皮衣男从吉他包里搜出" + t + "元，说道，“我也不是那么不通情达理，我先拿一些，回去好交差，下次可没这么便宜了。”【碧瑶存款减少" + t + "元！碧瑶存款还剩下" + (n.publicVar2[18] / 10).toFixed(1) + "】");
                        }
                    },
                    4042: {
                        text: ["“小哥，请问下哪里比较容易捡到罐子？”，一天胖女人过来问道，她的手在不停的颤抖。", "告诉她", "不理她"],
                        require: [],
                        choice1: function () {
                            n.publicVar2[19] += 50;
                            r("“捡罐子得早上五点前去，不然会被其他人捡走。小饭店、旅馆、活动场多点，运气好可以捡到零食、盒饭...”\n【你获得易拉罐的概率降低3%！】");
                        },
                        choice2: function () {
                            cc.director.loadScene("main");
                        }
                    },
                    4045: {
                        text: ["由于人们大量捕杀蚊子，蚊子已经濒临灭绝，一些投机商人纷纷囤积蚊子尸体，哄抬物价。", "这不，一个暗中观察我好几天的商人，终于憋不住了，", "“我这里全球最高价，每只三毛！别掖着啦，过几天天气转凉，就不值这个价喽~”", "出售所有蚊子尸体", "不卖！坐等升值！"],
                        require: [],
                        choice1: function () {
                            var e = n.kills[0], t = 3 * e, a = (t / 10).toFixed(1);
                            n.money += t;
                            n.kills[0] = 0;
                            r("你一共出售" + e + "只蚊子，获得" + a + "元！");
                        },
                        choice2: function () {
                            r("“阔以！你就掖着，等发霉吧！”，蚊子商人气愤的走了。");
                        }
                    },
                    4047: {
                        text: ["这天，你发现一个还未「开启」的「宝箱」（垃圾箱）。", "不过，你远远看到老奶奶和胖女人正向这边走来。", "你是否要「开启」宝箱", "凭本事发现的宝箱，为啥要让给别人，开！", "算了，作为对她成功迈出第一步的鼓励，留给她吧！"],
                        require: [n.publicVar2[19], 1],
                        choice1: function () {
                            n.itemNum[2] += 10;
                            n.itemNum2[27] += 1;
                            n.itemNum2[21] += 1;
                            r("获得【易拉罐】*10，【晓月手链】*1，【小裤裤】*1");
                        },
                        choice2: function () {
                            n.publicVar2[19] += 50;
                            r("不一会儿母女俩就走了过来，妇女牵着塑料袋，老奶奶在垃圾箱中掏了半天，妇女有点不耐烦，“快点呀！好臭！手都快断了！”。老奶奶笑眯眯的安慰道，“再坚持会儿！回去后、你一定可以让老头子大吃一惊的！”。妇女没再说什么了。");
                        }
                    },
                    4049: {
                        text: ["碧瑶，渐渐卸下了防御，我们的话也慢慢多了起来。", "“你欠那些人多少钱？”，我问道。", "“额，两万多吧...”\n“...怎么会这么多！”，我有点吃惊。\n“我爸公司倒闭，借的六千，翻到现在的两万...”\n“那你爸妈呢？”，这个问题我一直都想问。\n“爸爸自杀了，后来妈妈病倒了，现在寄居在乡下亲戚家...”", "", "......."],
                        require: [],
                        choice1: function () { },
                        choice2: function () {
                            t.eventId = 10;
                            t.ifTriggerEvent();
                        }
                    },
                    4052: {
                        text: ["晚上，天气微凉，我买了几个热腾腾的馒头给碧瑶送了过去。", "我背着吉他，一起走在回家的路上。", "宁静的秋夜，皓月如洗，树影婆娑......", "【你是否要尝试牵下碧瑶的手呢？】", "试一试！死了也值！（成功率不固定，根据好感值计算概率！）", "算了吧，我拿什么去谈一场恋爱？别连朋友也没得做！"],
                        require: [],
                        choice1: function () {
                            var e = n.publicVar[7];
                            if (e < 300) {
                                var t = parseInt(.1 * (300 - e));
                                n.publicVar[7] -= t;
                                r("我缓缓靠近，假装不经意间勾了一下她的手，她本能般的缩回了手，拉开距离。【陈碧瑶戒备增加，好感-" + t + "！】");
                            } else {
                                n.publicVar[7] += 40;
                                r("我缓缓靠近，假装不经意间勾了一下她的手，她轻微的缩了一下手，不过立即就安静下来，我顺势勾起她的指头，捏住她的手，一路都没有说话，但是我感觉我的都快跳出来啦，她的手心温暖而湿润。【陈碧瑶好感+40】");
                            }
                        },
                        choice2: function () {
                            cc.director.loadScene("main");
                        }
                    },
                    146: {
                        text: ["我捡完垃圾，回到桥下，皮衣男把碧瑶按到墙上，说道，", "“你别怪我，不就是让他在女儿面前脱光衣服吗，这点承受能力都没有，做个毛的老板！你怕是没见过高级的要债方法哟~”", "战斗！", "给他钱（需10元）~"],
                        action: function () {
                            e("scr_data").enemyId = 113;
                            i.save();
                        },
                        require: [],
                        choice1: function () {
                            n.role.hp = i.role.maxHp();
                            n.enemyId = 113;
                            i.save();
                            cc.director.loadScene("main");
                        },
                        choice2: function () {
                            if (n.money >= 100) {
                                n.money -= 100;
                                n.publicVar2[18] += 100;
                                n.publicVar[7] += 60;
                                n.enemyId = 0;
                                r("“哦？不错，小伙子挺懂事的，以后就多麻烦你了啊~”，说完皮衣男离开了。碧瑶好感+60。");
                            } else cc.find("Canvas/Notify2").getComponent("cc.Label").string = "对于胃口增的人，没个十几块，恐怕难以打发";
                        }
                    },
                    163: {
                        text: ["一个妇女和民警来到桥下，见到碧瑶后立马坐倒在地，大哭，", "“瑶儿哇~你妈快不行了~”。碧瑶呆住了。", "妇女往碧瑶身后瞅了瞅，突然停止哭泣，问，“你平时就住这儿？”。\n碧瑶没出声。\n妇女接着大哭道，“我苦命的孩子呀，从小都是住别墅，现在要和这些流浪汉住一起，你到底吃了多少苦头哇~...”", "", "..."],
                        action: function () {
                            e("scr_data").ifFollow[1] = 0;
                            n.publicVar2[17] = 0;
                            i.save();
                        },
                        require: [],
                        choice1: function () { },
                        choice2: function () {
                            t.eventId = 13;
                            t.ifTriggerEvent();
                        }
                    },
                    174: {
                        text: ["“上头有领导要来，城里不准乱搭帐篷啦，我只是奉命行事，对不住啦，小兄弟，听明白没？”", "几个身着制服的男开着巡逻车来到桥下叫道。", "知道了，我马上搬走（放弃抵抗）", "我就不走！（战斗）"],
                        action: function () {
                            n.enemyId = 401;
                            i.save();
                        },
                        require: [],
                        require2: [n.publicVar3[2], 0],
                        choice1: function () {
                            n.enemyId = 0;
                            n.publicVar3[2] = 1;
                            t.ifTriggerEvent("你搬离了桥洞...");
                        },
                        choice2: function () {
                            n.role.hp = i.role.maxHp();
                            n.enemyId = 401;
                            i.save();
                            cc.director.loadScene("main");
                        }
                    },
                    175: {
                        text: ["“听说你很拽？”，新来了几个制服男...", "我马上搬走（放弃抵抗）", "是的，我就是不走！（战斗）"],
                        action: function () {
                            n.enemyId = 402;
                            i.save();
                        },
                        require: [],
                        require2: [n.publicVar3[2], 0],
                        choice1: function () {
                            n.enemyId = 0;
                            n.publicVar3[2] = 1;
                            t.ifTriggerEvent("你搬离了桥洞...");
                        },
                        choice2: function () {
                            n.role.hp = i.role.maxHp();
                            n.enemyId = 402;
                            i.save();
                            cc.director.loadScene("main");
                        }
                    },
                    176: {
                        text: ["“你好，请问下那个钉子户是不是你？”，又来了几个制服男...", "不是的，我刚来，我这就搬走（放弃抵抗）", "是的（战斗）"],
                        action: function () {
                            n.enemyId = 403;
                            i.save();
                        },
                        require: [],
                        require2: [n.publicVar3[2], 0],
                        choice1: function () {
                            n.enemyId = 0;
                            n.publicVar3[2] = 1;
                            t.ifTriggerEvent("你搬离了桥洞...");
                        },
                        choice2: function () {
                            n.role.hp = i.role.maxHp();
                            n.enemyId = 403;
                            i.save();
                            cc.director.loadScene("main");
                        }
                    },
                    177: {
                        text: ["“听说你在找屎？”，几个大块头制服男问道...", "没没没！这就走（放弃抵抗）", "是的，你要吗？（战斗）"],
                        action: function () {
                            n.enemyId = 404;
                            i.save();
                        },
                        require: [],
                        require2: [n.publicVar3[2], 0],
                        choice1: function () {
                            n.enemyId = 0;
                            n.publicVar3[2] = 1;
                            t.ifTriggerEvent("你搬离了桥洞...");
                        },
                        choice2: function () {
                            n.role.hp = i.role.maxHp();
                            n.enemyId = 404;
                            i.save();
                            cc.director.loadScene("main");
                        }
                    },
                    178: {
                        text: ["“要最帅警官亲自出马的就是你小子？”，一位长着小胡茬的怪蜀黍问道。", "哪敢！这就走！哈哈（放弃抵抗）", "哦~是吗？（战斗）"],
                        action: function () {
                            n.enemyId = 405;
                            i.save();
                        },
                        require: [],
                        require2: [n.publicVar3[2], 0],
                        choice1: function () {
                            n.enemyId = 0;
                            n.publicVar3[2] = 1;
                            t.ifTriggerEvent("你搬离了桥洞...");
                        },
                        choice2: function () {
                            n.role.hp = i.role.maxHp();
                            n.enemyId = 405;
                            i.save();
                            cc.director.loadScene("main");
                        }
                    },
                    179: {
                        text: ["“轰隆隆~轰隆隆”，一辆挖掘机开到了桥下...", "尼玛！我走还不成嘛！（放弃抵抗）", "我已成仙，法力无边！（战斗）"],
                        action: function () {
                            n.enemyId = 406;
                            i.save();
                        },
                        require: [],
                        require2: [n.publicVar3[2], 0],
                        choice1: function () {
                            n.enemyId = 0;
                            n.publicVar3[2] = 1;
                            t.ifTriggerEvent("你搬离了桥洞...");
                        },
                        choice2: function () {
                            n.role.hp = i.role.maxHp();
                            n.enemyId = 406;
                            i.save();
                            cc.director.loadScene("main");
                        }
                    }
                };
            function r(n) {//输出文字函数，n为内容，也就是r里面的字
                cc.find("Canvas/Determine");
                e("scr_public").save();
                cc.find("Canvas/Choice").active = !1;
                cc.find("Canvas/EventText").active = !1;
                cc.find("Canvas/Notify2").active = !1;
                e("scr_effect").playText("Canvas/Notify", n, 80);
                t.scheduleOnce(function () {
                    cc.find("Canvas/Determine").active = !0;
                    cc.find("Canvas/Determine").runAction(cc.fadeIn(2));// 在延迟后，执行淡入效果
                }, 2);// 在 2 秒后执行上述延迟的逻辑
            }
            return o;
        },
        calculateEventId: function () {
            var t = e("scr_public").regionId(), n = e("scr_data").stayDay, a = e("scr_data"), i = 0;
            1e3 == t && (i = 1e3 + n[0]);
            2e3 == t && (i = 2e3 + n[1]);
            3e3 == t && (i = 3e3 + n[2]);
            4e3 == t && (i = 4e3 + n[3]);
            a.day > 143 && (i = a.day);
            return i;
        },
        ifTrigger: function () {
            var e, t, n = this.eventData(), a = n.require[0], i = n.require[1];
            return ("undefined" == typeof a || a >= i) && ("undefined" == typeof n.require2 || (e = n.require2[0],
                t = n.require2[1], "undefined" == typeof n.require2 || e == t));
        },
        eventData: function () {
            var e = this.eventId || this.calculateEventId(), t = this.event()[e];
            return t;
        },
        //剧情速度设置传送门
        triggerEvent: function () {
            var t = e("scr_data"), n = this.eventData(), a = n.text, i = a.pop(), c = a.pop(), o = a.length, r = 1,
                s = t.publicVar[6] || 2, //剧情速度被赋值给了这个东西
                l = parseInt(.25 * s * 1e2), //延迟时间，原来是1e3
                u = cc.find("Canvas/EventText"), p = this;
            n.BGM;
            "undefined" != typeof n.action && n.action();
            this.initUI();
            window.setTimeout(function () {
                p.creatText(u, "plot0", a[0]);
            }, l);
            this.schedule(function () {
                this.creatText(u, "plot" + r, a[r]);
                r++;
            }, s * 0.1, o - 2);//加入*0.1
            this.scheduleOnce(function () {
                var e = n.choice1,
                    t = n.choice2,
                    a = cc.find("Canvas/Choice/Choice1"), o = cc.find("Canvas/Choice/Choice2");
                a.getChildByName("choiceText").getComponent("cc.Label").string = c;
                o.getChildByName("choiceText").getComponent("cc.Label").string = i;
                if ("" == c) {
                    a.active = !1;
                    cc.find("Canvas/Choice/label").active = !1;
                } else a.active = !0;
                cc.find("Canvas/Choice").runAction(cc.fadeIn(.2));//原来是2
                a.on("touchstart", e, this);
                o.on("touchstart", t, this);
            }, s * o * 0.1);//加入*0.1
        },
        initUI: function () {
            var e = cc.find("Canvas/Choice");
            e.stopAllActions();
            e.opacity = 0;
            cc.find("Canvas/EventText").removeAllChildren();
            e.getChildByName("Choice1").targetOff(this);
            e.getChildByName("Choice2").targetOff(this);
        },
        ifTriggerEvent: function () {
            "undefined" == typeof this.eventData() ? cc.director.loadScene("main") : this.ifTrigger() ? this.triggerEvent() : cc.director.loadScene("main");
        },
        onLoad: function () {
            this.ifTriggerEvent();
        }
    });
    cc._RF.pop();
}, {
    scr_data: "scr_data",
    scr_data2: "scr_data2",
    scr_effect: "scr_effect",
    scr_public: "scr_public"
}]