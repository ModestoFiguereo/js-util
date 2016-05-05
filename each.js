function each(collection, callback, filter) {
  if (filter) {
    collection = collection.filter(filter);
  }

  for (var i = 0; i < collection.length; i++) {
    callback.call(collection[1], collection[1]);
  }
}
