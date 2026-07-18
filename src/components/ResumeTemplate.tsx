import React from 'react';
import { Phone, Mail, MapPin, Github, Linkedin, Award, BookOpen, Briefcase, Code, Cpu, Target, Network } from 'lucide-react';

interface ResumeTemplateProps {
  innerRef: React.RefObject<HTMLDivElement | null>;
}

export default function ResumeTemplate({ innerRef }: ResumeTemplateProps) {
  return (
    <div className="absolute left-[-9999px] top-[-9999px]">
      <div
        ref={innerRef}
        className="w-[800px] min-h-[1130px] bg-white text-neutral-900 p-8 font-sans relative"
        style={{
          fontFamily: "'Inter', sans-serif",
          '--color-neutral-900': '#171717',
          '--color-neutral-800': '#262626',
          '--color-neutral-700': '#404040',
          '--color-neutral-600': '#525252',
          '--color-neutral-400': '#a3a3a3',
          '--color-neutral-300': '#d4d4d4',
          '--color-neutral-100': '#f5f5f5',
          '--color-emerald-800': '#065f46',
          '--color-emerald-700': '#047857',
          '--color-emerald-300': '#6ee7b7',
          '--color-blue-600': '#2563eb',
          '--color-orange-600': '#ea580c',
          '--color-black': '#000000',
          '--color-white': '#ffffff',
        } as React.CSSProperties}
        id="resume-print-area"
      >
        {/* Header Section */}
        <div className="text-center space-y-2 pb-4">
          <h1 className="text-5xl font-black tracking-widest text-black">ANUBHAV</h1>
          <p className="text-xs font-bold tracking-widest text-neutral-700 uppercase">
            Aspiring Penetration Tester | Cybersecurity Enthusiast
          </p>
          
          {/* Quick Contacts */}
          <div className="flex justify-center items-center gap-6 text-[11px] text-neutral-800 font-semibold pt-1">
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3 text-black" />
              +91 9643522065
            </span>
            <span className="w-1 h-1 rounded-full bg-neutral-400" />
            <span className="flex items-center gap-1">
              <Mail className="w-3 h-3 text-black" />
              hackasticguy@gmail.com
            </span>
            <span className="w-1 h-1 rounded-full bg-neutral-400" />
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-black" />
              North-West Delhi, India
            </span>
          </div>

          {/* Social Profiles */}
          <div className="flex justify-center items-center flex-wrap gap-x-5 gap-y-1.5 text-[10px] text-neutral-700 font-mono pt-1 border-b border-neutral-300 pb-4">
            <span className="flex items-center gap-1">
              <Github className="w-3 h-3 text-black" />
              github.com/hackasticguy
            </span>
            <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full" />
            <span className="flex items-center gap-1">
              <Linkedin className="w-3 h-3 text-blue-600" />
              linkedin.com/in/anubhav0010
            </span>
            <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full" />
            <span className="flex items-center gap-1">
              <span className="text-orange-600 font-extrabold text-[9px]">THM</span>
              tryhackme.com/hackasticguy
            </span>
            <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full" />
            <span className="flex items-center gap-1">
              <span className="text-emerald-600 font-extrabold text-[9px]">HTB</span>
              app.hackthebox.com/users/3720480
            </span>
          </div>
        </div>

        {/* Experience Section */}
        <div className="space-y-3 mt-4">
          <div className="border-b-2 border-black pb-0.5">
            <h2 className="text-sm font-black tracking-wider uppercase text-black flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-black" />
              Experience
            </h2>
          </div>
          
          <div className="space-y-1.5">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xs font-bold text-black uppercase">Cyber AI Prime Internship (Virtual)</h3>
                <p className="text-[11px] font-semibold text-neutral-700">
                  Cyber Security Intern &nbsp;|&nbsp; 1 Month
                </p>
              </div>
            </div>
            
            <ul className="list-disc pl-4 text-[10.5px] leading-relaxed text-neutral-800 space-y-1">
              <li>Gained hands-on experience in <strong>cybersecurity fundamentals</strong>, <strong>networking</strong>, and <strong>security operations</strong>.</li>
              <li>Designed and configured <strong>enterprise network topologies</strong> using <strong>Cisco Packet Tracer</strong>.</li>
              <li>Built practical cybersecurity projects focused on <strong>reconnaissance automation</strong> and <strong>SOC simulation</strong>.</li>
              <li>Developed an <strong>AI-powered reconnaissance agent</strong> to automate <strong>threat intelligence collection</strong>.</li>
              <li>Created an <strong>AWS-based cyber range</strong> for practicing <strong>penetration testing</strong> and <strong>SOC analysis</strong> in a controlled environment.</li>
              <li>Improved understanding of <strong>real-world attack methodologies</strong>, <strong>network defense</strong>, and <strong>security monitoring</strong>.</li>
            </ul>
          </div>
        </div>

        {/* Projects Section */}
        <div className="space-y-3 mt-4">
          <div className="border-b-2 border-black pb-0.5">
            <h2 className="text-sm font-black tracking-wider uppercase text-black flex items-center gap-2">
              <Target className="w-4 h-4 text-black" />
              Projects
            </h2>
          </div>

          <div className="space-y-3">
            {/* Project 1 */}
            <div className="space-y-1">
              <div className="flex justify-between items-start">
                <h3 className="text-xs font-extrabold text-black uppercase">AWS-Based SOC & Penetration Testing Lab</h3>
                <span className="text-[9.5px] font-mono text-neutral-600 font-bold">GitHub: github.com/hackasticguy</span>
              </div>
              <ul className="list-disc pl-4 text-[10.5px] leading-relaxed text-neutral-800 space-y-1">
                <li>Built a <strong>cloud-based cybersecurity lab</strong> using <strong>AWS EC2</strong> to simulate enterprise environments.</li>
                <li>Deployed multiple <strong>virtual machines</strong> for offensive and defensive security practice.</li>
                <li>Performed <strong>vulnerability assessments</strong> and <strong>penetration testing</strong> in an authorized lab environment.</li>
                <li>Practiced <strong>SOC workflows</strong> including monitoring, investigation, and incident analysis.</li>
                <li>Enhanced practical skills in <strong>cloud security</strong>, <strong>networking</strong>, and <strong>security operations</strong>.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="space-y-1">
              <div className="flex justify-between items-start">
                <h3 className="text-xs font-extrabold text-black uppercase">AI-Powered Reconnaissance Automation Agent</h3>
                <span className="text-[9.5px] font-mono text-neutral-600 font-bold">GitHub: github.com/hackasticguy</span>
              </div>
              <ul className="list-disc pl-4 text-[10.5px] leading-relaxed text-neutral-800 space-y-1">
                <li>Developed an <strong>AI agent</strong> to automate <strong>reconnaissance and OSINT workflows</strong>.</li>
                <li>Integrated <strong>URLScan, VirusTotal, ANY.RUN, WHOIS</strong>, and <strong>OSINT Framework</strong> into a single automated pipeline.</li>
                <li>Automated <strong>report delivery to Discord</strong> and cloud storage using <strong>Google Drive</strong>.</li>
                <li>Reduced <strong>manual reconnaissance effort</strong> by consolidating data from multiple security platforms.</li>
                <li>Designed the solution with <strong>scalability</strong> for future security automation enhancements.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills & Certifications Section */}
        <div className="space-y-3 mt-4">
          <div className="border-b-2 border-black pb-0.5">
            <h2 className="text-sm font-black tracking-wider uppercase text-black flex items-center gap-2">
              <Code className="w-4 h-4 text-black" />
              Skills & Certifications
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-y-1.5 text-[10.5px] leading-relaxed text-neutral-800 font-medium">
            <div className="col-span-4 font-extrabold text-neutral-900 uppercase">Cyber Security</div>
            <div className="col-span-1 text-center font-bold">:</div>
            <div className="col-span-7">Penetration Testing, Vulnerability Assessment, Security Operations Center (SOC), OSINT, Reconnaissance, Network Security</div>

            <div className="col-span-4 font-extrabold text-neutral-900 uppercase">Security Tools</div>
            <div className="col-span-1 text-center font-bold">:</div>
            <div className="col-span-7">Nmap, Gobuster, Kali Linux, Parrot OS, OSINT Framework, URLScan, VirusTotal, ANY.RUN, WHOIS</div>

            <div className="col-span-4 font-extrabold text-neutral-900 uppercase">Cloud & Virtualization</div>
            <div className="col-span-1 text-center font-bold">:</div>
            <div className="col-span-7">AWS EC2, Virtual Machines, Lab Deployment</div>

            <div className="col-span-4 font-extrabold text-neutral-900 uppercase">Networking</div>
            <div className="col-span-1 text-center font-bold">:</div>
            <div className="col-span-7">TCP/IP, DNS, HTTP/HTTPS, Cisco Packet Tracer, Network Configuration</div>

            <div className="col-span-4 font-extrabold text-neutral-900 uppercase">Programming & Automation</div>
            <div className="col-span-1 text-center font-bold">:</div>
            <div className="col-span-7">Python (Basic), AI Automation, Security Scripting (Basic)</div>

            <div className="col-span-4 font-extrabold text-neutral-900 uppercase">Certifications</div>
            <div className="col-span-1 text-center font-bold">:</div>
            <div className="col-span-7 space-y-0.5">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-neutral-800 rounded-full" />
                Cisco Networking Academy – CyberOps Associate
              </div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-neutral-800 rounded-full" />
                Cyber AI Prime Internship Certificate
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-3 mt-4">
          <div className="border-b-2 border-black pb-0.5">
            <h2 className="text-sm font-black tracking-wider uppercase text-black flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-black" />
              Education
            </h2>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xs font-extrabold text-black uppercase">Maharaja Surajmal Institute</h3>
                <p className="text-[11px] font-bold text-neutral-800">Bachelor of Computer Applications (BCA)</p>
                <p className="text-[10px] font-medium text-neutral-600">Guru Gobind Singh Indraprastha University (GGSIPU)</p>
              </div>
              <div className="text-right text-[10.5px] font-extrabold text-neutral-900">
                <div>Current Year: First Year</div>
                <div className="text-emerald-700 font-black">CGPA: 9.6</div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="space-y-3 mt-4">
          <div className="border-b-2 border-black pb-0.5">
            <h2 className="text-sm font-black tracking-wider uppercase text-black flex items-center gap-2">
              <Award className="w-4 h-4 text-black" />
              Achievements
            </h2>
          </div>

          <ul className="list-disc pl-4 text-[10.5px] leading-relaxed text-neutral-800 space-y-1">
            <li>Maintained an academic <strong>CGPA of 9.6</strong> during the first year of BCA.</li>
            <li>Completed multiple <strong>practical cybersecurity labs</strong> on TryHackMe.</li>
            <li>Built an <strong>AI-powered reconnaissance automation tool</strong> for threat intelligence gathering.</li>
            <li>Designed a <strong>cloud-based SOC and penetration testing lab</strong> using AWS.</li>
            <li>Continuously improve practical cybersecurity skills through self-learning platforms including <strong>TryHackMe</strong> and <strong>Hack The Box</strong>.</li>
          </ul>
        </div>

        {/* Strengths Footer Section */}
        <div className="space-y-3 mt-4 pb-2">
          <div className="border-b-2 border-black pb-0.5">
            <h2 className="text-sm font-black tracking-wider uppercase text-black flex items-center gap-2">
              <Cpu className="w-4 h-4 text-black" />
              Strengths
            </h2>
          </div>

          <div className="flex flex-wrap gap-x-3 gap-y-2 text-[9px] font-bold uppercase tracking-wider text-black">
            <span className="px-2.5 py-1.5 bg-neutral-100 rounded border border-neutral-300 shadow-sm">Analytical Thinking</span>
            <span className="px-2.5 py-1.5 bg-neutral-100 rounded border border-neutral-300 shadow-sm">Problem Solving</span>
            <span className="px-2.5 py-1.5 bg-neutral-100 rounded border border-neutral-300 shadow-sm">Attention to Detail</span>
            <span className="px-2.5 py-1.5 bg-neutral-100 rounded border border-neutral-300 shadow-sm">Fast Learner</span>
            <span className="px-2.5 py-1.5 bg-neutral-100 rounded border border-neutral-300 shadow-sm">Strong Curiosity for Cyber Security</span>
            <span className="px-2.5 py-1.5 bg-neutral-100 rounded border border-neutral-300 shadow-sm">Continuous Learning Mindset</span>
            <span className="px-2.5 py-1.5 bg-neutral-100 rounded border border-neutral-300 shadow-sm">Team Collaboration</span>
            <span className="px-2.5 py-1.5 bg-[#e2fbf0] text-emerald-800 rounded border border-emerald-300 shadow-sm">Effective Communication</span>
          </div>
        </div>
      </div>
    </div>
  );
}
