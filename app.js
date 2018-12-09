(function(){

// Initialize Firebase
   const config = {
     apiKey: "AIzaSyBg0kSaoiku7sKgo0iQMg1aOS4h3x6iozQ",
     authDomain: "hurt-danych-as-ks.firebaseapp.com",
     databaseURL: "https://hurt-danych-as-ks.firebaseio.com",
     //projectId: "hurt-danych-as-ks",
     storageBucket: "hurt-danych-as-ks.appspot.com",
     //messagingSenderId: "105336337375"
   };
   firebase.initializeApp(config);
   
   	// Get elements
	const preObject = document.getElementById('imdb');

	// Get references
	const dbRefObject = firebase.database().ref().child('imdb');

	// Sync object changes
	dbRefObject.on('value', snap => console.log(snap.val()));

	//const ulList = document.getElementById('list');


	//const dbRefList = dbRefObject.child('3');




  	//preObject.innerText = JSON.stringify(snap.val(), null, 6);
//});

//dbRefList.on('child_added', snap => console.log(snap.val()));
}());
