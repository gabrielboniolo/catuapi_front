const API_URL = "http://localhost:5000/catuapi/cafes";

const form = document.getElementById("form");
const btn = document.getElementById("btn");
const tbody = document.getElementById("tbody");
const tableContainer = document.getElementById("table_container");

let editMode = false;
let editId = null;

window.addEventListener("DOMContentLoaded", getCafes);

btn.addEventListener("click", async (event) => {
    event.preventDefault();
    if (editMode) {
        await updateCafe(editId);
    } else {
        await setCafe();
    }
});

// -------------------- CREATE --------------------
async function setCafe() {
    const cafe = getFormData();

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cafe)
        });

        if (!response.ok) {
            throw new Error("Erro ao salvar café");
        }

        await getCafes();
        form.reset();

    } catch (error) {
        console.error("Ocorreu um erro:", error);
        alert("Erro ao cadastrar café!");
    }
}

// -------------------- READ --------------------
async function getCafes() {
    try {
        const res = await fetch(API_URL);
        if (!res.ok) {
            throw new Error("Erro ao buscar cafés");
        }

        const cafes = await res.json();
        tbody.innerHTML = ""; // limpa tabela

        cafes.forEach(cafe => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${cafe.nome}</td>
                <td>${cafe.produtor}</td>
                <td>${cafe.variedade}</td>
                <td>${cafe.processo}</td>
                <td>${cafe.sensorial_docura}</td>
                <td>${cafe.sensorial_acidez}</td>
                <td>${cafe.sensorial_corpo}</td>
                <td>${cafe.sensorial_amargor}</td>
                <td><i class="fa-solid fa-pen edit-btn" data-id="${cafe.id}"></i></td>
                <td><i class="fa-solid fa-trash delete-btn" data-id="${cafe.id}"></i></td>
            `;
            tbody.appendChild(row);
        });
        
        document.querySelectorAll(".edit-btn").forEach(btn => {
            btn.addEventListener("click", () => startEdit(btn.dataset.id));
        });

        document.querySelectorAll(".delete-btn").forEach(btn => {
            btn.addEventListener("click", () => deleteCafe(btn.dataset.id));
        });

        tableContainer.style.display = cafes.length > 0 ? "flex" : "none";

    } catch (error) {
        console.error("Erro ao buscar cafés:", error);
    }
}

// -------------------- UPDATE --------------------
function startEdit(id) {

    const row = document.querySelector(`.edit-btn[data-id="${id}"]`).closest("tr");
    const cells = row.querySelectorAll("td");

    document.getElementById("nome").value = cells[0].innerText;
    document.getElementById("produtor").value = cells[1].innerText;
    document.getElementById("variedade").value = cells[2].innerText;
    document.getElementById("processo").value = cells[3].innerText;

    setRadioValue("docura", cells[4].innerText);
    setRadioValue("acidez", cells[5].innerText);
    setRadioValue("corpo", cells[6].innerText);
    setRadioValue("amargor", cells[7].innerText);

    editMode = true;
    editId = id;
    btn.textContent = "Atualizar Café";
}

async function updateCafe(id) {
    const cafe = getFormData();

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cafe)
        });

        if (!response.ok) {
            throw new Error("Erro ao atualizar café");
        }

        await getCafes();
        form.reset();

        editMode = false;
        editId = null;
        btn.textContent = "Cadastre";

    } catch (error) {
        console.error("Erro ao atualizar:", error);
        alert("Erro ao atualizar café!");
    }
}

// -------------------- DELETE --------------------
async function deleteCafe(id) {
    if (!confirm("Tem certeza que deseja deletar este café?")) return;

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Erro ao deletar café");
        }

        await getCafes();

    } catch (error) {
        console.error("Erro ao deletar:", error);
        alert("Erro ao deletar café!");
    }
}

// -------------------- HELPERS --------------------
function getFormData() {
    return {
        nome: document.getElementById("nome").value,
        produtor: document.getElementById("produtor").value,
        variedade: document.getElementById("variedade").value,
        processo: document.getElementById("processo").value,
        sensorial_docura: document.querySelector('input[name="docura"]:checked')?.value || null,
        sensorial_acidez: document.querySelector('input[name="acidez"]:checked')?.value || null,
        sensorial_corpo: document.querySelector('input[name="corpo"]:checked')?.value || null,
        sensorial_amargor: document.querySelector('input[name="amargor"]:checked')?.value || null
    };
}

function setRadioValue(name, value) {
    const radio = document.querySelector(`input[name="${name}"][value="${value}"]`);
    if (radio) radio.checked = true;
}
