<<<<<<< HEAD
const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
            
        default:
            return state;    
        
    }

}

export default userReducer;
=======
import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
      currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
      switch (action.type) {
            case UserActionTypes.SET_CURRENT_USER:
                  return {
                        ...state,
                        currentUser: action.payload
                  }
            default:
                  return state;      
      }
}

export default userReducer;
>>>>>>> ded95278c04ccaec74854e318d3fa8350c16eb95
