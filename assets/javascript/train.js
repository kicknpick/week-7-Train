console.log('working');

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBSXB4UJK288ZOebLUtBBAhZ7y85npFK5o",
    authDomain: "week-7-train-29341.firebaseapp.com",
    databaseURL: "https://week-7-train-29341.firebaseio.com",
    storageBucket: "week-7-train-29341.appspot.com",
    messagingSenderId: "293918821092"
  };
  
  firebase.initializeApp(config);

  // variable to reference database from firebase
  var database = firebase.database();

  // initial values
  // var newName = "";
  // var newDestination = "";
  // var newStart = "";
  // var newFrequency = "";

  // event listener for adding new train to firebase
  $("#submitBtn").on("click", function(event){
  	console.log("submitBTN working");
    var newName = $("#inputName").val().trim();
    var newDestination = $("#inputDestination").val().trim();
    var newStart = moment($("#inputFirstTime").val().trim(), "HH:mm").subtract(10, "years").format("X")
    var newFrequency = $("#inputFrequency").val().trim();
    

    // create temporary location in order to push to firebase
    var newTrain = {
      name: newName,
      destination: newDestination,
      startTime: newStart,
      frequency: newFrequency
    };

    // console.log(newTrain);

    // // push to firebase
    database.ref().push(newTrain);

    // console.log from firebase
    console.log(newTrain.newName);
    console.log(newTrain.newDestination);
    console.log(newTrain.newStart);
    console.log(newTrain.newFrequency);


    // empty forms
    $("#inputName").val("");
    $("#inputDestination").val("");
    $("#inputFirstTime").val("");
    $("#inputFrequency").val("");

    // pulling snapshot of data from firebase to html

    return false;
});

// creating event to firebase database and then adding html to page for added new trains
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var tName = childSnapshot.val().name;
  var tDestination = childSnapshot.val().destination;
  var tFrequency = childSnapshot.val().startTime;
  var tFirstTrain = childSnapshot.val().frequency;

  // Calculate the minutes until arrival 
  var differenceTimes = moment().diff(moment.unix(tFirstTrain), "minutes");
  var tRemainder = moment().diff(moment.unix(tFirstTrain), "minutes") % tFrequency;
  var tMinutes = tFrequency - tRemainder;

  // To calculate the arrival time, add the tMinutes to the currrent time
  var tArrival = moment().add(tMinutes, "m").format("hh:mm A");

  console.log(tMinutes);
  console.log(tArrival);
  console.log(moment().format("hh:mm A"));
  console.log(tArrival);
  console.log(moment().format("X"));

  // Add each train's data into the table
  $("#trainTable > tbody").append("<tr><td>" + tName + "</td><td>" + tDestination + "</td><td>"
  + tFrequency + "</td><td>" + tArrival + "</td><td>" + tMinutes + "</td></tr>");
});

