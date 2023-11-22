import TweetTitle from './TweetTitle';
import TweetText from './TweetText';
import TweetImage from './TweetImage';

function TweeBody({title,text,src}) {
  return ( <>
    <div className="tweet-body">
      <TweetTitle title ={title} /> 
      <TweetText text = {text} />
      <TweetImage src = {src} />
    </div>
    </>
    
  )
}

export default TweeBody;