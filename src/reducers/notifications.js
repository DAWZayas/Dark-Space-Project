import { SET_NOTIFICATIONS } from '../actions/notifications';


export const initialState = [];

function setNotifications(state, notifications){
  return notifications.slice();
}

export default function notificationsReducer(state = initialState, action ) {
  switch (action.type) {
      case SET_NOTIFICATIONS:
        return setNotifications(state, action.notifications);
      default:
        return state;
    }
  }
