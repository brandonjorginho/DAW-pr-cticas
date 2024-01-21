export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return{
                users:[...state.users,action.payload]
            }
        case'DELETE_USER':{
            return{
                users:state.users.filter(user=>action.payload!=user.name)
            }
        }
        default:
            return state
    }
}