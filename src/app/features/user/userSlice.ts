import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedIn: false,
    id: '',
    name: '',
    token: null,
    accessToken: null,
    refreshToken: null,
    fcmToken: '',
    userData: {},
    selectedAddress: {},
    userMobileNumber: '',
    email: '',
    companyId: '',
    myCompanyDetails: '',
  },
  reducers: {
    userMobileNumberEntered(state, action) {
      state.userMobileNumber = action.payload;
    },
    userLoginWithMobileNumber(state, action) {
      state.loggedIn = true;
      state.userData = action.payload;
      state.token = action.payload.token;
      state.accessToken = action.payload.access_token;
      state.refreshToken = action.payload.refresh_token;
      state.userMobileNumber = action.payload.phone;
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.companyId = action.payload.companyId;
    },
    userCompanyDetails(state, action) {
      state.myCompanyDetails = action.payload;
    },
    userLogout(state) {
      state.loggedIn = false;
      state.token = null;
      state.userData = {};
      state.selectedAddress = {};
    },
    updateUserData(state, action) {
      state.userData = {
        ...state.userData,
        ...action.payload,
      };
    },
  },
});

export const {
  userMobileNumberEntered,
  userLoginWithMobileNumber,
  userCompanyDetails,
  userLogout,
  updateUserData,
} = userSlice.actions;

export default userSlice.reducer;
