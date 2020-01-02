$('.list-group-item').click(function(){ 
    // add active class at list-item by click
    $(this).parent().find('.list-group-item').removeClass('active');
    $(this).addClass('active');
    
    // make add(>) button disabled untill selecting one
    var source = $(this).parents('.pick-list').find('.source').children('.active');
    if(source.length > 0) {
        $(this).attr('disabled',false);
    } else {
        $(this).attr('disabled',true);
    };
    
    // make remove(<) button disabled untill selecting one
    var des = $(this).parents('.pick-list').find('.destination').children('.active');
    if(des.length > 0) {
        $(this).attr('disabled',false);
    } else {
        $(this).attr('disabled',true);
    };
});

$('.add').click(function(){
    var item = $(this).parents('.pick-list').find('.source').children('.active');
    // Move item from source to destination when one item is active/selected
    if(item.length > 0) {

    }
});

$('.remove').click(function(){
    var item = $(this).parents('.pick-list').find('.destination').children('.active');
    // Move item from destination to source when one item is active/selected
    if(item.length > 0) {

    }
});