import Link from "next/link";
import Styles from "./contato.module.scss";
import Button from "../button";
import Input from "../input";
import Select from "../select";



const Contato = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.texts}>
                <span>ENTRE EM CONTATO</span>
                <h1>Destaque sua empresa na internet e aumente suas vendas!</h1>
                <p>Precisa de um site, landing page ou e-commerce e até mesmo uma gestão de tráfego pago para aumentar as vendas da sua empresa?</p>
            </div>
            <div className={Styles.form}>
                <h1>Fale com um especialista</h1>
                <form>
                <Input type="text" placeholder="Digite seu nome completo" required/>
                <Input type="email" placeholder="Digite seu endereço de email" required/>
                <Input type="text" placeholder="Digita seu Celular/Whatsapp" required pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"/>
                <Select placeholder="O que precisa?" options={[
                    {label: "Site Institucional", value: "Site Institucional"},
                    {label: "Landing Page", value: "LandingPage Profissional"},
                    {label: "E-commerce", value: "E-commerce/Loja Virtual"},
                    {label: "Sistema de Cardápio Online", value: "Sistema de Cardápio Online"},
                    {label: "Gestão de Tráfego Pago", value: "Gestão de Tráfego Pago/Anúncios"}
                ]} required/>

                <Input type="text" placeholder="Orçamento para serviço" required />

                <Button title="Enviar" kind="full" />
                </form>
                
                <p className={Styles.footer}>Ao enviar esse formulário, você reconhece que leu e concorda com a nossa <Link href="/" >
                <strong>Politica de Privacidade</strong></Link></p>
            
            </div>
            
        </div>
    )
}

export default Contato;