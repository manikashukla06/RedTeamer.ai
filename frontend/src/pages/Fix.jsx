import {
  ShieldCheck,
  ArrowLeft,
  Brain,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Code2,
} from "lucide-react";

function Fix() {
  return (
    <div className="min-h-screen bg-[#05070d] text-white">

      {/* NAVBAR */}
      <nav className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
              <ShieldCheck className="text-cyan-400" size={23} />
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
            AI AUTO-FIX ENGINE
          </span>

        </div>
      </nav>


      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-6 py-12">

        {/* BACK */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-10"
        >
          <ArrowLeft size={17} />
          Back to Security Report
        </button>


        {/* HEADER */}
        <div className="text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-400/20 bg-purple-400/5 text-purple-300 text-xs font-medium">

            <Sparkles size={15} />

            AI CODE REPAIR
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">

            Let AI{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-400">
              Fix
            </span>{" "}
            Your Contract

          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-4 leading-7">
            SecureAI analyzed the detected vulnerability and generated a
            security patch for your smart contract.
          </p>

        </div>


        {/* AI SUMMARY */}
        <div className="mt-10 rounded-2xl border border-purple-400/20 bg-purple-400/[0.03] p-6">

          <div className="flex flex-col md:flex-row md:items-center gap-5">

            <div className="w-12 h-12 rounded-xl bg-purple-400/10 flex items-center justify-center">
              <Brain className="text-purple-400" size={24} />
            </div>

            <div className="flex-1">

              <h3 className="font-semibold text-lg">
                AI identified a Reentrancy vulnerability
              </h3>

              <p className="text-sm text-gray-400 mt-2">
                A malicious contract could repeatedly call the vulnerable
                function before the original transaction is completed.
              </p>

            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-400/10 border border-red-400/20 text-red-400 text-xs font-bold">

              <AlertTriangle size={15} />

              CRITICAL

            </div>

          </div>

        </div>


        {/* BEFORE / AFTER */}
        <section className="mt-8">

          <div className="mb-5">

            <h3 className="text-2xl font-bold">
              Before & After
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Compare the vulnerable code with the AI-generated fix.
            </p>

          </div>


          <div className="grid lg:grid-cols-2 gap-5">


            {/* BEFORE */}
            <div className="rounded-2xl border border-red-400/20 bg-[#090d15] overflow-hidden">

              <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <Code2 className="text-red-400" size={18} />

                  <span className="font-semibold">
                    Vulnerable Code
                  </span>

                </div>

                <span className="px-2.5 py-1 rounded-md bg-red-400/10 text-red-400 text-[10px] font-bold">
                  BEFORE
                </span>

              </div>


              <div className="p-6 font-mono text-sm leading-7 overflow-x-auto">

                <p className="text-gray-600">
                  01
                </p>

                <p className="text-purple-400">
                  function{" "}
                  <span className="text-cyan-300">
                    withdraw
                  </span>
                  () public {"{"}
                </p>

                <p className="text-gray-400 pl-5">
                  (bool success,) = msg.sender.call
                </p>

                <p className="text-gray-400 pl-5">
                  {"{value: balances[msg.sender]} }"}
                </p>

                <p className="text-red-400 pl-5">
                  // vulnerable external call
                </p>

                <p className="text-gray-400 pl-5">
                  require(success);
                </p>

                <p className="text-purple-400">
                  {"}"}
                </p>

              </div>


              <div className="px-6 py-4 border-t border-white/10">

                <div className="flex items-center gap-2 text-red-400 text-sm">

                  <AlertTriangle size={16} />

                  Reentrancy vulnerability

                </div>

              </div>

            </div>


            {/* AFTER */}
            <div className="rounded-2xl border border-green-400/20 bg-[#090d15] overflow-hidden">

              <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <Code2 className="text-green-400" size={18} />

                  <span className="font-semibold">
                    AI Fixed Code
                  </span>

                </div>

                <span className="px-2.5 py-1 rounded-md bg-green-400/10 text-green-400 text-[10px] font-bold">
                  AFTER
                </span>

              </div>


              <div className="p-6 font-mono text-sm leading-7 overflow-x-auto">

                <p className="text-gray-600">
                  01
                </p>

                <p className="text-purple-400">
                  function{" "}
                  <span className="text-cyan-300">
                    withdraw
                  </span>
                  () public {"{"}
                </p>

                <p className="text-green-400 pl-5">
                  // Checks-effects-interactions pattern
                </p>

                <p className="text-gray-400 pl-5">
                  uint amount = balances[msg.sender];
                </p>

                <p className="text-gray-400 pl-5">
                  balances[msg.sender] = 0;
                </p>

                <p className="text-gray-400 pl-5">
                  (bool success,) = msg.sender.call
                </p>

                <p className="text-gray-400 pl-5">
                  {"{value: amount} }"}
                </p>

                <p className="text-gray-400 pl-5">
                  require(success);
                </p>

                <p className="text-purple-400">
                  {"}"}
                </p>

              </div>


              <div className="px-6 py-4 border-t border-white/10">

                <div className="flex items-center gap-2 text-green-400 text-sm">

                  <CheckCircle2 size={16} />

                  Vulnerability patched

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* AI EXPLANATION */}
        <section className="mt-8 grid md:grid-cols-2 gap-5">

          <div className="rounded-2xl border border-white/10 bg-[#090d15] p-6">

            <h3 className="font-semibold text-lg">
              What did AI change?
            </h3>

            <div className="mt-5 space-y-4">

              <Change
                title="State updated first"
                text="The user's balance is set to zero before the external call."
              />

              <Change
                title="Attack surface reduced"
                text="An attacker cannot repeatedly withdraw the same balance."
              />

              <Change
                title="Transaction verified"
                text="The external call must succeed before completion."
              />

            </div>

          </div>


          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.03] p-6">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center">

                <ShieldCheck
                  className="text-cyan-400"
                  size={20}
                />

              </div>

              <h3 className="font-semibold text-lg">
                AI Fix Recommendation
              </h3>

            </div>


            <p className="text-gray-400 text-sm leading-6 mt-5">
              The generated patch follows a safer state-update pattern.
              SecureAI will now re-run the previously successful attack
              against the patched contract.
            </p>


            <div className="mt-6 flex items-center gap-2 text-cyan-400 text-sm">

              <CheckCircle2 size={16} />

              Ready for security re-test

            </div>

          </div>

        </section>


        {/* APPLY FIX BUTTON */}
        <div className="mt-10 flex justify-center">

          <button
            onClick={() => {
              window.location.href = "/retest";
            }}
            className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-cyan-400 text-black font-bold hover:bg-cyan-300 transition shadow-lg shadow-cyan-400/10"
          >

            <ShieldCheck size={19} />

            Apply AI Fix & Re-test

            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition"
            />

          </button>

        </div>

      </main>

    </div>
  );
}


/* SMALL CHANGE COMPONENT */

function Change({ title, text }) {

  return (
    <div className="flex gap-3">

      <CheckCircle2
        className="text-cyan-400 shrink-0 mt-1"
        size={17}
      />

      <div>

        <p className="text-sm font-medium">
          {title}
        </p>

        <p className="text-xs text-gray-500 mt-1 leading-5">
          {text}
        </p>

      </div>

    </div>
  );
}

export default Fix;