import * as actions from '../actions';

export const initialState = {
  memberId: '1',
};

export default function memberReducer(state = initialState, action) {
  switch (action.type) {
    case actions.OPEN_MEMBER_INFO: {
      const { id } = action.payload;
      return { memberId: id };
    }
    default:
      return state;
  }
}
