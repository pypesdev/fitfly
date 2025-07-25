import React, { useState } from 'react';
import { Menu, X, Play, Check, Star, ArrowRight, Zap, Target, Heart, TrendingUp, Users, Clock } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">FitFly</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Success Stories</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="https://app.fitfly.tech" className="text-gray-600 hover:text-gray-900 transition-colors">Sign In</a>
              <a href="https://app.fitfly.tech" className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Start Fitness Revolution
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
              <nav className="px-4 py-4 space-y-4">
                <a href="#features" className="block text-gray-600 hover:text-gray-900 transition-colors">Features</a>
                <a href="#how-it-works" className="block text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
                <a href="#testimonials" className="block text-gray-600 hover:text-gray-900 transition-colors">Success Stories</a>
                <a href="#pricing" className="block text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
                <div className="pt-4 border-t border-gray-100">
                  <a href="https://app.fitfly.tech" className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors mb-3">Sign In</a>
                  <a href="https://app.fitfly.tech" className="block w-full bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300">
                    Start Fitness Revolution
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-green-100 text-blue-700 text-sm font-medium mb-6">
                  <Zap className="w-4 h-4 mr-2" />
                  AI-Powered Fitness Revolution
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Personalized coaching.{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    Effortless tracking.
                  </span>{' '}
                  Lasting Support
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Transform your fitness journey with AI that adapts to you. Get personalized workout and nutrition plans, intelligent progress tracking, and real-time coaching support—all in one platform.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="https://app.fitfly.tech" className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                    Start Fitness Revolution
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>

                  {/* <button className="flex items-center justify-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors group">
                    <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 ml-1" />
                    </div>
                    <span className="font-medium">Watch Demo</span>
                  </button> */}
                  {/* TODO: ADD DEMO VIDEO */}
                </div>

                <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {/* <Check className="w-4 h-4 text-green-500" /> */}
                    {/* <span>14-day free trial</span> */}
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10">
                  <img
                    src="https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Person using fitness app while working out"
                    className="rounded-2xl shadow-2xl w-full"
                  />
                </div>

                {/* Floating Cards */}
                <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 z-20 hidden sm:block">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Progress</div>
                      <div className="text-xs text-gray-500">+15% this week</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 z-20 hidden sm:block">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Target className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Goal Reached</div>
                      <div className="text-xs text-gray-500">Workout completed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Everything you need to succeed
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI-powered platform combines personalized coaching, intelligent tracking, and unwavering support to help you achieve your fitness goals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Customized Plans */}
              <div className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Customized Plans</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Get AI-personalized workout and nutrition plans tailored to your goals and lifestyle. Our smart algorithms adapt to your progress, preferences, and schedule.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Personalized workout routines
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Custom nutrition guidance
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Adaptive goal setting
                  </li>
                </ul>
              </div>

              {/* Intelligent Tracking */}
              <div className="group bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Intelligent Tracking</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Track workouts, meals, and progress effortlessly with smart insights that keep you improving. Our AI analyzes your data to provide actionable recommendations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Automatic progress monitoring
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Smart meal logging
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Performance analytics
                  </li>
                </ul>
              </div>

              {/* Support That Shows Up */}
              <div className="group bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Support That Shows Up</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Always in your corner. Real coaching. Real-time accountability. Our certified trainers and AI work together to keep you motivated and on track.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    24/7 AI coaching assistant
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Live trainer sessions
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Community support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                How FitFly Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get started in minutes and see results in weeks with our simple, science-backed approach.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tell Us About You</h3>
                <p className="text-gray-600">
                  Share your goals, fitness level, preferences, and lifestyle. Our AI creates your personalized profile in minutes.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get Your Custom Plan</h3>
                <p className="text-gray-600">
                  Receive your AI-generated workout and nutrition plan, perfectly tailored to help you reach your specific goals.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Train & Transform</h3>
                <p className="text-gray-600">
                  Follow your plan, track progress, and watch as our AI adapts to keep you challenged and motivated every step of the way.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Join thousands who transformed their lives
              </h2>
              <div className="flex items-center justify-center space-x-8 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>50,000+ Active Users</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span>4.9/5 App Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>Average 12 weeks to goal</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "FitFly's AI coaching is incredible. It adapts to my schedule and keeps me motivated even on busy days. I've lost 25 pounds in 3 months!"
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"
                    alt="Sarah M."
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Sarah M.</div>
                    <div className="text-sm text-gray-600">Marketing Manager</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "The personalized nutrition plans are game-changing. I finally understand what my body needs, and the results speak for themselves."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
                    alt="Mike R."
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Mike R.</div>
                    <div className="text-sm text-gray-600">Software Engineer</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "As a busy mom, I love how FitFly fits into my life. The workouts are efficient, and the support keeps me accountable."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
                    alt="Jessica L."
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Jessica L.</div>
                    <div className="text-sm text-gray-600">Teacher & Mom</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="pricing" className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to transform your fitness journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands who have already discovered the power of AI-personalized fitness coaching. Start your free trial today—no credit card required.
            </p>

            <div className="bg-white rounded-2xl p-8 max-w-md mx-auto mb-8">
              <div className="mb-6">
                <div className="text-4xl font-bold text-gray-900">$10</div>
                <div className="text-gray-600">per month</div>
                <div className="text-sm text-green-600 font-medium">14-day free trial</div>
              </div>

              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Unlimited AI-personalized workouts</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Custom nutrition plans</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Progress tracking & analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">24/7 AI coaching support</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Live trainer sessions</span>
                </li>
              </ul>

              <a href="https://app.fitfly.tech" className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-6 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Start
              </a>
            </div>

            <p className="text-blue-100 text-sm">
              Cancel anytime. No commitments. No hidden fees.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;