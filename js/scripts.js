$(function() {
    $("#home").on('click', function() {
        alert("This is home demo!")
    });
});
$(function() {
    $("#products").on('click', function() {
        alert("This is products demo!")
    });
});
$(function() {
    $("#shop").on('click', function() {
        alert("Your shopping here!")
    });
});
$(function() {
    $("#allp").click(function() {
        $(".check-all").prop('checked', true);

        $(".imgy div").show();
        $(".images div").show();
        $("#child").show();
    });
});

$(document).ready(function() {
    $("#men").click(function() {
        if ($("#men").is(":checked"))
            $(".imgy div").show();
        else $(".imgy div").hide();
    });
});

$(document).ready(function() {
    $("#women").click(function() {
        if ($("#women").is(":checked"))
            $(".images div").show();
        else $(".images div").hide();
    });
});
$(document).ready(function() {
    $("#children").click(function() {
        if ($("#children").is(":checked"))
            $("#child").show();
        else $("#child").hide();
    });
});
$(function() {
    $("#men,#women").prop('checked', true)
    $(".imgy div").show();
    $(".images div").show();
});

$(document).ready(function(){

    //hamburger Toggle
    $('.humbarger').click(function(event){
    $('.menu-list').slideToggle(500);
    event.preventDefault();
    
    $('.menu-list li a').click(function(event) {
        if ($(window).width() < 768) {
          $('.menu-list').slideUp(500);
          event.preventDefault(); 
        }
      });
});

});