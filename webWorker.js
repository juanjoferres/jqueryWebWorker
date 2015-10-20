//the script executes inmediately after load
self.addEventListener('message', function(e) {
	//Receive messages from page
	var message = e.data;
	//Send message to page
	self.postMessage(e.data + ' - Processed!');
});

self.postMessage('READY');

/*

// worker.js

self.addEventListener('message', function(e) {
	if(e.data === 'START') {
		// Start message received.
		// Begin work
		startWork();
	} else if (e.data === 'STOP') {
		// Stop message received.
		// Perform cleanup and terminate
		stopWork();
	} else {
		// A different message has been received
		// This is data that needs to be acted upon
		processData(e.data);
	}
});

function startWork() {
	// code to start performing work here
	// send a message to the calling page
	// worker has started
	self.postMessage('STARTED');
}

function stopWork() {
	// cleanupp code here
	// stop the worker
	self.postMessage('STOPPED');
	self.close();
}

function processData(data) {
	// perform the work on the data
	self.postMessage('Processed ' + data);
} */