import * as actions from '../actions';

export const initialState = {
  isNavOpen: false,
};

export default function navReducer(state = initialState, action) {
  switch (action.type) {
    case actions.TOGGLE_NAVIGATION:
      return { isNavOpen: !state.isNavOpen };
    default:
      return state;
  }
}
