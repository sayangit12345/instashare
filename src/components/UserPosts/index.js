import Cookies from 'js-cookie'
import './index.css'
import {Component} from 'react'
import PostItems from '../postItems'

class UserPosts extends Component {
  state = {postList: []}

  componentDidMount() {
    this.getUserPostData()
  }

  getUserPostData = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/insta-share/posts'
    const option = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, option)
    if (response.ok === true) {
      const data = await response.json()
      const fetchedData = data.posts.map(eachItem => ({
        postId: eachItem.post_id,
        userId: eachItem.user_id,
        userName: eachItem.user_name,
        profilePic: eachItem.profile_pic,
        postDetails: eachItem.post_details,
        likesCount: eachItem.likes_count,
        comments: eachItem.comments,
        createdAt: eachItem.created_at,
      }))
      this.setState({postList: fetchedData})
    }
  }

  render() {
    const {postList} = this.state
    return (
      <ul className="user-posts-list-container">
        {postList.map(eachMap => (
          <PostItems postItemDetails={eachMap} key={eachMap.postId} />
        ))}
      </ul>
    )
  }
}

export default UserPosts
