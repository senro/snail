require('jquery');
var menu=function(){
    menu.click=function(index,callback){
        $('.menu').eq(index).bind('click',callback);
    }
};

menu();

menu.click(1,function(){
    alert('click 1');
});
