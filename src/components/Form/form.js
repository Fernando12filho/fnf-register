
import "./form.css";
import React, { useState } from "react";


function Form() {
  // const [formState, setFormState] = useState({
  // 	name: "",
  // 	lastName: "",
  // 	phone: "",
  // 	email: "",
  // 	userType: 1,
  // });
  // userType => 1 (Aluno), 2 (Tutor)

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lName, setLName] = useState("");
  const [phone, setPhone] = useState("");
  const [userType, setIsChecked] = useState("");

  const errorMessageName =
    "Nome entre 3-16 caracteres, nao pode conter numeros ou caracteres especiais";
  const errorMessageLName =
    "Nome entre 3-16 caracteres, nao pode conter numeros ou caracteres especiais";
  const errorMesageEmail = "Precisa ser um email valido";

  function submitForm() {
    if (!email.length) {
      alert("Email Obrigatorio");
    }
    if (!name.length) {
      alert("nome obrigatorio");
      return;
    }
    if (!lName.length) {
      alert("Sobrenome Obrigatorio");
      return;
    }
    if (!phone.length) {
      alert("Numero de telefone Obrigatorio");
      return;
    }

    // SE CHEGOU AQUI, VAI SUBMETER O FORMULÁRIO
    console.log("submeteu o form");
    console.log(email);
    console.log(name);
    console.log(lName);
    console.log(phone);
    console.log(userType);
  }

  function onChangeEmail(evt) {
    const email = evt.target.value;
    setEmail(email);
  }

  function onChangeName(evt) {
    const name = evt.target.value;
    setName(name);
  }

  function onChangeLName(evt) {
    const lName = evt.target.value;
    setLName(lName);
  }

  function onChangePhone(evt) {
    const phone = evt.target.value;
    setPhone(phone);
  }

  function onChangeTutor(evt) {
    const userType = "tutor";
    setIsChecked(userType);
  }

  function onChangeStudent(evt) {
    const userType = "student";
    setIsChecked(userType);
  }

  return (
    <div className="form-container">
      <h3>Seja bem-vindo</h3>
      <h1>Cadastrar</h1>

      <label for="email">Digite seu endereco de e-mail</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        placeholder="qwer@fnf.com"
        value={email}
        onChange={onChangeEmail}
      />
      <span>{errorMesageEmail}</span>

      <br />

      <div className="name">
        <div className="firstName">
          <label for="fname">Nome</label>
          <input
            type="text"
            id="fname"
            name="fname"
            required
            errorMessage="Precisa ter entre 3-16 caracteres, sem numuros ou caracteres especiais"
            pattern="^[A-Za-z]{3,16}$"
            value={name}
            onChange={onChangeName}
            placeholder="Nome"
          />
          <span>{errorMessageName}</span>
        </div>

        <div className="lastName">
          <label for="lname">Sobrenome</label>
          <input
            type="text"
            id="lname"
            name="lname"
            required
            pattern="^[A-Za-z]{3,16}$"
            value={lName}
            onChange={onChangeLName}
            placeholder="Sobrenome"
          />
          <span>{errorMessageLName}</span>
        </div>
      </div>

      <label for="pnumber">Telefone</label>
      <input
        type="tel"
        id="pnumber"
        name="pnumber"
        required
        value={phone}
        onChange={onChangePhone}
        placeholder="(99)99999-9999"
      />

      <div className="user-type">
        <div className="container-user">
          <input
            type="radio"
            id="student"
            name="userType"
            required
            value={userType}
            onChange={onChangeStudent}
          />
          <label for="student">Aluno</label>
        </div>

        <div className="container-user">
          <input
            type="radio"
            id="tutor"
            name="userType"
            required
            onChange={onChangeTutor}
            checked={userType}
          />
          <label for="tutor">Tutor</label>
        </div>
      </div>

        <button onClick={submitForm}>
          Cadastrar
        </button>
    </div>
  );
}

export default Form;
