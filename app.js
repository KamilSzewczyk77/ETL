
const preObject = document.getElementById('imbd');
const ulList = document.getElementById('list');

const dbRefObject = firebase.datebase().ref().child('TOP250');
const dbRefList = dbRefObject.child('3')

dbRefObject.on('value', snap => {
  preObject.innerText = JSON.stringify(snap.val(), null, 6);
});

dbRefList.on('child_added', snap => console.log(snap.val()));
