
$("document").ready(function() {


// initialize firebase
  // var config = {
  //   apiKey: "AIzaSyBSXB4UJK288ZOebLUtBBAhZ7y85npFK5o",
  //   authDomain: "week-7-train-29341.firebaseapp.com",
  //   databaseURL: "https://week-7-train-29341.firebaseio.com",
  //   storageBucket: "week-7-train-29341.appspot.com",
  //   messagingSenderId: "293918821092"
  // };
  // firebase.initializeApp(config);

  // event listener for adding new train to firebase
  $("#submitBtn").on("click", function(){
  	console.log("submitBTN working");
    var name = $("#inputName").val().trim();
    var destination = $("#inputDestination").val().trim();
    var startTime = $("#inputFirstTime").val().trim();
    var frequency = $("#inputFrequency").val().trim();
    console.log(name);
    console.log(destination);
    console.log(startTime);
    console.log(frequency);

    // data.ref().push({
    //     name: name,
    //     destinat: destination,
    //     startDate: startTime,
    //     monthRate: frequency
    // })
    return false;
});

// close document.ready
});