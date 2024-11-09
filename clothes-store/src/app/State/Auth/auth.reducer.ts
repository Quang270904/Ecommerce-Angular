import { createReducer, on } from '@ngrx/store';
import {
  loginFailure,
  loginRequest,
  loginSuccess,
  registerFailure,
  registerRequest,
  registerSuccess,
} from './auth.action';

const initialState = {
  user: null,
  loading: false,
  error: null,
};
export const authReducer = createReducer(
  initialState,
  on(loginRequest, (state) => ({ ...state, loading: true, error: null })),
  on(loginSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    error: null,
    user,
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    loading: true,
    error: error,
  })),

  on(registerRequest, (state) => ({ ...state, loading: true, error: null })),
  on(registerSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    error: null,
    user,
  })),
  on(registerFailure, (state, { error }) => ({
    ...state,
    loading: true,
    error: error,
  }))
);
