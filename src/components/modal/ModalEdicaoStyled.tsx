import { styled } from 'styled-components';

const ModalEdicaoStyled = styled.div`
  font-family: 'Poppins', sans-serif;
  border: 1px solid #dedede;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;

  padding: 30px 50px;
  margin-top: 50px;
  margin-bottom: 50px;
  background-color: #8ec5fc;

  div {
    max-height: 100vh;
    width: 30vw;
  }

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
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    display: flex;
    cursor: pointer;
  }

  button:hover {
    color: #ffffff;
    background-color: #10273f;
  }
`;

export default ModalEdicaoStyled;
