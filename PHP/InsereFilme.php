<?php
include 'bd.php';

$nome = $tempo = $numeroAcertos = '';
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

echo setResultado($request->nome, 
				$request->tipo,
				$request->indicacao,
				$request->quantidadeVotos);

function setResultado($nome, $tipo, $indicacao, $quantidadeVotos)
{
	$pdo = Conectar();
	$result = 'True';

	if($pdo == null || $nome == '-')
	{
		$r['conectou'] = 'False';
		$result = 'False';
	}
	else
	{
		$sql = 'INSERT INTO FILMES (NOME, TIPO, INDICACAO, QUANTIDADEVOTOS) 
			    VALUES (?, ?, ?, ?)';
		$stm = $pdo->prepare($sql);
		$stm->bindValue(1, $nome);
		$stm->bindValue(2, (int)$tipo);
		$stm->bindValue(3, $indicacao);
		$stm->bindValue(4, (int)$quantidadeVotos);
		
		if($stm->execute() == false)
		{
			$result = 'False';
		}

		$pdo = null;	
	}
	
	$r['Result'] = $result;	
	$r['filme'] = $nome;	
	$r['tipo'] = $tipo;	
	$r['indicacao'] = $indicacao;	
	$r['quantidadeVotos'] = $quantidadeVotos;	
	return json_encode($r);
}

?>