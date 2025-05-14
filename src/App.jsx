import React from "react";
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
import AppLayout from "./ui/AppLayout";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath:true
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
    </>
  );
}
