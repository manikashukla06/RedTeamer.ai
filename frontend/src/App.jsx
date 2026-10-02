import {
  ShieldCheck,
  ArrowRight,
  Zap,
  Bug,
  Brain,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import Scan from "./pages/Scan.jsx";
import ScanProgress from "./pages/ScanProgress.jsx";
import Report from "./pages/Report.jsx";
import Fix from "./pages/Fix.jsx";
import Retest from "./pages/Retest.jsx";
import Final from "./pages/Final.jsx";
function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  if (window.location.pathname === "/scan") {
    return <Scan />;
  }
  if (window.location.pathname === "/scan-progress") {
    return <ScanProgress />;
  }
  if (window.location.pathname === "/report") {
    return <Report />;
  }
  if (window.location.pathname === "/fix") {
  return <Fix />;
}
if (window.location.pathname === "/retest") {
  return <Retest />;
}
if (window.location.pathname === "/final") {
  return <Final />;
}

  return (
    <div className="min-h-screen bg-[#05070d] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[20%] w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />
        <div className="absolute top-[300px] right-[-150px] w-[450px] h-[450px] bg-blue-600/10 blur-[140px] rounded-full" />
      </div>

      {/* NAVBAR */}
      <nav className="relative z-50 max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
              <ShieldCheck className="text-cyan-400" size={24} />
            </div>

            <div>
              <h1 className="font-bold text-lg tracking-wide">
                Secure<span className="text-cyan-400">AI</span>
              </h1>

              <p className="text-[10px] text-gray-500 tracking-widest">
                SMART CONTRACT SECURITY
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#home" className="hover:text-white transition">
              Home
            </a>

            <a href="#how-it-works" className="hover:text-white transition">
              How It Works
            </a>

            <a href="#features" className="hover:text-white transition">
              Features
            </a>

            <a href="#technology" className="hover:text-white transition">
              Technology
            </a>
          </div>

          {/* Button */}
          <button
            onClick={() => (window.location.href = "/scan")}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-400 text-black font-semibold text-sm hover:bg-cyan-300 transition"
          >
            Start Scan
            <ArrowRight size={16} />
          </button>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-5 p-5 rounded-2xl bg-[#0b101a] border border-white/10 space-y-4">
            <a href="#home" className="block text-gray-300">
              Home
            </a>

            <a href="#how-it-works" className="block text-gray-300">
              How It Works
            </a>

            <a href="#features" className="block text-gray-300">
              Features
            </a>

            <a href="#technology" className="block text-gray-300">
              Technology
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <main id="home" className="relative z-10">

        <section className="max-w-7xl mx-auto px-6 pt-20 pb-24">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 text-xs font-medium mb-7">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                AI-POWERED SMART CONTRACT SECURITY
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                Hack Your
                <br />

                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
                  Smart Contract
                </span>

                <br />

                Before Hackers Do.
              </h2>

              <p className="mt-7 text-gray-400 text-lg leading-8 max-w-xl">
                An AI security platform that doesn't just read your smart
                contract. It actually tries to break it in a safe sandbox,
                fixes vulnerabilities, and verifies the solution.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-9">

                <button
                  onClick={() => (window.location.href = "/scan")}
                  className="group flex items-center gap-3 px-6 py-3.5 rounded-xl bg-cyan-400 text-black font-bold hover:bg-cyan-300 transition"
                >
                  Scan Smart Contract

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />
                </button>

                <button
                  onClick={() => (window.location.href = "/scan")}
                  className="group flex items-center gap-3 px-6 py-3.5 rounded-xl bg-cyan-400 text-black font-bold hover:bg-cyan-300 transition"
                >
                  View Demo
                </button>

              </div>

              {/* Trust */}
              <div className="flex flex-wrap gap-6 mt-9 text-xs text-gray-500">

                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-cyan-400" />
                  Safe Sandbox
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-cyan-400" />
                  AI-Powered
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-cyan-400" />
                  Automated Fix
                </div>

              </div>

            </div>

            {/* RIGHT SECURITY VISUAL */}
            <div className="relative">

              <div className="absolute inset-0 bg-cyan-400/10 blur-[100px]" />

              <div className="relative rounded-3xl border border-white/10 bg-[#090d15]/90 backdrop-blur-xl p-6 shadow-2xl">

                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10">

                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>

                  <span className="text-xs text-gray-500">
                    security_engine.ai
                  </span>

                </div>

                {/* AI Status */}
                <div className="py-7">

                  <div className="flex items-center justify-between mb-5">

                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-cyan-400/10 flex items-center justify-center">
                        <Brain className="text-cyan-400" />
                      </div>

                      <div>
                        <p className="font-semibold">
                          AI Security Engine
                        </p>

                        <p className="text-xs text-gray-500">
                          Active Analysis
                        </p>
                      </div>
                    </div>

                    <div className="text-xs text-cyan-400 flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                      LIVE
                    </div>

                  </div>

                  {/* Code */}
                  <div className="rounded-2xl bg-black/40 border border-white/5 p-5 font-mono text-xs leading-7">

                    <p className="text-gray-500">
                      // analyzing smart contract
                    </p>

                    <p>
                      <span className="text-purple-400">
                        contract
                      </span>{" "}
                      <span className="text-cyan-300">
                        SecureVault
                      </span>{" "}
                      {"{"}
                    </p>

                    <p className="pl-5 text-gray-400">
                      function withdraw() {"{"}
                    </p>

                    <p className="pl-10 text-red-400">
                      ⚠ potential vulnerability detected
                    </p>

                    <p className="pl-5 text-gray-400">
                      {"}"}
                    </p>

                    <p>{"}"}</p>

                  </div>

                </div>

                {/* Attack Flow */}
                <div className="grid grid-cols-3 gap-3">

                  <div className="rounded-xl bg-red-400/5 border border-red-400/20 p-4">
                    <Bug className="text-red-400 mb-3" size={20} />
                    <p className="text-xs text-gray-400">
                      Vulnerability
                    </p>
                    <p className="text-sm font-semibold mt-1">
                      Detected
                    </p>
                  </div>

                  <div className="rounded-xl bg-purple-400/5 border border-purple-400/20 p-4">
                    <Zap className="text-purple-400 mb-3" size={20} />
                    <p className="text-xs text-gray-400">
                      AI Attack
                    </p>
                    <p className="text-sm font-semibold mt-1">
                      Simulating
                    </p>
                  </div>

                  <div className="rounded-xl bg-cyan-400/5 border border-cyan-400/20 p-4">
                    <ShieldCheck className="text-cyan-400 mb-3" size={20} />
                    <p className="text-xs text-gray-400">
                      Protection
                    </p>
                    <p className="text-sm font-semibold mt-1">
                      Verifying
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* FEATURES */}
        <section
          id="features"
          className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5"
        >

          <div className="text-center max-w-2xl mx-auto">

            <p className="text-cyan-400 text-sm font-semibold tracking-widest">
              WHY SECUREAI
            </p>

            <h3 className="text-3xl md:text-4xl font-bold mt-3">
              More Than Just Code Scanning
            </h3>

            <p className="text-gray-400 mt-4">
              Traditional tools detect known patterns. SecureAI goes further
              by actively testing how your contract behaves under attack.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-14">

            <FeatureCard
              icon={<Bug />}
              title="Detect Vulnerabilities"
              text="Find critical security weaknesses in your smart contract before attackers do."
            />

            <FeatureCard
              icon={<Zap />}
              title="Simulate Real Attacks"
              text="AI agents safely attempt exploit strategies inside an isolated sandbox."
            />

            <FeatureCard
              icon={<ShieldCheck />}
              title="Fix & Verify"
              text="Generate fixes automatically and attack the patched contract again to verify security."
            />

          </div>

        </section>

        {/* HOW IT WORKS */}
        <section
          id="how-it-works"
          className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5"
        >

          <div className="text-center">

            <p className="text-cyan-400 text-sm font-semibold tracking-widest">
              HOW IT WORKS
            </p>

            <h3 className="text-3xl md:text-4xl font-bold mt-3">
              Scan → Attack → Fix → Verify
            </h3>

          </div>

          <div className="grid md:grid-cols-4 gap-5 mt-14">

            <Step
              number="01"
              title="Upload"
              text="Upload or paste your smart contract."
            />

            <Step
              number="02"
              title="Attack"
              text="AI simulates potential exploit scenarios."
            />

            <Step
              number="03"
              title="Fix"
              text="AI generates a secure code patch."
            />

            <Step
              number="04"
              title="Verify"
              text="The fixed contract is attacked again."
            />

          </div>

        </section>

        {/* TECHNOLOGY */}
        <section
          id="technology"
          className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5"
        >

          <div className="text-center">

            <p className="text-cyan-400 text-sm font-semibold tracking-widest">
              TECHNOLOGY STACK
            </p>

            <h3 className="text-3xl md:text-4xl font-bold mt-3">
              Built With Modern Technology
            </h3>

          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-12">

            {[
              "Cybersecurity",
              "Generative AI",
              "Blockchain",
              "Backend",
              "Cloud",
              "Frontend",
            ].map((tech) => (
              <div
                key={tech}
                className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:border-cyan-400/30 hover:text-cyan-300 transition"
              >
                {tech}
              </div>
            ))}

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5">

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <ShieldCheck size={18} className="text-cyan-400" />
            SecureAI
          </div>

          <p className="text-xs text-gray-600">
            AI-powered smart contract security
          </p>



        </div>

      </footer>

    </div>
  );
}


/* FEATURE CARD */
function FeatureCard({ icon, title, text }) {
  return (
    <div className="group p-7 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-cyan-400/20 transition">

      <div className="w-12 h-12 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center group-hover:scale-105 transition">
        {icon}
      </div>

      <h4 className="text-xl font-semibold mt-6">
        {title}
      </h4>

      <p className="text-gray-400 text-sm leading-6 mt-3">
        {text}
      </p>

    </div>
  );
}


/* STEP CARD */
function Step({ number, title, text }) {
  return (
    <div className="relative p-6 rounded-2xl border border-white/10 bg-[#090d15]">

      <span className="text-cyan-400 font-mono text-sm">
        {number}
      </span>

      <h4 className="text-xl font-semibold mt-5">
        {title}
      </h4>

      <p className="text-gray-400 text-sm leading-6 mt-3">
        {text}
      </p>

    </div>
  );
}

export default App;