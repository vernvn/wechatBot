/**
 * WechatBot
 *  - https://github.com/gengchen528/wechatBot
 */
<<<<<<< HEAD
const { Wechaty } = require('wechaty')
const schedule = require('./schedule/index')
const config = require('./config/index')
const untils = require('./untils/index')
const superagent = require('./superagent/index')
=======
const { Wechaty, Friendship } = require('wechaty');
const schedule = require('./schedule/index');
const config = require('./config/index');
const untils = require('./utils/index');
const superagent = require('./superagent/index');
>>>>>>> 69d5e2d16d7de9ef0844ff71b17c09d83bcabd05


// 延时函数，防止检测出类似机器人行为操作
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//  二维码生成
function onScan(qrcode, status) {
  require('qrcode-terminal').generate(qrcode); // 在console端显示二维码
  const qrcodeImageUrl = [
    'https://api.qrserver.com/v1/create-qr-code/?data=',
    encodeURIComponent(qrcode),
  ].join('');
  console.log(qrcodeImageUrl);
}

// 登录
async function onLogin(user) {
<<<<<<< HEAD
    console.log(`贴心小助理${user.name()}登录了`)
    if (config.AUTOREPLY) {
        console.log(`已开启机器人自动聊天模式`)
    }
  
    // 登陆后创建定时任务
    // await initDay()
    await initRoom();
=======
  console.log(`贴心小助理${user}登录了`);
  if (config.AUTOREPLY) {
    console.log(`已开启机器人自动聊天模式`);
  }
  // 登陆后创建定时任务
  await initDay();
>>>>>>> 69d5e2d16d7de9ef0844ff71b17c09d83bcabd05
}

const initRoom = async () => {
    // const vernvn = await bot.Contact.find({ phone: '18332556535' })
    const vernvn2 = await bot.Contact.find({ name: 'together_zzll' })
    const vernvnAll = await bot.Contact.findAll()
    // await vernvn2.alias('18332556535')
    // const vernvn3 = await bot.Contact.find({ alias: '18332556535' })
    // console.log(vernvn2);
    console.log('!!!!!!!!!!!!!!!!');
    // console.log(vernvnAll);
    vernvnAll.map(x => {
        if (x.payload.name == '大神父') {
            console.log(x);
        }
    })
    // console.log(vernvn3);


    schedule.setSchedule(config.SENDDATE, async () => {
        const room = await bot.Room.find({ topic: '滴滴滴' })
        let one = await superagent.getOne() //获取每日一句
        let weather = await superagent.getTXweather() //获取天气信息
        let today = await untils.formatDate(new Date()) //获取今天的日期
        let str = today + 
            '<br>今日天气<br>' + weather.weatherTips + '<br>' + weather.todayWeather + '<br>每日一句:<br>' + one + '<br>'
        try {
            logMsg = str        
            if (room) {
                await room.say('欢乐的时光又来临了，您的小伙伴又上线了～～～');
                await delay(2000)  
                await room.say(str) // 发送消息
            }
        } catch (e) {
        }
    })



    // const helperContactA = await bot.Contact.find({ name: '冯伟' })
    // const helperContactB = await bot.Contact.find({ name: 'MegatronZoro' }) 
    // const contactList = [helperContactA, helperContactB]
    // console.log('Bot', 'contactList: %s', contactList.join(','))
    // const room = await bot.Room.create(contactList, '机器人对喷测试群2')
    // console.log('Bot', 'createDingRoom() new room created: %s', room)
    // await room.say('机器人对喷测试群2成立了')
    // const contact = await bot.Contact.find({ name: '于凯飞' }) // change 'lijiarui' to any contact in your wechat       // change 'wechat' to any room topic in your wechat
    // if (room) {
    //     try {
    //         await delay(2000)
    //         await room.add(contact)
    //     } catch (e) {
    //         console.error(e)
    //     }
    // }
    // await room.say('新人入群了～～～')
    // await room.topic('机器人对喷测试群2')
    // await room.say('😂😂😂')
}
//登出
function onLogout(user) {
<<<<<<< HEAD
    console.log(`小助手${user}已经登出`)
=======
  console.log(`小助手${user} 已经登出`);
>>>>>>> 69d5e2d16d7de9ef0844ff71b17c09d83bcabd05
}

