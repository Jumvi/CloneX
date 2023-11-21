import { useState } from "react";


function TweetImage({src,onChange}){
  
  return(<div>
     <img src = {src} alt="" onChange={onChange}/>
  </div>)
  
  
}

export default TweetImage;