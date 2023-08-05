import React from 'react';
import User from './module/user';
class Store {
  user;
  constructor() {
    this.user = User;
  }
}

const store = new Store();
const context = React.createContext(store);
const useStore = () => React.useContext(context);
export default useStore;
