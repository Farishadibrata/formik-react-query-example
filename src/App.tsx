import "./App.css";
import FormComponent from "./pages/form";
import { MantineProvider, Title } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "react-query";
import RandomQuotes from "./pages/randomquotes";

function App() {
  const queryClient = new QueryClient();
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <QueryClientProvider client={queryClient}>
        <Title>Mantine Form with formik And React Query</Title>
        <FormComponent />
        <RandomQuotes />
      </QueryClientProvider>
    </MantineProvider>
  );
}

export default App;
