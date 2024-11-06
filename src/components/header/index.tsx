import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logo from '../../img/logo.png';

export const Header = () => {
  return (

    <HeaderContainer>
        <HeaderContent>
            <img src={logo} alt="" />
            <NewTransactionButton>Nova transação</NewTransactionButton>
        </HeaderContent>
    </HeaderContainer>
  );
};
