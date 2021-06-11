// Create Redux action types
export const TOGGLE_NAVIGATION = 'TOGGLE_NAVIGATION';
export const OPEN_MEMBER_INFO = 'OPEN_MEMBER_INFO';

// Create Redux action creators that return an action
export const toggleNavigation = () => ({
  type: TOGGLE_NAVIGATION,
});

export const openMemberInfo = (id) => ({
  type: OPEN_MEMBER_INFO,
  payload: { id },
});
