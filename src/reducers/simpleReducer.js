export default (state = {}, action) => {
    switch (action.type) {
     case 'UPDATE_INPUT':
      return {
       result: action.payload
      }
     default:
      return state
    }
}