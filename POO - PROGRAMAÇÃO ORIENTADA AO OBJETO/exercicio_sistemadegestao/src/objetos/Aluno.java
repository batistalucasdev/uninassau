package src.objetos;

public class Aluno extends Pessoa {
	private String matricula;
	private String dataMatricula;
	//private Responsavel responsavel;
	private String responsavel;
	//private Curso curso;
	private String curso;
	
	//Construtor
	public Aluno (int idPessoa, String nome, String endereco, String telefone, String cpf, String matricula, String dataMatricula, String responsavel, String curso) {
		super (idPessoa, nome, endereco, telefone, cpf);
		this.matricula = matricula;
		this.dataMatricula = dataMatricula;
		this.responsavel = responsavel;
		this.curso = curso;
	}
	
	public String getMatricula() {
		return matricula;
	}
	
	public void setMatricula(String matricula) {
		this.matricula = matricula;
	}
	
	public String getDataMatricula() {
		return dataMatricula;
	}
	
	public void setDataMatricula(String dataMatricula) {
		this.dataMatricula = dataMatricula;
	}
	
	public String getResponsavel() {
		return responsavel;
	}
	
	public void setResponsavel(String responsavel) {
		this.responsavel = responsavel;
	}
	
	public String getCurso() {
		return curso;
	}
	
	public void setCurso(String curso) {
		this.curso = curso;
	}
	
}
