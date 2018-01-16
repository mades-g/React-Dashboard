import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import Layout from './Layout';
import Auth from './Auth';
import FlatBond from './FlatBond';

export default {
  Auth,
  Layout,
  FlatBond,
  form: formReducer
};