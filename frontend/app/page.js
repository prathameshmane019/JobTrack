"use client"
import React, { useState, useEffect, useRef } from 'react';
import { 
  Briefcase, 
  TrendingUp, 
  Calendar, 
  Bell, 
  Search, 
  Filter, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Users,
  Target,
  Zap,
  Shield,
  Star,
  Play,
  Menu,
  X
} from 'lucide-react';

export default function JobTrackerHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Smart Application Management",
      description: "Effortlessly track all your job applications in one centralized dashboard with intelligent organization.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Visual Status Pipeline",
      description: "Watch your progress through our intuitive pipeline: Applied → Screening → Interview → Decision.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Interview Scheduling",
      description: "Never miss an opportunity with our advanced scheduling system for all interview rounds.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Smart Notifications",
      description: "Stay ahead with intelligent reminders and follow-up notifications for every application.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics Dashboard",
      description: "Gain insights with success rates, response times, and trend analysis to optimize your job search.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const stats = [
    { label: "Applications Tracked", value: "10K+", icon: <Briefcase className="w-6 h-6" /> },
    { label: "Success Rate Improvement", value: "85%", icon: <TrendingUp className="w-6 h-6" /> },
    { label: "Time Saved Weekly", value: "5hrs", icon: <Clock className="w-6 h-6" /> },
    { label: "Happy Users", value: "2.5K+", icon: <Users className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      company: "Tech Corp",
      content: "This tool transformed my job search. I landed my dream job in just 6 weeks!",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager",
      company: "StartupXYZ",
      content: "The analytics helped me understand my application patterns and improve my success rate by 70%.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "UX Designer",
      company: "Design Studio",
      content: "Never missed another interview thanks to the smart notification system. Highly recommend!",
      rating: 5
    }
  ];

  // Refs for sections
  const featuresRef = useRef(null);
  const analyticsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const pricingRef = useRef(null);

  // Enhanced background gradient
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#312e81]">
      {/* Navigation */}
      <nav className="relative z-50 bg-black/30 backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">JobTracker Pro</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-white transition-colors focus:outline-none">Features</button>
              <button onClick={() => scrollToSection('analytics')} className="text-gray-300 hover:text-white transition-colors focus:outline-none">Analytics</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-white transition-colors focus:outline-none">Reviews</button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-300 hover:text-white transition-colors focus:outline-none">Pricing</button>
              <button onClick={() => scrollToSection('cta')} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 focus:outline-none shadow-md">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white focus:outline-none"
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/60 backdrop-blur-lg rounded-lg mt-4 p-4 border border-white/10 shadow-xl animate-fade-in">
              <div className="flex flex-col space-y-4">
                <button onClick={() => { scrollToSection('features'); setIsMenuOpen(false); }} className="text-gray-300 hover:text-white transition-colors py-2 focus:outline-none">Features</button>
                <button onClick={() => { scrollToSection('analytics'); setIsMenuOpen(false); }} className="text-gray-300 hover:text-white transition-colors py-2 focus:outline-none">Analytics</button>
                <button onClick={() => { scrollToSection('testimonials'); setIsMenuOpen(false); }} className="text-gray-300 hover:text-white transition-colors py-2 focus:outline-none">Reviews</button>
                <button onClick={() => { scrollToSection('pricing'); setIsMenuOpen(false); }} className="text-gray-300 hover:text-white transition-colors py-2 focus:outline-none">Pricing</button>
                <button onClick={() => { scrollToSection('cta'); setIsMenuOpen(false); }} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all focus:outline-none shadow-md">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-400/30 to-cyan-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-2/3 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-pink-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-br from-pink-500/30 to-blue-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-white">Supercharge Your Job Search</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Track Every
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"> Opportunity</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Transform your job search with our intelligent tracking system. Manage applications, 
              schedule interviews, and analyze your success patterns—all in one powerful platform.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-2xl focus:outline-none"
                onClick={() => scrollToSection('cta')}
              >
                <span className="flex items-center space-x-2">
                  <span>Start Tracking Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button
                className="group flex items-center space-x-2 text-white border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all focus:outline-none"
                onClick={() => window.open('https://www.youtube.com/results?search_query=job+tracker+demo', '_blank')}
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={analyticsRef} id="analytics" className="py-16 bg-gradient-to-r from-[#232946]/80 to-[#312e81]/80 backdrop-blur-md border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-blue-400">{stat.icon}</div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm lg:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful Features for
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Success</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to streamline your job search and land your dream position
            </p>
          </div>

          {/* Interactive Feature Showcase */}
          <div className="bg-gradient-to-br from-[#232946]/60 to-[#312e81]/60 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-12 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className={`p-6 rounded-2xl cursor-pointer transition-all transform hover:scale-105 focus:outline-none ${
                        activeFeature === index 
                          ? 'bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-white/20 shadow-lg' 
                          : 'hover:bg-white/10'
                      }`}
                      tabIndex={0}
                      onClick={() => setActiveFeature(index)}
                      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setActiveFeature(index); }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white`}>
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                          <p className="text-gray-300">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 h-96 flex items-center justify-center shadow-lg animate-fade-in">
                  <div className="text-center">
                    <div className={`w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${features[activeFeature].color} flex items-center justify-center text-white transform scale-110 shadow-xl`}>
                      {features[activeFeature].icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{features[activeFeature].title}</h3>
                    <p className="text-gray-300">{features[activeFeature].description}</p>
                  </div>
                </div>
                {/* Feature indicators */}
                <div className="flex justify-center space-x-2 mt-6">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all focus:outline-none ${
                        activeFeature === index ? 'bg-blue-500 scale-125 shadow-md' : 'bg-white/30'
                      }`}
                      aria-label={`Show feature ${index + 1}`}
                      onClick={() => setActiveFeature(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} id="testimonials" className="py-20 bg-gradient-to-r from-[#232946]/80 to-[#312e81]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Loved by
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"> Job Seekers</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how JobTracker Pro has transformed careers and accelerated job searches
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all transform hover:scale-105">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={pricingRef} id="pricing" className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-500/30 to-purple-600/30 backdrop-blur-md border border-white/20 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Job Search?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of successful job seekers who have streamlined their application process and landed their dream jobs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-2xl focus:outline-none"
                onClick={() => window.open('https://jobtrackerpro.com/signup', '_blank')}
              >
                <span className="flex items-center space-x-2">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button
                className="text-white border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all focus:outline-none"
                onClick={() => window.open('https://jobtrackerpro.com/demo', '_blank')}
              >
                Schedule Demo
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-6">No credit card required • Free 14-day trial</p>
          </div>
        </div>
      </section>

      {/* CTA Section (anchor for smooth scroll) */}
      <div id="cta" style={{ position: 'absolute', top: 0 }}></div>

      {/* Footer */}
      <footer className="bg-black/60 backdrop-blur-lg border-t border-white/10 py-12 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 animate-fade-in">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">JobTracker Pro</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The ultimate job application tracking system designed to help you land your dream job faster and more efficiently.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Shield className="w-4 h-4" />
                <span>Enterprise-grade security</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors bg-transparent border-none p-0 m-0 text-left focus:outline-none">Features</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors bg-transparent border-none p-0 m-0 text-left focus:outline-none">Pricing</button></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 JobTracker Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    {/* Animations */}
    <style jsx global>{`
      @keyframes float {
        0% { transform: translateY(0px) scale(1); }
        50% { transform: translateY(-30px) scale(1.05); }
        100% { transform: translateY(0px) scale(1); }
      }
      .animate-float {
        animation: float 8s ease-in-out infinite;
      }
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fade-in 1.2s cubic-bezier(0.4,0,0.2,1) both;
      }
    `}</style>
  </div>
  );
}