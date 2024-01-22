console.log('calling')
let requestId = chrome.desktopCapture.chooseDesktopMedia(['screen'], (streamId, options) => {
	if(chrome.runtime.lastError) {
		console.log(chrome.runtime.lastError) //this prints an object with message: "A target tab is required when called from a service worker context."
	}
	console.log(streamId)
})
console.log('calling done')