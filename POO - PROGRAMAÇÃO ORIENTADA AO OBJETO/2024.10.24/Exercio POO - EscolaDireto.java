package View;

import model.Aluno;
import model.Curso;
import model.Responsavel;
import model.Turma;
import model.TurmaAluno;

public class EscolaDireto {

	public static void main(String[] args) {
        // Criação de objetos e atribuição de valores
        Curso curso = new Curso("2024", "Sistemas de Informação");
        Responsavel responsavel = new Responsavel(1, "João Silva", "Rua A", "123456789", "123.456.789-00", 1, 5000.0);
        Aluno aluno = new Aluno(1, "Maria Silva", "Rua B", "987654321", "987.654.321-00", "2024001", "01/01/2024", responsavel, curso);
        Turma turma = new Turma(1, "Turma A", 200, curso);
        TurmaAluno turmaAluno = new TurmaAluno(turma, aluno, "Algoritmos", 9.5);

        // Exibição de dados
        System.out.println("Nome do aluno: " + turmaAluno.getAluno().getNome());
        System.out.println("Nome do curso: " + turmaAluno.getAluno().getCurso().getCurso());
        System.out.println("Nome da turma: " + turmaAluno.getTurma().getTurma());
        System.out.println("Nome da disciplina: " + turmaAluno.getDisciplina());
        System.out.println("Nota final: " + turmaAluno.getNota());

	}

}