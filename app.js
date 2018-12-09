DatabaseReference zonesRef = FirebaseDatabase.getInstance().getReference("imdb");
DatabaseReference zone1Ref = zonesRef.child("TOP250");
DatabaseReference zone1NameRef = zone1Ref.child("Title");

document.getElementById("list").innerHTML = 5 + 6;
