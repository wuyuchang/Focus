// chrome.runtime.sendMessage({closeThis: true}, function (data) {
//   console.log(data)
// })

window.stop()

document.querySelector('html').innerHTML = `
<head>
  <title>Focus</title>
</head>
<body>
  <div class="wuyuchang-focus">Stay focus, keep forward...</div>
</body>
`
