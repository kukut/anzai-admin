import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth';
import settingReducer from './setting';
import commonReducer from './common';

export default configureStore({
  reducer: {
    auth: authReducer,
    setting: settingReducer,
    common: commonReducer

  }
});