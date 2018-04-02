	function checkOut(elem){
    	localStorage.setItem('Carrito',"[]");
    	window.location.href = 'index.html';

 	}
 
 	function delElement(elem){
		var elem=parseInt( elem.id.substring(3,elem.id.length));	
	    console.log('area element id = ' + elem);
		var retrievedObject = localStorage.getItem('Carrito');
		cart=JSON.parse(retrievedObject);
		//busca el objeto y lo borra del arreglo
		objIndex = cart.findIndex((obj => obj.ID == elem));
		cart.splice(objIndex,1);
		localStorage.setItem('Carrito', JSON.stringify(cart));
		window.location.href = 'ver-carrito.html';
	}
    function addMore(elem){
		var elem=parseInt( elem.id);	
		var retrievedObject = localStorage.getItem('Carrito');
		cart=JSON.parse(retrievedObject);
		//busca el objeto y lo borra del arreglo
		objIndex = cart.findIndex((obj => obj.ID == elem));
		cart[objIndex].Qty=cart[objIndex].Qty+1;

		localStorage.setItem('Carrito', JSON.stringify(cart));
		window.location.href = 'ver-carrito.html';


	}

$(document).ready(function() {
    
	showCart();

	function showCart(){

		var retrievedObject = localStorage.getItem('Carrito');
		console.log(retrievedObject);
		if(retrievedObject=="vacio" ||retrievedObject=="" ||retrievedObject==null||retrievedObject=="[]"){

			ht='<div class="container">'+
	    	'<div class="columns is-centered">'+
				'<div class="column">'+
					'<div class="has-text-centered">'+
					        '<p class="title is-4">EMPTY CART!</p>'+
					'</div>'+
				'</div>'+
				'</div>'+
	    	'</div>';

			$( "#cols" ).append(ht);
			var botonComprar = document.getElementById("comprar");
 			botonComprar.parentElement.removeChild(botonComprar);
			return;
		}
		else{
			carrito=JSON.parse(retrievedObject);
			console.log(carrito);
			

			 for (var i = 0; i < carrito.length; i++) {
			 	x=carrito[i].ID;
			    nm=carrito[i].Name;
			    desc=carrito[i].Desc;
			    qty=carrito[i].Qty;
			    append(x,nm,desc,qty);
	    	}
		}
		
	
	}

	function append(x,nm,desc,qty){

			var htmlI=
				'<div class="column is-3">'+
			  		'<div class="card">'+
				  		
						'<div class="card-content">'+
							'<div class="media-content">'+
							    '<p class="title is-4">'+
							    nm+
							    '</p>'+
							    '<p class="subtitle is-6">'+
							    desc+
							    '</p>'+
							    '<p class="subtitle is-6">'+
							    'Cantidad: '+ qty +
							    '</p>'+
							     '<a id="'+ x +'" class="button is-link" onclick="addMore(this)">' 
						    		+'Agregar otro' +
						    '</a>'+'<br>'+
						     '<a id="del'+ x +'" class="button is-danger" onclick="delElement(this)">' 
						    		+'Borrar' +
						    '</a>'+
							    
							'</div>'+
						'</div>'+
					'</div>'+
			  	'</div>';
			 	$( "#cols" ).append(htmlI);
	}

    

   

    $("#showModal").click(function() {
	  $(".modal").addClass("is-active");  
	});

	$(".delete").click(function() {
	   $(".modal").removeClass("is-active");
	});
	$(".salir").click(function() {
	   $(".modal").removeClass("is-active");
	});


});



