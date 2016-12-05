import Id from '../modules/Id';

function Reducer (state, action){

    
    switch(action.type){
        case 'OPEN_CREATE_SERVICE_WINDOW':

        	return Object.assign({}, state, {modalCreate: {service: action.payload.service}});
        case 'ADD_SERVICE':
        
			state.services.push({id: Id(), name: action.payload.service, text: action.payload.text, badges: 0});
        	return Object.assign({}, state, {});
        default:
            return state;
    }
}

export default Reducer;
