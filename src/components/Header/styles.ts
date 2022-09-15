import styled from 'styled-components';
import { Button, Nav, Navbar } from "react-bootstrap";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  flex: 1;
  margin: 3rem;

  .butn {
    width: 150px;
    padding: 1rem 0;
    background: var(--black);
    color: var(--white);
    font-size: 1rem;
    margin: 0.5rem;
  }
`;

export const SButton = styled(Button)`
  .butn {
    width: 150px;
    background: var(--black);
  }
`;
export const SNav = styled(Nav)``;
export const SNavbar = styled(Navbar)``;