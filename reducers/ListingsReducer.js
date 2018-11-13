export function listings(state=[], action) {
    switch(action.type) {
        case 'Add_Listings':
            console.log(`add listings to state`);
            
            var {listings} = action;
            // var newState = {...state, ...listings}
            // console.log(JSON.stringify(newState));
            // return newState;

            return listings;
        default:
            return state;
    }
}