var map;

// API google map
function initMap() {
			        var Lyon = {lat: 45.750000, lng: 4.850000};
			        map = new google.maps.Map(document.getElementById('map'), {
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
console.log("ok");
	          // pour faire une boucle sur chaque entrée du fichier json
	        $.each(restaurants, function(index, restaurant){
					

					var marker = new google.maps.Marker({
							          position: {lat: restaurant.lat, lng: restaurant.long},
							          map: map
					});
	            

	        });

        });
}