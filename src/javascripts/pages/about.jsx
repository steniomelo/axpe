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
                  Christie’s International Real Estate
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
              Uma imobiliária com uma <br className="hide-mobile" />
              <strong>visão diferente</strong> do morar.
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
                  Todos os imóveis da Axpe são especiais, mas qual deles é
                  especial para você?
                </p>
                <p>
                  Qual tem aquele astral, aquele charme capaz de fazer você
                  enxergar ali o seu canto?
                </p>
                <p>
                  Escolher um lugar para fazer parte da sua história é, também,
                  uma decisão afetiva. E para ajudar você nessa escolha tão
                  importante, capaz de influenciar sua vida, você precisa de uma
                  imobiliária que tenha uma visão diferente do morar, que
                  enxergue além da metragem, da disposição da planta ou do
                  número de banheiros.
                </p>
                <p>Fique tranquilo, você encontrou.</p>
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
                  Não basta ter os imóveis bacanas no nosso portfolio, nós temos
                  que entender qual é o ideal para você.
                </p>

                <p>
                  Afinal, para te ajudar, ninguém melhor que pessoas com o
                  repertório parecido com o seu, capazes de ouvir atentamente e
                  entender o que você precisa para ser feliz.
                </p>
                <p>
                  Por isso, nossa equipe de corretores têm mais do que o olhar
                  apurado. Têm uma maneira toda especial, cuidadosa e realmente
                  única de entender e atender você.
                </p>
              </div>
            </div>
          </section>

          <section className="about-section section3">
            <div className="about-section-row">
              <div className="about-section-text">
                <h2 className="about-section-header">
                  Visitar imóveis comuns? <br className="hide-mobile" />
                  <strong>Ninguém merece.</strong>
                </h2>
                <div
                  className="about-section-image"
                  style={{
                    backgroundImage: 'url(' + aboutSection3Desktop + ')'
                  }}
                />
                <p>
                  Com certeza, mais cedo ou mais tarde, às vezes bem mais tarde,
                  você vai encontrar o imóvel perfeito. Como você quer que seja
                  esse processo?
                </p>
                <p> Demorado e desgastante ou fluído e assertivo?</p>
                <p>
                  Trabalhamos para você economizar seu precioso tempo. Todos os
                  nossos imóveis são visitados antes pelos nossos corretores,
                  justamente para você não precisar visitar o que não interessa.
                  Ou seja: a gente faz a parte demorada e desgastante pra você.
                </p>
                <p>Ufa!</p>
              </div>
            </div>
          </section>

          <section className="about-section section4">
            <h2 className="about-section-header">
              <strong>Hi-tech. Hi-touch.</strong> <br className="hide-mobile" />
              Tecnologia é importante, mas não dá conta de tudo.
            </h2>

            <div className="about-section-row">
              <div className="about-section-text">
                <p>
                  Você começa filtrando imóveis por um site. Perfeito. Afinal,
                  os algoritmos são ótimos para encontrar imóveis que preenchem
                  todos os seus critérios. O problema é que ninguém se apaixona
                  por critérios.
                </p>
                <p>É aí que entram os seres humanos.</p>
              </div>
              <div className="about-section-text">
                <p>
                  Nosso site filtra, nossos corretores refinam. Você fala, eles
                  ouvem. Você sonha, eles interpretam. Você tem a agenda
                  corrida, eles poupam o seu tempo. E, no final, encontrar o
                  imóvel que vai ser seu canto é muito mais fácil, tranquilo e
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
                  O que é certo é certo.
                  <br className="hide-mobile" />
                  <strong>O que é errado é errado.</strong>
                </h2>
                <div
                  className="about-section-image"
                  style={{
                    backgroundImage: 'url(' + aboutSection5Desktop + ')'
                  }}
                />
                <p>
                  Na Axpe, seguimos as regras do mercado, cumprimos todas as
                  leis, e recolhemos todos os impostos. Tintim por tintim. Não
                  abrimos espaço para o jeitinho e não conduzimos negócios
                  informalmente. A Axpe escolheu o lado que ela quer estar -
                  como se diz no dialeto caipira: “fazemos tudo nos conforme”.
                </p>
              </div>
            </div>
          </section>

          <section className="about-section section6">
            <div className="about-section-row">
              <div className="about-section-text">
                <h2 className="about-section-header">
                  Cliente é <strong>como filho.</strong>
                </h2>
                <div
                  className="about-section-image"
                  style={{
                    backgroundImage: 'url(' + aboutSection6Desktop + ')'
                  }}
                />
                <p>
                  A gente nem prefere e nem gosta mais de um do que do outro.
                  Toda transação tem dois lados: o do proprietário e o do
                  comprador ou locatário. Todos são igualmente importantes e,
                  por isso, defenderemos o interesse de ambos, de forma justa e
                  sem puxar a brasa para a sardinha de ninguém.
                </p>
              </div>
            </div>
          </section>

          <section className="about-section section7">
            <div className="about-section-row">
              <div className="about-section-text about-section7-text1">
                <h2 className="about-section-header">
                  Um convite da <br className="hide-mobile" />
                  <strong>Christie’s</strong> não chega a qualquer imobiliária.
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
                  A Christie’s International Real Estate é a única rede global
                  de imobiliárias que pertence integralmente a uma casa de
                  leilões, a Christie’s. Ao contrário de uma franquia, para
                  integrar a rede, as imobiliárias são selecionadas e convidadas
                  com os mesmos critérios que definem a atuação da casa de
                  leilões: a transparência, confiança, discrição e excelência.
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
                  matéria-prima dos <br className="hide-mobile" />
                  imóveis comerciais <br className="hide-mobile" /> na Axpe
                </h2>
                <div
                  className="about-section-image"
                  style={{
                    backgroundImage: 'url(' + aboutSection8Desktop + ')'
                  }}
                />
                <p>
                  Somos reconhecidos por nosso apuro estético, um olho clínico
                  especializado em selecionar imóveis especiais.
                </p>
                <p>
                  Com nossos imóveis comerciais o critério não é diferente. Por
                  isso, somos cada vez mais procurados por empresas de
                  tecnologia, agências de publicidade e digital media,
                  produtoras e startups.
                </p>
                <p>
                  São empresas que sabem que é fundamental trabalhar em espaços
                  criativos para atrair clientes e talentos igualmente criativos
                  e inovadores.
                </p>
              </div>
            </div>
          </section>

          <section className="about-section section9 section4">
            <h2 className="about-section-header">
              <strong>Segurança pessoal: </strong>também nos preocupamos com
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
                  Você sabe, infelizmente vivemos em uma cidade com problemas de
                  segurança.
                </p>

                <p>
                  Por isso, a Axpe dobra e redobra os cuidados com a segurança
                  dos clientes e corretores e busca saber com quem está falando,
                  verificando os dados de todos que nos procuram.
                </p>

                <p>
                  Quando falamos que nosso atendimento é cuidadoso, não é força
                  de expressão.
                </p>
              </div>
            </div>
          </section>

          <section className="about-section section10">
            <h2 className="about-section-header">
              <strong>Nosso escritório é uma delícia. </strong>
              <br />A vista é linda, com direito a por do sol todos os dias.
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
                  E ainda está num prédio modernista projetado pelo arquiteto
                  Rino Levi.
                </p>
              </div>
            </div>
          </section>

          <section className="about-section section11">
            <h2 className="about-section-header">
              <strong>Nosso nome </strong>
              <br />
              Axpe é uma pequena aldeia no País Basco, Espanha. É um local
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
                  Onde a quietude é quebrada apenas pelo sininho das ovelhas no
                  pasto. Em basco, Axpe (diz-se Aspe) significa “casa ao pé da
                  pedra” em referência à montanha Anboto.
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
