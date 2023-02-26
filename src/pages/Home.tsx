import Rocketlogo from '../assets/logo-mobile.svg'
import TogglerMenu from '../assets/menu-buguer-open.svg'
import CoffeeBackground from '../assets/rocket-coffee.png'

import { Button } from '../components/Button'

import './styles.scss';

export function Home(){
  return (
    <div>
      <section>
        <header>
          <div>
            <img src={Rocketlogo} alt="rocketseat logo"/>
            <div className="toggler-menu">
              <img src={TogglerMenu} alt="Menu Hamburguer"/>
            </div>
          </div>
        </header>

        <main>
          <div>
            <h2>O café que fará seu código decolar para o próximo nível.</h2>
            <Button />
            <div>
              <h1>Great Coffee</h1>
              <span className='coffee-stroke'></span>
            </div>
            <img src={CoffeeBackground} alt="Coffee background" />
          </div>
        </main>
      </section>
    </div>
  )
}