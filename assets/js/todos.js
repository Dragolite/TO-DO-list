//Check off specific Todos By clicking
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

//Click on x to delete todo
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
    event.stopPropagation();
});

//click plus to show new list input
$(".fa-plus").on("click",function(){
    $("input[type='text']").fadeToggle();
}
)

//add new li when input is given
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        if($(this).val().replace(/\s/g,"") !=""){
            //grabbing new todo from input
            let todoList=$(this).val();
            $(this).val("");
            //create a new li and add it to ul
            $('ul').append("<li><span><i class='fas fa-trash'></i></span>"+todoList+"</li>")
        }
    }
})