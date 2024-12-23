import Desktop from "./assets/desktop.svg";

export function App() {
  return (
    <div>
      <div className="grid grid-cols-2 items-center justify-center">
        <div className="space-y-6">
          <p>PERSONAL LOANS</p>
          <h1>Smart Crypto investment tool on Money Lion Crypto</h1>
          <p>
            Need to consolidate debt or make a large purchase? We bring the
            lenders to you so you can shop and compare personal loan offers in
            minutes.
          </p>
          <button>COMPARE RATES</button>
          <button>Watch Reel</button>
        </div>
        <img src={Desktop} alt="hero" />
      </div>
    </div>
  );
}
