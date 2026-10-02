import {
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  Bug,
  Lock,
  ArrowRight,
  Wrench,
  Activity,
  FileCode2,
} from "lucide-react";

function Report() {
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
            SECURITY REPORT
          </span>

        </div>
      </nav>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-6 py-14">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between gap-6">

          <div>

            <div className="flex items-center gap-3">

              <FileCode2
                className="text-cyan-400"
                size={22}
              />

              <span className="text-gray-300">
                MyContract.sol
              </span>

            </div>

            <h2 className="text-4xl md:text-5xl font-bold mt-5">
              Security{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
                Report
              </span>
            </h2>

            <p className="text-gray-400 mt-3">
              AI-powered vulnerability analysis and attack simulation results.
            </p>

          </div>

          <div className="flex items-center gap-3 h-fit">

            <div className="px-4 py-2 rounded-xl border border-green-400/20 bg-green-400/5 text-green-400 text-sm">
              Scan Completed
            </div>

          </div>

        </div>


        {/* SECURITY SCORE */}
        <section className="mt-10 grid lg:grid-cols-3 gap-6">

          {/* SCORE */}
          <div className="lg:col-span-1 rounded-2xl border border-white/10 bg-[#090d15] p-7">

            <div className="flex justify-between items-center">

              <div>
                <p className="text-sm text-gray-500">
                  Security Score
                </p>

                <h3 className="text-5xl font-bold mt-3">
                  42
                  <span className="text-xl text-gray-600">
                    /100
                  </span>
                </h3>
              </div>

              <div className="w-20 h-20 rounded-full border-4 border-red-400/40 flex items-center justify-center">
                <ShieldAlert
                  className="text-red-400"
                  size={30}
                />
              </div>

            </div>

            <div className="mt-7 h-2 rounded-full bg-white/5 overflow-hidden">

              <div className="h-full w-[42%] bg-gradient-to-r from-red-500 to-orange-400 rounded-full" />

            </div>

            <p className="text-red-400 text-sm mt-4">
              High security risk detected
            </p>

          </div>


          {/* SUMMARY */}
          <div className="lg:col-span-2 grid sm:grid-cols-3 gap-4">

            <SummaryCard
              icon={<ShieldAlert />}
              number="1"
              label="Critical"
              type="critical"
            />

            <SummaryCard
              icon={<AlertTriangle />}
              number="2"
              label="High Risk"
              type="high"
            />

            <SummaryCard
              icon={<Activity />}
              number="3"
              label="Tests Run"
              type="normal"
            />

          </div>

        </section>


        {/* AI ATTACK RESULT */}
        <section className="mt-8 rounded-2xl border border-red-400/20 bg-[#090d15] overflow-hidden">

          <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">

            <div className="flex items-center gap-3">

              <Bug className="text-red-400" />

              <div>
                <h3 className="font-semibold">
                  AI Attack Simulation
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  Safe sandbox execution
                </p>
              </div>

            </div>

            <span className="text-xs text-red-400">
              EXPLOIT DETECTED
            </span>

          </div>

          <div className="p-6">

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">

              <div>

                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  Attack Type
                </p>

                <h4 className="text-2xl font-bold mt-2">
                  Reentrancy Attack
                </h4>

                <p className="text-gray-400 text-sm mt-2 max-w-2xl">
                  AI successfully simulated a reentrancy exploit against
                  the contract inside the isolated security sandbox.
                </p>

              </div>

              <div className="px-5 py-3 rounded-xl bg-red-400/10 border border-red-400/20 text-red-400 text-sm font-semibold">
                CRITICAL
              </div>

            </div>

          </div>

        </section>


        {/* VULNERABILITIES */}
        <section className="mt-8">

          <div className="flex justify-between items-center mb-5">

            <div>
              <h3 className="text-2xl font-bold">
                Vulnerabilities
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Issues identified during security analysis.
              </p>
            </div>

          </div>


          <div className="space-y-4">

            <Vulnerability
              severity="Critical"
              title="Reentrancy Vulnerability"
              location="withdraw()"
              description="External call may allow an attacker to repeatedly execute the withdrawal function."
              color="red"
            />

            <Vulnerability
              severity="High"
              title="Missing Access Control"
              location="adminFunction()"
              description="Sensitive function does not properly restrict unauthorized callers."
              color="orange"
            />

            <Vulnerability
              severity="High"
              title="Unchecked External Call"
              location="transferFunds()"
              description="External call result is not properly validated."
              color="orange"
            />

          </div>

        </section>


        {/* AI RECOMMENDATION */}
        <section className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.03] p-7">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

            <div className="flex gap-4">

              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center shrink-0">

                <Wrench
                  className="text-cyan-400"
                  size={22}
                />

              </div>

              <div>

                <h3 className="text-xl font-semibold">
                  AI Fix Available
                </h3>

                <p className="text-gray-400 text-sm mt-2 max-w-2xl">
                  SecureAI can generate a security patch for the detected
                  vulnerabilities and then re-test the contract.
                </p>

              </div>

            </div>

            <button
              onClick={() =>
                (window.location.href = "/fix")
              }
              className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-cyan-400 text-black font-bold hover:bg-cyan-300 transition whitespace-nowrap"
            >
              Generate AI Fix
              <ArrowRight size={18} />
            </button>

          </div>

        </section>

      </main>

    </div>
  );
}


/* SUMMARY CARD */

function SummaryCard({
  icon,
  number,
  label,
  type,
}) {

  const styles =
    type === "critical"
      ? "text-red-400 bg-red-400/10"
      : type === "high"
      ? "text-orange-400 bg-orange-400/10"
      : "text-cyan-400 bg-cyan-400/10";

  return (
    <div className="rounded-2xl border border-white/10 bg-[#090d15] p-6">

      <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${styles}`}>
        {icon}
      </div>

      <p className="text-3xl font-bold mt-6">
        {number}
      </p>

      <p className="text-sm text-gray-500 mt-1">
        {label}
      </p>

    </div>
  );
}


/* VULNERABILITY */

function Vulnerability({
  severity,
  title,
  location,
  description,
  color,
}) {

  const styles =
    color === "red"
      ? {
          border: "border-red-400/20",
          badge: "bg-red-400/10 text-red-400",
        }
      : {
          border: "border-orange-400/20",
          badge: "bg-orange-400/10 text-orange-400",
        };

  return (
    <div className={`rounded-2xl border ${styles.border} bg-[#090d15] p-6`}>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

        <div className="flex gap-4">

          <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${styles.badge}`}>
            <Bug size={20} />
          </div>

          <div>

            <div className="flex flex-wrap items-center gap-3">

              <h4 className="font-semibold text-lg">
                {title}
              </h4>

              <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${styles.badge}`}>
                {severity}
              </span>

            </div>

            <p className="text-xs text-gray-600 mt-2">
              Location: {location}
            </p>

            <p className="text-sm text-gray-400 mt-3 max-w-3xl">
              {description}
            </p>

          </div>

        </div>

        <Lock
          className="text-gray-700"
          size={20}
        />

      </div>

    </div>
  );
}

export default Report;