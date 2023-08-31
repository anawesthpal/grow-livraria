import styled from 'styled-components';

export const TableBook = styled.table`
  width: 95%;
  margin: 20px auto;
  border-collapse: collapse;
  border: 1px solid #ccc;

  tr {
    &:nth-child(even) {
      background-color: #f2f2f2;
    }
    th {
      background-color: #f2f2f2;
      padding: 10px;
      text-align: left;
    }
    td {
      padding: 10px;
      border: 1px solid #ccc;
      text-align: center;
    }
  }
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

export default TableBook;
