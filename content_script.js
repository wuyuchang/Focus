// chrome.runtime.sendMessage({closeThis: true}, function (data) {
//   console.log(data)
// })

// chrome.storage.sync.remove(['a', 'name'], function (d) {
//   console.log(d)
// })
// chrome.storage.sync.clear(function (d) {
//   console.log(d)
// })

const matches = [
  // 视频
  'youtube.com',
  'bilibili.com',
  'iqiyi.com',
  'tudou.com',
  'youku.com',

  // 购物网站
  'amazon.com',
  'amazon.cn',
  'taobao.com',
  'tmall.com',
  'jd.com',
  'vmall.com',
  'apple.com',
  'apple.cn',
  'htc.com',
  'mi.com',
  'meizu.com',
  'oneplus.cn',

  //
  'zhihu.com',

  // 社交网站
  'twitter.com',
  'facebook.com'
]

let inURL = matches.some(function (url) {
  return location.host.indexOf(url) >= 0
})

if (inURL) {
  chrome.storage.sync.get(function (v) {
    var swi = v.switch
    var inTime = true
    var sTime = new Date()
    var eTime = new Date()
    var now = new Date()

    console.log(v)

    sTime.setHours(v.sHour)
    sTime.setMinutes(v.sMinute)
    sTime.setSeconds(v.sSecond)
    eTime.setHours(v.eHour)
    eTime.setMinutes(v.eMinute)
    eTime.setSeconds(v.eSecond)

    if (sTime.getTime() < eTime.getTime()) {
      if (now.getTime() > sTime.getTime() && now.getTime() < eTime.getTime()) {
        inTime = true
      } else {
        inTime = false
      }
    } else {

    }

    if (swi && inTime) {
      window.stop()

      document.querySelector('html').innerHTML = `
      <head>
        <title>Focus</title>
      </head>
      <body>
        <div class="wuyuchang-focus">Stay focus, keep forward...</div>
      </body>
      `
    }
  })

}


// 屏蔽百度广告
// if (location.host.indexOf('baidu.com')) {
//   window.onload = function () {
//
//     $('span.m').parents('.result').addClass('wuyuchang-adblock')
//
//     var adblock = function (id) {
//       var ele = document.getElementById(id)
//       if (ele) {
//         ele.className = 'wuyuchang-adblock'
//         console.log(ele)
//       }
//
//     }
//
//     for (var i = 3000; i < 3020; i++) {
//       adblock(i)
//     }
//
//     for (var i = 4000; i < 4020; i++) {
//       adblock(i)
//     }
//   }
// }
