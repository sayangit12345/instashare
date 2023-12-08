import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Slider from 'react-slick'

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
}

class UserStories extends Component {
  state = {storyList: []}

  componentDidMount() {
    this.getUserStoriesData()
  }

  getUserStoriesData = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/insta-share/stories'
    const option = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, option)
    if (response.ok === true) {
      const data = await response.json()
      const fetchedData = data.users_stories.map(eachItem => ({
        userId: eachItem.user_id,
        userName: eachItem.user_name,
        storyUrl: eachItem.story_url,
      }))
      this.setState({storyList: fetchedData})
    }
  }

  renderSlider = () => {
    const {storyList} = this.state

    return (
      <Slider {...settings}>
        {storyList.map(eachLogo => {
          const {userId, userName, storyUrl} = eachLogo
          return (
            <div className="slick-item" key={userId}>
              <img className="logo-image" src={storyUrl} alt="company logo" />
              <p className="logo-heading">{userName}</p>
            </div>
          )
        })}
      </Slider>
    )
  }

  render() {
    return (
      <div className="main-container">
        <div className="slick-container">{this.renderSlider()}</div>
      </div>
    )
  }
}

export default UserStories
