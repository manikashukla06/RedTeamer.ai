import {
  ShieldCheck,
  Bug,
  Lock,
  CheckCircle2,
  ArrowRight,
  Loader2,
} from "lucide-react";

import { useEffect, useState } from "react";

function Retest() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((value) => {
        if (value >= 100) {
          clearInterval(interval);
          return 100;
        }

        return value + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const completed = progress >= 100;

  return (
    <div className="min-h-screen bg-[#05070d] text-white">

      {/* NAVBAR */}
      <nav className="border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">

              <ShieldCheck
                className="text-cyan-400"
                size={23}
              />

            </div>

            <div>

              <h1 className="font-bold text-lg">
                Secure<span className="text-cyan-400">AI</span>
              </h1>

              <p className="text-[10px] text-gray-500 tracking-widest">
                SMART CONTRACT SECURITY
              </p>

            </div>

          </div>

          <span className="text-xs text-gray-500">
            SECURITY RE-TEST
          </span>

        </div>

      </nav>


      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-6 py-14">

        {/* BADGE */}
        <div className="text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 text-xs font-medium">

            {!completed && (
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            )}

            {completed && (
              <CheckCircle2 size={15} />
            )}

            {completed
              ? "RE-TEST COMPLETE"
              : "AI SECURITY RE-TEST"}

          </div>


          <h2 className="text-4xl md:text-5xl font-bold mt-6">

            {completed ? (
              <>
                Attack{" "}
                <span className="text-green-400">
                  Blocked
                </span>
              </>
            ) : (
              <>
                Testing the{" "}
                <span className="text-cyan-400">
                  Fixed Contract
                </span>
              </>
            )}

          </h2>


          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-7">

            SecureAI is attempting the previously successful
            attack against the AI-patched smart contract.

          </p>

        </div>


        {/* ATTACK FLOW */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-[#090d15] p-8">

          <div className="grid md:grid-cols-3 gap-10 items-center">


            {/* ATTACK */}
            <div className="text-center">

              <div className="w-20 h-20 mx-auto rounded-2xl bg-red-400/10 border border-red-400/20 flex items-center justify-center">

                <Bug
                  className="text-red-400"
                  size={32}
                />

              </div>

              <h3 className="font-semibold mt-4">
                Reentrancy Attack
              </h3>

              <p className="text-xs text-red-400 mt-2">
                PREVIOUSLY SUCCESSFUL
              </p>

            </div>


            {/* SANDBOX */}
            <div className="text-center">

              <div className="w-24 h-24 mx-auto rounded-full border-2 border-cyan-400/30 flex items-center justify-center">

                {!completed ? (
                  <Loader2
                    className="text-cyan-400 animate-spin"
                    size={35}
                  />
                ) : (
                  <ShieldCheck
                    className="text-green-400"
                    size={35}
                  />
                )}

              </div>

              <h3 className="font-semibold mt-4">
                Safe Sandbox
              </h3>

              <p className="text-xs text-gray-500 mt-2">

                {completed
                  ? "Attack prevented"
                  : "Running simulation..."}

              </p>

            </div>


            {/* RESULT */}
            <div className="text-center">

              <div
                className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center border ${
                  completed
                    ? "bg-green-400/10 border-green-400/20"
                    : "bg-white/5 border-white/10"
                }`}
              >

                {completed ? (
                  <Lock
                    className="text-green-400"
                    size={32}
                  />
                ) : (
                  <ShieldCheck
                    className="text-gray-600"
                    size={32}
                  />
                )}

              </div>

              <h3 className="font-semibold mt-4">
                Attack Result
              </h3>

              <p
                className={`text-xs mt-2 ${
                  completed
                    ? "text-green-400"
                    : "text-gray-600"
                }`}
              >

                {completed
                  ? "BLOCKED"
                  : "TESTING..."}

              </p>

            </div>

          </div>

        </div>


        {/* PROGRESS */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-[#090d15] p-7">

          <div className="flex justify-between mb-4">

            <span className="text-sm text-gray-400">

              {completed
                ? "Security re-test completed"
                : "Running attack simulation..."}

            </span>

            <span className="text-cyan-400 font-mono font-bold">
              {progress}%
            </span>

          </div>


          <div className="w-full h-3 rounded-full bg-white/5 overflow-hidden">

            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>


        {/* FINAL RESULT */}
        {completed && (

          <>

            <div className="grid md:grid-cols-3 gap-5 mt-8">

              <ResultCard
                icon={<CheckCircle2 />}
                title="Vulnerability Fixed"
                text="The reentrancy vulnerability was successfully patched."
              />

              <ResultCard
                icon={<ShieldCheck />}
                title="Attack Blocked"
                text="The previous attack can no longer exploit the contract."
              />

              <ResultCard
                icon={<Lock />}
                title="Contract Verified"
                text="The patched contract passed the security re-test."
              />

            </div>


            {/* SCORE */}
            <div className="mt-8 rounded-2xl border border-green-400/20 bg-green-400/[0.03] p-10 text-center">

              <p className="text-sm text-gray-500 tracking-widest">
                FINAL SECURITY SCORE
              </p>

              <div className="mt-3">

                <span className="text-6xl font-bold text-green-400">
                  96
                </span>

                <span className="text-xl text-gray-600">
                  /100
                </span>

              </div>

              <p className="text-green-400 mt-3">
                Excellent security posture
              </p>


              <button
                onClick={() => {
                  window.location.href = "/final";
                }}
                className="mt-7 inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-cyan-400 text-black font-bold hover:bg-cyan-300 transition"
              >

                View Final Security Result

                <ArrowRight size={18} />

              </button>

            </div>

          </>

        )}

      </main>

    </div>
  );
}


/* RESULT CARD */

function ResultCard({ icon, title, text }) {

  return (
    <div className="rounded-2xl border border-green-400/20 bg-[#090d15] p-6">

      <div className="w-11 h-11 rounded-xl bg-green-400/10 text-green-400 flex items-center justify-center">

        {icon}

      </div>

      <h3 className="font-semibold text-lg mt-5">
        {title}
      </h3>

      <p className="text-sm text-gray-500 mt-2 leading-6">
        {text}
      </p>

    </div>
  );
}

export default Retest;