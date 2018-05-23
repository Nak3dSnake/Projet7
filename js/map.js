$(document).ready(function(){
    $('.collapsible').collapsible();
});

var map = {

	googlemap: "",
	latitude: 45.7500000,

	initMap: function(){

		var Lyon = {lat: this.latitude, lng: 4.850000};
			        map.googlemap = new google.maps.Map(document.getElementById('map'), {
			          zoom: 15,
			          center: Lyon
			        });
			        var marker = new google.maps.Marker({
			          position: Lyon,
			          map: map.googlemap
			        });
		this.restoJson();
	},

	restoJson: function(){
		$.getJSON('restaurants.json', function(restaurants){

	          // pour faire une boucle sur chaque entrée du fichier json
	    	$.each(restaurants, function(index, restaurant){
					
				var marker = new google.maps.Marker({
			      position: {lat: restaurant.lat, lng: restaurant.long},
			      map: map.googlemap
				});

				$('ul').html('<li class="test">' +restaurant.restaurantName+ '<li/>');

				 $('.test').text(restaurant.restaurantName);
				


	    	});

    	});
	}
}