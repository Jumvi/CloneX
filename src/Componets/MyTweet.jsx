import TweetAvatar from './TweetAvatar';
import TweetContent from './TweetContent';
import TweetTitleDetails from './TweetTitleDetails';
import TweetTiltleAuther from './TweetTitleAuthor';


function MyTweet() {
  return (
    <div className="tweet">
      <TweetAvatar src='https://img.freepik.com/psd-gratuit/illustration-3d-personne-lunettes-soleil_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.2.969719602.1686487249&semt=ais' alt=""  />
      <TweetContent />
     
    </div>
  );
}

export default MyTweet;