$(".menu").click(function () {
    $(this).next(".items").slideToggle();
});




let selection = ("article0.txt")

$("article").val(selection);
$("article").load(selection);


$('input[type=radio][name=article]').change(function () {
            selection = $(this).val();
            $("article").load(selection);

});



let clicks = 0;
            $("#clickme").click(function () {
                clicks++;
                $("#count").html(clicks);
            })
