/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx7474c92c06abdd0c',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'fa6bce70b1e02bc4db0f7fad5b9842e5',

  PROVINCE: '湖北',
  CITY: '武汉',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小欣欣',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oXVwy56JM0Oq9r2IOdDwuPf6numI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'AClh744e54LOp-5tnr-1RibM0dDud8lkFWypTplCzNM',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscope: true,
      horoscopeDate: '10-13',

          // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
      birthdayMessage: true,
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '欣欣', year: '1999', date: '08-27',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '张张', year: '1993', date: '03-27',
        },
        {
          type: '节日', name: '相识纪念日', year: '2021', date: '01-17',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-01-17' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '7_EEOkhywl5l3zIakpoIL1_TIzi7SOQJb7qU1HjETyA',
  openUrl:'https://www.zycg.gov.cn/freecms/site/zygjjgzfcgzx/cggg/index.html',
  
  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oXVwy56JM0Oq9r2IOdDwuPf6numI',
    }
  ],

}

module.exports = USER_CONFIG

