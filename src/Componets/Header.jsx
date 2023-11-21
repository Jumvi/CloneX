import Home from "./LinkHome";
import Toptweet from "./TopTweet";


function MyHeader() {
  return ( <>
    <header className="header">
      <Home />
      <Toptweet />
    </header>

    <hr />
  </>
  
  )
}

export default MyHeader;