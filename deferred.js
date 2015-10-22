// Sample worker script

//Send ready message (again - sample implementation)
self.postMessage('READY');

// Sleep 
sleep(2000);

//Send completed message
self.postMessage('COMPLETED');

function sleep(miliseconds){
	var startingTime = new Date().getTime();
	var stopTime = startingTime + miliseconds;

	while( stopTime >= new Date().getTime() ) {}
}
