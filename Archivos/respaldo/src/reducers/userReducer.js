// userReducer.js

export const userReducer = (state = {}, action) => {
    switch (action.type) {
      case 'ADD_USER':
        return {
          users: [...state.users, action.payload],
          nextUserId: state.nextUserId + 1, // Incrementar el contador de ID
        };
        case 'REMOVE_USER':
            return {
              ...state,
              users: state.users.filter(user => user.id !== action.payload),
            };
      default:
        return state;
    }
  };
  