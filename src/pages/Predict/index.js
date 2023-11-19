import { Container, Form, SubmitButton } from './styles';
import { useNavigate } from 'react-router-dom';

function Predict({ data }) {

  const navigate = useNavigate();

  const handleRetry = () => {
    navigate("/");
  };

  return (
    <Container>
      <Form action="/" method="GET">
        <h1>
          {`$ ${data[0].toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`}
        </h1>
        <p>Isso dá <strong>{`$ ${(data[0] / 12).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`}</strong> por mês...</p>
        <SubmitButton type="button" onClick={handleRetry}>
          Voltar
        </SubmitButton>
      </Form>
    </Container>
  );
}

export default Predict;