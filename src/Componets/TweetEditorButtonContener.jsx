import MyButton from "./TweetButton";
import MyEditorActions from "./TweetEditorAction";


function TweetButtonConteneur({}) {
  function handelOnClick(e){
    e.preventDefault();
  }
  
  return (
    <div className="tweet-editor-buttons">
      <MyEditorActions />
      <MyButton onClick = {handelOnClick} />
    </div>
  )
}

export default TweetButtonConteneur;