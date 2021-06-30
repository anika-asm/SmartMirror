import React from 'react';
import Clock from '../Clock'; 
import TodoList from '../TodoList';
import PhotoAlbum from '../PhotoAlbum';
import Music from '../Music';

const styleSheet = {
    display: 'flex',
    justifyContent: 'space-between'
}

const styleSheet2 = {
    position: "absolute",
    top: "20%"
}

const styleSheet3 = {
    backgroundColor: "black"
}

const MainPage = ()=> {
    
    return(
        <div style = {styleSheet3}>

            <div style = {styleSheet}>
                <Clock/> 
                <PhotoAlbum  />
            </div>
            <div style={styleSheet2}>
               <TodoList />
            </div>
        </div>
    ); 
}

export default MainPage;