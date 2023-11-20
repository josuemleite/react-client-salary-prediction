import { Container, Form, SubmitButton } from './styles';
import { useNavigate, useLocation } from 'react-router-dom';

function Predict() {

  const navigate = useNavigate();
  const data = useLocation().state.data;

  const handleRetry = () => {
    navigate("/");
  };

  return (
    <Container>
      <Form>
        <h1>
          {`${data.prediction.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`}
        </h1>
        <p>Isso dá <strong>{`$ ${(data.prediction / 12).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`}</strong> por mês...</p>
        <SubmitButton type="button" onClick={handleRetry}>
          Voltar
        </SubmitButton>
      </Form>
    </Container>
  );
}

export default Predict;