chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.closeThis) {
    if (window.confirm('是否再坚持一会儿？')) {
      chrome.tabs.remove(sender.tab.id)
    }
  }
})
