package src.objetos;

public class Turma {
	private int idTurma;
	private String turma;
	private int cursoHora;
	private String curso;
	
	//Construtor
		public Turma (int idTurma, String turma, int cursoHora, String curso) {
			this.idTurma = idTurma;
			this.turma = turma;
			this.cursoHora = cursoHora;
			this.curso = curso;
		}
	
	public int getIdTurma() {
		return idTurma;
	}
	
	public void setIdTurma(int idTurma) {
		this.idTurma = idTurma;
	}
	
	public String getTurma() {
		return turma;
	}
	
	public void setTurma(String turma) {
		this.turma = turma;
	}
	
	public int getCursoHora() {
		return cursoHora;
	}
	
	public void setCursoHora(int cursoHora) {
		this.cursoHora = cursoHora;
	}
	
	public String getCurso() {
		return curso;
	}
	
	public void setCurso(String curso) {
		this.curso = curso;
	}
}
