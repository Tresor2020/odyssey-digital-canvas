
import { Shield, Lock, Cloud, Eye, AlertTriangle, Network, Database, Key } from "lucide-react";

const Cybersecurity = () => {
  return (
    <section id="cybersecurity" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,140,0,0.1)_50%,transparent_75%)] bg-[length:60px_60px] animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Hero Image */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
            CYBER SECURITY
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded"></div>
            <Shield className="text-orange-400" size={32} />
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded"></div>
          </div>
          
          {/* Hero Image */}
          <div className="relative mb-8 max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-yellow-500/30 rounded-2xl blur-2xl"></div>
            <img 
              src="/lovable-uploads/d00ae959-05b4-4690-96a0-2bfe13836e47.png" 
              alt="Cybersecurity - Ancient Wisdom Meets Modern Protection"
              className="relative w-full h-auto rounded-2xl shadow-2xl border border-orange-500/30"
            />
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Protecting digital assets through advanced threat analysis, vulnerability assessments, and strategic security architecture. 
            Bridging ancient wisdom with modern cybersecurity practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="group relative p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 text-white mb-4">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-orange-300">Threat Analysis</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Advanced threat detection and analysis using SIEM tools and behavioral analytics to identify potential security risks.</p>
            </div>
          </div>

          <div className="group relative p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white mb-4">
                <Eye size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-300">Vulnerability Assessment</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Comprehensive security audits and penetration testing to identify and remediate system vulnerabilities.</p>
            </div>
          </div>

          <div className="group relative p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-4">
                <Cloud size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Cloud Security</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Secure cloud infrastructure design and implementation with focus on compliance and data protection.</p>
            </div>
          </div>

          <div className="group relative p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 text-white mb-4">
                <Key size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-green-300">GRC Compliance</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Governance, Risk, and Compliance frameworks including GDPR, ISO 27001, and enterprise security policies.</p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-orange-300 mb-6">Professional Experience</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-orange-500/10 to-transparent border-l-4 border-orange-400">
                <div className="flex-shrink-0 w-3 h-3 bg-orange-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-orange-200">Cybersecurity Analyst - Webeet.io</h4>
                  <p className="text-gray-400 text-sm">Supporting enterprise security operations and compliance initiatives</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-transparent border-l-4 border-blue-400">
                <div className="flex-shrink-0 w-3 h-3 bg-blue-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-blue-200">vCISO & Security Consultant</h4>
                  <p className="text-gray-400 text-sm">Helping organizations protect data and manage cyber risk</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-transparent border-l-4 border-purple-400">
                <div className="flex-shrink-0 w-3 h-3 bg-purple-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-purple-200">Risk Mitigation Specialist</h4>
                  <p className="text-gray-400 text-sm">Cloud infrastructure reviews and security architecture design</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-orange-500/30 backdrop-blur-sm">
              <h4 className="text-2xl font-bold text-orange-300 mb-6">Core Expertise</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Network className="text-orange-400" size={20} />
                  <span className="text-sm">SIEM & Networking</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Database className="text-blue-400" size={20} />
                  <span className="text-sm">Security Architecture</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Cloud className="text-purple-400" size={20} />
                  <span className="text-sm">Cloud Security</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <AlertTriangle className="text-green-400" size={20} />
                  <span className="text-sm">Risk Assessment</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Lock className="text-yellow-400" size={20} />
                  <span className="text-sm">Data Protection</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Eye className="text-cyan-400" size={20} />
                  <span className="text-sm">Threat Intelligence</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-orange-500/10 border border-orange-500/30">
            <h3 className="text-2xl font-bold text-orange-300 mb-4">Need Cybersecurity Expertise?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl">
              From threat analysis to compliance frameworks, I help organizations build robust security postures 
              that protect against evolving cyber threats while enabling business growth.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <Shield size={20} />
              Secure Your Organization
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cybersecurity;
