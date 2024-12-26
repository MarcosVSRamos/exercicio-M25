const alunos = [];

alunos.push ({
    nome: 'Marcos',
    nota: 8.5
});
alunos.push ({
    nome: 'Amanda',
    nota: 5
});
alunos.push ({
    nome: 'Rodolfo',
    nota: 10
});
alunos.push ({
    nome: 'Junior',
    nota: 7
});
alunos.push ({
    nome: 'Claudio',
    nota: 4.5
});
alunos.push ({
    nome: 'Juliana',
    nota: 6
});

function estaAprovados(aluno) {
    return aluno.nota > 5;
    }

    const alunosAprovados = alunos.filter(estaAprovados);

    alunosAprovados.forEach((aluno) => {
        console.log(aluno.nome);
    });