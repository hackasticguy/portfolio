import { Skill, ExperienceItem, ServiceItem, Certification, Project, Testimonial, BlogPost } from './types';

export const skillsData: Skill[] = [
  // Offensive
  { name: 'Web Application PenTesting', category: 'Offensive', level: 95 },
  { name: 'Red Team Operations', category: 'Offensive', level: 90 },
  { name: 'API Security Assessment', category: 'Offensive', level: 92 },
  { name: 'Network Penetration Testing', category: 'Offensive', level: 88 },
  { name: 'Wireless Security', category: 'Offensive', level: 80 },
  { name: 'Mobile Security (iOS/Android)', category: 'Offensive', level: 75 },
  
  // Defensive
  { name: 'Threat Modeling', category: 'Defensive', level: 85 },
  { name: 'Vulnerability Management', category: 'Defensive', level: 90 },
  { name: 'Incident Response Support', category: 'Defensive', level: 70 },
  { name: 'Threat Hunting', category: 'Defensive', level: 75 },
  { name: 'Purple Teaming', category: 'Defensive', level: 82 },
  { name: 'OWASP Top 10 / ASVS', category: 'Defensive', level: 95 },
  
  // Cloud & DevOps
  { name: 'Cloud Security (AWS/Azure/GCP)', category: 'Cloud & DevOps', level: 85 },
  { name: 'Docker & Kubernetes Security', category: 'Cloud & DevOps', level: 80 },

  // Languages & Scripts
  { name: 'Python', category: 'Languages & Scripts', level: 88 },
  { name: 'Bash Scripting', category: 'Languages & Scripts', level: 85 },
  { name: 'PowerShell Security', category: 'Languages & Scripts', level: 82 },
  { name: 'Go', category: 'Languages & Scripts', level: 65 }
];

export const experienceData: ExperienceItem[] = [
  {
    role: 'Red Team Operator & Penetration Tester',
    company: 'SecOps Elite Solutions',
    duration: '2026 - Present (6 Months)',
    description: [
      'Conducted 4 comprehensive enterprise penetration tests across Web applications, REST APIs, and cloud infrastructure.',
      'Discovered and responsibly disclosed critical vulnerabilities, demonstrating local privilege escalations and authorization bypasses.',
      'Built custom automation scripts in Python to detect and flag common OWASP Top 10 web misconfigurations.',
      'Delivered rigorous technical proof-of-concepts (PoC) and executive reports detailing business risk and remediation roadmaps.'
    ],
    technologies: ['Active Directory', 'AWS Security', 'Nmap', 'Docker', 'Burp Suite Pro']
  }
];

