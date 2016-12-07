import Id from '../modules/Id';
const {ipcRenderer} = require('electron');

function Reducer (state, action){

    var newState = null;
    
    switch(action.type){
        case 'OPEN_CREATE_SERVICE_WINDOW':

        	newState = Object.assign({}, state, {modalCreate: {service: action.payload.service}});
            break;

        case 'ADD_SERVICE':
        
            state.services.push({id: Id(), name: action.payload.service, text: action.payload.text, badges: 0});
            newState = Object.assign({}, state, {});
            break;

        case 'OPEN_CONTEXT_MENU':

            newState = Object.assign({}, state, {contextMenu: {serviceId: action.payload.id}});
            break;

        case 'DELETE_SERVICE':

            var id = action.payload.id;         

            newState = Object.assign({}, state);

            if(newState.services.length){
                for(var s in newState.services){
                    if(id === newState.services[s]['id']){
                        delete newState.services[s];
                    }
                }
            }
                
            break;

        default:
            newState = state;
            break;
    }

    ipcRenderer.sendSync('save-opios-state', newState);

    return newState;
}

export default Reducer;
