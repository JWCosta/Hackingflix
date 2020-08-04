import React from "react";
import dadosIniciais from "../../data/dados_iniciais.json";
import Menu from "../../components/menu";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={
          "O Que Linux? Um sistema operacional concorrente de Windows e macOS? O que é Kernel? Onde Linux é utilizado? Que empresas utilizam a ferramenta? É uma tecnologia open source e gratuita? Tudo isso e muito mais no vídeo sobre a definição de Linux para leigos e iniciantes."
        }
      />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
      <Carousel category={dadosIniciais.categorias[1]} />
      <Carousel category={dadosIniciais.categorias[2]} />
      <Carousel category={dadosIniciais.categorias[3]} />
      <Carousel category={dadosIniciais.categorias[4]} />
      <Carousel category={dadosIniciais.categorias[5]} />
      <Carousel category={dadosIniciais.categorias[6]} />

      <Footer />
    </div>
  );
}

export default Home;
