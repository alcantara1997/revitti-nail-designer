import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="w-full py-5 flex items-center justify-center bg-white">
      <div className="flex flex-row justify-between items-center px-48 py-0 gap-32">
        <div className="flex flex-row items-start p-0 w-48 h-48">
          <img src="/src/assets/Logo.jpg" alt="" />
        </div>
        <div>
          <ul className="flex flex-row justify-end items-center p-0 gap-14 text-2xl text-pink-400">
            <li className="hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline">
              <Link to="/agendamento">Agendamento</Link>
            </li>
            <li className="hover:underline">
              <Link to="/galeria">Galeria</Link>
            </li>
            <li className="hover:underline">
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
