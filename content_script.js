// chrome.runtime.sendMessage({closeThis: true}, function (data) {
//   console.log(data)
// })

// chrome.storage.sync.remove(['a', 'name'], function (d) {
//   console.log(d)
// })
// chrome.storage.sync.clear(function (d) {
//   console.log(d)
// })

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
