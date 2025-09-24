import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FavoriteHeroContextProvider } from "./heroes/context/FavoriteHeroContext";

const queryClient = new QueryClient();

const HeroesApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoriteHeroContextProvider>
        <RouterProvider router={appRouter} />
        <ReactQueryDevtools initialIsOpen={false} />
      </FavoriteHeroContextProvider>
    </QueryClientProvider>
  );
};

export default HeroesApp;
