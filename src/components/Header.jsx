import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  margin: auto;
  text-align: center;

  border: solid 2px blue;
  padding: 3px;
`;




function Header() {
    return (
        <Container>
        <h1>Employee Dir</h1>
        </Container>
    )
}


export default Header;