import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>;


export const SearchForm = () => {
  const {fetchTransactions} = useContext(TransactionsContext);

  const { register, handleSubmit, formState:{isSubmitting} } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormInputs){
    await fetchTransactions(data.query);
    console.log(data)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
      {...register('query')}
      type="text" placeholder="Busque por transações" />
      <button disabled={isSubmitting} type="submit"><MagnifyingGlass size={20} /> Buscar </button>
    </SearchFormContainer>
  );
};
