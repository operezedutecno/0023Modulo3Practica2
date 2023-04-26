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

    $(document).on("input", "#fecha-origen", function() {
        var fechaOrigen = $("#fecha-origen").val()
        $("#resultado-fecha-origen").text(fechaOrigen)
        mostrarEscalas()
    })

    $(document).on("input", "#fecha-destino", function() {
        var fechaDestino = $("#fecha-destino").val()
        $("#resultado-fecha-destino").text(fechaDestino)
        mostrarEscalas()
    })

    function mostrarEscalas() {
        var origen = $("#origen").val()
        var destino = $("#destino").val()
        var fechaOrigen = $("#fecha-origen").val()
        var fechaDestino = $("#fecha-destino").val()

        var mostrarItinerario = origen !== "" && destino !== "" && fechaOrigen !== "" && fechaDestino !== ""

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