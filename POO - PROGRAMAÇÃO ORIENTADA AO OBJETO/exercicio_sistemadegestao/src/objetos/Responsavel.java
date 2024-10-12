package src.objetos;

public class Responsavel extends Pessoa {
	private int idResponsavel;
	private double renda;
	
	public Responsavel (int idPessoa, String nome, String endereco, String telefone, String cpf, int idResponsavel, double renda) {
		super (idPessoa, nome, endereco, telefone, cpf);
		this.idResponsavel = idResponsavel;
		this.renda = renda;
	}
	
	public int getIdResponsavel() {
		return idResponsavel;
	}
	public void setIdResponsavel(int idResponsavel) {
		this.idResponsavel = idResponsavel;
	}
	public double getRenda() {
		return renda;
	}
	public void setRenda(double renda) {
		this.renda = renda;
	}
	
}
