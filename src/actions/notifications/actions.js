import {
  SET_NOTIFICATIONS
} from './action-types';

export function setCampaign(notifications) {
  return { type: SET_NOTIFICATIONS, notifications };
}
