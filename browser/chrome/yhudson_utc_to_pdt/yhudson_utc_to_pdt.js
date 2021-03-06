function getBuildHistoryDates() {
    var elements = document.getElementById('buildHistory').getElementsByClassName('tip');	

	for (var i=0; i < elements.length; i++ ) {
		if (elements[i].nodeName == 'A') {
			var d = new Date(elements[i].innerHTML);
			// we are taking off 7 milliseconds hours to the UTC date
			var timeOffset = d.getTimezoneOffset()/60;
			var secs = d.getTime() - (3600000*timeOffset);
			
			//Create new date object in PST
			pstDate = new Date(secs);
			var pstDateString = pstDate.toString();
			
			//removing Day and timzone
			console.log(pstDateString);
			var pstFormated = pstDateString.replace(/^\w+ (\w+ \d+) (.*) \w+-.+/,"$1, $2");
			// Replacing original utc date by the new PST
			elements[i].innerHTML = pstFormated + ' PDT';
		}
	}
}

getBuildHistoryDates();
