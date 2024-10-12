package src.objetos;

public class TurmaAluno {
	private String disciplina;
	private double nota;
	
	//Construtor
	public TurmaAluno (String disciplina, double nota) {
		this.disciplina = disciplina;
		this.nota = nota;
	} 
	
	public String getDisciplina() {
		return disciplina;
	}
	
	public void setDisciplina(String disciplina) {
		this.disciplina = disciplina;
	}
	
	public double getNota() {
		return nota;
	}
	
	public void setNota(double nota) {
		this.nota = nota;
	}	
	
}
