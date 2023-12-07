import "./index.css";
import { Component } from "react";
import Slider from "react-slick";

// const companyLogosData = [
//   {
//     id: "d14af630-5d22-4bfb-85dd-bb507b139b82",
//     company_logo_url:
//       "https://res.cloudinary.com/do4qwwms8/image/upload/v1639475819/Company%20Logos%20/netflix-img_keqbbh.png",
//   },
//   {
//     id: "0a932287-8002-4fc8-95d1-8cbed3224e37",
//     company_logo_url:
//       "https://res.cloudinary.com/do4qwwms8/image/upload/v1639475818/Company%20Logos%20/facebook-img_fxqbxv.png",
//   },
//   {
//     id: "8211ce0c-d7dc-4d2b-8468-5e48ad9ae985",
//     company_logo_url:
//       "https://res.cloudinary.com/do4qwwms8/image/upload/v1639475818/Company%20Logos%20/google-img_cnnaol.png",
//   },
//   {
//     id: "daa48153-3f16-4797-8469-5d63c9cba938",
//     company_logo_url:
//       "https://res.cloudinary.com/do4qwwms8/image/upload/v1639475818/Company%20Logos%20/zomato-img_gb1k9w.png",
//   },
//   {
//     id: "2f4b518e-29b3-45c3-a7a5-80929f7898d9",
//     company_logo_url:
//       "https://res.cloudinary.com/do4qwwms8/image/upload/v1639475818/Company%20Logos%20/swiggy-img_jgxg6g.png",
//   },
//   {
//     id: "895b9b4d-a283-4ee1-9fb8-933a3c4b449c",
//     company_logo_url:
//       "https://res.cloudinary.com/do4qwwms8/image/upload/v1639475818/Company%20Logos%20/amazon-img_yvggab.png",
//   },
//   {
//     id: "a8c67fd0-bab9-46ec-95de-cbfa2e3473f6",
//     company_logo_url:
//       "https://res.cloudinary.com/do4qwwms8/image/upload/v1639475818/Company%20Logos%20/flipkart-img_cb70ic.png",
//   },
// ];

const settings = {
  dots: false,
  infinite: false,
  slidesToShow: 8,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 8,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 7,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 512,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

class UserStories extends Component {
  renderSlider = () => {
    return (
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  };

  render() {
    return <div className="user-stories-container">{this.renderSlider()}</div>;
  }
}

export default UserStories;
