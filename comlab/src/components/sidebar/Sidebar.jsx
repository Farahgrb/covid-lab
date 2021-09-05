import "./sidebar.css";
import {RssFeed,Today,Bookmark,EmojiObjects,VideoLibrary,LibraryBooks, Link} from "@material-ui/icons"
import { Users } from "../../usefullData";
import CloseFriend from "../closeFriend/CloseFriend";
import {format} from "timeago.js";



export default function Sidebar({connexion}) {
    
    
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                     <li className="sidebarListItem">
                        <Link className="sidebarIcon"/>
                        <span className="sidebarListItemText" >Connection Time:</span>
                        <span className="postDate">{format(connexion?.createdAt)}</span>
                    </li>
                    <li className="sidebarListItem">
                        <LibraryBooks className="sidebarIcon"/>
                        <span className="sidebarListItemText" >Library</span>
                    </li>
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText" >Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Today className="sidebarIcon"/>
                        <span className="sidebarListItemText" >Schedule</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon"/>
                        <span className="sidebarListItemText" >Bookmark</span>
                    </li>
                    <li className="sidebarListItem">
                        <EmojiObjects className="sidebarIcon"/>
                        <span className="sidebarListItemText" >Ideas</span>
                    </li>
                    <li className="sidebarListItem">
                        <VideoLibrary className="sidebarIcon"/>
                        <span className="sidebarListItemText" >videos</span>
                    </li>
                </ul>
                
               <button type="button" class="btn btn-secondary">Show More</button> {``}
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
                
            </div>
        </div>
    )
}
