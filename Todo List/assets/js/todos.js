$("ul").on("click", "li", function(){
	$(this).toggleClass("selected");
});

$("ul").on("click", "span", function(event) { 
	$(this).parent().fadeOut(500, function(){		// $(this) refers to the span
		$(this).remove();			// $(this) refers to the parent li because fadeOut is called for the parent li.
	});	
	event.stopPropagation();	// this jQuery method will stop the event from bubbling up
});

$("input[type='text']").keypress(function(event){
	// check if enter key is pressed
	if(event.which===13)
	{
		// grabbing new todo text from input
		var todoText = $(this).val();
		// clear the input
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span>X</span> " + todoText + "</li>");
	}
});

$("#toggleBtn").click(function(){
	$("input[type='text']").fadeToggle();
	$(this).toggleClass("fa-plus");
	$(this).toggleClass("fa-minus");
});