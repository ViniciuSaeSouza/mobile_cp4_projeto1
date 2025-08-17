import Main from "./src/Main";
import {
  QueryClient,
  QueryClientProvider as TanStackProvider,
} from "@tanstack/react-query";
import WelcomeScreen from "./src/WelcomeScreen";
import { useState } from "react";

const queryClient = new QueryClient();

export default function App() {
  const [showMain, setShowMain] = useState(false);
  const handleMainNavigation = () => setShowMain(true);

  return (
    <TanStackProvider client={queryClient}>
      {showMain ? (
        <Main />
      ) : (
        <WelcomeScreen onNavigateToMain={handleMainNavigation} />
      )}
    </TanStackProvider>
  );
}
