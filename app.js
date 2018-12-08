
const preObject = document.getElementById('imdb');
const ulList = document.getElementById('TOP250');

const dbRefObject = firebase.datebase().ref().child('1');


dbRefObject.on('value', snap => {
  preObject.innerText = JSON.stringify(snap.val(), null, 5);
});

dbRefList.on('child_added', snap => console.log(snap.val()));
