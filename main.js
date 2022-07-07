$(document).ready(function () {
    $("#image1").show();
    $("#hide1").attr('disable', true);
    $("#hide1").click(function () {
        $("#image1").hide();
        $("#hide1").attr('disabled', true);
        $("#show1").attr('disabled', false);

    });
    $("#show1").click(function () {
        $("#image1").show();
        $("#hide1").attr('disabled', false);
        $("#show1").attr('disabled', true);
    });
});

$(document).ready(function () {
    $("#image2").show();
    $("#hide2").attr('disable', true);
    $("#hide2").click(function () {
        $("#image2").hide();
        $("#hide2").attr('disabled', true);
        $("#show2").attr('disabled', false);

    });
    $("#show2").click(function () {
        $("#image2").show();
        $("#hide2").attr('disabled', false);
        $("#show2").attr('disabled', true);
    });
});

$(document).ready(function () {
    $("#image3").show();
    $("#hide3").attr('disable', true);
    $("#hide3").click(function () {
        $("#image3").hide();
        $("#hide3").attr('disabled', true);
        $("#show3").attr('disabled', false);

    });
    $("#show3").click(function () {
        $("#image3").show();
        $("#hide3").attr('disabled', false);
        $("#show3").attr('disabled', true);
    });
});

