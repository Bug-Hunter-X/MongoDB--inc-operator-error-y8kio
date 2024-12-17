```javascript
//Correct usage of $inc operator with $setOnInsert
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{$inc:{quantity:-1},$setOnInsert:{quantity:0}});
//This will work even if the quantity field does not exist in the document
//If the document does not exist, it will be inserted with quantity = 0
//If the document exists and has quantity field then it will simply decrement quantity
```