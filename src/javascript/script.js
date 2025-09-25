const API_URL = "http://localhost:5000/catuapi/cafes";

const form = document.getElementById("form")
const btn = document.getElementById("btn")
const tbody = document.getElementById("tbody")

//getCafes()

btn.addEventListener("click", setCafe)

async function setCafe(){

    let nome = document.getElementById("nome").value
    let produtor = document.getElementById("produtor").value
    let variedade = document.getElementById("variedade").value
    let processo = document.getElementById("processo").value
    let sensorial_docura = document.querySelector('input[name="docura"]:checked')?.value || null;
    let sensorial_acidez = document.querySelector('input[name="acidez"]:checked')?.value || null;
    let sensorial_corpo = document.querySelector('input[name="corpo"]:checked')?.value || null;
    let sensorial_amargor = document.querySelector('input[name="amargor"]:checked')?.value || null;

    cafe = {
        nome,
        produtor,
        variedade,
        processo,
        sensorial_docura,
        sensorial_acidez,
        sensorial_corpo,
        sensorial_amargor
    }

    try{
        const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cafes)
      });

        if (!response.ok) {
            throw new Error("Erro ao salvar café");
        }

        addCafe(cafe)

    } catch(error){
        console.error("Ocorreu um erro:", error)
    }

    form.reset()
}

function addCafe(cafe){
    
    const row = document.createElement("tr")

    row.innerHTML = `
        <td>${cafe.nome}</td>
        <td>${cafe.produtor}</td>
        <td>${cafe.variedade}</td>
        <td>${cafe.processo}</td>
        <td>${cafe.sensorial_docura}</td>
        <td>${cafe.sensorial_acidez}</td>
        <td>${cafe.sensorial_corpo}</td>
        <td>${cafe.sensorial_amargor}</td>
    `
    tbody.appendChild(row)

}

// function getCafes(){

//     const res = await fetch(API_URL);
//     const data = await res.json();
//     const list = document.getElementById("cafes-list");
    
//     const row = document.createElement("tr")

//     cafes.forEach(cafe => {

//         row.innerHTML = `
//             <td>${cafe.nome}</td>
//             <td>${cafe.produtor}</td>
//             <td>${cafe.sensorial}</td>
//         `
//         tbody.appendChild(row)
//     });

    
// }