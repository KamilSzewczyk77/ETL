
const preObject = document.getElementById('imdb');
const ulList = document.getElementById('list');

const dbRefObject = firebase.datebase().ref().child('TOP250');
const dbRefList = dbRefObject.child('list')

dbRefObject.on('value', snap => {
  preObject.innerText = JSON.stringify(snap.val(), null, 5);
});

dbRefList.on('child_added', snap => console.log(snap.val()));