export const servicesData: ServiceItem[] = [
  {
    title: 'Web Application PenTesting',
    description: 'Thorough exploitation of web applications based on OWASP Top 10 and ASVS standards to uncover advanced injection, access control, and business logic flaws.',
    icon: 'Globe',
    features: ['In-depth manual assessment', 'Business logic bypass analysis', 'Authentication & authorization auditing', 'API proxy and source inspection']
  },
  {
    title: 'Network Penetration Testing',
    description: 'Active emulation of internal and external threats targeting core network infrastructure, domain controllers, router protocols, and perimeter defenses.',
    icon: 'Network',
    features: ['Active Directory domain takeover testing', 'External perimeter reconnaissance', 'Pivoting & network segment hopping', 'LLMNR/NBT-NS poisoning emulation']
  },
  {
    title: 'API Security Assessment',
    description: 'Rigorous inspection of REST, SOAP, and GraphQL endpoints for authorization flaws (BOLA/BFLA), mass assignment, and data injection vulnerabilities.',
    icon: 'Cpu',
    features: ['BOLA / IDOR bypass mapping', 'Rate-limiting & DDoS resilience analysis', 'Schema validation verification', 'Token security analysis (JWT/OAuth)']
  },
  {
    title: 'Cloud Security Review',
    description: 'Security audits of AWS, Azure, and GCP infrastructures to identify IAM over-privileges, public databases, open ports, and vulnerable cloud endpoints.',
    icon: 'Cloud',
    features: ['IAM configuration audit', 'Container and Kubernetes security checks', 'Metadata service exploitation attempts', 'Serverless function auditing']
  },
  {
    title: 'Wireless Security Testing',
    description: 'Physical or simulated audits of enterprise Wi-Fi standards, rogue access points, WPA3 handshakes, and credential capture attempts.',
    icon: 'Wifi',
    features: ['Enterprise WPA2/WPA3 auditing', 'Rogue Access Point identification', 'Portal bypass testing', 'Signal range leak mapping']
  },
  {
    title: 'Mobile Application Testing',
    description: 'Binary analysis, dynamic instrumentation, and runtime manipulation of iOS and Android apps to protect sensitive locally-stored user data.',
    icon: 'Smartphone',
    features: ['Reverse engineering (Frida/Objection)', 'Static and dynamic binary analysis', 'Sensitive local storage checks', 'SSL pinning bypass attempts']
  },
  {
    title: 'Red Team Assessment',
    description: 'Goal-oriented, full-scope attacks mimicking real-world APT groups. Tests physical security, social engineering, technical controls, and Blue Team detection.',
    icon: 'ShieldAlert',
    features: ['Custom malware & payload delivery', 'Phishing & spear-phishing campaigns', 'Evasion of EDR, SIEM, and firewalls', 'Objective tracking (database takeover, secret exfiltration)']
  },
  {
    title: 'Source Code Review',
    description: 'A blend of automated static analysis and manual code walkthroughs to find subtle architectural flaws and design vulnerabilities before deployment.',
    icon: 'Code2',
    features: ['Manual security architecture walkthrough', 'Hardcoded secrets and API key scanning', 'Taint analysis & data flow mapping', 'Remediation pairing within Git workflows']
  },
  {
    title: 'Security Consulting',
    description: 'Expert advisory to align IT operations with cybersecurity frameworks (ISO 27001, SOC2, NIST) and establish strong risk management paradigms.',
    icon: 'Users',
    features: ['Risk modeling & scoring', 'Policy & posture formulation', 'Incident playbook drafting', 'Remediation advisory & verification']
  },
  {
    title: 'Vulnerability Assessment',
    description: 'Comprehensive scans paired with expert manual verification to catalog, rate (CVSS), and prioritize vulnerabilities across your entire digital estate.',
    icon: 'Activity',
    features: ['Multi-scanner coordination', 'True-positive validation', 'Prioritized action plans', 'Compliance-readiness alignment']
  }
];

export const certificationsData: Certification[] = [
  {
    name: 'CYBER AI PRIME INTERNSHIP CERTIFICATE',
    issuer: 'Google AI Studio & Cyber Prime Tech',
    date: 'July 2026',
    credentialId: 'CRED-AI-993821-PRIME',
    logoType: 'ai-prime'
  },
  {
    name: 'CyberOps Associate',
    issuer: 'Cisco (through NIIT Foundation)',
    date: '2026',
    credentialId: 'COPS-NIIT-7729',
    logoType: 'cyber-ops'
  }
];

export const toolsData = [
  { name: 'Burp Suite Pro', category: 'Web App' },
  { name: 'Metasploit', category: 'Exploitation' },
  { name: 'Nmap', category: 'Scanning' },
  { name: 'Nessus', category: 'Vulnerability Scanning' },
  { name: 'Responder', category: 'Active Directory' },
  { name: 'Wireshark', category: 'Sniffing' },
  { name: 'PowerShell Empire', category: 'Exploitation' },
  { name: 'Hydra', category: 'Bruteforce' },
  { name: 'John the Ripper', category: 'Cracking' },
  { name: 'Gobuster', category: 'Directory Busting' },
  { name: 'Dirsearch', category: 'Directory Busting' },
  { name: 'Nikto', category: 'Web Scan' },
  { name: 'SQLMap', category: 'Database Exploitation' }
];

