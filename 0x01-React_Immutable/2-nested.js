import Immutable from 'immutable';

export default function accessImmutableObject(object, array) {
  const myMap = Immutable.fromJS(object);
  return myMap.getIn(array);
}
