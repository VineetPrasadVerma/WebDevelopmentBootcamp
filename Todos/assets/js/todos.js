$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});
 
 
//to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
            $(this).remove();
    });
    event.stopPropagation();
});
 
//to add todo
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
    $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + $(this).val() + "</li>");
    $(this).val("");
    }
});
 
$("h1 i").click(function(){
    $("input[type='text']").fadeToggle();
}); 