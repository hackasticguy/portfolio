import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Shield, ArrowRight, Play, RefreshCw, CheckCircle, ShieldAlert } from 'lucide-react';
import { skillsData, projectsData, experienceData, certificationsData } from '../data';

interface CommandOutput {
  id: string;
  type: 'input' | 'output' | 'error' | 'success' | 'info';
  text: string | React.ReactNode;
}

export default function InteractiveTerminal() {
  const [history, setHistory] = useState<CommandOutput[]>([
    { id: '1', type: 'info', text: 'SEC_OP_TERMINAL v2.8 - Secure Red Team Workspace.' },
    { id: '2', type: 'info', text: 'Authorized access only. Logging active.' },
    { id: '3', type: 'success', text: 'System status: ONLINE | EDR Bypass: SUCCESS | Tunnel: ACTIVE' },
    { id: '4', type: 'output', text: 'Type "help" to list available offensive security commands, or click the quick-links below.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isSimulating, setIsSimulating] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // Auto-scroll to bottom of terminal when history changes
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleCommand = (commandText: string) => {
    const trimmed = commandText.trim();
    if (!trimmed) return;

    const cmd = trimmed.toLowerCase();
    const newEntry: CommandOutput = { id: Date.now().toString() + '-in', type: 'input', text: `$ ${trimmed}` };
    
    let outputs: CommandOutput[] = [];
    const idBase = Date.now();

    switch (cmd) {
      case 'help':
        outputs = [
          {
            id: idBase + '-1',
            type: 'info',
            text: (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono text-gray-300 py-1">
                <div><span className="text-emerald-400 font-bold">whoami</span> - Identity details</div>
                <div><span className="text-emerald-400 font-bold">skills</span> - Core capabilities</div>
                <div><span className="text-emerald-400 font-bold">projects</span> - Security reviews</div>
                <div><span className="text-emerald-400 font-bold">experience</span> - Work timeline</div>
                <div><span className="text-emerald-400 font-bold">certs</span> - Credentials</div>
                <div><span className="text-emerald-400 font-bold">exploit</span> - Simulate attack</div>
                <div><span className="text-emerald-400 font-bold">system</span> - Target server stats</div>
                <div><span className="text-emerald-400 font-bold">clear</span> - Wipe terminal</div>
              </div>
            )
          }
        ];
        break;

      case 'whoami':
        outputs = [
          {
            id: idBase + '-1',
            type: 'output',
            text: 'OPERATOR: Red Team Consultant & Pentester (6 Months Professional offensive Security XP)'
          },
          {
            id: idBase + '-2',
            type: 'output',
            text: 'MISSION: Identifying, exploiting, and securing critical vectors across Fortune 100 enterprise environments.'
          },
          {
            id: idBase + '-3',
            type: 'success',
            text: 'TRUST SCORE: 99.8% | CLASSIFICATION: SEC_OP_ADMIN'
          }
        ];
        break;

      case 'skills':
        outputs = [
          {
            id: idBase + '-1',
            type: 'info',
            text: '--- OFFENSIVE CYBERSECURITY CAPABILITIES ---'
          },
          ...skillsData.map((s, idx) => ({
            id: idBase + '-skill-' + idx,
            type: 'success' as const,
            text: (
              <div className="flex justify-between items-center max-w-md font-mono text-xs">
                <span className="text-gray-300">[{s.category}] {s.name}</span>
                <span className="text-emerald-400 font-bold">
                  {'█'.repeat(Math.round(s.level / 10)) + '░'.repeat(10 - Math.round(s.level / 10))} {s.level}%
                </span>
              </div>
            )
          }))
        ];
        break;

      case 'projects':
        outputs = [
          { id: idBase + '-1', type: 'info', text: '--- HIGH-IMPACT SECURITY ENGAGEMENTS ---' },
          ...projectsData.map((p, idx) => ({
            id: idBase + '-proj-' + idx,
            type: 'output' as const,
            text: (
              <div className="pl-2 font-mono text-xs py-1">
                <div className="text-emerald-300 font-bold">⚡ {p.title} ({p.category})</div>
                <div className="text-gray-400 italic text-[11px]">{p.description}</div>
                <div className="text-rose-400 font-bold">Vulnerabilities: {p.vulnerabilitiesFound.length} critical flaws identified.</div>
              </div>
            )
          }))
        ];
        break;

      case 'experience':
        outputs = [
          { id: idBase + '-1', type: 'info', text: '--- TIMELINE RECONNAISSANCE ---' },
          ...experienceData.map((e, idx) => ({
            id: idBase + '-exp-' + idx,
            type: 'output' as const,
            text: (
              <div className="pl-2 font-mono text-xs py-1 border-l border-emerald-500/20 my-1">
                <div className="text-emerald-400 font-bold">{e.role} | {e.company}</div>
                <div className="text-gray-400 text-[11px]">{e.duration}</div>
                <ul className="list-disc list-inside text-gray-300 text-[11px] mt-1 space-y-0.5">
                  {e.description.map((desc, dIdx) => <li key={dIdx}>{desc}</li>)}
                </ul>
              </div>
            )
          }))
        ];
        break;

      case 'certs':
        outputs = [
          { id: idBase + '-1', type: 'info', text: '--- OFFENSIVE SECURITY CREDENTIALS ---' },
          ...certificationsData.map((c, idx) => ({
            id: idBase + '-cert-' + idx,
            type: 'success' as const,
            text: `✔ [${c.issuer.toUpperCase()}] ${c.name} - Issued ${c.date} (ID: ${c.credentialId || 'N/A'})`
          }))
        ];
        break;

      case 'system':
        outputs = [
          { id: idBase + '-1', type: 'output', text: 'C2 NODE: ais-prod-router-01.local' },
          { id: idBase + '-2', type: 'output', text: 'PLATFORM: Linux RedTeamOS v5.14-hardened' },
          { id: idBase + '-3', type: 'output', text: 'CPU: AMD EPYC 32-Core Processor (Virt)' },
          { id: idBase + '-4', type: 'success', text: 'ACTIVE SHELLS: 4 Web Shells, 2 Secure Encrypted Beacons' }
        ];
        break;

      case 'clear':
        setHistory([]);
        setInputValue('');
        return;

      case 'exploit':
        runExploitSimulation();
        setInputValue('');
        return;

      default:
        outputs = [
          {
            id: idBase + '-err',
            type: 'error',
            text: `Command not found: "${trimmed}". Type "help" for valid security vectors.`
          }
        ];
    }

    setHistory((prev) => [...prev, newEntry, ...outputs]);
    setInputValue('');
  };

  const runExploitSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setHistory((prev) => [
      ...prev,
      { id: Date.now() + '-sim-in', type: 'input', text: '$ exploit' },
      { id: Date.now() + '-sim-1', type: 'info', text: '⚡ Starting Automated Adversary Simulation on targets...' }
    ]);

    const stages = [
      { text: '[Reconnaissance] Enumerating open ports and HTTP banners...', delay: 800, type: 'info' as const },
      { text: '[Scanning] Found Port 443 / HTTPS running vulnerable payment gateway v1.4.1.', delay: 1600, type: 'info' as const },
      { text: '[Vulnerability Analysis] Match found: CVE-2026-9041 (Insecure Deserialization).', delay: 2400, type: 'info' as const },
      { text: '[Exploitation] Crafting deserialization payload targeting payment middleware...', delay: 3200, type: 'info' as const },
      { text: '[Exploitation] Injecting custom direct system call payload. Bypassing EDR heuristics...', delay: 4000, type: 'info' as const },
      { text: '[Pivoting] Spawning reverse shell to interactive terminal. Est. TTL: 4500ms...', delay: 4800, type: 'info' as const },
      { text: '✔ [Connection] Session established! Target: finance-db-01.prod.local', delay: 5600, type: 'success' as const },
      { text: '✔ [Privilege Escalation] Explited dirty pipe vulnerability. Elevated to ROOT privileges.', delay: 6400, type: 'success' as const },
      { text: '💥 EXPLOIT SUCCESSFUL. Root Flag captured:', delay: 7200, type: 'success' as const },
      { text: 'FLAG{CYBER_AI_PRIME_OFFENSIVE_EXPLOITED_2026}', delay: 7300, type: 'success' as const }
    ];

    stages.forEach((stage, idx) => {
      setTimeout(() => {
        setHistory((prev) => [
          ...prev,
          {
            id: Date.now() + '-stage-' + idx,
            type: stage.type,
            text: (
              <div className={`font-mono text-xs flex items-center gap-2 ${
                stage.type === 'success' ? 'text-emerald-400 font-bold' : 'text-gray-300'
              }`}>
                {stage.type === 'success' ? <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" /> : <Shield className="w-3 h-3 text-emerald-600 animate-pulse shrink-0" />}
                {stage.text}
              </div>
            )
          }
        ]);

        if (idx === stages.length - 1) {
          setIsSimulating(false);
        }
      }, stage.delay);
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputValue);
    }
  };

  return (
    <div 
      className="bg-[#0c0c0c] border border-emerald-500/30 rounded-lg p-4 font-mono shadow-2xl relative overflow-hidden text-emerald-400 flex flex-col h-[480px] max-w-4xl mx-auto backdrop-blur-md cursor-text"
      onClick={focusInput}
    >
      {/* Top Bar Decoration */}
      <div className="flex justify-between items-center border-b border-emerald-500/20 pb-2 mb-3 select-none pointer-events-none">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span className="text-xs font-semibold text-emerald-400 tracking-wider">ROOT@SEC_OP_TERMINAL: ~</span>
        </div>
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
        </div>
      </div>

      {/* Terminal Output Stream */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-1.5 scrollbar-thin scrollbar-thumb-emerald-500/20 scrollbar-track-transparent">
        {history.map((item) => {
          let textClass = 'text-gray-300';
          if (item.type === 'input') textClass = 'text-emerald-400 font-bold';
          if (item.type === 'error') textClass = 'text-rose-500 font-semibold';
          if (item.type === 'success') textClass = 'text-emerald-300 font-medium';
          if (item.type === 'info') textClass = 'text-emerald-500 font-semibold';

          return (
            <div key={item.id} className={`text-xs break-words leading-relaxed ${textClass}`}>
              {item.text}
            </div>
          );
        })}
        {isSimulating && (
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold animate-pulse">
            <RefreshCw className="w-3 h-3 animate-spin text-emerald-400" />
            <span>Simulating intrusion campaign...</span>
          </div>
        )}
        <div ref={terminalEndRef} />
      </div>

      {/* Quick Action Preset Tags */}
      <div className="flex flex-wrap gap-2 pt-2 mt-2 border-t border-emerald-500/10 text-[10px] select-none">
        <span className="text-gray-500 self-center">Presets:</span>
        {[
          { label: 'whoami', cmd: 'whoami' },
          { label: 'skills', cmd: 'skills' },
          { label: 'projects', cmd: 'projects' },
          { label: 'certs', cmd: 'certs' },
          { label: 'exploit ⚡', cmd: 'exploit' }
        ].map((btn) => (
          <button
            key={btn.label}
            type="button"
            disabled={isSimulating}
            onClick={(e) => {
              e.stopPropagation();
              if (btn.cmd === 'exploit') {
                runExploitSimulation();
              } else {
                handleCommand(btn.cmd);
              }
            }}
            className="px-2 py-0.5 bg-emerald-950/40 border border-emerald-500/20 hover:border-emerald-400 text-emerald-400 rounded hover:bg-emerald-500/10 cursor-pointer disabled:opacity-50 transition-colors"
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Input Row */}
      <div className="flex items-center gap-2 mt-3 pt-2 border-t border-emerald-500/20">
        <ArrowRight className="w-3 h-3 text-emerald-400 shrink-0" />
        <span className="text-emerald-400 font-bold text-xs select-none">$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          disabled={isSimulating}
          placeholder={isSimulating ? 'Engaged in combat...' : 'Type "help", "whoami", "exploit"...'}
          className="flex-1 bg-transparent border-none outline-none font-mono text-xs text-white placeholder-emerald-600/50"
          autoFocus
        />
      </div>
    </div>
  );
}
