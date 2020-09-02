// Write your JavaScript code here.
// Remember to pay attention to page loading!

let h = 10000;
let u = null;
let d = null;
let r = null;
let l = null;

let upos = 0;

let rpos = 0;


let pos = 0;
let abort = null;
let land = null;
let status = null;
let takeoff = null;
let bg = null;
let rock = null;
let height = null;

function lan() {
	window.alert("The shuttle is landing. Landing gear engaged.");
	status.innerHTML = "The shuttle has landed.";
	bg.style.backgroundColor = "green";
	height.innerHTML = 0;
	 upos = 0; rock.style.bottom = upos + 'px';
	 rpos = 0; rock.style.left = rpos + 'px';
}

function toff() {
 let v = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(v === true){
		
                bg.style.backgroundColor = "blue";
                status.innerHTML = "Shuttle in flight.";
                height.innerHTML = 10000;
        }
}

function abor() {
	let ac = window.confirm("Confirm that you want to abort the mission.");
	if (ac) {
		status.innerHTML = "Mission aborted.";
		bg.style.backgroundColor = "green";
		height.innerHTML = 0;
		 upos = 0; rock.style.bottom = upos + 'px';
        	 rpos = 0; rock.style.left = rpos + 'px';
	}
}

function init() {
	window.addEventListener('load', function() {
        console.log("page is fully loaded!");
	});
	
	

	l = document.getElementById("l");
	d = document.getElementById("d");
	r = document.getElementById("r");
	u = document.getElementById("u");

	abort = document.getElementById("missionAbort");
	land = document.getElementById("landing");
	status = document.getElementById("flightStatus");
	bg = document.getElementById("shuttleBackground");
	rock = document.getElementById("rocket");
	height = document.getElementById("spaceShuttleHeight");
	takeoff = document.getElementById("takeoff");
	rock.style.position = "relative";

	abort.addEventListener("click", abor);
	takeoff.addEventListener("click", toff);
	land.addEventListener("click", lan);
	
	
	
	
	u.onclick = function() {h += 10000;if(upos<20){ upos += 10; rock.style.bottom = upos + 'px'; height.innerHTML = h;}};
 	d.onclick = function() {h -= 10000;if(upos>-260){ upos -= 10; rock.style.bottom = upos + 'px'; height.innerHTML = h;}};
 	r.onclick = function() {rpos += 10;if(rpos<160){ rock.style.left = rpos + 'px';}};
 	l.onclick = function() {rpos -= 10;if(rpos>-160){ rock.style.left = rpos + 'px';}};
}
window.onload = init;
