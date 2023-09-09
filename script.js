const form = document.getElementById('cadastro-form');
const alunosList = document.getElementById('alunos-list');
let alunoEmEdicao = null; 

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const periodo = document.getElementById('periodo').value;
    const matricula = document.getElementById('matricula').value;
    const email = document.getElementById('email').value;

    if (alunoEmEdicao === null) {
       
        const aluno = {
            nome,
            periodo,
            matricula,
            email
        };

        alunos.push(aluno);
    } else {
      
        alunoEmEdicao.nome = nome;
        alunoEmEdicao.periodo = periodo;
        alunoEmEdicao.matricula = matricula;
        alunoEmEdicao.email = email;

       
        alunoEmEdicao = null;
    }

    form.reset();
    atualizarListaAlunos();
});

function atualizarListaAlunos() {
    alunosList.innerHTML = '';

    for (const aluno of alunos) {
        const listItem = document.createElement('li');
        listItem.textContent = `Nome: ${aluno.nome}, Período: ${aluno.periodo}, Matrícula: ${aluno.matricula}, Email: ${aluno.email}`;

        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.addEventListener('click', () => {
           
            document.getElementById('nome').value = aluno.nome;
            document.getElementById('periodo').value = aluno.periodo;
            document.getElementById('matricula').value = aluno.matricula;
            document.getElementById('email').value = aluno.email;

            alunoEmEdicao = aluno;
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.addEventListener('click', () => {
            const index = alunos.indexOf(aluno);
            if (index !== -1) {
                alunos.splice(index, 1);
                atualizarListaAlunos();
            }
        });

        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        alunosList.appendChild(listItem);
    }
}

const alunos = [];
atualizarListaAlunos();
