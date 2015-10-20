//the script executes inmediately after load
self.addEventListener('message', function(e) {
	//Receive messages from page
	var message = e.data;
	//Send message to page
	self.postMessage(e.data + ' - Processed!');
});

self.postMessage('READY');