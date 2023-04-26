$(document).ready(function() {

    $(document).on("change","#origen", function(){
        mostrarEscalas()
        var origen = $('option:selected', "#origen").text()
        $("#resultado-origen").html(origen)
    })

    $(document).on("change","#destino", function(){
        mostrarEscalas()
        var destino = $('option:selected', "#destino").text()
        $("#resultado-destino").html(destino)
    })

    function mostrarEscalas() {
        var origen = $("#origen").val()
        var destino = $("#destino").val()

        var mostrarItinerario = origen !== "" && destino !== ""

        if(mostrarItinerario){
            $("#contenedor-itinerario").removeClass("d-none")
        } else {
            $("#contenedor-itinerario").addClass("d-none")
        }
        

        var siTieneEscala = (origen === "chicago" && destino === "venecia") || 
                            (origen === "boston" && destino === "paris")

        var mensajeEscala = siTieneEscala ? "¡Ojo! Tu vuelo tiene una escala" : "Tu vuelo no tiene escala"
        $("#resultado-escala").html(mensajeEscala)

    }
})