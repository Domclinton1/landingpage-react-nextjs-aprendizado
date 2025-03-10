import Styles from "./portifolio.module.scss";
import Button from "../button";
import Image from "next/image";

const Portifolio = () => {
    return (
        <div className={Styles.container}>
            <h1>Portifolio</h1>
            <p>Confira nossos serviços recentes:</p>

            <div className={Styles.portifolio}>
                <div className={Styles.service}>
                    <Image />
                    <h2>Vidraçaria Vidrosa</h2>

                    <Button title="Ver aplicação"/>
                </div>
                <div className={Styles.service}>
                    <h2>Wedson Construções</h2>
                    <Button title="Ver aplicação"/>
                </div>
                <div className={Styles.service}>
                    <h2>Vidraçaria GM Glass</h2>
                    <Button title="Ver aplicação"/>
                </div>
                <div className={Styles.service}>
                    <h2>DNB Luxemburgo</h2>
                    <Button title="Ver aplicação"/>
                </div>
                <div className={Styles.service}>
                    <h2>FCE Serralheria</h2>
                    <Button title="Ver aplicação"/>
                </div>
                <div className={Styles.service}>
                    <h2>FC Telecom</h2>
                    <Button title="Ver aplicação"/>
                </div>
                <div className={Styles.service}>
                    <h2>TF Telecom</h2>
                    <Button title="Ver aplicação"/>
                </div>
                <div className={Styles.service}>
                    <h2>International Car Services</h2>
                    <Button title="Ver aplicação"/>
                </div>
                <div className={Styles.service}>
                    <h2>Sistema de Cardápio Online</h2>
                    <Button title="Ver aplicação"/>
                </div>
                <div className={Styles.service}>
                    <h2>Card Profissional Online</h2>
                    <Button title="Ver aplicação"/>
                </div>

            </div>
        </div>
    )
}
export default Portifolio;