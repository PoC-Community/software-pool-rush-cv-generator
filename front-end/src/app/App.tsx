import MyRoutes from "./Routes";
import { ChakraProvider } from "@chakra-ui/react";

const App = (): JSX.Element => {
  return (
    <div>
      <ChakraProvider>
        <MyRoutes/>
      </ChakraProvider>
    </div>
  );
}

export default App;
