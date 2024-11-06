import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logo from "../../img/logo.png";

import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionsModal } from "../../pages/transactions/components/new-transactions-modal";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionsModal/>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
};
