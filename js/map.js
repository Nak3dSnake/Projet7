$(document).ready(function() {
    $('.collapsible').collapsible();
});

var map = {

    googlemap: "",
    latitude: 45.7500000,

    initMap: function() {


        var Lyon = { lat: this.latitude, lng: 4.850000 };
        map.googlemap = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: Lyon
        });

        var marker = new google.maps.Marker({
            position: Lyon,
            map: map.googlemap,
            title: "Votre position"
        });

        map.googlemap.addListener('click', function(e) {

            console.log("hello");
            map.placeMarkerAndPanTo(e.latLng, map.googlemap);
        });
    },



    placeMarkerAndPanTo: function(latLng, map) {
        var marker = new google.maps.Marker({
            position: latLng,
            map: map
        });
        map.panTo(latLng);
    },
    restoJson: function() {
        $.getJSON('restaurants.json', function(restaurants) {

            // pour faire une boucle sur chaque entrée du fichier json
            $.each(restaurants, function(index, restaurant) {

                var marker = new google.maps.Marker({
                    position: { lat: restaurant.lat, lng: restaurant.long },
                    map: map.googlemap,
                    title: restaurant.restaurantName
                });

                // création structure collapsible avec nom restau
                var li = $('<li/>').appendTo($('ul'));
                $('<div/>').addClass('collapsible-header').html(restaurant.restaurantName + '<div id="rateYo-' + index + '"></div>').appendTo(li);
                var div = $('<div/>').addClass('collapsible-body').appendTo(li);
                var span = $('<span/>').appendTo(div);
                var avis = $('<div/>').appendTo(div);
                var button = $('<a class="waves-effect waves-light btn">Ajouter un avis</a>').appendTo(div);

                // insertion image google street view
                $(span).html('<img src="https://maps.googleapis.com/maps/api/streetview?size=295x185&location=' + restaurant.lat + ',' + restaurant.long + '&heading=151.78&pitch=-0.76&key=AIzaSyAzW5weSwyYwqjuv4QuBLJ4WKVEun5EG1E"/>');


                var totalNote = 0;
                var nombreNote = 0;
                // insertion commentaires + note moyenne
                restaurant.ratings.forEach(function(rating) {


                    $(avis).append('<p>' + rating.stars + '</p>' + rating.comment);
                    nombreNote++;
                    totalNote = totalNote + rating.stars;
                })

                var moy = totalNote / nombreNote;


                $("#rateYo-" + index).rateYo({
                    rating: moy,
                    readOnly: true,
                    multiColor: {
                        "startColor": "#FF0000", //RED
                        "endColor": "#F1C40F" //YELLOW
                    }
                });
            });
        });
    }
}