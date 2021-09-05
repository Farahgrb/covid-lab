import "./rightbar.css";
import { useContext,  useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@material-ui/icons";


export default function Rightbar({ user }) {
  
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?._id)
  );
 

   const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {
    }
  };


   
   
    const HomeRightbar =()=>{
        return(
            <>
            
                <div className="temoignageContainer">
                    <div className="title">Temoignage:</div>
                    <br/>
                    <img src="/assets/star1.png" alt="" className="temoignageImg" />
                    <span className="temoignageText">
                        <b>Wahidda dridi</b> was a great Dr</span>
                </div>
                <img src="assets/global-map.jpg" alt="" className="covidMap" />

                
            </>
        );
    };
    const ProfileRightbar = ()=>{
        return(
        <>
        {user.username !== currentUser.username && (
          <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
         <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
               <div className="rightbarInfoItem">
                 <span className="rightbarInfoKey">Position :</span>
                 <span className="rightbarInfoValue">{user.position}</span>
               </div>
            <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">Studies:</span>
                  <span className="rightbarInfoValue">{user.studies}</span>
            </div>
            <div className="rightbarInfoItem">
                 <span className="rightbarInfoKey">Research Stage:</span>
                 <span className="rightbarInfoValue">{user.researchStage}</span>
            </div>
            </div>
        </>)
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
               {user ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}
