import Response from "../assets/responsividade.svg";

export function Projects() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-900 rounded-2xl w-full">
      <div>
        <div className="p-3 flex flex-col items-center justify-center">
          <img
            src={Response}
            alt="Responsividade"
            className="object-contain rounded-full h-44 w-44 border shadow-sm bg-slate-800"
          />
          <h3 className="text-2xl font-semibold text-white">Responsividade</h3>
          <p className="text-sm text-muted-foreground text-center">
            Websites e aplicativos para diferentes dispositivos.
          </p>
        </div>
      </div>
    </div>
  );
}
