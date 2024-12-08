import Image from "next/image";
import Styles from "./features.module.scss"
import Icon from "/public/images/icon.svg"
const Features = () => {
    return (

        <div className={Styles.container}>
        <h1>Por que a Impulso Digital é a opção certa a escolher quando se trata de Soluções Digitais: </h1>
        <p>Somos especializados em desenvolvimento web e marketing, construindo sites, landingpages, e-commerce e gestão de tráfego pago!</p>

        <div className={Styles.features}> 
            <div className={Styles.feature}>
                <Image src={Icon} alt="Icone" className={Styles.icon}/>
                <h1>Estratégia Digital</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam sapiente, temporibus cumque itaque repellendus laudantium repellat iure recusandae et modi sequi nemo numquam quod dolorum reiciendis eum fugit placeat consequuntur.</p>
            </div>
            <div className={Styles.feature}>
            <Image src={Icon} alt="Icone" className={Styles.icon}/>
            <h1>Desenvolvimento Web</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam sapiente, temporibus cumque itaque repellendus laudantium repellat iure recusandae et modi sequi nemo numquam quod dolorum reiciendis eum fugit placeat consequuntur.</p>
            </div>
            <div className={Styles.feature}>
            <Image src={Icon} alt="Icone"/>
            <h1>Estratégia Digital</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam sapiente, temporibus cumque itaque repellendus laudantium repellat iure recusandae et modi sequi nemo numquam quod dolorum reiciendis eum fugit placeat consequuntur.</p>
            </div>
            <div className={Styles.feature}>
            <Image src={Icon} alt="Icone"/>
            <h1>Estratégia Digital</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam sapiente, temporibus cumque itaque repellendus laudantium repellat iure recusandae et modi sequi nemo numquam quod dolorum reiciendis eum fugit placeat consequuntur.</p>
            </div>
        </div>
        </div>
        
    )
}

export default Features;