import React from 'react';
import './seasonDisplay.css';
//config
const seasonConfig =  {
    summer : {
        text : "So Hot Here",
        iconName : "sun"
    },
    winter : {
        text : "Brrr so chill",
        iconName : "snowflake"
    }
}
//helper
const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ?  'summer' : 'winter'
    }else{
        return lat > 0 ? 'winter' : 'summer'
    }
}
//functional function
const SeasonDisplay = props => {
const seasonNow= getSeason(props.lat, new Date().getMonth());
const {text , iconName} = seasonConfig[seasonNow];
return (
<div>
    <div className={`season-display ${seasonNow}`}>
        <i className={`icon-left massive ${iconName} icon`}></i>
        <p>{text}</p>
        <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
</div>
)

}

export default SeasonDisplay;