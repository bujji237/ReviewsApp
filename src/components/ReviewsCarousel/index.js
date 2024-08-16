import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {changedIndex: 0}

  render() {
    const {reviewsList} = this.props

    const {changedIndex} = this.state
    const {imgUrl, username, companyName, description} =
      reviewsList[changedIndex]

    const onClickedLeftArrowBtn = () => {
      const index = reviewsList.findIndex(each => each.username === username)
      let newIndex = index - 1
      if (index === 0) {
        newIndex = index
      }
      this.setState({
        changedIndex: newIndex,
      })
    }

    const onClickedRightArrowBtn = () => {
      const index = reviewsList.findIndex(each => each.username === username)
      let newIndex = index + 1
      if (index === reviewsList.length - 1) {
        newIndex = index
      }
      this.setState({
        changedIndex: newIndex,
      })
    }

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} className="image" />
        <p className="name">{username}</p>
        <div className="arrows-container">
          <button
            type="button"
            className="left-arrow-btn arrow-btn"
            onClick={onClickedLeftArrowBtn}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="left-arrow"
            />
          </button>
          <button
            className="right-arrow-btn arrow-btn"
            type="button"
            onClick={onClickedRightArrowBtn}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="right-arrow"
            />
          </button>
        </div>
        <div className="review-container">
          <p className="company-name info">{companyName}</p>
          <p className="review-description info">{description}</p>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
