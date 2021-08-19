import './index.scss'

export const Comment = (props) => (
  <div className='commentWrapper'>
    <header>
      <p>{props.name}</p>
      <span>{props.date}</span>
    </header>
    <p className='message'>{props.msg}</p>
  </div>
)