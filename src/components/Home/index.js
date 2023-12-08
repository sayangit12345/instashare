import './index.css'
import Header from '../Header'
import UserPosts from '../UserPosts'
import UserStories from '../UserStories'

const Home = () => (
  <div className="home-container">
    <Header />
    <UserStories />
    <UserPosts />
  </div>
)

export default Home
