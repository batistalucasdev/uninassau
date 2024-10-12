package src.objetos;

public class Pessoa {
	private int idPessoa;
	private String nome;
	private String endereco;
	private String telefone;
	private String cpf;
	
	//Construtor
	public Pessoa (int idPessoa, String nome, String endereco, String telefone, String cpf) {
		this.idPessoa = idPessoa;
		this.nome = nome;
		this.endereco = endereco;
		this.telefone = telefone;
		this.cpf = cpf;
	}
	
	public int getIdPessoa() { //
		return idPessoa;
	}
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getEndereco() {
		return endereco;
	}
	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	
	
}
