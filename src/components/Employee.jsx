import styled from "styled-components";
import jedi from "../assets/pic.png";

export const Container = styled.div`

//   margin: 15px;
  
  display: flex;
  border: solid 1px red;
  padding: 1px;
  margin-bottom: 1em;
`;
const EmployeeImg = styled.img`
  width: 100px;

//   border: solid 1px red;
`;

export const Name = styled.h1`
  font-family: monospace;
`;
export const Title = styled.h4`
  font-family: monospace;
`;

function Employee() {
  return (
    <Container>
      <EmployeeImg src={jedi} />
      <div>
        <Name>John doe</Name>
        <Title>insert role</Title>
      </div>
    </Container>
  );
}

export default Employee;
