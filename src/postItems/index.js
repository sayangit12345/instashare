import "./index.css";
import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import { BiShareAlt } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";

const PostItems = (props) => {
  const { postItemDetails } = props;
  const {
    // postId,
    userId,
    userName,
    profilePic,
    postDetails,
    likesCount,
    comments,
    createdAt,
  } = postItemDetails;
  return (
    <li className="post-list-items">
      <div className="user-pic-and-name-container">
        <img src={profilePic} alt="user-icon" className="user-image" />
        <Link to={`/users/${userId}`} className="link-user-profile">
          <p className="user-post-name">{userName}</p>
        </Link>
      </div>
      <img src={postDetails.image_url} alt="post-icon" className="posts" />
      <div className="like-comment-share-container">
        <BsHeart className="icons" />
        <FaRegComment className="icons" />
        <BiShareAlt className="icons" />
      </div>
      <div className="all-comments-container">
        <p className="likes">{likesCount} Likes</p>
        <p className="captions">{postDetails.caption} Likes</p>
      </div>
      <ul className="comments-container">
        {comments.map((eachMap) => (
          <li key={eachMap.user_id}>
            <p className="comments">
              <span className="comment-username">{eachMap.user_name} </span>
              {eachMap.comment}
            </p>
          </li>
        ))}
      </ul>
      <p className="time">{createdAt}</p>
    </li>
  );
};

export default PostItems;
