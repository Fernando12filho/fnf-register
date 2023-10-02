import Background from "../../components/Background/background";
//import "./afterSubmition.css";

function AfterSubmition() {
  return (
    <div className="body">
      <Background />
      <div className="registrationSucceful">
        <h1>Obrigado por se registrar</h1>
        <div className="logo">
          <img src="/images/logoYellowBlack.svg" alt="check" />
            <p>F&F Gaming Academy</p>
        </div>
        <p>Entraremos em contato em breve</p>
      </div>
    </div>
  );
}

export default AfterSubmition;
