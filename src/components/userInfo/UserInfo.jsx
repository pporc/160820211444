import avatar from './photo.png'
import './index.scss'
import { UserServices } from '../userServices/UserServices'

export const UserInfo = () => (
  <div className='userInfo'>
    <img src={avatar} alt="Вероника Ростова" />
    <div className='description'>
      <h3>Вероника Ростова</h3>
      <p className='subtitle'>Менеджер по продажам</p>
      <p className='text'>Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны</p>
      <UserServices/>
    </div>
  </div>
);
