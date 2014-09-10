//global vars
var textArray = [];
var textArrayObjs = [];

  var player = new VersalPlayerAPI();
  player.on('attributesChanged', function(attrs){
    console.log('attributesChanged', attrs);
	
  });

  player.on('editableChanged', function(editableObj){
    if(editableObj.editable) {
      //document.body.appendChild(document.createTextNode('author '));
	  $(".catBtn,.catBtn2,img").show();
	  $("textarea").removeAttr("readOnly");
	  $( "#draggable, #draggable1, #draggable2, #draggable3, #draggable4, #draggable5" ).draggable( "option", "cancel", "button" );
    } else {
      //document.body.appendChild(document.createTextNode('learner '));
	  $(".catBtn,.catBtn2,img").hide();
	  $("textarea").attr("readOnly",true);
	  $( "#draggable, #draggable1, #draggable2, #draggable3, #draggable4, #draggable5" ).draggable( "option", "cancel", "text" );
	  saveBank();
    }
  });

  // send this command to receive initial events
  player.startListening();

  // continuously watch for changes in height
  player.watchBodyHeight();

  // save a textarea

	
// change textarea when attributes change
	player.on('attributesChanged', function(attrs){
		
	 
	 if(attrs) {
	   //textarea.value = attrs.textareaValue;
	   loadBank(attrs);
	   //textArrayObj[2].value = attrs.word2x
	   //textarea.value = textArray[0];
	  
	 }
	});
	
	
	
$(window).bind("load", function() {

	//Bounceback for invalids
    $(function() {
    $( "#draggable, #draggable1, #draggable2, #draggable3, #draggable4, #draggable5" ).draggable({ 
		revert: "invalid",
		cancel: "text",
		snap: ".snapper",
		snapMode: "inner"});
 
	//Category 1 stickiness
    $( "#droppable>.snapper").droppable({
	  accept: ".cat1",
      activeClass: "ui-state-default",
      hoverClass: "ui-state-hover",
      drop: function( event, ui ) {
        $( this ).addClass( "ui-state-highlight" );
		checkWin();
      }
    });
	
	//Category 2 stickiness
	$("#droppable2>.snapper" ).droppable({
	  accept: ".cat2",
      activeClass: "ui-state-default",
      hoverClass: "ui-state-hover",
      drop: function( event, ui ) {
	    //$(this).append("#droppable2");
        $( this ).addClass( "ui-state-highlight" );
		checkWin();
		
		
      }
    });
	
	//Toggle categories for word bank
	$(".catBtn").click(function(){
		
		if($(this).parent().hasClass("cat1")){
			$(this).html("2").parent().removeClass("cat1").addClass("cat2");
		}
		else{
			$(this).html("1").parent().removeClass("cat2").addClass("cat1");
		}
	});
		
	
  });
});

//find and save textareas
function saveBank(){

	//empty array
	textArray = [];
	
	$('textarea').each(function(){
		textArrayObjs.push(this);
		textArray.push(this.value);
       
    });
	
	//var elems = document.getElementsByTagName( 'textarea' );
	var catHead = textArrayObjs[0].value;
	var word1 = textArrayObjs[1].value;
	var word2 = textArrayObjs[2].value;
	var word3 = textArrayObjs[3].value;
	var word4 = textArrayObjs[4].value;
	var word5 = textArrayObjs[5].value;
	var word6 = textArrayObjs[6].value;
	var catName1 = textArrayObjs[7].value;
	var catName2 = textArrayObjs[8].value;
	//alert(word1);
	
	//alert(textArray.join("\n"));
	player.setAttributes({
		catHeadx: catHead,
		word1x: word1,
		word2x: word2,
		word3x: word3,
		word4x: word4,
		word5x: word5,
		word6x: word6,
		catName1x: catName1,
		catName2x: catName2
	 });
	
}

function loadBank(attrs){
	//alert(player.attr("word1x"));
	//alert(textArrayObjs[1].value);
	
	$('textarea').each(function(){
		textArrayObjs.push(this);
		textArray.push(this.value);
    });
	//gross assignment of saved values
	var catHead = textArrayObjs[0];
	var word1 = textArrayObjs[1];
	var word2 = textArrayObjs[2];
	var word3 = textArrayObjs[3];
	var word4 = textArrayObjs[4];
	var word5 = textArrayObjs[5];
	var word6 = textArrayObjs[6];
	var catName1 = textArrayObjs[7];
	var catName2 = textArrayObjs[8];
	
	//set the saved values
	catHead.value = attrs.catHeadx;
	word1.value =  attrs.word1x;
	word2.value =  attrs.word2x;
	word3.value =  attrs.word3x;
	word4.value =  attrs.word4x;
	word5.value =  attrs.word5x;
	word6.value =  attrs.word6x;
	catName1.value =  attrs.catName1x;
	catName2.value =  attrs.catName2x;
}

function checkWin(){
	var x = 0;
	$('.ui-state-highlight').each(function(){
		++x;
		if(x>=6){
			$("#catHeader>textarea").val("Great Job!");
		}
		
	});
	x=0;
	}
	
			


