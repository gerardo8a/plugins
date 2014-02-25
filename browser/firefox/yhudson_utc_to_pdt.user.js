// yhudson UTC to PDT
// version 0.1 BETA! 
// Copyright (c) 2011, Gerardo Porras
// Released under the GPL license 
// http://www.gnu.org/copyleft/gpl.html 
// 
// ==UserScript==
// @name Convert yhudson UTC Date to PDT
// @description Beta: Replace UTC date format with PDT for yHudson
// @include http://yhudson.media.corp.yahoo.com:9999/yhudson/*
// @include https://secure.yhudson.global.media.corp.yahoo.com/yhudson/*
// @include http://open.ci.global.media.corp.yahoo.com:9999/yhudson/*
// @include http://leeroy.corp.yahoo.com:9999/yhudson/*
// ==/UserScript==

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
