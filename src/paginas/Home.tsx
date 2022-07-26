import Header from "../componentes/Header";
import { Link } from "react-router-dom";
import Footer from "../componentes/Footer";
import React from "react";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="items-center justify-center px-48 py-5 bg-white">
        <section className="mt-20">
          <div className=" w-full flex flex-row justify-between items-center px-48 py-5">
            <div className="flex flex-col justify-center items-start p-0 gap-7">
              <span className="font-bold text-2xl">Quem sou eu?</span>
              <p>Olá, meninas.
                <br />
                Me chamo Bianca Revitti, tenho 19 anos e estou iniciando minha carreira como nail designer.
              </p>
              <p>
                Desejo me aperfeiçoar a cada dia e levar para vocês a melhor qualidade.
              </p>
            </div>

            <div className="flex flex-row items-start p-2 gap-2">
              <img
                className="w-60 h-64 min-h-[16rem] min-w-[15rem] rounded-full"
                src="/src/assets/Perfil.jpeg"
                alt=""
              />
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col px-48 py-5 gap-2">
            <span>Fico feliz em ter você aqui.</span>
            <span>
              Este espaço foi criado com muito carinho e dedicação para
              estreitarmos nossa comunicação e facilitar o agendamento comigo.
            </span>
            <span>
              Aqui você consegue montar o pedido da maneira que achar melhor e
              escolher um horário disponível para deixar suas unhas
              maravilhosas.
            </span>
            <span>
              Estou ansiosa para conhecê-las, agende seu horário. Até breve!
            </span>
          </div>
        </section>

        <section className="mt-20">
          <div className="flex flex-row justify-between items-center py-5 px-48 gap-16">
            <img src="/src/assets/Unha.jpeg" className="w-56 h-80 rounded-xl" />
            <img src="/src/assets/Unha.jpeg" className="w-56 h-80 rounded-xl" />
            <img src="/src/assets/Unha.jpeg" className="w-56 h-80 rounded-xl" />
            <img src="/src/assets/Unha.jpeg" className="w-56 h-80 rounded-xl" />
          </div>
        </section>

        <section>
          <div className="flex flex-col px-48 py-5 gap-2 text-center font-bold text-lg justify-center items-center mt-20">
            <span>Faça seu agendamento</span>
            <Link
              to="/agendamento"
              className="flex justify-center items-center flex-row p-2 gap-2 w-72 h-14 bg-pink-600 rounded-xl text-white hover:bg-pink-500 hover:transition-colors"
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

export default Home;
