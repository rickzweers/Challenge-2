function showTime(){
	    	var date = new Date();
	       	var h = date.getHours();
	       	var m = date.getMinutes();
	       	var s = date.getSeconds();

	       	if ( h== 0){
	        	h = 24;
	        }

	        if (h > 24){
	        	h = h - 24;
	        }

	        h = (h < 10) ? "0" + h : h;
	        m = (m < 10) ? "0" + m : m;
	        s = (s < 10) ? "0" + s : s;

	        var time = h + ":" + m + ":" + s;
	        document.getElementById("DigitalClock").innerText = time;
	       	document.getElementById("DigitalClock").textContent = time;

	       	setTimeout(showTime, 1000);
	        }

	       	showTime();



function changeBg()

{
	var d = new Date();
	var n = d.getHours();
	if (n > 20 || n < 6)
	  // 7 uur s'avonds tot 6 uur s'ochtends
	  document.body.className = "night";
	else if (n > 15 && n < 20)
	  // 4 tot 7 uur s'avonds
	  document.body.className = "sunset";
	else
	  // rest van de dag
	  document.body.className = "day";
};