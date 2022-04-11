$(document).ready(function () {
    let count = 1

    $('.rightAngle').on("click", function(){
        if (count < 3){
            $(".slides").animate({
                marginLeft: "-=100%",
            }),
            count++
        }
    }),

    $('.leftAngle').on("click", function(){
        if (count > 1) {
            $(".slides").animate({
                marginLeft: "+=100%",
            }),
            count--
        }
    })
})

$(document).ready(function () {
    let count = 1

    $('#rightAngle1').on("click", function(){
        if (count < 3){
            $("#firstImage").animate({
                marginLeft: "-=100%",
            }),
            count++
        }
    }),

    $('#leftAngle1').on("click", function(){
        if (count > 1) {
            $("#firstImage").animate({
                marginLeft: "+=100%",
            }),
            count--
        }
    })
})