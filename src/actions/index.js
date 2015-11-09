import { pushState } from 'redux-router';

/*
 * action types
 */
export const REMOVE_CAMPAIGN = 'REMOVE_CAMPAIGN';

/*
 * Campaign action creators
 */

export function removeCampaign(idCampaign) {
    return { type: REMOVE_CAMPAIGN, idCampaign, redirect: '/'
  };
}
