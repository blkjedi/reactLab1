import styled from "styled-components";
import Employee from "./Employee";

 const Container = styled.div`
    width: 80%;
    margin: auto;
    text-align: center;
    border: solid 3px purple;
    padding: 3px;
    margin-bottom: 1em;

`;


function EmployeeList() {
  return (
    <Container>
      <Employee />
      <Employee />
      <Employee />
      <Employee />
      <Employee />
    </Container>
  );
}

export default EmployeeList;
