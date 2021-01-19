import React from "react";
import * as moment from "moment";


const CounntryPickerDetails = ({ Country, Confirmed, Date }) => {
  return (
    <div className='ui card container'>
      <div className='content'>
        <div className='center aligned header'>{Country}</div>
        <div className='center aligned description'>
          <h2>{Confirmed}</h2>
        </div>
        <div className="ui divider"></div>
        <div className='extra content'>
          <div className='center aligned author'>
            <span>Date and time of current situation : {moment(Date).format("MMMM Do, h:mm") }</span>
            <h4></h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounntryPickerDetails;
