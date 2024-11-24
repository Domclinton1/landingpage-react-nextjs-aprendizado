import Styles from "./welcome.module.scss";
import Button from "../button";

const Welcome = () => {
    return <div className={Styles.container}>
        <div className={Styles.text}>
            <h1>Desenvolvimento de Sites Profissionais</h1>
            <p>Desenvolva seu site a partir de R$597,00</p>
            <Button title="Quero um site profissional" kind="secundary"/>
        </div>
        <div className={Styles.image}>

        </div>
    </div>
}

export default Welcome;