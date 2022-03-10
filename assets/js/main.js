
$(document).ready(function () {
  $("#btn").on("click", function () {
    $.ajax({
      type: "GET",
      url: "https://www.feriadosapp.com/api/holidays.json",
      dataType: "json",
      success: function (datosApi){
        
        var texto =
          "<tr><th>ID</th><th>Fecha</th><th>Título</th><th>Tipo</th><th>Ley</th><th>ID_Ley</th></tr>";
        for (var i = 0; i < datosApi.data.length; i++) {
          texto += `<tr>
                        <td>${datosApi.data[i].id}</td>
                        <td>${datosApi.data[i].date}</td>
                        <td>${datosApi.data[i].title}</td>
                        <td>${datosApi.data[i].extra}</td>
                        <td>${datosApi.data[i].law}</td>
                        <td>${datosApi.data[i].law_id}</td>
                    </tr>`;
        }
        //imprimir todos los feriados del año
        document.getElementById("cuerpo-tabla").innerHTML = texto;
        
      },
      error: function (error) {
        console.log(error);
      },
    });
  });
});