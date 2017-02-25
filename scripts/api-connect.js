var api_url = 'localhost:5000';
var time = 0;
var meditating = false;

function shock () {
  $.ajax({
    url: api_url + '/shock',
    type:"POST",
    headers: {
      "Accept" : "application/json; charset=utf-8",
      "Content-Type": "application/json; charset=utf-8"
    },
    data:{
      "properties": {
        "magnitude": 1
      }
    },
    dataType:"json"
  });
}

function secondsToTime(s) {
    var m = Math.floor(s/60); //Get remaining minutes
    s -= m*60;
    return (m < 10 ? '0'+m : m)+":"+(s < 10 ? '0'+s : s); //zero padding on minutes and seconds
}

$(".toggle-meditation").click(function() {
  $('.visualization').toggleClass('meditating');
  if (meditating == false) {
    // reset time
    time = 0;

    // begin counter
    interval = setInterval(function() {
      time++;
      $('.time').html(secondsToTime(time));
    }, 1000);

    $('.visualization-message').html('Stay relaxed or else');
    $('.toggle-meditation').html('End Session');

    meditating = true;
  }
  else {
    clearInterval(interval);
    $('.visualization-message').html('');
    $('.toggle-meditation').html('Begin Meditation');

    meditating = false;
  }
});
