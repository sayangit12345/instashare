import './index.css'
import Cookies from 'js-cookie'
import {Component} from 'react'
import Header from '../Header'

class UserProfile extends Component {
  state = {profileList: []}

  componentDidMount() {
    this.getProfileDetails()
  }

  searchInputValue = value => {
    console.log(value)
  }

  getProfileDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {userId} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/insta-share/users/${userId}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const fetchedData = {
        id: data.user_details.id,
        userId: data.user_details.user_id,
        userName: data.user_details.user_name,
        profilePic: data.user_details.profile_pic,
        followersCount: data.user_details.followers_count,
        followingCount: data.user_details.following_count,
        userBio: data.user_details.user_bio,
        postsCount: data.user_details.posts_count,
        posts: data.user_details.posts,
        stories: data.user_details.stories,
      }
      this.setState({profileList: fetchedData})
    }
  }

  renderStories = () => {
    const {profileList} = this.state
    const {stories} = profileList
    return (
      <div>
        <ul className="user-profile-stories-container">
          {stories.map(eachItem => (
            <li key={eachItem.id}>
              <img
                src={eachItem.image}
                alt="profile-stories-icon"
                className="profile-stories-image"
              />
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderPosts = () => {
    const {profileList} = this.state
    const {posts} = profileList
    return (
      <div>
        <ul className="user-profile-posts-container">
          {posts.map(eachItem => (
            <li key={eachItem.id}>
              <img
                src={eachItem.image}
                alt="profile-posts-icon"
                className="profile-posts-image"
              />
            </li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {profileList} = this.state
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
    } = profileList

    return (
      <div>
        <Header searchInputValue={this.searchInputValue} />
        <div className="all-details-container">
          <div className="user-profile-details-container">
            <img
              src={profilePic}
              alt="profile-icon"
              className="profile-image"
            />
            <div className="user-profile-followers-container">
              <h1 className="user-profile-name">{userName}</h1>
              <div className="followers-container">
                <p className="followers">
                  {postsCount} <span className="span-element"> posts</span>
                </p>
                <p className="followers">
                  {followersCount}
                  <span className="span-element"> followers</span>
                </p>
                <p className="followers">
                  {followingCount}
                  <span className="span-element"> followings</span>
                </p>
              </div>
              <div>
                <p className="user-id">{userId}</p>
                <p className="user-id">{userBio}</p>
              </div>
            </div>
          </div>
          {stories === undefined ? null : this.renderStories()}
          <hr className="hr-line" />
          <div className="post-image-container">
            <img
              src="https://res.cloudinary.com/duiooro44/image/upload/v1702013335/Frame_1420_bk07nt.png"
              alt="posts-icon"
              className="post-image"
            />
            <h1 className="posts-users-heading">Posts</h1>
          </div>
          {posts === undefined ? null : this.renderPosts()}
        </div>
      </div>
    )
  }
}
export default UserProfile
