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
                    <div className={Styles.featureTitle}>
                    <Image src={Icon} alt="Icone" className={Styles.icon}/>
                    <h1>Criação de Sites</h1>
                    </div>
                    <p>Desenvolvemos seu site do zero utilizando as tecnologias mais atualizadas que agregam mais velocidade e experiência do usuário ao seu site. Os sites e landingpages são otimizados com palavras chaves ideais para o seu site ser encontrado pelos motores de busca e também são responsivos para dispositivos móveis como smartphones e tablets, o que aumenta o rankeamento do seu site no Google. Os sites são construídos estratégicamente com titulos, textos e chamadas para ação persuasivas e conversoras de venda com o objetivo de converter o visitante  para cliente levando o contato direto ao seu WhatsApp enquanto você faz o de melhor: vender!</p>
                </div>
                <div className={Styles.feature}>
                    <div className={Styles.featureTitle}>
                        <Image src={Icon} alt="Icone" className={Styles.icon}/>
                        <h1>Gestão de Tráfego Pago</h1>
                    </div>
                    <p>Tenha visibilidade na internet e venda para os clientes certos todos os dias na internet com a nossa gestão de tráfego pago. Nós impulsionamos as vendas do seu negócio atráves de anúncios online no Google ADS e Facebook ADS, fazendo com que o cliente ideal para o seu negócio compre seu produto/serviço. Confira qual é o melhor plano para o seu negócio!</p>
                </div>
                <div className={Styles.feature}>
                    <div className={Styles.featureTitle}>
                        <Image src={Icon} alt="Icone"/>
                        <h1>E-Commerce/Loja Virtual</h1>
                    </div>
                    <p>Tem uma loja fisica e quer expandir seu negócio tendo mais visibilidade online? Adquira uma loja virtual e tenha visibilidade na internet aumentando o seu volume de vendas e expandindo a sua área de atendimento! Com um E-Commerce a sua empresa ganha mais credibilidade, profissionalismo e maior alcance geográfico permitindo vender para clientes de outras cidades, estados e países do mundo inteiro.</p>
                </div>
                <div className={Styles.feature}>
                    <div className={Styles.featureTitle}>
                        <Image src={Icon} alt="Icone"/>
                        <h1>Aplicativos Mobile</h1>
                    </div>
                    <p>Desenvolvemos aplicativos móveis sob medida para o seu negócio, entregando soluções modernas e funcionais que conectam você diretamente ao seu público. Com um app exclusivo, você potencializa suas vendas, melhora a experiência do cliente e se destaca no mercado. Seja para Android, iOS ou ambos, criamos aplicativos com design intuitivo, alta performance e totalmente alinhados às suas necessidades. Não perca mais tempo, dê o próximo passo na inovação e veja seu negócio crescer com um app mobile!</p>
                </div>
            </div>
        </div>
        
    )
}

export default Features;