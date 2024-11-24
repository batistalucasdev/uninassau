<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <!-- Meta tags Obrigatórias -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">

    <title>Cadastro</title>
  </head>
  <body>
    
    <div class="container">
        <div class="row">
           <?php
           include "conexao.php";

           if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            $nome = $_POST['nome'];

            if (!empty($nome)) {

                $sql_select = "SELECT * FROM Pessoa WHERE nome = ?";
                $stmt = $conn->prepare($sql_select);
                $stmt->bind_param("s", $nome); 
                $stmt->execute();
                $result = $stmt->get_result();

                if ($result->num_rows > 0) {

                    $sql_delete = "DELETE FROM Pessoa WHERE nome = ?";
                    $stmt_delete = $conn->prepare($sql_delete);
                    $stmt_delete->bind_param("s", $nome);
                    $stmt_delete->execute();

                    if ($stmt_delete->affected_rows > 0) {
                        echo "Usuário <strong>$nome</strong> foi deletado com sucesso!";
                    } else {
                        echo "Erro ao deletar o usuário $nome";
                    }
                } else {
                    echo "Usuário <strong>$nome</strong> não encontrado.";
                }
            } else {
                echo "Por favor, preencha o campo nome.";
            }
            }
           ?>
        </div>
    </div>

    <!-- JavaScript (Opcional) -->
    <!-- jQuery primeiro, depois Popper.js, depois Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  </body>
</html>