import { useState, useCallback } from 'react';
import InputMask from "react-input-mask";

const Form = ({ color }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [hobby, setHobby] = useState('');
  const [sucesso, setSucesso] = useState('');
  const [invalido, setInvalido] = useState('');

  const triggerEnviaForm = useCallback(
    (e) => {
      e.preventDefault();
      // console.log({ name, email, phone, hobby });

      if (
        (name === '') || 
        (email === '') ||
        (phone === '') ||
        (hobby === '')
      ) {
        setInvalido(true);
        return false;
      } else {
        setInvalido(false);
      }

      fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, hobby })
      }).then(() => {
        setInvalido(false);
        setSucesso(true);
        setName('');
        setEmail('');
        setPhone('');
        setHobby('');
        
        document.querySelectorAll("input[type=text]").forEach(
          input => (input.value = "")
        );
      });
    },
    [name, email, phone, hobby],
  );

  return (
    <div className="form-block-2 w-form">
      <h2 className={color}>Faça seu pré-cadastro</h2>
      <p>Uma vida de benefícios começa aqui!</p>
      <form id="formulario" name="formulario" data-name="formulario" onSubmit={triggerEnviaForm} className="formulario">
          <input
            type="text"
            className="input w-input"
            maxlength="256"
            name="Nome"
            data-name="Nome"
            placeholder="Nome"
            id="Nome"
            required=""
            onKeyUp={e => setName(e.target.value)}
          />
          <input
            type="text"
            className="input w-input"
            maxlength="256"
            name="Email"
            data-name="Email"
            placeholder="Email"
            id="Email"
            required=""
            onKeyUp={e => setEmail(e.target.value)}
          />

          <InputMask
            type="text"
            className="input w-input"
            maxlength="256"
            name="Telefone"
            data-name="Telefone"
            placeholder="Telefone"
            id="Telefone"
            required=""
            mask="(99) 99999-9999"
            onKeyUp={e => setPhone(e.target.value)}
          />

          <input
            type="text"
            className="input w-input"
            maxlength="256"
            name="Hobby"
            data-name="Hobby"
            placeholder="Qual seu hobby?"
            id="Hobby"
            required=""
            onKeyUp={e => setHobby(e.target.value)}
          />
          <input
            type="submit"
            value="ENVIAR"
            data-wait="Aguarde por favor..."
            className="button form-button w-button"
          />
      </form>
      <div className={`w-form-done ${sucesso ? 'show' : '' }`}>
          <div>Obrigado! Seu pré-cadastro foi realizado com sucesso!</div>
      </div>
      <div className={`w-form-fail ${invalido ? 'show' : '' }`}>
          <div>Oops! Preencha todos os campos.</div>
      </div>
    </div>
  );
};

export default Form;