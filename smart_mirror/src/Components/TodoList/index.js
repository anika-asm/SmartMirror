import React, {useState,useEffect} from 'react'; 
import ListElement from './ListElement';
import axios from 'axios';


const styleSheet = {
    color:"pink",
    paddingLeft:"150px",
}

const TodoList = ()=>{
    const [currentEvents, setCurrentEvents] = useState([]);
    
    const ISODateString =(d=new Date())=>{
        const pad=n=> (n<10 ? '0'+n : n);

        return (d.getUTCFullYear()+'-'
             + pad(d.getUTCMonth()+1)+'-'
             + pad(d.getUTCDate())+'T'
             + pad(d.getUTCHours())+':'
             + pad(d.getUTCMinutes())+':'
             + pad(d.getUTCSeconds())+'Z')
    }

    const getEvents = async()=>{
        const key = 'AIzaSyBE5wfPo0ltyfcbF7aet8QvqQ5h5Ai7zjQ'
        const date = ISODateString()
        console.log(date)
        const data = await axios.get(`https://www.googleapis.com/calendar/v3/calendars/anikamuddu@gmail.com/events?orderBy=startTime&singleEvents=true&timeMin=${date}&key=${key}&maxResults=5`)
        console.log(data.data.items)   
        const tempEvents = []
        for(let item in data.data.items){
            console.log(item)
            tempEvents.push(<ListElement content = {data.data.items[item].summary} key = {item} />)
        }
        console.log(tempEvents)
        setCurrentEvents(tempEvents)
    }
    
    useEffect(() =>{
        getEvents();
    }, [])

    return(
    <div style={styleSheet}> 
        <h2>To Do List</h2>
        <div>
            {currentEvents}
        </div>
    </div>);
}

export default TodoList;