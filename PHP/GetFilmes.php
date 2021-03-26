<?php
include 'bd.php';

echo getResultados();

function getResultados()
{
	$pdo = Conectar();
	if($pdo == null)
	{
		echo '<br>deu ruim';
	}
	else
	{
		$pdo->exec("SET NAMES 'utf8';");
		$sql = 'SELECT S.CHAVE AS CHAVE, S.NOME AS NOME, S.INDICACAO AS INDICACAO, S.QUANTIDADEVOTOS AS QUANTIDADEVOTOS, T.DESCRICAO AS TIPO, S.INDICACAO AS INDICACAO FROM FILMES S, TIPOFILMES T WHERE S.TIPO = T.CHAVE ORDER BY S.QUANTIDADEVOTOS DESC';
		$stm = $pdo->prepare($sql);
		$stm->execute();
		$pdo = null;	
		return utf8_encode(json_encode($stm->fetchAll(PDO::FETCH_ASSOC)));
	}
}

?>