<<<<<<< HEAD
export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
});
=======
import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
      type: UserActionTypes.SET_CURRENT_USER,
      payload: user
});
>>>>>>> ded95278c04ccaec74854e318d3fa8350c16eb95
