import Tweets from './AllTweets';
import MyHeader from './Header';
import TweetEditor from "./TweetEditor";





function Acceuil() {
  return (
    <div className="timeline">
      <MyHeader />
      <TweetEditor />
      <Tweets />
    </div>
  )
}

export default Acceuil;
