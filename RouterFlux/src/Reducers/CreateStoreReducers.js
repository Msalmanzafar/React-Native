import ActionTypes from '../Actions/ActionTypes';

const CreateStore = (state = {
    NewStoresData: [],
}, action) => {
    switch (action.type) {
        case ActionTypes.CreateNewStoresData: {
            return state = {
                ...state,
                NewStoresData: action.payload
            }
        }

        default: { }
    }
    return state;
}
export default CreateStore;
