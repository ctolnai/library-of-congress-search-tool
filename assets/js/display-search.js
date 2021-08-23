var resultTextEl = document.querySelector('#result-text');
var resultContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');

function getParams() {
  // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])
  var searchParamsArr = document.location.search.split('&');

  // Get the query and format values
  var query = searchParamsArr[0].split('=').pop();
  var format = searchParamsArr[1].split('=').pop();

  searchApi(query, format);
  
  console.log(query);
  console.log(format);

fetch("https://www.loc.gov/" + format + "/?q=" + query + "&c=5" + "&fo=json")
  .then(function(response){return response.json();})
  .then(function(data){
    for (var i = 0; i < 6; i++) {
      console.log(data.results[i].title);
      var tempCard = document.createElement("div");
  
  tempCard.innerHTML = '<div class="card w-100"> <div class="card-body"> <h5 class="card-title">' + data.results[i].title + '</h5> <p class="card-date">' + data.results[i].date+ '</p><p class="card-subject">'+ data.results[i].subject+' </p><p class="card-description">' + data.results[i].description+ '</p><a href="#" class="btn btn-primary">Button</a></div></div>';
  
  resultContentEl.appendChild(tempCard);
  }
// for (var i = 0; 1<6; i++) {

  
  
  
//   };

  
})
}

getParams();

