function getActiveHost(callback) {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    var tab = tabs[0]
    callback(tab)
  })
}

document.addEventListener('DOMContentLoaded', function () {

})

// StorageArea.get('open_focus', function (aa) {
//   console.log(aa)
// })

chrome.storage.managed.get('open_focus', function (aa) {
  console.log(aa)
})
