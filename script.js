$(document).ready(function() {


draw();

});


function draw(){

var rowSize = 16 * 16;
for (var i = 0; i < rowSize; i++) {
	$(".container").append("<div></div>");
};

$(".container div").height(31.25);
$(".container div").width(31.25);
$(".container div").css({"background-color": "black"});

$(".container div").mouseenter(function(){
    $(this).css("background-color", "white");

});


button.onclick = remove();

function remove(){

	$(".container div").remove();
}



}