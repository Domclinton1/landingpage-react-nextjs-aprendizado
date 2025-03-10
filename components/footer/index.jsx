import Styles from "./footer.module.scss";
import Image from "next/image";
import Logo from "/public/images/logo.svg"

const Footer = () => {
    return (
        <div className={Styles.container}>
            <div className={`${Styles.column} ${Styles.columnPrincipal}`}>
                <Image src={Logo} alt="Logo"/>
                <h2>(31) 9 9403-8782</h2>
                <p>impulsodigitalsites@gmail.com</p>
            </div>
            <div className={Styles.column}>
                <h1 className={Styles.title}>MENU</h1>
                <p>Quem somos?</p>
                <p>O que fazemos?</p>
            </div>
            <div className={Styles.column}>
                <h2>REDES SOCIAIS</h2>
                <p>Instagram</p>
                <p>Facebook</p>

            </div>
            <div className={Styles.allRightReserved}>2022 - Impulso Digital Sites - Todos os direitos reservados.</div>
            
        </div>
    )
}

export default Footer;