//!15 Step ---------> Once finished go back to App.js
//! Clever function to get access to navigator

import { NavigationActions } from 'react-navigation'; //!16 Step---

let navigator;

export const setNavigator = (nav) => {
 navigator = nav;
};

export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
};
