import { series } from "./data.js";
var coursesTbody = document.getElementById('courses');
var getdab = document.getElementById('dab');
var card = document.getElementById("card");
function meterSeries(dab) {
    dab.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                             <td><a onclick=\"main.ts\" target=\"_blank\">").concat(c.nombre, "</td>\n                             <td>").concat(c.productora, "</td>\n                             <td>").concat(c.temporadas, "</td>\n                             ");
        trElement.addEventListener("click", function () {
            var cardElement = document.createElement("tr");
            clearCard();
            cardElement.innerHTML = "<img class=\"card-img-top\" src=\"".concat(c.imagen, "\" alt=\"Card image cap\">\n                                    <div class=\"card-body\">\n                                        <h5 class=\"card-title\">").concat(c.nombre, "</h5>\n                                        <p class=\"card-text\">").concat(c.resumen, "</p>\n                                    </div>\n                                    <a href=\"").concat(c.informacion, "\" class=\"btn btn-primary\">Click Me</a>");
            card.appendChild(cardElement);
            console.log(c.nombre);
        });
        coursesTbody.appendChild(trElement);
    });
}
function promTemporadas(dab) {
    var xd = 0;
    var count = 0;
    dab.forEach(function (xyalpha) {
        count += 1;
        xd += xyalpha.temporadas;
    });
    var resultado = xd / count;
    getdab.innerHTML = resultado.toString();
    console.log(resultado);
}
function clearCard() {
    card.innerHTML = "";
}
meterSeries(series);
promTemporadas(series);
