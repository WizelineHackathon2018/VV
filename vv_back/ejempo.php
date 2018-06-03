<?php
	include "conexion.php";
	
	$datos =array();
	$i =0;
	$consulta = "SELECT imagen FROM  imagenes";
	$result = mysqli_query($conn, $consulta);
	while($row = mysqli_fetch_assoc($result))  
	{
		   
		   $datos[$i] = $row;
		   $i++;
	}
	mysqli_close($conn);
	echo json_encode($datos);
	

	


?>
