import Desktop from "../assets/desktop.svg";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <div className="grid grid-cols-2 items-center justify-center gap-10">
      <div className="space-y-6">
        <p className="text-lg font-medium tracking-wider bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 text-transparent bg-clip-text">
          Desenvolvedor Frontend
        </p>
        <h1 className="text-5xl font-bold tracking-wide">
          Entregando projetos elegantes & modernos.
        </h1>
        <p className="text-sm text-gray-400">
          Construindo interfaces de usuário modernas e atendendo aos requisitos
          de design, performance e responsividade.
          <br />
          Tecnologias como React, Next.js, Tailwind CSS e TypeScript.
        </p>
        <div className="flex items-center">
          <Button className="w-full rounded-full bg-gradient-to-r from-sky-400 to-blue-700 hover:brightness-90 transition-all ease-linear tracking-wide p-6 font-semibold">
            PORTFOLIO
          </Button>
        </div>
      </div>
      <img src={Desktop} alt="hero" />
    </div>
  );
}