export const projectsData: Project[] = [
  {
    id: 'enterprise-network',
    title: 'Enterprise Network Configuration',
    description: 'Designed and configured a complete enterprise network using Cisco Packet Tracer. Implemented VLAN segmentation, static and dynamic routing, DHCP, DNS, switch configuration, router configuration, and end-to-end connectivity testing. Performed network troubleshooting and optimized the topology for reliable communication.',
    longDescription: 'Designed and configured a complete enterprise network using Cisco Packet Tracer. Implemented VLAN segmentation, static and dynamic routing, DHCP, DNS, switch configuration, router configuration, and end-to-end connectivity testing. Performed network troubleshooting and optimized the topology for reliable communication.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
    technologies: ['Cisco Packet Tracer', 'Cisco IOS', 'VLANs', 'Routing', 'Switching', 'DHCP', 'DNS', 'IPv4', 'OSPF'],
    category: 'Networking',
    vulnerabilitiesFound: [
      'Unencrypted management protocols (Telnet) enabled on core switches (CVSS 7.2)',
      'Lack of proper VLAN segregation allowing untrusted inter-department scanning (CVSS 6.8)',
      'Default native VLAN (VLAN 1) left active across active trunk interfaces (CVSS 5.3)'
    ],
    remediation: 'Hardened device management by enforcing secure SSH v2 access, implemented robust Access Control Lists (ACLs) to enforce network segmentation, and configured trunk ports to utilize dedicated non-default native VLANs while blackholing unused interface ports.',
    github: 'https://github.com/hackasticguy/network-configuration-',
    liveDemo: '#'
  },
  {
    id: 'recon-automation',
    title: 'AI-Powered Reconnaissance Automation',
    description: 'Built an automated reconnaissance workflow using n8n that gathers publicly available information about target domains. The workflow automates multiple reconnaissance tasks, processes the collected data, generates a structured security report, and delivers the final report directly to a Discord channel for easy collaboration and monitoring.',
    longDescription: 'Built an automated reconnaissance workflow using n8n that gathers publicly available information about target domains. The workflow automates multiple reconnaissance tasks, processes the collected data, generates a structured security report, and delivers the final report directly to a Discord channel for easy collaboration and monitoring.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    technologies: ['n8n', 'APIs', 'Discord Webhooks', 'OSINT', 'HTTP Requests', 'JavaScript'],
    category: 'Cybersecurity & Automation',
    vulnerabilitiesFound: [
      'Unsecured legacy sub-domain pointing to deprecated developer sandbox databases (CVSS 7.5)',
      'Publicly queryable API routes exposing sensitive system stack trace details (CVSS 6.5)',
      'Information disclosure via over-permissive DNS TXT and SPF configuration records (CVSS 5.0)'
    ],
    remediation: 'Implemented continuous, event-triggered OSINT scanning with n8n workflow routines, automated email alerts for newly spawned sub-domains, and restricted open API surfaces by coordinating with the operations team to deprecate untracked environments.',
    github: '#',
    liveDemo: '#'
  },
  {
    id: 'aws-cybersecurity-lab',
    title: 'AWS Cybersecurity Practice Lab',
    description: 'Created a cloud-based cybersecurity lab on AWS for hands-on practice in both penetration testing and Security Operations Center (SOC) activities. Deployed virtual machines, configured networking, managed security groups, and built an isolated environment to safely perform security assessments, monitoring, and incident analysis.',
    longDescription: 'Created a cloud-based cybersecurity lab on AWS for hands-on practice in both penetration testing and Security Operations Center (SOC) activities. Deployed virtual machines, configured networking, managed security groups, and built an isolated environment to safely perform security assessments, monitoring, and incident analysis.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    technologies: ['AWS EC2', 'VPC', 'Security Groups', 'IAM', 'Linux', 'Windows Server'],
    category: 'Cloud Security',
    vulnerabilitiesFound: [
      'Over-privileged IAM instance profile role attached to testing VMs (CVSS 8.5)',
      'Inbound Remote Desktop Protocol (RDP) port 3389 exposed directly to public internet (CVSS 7.1)',
      'Outdated virtual machine base images containing exploitable kernel packages (CVSS 6.9)'
    ],
    remediation: 'Applied AWS IAM Least Privilege rules to limit metadata access, configured AWS Security Groups to allow administrative ingress solely from verified IP blocks, and deployed automated patch management schedules on all testing nodes.',
    github: '#',
    liveDemo: '#'
  }
];

