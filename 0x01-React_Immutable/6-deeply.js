import Immutable from 'immutable';

function mergeDeeplyElements(page1, page2) {
  const myMap = Immutable.Map(page1);
  const myMap2 = Immutable.Map(page2);
  return myMap.mergeDeep(myMap2);
}

export default mergeDeeplyElements;
