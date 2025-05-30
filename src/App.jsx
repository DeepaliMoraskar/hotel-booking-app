import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./components/AppLayout";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 100,
      experimental_prefetchInRender: true,
    },
  },
});

//isLoading is now called isPending

// The cacheTime option is now called gcTime

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="Dashboard" />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Account" element={<Account />} />
            <Route path="Bookings" element={<Bookings />} />
            <Route path="Cabins" element={<Cabins />} />
            <Route path="Settings" element={<Settings />} />
            <Route path="Users" element={<Users />} />
          </Route>
          <Route path="Login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}
