import styled from "styled-components";
import jedi from "../assets/pic.png";

export const Container = styled.div`

//   margin: auto;
  
  display: flex;
  border: solid 1px 
`;
const EmployeeImg = styled.img`
  width: 100px;

  border: solid 1px black;
`;

export const Name = styled.h1`
  font-family: monospace;
`;
export const Title = styled.h2`
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
