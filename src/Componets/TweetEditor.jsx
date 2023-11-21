import Avatar from "./Avatar.jsx";
import TweetEditorForm from "./TweetEditorForm.jsx";



function TweetEditor() {
  return (
    <>
      <div className="tweet-editor">
        <div>
           <Avatar src= 'https://img.freepik.com/psd-gratuit/illustration-3d-personne-lunettes-soleil_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.2.969719602.1686487249&semt=ais'  />   
        </div>
        <div>
         <TweetEditorForm />
        </div>

      </div>
      <hr />
    </>
    
   
  )
}

export default TweetEditor;