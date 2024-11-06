import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Overlay= styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: #00000075;
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${props => props.theme['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form{
    margin-top: 2rem;
    display: flex;
    flex-direction: column;

    input{
      border-radius: 6px;
      border: 0;
      background: ${props => props.theme['gray-900']};
      color: ${props => props.theme['gray-300']};
      padding: 1rem;

      &::placeholder{
        color: ${props => props.theme['gray-500']};
      }
    }

    button[type="submit"]{
      height: 58px;
      border: 0;
      background: ${props => props.theme['gray-500']};
    }
  }
`;