// Importando os componentes do TanStack Query
import {
  QueryClient,
  QueryClientProvider as TanstackProvider,
} from "@tanstack/react-query";

// Cria uma instância do QueryClient(controle de cache, o 're-fetch', etc.)
const queryClient = new QueryClient();

// Um componente que envolve toda a aplicação
// Permitir que qualquer componente filho acesse o QueryClient(tanstack)

export default function QueryClientProvider({ children }: any) {
  return <TanstackProvider client={queryClient}>{children}</TanstackProvider>;
}
