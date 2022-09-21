$(document).ready(function(e) {

    $.ajax({
        type: 'GET',
        url: `https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`,
        dataType: 'JSON',
        success: function(dados) {
            $.each(dados, function (indexInArray, valueOfElement){
                var opicao = "<option>" + valueOfElement.sigla + "</option>";
                $('#UF').append(opicao);
            })
        }
    })

    $('#TCIDADE').hide()

    $('#UF').on('change', function(e){
        $('#TCIDADE').show()

        if ($('#UF').click){
            $('#CIDADE').empty()
        }

    var uf = $('#UF').val();
    $.ajax({
        type: 'GET',
        url: `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios?orderBy=nome`,
        dataType: 'JSON',
        success: function(dados) {
            $.each(dados, function (indexInArray, valueOfElement){
        var opicao = "<option>" + valueOfElement.nome + "</option>";
        $('#CIDADE').append(opicao);
    })
    }
})
})
})