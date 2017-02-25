var api_url = 'localhost:5000';

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

$("#test").click(function(){
  shock();
});
