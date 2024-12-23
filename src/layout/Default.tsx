import { Header } from "@/components/Header";
import { Outlet } from "react-router-dom";

export function Default() {
  return (
    <div className="w-full max-w-5xl mx-auto h-screen space-y-10">
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
