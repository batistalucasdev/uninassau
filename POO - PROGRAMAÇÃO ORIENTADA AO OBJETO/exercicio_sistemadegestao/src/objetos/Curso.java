package src.objetos;

public class Curso {
	private int codcurso;
	private String curso;
	
	//Construtor
	public Curso (int codcurso, String curso) {
		this.codcurso = codcurso;
		this.curso = curso;
	}

	public int getCodcurso() {
		return codcurso;
	}

	public void setCodcurso(int codcurso) {
		this.codcurso = codcurso;
	}

	public String getCurso() {
		return curso;
	}

	public void setCurso(String curso) {
		this.curso = curso;
	}

}
