window.addEventListener('DOMContentLoaded', function () {
  var storage = chrome.storage.sync
  var $ = document.querySelectorAll.bind(document)
  var swi = $('#switch')[0]
  var baiduAdblock = $('#baiduAdblock')[0]

  storage.get(function (v) {
    swi.checked = v.switch
    baiduAdblock.checked = v.baiduAdblock

    if (v.sHour) {
      $('[name=sHour]')[0].value = v.sHour
    } else {
      storage.set({sHour: $('[name=sHour]')[0].value})
    }

    if (v.sMinute) {
      $('[name=sMinute]')[0].value = v.sMinute
    } else {
      storage.set({sMinute: $('[name=sMinute]')[0].value})
    }

    if (v.sSecond) {
      $('[name=sSecond]')[0].value = v.sSecond
    } else {
      storage.set({sSecond: $('[name=sSecond]')[0].value})
    }

    if (v.eHour) {
      $('[name=eHour]')[0].value = v.eHour
    } else {
      storage.set({eHour: $('[name=eHour]')[0].value})
    }

    if (v.eMinute) {
      $('[name=eMinute]')[0].value = v.eMinute
    } else {
      storage.set({eMinute: $('[name=eMinute]')[0].value})
    }

    if (v.eSecond) {
      $('[name=eSecond]')[0].value = v.eSecond
    } else {
      storage.set({eSecond: $('[name=eSecond]')[0].value})
    }
  })

  swi.addEventListener('change', function (e) {
    storage.set({switch: this.checked})
  })

  baiduAdblock.addEventListener('change', function (e) {
    storage.set({baiduAdblock: this.checked})
  })

  for (var node of $('.time input')) {
    node.onkeydown = function (e) {
      e.preventDefault()
    }

    node.onclick = function (e) {
      var target = e.target
      var name = target.name
      var value = target.value

      storage.set({[name]: value})
    }
  }
})
