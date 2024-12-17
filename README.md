# MongoDB $inc Operator Error
This repository contains a demonstration of an uncommon error that can occur when using the `$inc` operator in MongoDB. The error arises when attempting to increment a field that does not yet exist in the document. 

## Problem
The `$inc` operator in MongoDB is used to increment or decrement a numeric field. However, if the field is not present in the document, the update operation will fail and throw an error.  The example demonstrates this issue.

## Solution
The solution involves using the `$setOnInsert` operator in conjunction with `$inc`. The `$setOnInsert` operator sets a field to a value only if the document is being inserted. By setting the initial value to 0, we prevent the error. 

This approach provides a safe and efficient way to increment or decrement fields that may not always exist in a collection.
