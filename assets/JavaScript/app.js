
  // Initialize Firebase

  var config = {
    apiKey: "AIzaSyD4BZaMLIujGS5uOkefVBySy887KZt40gA",
    authDomain: "trainscheduler-6b213.firebaseapp.com",
    databaseURL: "https://trainscheduler-6b213.firebaseio.com",
    projectId: "trainscheduler-6b213",
    storageBucket: "trainscheduler-6b213.appspot.com",
    messagingSenderId: "28158142355"
  };
  firebase.initializeApp(config);

var database = firebase.database();

var trainName = "";
var destination = "";
var frequency = "";
var nextArrival = "";
var train= "";
var total = "";

$("#submit").on("click", function(event){

frequency.method()

    event.preventDefault();

    trainName = $("#trainName").val().trim();
    destination = $("#destination").val().trim();
    frequency = $("#frequency").val().trim();
    // time = $("#").val().trim();
    nextArrival = $("").val().trim();

    database.ref().push({
        trainName: trainName,
        destination: destination,
        fequency: frequency,
        time: time,
        rate: rate,
        dateAdded:
        firebase.database.ServerValue.TIMESTAMP
    });

    $(".form-control").val("");

});

database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snap){

    // console.log(snap.val().trainName);
    // console.log(snap.val().role);
    // console.log(snap.val().frequency);
    // console.log(snap.val().rate);

    var nameSnap = snap.val().trainName;
    var destSnap = snap.val().destination;
    var freqSnap = snap.val().frequency;
    var timeSnap = snap.val().firstTime;

    $("#blorp").prepend("<tr><td>" +nameSnap+ "</td><td>" +destSnap+ "</td><td>" +freqSnap+ "</td><td>" +timeSnap+ "</td><td>" );



});