import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { IoStatsChartOutline } from "react-icons/io5";
import { FaRegSmile } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";



function MyEditorActions() {
  return (
    <div className="tweet-editor-actions">
      <CiImageOn className="icon" />
      <MdOutlineGifBox className="icon"/>
      <IoStatsChartOutline className="icon" />
      <FaRegSmile className="icon" />
      <LuCalendarClock className="icon" />
    </div>
  )
}

export default MyEditorActions;