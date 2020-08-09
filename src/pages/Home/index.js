import React, { useEffect, useState } from "react";
import PageDefault from "../../components/PageDefault";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import repositories from "../../repositories/categorias";
import Loading from "../../components/Loading";

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    repositories
      .getAllVideos()
      .then((categoriasAndVideos) => {
        setDadosIniciais(categoriasAndVideos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && <Loading />}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={
                  "O Que Linux? Um sistema operacional concorrente de Windows e macOS? O que é Kernel? Onde Linux é utilizado? Que empresas utilizam a ferramenta? É uma tecnologia open source e gratuita? Tudo isso e muito mais no vídeo sobre a definição de Linux para leigos e iniciantes."
                }
              />
              <Carousel ignoreFirstVideo category={dadosIniciais[0]} />
            </div>
          );
        }

        return <Carousel key={categoria.id} category={categoria} />;
      })}
    </PageDefault>
  );
}

export default Home;
