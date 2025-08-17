import Main from "./src/Main";
import {
  QueryClient,
  QueryClientProvider as TanStackProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <TanStackProvider client={queryClient}>
      <Main />
    </TanStackProvider>
  );
}
