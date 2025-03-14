import styles from "./Home.module.scss";
import Header from "@/components/header";
import Welcome from "@/components/welcome";
import Features from "@/components/features";
import Contato from "@/components/contato";
import Portifolio from "@/components/portifolio";
import Footer from "@/components/footer";

export default function Home(){
  return <div className={styles.container}>
    <Header/>
    <Welcome/>
    <Features/>
    <Portifolio/>
    <Contato/>
    <Footer/>
  </div>;
}
