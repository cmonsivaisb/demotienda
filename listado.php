<?php
	class Producto{ 
	    public $ID = ''; 
	    public $Name = '';
	    public $Description=''; 
	} 

	$products=array();

	for ($i = 0; $i < 10; $i++) {
		$p = new Producto(); 
		$p->ID=($i+1);
		$p->Name="Product  ".($i);
		$p->Description="Description OF  ".($i);
		array_push($products,$p);
	}

	echo json_encode($products);
	

?>