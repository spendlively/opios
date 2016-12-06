import Id from '../modules/Id';

function Reducer (state, action){

    
    switch(action.type){
        case 'OPEN_CREATE_SERVICE_WINDOW':

        	return Object.assign({}, state, {modalCreate: {service: action.payload.service}});

        case 'ADD_SERVICE':
        
			state.services.push({id: Id(), name: action.payload.service, text: action.payload.text, badges: 0});
        	return Object.assign({}, state, {});

        case 'OPEN_CONTEXT_MENU':

    		return Object.assign({}, state, {contextMenu: {serviceId: action.payload.id}});

        case 'DELETE_SERVICE':

			var newState = Object.assign({}, state),
				id = action.payload.id;			

			if(newState.services.length){
				for(var s in newState.services){
					if(id === newState.services[s]['id']){
						delete newState.services[s];
					}
				}
			}
				
    		return newState;

        default:
            return state;
    }
}

export default Reducer;
