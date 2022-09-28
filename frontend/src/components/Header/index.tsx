import logo from '../../assets/img/logo-bibliotecaUnit.png'
import './style.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
            </div>
        </header>
    )
}

export default Header