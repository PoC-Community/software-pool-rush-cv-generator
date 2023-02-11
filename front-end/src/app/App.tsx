import MyRoutes from "./Routes";
import { ChakraProvider } from "@chakra-ui/react";

const App = (): JSX.Element => {
  return (
    <>
      <ChakraProvider>
        <MyRoutes/>
      </ChakraProvider>
    </>
  );
}

export default App;
