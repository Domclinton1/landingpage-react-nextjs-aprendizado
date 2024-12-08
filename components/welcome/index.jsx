import Styles from "./welcome.module.scss";
import Button from "../button";
import BannerWelcome from "/public/images/bannerWelcome.svg";
import Image from "next/image";

const Welcome = () => {
    return <div className={Styles.container}>
        <div className={Styles.text}>
            <h1>Desenvolvimento de Sites Profissionais</h1>
            <p>Desenvolvemos seu site profissional a partir de R$597,00</p>
            <Button title="Quero um site profissional" kind="secundary"/>
        </div>
        <div className={Styles.image}>
            <Image src={BannerWelcome} alt="Banner Welcome"/>
         
        </div>
    </div>
}

export default Welcome;