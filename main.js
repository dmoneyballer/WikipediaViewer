
$(document).ready(function(){




$('#search').click(function search() {
  var searchWord = document.querySelector('#searchWord').value;
  var results = [];

  $.ajax({
            url:`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&maxlag=5&search=${searchWord}&callback=?`,
            type: 'GET',
            dataType: 'jsonp',
            success: (data) => {
                $("#output").html("");
              var i =0;
              for (var i = 0; i < data[1].length; i++) {
                $("#output").append(`<li><a href= "${data[3][i]  }">${data[1][i] + data[2][i]}<a></li>`);
                // $("#description").append(`<ul>${data[2][i]}</ul>`);
                // $("#link").append(`<ul>${data[3][i]}</ul>`);
              }

              console.log(data);
            },
            error: (err) =>{
              console.log(err.responseJSON);
            }


        })

})
  $("#searchWord").keypress(function (e) {
    if(e.which ==13){
      $("#search").click();
    }
  })
});
