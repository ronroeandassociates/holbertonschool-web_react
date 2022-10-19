import Immutable from 'immutable';

function concatElements(page1, page2) {
  const myList = Immutable.List(page1);
  const myList2 = Immutable.List(page2);
  return myList.concat(myList2);
}

function mergeElements(page1, page2) {
  const myMap = Immutable.Map(page1);
  const myMap2 = Immutable.Map(page2);
  return myMap.merge(myMap2);
}

export {concatElements, mergeElements};
