var json;
if(localStorage.getItem("Carrito")==null ||localStorage.getItem("Carrito")===undefined || localStorage.getItem("Carrito")==="vacio"){
	localStorage.setItem("Carrito", "vacio");
}

function storeProduct(ele){
		var elem=parseInt(ele.id);
		
    	console.log('area element id = ' + elem);
    	nm = json[elem].Name;
		desc= json[elem].Description;
    	localStorage.setItem("Name", nm);
		localStorage.setItem("Description", desc);
}

function addtoCart(elem){

    console.log(elem.id.substring(3,elem.id.length));

	var elem=parseInt( elem.id.substring(3,elem.id.length));	
    console.log('area element id = ' + elem);

    id=elem;

	nm=json[id].Name;
	desc=json[id].Description;

	var retrievedObject = localStorage.getItem('Carrito');
	console.log(retrievedObject);
	if(retrievedObject==="vacio" || retrievedObject===""){
		cart=[];
		cart.push({"ID":id, "Name":nm, "Desc": desc,"Qty":1});
		localStorage.setItem('Carrito', JSON.stringify(cart) );

		return;
	}else{

		cart= JSON.parse(retrievedObject);
		console.log(cart);	cart= JSON.parse(retrievedObject);
		console.log(cart);

		var artNew = _.find(cart, {ID:id});

		if((artNew==undefined)){
			console.log(cart);
			cart.push({"ID":id, "Name":nm, "Desc": desc,"Qty":1});
		}
		else{
			//busca si yasta y le suma la cantidad
			objIndex = cart.findIndex((obj => obj.ID == elem));
			cart[objIndex].Qty=cart[objIndex].Qty+1;

		}
		localStorage.setItem('Carrito', JSON.stringify(cart) );

		
	}
}


$(document).ready(function() {
    
	var txt;
	var nCols=0;
	var nl=0;
	var mod;
    var xmlHttp = new XMLHttpRequest();

   

	xmlHttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        json = JSON.parse(this.responseText);
	         for (x in json) {
	         	x=json[x].ID; 
			    nm = json[x].Name;
			    desc= json[x].Description;
		     	appendtoCols(x,nm,desc);	
		     }
	    }
	};
	xmlHttp.open("GET", "listado.php", true);
	xmlHttp.send();

	function createCols(){
		var elem='<div id="cols'+nCols+'" class="columns"></div>';
		$( "#ppal").append(elem);
	}

	function appendtoCols(x,nm,desc){

		var htmlI=
			'<div class="column is-4">'+
		  		'<div class="card">'+
			  		'<div class="card-image">'+
			    	'<figure class="image is-4by3">'+
			      		'<img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">'+
			    	'</figure>'+
					'</div>'+
					'<div class="card-content">'+
						'<div class="media-content">'+
						    '<p class="title is-4">'+
						    nm+
						    '</p>'+
						    '<p class="subtitle is-6">'+
						    desc+
						    '</p>'+
						      '<a id="'+ x +'" class="button is-link" href="ver-articulo.html" onclick="storeProduct(this)">' 
						    		+'Ver Articulo' +
						    '</a>'+'<br>'+
						     '<a id="btn'+ x +'" class="button is-primary" href="ver-carrito.html" onclick="addtoCart(this)">' 
						    		+'Agregar al Carrito' +
						    '</a>'+
						'</div>'+
					'</div>'+
				'</div>'+
		  	'</div>';


		 	$( "#cols" ).append(htmlI);
	}
    

   
});
