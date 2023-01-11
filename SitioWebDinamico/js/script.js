$(document).ready(function () {

    /* Este funcion lo que hace es que cuando damos click en una seccion del menu
    como trabojo o servicio nos lleva a dicha seccion en la pagina de una forma 
    suave y comoda*/
    $("#menu a").click(function () { 
        
        var seccion = $(this).attr("href");
        $("body, html").animate({
            scrollTop: $(seccion).offset().top-130
        }, 800);
    
        return false;
    });
    
    $(window).scroll(function () { 
        //arreglo de las secciones de nuestra pagina
        var secciones = [$("#inicio").offset().top,
                         $("#servicios").offset().top,
                         $("#trabajo").offset().top,
                         $("#faq").offset().top,
                         $("#contacto").offset().top,
                         $("body").height()];

        /*Este codigo lo que hace es que al bajar por la pogina el logo del menu lo cambioa
        por otro  */
        if ($(this).scrollTop() > secciones[0]-140 && $(this).scrollTop() < secciones[1]-140) {
            $("#menu a").eq(2).removeClass("logo2"); //eq(2) se refiere a la posicion 2 que seria el logo en la posicion del menu
        } else {
            $("#menu a").eq(2).addClass("logo2");
        }

        /*Este codigo lo que hace es que cuando bajamos a alguna seccion como servicios, trabajo,
        en el menu la seccion donde estemos por ejemplo trabajo, la seccion trabajo del menu re arriba
        se le agrega la clase seleccionado*/
        if ($(this).scrollTop() > secciones[1]-140 && $(this).scrollTop() < secciones[2]-140) {
            $("#menu a").eq(0).addClass("seleccionado"); //eq(0) = servicios del menu
        } else {
            $("#menu a").eq(0).removeClass("seleccionado");
        }

        if ($(this).scrollTop() > secciones[2]-140 && $(this).scrollTop() < secciones[3]-140) {
            $("#menu a").eq(1).addClass("seleccionado"); //eq(1) = trabajo del menu
        } else {
            $("#menu a").eq(1).removeClass("seleccionado");
        }

        if ($(this).scrollTop() > secciones[3]-140 && $(this).scrollTop() < secciones[4]-140) {
            $("#menu a").eq(3).addClass("seleccionado"); //eq(3) = faq del menu
        } else {
            $("#menu a").eq(3).removeClass("seleccionado");
        }

        if ($(this).scrollTop() > secciones[4]-140 && $(this).scrollTop() < secciones[5]-140) {
            $("#menu a").eq(4).addClass("seleccionado"); //eq(3) = faq del menu
        } else {
            $("#menu a").eq(4).removeClass("seleccionado");
        }
    });
});