import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  Bug,
  ArrowLeft,
  Download,
  RotateCcw,
  Sparkles,
} from "lucide-react";

function Final() {
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
            FINAL SECURITY RESULT
          </span>

        </div>

      </nav>


      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-6 py-14">


        {/* BACK */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-10"
        >
          <ArrowLeft size={17} />
          Back
        </button>


        {/* SUCCESS HEADER */}
        <div className="text-center">

          <div className="mx-auto w-20 h-20 rounded-full bg-green-400/10 border border-green-400/20 flex items-center justify-center">

            <CheckCircle2
              className="text-green-400"
              size={42}
            />

          </div>


          <div className="inline-flex items-center gap-2 mt-7 px-4 py-2 rounded-full border border-green-400/20 bg-green-400/5 text-green-400 text-xs font-bold">

            <Sparkles size={15} />

            SECURITY VERIFICATION COMPLETE

          </div>


          <h1 className="text-4xl md:text-6xl font-bold mt-6">

            Your Smart Contract is{" "}

            <span className="text-green-400">
              Secure
            </span>

          </h1>


          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">

            SecureAI successfully fixed the detected vulnerability
            and verified the patched contract in a safe sandbox.

          </p>

        </div>


        {/* SCORE */}
        <div className="mt-12 rounded-3xl border border-green-400/20 bg-[#090d15] p-10 text-center">

          <p className="text-sm text-gray-500 tracking-widest">
            FINAL SECURITY SCORE
          </p>


          <div className="mt-4">

            <span className="text-7xl md:text-8xl font-bold text-green-400">
              96
            </span>

            <span className="text-2xl text-gray-600">
              /100
            </span>

          </div>


          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-400/10 text-green-400 text-sm font-semibold">

            <ShieldCheck size={17} />

            Excellent Security Posture

          </div>


          {/* SCORE BAR */}
          <div className="max-w-xl mx-auto mt-8">

            <div className="h-3 bg-white/5 rounded-full overflow-hidden">

              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-green-400"
                style={{
                  width: "96%",
                }}
              />

            </div>

            <div className="flex justify-between mt-2 text-xs text-gray-600">

              <span>0</span>
              <span>50</span>
              <span>100</span>

            </div>

          </div>

        </div>


        {/* SECURITY SUMMARY */}
        <div className="mt-8">

          <h2 className="text-2xl font-bold">
            Security Summary
          </h2>

          <p className="text-gray-500 text-sm mt-2">
            Results from the AI security analysis and re-test.
          </p>


          <div className="grid md:grid-cols-3 gap-5 mt-6">


            {/* FIXED */}
            <div className="rounded-2xl border border-green-400/20 bg-[#090d15] p-6">

              <div className="w-12 h-12 rounded-xl bg-green-400/10 flex items-center justify-center">

                <CheckCircle2
                  className="text-green-400"
                  size={24}
                />

              </div>


              <p className="text-3xl font-bold mt-5">
                1
              </p>

              <h3 className="font-semibold mt-1">
                Vulnerability Fixed
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Reentrancy vulnerability successfully patched.
              </p>

            </div>


            {/* BLOCKED */}
            <div className="rounded-2xl border border-green-400/20 bg-[#090d15] p-6">

              <div className="w-12 h-12 rounded-xl bg-green-400/10 flex items-center justify-center">

                <Lock
                  className="text-green-400"
                  size={24}
                />

              </div>


              <p className="text-3xl font-bold mt-5">
                1
              </p>

              <h3 className="font-semibold mt-1">
                Attack Blocked
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Previously successful attack was prevented.
              </p>

            </div>


            {/* VERIFIED */}
            <div className="rounded-2xl border border-green-400/20 bg-[#090d15] p-6">

              <div className="w-12 h-12 rounded-xl bg-green-400/10 flex items-center justify-center">

                <ShieldCheck
                  className="text-green-400"
                  size={24}
                />

              </div>


              <p className="text-3xl font-bold mt-5">
                PASSED
              </p>

              <h3 className="font-semibold mt-1">
                Security Verification
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Patched contract passed the security re-test.
              </p>

            </div>

          </div>

        </div>


        {/* ATTACK DETAILS */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-[#090d15] overflow-hidden">

          <div className="px-6 py-5 border-b border-white/10">

            <h2 className="font-bold text-lg">
              Attack Verification
            </h2>

          </div>


          <div className="p-6">

            <div className="flex flex-col md:flex-row md:items-center gap-5">

              <div className="w-14 h-14 rounded-xl bg-red-400/10 border border-red-400/20 flex items-center justify-center">

                <Bug
                  className="text-red-400"
                  size={25}
                />

              </div>


              <div className="flex-1">

                <h3 className="font-semibold">
                  Reentrancy Attack
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Tested against the AI-patched smart contract.
                </p>

              </div>


              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-400/10 border border-green-400/20 text-green-400 text-sm font-bold">

                <CheckCircle2 size={16} />

                BLOCKED

              </div>

            </div>

          </div>

        </div>


        {/* AI FIX */}
        <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.03] p-7">

          <div className="flex items-start gap-4">

            <div className="w-11 h-11 rounded-xl bg-cyan-400/10 flex items-center justify-center shrink-0">

              <Sparkles
                className="text-cyan-400"
                size={21}
              />

            </div>


            <div>

              <h3 className="font-semibold text-lg">
                AI Fix Successfully Applied
              </h3>

              <p className="text-sm text-gray-400 mt-2 leading-6">

                SecureAI updated the vulnerable contract using a
                safer state-update pattern and then re-tested the
                original attack in an isolated sandbox.

              </p>

            </div>

          </div>

        </div>


        {/* ACTIONS */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <button
            onClick={() => {
              alert("Security report download will be connected to the backend later.");
            }}
            className="flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition font-semibold"
          >

            <Download size={18} />

            Download Security Report

          </button>


          <button
            onClick={() => {
              window.location.href = "/";
            }}
            className="flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-cyan-400 text-black hover:bg-cyan-300 transition font-bold"
          >

            <RotateCcw size={18} />

            Scan Another Contract

          </button>

        </div>


        {/* FOOTER */}
        <div className="text-center mt-14 pb-8">

          <p className="text-xs text-gray-600">
            SecureAI • AI-powered smart contract security
          </p>

        </div>

      </main>

    </div>
  );
}

export default Final;