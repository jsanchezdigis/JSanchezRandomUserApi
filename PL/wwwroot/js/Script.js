$(document).ready(function () {
    GetAll();
});

function GetAll() {
    $.ajax({
        type: 'GET',
        url: 'https://randomuser.me/api',
        success: function (result) {
            $('#tblUsuario tbody').empty();
            $.each(result.results, function (i, usuario) {
                var filas =
                    '<tr>'
                    + "<td class='text-center'>" + "<img src=" + usuario.picture.medium + ">" + "</td>"
                    + "<td class='text-center'>" + usuario.name.first + " " + usuario.name.last + "</td>"
                    + "<td class='text-center'>" + usuario.email + "</ td>"
                    + "<td class='text-center'>" + usuario.location.country + " " + usuario.location.state + " " + usuario.location.city + " " + usuario.location.street.name + " " + usuario.location.street.number + "</ td>"
                    + "<td class='text-center'>" + usuario.gender + "</td>"

                    + "</tr>";
                $("#tblUsuario tbody").append(filas);
            });
        },
        error: function (result) {
            alert('Error en la consulta.' + result.responseJSON.ErrorMessage);
        }
    });
};
function Add() {
    $.ajax({
        type: 'GET',
        url: 'https://randomuser.me/api',
        success: function (result) {
            $("#tblUsuario tbody tr").add()
            $.each(result.results, function (i, usuario) {
                var filas =
                    '<tr>'
                    + "<td class='text-center'>" + "<img src=" + usuario.picture.medium + ">" + "</td>"
                    + "<td class='text-center'>" + usuario.name.first + " " + usuario.name.last + "</td>"
                    + "<td class='text-center'>" + usuario.email + "</ td>"
                    + "<td class='text-center'>" + usuario.location.country + " " + usuario.location.state + " " + usuario.location.city + " " + usuario.location.street.name + " " + usuario.location.street.number + "</ td>"
                    + "<td class='text-center'>" + usuario.gender + "</td>"

                    + "</tr>";
                $("#tblUsuario tbody").append(filas);
            });
        },
        error: function (result) {
            alert('Error en la consulta.' + result.responseJSON.ErrorMessage);
        }
    });
};