const API_URL = "http://localhost:5000/catuapi/cafes";

const form = document.getElementById("form")
const btn = document.getElementById("btn")
const tbody = document.getElementById("tbody")

btn.addEventListener("click", setCafe)

async function setCafe(event){

    event.preventDefault()

    let nome = document.getElementById("nome").value
    let produtor = document.getElementById("produtor").value
    let variedade = document.getElementById("variedade").value
    let processo = document.getElementById("processo").value
    let sensorial_docura = document.querySelector('input[name="docura"]:checked')?.value || null;
    let sensorial_acidez = document.querySelector('input[name="acidez"]:checked')?.value || null;
    let sensorial_corpo = document.querySelector('input[name="corpo"]:checked')?.value || null;
    let sensorial_amargor = document.querySelector('input[name="amargor"]:checked')?.value || null;

    cafes = {
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

        //getCafe(cafes)

    } catch(error){
        console.error("Ocorreu um erro:", error)
    }

    form.reset()
}

// function getCafe(cafes){
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