import { useEffect, useState } from "react";
import {
  ShieldCheck,
  Brain,
  Bug,
  LockKeyhole,
  CheckCircle2,
  Loader2,
  ArrowRight,
} from "lucide-react";

function ScanProgress() {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Loading smart contract",
    "Analyzing contract structure",
    "Detecting vulnerabilities",
    "Simulating AI attacks",
    "Verifying security",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress < 20) {
      setCurrentStep(0);
    } else if (progress < 40) {
      setCurrentStep(1);
    } else if (progress < 65) {
      setCurrentStep(2);
    } else if (progress < 90) {
      setCurrentStep(3);
    } else {
      setCurrentStep(4);
    }
  }, [progress]);

  const scanComplete = progress === 100;

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

          <div className="text-xs text-gray-500">
            SECURITY ENGINE
          </div>

        </div>
      </nav>

      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-6 py-14">

        {/* HEADER */}
        <div className="text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 text-xs font-medium">

            {!scanComplete && (
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            )}

            {scanComplete ? (
              <>
                <CheckCircle2 size={15} />
                SCAN COMPLETE
              </>
            ) : (
              "AI SECURITY SCAN IN PROGRESS"
            )}

          </div>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">

            {scanComplete ? (
              <>
                Security Scan{" "}
                <span className="text-cyan-400">
                  Complete
                </span>
              </>
            ) : (
              <>
                AI is{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
                  Testing
                </span>{" "}
                Your Contract
              </>
            )}

          </h2>

          <p className="text-gray-400 mt-4">
            MyContract.sol
          </p>

        </div>

        {/* PROGRESS */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-[#090d15] p-7">

          <div className="flex justify-between items-center mb-4">

            <div className="flex items-center gap-3">

              {!scanComplete ? (
                <Loader2
                  className="text-cyan-400 animate-spin"
                  size={20}
                />
              ) : (
                <CheckCircle2
                  className="text-cyan-400"
                  size={20}
                />
              )}

              <span className="font-medium">
                {scanComplete
                  ? "Security verification completed"
                  : steps[currentStep]}
              </span>

            </div>

            <span className="text-cyan-400 font-mono font-bold">
              {progress}%
            </span>

          </div>

          <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">

            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />

          </div>

        </div>

        {/* SCAN MODULES */}
        <div className="grid md:grid-cols-3 gap-5 mt-6">

          <ScanCard
            icon={<Brain />}
            title="AI Analysis"
            description="Understanding contract behavior"
            status={progress >= 20 ? "Completed" : "Analyzing"}
            active={progress >= 20 && progress < 65}
            complete={progress >= 20}
          />

          <ScanCard
            icon={<Bug />}
            title="Attack Simulation"
            description="Testing potential exploit paths"
            status={progress >= 90 ? "Completed" : progress >= 65 ? "Running" : "Waiting"}
            active={progress >= 65 && progress < 90}
            complete={progress >= 90}
          />

          <ScanCard
            icon={<LockKeyhole />}
            title="Security Verification"
            description="Verifying contract protection"
            status={progress === 100 ? "Completed" : progress >= 90 ? "Running" : "Waiting"}
            active={progress >= 90 && progress < 100}
            complete={progress === 100}
          />

        </div>

        {/* LIVE LOGS */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-[#090d15] overflow-hidden">

          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

              <span className="font-semibold">
                Security Engine Logs
              </span>
            </div>

            <span className="text-xs text-gray-600">
              LIVE
            </span>

          </div>

          <div className="p-6 font-mono text-sm space-y-3">

            <LogItem
              time="00:01"
              text="Smart contract loaded successfully"
              done={progress >= 20}
            />

            <LogItem
              time="00:04"
              text="Contract structure analyzed"
              done={progress >= 40}
            />

            <LogItem
              time="00:08"
              text="Scanning for security vulnerabilities"
              done={progress >= 65}
            />

            <LogItem
              time="00:13"
              text="AI attack simulation started"
              done={progress >= 90}
            />

            <LogItem
              time="00:18"
              text="Security verification completed"
              done={progress === 100}
            />

          </div>

        </div>

        {/* COMPLETE */}
        {scanComplete && (
          <div className="mt-8 text-center">

            <div className="inline-flex items-center gap-2 text-cyan-400 mb-5">
              <CheckCircle2 size={20} />
              Scan successfully completed
            </div>

            <br />

            <button
              onClick={() =>
                (window.location.href = "/report")
              }
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-cyan-400 text-black font-bold hover:bg-cyan-300 transition"
            >
              View Security Report
              <ArrowRight size={18} />
            </button>

          </div>
        )}

      </main>

    </div>
  );
}


/* SCAN CARD */

function ScanCard({
  icon,
  title,
  description,
  status,
  active,
  complete,
}) {
  return (
    <div
      className={`rounded-2xl border p-6 transition ${
        active
          ? "border-cyan-400/40 bg-cyan-400/5"
          : complete
          ? "border-green-400/20 bg-green-400/5"
          : "border-white/10 bg-[#090d15]"
      }`}
    >

      <div className="flex items-center justify-between">

        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center ${
            complete
              ? "bg-green-400/10 text-green-400"
              : active
              ? "bg-cyan-400/10 text-cyan-400"
              : "bg-white/5 text-gray-500"
          }`}
        >
          {icon}
        </div>

        {complete && (
          <CheckCircle2
            className="text-green-400"
            size={19}
          />
        )}

        {active && (
          <Loader2
            className="text-cyan-400 animate-spin"
            size={19}
          />
        )}

      </div>

      <h3 className="font-semibold text-lg mt-5">
        {title}
      </h3>

      <p className="text-gray-500 text-sm mt-2">
        {description}
      </p>

      <p
        className={`text-xs mt-5 ${
          complete
            ? "text-green-400"
            : active
            ? "text-cyan-400"
            : "text-gray-600"
        }`}
      >
        {status}
      </p>

    </div>
  );
}


/* LOG ITEM */

function LogItem({ time, text, done }) {
  return (
    <div className="flex items-center gap-4">

      <span className="text-gray-700">
        [{time}]
      </span>

      <span
        className={
          done
            ? "text-gray-300"
            : "text-gray-700"
        }
      >
        {done ? "✓" : "○"}
      </span>

      <span
        className={
          done
            ? "text-gray-400"
            : "text-gray-700"
        }
      >
        {text}
      </span>

    </div>
  );
}

export default ScanProgress;

