import React from 'react';
import { Rocket, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Privacy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-[#050505] text-white selection:bg-purple-500/30 overflow-x-hidden">
      {/* Starry Background Effect */}
      <div className="fixed inset-0 pointer-events-none star-background opacity-60"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 border-b border-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Rocket className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold tracking-tight glow-text">mywayto.space</span>
          </div>
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full font-medium transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>
      </nav>

      {/* Privacy Policy Content */}
      <main className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Privacy Policy — <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">MyWayTo.Space</span>
            </h1>
            
            <p className="text-center text-gray-400 mb-8">Last updated: 09.01.2026</p>
            
            <div className="space-y-8 text-gray-300 leading-relaxed">
              <p>
                MyWayTo.Space ("we", "our", "us") respects your privacy and is committed to protecting your personal data.
                This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website or purchase a ticket.
              </p>
              
              <p className="italic text-purple-400">
                Even in space, privacy matters.
              </p>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                <p className="mb-4">We may collect the following personal information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Payment-related information (processed securely by third-party payment providers)</li>
                  <li>Ticket details and purchase history</li>
                  <li>Technical data such as IP address, browser type, device information, and cookies</li>
                </ul>
                <p className="mt-4">
                  We do not collect sensitive personal data unless required by law or explicitly provided by you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">We use your information to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Process ticket purchases and payments</li>
                  <li>Deliver your ticket as a PDF file via email</li>
                  <li>Communicate important information related to your purchase</li>
                  <li>Improve our website and user experience</li>
                  <li>Comply with legal and regulatory obligations</li>
                </ul>
                <p className="mt-4 italic">
                  We do not sell your personal data to third parties — not even to aliens.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Payments</h2>
                <p className="mb-4">
                  All payments are processed securely through trusted third-party payment providers (such as Stripe).
                  We do not store or have access to your full payment card details.
                </p>
                <p>
                  Payment providers process your data in accordance with their own privacy policies and applicable laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Cookies and Tracking Technologies</h2>
                <p className="mb-4">We may use cookies and similar technologies to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Ensure the website functions correctly</li>
                  <li>Analyze website traffic and performance</li>
                  <li>Improve usability and security</li>
                </ul>
                <p className="mt-4">
                  You can manage or disable cookies in your browser settings.
                  Disabling cookies may affect your experience — <span className="italic">gravity may feel stronger.</span>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Data Storage and Security</h2>
                <p className="mb-4">
                  We implement appropriate technical and organizational measures to protect your personal data against:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Unauthorized access</li>
                  <li>Loss</li>
                  <li>Misuse</li>
                  <li>Alteration</li>
                </ul>
                <p className="mt-4">
                  Data is stored only as long as necessary for the purposes described in this policy or as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Data Sharing</h2>
                <p className="mb-4">We may share your data only with:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Payment processors</li>
                  <li>Email delivery services</li>
                  <li>Hosting and infrastructure providers</li>
                </ul>
                <p className="mt-4">
                  All partners are required to comply with applicable data protection laws.
                </p>
                <p className="mt-4 italic">
                  We do not transmit personal data beyond Earth's legal jurisdictions unless required for service operation (or interstellar travel becomes regulated).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights (GDPR)</h2>
                <p className="mb-4">
                  If you are located in the European Economic Area (EEA), you have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to or restrict processing</li>
                  <li>Request data portability</li>
                </ul>
                <p className="mt-4">
                  To exercise your rights, contact us using the details below.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Children's Privacy</h2>
                <p>
                  Our services are not intended for children under the age of 3.
                  We do not knowingly collect personal data from children without parental consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Disclaimer of Fictional Elements</h2>
                <p className="mb-4">
                  MyWayTo.Space is a creative and entertainment-based project.
                  References to aliens, spaceships, or interstellar travel are fictional and used for artistic and conceptual purposes only.
                </p>
                <p className="font-semibold text-purple-400">
                  Your personal data, however, is handled very seriously.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Privacy Policy</h2>
                <p className="mb-4">
                  We may update this Privacy Policy from time to time.
                  Any changes will be published on this page with an updated revision date.
                </p>
                <p>
                  Continued use of the website means you accept the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">11. Contact Information</h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy or how we handle your data, please contact us:
                </p>
                <div className="space-y-2 pl-4">
                  <p>📧 Email: <a href="mailto:kmpdomen@gmail.com" className="text-purple-400 hover:text-purple-300 underline">kmpdomen@gmail.com</a></p>
                  <p>🌍 Website: <a href="https://mywayto.space" className="text-purple-400 hover:text-purple-300 underline">https://mywayto.space</a></p>
                </div>
              </section>
            </div>

            {/* Back Button at Bottom */}
            <div className="mt-12 text-center">
              <button 
                onClick={() => navigate('/')}
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-full font-bold text-lg shadow-xl shadow-purple-600/20 transition-all inline-flex items-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Rocket className="w-6 h-6 text-purple-500" />
            <span className="text-lg font-bold tracking-tight">mywayto.space</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 Interstellar Travel Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Privacy;
