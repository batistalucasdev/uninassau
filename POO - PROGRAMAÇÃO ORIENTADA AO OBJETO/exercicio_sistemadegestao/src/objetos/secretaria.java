package src.objetos;

public class secretaria {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Pessoa pessoas = new Pessoa (1, "Joao", "Rua e 22", "88888888", "45322156444");
		System.out.println("PESSOA");
		System.out.println(pessoas.getIdPessoa());
		System.out.println(pessoas.getNome());
		System.out.println(pessoas.getEndereco());
		System.out.println(pessoas.getTelefone());
		System.out.println(pessoas.getCpf());
		System.out.println("");
		
		
		Curso cursos = new Curso (1,"Analise e Desenvolvimento de Sistemas");
		System.out.println("CURSO");
		System.out.println(cursos.getCodcurso());
		System.out.println(cursos.getCurso());
		System.out.println("");
		
		
		Turma turmas = new Turma (101, "B", 1200, "ADS");
		System.out.println("TURMA");
		System.out.println(turmas.getIdTurma());
		System.out.println(turmas.getTurma());
		System.out.println(turmas.getCursoHora());
		System.out.println(turmas.getCurso());
		System.out.println("");
		
		Aluno alunos = new Aluno (6, "Jurumeia", "Rua e 56", "96499723", "29734153064", "01678004","20/01/2024","Vitoria Regia", "ADS");
		System.out.println("ALUNO");
		System.out.println(alunos.getIdPessoa());
		System.out.println(alunos.getNome());
		System.out.println(alunos.getEndereco());
		System.out.println(alunos.getTelefone());
		System.out.println(alunos.getCpf());
		System.out.println(alunos.getMatricula());
		System.out.println(alunos.getDataMatricula());
		System.out.println(alunos.getResponsavel());
		System.out.println(alunos.getCurso());
		System.out.println("");
		
		Responsavel responsaveis = new Responsavel (2, "Chico", "Rua e 23", "99999999", "93397020840", 2319, 300.00);
		System.out.println("RESPONSAVEL");
		System.out.println(responsaveis.getIdPessoa());
		System.out.println(responsaveis.getNome());
		System.out.println(responsaveis.getEndereco());
		System.out.println(responsaveis.getTelefone());
		System.out.println(responsaveis.getCpf());
		System.out.println(responsaveis.getIdResponsavel());
		System.out.println(responsaveis.getRenda());
		System.out.println("");
		
		TurmaAluno turma_aluno = new TurmaAluno ("POO", 8.5);
		System.out.println("NOTA");
		System.out.println(turma_aluno.getDisciplina());
		System.out.println(turma_aluno.getNota());
		System.out.println("");
	}
	
}
