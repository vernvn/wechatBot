// 配置文件
module.exports = {
<<<<<<< HEAD
    // 基础定时发送功能配置项（必填项）
    NAME: '大莹', //女朋友备注姓名
    NICKNAME: 'together_zzll', //女朋友昵称
    MEMORIAL_DAY: '2013/01/04', //你和女朋友的纪念日
    CITY: '北京', //女朋友所在城市（城市名称，不要带“市”）
    SENDDATE: '0 03 19 * * *', //定时发送时间 每天8点06分0秒发送，规则见 /schedule/index.js
    ONE: 'http://wufazhuce.com/', // ONE的web版网站
    SWEETWORD: 'http://api.tianapi.com/txapi/saylove/', // 天行土味情话api接口
    TIANXINGWEATHER: 'http://api.tianapi.com/txapi/tianqi/', // 天行天气api接口
    AIBOTAPI: 'http://api.tianapi.com/txapi/robot/', //天行机器人API 注册地址https://www.tianapi.com/signup.html?source=474284281
    TULINGAPI: 'http://www.tuling123.com/openapi/api', // 图灵1.0接口api
    //高级功能配置项（非必填项）
    AUTOREPLY: true, //自动聊天功能 默认关闭 开启设置为: true
    DEFAULTBOT: '0', //设置默认聊天机器人 0 天行机器人 1 图灵机器人
    AUTOREPLYPERSON: ['冯伟', '邵壮', '收购阿里巴巴项目讨论组', '机器人对喷测试群2', '滴滴滴'], //指定多个好友开启机器人聊天功能   指定好友的昵称
    TULINGKEY: '图灵机器人key',//图灵机器人key,需要自己到图灵机器人官网申请，并且需要认证
    APIKEY: 'af262a576808eae93f012d321dee8f3a', //天行机器人apikey，这里奉献上我自己的key，还是建议大家自己申请一下
=======
    // 每日说配置项（必填项）
    NAME: 'leo助手', //女朋友备注姓名
    NICKNAME: 'leo助手', //女朋友昵称
    MEMORIAL_DAY: '2015/04/18', //你和女朋友的纪念日
    CITY: '上海', //女朋友所在城市（城市名称，不要带“市”）
    SENDDATE: '0 09 14 * * *', //定时发送时间 每天8点06分0秒发送，规则见 /schedule/index.js
    TXAPIKEY: '762be789103e1ae7b65573f8d4fc0df6', //此处须填写个人申请的天行apikey,请替换成自己的 申请地址https://www.tianapi.com/signup.html?source=474284281

    //高级功能配置项（非必填项）
    AUTOREPLY: false, //自动聊天功能 默认关闭 开启设置为: true
    DEFAULTBOT: '0', //设置默认聊天机器人 0 天行机器人 1 图灵机器人 2 天行对接的图灵机器人，需要到天行机器人官网充值（50元/年，每天1000次）
    AUTOREPLYPERSON: ['好友1备注','好友2备注'], //指定多个好友开启机器人聊天功能   指定好友的备注，最好不要带有特殊字符
    TULINGKEY: '图灵机器人apikey',//图灵机器人apikey,需要自己到图灵机器人官网申请，并且需要认证

>>>>>>> 69d5e2d16d7de9ef0844ff71b17c09d83bcabd05
}
