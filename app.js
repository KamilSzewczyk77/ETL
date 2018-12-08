
const preObject = document.getElementById('imbd');
const ulList = document.getElementById('list');

const dbRefObject = firebase.datebase().ref().child('imbd');
const dbRefList = dbRefObject.child('TOP250')

dbRefObject.on('value', snap => {
  preObject.innerText = JSON.stringify(snap.val(), null, 3);
});

dbRefList.on('child_added', snap => console.log(snap.val()));
