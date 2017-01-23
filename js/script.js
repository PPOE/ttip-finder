(function ($) {
  'use strict';

  $(function () {

    if (navigator.userAgent.match(/iPhone|iPad|Android/i)) {
      $('.share-btn.whatsapp,.share-btn.facebook-messenger').css('display', 'inline-block');
    }

    var times = {
      '23.1.2017': 'Von 8.00 Uhr bis 20.00 Uhr',
      '24.1.2017': 'Von 8.00 Uhr bis 16.00 Uhr',
      '25.1.2017': 'Von 8.00 Uhr bis 20.00 Uhr',
      '26.1.2017': 'Von 8.00 Uhr bis 16.00 Uhr',
      '27.1.2017': 'Von 8.00 Uhr bis 16.00 Uhr',
      '28.1.2017': 'Von 8.00 Uhr bis 12.00 Uhr',
      '29.1.2017': 'Von 8.00 Uhr bis 12.00 Uhr',
      '30.1.2017': 'Von 8.00 Uhr bis 16.00 Uhr'
    };

    var locations = [
      {
        'x': '15',
        'y': '10',
        'name': 'something',
        'address': 'address'
      }
    ];

    var date = new Date();
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var dateString = day + '.' + (monthIndex + 1) + '.' + year;
    console.log(dateString);

    if (times[dateString]) {
      $('#openHours').text(times[dateString]);
    }


    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showLocation)
    }

    function showLocation(position) {
      console.log(position.coords.latitude + ', ' + position.coords.longitude);
      if (!position) {
        return;
      }
      // todo: search vor location

    }

  });

})(jQuery);