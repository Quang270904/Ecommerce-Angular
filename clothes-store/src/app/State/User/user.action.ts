import { createAction, props } from '@ngrx/store';

export const getUserProfile = createAction('[User] Get User');
export const getUserProfileSuccess = createAction(
  '[User] Get User Success',
  props<{ userProfile: any }>()
);
export const getUserProfileFailure = createAction(
  '[User] Get User Failure',
  props<{ error: any }>()
);

export const logOutSuccess = createAction('[User] Log Out Success');
