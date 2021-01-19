import axios from "axios";

const url = "https://api.covid19api.com/dayone/country/south-africa";


export const fetchData = async (country) => {
  let changebelURL = url;


  if(country){
    changebelURL=`${url}/countries/${country}`
  }



  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(changebelURL);

    const modedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };

    return modedData;
  } catch (error) {
    console.log(error);
    
  }
};