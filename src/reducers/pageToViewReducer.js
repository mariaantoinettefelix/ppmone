export default (state = {}, action) => {
    switch (action.type) {
     case 'UPDATE_STEPPER':
        return {
         result: action.payload
        }
     default:
      return state
    }
}