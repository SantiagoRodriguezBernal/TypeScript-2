import { series } from "./data.js";
import { Serie } from "./Serie.js";

const coursesTbody: HTMLElement = document.getElementById('courses')!;
const getdab: HTMLElement = document.getElementById('dab')!;
const card = document.getElementById("card")!;

function meterSeries(dab: Serie[]): void {
    dab.forEach(c => {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `<td>${c.id}</td>
                             <td><a onclick="main.ts" target="_blank">${c.nombre}</td>
                             <td>${c.productora}</td>
                             <td>${c.temporadas}</td>
                             `;

        trElement.addEventListener("click", () => {
            let cardElement: HTMLElement = document.createElement("tr")
            clearCard()
            cardElement.innerHTML = `<img class="card-img-top" src="${c.imagen}" alt="Card image cap">
                                    <div class="card-body">
                                        <h5 class="card-title">${c.nombre}</h5>
                                        <p class="card-text">${c.resumen}</p>
                                        <a href="${c.informacion}" class="btn btn-primary">Click Me</a>
                                    </div>`
            card.appendChild(cardElement)                        
            console.log(c.nombre)
        });
        coursesTbody.appendChild(trElement);
    });
}

function promTemporadas(dab: Serie[]): void {
    let xd = 0
    let count = 0
    dab.forEach(xyalpha => {
        count += 1
        xd += xyalpha.temporadas
    })
    let resultado: number = xd / count
    getdab.innerHTML = resultado.toString();
    console.log(resultado)
}

function clearCard():void{
    card.innerHTML = ""
}

meterSeries(series)
promTemporadas(series)