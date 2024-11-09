import { createAction, props } from '@ngrx/store';

export const loginRequest = createAction(
  '[Auth] Login Request',
  props<{ email: string; password: string }>()
);
export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: any }>()
);
export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);

export const registerRequest = createAction(
  '[Auth] Register Request',
  props<{ user: any }>()
);
export const registerSuccess = createAction(
  '[Auth] Register Success',
  props<{ user: any }>()
);
export const registerFailure = createAction(
  '[Auth] Register Failure',
  props<{ error: any }>()
);
