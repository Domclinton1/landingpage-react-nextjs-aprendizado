import Styles from "./select.module.scss";

const Select = ({placeholder, required, options}) => {
    return (
        <select className={Styles.select} required={required}>
            <option value="Site Institucional">Site Institucional</option>
            <option value="Landing Page Profissional">Landing Page Profissional</option>
            <option value="E-commerce">E-Commerce/Loja Virtual</option>
            <option value="Sistema de Delivery">Sistema de Cardápio Online</option>
            <option value="Gestão de Tráfego Pago">Gestão de Tráfego Pago/Anúncios</option>
        {
            options?.map((option, index) => {
                <option key={index} value={option.value}>{option.label}</option> 
            })
        }
        </select>
    )
}

export default Select;
