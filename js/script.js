$(document).ready(function() {

    $.ajax({
        type: 'GET',
        dataType: 'JSON',
        url: `https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`,
        success: function(dados) {
            $('#UF').val(dados.sigla)
        }
    })


})