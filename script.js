// JavaScript para manipular os dados e interatividade
const form = document.getElementById('cadastro-form');
const alunosList = document.getElementById('alunos-list');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtenha os valores do formulário
    const nome = document.getElementById('nome').value;
    const periodo = document.getElementById('periodo').value;
    const matricula = document.getElementById('matricula').value;
    const email = document.getElementById('email').value;

    // Crie um objeto para representar o aluno
    const aluno = {
        nome,
        periodo,
        matricula,
        email
    };

    // Adicione o aluno ao array de alunos (simulando um banco de dados)
    // Você pode usar uma classe para gerenciar isso
    // Exemplo: const alunoManager = new AlunoManager();
    // alunoManager.adicionarAluno(aluno);
    alunos.push(aluno);

    // Limpe o formulário
    form.reset();

    // Atualize a lista de alunos
    atualizarListaAlunos();
});

function atualizarListaAlunos() {
    // Limpe a lista de alunos
    alunosList.innerHTML = '';

    // Percorra o array de alunos e crie elementos da lista
    for (const aluno of alunos) {
        const listItem = document.createElement('li');
        listItem.textContent = `Nome: ${aluno.nome}, Período: ${aluno.periodo}, Matrícula: ${aluno.matricula}, Email: ${aluno.email}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.addEventListener('click', () => {
            // Remova o aluno do array (simulando exclusão)
            // Exemplo: alunoManager.excluirAluno(aluno);
            const index = alunos.indexOf(aluno);
            if (index !== -1) {
                alunos.splice(index, 1);
                atualizarListaAlunos();
            }
        });

        listItem.appendChild(deleteButton);
        alunosList.appendChild(listItem);
    }
}

// Array para armazenar os alunos (simulação de banco de dados)
const alunos = [];

// Inicialize a lista de alunos ao carregar a página
atualizarListaAlunos();
