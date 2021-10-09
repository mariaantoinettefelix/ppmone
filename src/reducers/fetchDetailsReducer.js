export default (state = {}, action) => {
    switch (action.type) {
     case 'FETCH_DETAILS':
        return {
         result: action.payload
        }
     default:
      return state
    }
}