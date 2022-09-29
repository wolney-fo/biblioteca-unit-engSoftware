import logo from '../../assets/img/logo-grupoTiradentes.png'
import './style.css'

function Footer() {
    return (
        <footer>
            <a href="https://www.grupotiradentes.com/" target="_blank">
            <div className="unit-logo-container">
            <img src={logo} alt="Grupo Tiradentes" />
        </div>
        </a>
        </footer>
    )
}

export default Footer