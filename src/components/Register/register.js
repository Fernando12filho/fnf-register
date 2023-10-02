import "./register.css";
import Background from "../Background/background";
import Form from "../Form/form";

function Register() {
  return (
    <div className="body">
      <Background />
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
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Register;
