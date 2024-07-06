scr_system = [function (e, t, n) {//tag 设置界面
    "use strict";
    cc._RF.push(t, "00817ZNI7hJb4XVsFxczkla", "scr_system");
    cc.Class({
        extends: cc.Component,
        properties: {},
        onLoad: function () {
            var t = ["一般", "快", "一般"],
                n = cc.find("Canvas/button/speed"), a = e("scr_data"), i = e("scr_effect"),
                speedtext = cc.find("Canvas/text/speed");
            speedtext.getComponent("cc.Label").string = "你目前剧情（部分）播放速度为" + t[a.publicVar[6] || 2];
            var ex = cc.instantiate(n);//复制一个一模一样的按钮 1
            ex.setPosition(0, 459 - 200);//设置位置 往第一个按钮的下方移动200像素 2
            cc.find("Canvas/button").addChild(ex);  // 将按钮节点作为当前节点的子节点 3
            ex.getChildByName("New Label").getComponent("cc.Label").string = "倍 率";
            //获得按钮上的节点，用名字搜索子节点       子节点上有一个组件    修改组件的字符  4
            ex.color = cc.Color.RED;  //设置新节点的颜色
            //text.string = "测试按钮";//text.parent = ex;//text.color = cc.Color.RED;
            var exT = cc.instantiate(speedtext);//复制显示文字的label
            exT.setPosition(0, 557 - 200);// 如法炮制
            cc.find("Canvas/text").addChild(exT);
            exT.getComponent("cc.Label").string = "你当前拥有 " + a.energyconsumetimes + "x 前进/探索速度\n（探索时会消耗对应倍数的精力\n但是奖励总量不变）";
            ex.on("touchstart", function () {//添加触摸函数要最后加，不然复制的按钮也会有这个函数（也许吧）
                a.energyconsumetimes += 1;
                a.energyconsumetimes > 10 && (a.energyconsumetimes = 1);
                exT.getComponent("cc.Label").string = "你当前拥有 " + a.energyconsumetimes + "x 前进/探索速度\n（探索时会消耗对应倍数的精力\n但是奖励总量不变）";
            }, ex);

            var escapeBattleBtn = cc.instantiate(n);//复制一个一模一样的按钮 1
            escapeBattleBtn.setPosition(0, 459 - 400);//设置位置 往第一个按钮的下方移动200像素 2
            cc.find("Canvas/button").addChild(escapeBattleBtn);  // 将按钮节点作为当前节点的子节点 3
            escapeBattleBtn.getChildByName("New Label").getComponent("cc.Label").string = "跳 过";
            //获得按钮上的节点，用名字搜索子节点       子节点上有一个组件    修改组件的字符  4
            escapeBattleBtn.color = cc.Color.RED;  //设置新节点的颜色
            //text.string = "测试按钮";//text.parent = ex;//text.color = cc.Color.RED;
            var escapeBattleT = cc.instantiate(speedtext);//复制显示文字的label
            escapeBattleT.setPosition(0, 557 - 400);// 如法炮制
            cc.find("Canvas/text").addChild(escapeBattleT);
            var textesc = ["关闭", "开启"];
            escapeBattleT.getComponent("cc.Label").string = "当前选项为 " + textesc[a.escapeBattle] + " 状态。\n开启选项后已经击杀过的敌人\n再次遇到时将会一击秒杀";
            escapeBattleBtn.on("touchstart", function () {//添加触摸函数要最后加，不然复制的按钮也会有这个函数（也许吧）
                a.escapeBattle += 1;
                a.escapeBattle > 1 && (a.escapeBattle = 0);
                escapeBattleT.getComponent("cc.Label").string = "当前选项为 " + textesc[a.escapeBattle] + " 状态。\n开启选项后已经击杀过的敌人\n再次遇到时将会一击秒杀";// 跳过战斗设置
            }, escapeBattleBtn);
        }
    });
    cc._RF.pop();
}, {
    scr_data: "scr_data",
    scr_effect: "scr_effect"
}]