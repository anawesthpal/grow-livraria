import { styled } from 'styled-components';

const FormStyled = styled.form`
  font-family: 'Poppins', sans-serif;
  border: 1px solid #dedede;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  /* max-width: 500px; */
  max-width: 25vw;
  max-height: 80vh;
  padding: 30px 50px;
  margin-top: 50px;
  margin-bottom: 50px;

  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);

  label {
    color: #3d3d3d;
    display: block;
    font-size: 1.15rem;
    font-weight: 500;
    margin-bottom: 2px;
  }

  input {
    font-family: 'Poppins', sans-serif;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
  }

  textarea {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    margin-bottom: 5px;
    width: 100%;
    height: 100px;
    resize: none;
  }

  button {
    color: #b6daff;
    background-color: #2f5780;
    border: none;
    border-radius: 5px;
    height: 40px;
    margin-bottom: 5px;
    cursor: pointer;
  }

  button:hover {
    color: #ffffff;
    background-color: #4b2370;
  }
`;

export default FormStyled;
