import TweetButtonConteneur from "./TweetEditorButtonContener";
import TweetImput from "./TweetEditorImput";

function TweetEditorForm() {
  return (
    <div className="tweet-editor-form">
      <form>
        <TweetImput />
        <TweetButtonConteneur />
        
      </form>
      
      
    </div>
  )
}
export default TweetEditorForm;