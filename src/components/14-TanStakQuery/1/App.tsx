import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./1";

const queryClient = new QueryClient();

const Main=()=>{

  return (

      <QueryClientProvider client={queryClient}>


        <App />
        
      </QueryClientProvider>
    );

}



export default Main;
