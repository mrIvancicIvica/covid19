//// TYPES ////
//1
const SET_GLOBALDATA = "SET_GLOBALDATA";
export const GET_GLOBALDATA = "GET_GLOBALDATA";

//2
const SET_DAILYDATA = "SET_DAILYDATA";
export const GET_DAILYDATA = "GET_DAILYDATA";

//3
const SET_PICKCOUNTRY = "SET_PICKCOUNTRY";
export const GET_PICKCOUNTRY = "GET_PICKCOUNTRY";





///// GLOBAL STATE /////

const initalState = {
  global: [],
  dailyDdata: [],
  pickCountry: []
};

export default (state = initalState, action) => {
  switch (action.type) {
    case SET_GLOBALDATA:
      return { ...state, global: action.globalData };
    case SET_DAILYDATA:
      return { ...state, dailyDdata: action.dailyD };
      case SET_PICKCOUNTRY:
        return {...state, pickCountry: action.pickCount }
      
    default:
      return state;
  }
};






////   ACTIONS  ////
//1
export const getGlobalData = () => ({
  type: GET_GLOBALDATA,
});

export const setGlobalData = (globalData) => ({
  type: SET_GLOBALDATA,
  globalData: globalData,
});


//2
export const getDailyData = () => ({
  type: GET_DAILYDATA,
});

export const setDailyData = (dailyD) => ({
  type: SET_DAILYDATA,
  dailyD: dailyD,
});


//3
export const getPickCountry = () => ({
  type: GET_PICKCOUNTRY,
});

export const setPickCountry = (pickCount) => ({
  type: SET_PICKCOUNTRY,
  pickCount: pickCount,
});
