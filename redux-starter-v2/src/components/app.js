import React, { Component } from 'react';
import store from '../store/store';
import { bugAdded, bugRemoved, bugResolved } from "../actions/actions";

console.log(store.getState().reducer);

const unsubscribe = store.subscribe(() => {
  console.log("Store Changed!", store.getState().reducer);
});


store.dispatch(bugAdded("Some bug 1"));

store.dispatch(bugAdded("Some bug 2"));




store.dispatch(bugRemoved(1));
store.dispatch(bugResolved(2));

export default class App extends Component {
  render() {
    return (
      <div>React simple {store.reducer}</div>
    );
  }
}
