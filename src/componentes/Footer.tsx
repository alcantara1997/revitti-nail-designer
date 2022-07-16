import React from "react";

export function Footer() {
  return (
    <div>
      <footer className="w-full h-64 py-5 flex items-center justify-center bg-pink-100">
        <div className="flex flex-row justify-between items-center px-48 py-0 gap-11">
          <div className="flex flex-row justify-center items-start p-0 gap-12">
            <div className="flex flex-col justify-center items-start p-0 gap-2">
              <span>(11) 99473-4883</span>
              <span>(11) 99473-4883</span>
              <span>
                Rua José Manoel de Oliveira, 24 - Jardim República, SP
              </span>
            </div>
            <div className="flex flex-col items-start p-0 gap-2">
              <span className="font-bold text-xl">Horários</span>
              <span>
                <span className="font-semibold">Terça à Sábado: </span>
                10h às 18h
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
