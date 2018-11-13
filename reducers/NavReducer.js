import { AppWithNavigation } from '../App';

const router = AppWithNavigation.router;

console.log('router: ' + router);
const homeNavAction = router.getActionForPathAndParams('Home');
const initialState = router.getStateForAction(homeNavAction);

const NavReducer = (state = initialState, action) => {
  const nextState = router.getStateForAction(action, state);

  // return the original `state` if `nextState` is null or undefined.
  return nextState || state
};

export default NavReducer;