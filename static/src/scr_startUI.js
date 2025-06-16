scr_startUI = function (e, t, n) {//开始游戏界面的按钮在这设置！！！
    "use strict";
    cc._RF.push(t, "cea75di7zpJiqfvO6EeKLF9", "scr_startUI");
    cc.Class({
        extends: cc.Component,
        properties: {},
        supportButton: function () {
            cc.director.loadScene("support");

        },
        messageButton: function () {
            cc.director.loadScene("message");
        },
        controlButton: function () {
            JSON.parse(cc.sys.localStorage.getItem("userData")) || (cc.find("Canvas/button/button_continue").active = !1);
        },
        onLoad: function () {
            {
                
const { Query, User } = AV;
                // 初始化 SDK，放在游戏启动入口处
AV.init({
  appId: 'yCPHb5lux2TVSpk2xcrGCGaU-gzGzoHsz', // 来自控制台
  appKey: 'l1enhZcLX5Z7nXGSBaAqlQbH',         // 来自控制台
  serverURL: 'https://ycphb5lu.lc-cn-n1-shared.com' // 控制台提供的“Request 域名”，必须加
});
AV.User.signUp('testttt', 'passwordA')
.then(function(user) {
  // 更新当前用户在 world 排行榜中的成绩
  var statisticValue = Math.random() * 100;
  return AV.Leaderboard.updateStatistics(AV.User.current(), {
    'DefeatBossTimes' : statisticValue
  })
})
.then(function() {
  // 成绩更新成功
})
.catch(console.error);

            }
            this.controlButton()
            var t = cc.find("Canvas/button/button_newGame"), n = e("scr_data");
            const url = `https://api.github.com/repos/QiuLiang-99/llrj-QL`;
            t.getChildByName("Label").getComponent("cc.Label").string = "当前版本号：7.6";
            let xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    const data = JSON.parse(xhr.responseText);
                    const dateString = data.updated_at;
                    const date = new Date(dateString);
                    const year = date.getFullYear();
                    const month = date.getMonth() + 1; // getMonth() 返回的月份是从0开始的
                    const day = date.getDate();
                    const hours = date.getHours();
                    const minutes = date.getMinutes();
                    const seconds = date.getSeconds();
                    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
                    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                    t.getChildByName("Label").getComponent("cc.Label").string = "最新版本更新时间：" + formattedDate + " " + formattedTime + data.description;
                }
            };
            xhr.send();
            //bug 记得每次更新版本要写版本号
        }
    });
    cc._RF.pop();
}