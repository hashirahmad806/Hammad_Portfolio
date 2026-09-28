import React, { useState } from 'react';

type Tab = 'agent' | 'telemetry' | 'diagnostic';

export default function InteractiveSandbox() {
  const [activeTab, setActiveTab] = useState<Tab>('agent');
  
  // Agent simulation state
  const [agentLogs, setAgentLogs] = useState<string[]>([
    'System ready. Autonomous DAG agent orchestrator initialized.',
    'Click "Run Simulation" to execute automated refactor pipeline.'
  ]);
  const [isRunningAgent, setIsRunningAgent] = useState(false);

  // Diagnostic state
  const [vitalHeartRate, setVitalHeartRate] = useState(82);
  const [vitalOxygen, setVitalOxygen] = useState(98);
  const [vitalBloodPressure, setVitalBloodPressure] = useState(120);

  // Agent runner
  const runAgentSimulation = () => {
    if (isRunningAgent) return;
    setIsRunningAgent(true);
    setAgentLogs(['[00:00.12] Initializing DAG agent runtime context...']);
    
    const steps = [
      '[00:00.45] CriticAgent: Parsing codebase AST for asynchronous bottlenecks...',
      '[00:00.82] RetrieverAgent: Querying Vector DB for cached indexing patterns (Score: 0.94)...',
      '[00:01.20] SynthesizerAgent: Refactoring MongoDB aggregation pipeline with compound index...',
      '[00:01.65] ValidatorAgent: Running automated containerized test suite (14/14 tests PASS)...',
      '[00:02.10] Completed! Hallucination Risk: 0.02% · Latency Reduced: -42ms · PR Generated.'
    ];

    steps.forEach((step, i) => {
      setTimeout(() => {
        setAgentLogs((prev) => [...prev, step]);
        if (i === steps.length - 1) {
          setIsRunningAgent(false);
        }
      }, (i + 1) * 600);
    });
  };

  // Diagnostic calculation
  const calculateRiskScore = () => {
    let score = 5;
    if (vitalHeartRate > 100 || vitalHeartRate < 60) score += 30;
    if (vitalOxygen < 95) score += 40;
    if (vitalBloodPressure > 140) score += 20;
    return Math.min(score, 99);
  };

  const riskScore = calculateRiskScore();

  return (
    <div className="w-full rounded-[2rem] p-1.5 bg-white/[0.03] ring-1 ring-white/[0.08] shadow-2xl">
      <div className="rounded-[calc(2rem-0.375rem)] bg-surface p-6 sm:p-8">
        {/* Terminal Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
            </div>
            <span className="font-mono text-xs text-content-tertiary">
              hammad@sys-lab:~/interactive-experiments
            </span>
          </div>

          {/* Sandbox Tab Controls */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-surface-subtle border border-white/[0.06]">
            <button
              onClick={() => setActiveTab('agent')}
              className={`px-3 py-1 rounded-full font-mono text-[11px] uppercase tracking-wider transition-all ${
                activeTab === 'agent'
                  ? 'bg-accent-electric text-white font-medium'
                  : 'text-content-secondary hover:text-white'
              }`}
            >
              01. AI Agent DAG
            </button>
            <button
              onClick={() => setActiveTab('diagnostic')}
              className={`px-3 py-1 rounded-full font-mono text-[11px] uppercase tracking-wider transition-all ${
                activeTab === 'diagnostic'
                  ? 'bg-accent-telemetry text-void font-semibold'
                  : 'text-content-secondary hover:text-white'
              }`}
            >
              02. ML Inference
            </button>
            <button
              onClick={() => setActiveTab('telemetry')}
              className={`px-3 py-1 rounded-full font-mono text-[11px] uppercase tracking-wider transition-all ${
                activeTab === 'telemetry'
                  ? 'bg-accent-amber text-void font-semibold'
                  : 'text-content-secondary hover:text-white'
              }`}
            >
              03. Real-Time Telemetry
            </button>
          </div>
        </div>

        {/* Tab 1: AI Agent DAG Simulator */}
        {activeTab === 'agent' && (
          <div>
            <div className="flex items-center justify-between gap-4 mb-4">
              <div>
                <h4 className="font-display font-semibold text-lg text-content-primary">
                  Autonomous Multi-Agent Refactoring DAG
                </h4>
                <p className="text-xs text-content-secondary font-light">
                  Simulate dynamic tool-calling, reflection loops, and AST validation in real-time.
                </p>
              </div>
              <button
                onClick={runAgentSimulation}
                disabled={isRunningAgent}
                className="px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider bg-accent-electric text-white font-medium hover:bg-indigo-500 disabled:opacity-50 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(99,102,241,0.3)]"
              >
                {isRunningAgent ? (
                  <>
                    <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                    Executing...
                  </>
                ) : (
                  <>
                    <span>Run Simulation</span>
                    <span>▶</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-4 rounded-xl bg-void font-mono text-xs text-content-secondary border border-white/[0.06] min-h-[180px] max-h-[220px] overflow-y-auto space-y-2">
              {agentLogs.map((log, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-accent-electric select-none">›</span>
                  <span className={index === agentLogs.length - 1 ? 'text-content-primary font-medium' : ''}>
                    {log}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Clinical ML Inference Simulator */}
        {activeTab === 'diagnostic' && (
          <div>
            <div className="mb-4">
              <h4 className="font-display font-semibold text-lg text-content-primary">
                Predictive Clinical Diagnostic Scoring
              </h4>
              <p className="text-xs text-content-secondary font-light">
                Adjust physiological vitals to test sub-80ms ensemble risk inference.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="p-4 rounded-xl bg-surface-subtle/50 border border-white/[0.04]">
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-content-secondary">Heart Rate (BPM)</span>
                  <span className="text-content-primary font-bold">{vitalHeartRate}</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="160"
                  value={vitalHeartRate}
                  onChange={(e) => setVitalHeartRate(Number(e.target.value))}
                  className="w-full accent-accent-electric cursor-pointer"
                />
              </div>

              <div className="p-4 rounded-xl bg-surface-subtle/50 border border-white/[0.04]">
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-content-secondary">Blood Oxygen (SpO2 %)</span>
                  <span className="text-content-primary font-bold">{vitalOxygen}%</span>
                </div>
                <input
                  type="range"
                  min="85"
                  max="100"
                  value={vitalOxygen}
                  onChange={(e) => setVitalOxygen(Number(e.target.value))}
                  className="w-full accent-accent-telemetry cursor-pointer"
                />
              </div>

              <div className="p-4 rounded-xl bg-surface-subtle/50 border border-white/[0.04]">
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-content-secondary">Systolic BP (mmHg)</span>
                  <span className="text-content-primary font-bold">{vitalBloodPressure}</span>
                </div>
                <input
                  type="range"
                  min="90"
                  max="180"
                  value={vitalBloodPressure}
                  onChange={(e) => setVitalBloodPressure(Number(e.target.value))}
                  className="w-full accent-accent-amber cursor-pointer"
                />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-void border border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-content-tertiary">Calculated Triage Severity:</span>
                <span className={`font-mono text-sm font-bold ${riskScore > 40 ? 'text-rose-400' : 'text-emerald-400'}`}>
                  {riskScore > 40 ? 'HIGH RISK ELEVATION' : 'NOMINAL STABILITY'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-content-secondary">Score:</span>
                <span className="font-mono text-lg font-bold text-content-primary">{riskScore}/100</span>
                <span className="text-[10px] font-mono text-content-tertiary">(Latency: 42ms)</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Real-Time Telemetry Sandbox */}
        {activeTab === 'telemetry' && (
          <div>
            <div className="mb-4">
              <h4 className="font-display font-semibold text-lg text-content-primary">
                High-Frequency Market Tick Stream Simulation
              </h4>
              <p className="text-xs text-content-secondary font-light">
                Testing offscreen canvas render loop under simulated 5,000 msg/sec load.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-void border border-white/[0.06]">
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-wider text-content-tertiary">Ingestion Rate</span>
                <span className="font-mono text-xl font-bold text-amber-400">5,120 /s</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-wider text-content-tertiary">Canvas Framerate</span>
                <span className="font-mono text-xl font-bold text-emerald-400">60.0 FPS</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-wider text-content-tertiary">Memory Buffer</span>
                <span className="font-mono text-xl font-bold text-indigo-400">1.8 MB</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-wider text-content-tertiary">Dropped Frames</span>
                <span className="font-mono text-xl font-bold text-content-primary">0 (0.00%)</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
