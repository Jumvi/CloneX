import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FiShare } from "react-icons/fi";


function TweetAction(){
  return(
    <div className="tweet-actions">
      <FaRegComment className="Myicon" />
      <FaRetweet className="Myicon"  />
      <CiHeart className="Myicon"  />
      <FiShare className="Myicon" />   
      
    </div>
  )
}

export default TweetAction;