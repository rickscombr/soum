import Head from 'next/head';
import Form from '../components/Form';
import Menu from '../components/Menu';

export default function Home() {
  return (
        <div>
            <Head>
                <meta charset="utf-8" />
                <title>SOU+ Clube de Benefícios | Uma vida de descontos!</title>
                <meta content="O SOU+ é um clube completo e exclusivo repleto de benefícios, descontos e parcerias. São mais de 500 presentes pensados exclusivamente para você!" name="description" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />

                <link rel="icon" href="/images/favicon.png" />
            </Head>

            <div className="hero">
                <div data-collapse="medium" data-animation="default" data-duration="400" data-doc-height="1" role="banner" className="nav w-nav">
                    <div className="nav-inner">
                        <div className="nav-logo-wrap">
                            <a href="#" className="brand w-nav-brand">
                                <img src="images/soumais.png" width="120" alt="" />
                            </a>
                        </div>
                        <Menu />

                    </div>
                </div>
            </div>

            <div className="section center">
                <img src="/images/arrow.svg" alt="" className="arrow" />
                <div data-w-id="6b220cb1-4b9c-7fb0-75b9-53ff4a6c35a2" className="r-hero hero-content">
                    <h1 className="heading-3">Cadastre-se</h1>
                    <h3 className="hero-subhead">Ganhe 30 dias de benefícios gratuitos para você!</h3>
                    <a href="#formulario-topo" className="button w-button">PRÉ-CADASTRO</a>
                </div>
                <img src="/images/soumais-banner.png" data-w-id="77e69727-c455-8e07-0990-833a661c94ea" height="" srcset="/images/soumais-banner-p-500.png 500w, /images/soumais-banner.png 690w" sizes="(max-width: 479px) 90vw, (max-width: 991px) 50vw, 100vw" alt="" className="r-hero-image hero-image" />
            </div>

            <div id="about" className="section wide img">
                <div data-w-id="b126983d-9126-fc06-c81d-1318685e2add" className="ri-about wrap">
                    <div className="title">CONHEÇA o SOU+</div>
                    <h2 className="black">TENHA UMA VIDA<br />DE BENEFÍCIOS!</h2>
                </div>
                <div className="wrapper formulario">
                    <div id="formulario-topo" data-w-id="05fa133e-aecf-16ac-f08d-aefc09cb470d" className="ri-about wrap">
                        <Form color="pink" />
                    </div>
                </div>
            </div>

            <div className="section">
                <div id="features" className="feature-wrap">
                    <div data-w-id="4593c4b7-56e8-060a-be57-648b0e08fc65" className="ri-feature feature-content mais">
                        <div className="title">Perfeito para você</div>
                        <h2 className="black">Economia</h2>
                        <p>O SOU+ oferece vouchers e cupons de desconto irresistíveis em diversas redes de restaurantes, estabelecimentos e lojas conveniadas. <br />São + de 500 possibilidades!</p>
                    </div>
                    <div className="feature-image _01"></div>
                </div>
                <div className="feature-wrap reverse">
                    <div data-w-id="cafe0045-d304-79d9-8f68-af3adaed06e9" className="ri-feature feature-content mais">
                        <div className="title">SOU+ do seu jeito</div>
                        <h2 className="black-text">Exclusividade</h2>
                        <p>Benefícios exclusivos: SOU+ Gamer, SOU+ Velejador, SOU+ Caminhoneiro, SOU+ Professor, e muitos outros! Aqui nós somos mais do seu jeito, feito para você!</p>
                    </div>
                    <div className="feature-image _02"></div>
                </div>
                <div className="feature-wrap">
                    <div data-w-id="88086931-0bbf-a2f5-1fc3-58d79ba19b7e" className="ri-feature feature-content mais">
                        <div className="title">Tecnologia e acessibilidade</div>
                        <h2 className="black-text">Tecnologia</h2>
                        <p>Tenha o SOU+ a qualquer hora do dia na palma da sua mão. Por meio do nosso aplicativo personalizado, é só se cadastrar e aproveitar!</p>
                    </div>
                    <div className="feature-image _03"></div>
                </div>
                <div id="Como-funciona" className="feature-wrap icons">
                    <div className="feature-content icons">
                        <div className="icone _01"></div>
                        <h4 className="black-text">FAÇA SEU PRÉ-CADASTRO</h4>
                        <p>Preencha o formulário e fique por dentro de todas as novidades do clube que veio para revolucionar o mercado! </p>
                    </div>
                    <div className="feature-content icons">
                        <div className="icone _02"></div>
                        <h4 className="black-text">AGUARDE O LANÇAMENTO</h4>
                        <p>Você será o primeiro a saber do lançamento do SOU+. Tenha benefícios exclusivos em primeira mão e aproveite mais.</p>
                    </div>
                    <div className="feature-content icons">
                        <div className="icone _03"></div>
                        <h4 className="black-text">GANHE 1 MÊS GRÁTIS</h4>
                        <p>Automaticamente, no pré-lançamento exclusivo, você ganha um mês grátis para viver com muito + benefícios! </p>
                    </div>
                </div>
                <div className="feature-wrap icons numbers">
                    <div className="feature-content icons numbers">
                        <div className="number">+500</div>
                        <h4 className="black-text">BENEFÍCIOS</h4>
                    </div>
                    <div className="feature-content icons numbers">
                        <div className="number">100%</div>
                        <h4 className="black-text">DIGITAL</h4>
                    </div>
                    <div className="feature-content icons numbers">
                        <div className="number">GRÁTIS</div>
                        <h4 className="black-text">1 MÊS DE TESTE<br />GRATUITO</h4>
                    </div>
                    <div className="feature-content icons numbers">
                        <div className="number">24h</div>
                        <h4 className="black-text">NA PALMA DA<br />SUA MÃO</h4>
                    </div>
                </div>
                <div className="quote-wrap">
                    <img src="images/quotation.svg" width="58" alt="" className="quote-icon" />
                    <h3>O SOU+ foi criado para trazer mais alegria e oportunidades exclusivas. Vamos unir os associados com benefícios e descontos direcionados em um clube nunca antes visto, único e personalizado. </h3>
                    <div className="quote-attribution">
                        <p><strong>Equipe SOU+</strong></p>
                    </div>
                </div>
            </div>

            <div className="bottom-image-wrap">
                <img src="/images/rodape-celulares-soumais.jpg"
                    sizes="(max-width: 1980px) 100vw, 1980px"
                    srcset="/images/rodape-celulares-soumais-p-500.jpeg 500w,
                            /images/rodape-celulares-soumais-p-1080.jpeg 1080w,
                            /images/rodape-celulares-soumais-p-1600.jpeg 1600w,
                            /images/rodape-celulares-soumais.jpg 1980w" alt=""
                />
            </div>

            <div id="download" className="section wide purple">
                <div data-w-id="376e2a1f-ec70-0dab-11ea-b1863101e37b" className="ri-download wrap">
                    <h2>Preparado para começar?</h2>
                    <div className="button-wrap">
                        <a href="#Formulario-rodape" className="button w-button">Pré-cadastro</a>
                    </div>
                </div>
            </div>

            <div className="section wide">
                <div id="Formulario-rodape" data-w-id="8cf47482-19f1-1f52-25ba-910a60bc91de" className="ri-wide wrap">
                    <Form />
                </div>
            </div>

            <div className="footer">
                <div className="wrap">
                    <img src="images/soumais.png" width="136" alt="" />
                    <div className="footer-list">
                        <a href="https://www.instagram.com/soumaisclub/" target="_blank" className="footer-link">Instagram</a>
                        <a href="https://www.facebook.com/soumaisclub" className="footer-link">Facebook</a>
                        <a href="https://www.agenciamaverick.com.br/" target="_blank" className="footer-link">Desenvolvido por MAVERICK 360</a>
                    </div>
                </div>
            </div>

        </div>
    )
}
