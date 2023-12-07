import "./index.css";
import { Component } from "react";
import Header from "../Header";
import Cookies from "js-cookie";

class MyProfile extends Component {
  state = { myProfileList: [] };

  componentDidMount() {
    this.getMyProfileDetails();
  }

  getMyProfileDetails = async () => {
    const jwtToken = Cookies.get("jwt_token");
    const apiUrl = `https://apis.ccbp.in/insta-share/my-profile`;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const response = await fetch(apiUrl, options);
    if (response.ok === true) {
      const data = await response.json();
      const fetchedData = {
        id: data.profile.id,
        userId: data.profile.user_id,
        userName: data.profile.user_name,
        profilePic: data.profile.profile_pic,
        followersCount: data.profile.followers_count,
        followingCount: data.profile.following_count,
        userBio: data.profile.user_bio,
        posts: data.profile.posts,
        postsCount: data.profile.posts_count,
        stories: data.profile.stories,
      };
      this.setState({ myProfileList: fetchedData });
    }
  };

  renderStories = () => {
    const { myProfileList } = this.state;
    const { stories } = myProfileList;
    return (
      <div>
        <ul className="myprofile-stories-container">
          {stories.map((eachItem) => (
            <li key={eachItem.id}>
              <img
                src={eachItem.image}
                alt="profile-stories-icon"
                className="myprofile-stories-image"
              />
            </li>
          ))}
        </ul>
      </div>
    );
  };

  renderPosts = () => {
    const { myProfileList } = this.state;
    const { posts } = myProfileList;
    return (
      <div>
        <ul className="myprofile-posts-container">
          {posts.map((eachItem) => (
            <li key={eachItem.id}>
              <img
                src={eachItem.image}
                alt="myprofile-posts-icon"
                className="myprofile-posts-image"
              />
            </li>
          ))}
        </ul>
      </div>
    );
  };

  render() {
    const { myProfileList } = this.state;
    const {
      userId,
      userName,
      profilePic,
      followersCount,
      followingCount,
      userBio,
      postsCount,
      posts,
      stories,
    } = myProfileList;

    return (
      <div>
        <Header />
        <div className="all-myprofile-container">
          <div className="myprofile-details-container">
            <img
              src={profilePic}
              alt="myprofile-icon"
              className="myprofile-image"
            />
            <div className="myprofile-header-followers-container">
              <h1 className="myprofile-name">{userName}</h1>
              <div className="myprofile-followers-container">
                <p className="myprofile-followers">
                  {postsCount} <span className="span-element"> posts</span>
                </p>
                <p className="myprofile-followers">
                  {followersCount}
                  <span className="span-element"> followers</span>
                </p>
                <p className="myprofile-followers">
                  {followingCount}
                  <span className="span-element"> followings</span>
                </p>
              </div>
              <p className="myprofile-user-id">{userId}</p>
              <p className="myprofile-user-id">{userBio}</p>
            </div>
          </div>
          {stories === undefined ? null : this.renderStories()}
          <hr className="hr-line" />
          <div className="post-image-container">
            <h1 className="myprofile-posts-users-heading">Posts</h1>
          </div>
          {posts === undefined ? null : this.renderPosts()}
        </div>
      </div>
    );
  }
}
export default MyProfile;
