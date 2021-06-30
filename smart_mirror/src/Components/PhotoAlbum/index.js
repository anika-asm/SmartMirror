import React, {useState,useEffect} from 'react'; 
import image1 from './album/1.jpg'
import image2 from './album/2.jpg'
import image3 from './album/3.png'
import image4 from './album/4.png'
import image5 from './album/5.png'
import image6 from './album/6.png'
import image7 from './album/7.jpg'
import image8 from './album/8.JPG'
import image9 from './album/9.JPG'
import image10 from './album/10.JPG'

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10]

const styleSheet = {
    color:"Pink",
    paddingRight: '150px'
}

const styleSheet2 = {
    height: "400px",
    width: "auto"
}

const styleSheet3 = {
    display: "flex",
    justifyContent: "space-between"
}

const PhotoAlbum = (props)=>{
    const[index, setIndex] = useState(0);
    const interval = setInterval(()=>{setIndex(index+1)},10000)
    useEffect(()=>{
        // returning a function in the useEffect acts as a cleanup function for the component. 
        //If the component were to unmount (be removed from the screen) it will run this function
        return ()=>{
            clearInterval(interval); // this stops the inteval function above from being run
        }
    },[]); 
    return(
        <div>
            <h1 style={styleSheet}>
                Photo Album!
            </h1>
            <img style={styleSheet2} src = {images[index]} />
        </div>);

}

export default PhotoAlbum;