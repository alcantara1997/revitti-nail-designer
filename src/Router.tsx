import React from "react";
import { Route, Routes } from "react-router-dom";
import Agendamento from "./paginas/Agendamento";
import Home from "./paginas/Home";
import Reserva from "./paginas/Reserva";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reserva" element={<Reserva />} />
      <Route path="/agendamento" element={<Agendamento />} />
    </Routes>
  );
}

export default Router;
