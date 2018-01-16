// After implementing login

const defaultUserInfo = {
  firstname: 'Eudes',
  image: 'https://image.ibb.co/m5FtxR/eh.png',
  lastname: 'Duarte',
  phonenumber: '1111111111',
  password: 'flat123',
  email: 'ford@home.com',
  type:  'Agent'
};


export default function reducer(state = {
  user: defaultUserInfo
}, action) {
  switch (action.type) {
    case 'UPDATE_PROFILE':
      return Object.assign({}, state, action.userInfo);
    default:
      return state
  }
  return state;
}