// 监听对话
async function onMessage(msg) {
<<<<<<< HEAD
    const contact = msg.from() // 发消息人
    const content = msg.text() //消息内容
    const room = msg.room() //是否是群消息
    console.log(`^^^^^^^^^^^^当前的room${room}`);
    if (msg.self()) {
        return
    }
    if (room) { // 如果是群消息
        const topic = await room.topic()
        console.log(`群名: ${topic} 发消息人: ${contact.name()} 内容: ${content}`)
        if (config.AUTOREPLY && config.AUTOREPLYPERSON.indexOf(topic) > -1) { // 如果开启自动聊天且已经指定了智能聊天的对象才开启机器人聊天
            let reply
            if (config.DEFAULTBOT == '0') { // 天行聊天机器人逻辑
                reply = await superagent.getReply(content)
                console.log('天行机器人回复：', reply)
            } else if (config.DEFAULTBOT == '1') { // 图灵聊天机器人
                reply = await superagent.getTuLingReply(content)
                console.log('图灵机器人回复：', reply)
            }
            try {
                await delay(100)
                await room.say(reply)
            } catch (e) {
                console.error(e)
            }
        }
    } else { // 如果非群消息
        console.log(`发消息人: ${contact.name()} 消息内容: ${content}`)
        if (config.AUTOREPLY && config.AUTOREPLYPERSON.indexOf(contact.name())>-1) { // 如果开启自动聊天且已经指定了智能聊天的对象才开启机器人聊天
            let reply
            if(config.DEFAULTBOT=='0'){ // 天行聊天机器人逻辑
                reply = await superagent.getReply(content)
                console.log('天行机器人回复：', reply)
            }else if(config.DEFAULTBOT=='1'){ // 图灵聊天机器人
                reply = await superagent.getTuLingReply(content)
                console.log('图灵机器人回复：', reply)
            }
           
            try {
                await delay(2000)
                await contact.say(reply)
            } catch (e) {
                console.error(e)
            }
=======
  const contact = msg.from(); // 发消息人
  const content = msg.text().trim(); // 消息内容
  const room = msg.room(); // 是否是群消息
  const alias = await contact.alias(); // 发消息人备注
  const isText = msg.type() === bot.Message.Type.Text;
  if (msg.self()) {
    return;
  }
  if (room && isText) {
    // 如果是群消息 目前只处理文字消息
    const topic = await room.topic();
    console.log(`群名: ${topic} 发消息人: ${contact.name()} 内容: ${content}`);
  } else if (isText) {
    // 如果非群消息 目前只处理文字消息
    console.log(`发消息人: ${alias} 消息内容: ${content}`);
    if (content.substr(0, 1) == '?' || content.substr(0, 1) == '？') {
      let contactContent = content.replace('?', '').replace('？', '');
      if (contactContent) {
        let res = await superagent.getRubbishType(contactContent);
        await delay(2000);
        await contact.say(res);
      }
    } else if (config.AUTOREPLY && config.AUTOREPLYPERSON.indexOf(alias) > -1) {
      // 如果开启自动聊天且已经指定了智能聊天的对象才开启机器人聊天\
      if (content) {
        let reply;
        if (config.DEFAULTBOT == '0') {
          // 天行聊天机器人逻辑
          reply = await superagent.getReply(content);
          console.log('天行机器人回复：', reply);
        } else if (config.DEFAULTBOT == '1') {
          // 图灵聊天机器人
          reply = await superagent.getTuLingReply(content);
          console.log('图灵机器人回复：', reply);
        } else if (config.DEFAULTBOT == '2') {
          // 天行对接的图灵聊
          reply = await superagent.getTXTLReply(content);
          console.log('天行对接的图灵机器人回复：', reply);
>>>>>>> 69d5e2d16d7de9ef0844ff71b17c09d83bcabd05
        }
        try {
          await delay(2000);
          await contact.say(reply);
        } catch (e) {
          console.error(e);
        }
      }
    }
<<<<<<< HEAD
}

// 创建微信每日说定时任务
// async function initDay() {
//     console.log(`已经设定每日说任务`)
//     schedule.setSchedule(config.SENDDATE, async() => {
//         console.log('你的贴心小助理开始工作啦！')
//         let logMsg
//         let contact = await bot.Contact.find({ name: config.NICKNAME }) || await bot.Contact.find({ alias: config.NAME }) // 获取你要发送的联系人
//         let one = await superagent.getOne() //获取每日一句
//         let weather = await superagent.getTXweather() //获取天气信息
//         let today = await untils.formatDate(new Date()) //获取今天的日期
//         let memorialDay = untils.getDay(config.MEMORIAL_DAY) //获取纪念日天数
//         let sweetWord = await superagent.getSweetWord()
//         let str = today + '<br>我们在一起的第' + memorialDay + '天<br>' + '<br>元气满满的一天开始啦,要开心噢^_^<br>' +
//             '<br>今日天气<br>' + weather.weatherTips + '<br>' + weather.todayWeather + '<br>每日一句:<br>' + one + '<br>' + '<br>每日土味情话：<br>' + sweetWord + '<br><br>' + '————————最爱你的我'
//         try {
//             logMsg = str
//             await delay(2000)
//             await contact.say(str) // 发送消息
//         } catch (e) {
//             logMsg = e.message
//         }
//         console.log(logMsg)
//     })
// }

const onRoomInvite = async () => {
}

const onRoomJoin = async () => {
}

const bot = new Wechaty({ name: 'WechatEveryDay' })


// bot.on('scan', onScan)
// bot.on('login', onLogin)
// bot.on('logout', onLogout)
// bot.on('message', onMessage)
// bot.on('room-invite', onRoomInvite)
// bot.on('room-join', onRoomJoin)


bot.start()
    .then(() => {
        console.log('服务启动')
    })
    .catch(e => console.error(e))

    let memorialDay = untils.getDay(config.MEMORIAL_DAY) //获取纪念日天数
    console.log(memorialDay)
=======
  }
}

// 创建微信每日说定时任务
async function initDay() {
  console.log(`已经设定每日说任务`);
  schedule.setSchedule(config.SENDDATE, async () => {
    console.log('你的贴心小助理开始工作啦！');
    let logMsg;
    let contact =
      (await bot.Contact.find({ name: config.NICKNAME })) ||
      (await bot.Contact.find({ alias: config.NAME })); // 获取你要发送的联系人
    let one = await superagent.getOne(); //获取每日一句
    let weather = await superagent.getTXweather(); //获取天气信息
    let today = await untils.formatDate(new Date()); //获取今天的日期
    let memorialDay = untils.getDay(config.MEMORIAL_DAY); //获取纪念日天数
    let sweetWord = await superagent.getSweetWord();
    let str = `${today}<br>我们在一起的第${memorialDay}天<br><br>元气满满的一天开始啦,要开心噢^_^<br><br>今日天气<br>${weather.weatherTips}<br>${weather.todayWeather}<br>每日一句:<br>${one}<br><br>每日土味情话：<br>${sweetWord}<br><br>————————最爱你的我`;
    try {
      logMsg = str;
      await delay(2000);
      await contact.say(str); // 发送消息
    } catch (e) {
      logMsg = e.message;
    }
    console.log(logMsg);
  });
}

const bot = new Wechaty({
  name: 'WechatEveryDay',
  puppet: 'wechaty-puppet-puppeteer',
});

bot.on('scan', onScan);
bot.on('login', onLogin);
bot.on('logout', onLogout);
bot.on('message', onMessage);

bot
  .start()
  .then(() => console.log('开始登陆微信'))
  .catch((e) => console.error(e));
>>>>>>> 69d5e2d16d7de9ef0844ff71b17c09d83bcabd05
