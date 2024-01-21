// useReducer.js

export const userReducer = (state = { users: [] }, action) => {
    switch (action.type) {
      case 'ADD_USER':
        return {
          users: [...state.users, action.payload],
        };
      case 'REMOVE_USER':
        return {
          users: state.users.filter(user => user.id !== action.payload),
        };
      // Agrega más casos según sea necesario para otras acciones
      default:
        return state;
    }
  };
  