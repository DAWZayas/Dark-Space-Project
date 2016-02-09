import {
  SET_NOTIFICATIONS
} from './action-types';

export function setNotifications(notifications) {
  return { type: SET_NOTIFICATIONS, notifications };
}
