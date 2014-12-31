require('register');
require('jquery');

var reg=function(){
    register('#form');
    reg.hide=function(){
        $('.reg').hide();
    };
};
reg();