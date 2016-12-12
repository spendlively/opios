import Id from '../modules/Id';
const {ipcRenderer} = require('electron');

function Reducer (state, action){

    var newState = null;
    
    switch(action.type){
        case 'OPEN_CREATE_SERVICE_WINDOW':
            newState = Object.assign({}, state, {modalCreate: {name: action.payload.name}});
            break;

        case 'ADD_SERVICE':
        
            state.services.push({
                id: Id(),
                name: action.payload.name, 
                title: action.payload.title, 
                team: action.payload.team, 
                badges: 0
            });
            newState = Object.assign({}, state, {});
            break;

        case 'SAVE_SERVICE':
        
            var id = action.payload.id, 
                title = action.payload.title, 
                team = action.payload.team;

            newState = Object.assign({}, state);

            if(newState.services.length){
                for(var s in newState.services){
                    if(id === newState.services[s]['id']){
                        newState.services[s]['title'] = title;
                        newState.services[s]['team'] = team;
                    }
                }
            }

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

        case 'UPDATE_SERVICE':

            newState = Object.assign({}, state, {modalUpdate: {id: action.payload.id}});

            break;

        case 'CHANGE_LANG':


            var l12n = ipcRenderer.sendSync('get-localization-data', action.payload.lang),
                language = action.payload.lang;

            newState = Object.assign({}, state, {l12n: l12n, language: language});

            break;

        default:
            newState = state;
            break;
    }

    ipcRenderer.sendSync('save-opios-state', newState);

    return newState;
}

export default Reducer;
