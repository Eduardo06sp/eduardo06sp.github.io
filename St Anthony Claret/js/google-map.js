function init() {
    
    var pinLocation = new google.maps.LatLng(33.846807,-117.899296);
    
    var mapOptions = {
        center: pinLocation,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 14,
        
        streetViewControl: false,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        }
    };
    var locationMap;
    locationMap = new google.maps.Map(document.getElementById('map'), mapOptions);
    
    var startPosition = new google.maps.Marker({
        position: pinLocation,
        map: locationMap,
        icon: "images/cross.png"
    });
}

function loadScript() {
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAudBKFjFTSLSqry_0dUUx75rdVEHi6fuE&callback=init';
    document.body.appendChild(script);
}

window.onload = loadScript;