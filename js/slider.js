$(function(){
    var slides = $(".slide-img")
    var circles = [$("#circle-1"), $("#circle-2"), $("#circle-3")]

    slides.hide()

    var idx = 0
    var min = 0
    var max = slides.length - 1

    slides.eq(idx).show()
    circles[idx].addClass("circle-active")

    $('#slide-left').click(()=>{
        slides.eq(idx).hide()
        circles[idx].removeClass("circle-active")

        idx = (idx == 0) ? max : idx - 1;
        slides.eq(idx).fadeIn(500)
        circles[idx].addClass("circle-active")
    })

    $('#slide-right').click(()=>{
        slides.eq(idx).hide()
        circles[idx].removeClass("circle-active")

        idx = (idx == max) ? min : idx + 1;
        slides.eq(idx).fadeIn(500)
        circles[idx].addClass("circle-active")
    })

    $('#circle-1').click(()=>{
        slides.eq(idx).hide()
        circles[idx].removeClass("circle-active")

        idx = 0;
        slides.eq(idx).fadeIn(500)
        circles[idx].addClass("circle-active")
    })

    $('#circle-2').click(()=>{
        slides.eq(idx).hide()
        circles[idx].removeClass("circle-active")

        idx = 1;
        slides.eq(idx).fadeIn(500)
        circles[idx].addClass("circle-active")
    })

    $('#circle-3').click(()=>{
        slides.eq(idx).hide()
        circles[idx].removeClass("circle-active")

        idx = 2;
        slides.eq(idx).fadeIn(500)
        circles[idx].addClass("circle-active")
    })
})