import React from 'react';

const Home = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Obter os valores dos campos do formulário
    const agencia = document.getElementById('agencia').value;
    const conta = document.getElementById('conta').value;
    const digito = document.getElementById('digito').value;

    // Armazenar os valores no Local Storage
    localStorage.setItem('agencia', agencia);
    localStorage.setItem('conta', conta);
    localStorage.setItem('digito', digito);

    // Redirecionar para a página "acesso"
    window.location.href = '/acesso';
  };

  return (
    <div>
      <header className="navigation">
        <div className="flex justify-between items-center h-full px-6">
          <img src="/logoBank.svg" alt="Logo" className="h-11" />
        </div>
      </header>

      <main className="flex flex-col items-center">
        <h1 className="H1Dark" data-aos="zoom-in-down" data-aos-duration="1000" data-aos-delay="200">Bem-vindo ao Target Internet Banking</h1><br></br>
        <div className='container'>
          <div className="modal">
            <div className="modal-content">
              <div className="mb-4">
                <h2 className="font-person destaque centralizado">Para prosseguir, informe seus dados</h2>
              </div>
              <form onSubmit={handleFormSubmit}>
                <div className='containerzao'>
                  <div className='container-form text-center'>
                    <div className="mb-4">
                      <label htmlFor="agencia" className="block"></label>
                      <input type="text" id="agencia" className="design-form quadrado espaco agency" placeholder='Agência' />
                    </div>
                    <div className="flex mb-4">
                      <div className="mr-2">
                        <label htmlFor="conta" className="block"></label>
                        <input type="text" id="conta" className="design-form quadrado espaco cont" placeholder='Conta' />
                      </div><p className='traco'>-</p>
                      <div className="w-1/2 ml-2">
                        <label htmlFor="digito" className="block"></label>
                        <input type="text" id="digito" className="design-form quadrado espaco digit" placeholder='Dígito' />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="botaozinho">Avançar</button>
                </div>
              </form>
            </div>
          </div>

          <div className="modal explicativo">
            <div className="modal-content">
              <div className="mb-4">
                <div className='container-modal2'>
                  <h2 className="font-person destaque">Baixe o aplicativo da Target Conta Digital! </h2><br></br><br></br>
                  <p className="font-person" >Consulte saldo e extrato, faça pagamentos, receba os fretes e Vale-Pedágio Obrigatório, solicite cartão de débito Visa Cargo e muito mais. Tudo a um toque de distância!</p> <br></br><br></br>
                </div>
              </div>
              <div className="flex justify-between justify-evenly">
                <img src="/google-play.png" alt="Imagem 1" className="h-12" />
                <img src="/app-store.png" alt="Imagem 2" className="h-12" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="footer-dark">
          <footer>
            <div className="containertbt">
              <div className="row ajuste">
                <div className="col-sm-6 col-md-3 item">
                  <h3 className='boldinho'>LINKS ÚTEIS</h3>
                  <ul>
                    <li><a target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px'}} className='pretin' href="https://targetbank.com.br/politica-de-privacidade/">Política de privacidade</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px'}} className='pretin' href="https://targetbank.com.br/regulamento-utilizacao-cartao/">Regulamento da Utilização do Cartão</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px'}} className='pretin' href="https://targetbank.com.br/sobre-nos/">Institucional</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px'}} className='pretin' href="https://targetbank.com.br/blog-do-trecho/">Blog</a></li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md-3 item">
                  <h3 className='boldinho'>CANAIS DE ATENDIMENTO</h3>
                  <ul>
                    <li style={{ fontSize: '14px'}}><label className='pretin' style={{ fontSize: '14px'}}>SAC CONTRATANTES: <br /> (21) 3500-5111</label></li>
                    <li style={{ fontSize: '14px'}}><label className='pretin' style={{ fontSize: '14px'}}>E-MAIL: <br /> operacao@targetbank.com.br</label></li>
                  </ul>
                </div>
                <div className="col-md-6 item text">
                  <h3 className='boldinho'>DICAS DE SEGURANÇA<br /></h3>
                  <p className='pretin' style={{ fontSize: '14px', fontFamily: 'Roboto Condensed' }}>
                    O Target Bank nunca faz ligações solicitando senhas ou códigos. Caso liguem para você solicitando estes <br></br>dados, não informe.<br />
                    Mantenha sempre atualizado seu antivírus e nunca abra arquivos anexados em e-mails cujo remetente <br></br>seja desconhecido. Assim, você evita possíveis ataques em seu computador.<br />
                  </p>
                </div>
              </div>
              <p className="copyright">
                © 2022 TARGET INSTITUICAO DE PAGAMENTO E SECURITIZADORA DE CREDITOS S.A
              </p>
            </div>
          </footer>
        </div>
    </div>
  );
};

export default Home;
