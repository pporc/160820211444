import { useState, useContext, useEffect } from 'react'
import { ContextApp } from '../../store'
import { Comment } from './Comment'

export const LastComments = () => {
  const { state } = useContext(ContextApp);
  const [data, setData] = useState(state)

  useEffect(() => {
    setData(state.messages);
  }, [state]);

  return (
    <ul className='commentsList'>
      {data.length > 0
          ? data.map((item, index) => (
        <li key={index}>
          <Comment name={item.name} date={item.date} msg={item.msg}/>
        </li>
      )) : ''}
    </ul>
  )
}