var label = 'м.Кутузовская, Кутузовский проспект,36, стр.3(2 мин. от метро)';

function initMap() {
  var moscow = new google.maps.LatLng(55.740131, 37.526281);
  var correctedLocation = new google.maps.LatLng(55.741673, 37.526281);
  var zoom = 15;
  if ($(window).width() <= '775') {
    correctedLocation = new google.maps.LatLng(55.741351, 37.526281);
    zoom = 14;
  }
  var map = new google.maps.Map(document.getElementById('map'), {
    center: correctedLocation,
    zoom: zoom,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']

    },
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
  });
  var styledMap = new google.maps.StyledMapType(mapStyles, {
    name: "Styled Map"
  });
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style')

  var contentString = '<div id="mapContent">' +
      'м.Кутузовская,<br> Кутузовский проспект,<br>36, стр.3<br>(2 мин. от метро) ' +
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  var image = '/img/marker.svg';
  var marker = new google.maps.Marker({
    position: moscow,
    map: map,
    title: 'м.Кутузовская, Кутузовский проспект,36, стр.3(2 мин. от метро)',
    icon: image
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });


}

mapStyles = [{
  "elementType": "geometry",
  "stylers": [{
    "color": "#f5f5f5"
  }]
}, {
  "elementType": "labels.icon",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#616161"
  }]
}, {
  "elementType": "labels.text.stroke",
  "stylers": [{
    "color": "#f5f5f5"
  }]
}, {
  "featureType": "administrative.land_parcel",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#bdbdbd"
  }]
}, {
  "featureType": "poi",
  "elementType": "geometry",
  "stylers": [{
    "color": "#eeeeee"
  }]
}, {
  "featureType": "poi",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#757575"
  }]
}, {
  "featureType": "poi.park",
  "elementType": "geometry",
  "stylers": [{
    "color": "#e5e5e5"
  }]
}, {
  "featureType": "poi.park",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#9e9e9e"
  }]
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": [{
    "color": "#ffffff"
  }]
}, {
  "featureType": "road.arterial",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#757575"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry",
  "stylers": [{
    "color": "#dadada"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#616161"
  }]
}, {
  "featureType": "road.local",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#9e9e9e"
  }]
}, {
  "featureType": "transit.line",
  "elementType": "geometry",
  "stylers": [{
    "color": "#e5e5e5"
  }]
}, {
  "featureType": "transit.station",
  "elementType": "geometry",
  "stylers": [{
    "color": "#eeeeee"
  }]
}, {
  "featureType": "water",
  "elementType": "geometry",
  "stylers": [{
    "color": "#c9c9c9"
  }]
}, {
  "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#9e9e9e"
  }]
}];



$(document).ready(function() {
  var sliderMenu = $('.slider-menu');
  var slider = $('.js-slider');
  var prevArrow = $('.arrow-left');
  var nextArrow = $('.arrow-right');
  var reportsNavItem = $('.reports__chanel');
  var sliderComment = $('.js-slider-comments');
  var closeForm = $('.js-close-form');
  var modalForm = $('.js-modal-form');
  var btnShowModal = $('.js-show-modal');

  window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 650) {
      sliderMenu.slideDown();
    } else {
      sliderMenu.slideUp();
    }
  };

  slider.slick({
    nextArrow: nextArrow,
    prevArrow: prevArrow,
  });

  sliderComment.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: $('.comments__arrow--right'),
    prevArrow: $('.comments__arrow--left'),
    lazyLoad: 'progressive',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          appendDots: $('.js-comments-dots'),
          dotsClass: 'comments__dots'
        }
      }
    ]

  });

  reportsNavItem.each(function(item) {
    var self = $(this);

   self.on('click', function() {
     self.siblings().removeClass('reports__chanel--active');
     self.addClass('reports__chanel--active');
     slider.slick('slickGoTo', item)
   })
  });

  slider.on('afterChange', function(slick, currentSlide) {
    reportsNavItem.eq(currentSlide.currentSlide).siblings().removeClass('reports__chanel--active');
    reportsNavItem.eq(currentSlide.currentSlide).addClass('reports__chanel--active');
  });

  closeForm.on('click', function(){
    modalForm.removeClass('modal-form--show')
  });

  modalForm.on('click', function(ev) {
    if ($(ev.target).hasClass('modal-form')) {
      $(ev.target).removeClass('modal-form--show');
    }
  })

  btnShowModal.on('click', function(ev) {
    ev.preventDefault();
    modalForm.addClass('modal-form--show')
  })

})
