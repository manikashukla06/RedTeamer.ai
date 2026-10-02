import {
    ShieldCheck,
    ArrowLeft,
    Upload,
    FileCode2,
    Play,
    CheckCircle2,
} from "lucide-react";

function Scan() {
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

                    <button className="text-sm text-gray-400 hover:text-white">
                        Dashboard
                    </button>

                </div>
            </nav>

            {/* MAIN */}
            <main className="max-w-5xl mx-auto px-6 py-16">

                {/* BACK */}
                <button
                    onClick={() => window.history.back()}
                    className="flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-10"
                >
                    <ArrowLeft size={17} />
                    Back
                </button>

                {/* HEADING */}
                <div className="text-center">

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 text-xs font-medium">
                        <ShieldCheck size={15} />
                        AI SECURITY SCANNER
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mt-6">
                        Secure Your{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
                            Smart Contract
                        </span>
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
                        Upload your Solidity contract or paste your code below.
                        SecureAI will analyze it and simulate potential attacks.
                    </p>

                </div>

                {/* UPLOAD AREA */}
                <div className="mt-12">

                    <div className="border border-dashed border-cyan-400/30 rounded-2xl bg-[#090d15] p-10 text-center hover:border-cyan-400/60 transition cursor-pointer">

                        <div className="mx-auto w-16 h-16 rounded-2xl bg-cyan-400/10 flex items-center justify-center">
                            <Upload className="text-cyan-400" size={28} />
                        </div>

                        <h3 className="text-lg font-semibold mt-5">
                            Upload Smart Contract
                        </h3>

                        <p className="text-sm text-gray-500 mt-2">
                            Drag & drop your .sol file here
                        </p>

                        <button className="mt-6 px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition text-sm">
                            Browse Files
                        </button>

                        <p className="text-xs text-gray-600 mt-4">
                            Supported format: Solidity (.sol)
                        </p>

                    </div>

                </div>

                {/* OR */}
                <div className="flex items-center gap-4 my-10">
                    <div className="h-px bg-white/10 flex-1" />
                    <span className="text-xs text-gray-600">
                        OR PASTE CODE
                    </span>
                    <div className="h-px bg-white/10 flex-1" />
                </div>

                {/* CODE EDITOR */}
                <div className="rounded-2xl border border-white/10 bg-[#090d15] overflow-hidden">

                    {/* EDITOR HEADER */}
                    <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">

                        <div className="flex items-center gap-3">
                            <FileCode2 className="text-cyan-400" size={18} />

                            <span className="text-sm text-gray-300">
                                SmartContract.sol
                            </span>
                        </div>

                        <span className="text-xs text-gray-600">
                            Solidity
                        </span>

                    </div>

                    {/* CODE */}
                    <textarea
                        placeholder={`// Paste your Solidity smart contract here...

pragma solidity ^0.8.0;

contract MyContract {

    // Your code here

}`}
                        className="w-full h-80 bg-transparent p-6 text-sm text-gray-300 font-mono outline-none resize-none placeholder:text-gray-700"
                    />

                </div>

                {/* SECURITY INFO */}
                <div className="grid md:grid-cols-3 gap-4 mt-6">

                    <SecurityItem
                        icon={<CheckCircle2 />}
                        text="Safe Sandbox"
                    />

                    <SecurityItem
                        icon={<CheckCircle2 />}
                        text="AI Attack Simulation"
                    />

                    <SecurityItem
                        icon={<CheckCircle2 />}
                        text="Automated Verification"
                    />

                </div>

                {/* SCAN BUTTON */}
                <div className="flex justify-center mt-10">

                    <button
                        onClick={() => (window.location.href = "/scan-progress")}
                        className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-cyan-400 text-black font-bold hover:bg-cyan-300 transition shadow-lg shadow-cyan-400/10"
                    >

                        <Play size={18} />

                        Start Security Scan

                        <span className="group-hover:translate-x-1 transition">
                            →
                        </span>

                    </button>

                </div>

            </main>

        </div>
    );
}

function SecurityItem({ icon, text }) {
    return (
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4">

            <span className="text-cyan-400">
                {icon}
            </span>

            <span className="text-sm text-gray-400">
                {text}
            </span>

        </div>
    );
}

export default Scan;