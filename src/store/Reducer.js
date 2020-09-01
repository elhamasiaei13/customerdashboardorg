import *as Types from './ActionType'

const initialState = {
    authentication: false,
    data_tracking: "null",
    waybillNumber: " ",
    userName: '',
    password: '',
    searchParam: null,
    readySearchParam: null,
    preLoader: false,
    message: { show: false, content: "" }
}

const reducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {

        case Types.SET_AUTHENTICATE:
            newState.authentication = action.payload;
            localStorage.setItem("authentication", JSON.stringify(action.payload));
            break;

        case Types.SET_DATA_TRACKING:
            newState.data_tracking = action.payload;
            localStorage.setItem("data_tracking", JSON.stringify(action.payload));
            break;

        case Types.SET_WAYBILLNUMBER:
            newState.waybillNumber = action.payload;
            localStorage.setItem("waybillNumber", JSON.stringify(action.payload));
            break;

        case Types.SET_USERNAME:
            newState.userName = action.payload;
            localStorage.setItem("userName", JSON.stringify(action.payload));
            break;

        case Types.SET_PASSWORD:
            newState.password = action.payload;
            localStorage.setItem("password", JSON.stringify(action.payload));
            break;

        case Types.SET_SEARCHPARAM:
            newState.searchParam = action.payload;
            break;

        case Types.SET_READYSEARCHPARAM:
            newState.readySearchParam = action.payload;
            break;

        case Types.TOGGLE_MESSAGE:
            newState.message = action.payload;
            // setTimeout(() => {
            //     newState.message={ show: false, content: "88" }
            // }, 1000);
            break;

        case Types.TOGGLE_PRELOADER:
            newState.preLoader = action.payload;
            break;

        default:
    }
    return newState;
}
export default reducer;