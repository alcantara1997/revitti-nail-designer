import React from "react";
import { Link } from "react-router-dom";
import Footer from "../componentes/Footer";
import Header from "../componentes/Header";

export function Agendamento() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="items-center justify-center px-48 py-5 bg-white">
        <section>
          <div className="flex flex-row justify-center items-center font-bold py-4 px-48">
            <span>Técnica aplicada</span>
          </div>

          <div className="flex flex-row justify-center items-center gap-12 py-2 px-48">
            <div className="flex flex-col items-center justify-center gap-4">
              <button className="w-72 h-12 bg-white border border-gray-500 rounded-xl hover:bg-pink-400 hover:transition-colors hover:text-white ease-in-out duration-500" type="button">Fibra de Vidro</button>
              <span>R$ 100,00</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <button className="w-72 h-12 bg-white border border-gray-500 rounded-xl hover:bg-pink-400 hover:transition-colors hover:text-white ease-in-out duration-500" type="button">Gel na Tips</button>
              <span>R$ 80,00</span>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center font-bold py-4 px-48">
            <span>Formato da unha</span>
          </div>

          <div className="flex flex-row justify-center items-center py-2 px-48">
            <div className="flex flex-col justify-center items-center p-0 gap-2 w-40 h-40">
              <div className="rounded-full bg-gray-400 w-24 h-24"></div>
              <span>Quadrada</span>
            </div>
            <div className="flex flex-col justify-center items-center p-0 gap-2 w-40 h-40">
              <div className="rounded-full bg-gray-400 w-24 h-24"></div>
              <span>Bailarina</span>
            </div>
            <div className="flex flex-col justify-center items-center p-0 gap-2 w-40 h-40">
              <div className="rounded-full bg-gray-400 w-24 h-24"></div>
              <span>Amendoada</span>
            </div>
            <div className="flex flex-col justify-center items-center p-0 gap-2 w-40 h-40">
              <div className="rounded-full bg-gray-400 w-24 h-24"></div>
              <span>Stiletto</span>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center font-bold py-4 px-48">
            <span>Decorações</span>
          </div>

          <div className="flex flex-col justify-center items-center py-2 px-0">
            <div className="flex flex-row justify-between items-center p-0 gap-96 h-14">
              <span className="flex flex-row items-center p-0 gap-7 w-80 h-9">Pedraria</span>
              <span className="flex flex-row items-start p-2 gap-2 w-36">R$ 5,00</span>
            </div>
            <div className="flex flex-row justify-between items-center p-0 gap-96 h-14">
              <span className="flex flex-row items-center p-0 gap-7 w-80 h-9">Francesa Reversa (par)</span>
              <span className="flex flex-row items-start p-2 gap-2 w-36">R$ 10,00</span>
            </div>
            <div className="flex flex-row justify-between items-center p-0 gap-96 h-14">
              <span className="flex flex-row items-center p-0 gap-7 w-80 h-9">Francesa Reversa (10 dedos)</span>
              <span className="flex flex-row items-start p-2 gap-2 w-36">R$ 30,00</span>
            </div>
            <div className="flex flex-row justify-between items-center p-0 gap-96 h-14">
              <span className="flex flex-row items-center p-0 gap-7 w-80 h-9">Baby Boomer</span>
              <span className="flex flex-row items-start p-2 gap-2 w-36">R$ 20,00</span>
            </div>
            <div className="flex flex-row justify-between items-center p-0 gap-96 h-14">
              <span className="flex flex-row items-center p-0 gap-7 w-80 h-9">Encapsulada (par)</span>
              <span className="flex flex-row items-start p-2 gap-2 w-36">R$ 7,00</span>
            </div>
            <div className="flex flex-row justify-between items-center p-0 gap-96 h-14">
              <span className="flex flex-row items-center p-0 gap-7 w-80 h-9">Encapsulada (10 dedos)</span>
              <span className="flex flex-row items-start p-2 gap-2 w-36">R$ 20,00</span>
            </div>
            <div className="flex flex-row justify-between items-center p-0 gap-96 h-14">
              <span className="flex flex-row items-center p-0 gap-7 w-80 h-9">Esmaltação em gel</span>
              <span className="flex flex-row items-start p-2 gap-2 w-36">R$ 15,00</span>
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col px-48 py-5 gap-2 text-center font-bold text-lg justify-center items-center mt-40">
            <Link
              to="/reserva"
              className="flex justify-center items-center flex-row p-2 gap-2 w-72 h-14 bg-pink-400 rounded-xl text-white hover:bg-pink-500 hover:transition-colors"
            >
              Simular orçamento
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Agendamento;
