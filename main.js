// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {

  'use strict';

  // Your Code Goes Here
  fetch('https://randomuser.me/api/?results=12')
  .then(function(response){
    // console.log(response.json());
    return response.json();

  })
  .then(function(json) {
    for (var i = 0; i < json.results.length; i++) {
      var user = json.results[i];
      var info = [];
      var directory = document.getElementsByClassName('customers');
      // user.name.join(',');
      info.push(user.name);
      info.push(user.email);
      info.push(user.location);
      info.push(user.phone);
      console.log(info);
      // directory.innerHTML = info.toString();
    }

  })
})();
