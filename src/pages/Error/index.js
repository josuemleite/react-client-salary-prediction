import { Container, Form, SubmitButton } from './styles';
import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate("/");
  };

  return (
    <Container>
      <Form>
        <h1>Oops! Ocorreu algum erro.</h1>
        <SubmitButton type="button" onClick={handleRetry}>
          Tentar novamente
        </SubmitButton>
      </Form>
    </Container>
  );
}

export default Error;