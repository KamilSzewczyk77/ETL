
const preObject = document.getElementById('imdb');
const ulList = document.getElementById('list');

const dbRefObject = firebase.datebase().ref().child('imdb');
const dbRefList = dbRefObject.child('TOP250')

dbRefObject.on('value', snap => {
  preObject.innerText = JSON.stringify(snap.val(), null, 5);
});

dbRefList.on('child_added', snap => console.log(snap.val()));
