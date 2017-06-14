// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {

  'use strict';

  // Your Code Goes Here
  fetch('https://randomuser.me/api/?results=12') // fetch(url) will return a promise and will go fetch data from any API site that you designate.
  .then(function(response){ //.then(function(response)), takes that data that is aquired from the fetch command, and makes it accessible.
    return response.json(); //returns the information so we can use it in a different function.
  })
  .then(function(json) {// This then function allows for us to maniplate the JSON data you have just returned.
    let result = json.results; //json.results represents that data that is stored in our arrays. To make calling it easier, you can store this data in a variable.
    result.forEach(function(user){ //can take the place of a for loop. 'user' will take the place of each index number in your array. Can also you 'forEach()' in place of .map().
      console.log("Name: " + user.name.first);
      console.log("Email: " + user.email);
      return user;
    })
    // for (var i = 0; i < json.results.length; i++) {
    //   // var user = json.results[i];
    //   var info = [];
    //   var directory = document.getElementsByClassName('customers');
    //   // user.name.join(',');
    //   info.push(user.name);
    //   info.push(user.email);
    //   info.push(user.location);
    //   info.push(user.phone);
    //   console.log(info);
    //   // directory.innerHTML = info.toString();
    // }

  })
})();
