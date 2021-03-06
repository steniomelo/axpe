import React, { Fragment, Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import Helmet from 'react-helmet';
import { scroller } from 'react-scroll';

// assets
import aboutHeaderMobile from 'images/tmp/about-header-mobile.png';
import aboutHeaderDesktop from 'images/tmp/about-header-desktop.png';
import aboutSection1Desktop from 'images/about/about-section1-desktop.png';
import aboutSection2Desktop from 'images/about/about-section2-desktop.png';
import aboutSection3Desktop from 'images/about/about-section3-desktop.png';
import aboutSection5Desktop from 'images/about/about-section5-desktop.png';
import aboutSection6Desktop from 'images/about/about-section6-desktop.png';
import aboutSection7Desktop from 'images/about/about-section7-1-desktop.png';
import aboutSection7Desktop2 from 'images/about/about-section7-2-desktop.png';
import aboutSection8Desktop from 'images/about/about-section8-desktop.png';
import aboutSection9Mobile from 'images/about/about-section9-mobile.png';
import aboutSection10Desktop from 'images/about/about-section10-desktop.png';
import aboutSection11Desktop from 'images/about/about-section11-desktop.png';

class About extends Component {
  scrollTo(section) {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -150
    });
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Sobre</title>
          <meta name="description" content="description here" />
          <meta name="keywords" content="word, here" />
          <meta property="og:title" content="Sobre" />
          <meta property="og:image" content="" />
          <meta name="twitter:title" content="Sobre" />
          <meta name="twitter:image" content="" />
        </Helmet>
        <div className="page page--about">
          <nav className="about-nav">
            <ul className="about-nav-items">
              <li className="about-nav-item">
                <button
                  className="about-nav-item--active"
                  className="about-nav-item__btn about-nav-item--active"
                  onClick={() => this.scrollTo('section1')}
                >
                  Nosso jeito
                </button>
              </li>
              <li className="about-nav-item">
                <NavLink
                  to="/contato"
                  activeClassName="about-nav-item--active"
                  className="about-nav-item__btn"
                >
                  Nossa casa
                </NavLink>
              </li>
              <li className="about-nav-item">
                <NavLink
                  to="/contato"
                  activeClassName="about-nav-item--active"
                  className="about-nav-item__btn"
                >
                  Nosso nome
                </NavLink>
              </li>
              <li className="about-nav-item">
                <NavLink
                  to="/contato"
                  activeClassName="about-nav-item--active"
                  className="about-nav-item__btn"
                >
                  Christie???s International Real Estate
                </NavLink>
              </li>
            </ul>
          </nav>

          <header className="about-header page-header">
            <h1 className="page-header-title">Nosso jeito</h1>
            <div
              style={{
                backgroundImage: 'url(' + aboutHeaderMobile + ')'
              }}
              className="page-header-image show-mobile"
            />
            <div
              style={{
                backgroundImage: 'url(' + aboutHeaderDesktop + ')'
              }}
              className="page-header-image hide-mobile"
            />
          </header>

          <section id="section1" className="about-section section1">
            <h2 className="about-section-header">
              Uma imobili??ria com uma <br className="hide-mobile" />
              <strong>vis??o diferente</strong> do morar.
            </h2>

            <div className="about-section-row">
              <div
                className="about-section-image"
                style={{
                  backgroundImage: 'url(' + aboutSection1Desktop + ')'
                }}
              />
              <div className="about-section-text">
                <p>
                  Todos os im??veis da Axpe s??o especiais, mas qual deles ??
                  especial para voc???
                </p>
                <p>
                  Qual tem aquele astral, aquele charme capaz de fazer voc??
                  enxergar ali o seu canto?
                </p>
                <p>
                  Escolher um lugar para fazer parte da sua hist??ria ??, tamb??m,
                  uma decis??o afetiva. E para ajudar voc?? nessa escolha t??o
                  importante, capaz de influenciar sua vida, voc?? precisa de uma
                  imobili??ria que tenha uma vis??o diferente do morar, que
                  enxergue al??m da metragem, da disposi????o da planta ou do
                  n??mero de banheiros.
                </p>
                <p>Fique tranquilo, voc?? encontrou.</p>
              </div>
            </div>
          </section>

          <section className="about-section section2">
            <div className="about-section-row">
              <div className="about-section-text">
                <h2 className="about-section-header">
                  Corretores com <strong>olhar</strong> e{' '}
                  <strong>ouvidos</strong>
                  &nbsp;apurados.
                </h2>
                <div
                  className="about-section-image"
                  style={{
                    backgroundImage: 'url(' + aboutSection2Desktop + ')'
                  }}
                />
                <p>
                  N??o basta ter os im??veis bacanas no nosso portfolio, n??s temos
                  que entender qual ?? o ideal para voc??.
                </p>

                <p>
                  Afinal, para te ajudar, ningu??m melhor que pessoas com o
                  repert??rio parecido com o seu, capazes de ouvir atentamente e
                  entender o que voc?? precisa para ser feliz.
                </p>
                <p>
                  Por isso, nossa equipe de corretores t??m mais do que o olhar
                  apurado. T??m uma maneira toda especial, cuidadosa e realmente
                  ??nica de entender e atender voc??.
                </p>
              </div>
            </div>
          </section>

          <section className="about-section section3">
            <div className="about-section-row">
              <div className="about-section-text">
                <h2 className="about-section-header">
                  Visitar im??veis comuns? <br className="hide-mobile" />
                  <strong>Ningu??m merece.</strong>
                </h2>
                <div
                  className="about-section-image"
                  style={{
                    backgroundImage: 'url(' + aboutSection3Desktop + ')'
                  }}
                />
                <p>
                  Com certeza, mais cedo ou mais tarde, ??s vezes bem mais tarde,
                  voc?? vai encontrar o im??vel perfeito. Como voc?? quer que seja
                  esse processo?
                </p>
                <p> Demorado e desgastante ou flu??do e assertivo?</p>
                <p>
                  Trabalhamos para voc?? economizar seu precioso tempo. Todos os
                  nossos im??veis s??o visitados antes pelos nossos corretores,
                  justamente para voc?? n??o precisar visitar o que n??o interessa.
                  Ou seja: a gente faz a parte demorada e desgastante pra voc??.
                </p>
                <p>Ufa!</p>
              </div>
            </div>
          </section>

          <section className="about-section section4">
            <h2 className="about-section-header">
              <strong>Hi-tech. Hi-touch.</strong> <br className="hide-mobile" />
              Tecnologia ?? importante, mas n??o d?? conta de tudo.
            </h2>

            <div className="about-section-row">
              <div className="about-section-text">
                <p>
                  Voc?? come??a filtrando im??veis por um site. Perfeito. Afinal,
                  os algoritmos s??o ??timos para encontrar im??veis que preenchem
                  todos os seus crit??rios. O problema ?? que ningu??m se apaixona
                  por crit??rios.
                </p>
                <p>?? a?? que entram os seres humanos.</p>
              </div>
              <div className="about-section-text">
                <p>
                  Nosso site filtra, nossos corretores refinam. Voc?? fala, eles
                  ouvem. Voc?? sonha, eles interpretam. Voc?? tem a agenda
                  corrida, eles poupam o seu tempo. E, no final, encontrar o
                  im??vel que vai ser seu canto ?? muito mais f??cil, tranquilo e
                  gostoso.
                </p>
                <p>Como tem que ser.</p>
              </div>
            </div>
          </section>

          <section className="about-section section5">
            <div className="about-section-row">
              <div className="about-section-text">
                <h2 className="about-section-header">
                  O que ?? certo ?? certo.
                  <br className="hide-mobile" />
                  <strong>O que ?? errado ?? errado.</strong>
                </h2>
                <div
                  className="about-section-image"
                  style={{
                    backgroundImage: 'url(' + aboutSection5Desktop + ')'
                  }}
                />
                <p>
                  Na Axpe, seguimos as regras do mercado, cumprimos todas as
                  leis, e recolhemos todos os impostos. Tintim por tintim. N??o
                  abrimos espa??o para o jeitinho e n??o conduzimos neg??cios
                  informalmente. A Axpe escolheu o lado que ela quer estar -
                  como se diz no dialeto caipira: ???fazemos tudo nos conforme???.
                </p>
              </div>
            </div>
          </section>

          <section className="about-section section6">
            <div className="about-section-row">
              <div className="about-section-text">
                <h2 className="about-section-header">
                  Cliente ?? <strong>como filho.</strong>
                </h2>
                <div
                  className="about-section-image"
                  style={{
                    backgroundImage: 'url(' + aboutSection6Desktop + ')'
                  }}
                />
                <p>
                  A gente nem prefere e nem gosta mais de um do que do outro.
                  Toda transa????o tem dois lados: o do propriet??rio e o do
                  comprador ou locat??rio. Todos s??o igualmente importantes e,
                  por isso, defenderemos o interesse de ambos, de forma justa e
                  sem puxar a brasa para a sardinha de ningu??m.
                </p>
              </div>
            </div>
          </section>

          <section className="about-section section7">
            <div className="about-section-row">
              <div className="about-section-text about-section7-text1">
                <h2 className="about-section-header">
                  Um convite da <br className="hide-mobile" />
                  <strong>Christie???s</strong> n??o chega a qualquer imobili??ria.
                </h2>
              </div>
              <div className="about-section-text about-section7-text2">
                <div
                  className="about-section-image about-section7-image1"
                  style={{
                    backgroundImage: 'url(' + aboutSection7Desktop + ')'
                  }}
                />
                <p>
                  A Christie???s International Real Estate ?? a ??nica rede global
                  de imobili??rias que pertence integralmente a uma casa de
                  leil??es, a Christie???s. Ao contr??rio de uma franquia, para
                  integrar a rede, as imobili??rias s??o selecionadas e convidadas
                  com os mesmos crit??rios que definem a atua????o da casa de
                  leil??es: a transpar??ncia, confian??a, discri????o e excel??ncia.
                </p>
                <div
                  className="about-section-image about-section7-image2"
                  style={{
                    backgroundImage: 'url(' + aboutSection7Desktop2 + ')'
                  }}
                />
              </div>
            </div>
          </section>

          <section className="about-section section8">
            <div className="about-section-row">
              <div className="about-section-text">
                <h2 className="about-section-header">
                  <strong>
                    Concreto, vidro e <br className="hide-mobile" />
                    criatividade:
                  </strong>
                  <br className="hide-mobile" />
                  mat??ria-prima dos <br className="hide-mobile" />
                  im??veis comerciais <br className="hide-mobile" /> na Axpe
                </h2>
                <div
                  className="about-section-image"
                  style={{
                    backgroundImage: 'url(' + aboutSection8Desktop + ')'
                  }}
                />
                <p>
                  Somos reconhecidos por nosso apuro est??tico, um olho cl??nico
                  especializado em selecionar im??veis especiais.
                </p>
                <p>
                  Com nossos im??veis comerciais o crit??rio n??o ?? diferente. Por
                  isso, somos cada vez mais procurados por empresas de
                  tecnologia, ag??ncias de publicidade e digital media,
                  produtoras e startups.
                </p>
                <p>
                  S??o empresas que sabem que ?? fundamental trabalhar em espa??os
                  criativos para atrair clientes e talentos igualmente criativos
                  e inovadores.
                </p>
              </div>
            </div>
          </section>

          <section className="about-section section9 section4">
            <h2 className="about-section-header">
              <strong>Seguran??a pessoal: </strong>tamb??m nos preocupamos com
              isso
            </h2>

            <div
              className="about-section-image show-mobile"
              style={{
                backgroundImage: 'url(' + aboutSection9Mobile + ')'
              }}
            />

            <div className="about-section-row">
              <div className="about-section-text">
                <p>
                  Voc?? sabe, infelizmente vivemos em uma cidade com problemas de
                  seguran??a.
                </p>

                <p>
                  Por isso, a Axpe dobra e redobra os cuidados com a seguran??a
                  dos clientes e corretores e busca saber com quem est?? falando,
                  verificando os dados de todos que nos procuram.
                </p>

                <p>
                  Quando falamos que nosso atendimento ?? cuidadoso, n??o ?? for??a
                  de express??o.
                </p>
              </div>
            </div>
          </section>

          <section className="about-section section10">
            <h2 className="about-section-header">
              <strong>Nosso escrit??rio ?? uma del??cia. </strong>
              <br />A vista ?? linda, com direito a por do sol todos os dias.
            </h2>

            <div
              className="about-section-image"
              style={{
                backgroundImage: 'url(' + aboutSection10Desktop + ')'
              }}
            />

            <div className="about-section-row">
              <div className="about-section-text">
                <p>
                  E ainda est?? num pr??dio modernista projetado pelo arquiteto
                  Rino Levi.
                </p>
              </div>
            </div>
          </section>

          <section className="about-section section11">
            <h2 className="about-section-header">
              <strong>Nosso nome </strong>
              <br />
              Axpe ?? uma pequena aldeia no Pa??s Basco, Espanha. ?? um local
              especial.
            </h2>

            <div
              className="about-section-image"
              style={{
                backgroundImage: 'url(' + aboutSection11Desktop + ')'
              }}
            />

            <div className="about-section-row">
              <div className="about-section-text">
                <p>
                  Onde a quietude ?? quebrada apenas pelo sininho das ovelhas no
                  pasto. Em basco, Axpe (diz-se Aspe) significa ???casa ao p?? da
                  pedra??? em refer??ncia ?? montanha Anboto.
                </p>
              </div>
            </div>
          </section>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(About);
