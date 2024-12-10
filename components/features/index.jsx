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
                <h1>Criação de Sites</h1>
                <p>Desenvolvemos seu site do zero utilizando as tecnologias mais atualizadas que agregam mais velocidade e experiência do usuário ao seu site. Os sites e landingpages são otimizados com palavras chaves ideais para o seu site ser encontrado pelos motores de busca e também são responsivos para dispositivos móveis como smartphones e tablets, o que aumenta o rankeamento do seu site no Google. Os sites são construídos estratégicamente com titulos, textos e chamadas para ação persuasivas e conversoras de venda com o objetivo de converter o visitante  para cliente levando o contato direto ao seu WhatsApp enquanto você faz o de melhor: vender!</p>
            </div>
            <div className={Styles.feature}>
            <Image src={Icon} alt="Icone" className={Styles.icon}/>
            <h1>Gestão de Tráfego Pago</h1>
            <p>Tenha visibilidade na internet e venda para os clientes certos todos os dias na internet com a nossa gestão de tráfego pago. Nós impulsionamos as vendas do seu negócio atráves de anúncios online no Google ADS e Facebook ADS, fazendo com que o cliente ideal para o seu negócio compre seu produto/serviço. Confira qual é o melhor plano para o seu negócio!</p>
            </div>
            <div className={Styles.feature}>
            <Image src={Icon} alt="Icone"/>
            <h1>E-Commerce/Loja Virtual</h1>
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