/**
 * Created by xoundboy on 13/05/18.
 */
var cannonAngle = 0;
const upperCannonAngleLimit = -40;
const lowerCanonAngleLimit = 15;

function moveCannon(offset){
	console.log(offset);
	cannonAngle = cannonAngle + offset;
	$('.cannon').css("transform", "rotate(" + cannonAngle + "deg)");
}

$(function(){
	$(window).keydown(function(e){
		if(e.key === "ArrowUp" && cannonAngle >= upperCannonAngleLimit){
			moveCannon(-5);
		}
		if(e.key === "ArrowDown" && cannonAngle <= lowerCanonAngleLimit){
			moveCannon(5);
		}
	});
})