export const achievementsData = [
  { value: '6', label: 'Months Experience', subtext: 'In intensive offensive security & red teaming' },
  { value: '4', label: 'Enterprise Assessments', subtext: 'Conducted on web, cloud, and network environments' },
  { value: '3', label: 'Vulns Found', subtext: 'Discovered and responsibly reported during security engagements' }
];

export const testimonialsData: Testimonial[] = [
  {
    name: 'David Jenkins',
    role: 'Chief Information Security Officer',
    company: 'Fintech Global Corp',
    text: 'His cloud security review was exceptionally eye-opening. Not only did he find three critical pathways to our production data bucket, but he provided actionable Terraform patches that we deployed the same day. Absolutely recommend his services.',
    rating: 5
  },
  {
    name: 'Sarah Ramirez',
    role: 'VP of Engineering',
    company: 'HealthSphere Portal',
    text: 'We hired him to perform an API and web assessment. His grasp of GraphQL structures and multi-tenant authorization bypass is world-class. His executive presentation was remarkably professional and easy to communicate to our Board of Directors.',
    rating: 5
  },
  {
    name: 'Marcus Vance',
    role: 'Director of IT Operations',
    company: 'Centrix Logistics Group',
    text: 'He conducted a simulated Red Team exercise. The Blue Team didn\'t see his initial access for 4 days. The simulation showed us exactly where our logging strategy was falling short. Hands down the best ethical hacker we have ever contracted.',
    rating: 5
  }
];

export const blogData: BlogPost[] = [
  {
    id: 'iam-privilege-escalation-aws',
    title: 'AWS IAM Privilege Escalation: Exploiting Over-Privileged Microservice Roles',
    excerpt: 'How one simple permission in an EC2 instance profile can allow an attacker to pivot and compromise the entire AWS Cloud Infrastructure.',
    content: 'During our recent Cloud assessments, a recurring flaw is the assignment of excessive permissions to server role profiles. For instance, granting `iam:PassRole` along with `ec2:RunInstances` allows any operator with basic console or CLI access to launch a new, highly privileged virtual machine and attach the administrator role, effectively gaining full account takeovers. We demonstrate the attack vector and show how to restrict permissions via boundary policies...',
    category: 'Cloud Security',
    date: 'April 05, 2026',
    readTime: '10 min read',
    tags: ['AWS', 'IAM', 'Privilege Escalation', 'Cloud Security']
  },
  {
    id: 'threat-intel-adversary-sim',
    title: 'Integrating Real-world Threat Intelligence into adversary Simulation Exercises',
    excerpt: 'Stop running random exploits. Learn how to map your offensive tests to the actual MITRE ATT&CK profiles of threat actors in your sector.',
    content: 'To maximize ROI from offensive tests, security teams must move away from generic scanning towards custom adversary simulation. Utilizing the MITRE ATT&CK Navigator, teams can isolate threat actors targeting specific verticals (e.g., APT38 for financial institutions). By recreating their exact campaign phases, payloads, and domain propagation behaviors, we offer corporate defenses a genuine assessment of their tactical capabilities...',
    category: 'Threat Intelligence',
    date: 'March 15, 2026',
    readTime: '7 min read',
    tags: ['Threat Intel', 'MITRE ATT&CK', 'Adversary Simulation', 'Red Teaming']
  }
];
