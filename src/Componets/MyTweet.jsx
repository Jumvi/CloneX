import TweetAvatar from './TweetAvatar';
import TweetContent from './TweetContent';
import TweetTitleDetails from './TweetTitleDetails';
import TweetTiltleAuther from './TweetTitleAuthor';


function MyTweet({ avatar,title,text,src}) {
  return (
    <div className="tweet">
      <TweetAvatar src={avatar} alt=""  />
      <TweetContent title={title} text={text} src={src} />
     
    </div>
  );
}

export default MyTweet;