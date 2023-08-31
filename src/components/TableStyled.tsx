import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Table = styled.table`
  width: 95%;
  margin: 20px auto;
  border-collapse: collapse;
  border: 1px solid #ccc;
`;

export const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  text-align: left;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
`;
export const TableBtn = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente os botões */
  margin-top: 10px; /* Espaçamento superior */
`;

export const EditButton = styled.button`
  background-color: #00ccff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    background-color: #0099e6;
  }
`;

export const DeleteButton = styled.button`
  background-color: #ff6666;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    background-color: #ff4d4d;
  }
`;
