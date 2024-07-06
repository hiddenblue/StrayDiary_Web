require = function loadModule(moduleDefinitions, hasBeenLoadedModulesExportValues, needLoadModuleIDList) {// 定义一个模块加载器
    function getModulesExportInMEM(needLoadModuleID) {// 加载模块的函数
        if (hasBeenLoadedModulesExportValues[needLoadModuleID]) {// 如果模块已经被加载，直接返回
            return hasBeenLoadedModulesExportValues[needLoadModuleID].exports;// 返回模块的导出对象
        }
        var moduleDefinition = moduleDefinitions[needLoadModuleID]
        if (!moduleDefinition) { // 如果模块未定义，抛出错误
            var error = new Error("Cannot find module '" + needLoadModuleID + "'");
            throw error.code = "MODULE_NOT_FOUND", error;
        }

        // Step 1: 创建一个新的模块对象，其中包含一个空的exports属性
        var aObjecttoReceiveExports = {
            exports: {}
        };

        // Step 2: 将这个新模块对象存储到loadedModules数组的指定位置
        hasBeenLoadedModulesExportValues[needLoadModuleID] = aObjecttoReceiveExports;

        // 调用模块的定义函数
        var moduleMainFunction = moduleDefinition[0];
        //就是模块里叫“e”的那个函数，用于加载模块
        moduleMainFunction(getModulesExportInMEM, aObjecttoReceiveExports, aObjecttoReceiveExports.exports);
        //如果moduleMainFunction中有给aObjecttoReceiveExports.exports赋值，则这个对象有效
        return hasBeenLoadedModulesExportValues[needLoadModuleID].exports;// 返回模块的导出对象
    }
    // 加载入口模块
    for (var index = 0; index < needLoadModuleIDList.length; index++) {
        var needLoadModuleID = needLoadModuleIDList[index];
        getModulesExportInMEM(needLoadModuleID)
    };
    return getModulesExportInMEM;
};
//require函数的定义
var moduleDefinitions = {};
var needLoadModuleIDList = [];
//每有一个模块，需要将他的名字push到该list