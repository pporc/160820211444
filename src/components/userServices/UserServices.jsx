import './index.scss'
export const UserServices = () => (
  <table>
    <thead>
      <tr>
        <td></td>
        <td>Услуг</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span style={{maxWidth: '219px', backgroundColor: '#b1e19b'}}>Ручное бронирование</span></td>
        <td>11</td>
      </tr>
      <tr>
        <td><span style={{maxWidth: '54px', backgroundColor: '#ACE2F8'}}>Пакетные туры</span></td>
        <td>3</td>
      </tr>
      <tr>
        <td><span style={{maxWidth: '36px', backgroundColor: '#ACE2F8'}}>Отели</span></td>
        <td>1</td>
      </tr>
    </tbody>
    <tfoot>
      <tr><td>Всего</td><td>15</td></tr>
    </tfoot>
  </table>
)