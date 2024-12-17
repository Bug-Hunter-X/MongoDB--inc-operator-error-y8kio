```javascript
//Incorrect usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{$inc:{quantity:-1}});
//The above code will throw an error if the quantity field is not present in the document
//The correct way is to use $inc operator with $setOnInsert operator
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{$inc:{quantity:-1},$setOnInsert:{quantity:0}});
```