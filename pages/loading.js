import React from 'react';

const Loading = () => {
    return (
        <div>
            <header className="navigation">
                <div className="flex justify-between items-center h-full px-6">
                    <img src="/logoBank.svg" alt="Logo" className="h-11" />
                </div>
            </header>

            <main className="flex flex-col items-center">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
  <div id="loadingModal" className="modal">
    <div className="modal-content-test">
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded h-24 w-24s border-4 border-white"></div>
      </div>
    </div>
  </div>
</main>

            <div className="footer-dark">
                <footer>
                    <div className="containertbt">
                        <div className="row ajuste">
                            <div className="col-sm-6 col-md-3 item">
                                <h3 className="boldinho">LINKS ÚTEIS</h3>
                                <ul>
                                    <li>
                                        <a
                                            target="_blank"
                                            style={{ fontSize: '14px' }}
                                            className="pretin"
                                            href="https://targetbank.com.br/politica-de-privacidade/"
                                        >
                                            Política de privacidade
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            style={{ fontSize: '14px' }}
                                            className="pretin"
                                            href="https://targetbank.com.br/regulamento-utilizacao-cartao/"
                                        >
                                            Regulamento da Utilização do Cartão
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            style={{ fontSize: '14px' }}
                                            className="pretin"
                                            href="https://targetbank.com.br/sobre-nos/"
                                        >
                                            Institucional
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            style={{ fontSize: '14px' }}
                                            className="pretin"
                                            href="https://targetbank.com.br/blog-do-trecho/"
                                        >
                                            Blog
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 item">
                                <h3 className="boldinho">CANAIS DE ATENDIMENTO</h3>
                                <ul>
                                    <li style={{ fontSize: '14px' }}>
                                        <label className="pretin" style={{ fontSize: '14px' }}>
                                            SAC CONTRATANTES: <br /> (21) 3500-5111
                                        </label>
                                    </li>
                                    <li style={{ fontSize: '14px' }}>
                                        <label className="pretin" style={{ fontSize: '14px' }}>
                                            E-MAIL: <br /> operacao@targetbank.com.br
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 item text">
                                <h3 className="boldinho">DICAS DE SEGURANÇA<br /></h3>
                                <p
                                    className="pretin"
                                    style={{
                                        fontSize: '14px',
                                        fontFamily: 'Roboto Condensed',
                                    }}
                                >
                                    O Target Bank nunca faz ligações solicitando senhas ou códigos.
                                    Caso liguem para você solicitando estes <br />
                                    dados, não informe. <br />
                                    Mantenha sempre atualizado seu antivírus e nunca abra arquivos
                                    anexados em e-mails cujo remetente <br />
                                    seja desconhecido. Assim, você evita possíveis ataques em seu
                                    computador.
                                    <br />
                                </p>
                            </div>
                        </div>
                        <p className="copyright">
                            © 2022 TARGET INSTITUICAO DE PAGAMENTO E SECURITIZADORA DE CREDITOS
                            S.A
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Loading;