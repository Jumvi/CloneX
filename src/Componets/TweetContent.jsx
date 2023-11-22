
import TweetActionConteneur from './TweetActionConteneur';
import TweeBody from './TweetBody';



function TweetContent({title,text,src}) {
  return (
    <div className="tweet-content">
      <TweeBody title = {title} text = {text} src={src} />

 
      <TweetActionConteneur />
    </div>
  )
}

export default TweetContent;