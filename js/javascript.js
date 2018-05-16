var map;

 $(document).ready(function(){
    $('.collapsible').collapsible();
  });

// API google map
function initMap() {
			        var Lyon = {lat: 45.750000, lng: 4.850000};
			        var map = new google.maps.Map(document.getElementById('map'), {
			          zoom: 15,
			          center: Lyon
			        });
			        var marker = new google.maps.Marker({
			          position: Lyon,
			          map: map
			        });
		restoJson();	        
}

function restoJson(){
// pour récupérer les données du fichier json
        $.getJSON('restaurants.json', function(restaurants){

	          // pour faire une boucle sur chaque entrée du fichier json
	        $.each(restaurants, function(index, restaurant){
					

					var marker = new google.maps.Marker({
							          position: {lat: restaurant.lat, lng: restaurant.long},
							          map: map
					});
	            var li = $('<li/>').appendTo($('#container_resto'));
	            $('<div/>').addClass('collapsible-header').html("coucou").appendTo(li);

	        });

        })
}