import React, {useState} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const AvaulabilityProducts = () =>{

    const [date, changeDate] = useState(new Date());

    function changeValue(val) {
       changeDate(val);
    }
 
    return (
       <div>
        
          <Calendar onChange = {changeValue} value = {date} />
       </div>
    );
}
export default AvaulabilityProducts;