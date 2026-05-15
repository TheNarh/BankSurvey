import Header from "../layout/Header";
import WelcomeCard from "./WelcomeCard";

export default function WelcomeScreen({ onStart }) {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "stone" }}
    >
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-lg">
          <WelcomeCard onStart={onStart} />

          <p className="text-center text-xs mt-6" style={{ color: "black" }}>
            © 2026 GhanaBank. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
}
