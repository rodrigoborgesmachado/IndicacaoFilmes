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
		$sql = 'SELECT T.CHAVE AS CHAVE, T.DESCRICAO as DESCRICAO  FROM TIPOFILMES T';
		$stm = $pdo->prepare($sql);
		$stm->execute();
		$pdo = null;	
		return utf8_encode(json_encode($stm->fetchAll(PDO::FETCH_ASSOC)));
	}
}

?>