import Like from './like.svg'
import Comment from './comment.svg'
import './index.scss'

export const LastCommentsHeader = () => (
  <div className='lastCommentHeaderWrapper'>
    <div>
      <h3>Последние отзывы</h3>
      <a href="#">Все отзывы</a>
    </div>
    <div className='icons'>
      <span>
        <img src={Like} alt="like" />
        <p>131</p>
      </span>
      <span>
        <img src={Comment} alt="comment" />
        <p>14</p>
      </span>
    </div>
  </div>
)