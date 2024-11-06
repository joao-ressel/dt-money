import { Header } from "../../components/header";
import { Summary } from "../../components/summary";
import { SearchForm } from "./components/search-form";
import { PriceHigtlight, TransactionsContainer, TransactionsTable } from "./styles";

export const Transactions = () => {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm/>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHigtlight variant="income">R$ 12.000,00</PriceHigtlight>
              </td>
              <td>Venda</td>
              <td>13/04/2024</td>
            </tr>
            <tr>
              <td width="50%">Humburguer</td>
              <td>
                <PriceHigtlight variant="outcome">-R$ 59,60</PriceHigtlight>
              </td>
              <td>Alimentação</td>
              <td>10/04/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
};
