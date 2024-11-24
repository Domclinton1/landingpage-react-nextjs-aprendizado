import Image from "next/image";
import Logo from "/public/images/logo.svg";
import Link from "next/link";
import Styles from "./header.module.scss"

const Header = () => {
    return <div className={Styles.container}>
        <div className={Styles.logotipo}>
            <Image src={Logo}/>
        </div>
        <div className={Styles.menu}>
            <ul>
                <li><Link href="/"/>Home</li>
                <li><Link href="/"/>O que fazemos</li>
                <li><Link href="/"/>Cases</li>
            </ul>
        </div>
        <div className={Styles.action}>
            <button>Fale conosco</button>
        </div>
    </div>;
};

export default Header;
