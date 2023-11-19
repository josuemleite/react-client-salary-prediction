import { Container, Form, SubmitButton } from "./styles";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  const [salary, setSalary] = useState(null);
  const [formData, setFormData] = useState({
    country: "",
    ed_level: "",
    years_code: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://sua-api-aqui.com/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro ao chamar a API');
      }

      const data = await response.json();
      setSalary(data.prediction);
      navigate("/predict", { data });
    } catch (error) {
      console.error('Erro ao processar a solicitação:', error.message);
      navigate("/error", { replace: true });
    }
  };

  return (
    <Container>
      <h1>Predição de Salário</h1>
      <Form action="/predict" method="POST" onSubmit={handleSubmit}>
        <div class="form-control">
          <label>País:</label>
          <select name="country" required onChange={handleInputChange}>
            <option value="United States of America">Estados Unidos da América</option>
            <option value="Germany">Alemanha</option>
            <option value="United Kingdom of Great Britain and Northern Ireland">Reino Unido</option>
            <option value="Canada">Canadá</option>
            <option value="India">Índia</option>
            <option value="France">França</option>
            <option value="Netherlands">Países Baixos</option>
            <option value="Australia">Austrália</option>
            <option value="Brazil">Brasil</option>
            <option value="Spain">Espanha</option>
            <option value="Sweden">Suécia</option>
            <option value="Italy">Itália</option>
            <option value="Poland">Polônia</option>
            <option value="Switzerland">Suíça</option>
            <option value="Denmark">Dinamarca</option>
            <option value="Norway">Noruega</option>
            <option value="Israel">Israel</option>
          </select>
        </div>
        <div class="form-control">
          <label>Nível de Educação:</label>
          <select name="ed_level" required onChange={handleInputChange}>
            <option value="Less than a Bachelors">Menos que um Bacharelado</option>
            <option value="Bachelor’s degree">Bacharelado</option>
            <option value="Master’s degree">Mestrado</option>
            <option value="Post grad">Pós-graduação</option>
          </select>
        </div>
        <div class="form-control">
          <label>Tempo de atuação como desenvolvedor (em anos):</label>
          <input type="number" name="years_code" min="0" step="any" required onChange={handleInputChange} />
        </div>
        <SubmitButton type="submit">Predizer</SubmitButton>
      </Form>
    </Container>
  );
}

export default Home;