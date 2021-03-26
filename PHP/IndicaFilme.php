<?php
include 'bd.php';

$nome = $tempo = $numeroAcertos = '';
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

echo setResultado($request->chave);
				
function setResultado($chave)
{
	$pdo = Conectar();
	$result = 'True';

	if($pdo == null || $nome == '-')
	{
		$result = 'False';
	}
	else
	{
		$sql = 'UPDATE FILMES SET QUANTIDADEVOTOS = QUANTIDADEVOTOS+1 WHERE  CHAVE = ? ';
		$stm = $pdo->prepare($sql);
		$stm->bindValue(1, $chave);
		
		if($stm->execute() == false)
		{
			$result = 'False';
		}

		$pdo = null;	
	}
	
	$r['Result'] = $result;	
	return json_encode($r);
}

?>