
import Avatar from "./Avatar";

function TweetAvatar({src}) {
 
  return (<>
    <div className="tweet-avatar">
       <img src={src} alt="" className='monAvatar'/>
    </div>
  </>

  )
}

export default TweetAvatar;