import photo1 from "../assets/images/inspire1.png";
import photo2 from "../assets/images/inspire2.png";
import photo3 from "../assets/images/inspire3.png";



const initialstate = {
    slides: [
     {
         id:1,
         url: photo1,
         title:"How to create a living room to love",
         subtitle:"20 jan 2020"
     },
     {
        id:2,
        url: photo2,
        title:"Solution for clean look working space",
        subtitle:"10 jan 2020"
    },
    {
        id:3,
        url: photo3,
        title:"Make your cooking activity  more fun with good setup",
        subtitle:"20 jan 2020"
    },

    {
        id:4,
        url: photo2,
        title:"How to create a living room to love",
        subtitle:"20 jan 2020"
    },

    {
        id:5,
        url: photo3,
        title:"How to create a living room to love",
        subtitle:"20 jan 2020"
    },
   
    ],
  };


  const sliderPage=(state=initialstate,action)=>{
      return state
  }


  export default sliderPage