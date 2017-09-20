var url =
"http://api.issuu.com/1_0?action=issuu.documents.list&apiKey=owq32j1gea63hswaii7lzo8ma43nh9n0&access=public&documentSortBy=publishDate&resultOrder=desc&pageSize=30&format=json&signature=6b03703b7653b72c325f0ab5afb625fe";

class Index{
    constructor($http){
        this.message = "Index Page!";
        this.http = $http;
        this.get();
    }

    get(){
        this.http.get(url).then((res =>{
            this.docs = res.data;
        }));
    }

}

var app = angular.module("issuuAPI",[]);
app.controller("Index",Index);




// function fetchDemo() {
//     return fetch(url).then(function(response) {
//         return response.json();
//     }).then(function(json) {
//         return json;
//     });
// }

// fetchDemo().then(function(result) {
//     console.log(result);
// });
//message obj going to backend converted to JSON
// var message = JSON.stringify({
//     "priority": "",
//     "sender": "",
//     "timestamp": "",
//     "receiver": "",
//     "message": ""
//   });
//   //HTTP request obj needed to make post
//   var xhr = new XMLHttpRequest();
//   xhr.withCredentials = true;
//   xhr.addEventListener("readystatechange", function () {
//     if (this.readyState === 4) {
//       console.log(this.responseText);
//     }
//   });
//   //http method type and enpoint go here
//   xhr.open("POST", "endpoint goes here...");
//   xhr.setRequestHeader("content-type", "application/json");
//   //request is made here
//   xhr.send(data);