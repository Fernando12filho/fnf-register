import { useState } from "react";
import "./register.css";

function Register() {
	// const [formState, setFormState] = useState({
	// 	name: "",
	// 	lastName: "",
	// 	phone: "",
	// 	email: "",
	// 	userType: 1,
	// });
	// userType => 1 (Aluno), 2 (Tutor)

	const [name, setName] = useState("");

	function submitForm() {
		if (!name.length) {
			alert("Nome é obrigatório.");
			return;
		}

		// SE CHEGOU AQUI, VAI SUBMETER O FORMULÁRIO
		console.log("submeteu o form");
	}

	function onChangeName(evt) {
		const name = evt.target.value;
		setName(name);
	}

	return (
		<div className="body">
			<div className="bg-image">
				<div className="image"></div>
				<div className="fade"></div>
			</div>
			<div className="container-1">
				<div className="container-content">
					<div className="logo">
						<img src="/images/logoYellow.svg" alt="logo" />
						<p>F&F Gamimg Academy</p>
					</div>

					<h1>Entre para</h1>
					<h2>a melhor experiencia digital</h2>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s
					</p>
				</div>
			</div>

			<div className="container-2">
				<div className="container-content">
					<div className="form-container">
						<h3>Seja bem-vindo</h3>
						<h1>Cadastrar</h1>

						<label for="email">Digite seu endereco de e-mail</label>
						<input type="email" id="email" name="email" required />
						<br />

						<div className="name">
							<div className="firstName">
								<label for="fname">Nome</label>
								<input
									type="text"
									id="fname"
									name="fname"
									required
									value={name}
									onChange={onChangeName}
								/>
							</div>

							<div className="lastName">
								<label for="lname">Sobrenome</label>
								<input type="text" id="lname" name="lname" required />
							</div>
						</div>

						<label for="pnumber">Telefone</label>
						<input type="tel" id="pnumber" name="pnumber" required />

						<div className="user-type">
							<div className="container-user">
								<input type="radio" id="student" name="student" required />
								<label for="student">Aluno</label>
							</div>

							<div className="container-user">
								<input type="radio" id="tutor" name="tutor" required />
								<label for="student">Tutor</label>
							</div>
						</div>

						<button onClick={submitForm}>Cadastrar</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
