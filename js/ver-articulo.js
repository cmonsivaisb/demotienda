$(document).ready(function() {
    
	showDetail();

	function showDetail(){
		nm= localStorage.getItem("Name");
		desc= localStorage.getItem("Description");
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
						'</div>'+
					'</div>'+
				'</div>'+
		  	'</div>';
		 	$( "#cols" ).append(htmlI);
	}

   
});
