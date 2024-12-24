import { Play } from "lucide-react";
import Desktop from "../assets/desktop.svg";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-2 items-center justify-center gap-10">
        <div className="space-y-6">
          <p className="text-lg font-medium tracking-wider bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 text-transparent bg-clip-text">
            PERSONAL LOANS
          </p>
          <h1 className="text-5xl font-bold tracking-wide">
            Smart Crypto investment tool on Money Lion Crypto
          </h1>
          <p className="text-sm text-gray-400">
            Need to consolidate debt or make a large purchase? We bring the
            lenders to you so you can shop and compare personal loan offers in
            minutes.
          </p>
          <div className="flex items-center gap-9">
            <Button className="rounded-full bg-gradient-to-r from-sky-400 to-blue-700 hover:brightness-90 transition-all ease-linear tracking-wide p-6 font-semibold">
              COMPARE RATES
            </Button>
            <Button variant="ghost" size="lg" className="p-6">
              <span className="p-3 bg-blue-950 rounded-full">
                <Play fill="#0284c7" className="text-sky-600 w-full" />
              </span>
              <span className="font-semibold text-gray-400">Watch Reel</span>
            </Button>
          </div>
        </div>
        <img src={Desktop} alt="hero" />
      </div>
    </div>
  );
}
