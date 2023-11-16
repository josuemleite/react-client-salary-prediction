import { Container, Form, SubmitButton } from "./styles";

function Home() {
  return (
    <Container>
      <h1>Predição de Salário</h1>
      <Form action="/predict" method="POST">
        <div class="form-control">
          <label>País:</label>
          <select name="country" required>
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
          <select name="ed_level" required>
            <option value="Less than a Bachelors">Menos que um Bacharelado</option>
            <option value="Bachelor’s degree">Bacharelado</option>
            <option value="Master’s degree">Mestrado</option>
            <option value="Post grad">Pós-graduação</option>
          </select>
        </div>
        <div class="form-control">
          <label>Tempo de atuação como desenvolvedor (em anos):</label>
          <input type="number" name="years_code" min="0" step="any" required />
        </div>
        <SubmitButton type="submit">Predizer</SubmitButton>
      </Form>
    </Container >
  );
}

export default Home;