var url =

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
