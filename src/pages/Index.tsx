
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Users, Award, Heart, Target, Apple, Dumbbell, Leaf, Zap } from "lucide-react";
import RegistrationForm from "@/components/RegistrationForm";
import FitnessCarousel from "@/components/FitnessCarousel";
import BenefitsSection from "@/components/BenefitsSection";
import VideoPreview from "@/components/VideoPreview";

const Index = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [showVideoDemo, setShowVideoDemo] = useState(false);

  const handleRegistrationSuccess = () => {
    setIsRegistered(true);
    setShowRegistration(false);
  };

  const handleWatchDemo = () => {
    setShowVideoDemo(true);
    // Scroll to video section
    setTimeout(() => {
      document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Floating icons for background animation
  const floatingIcons = [
    { Icon: Apple, delay: "0s", position: "top-20 left-20" },
    { Icon: Dumbbell, delay: "2s", position: "top-32 right-32" },
    { Icon: Leaf, delay: "4s", position: "bottom-40 left-16" },
    { Icon: Heart, delay: "1s", position: "top-64 left-1/3" },
    { Icon: Zap, delay: "3s", position: "bottom-20 right-20" },
    { Icon: Target, delay: "5s", position: "top-40 right-1/4" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 font-inter">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 text-white min-h-screen flex items-center">
        {/* Animated floating icons background */}
        <div className="absolute inset-0 overflow-hidden">
          {floatingIcons.map((item, index) => (
            <div
              key={index}
              className={`absolute ${item.position} opacity-20 animate-bounce`}
              style={{ animationDelay: item.delay, animationDuration: '3s' }}
            >
              <item.Icon size={48} className="text-white" />
            </div>
          ))}
        </div>
        
        {/* Geometric patterns overlay */}
        <div className="absolute inset-0 opacity-30">
          <svg width="60" height="60" viewBox="0 0 60 60" className="w-full h-full">
            <defs>
              <pattern id="circles" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="4" fill="white" fillOpacity="0.1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circles)" />
          </svg>
        </div>
        
        <div className="relative container mx-auto px-4 py-20 z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 text-lg px-6 py-2 backdrop-blur-sm">
              Transform Your Life Today ✨
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent font-outfit leading-tight">
              FitLife Modern Guide
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-50 leading-relaxed font-light max-w-3xl mx-auto">
              Leading a healthy lifestyle in this modern world with professional guidance, 
              avoiding junk foods, and embracing fitness for the new generation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-blue-50 text-lg px-8 py-6 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => setShowRegistration(true)}
              >
                Join Fitness Program <ArrowRight className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6 font-semibold backdrop-blur-sm transition-all duration-300"
                onClick={handleWatchDemo}
              >
                <Play className="mr-2" /> Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section - Shows at top when requested */}
      {showVideoDemo && (
        <div id="video-section">
          <VideoPreview />
        </div>
      )}

      {/* Fitness Programs Carousel Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-outfit">
              Choose Your Fitness Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Whether you want to lose weight or gain muscle, our professional programs 
              are designed for the modern lifestyle
            </p>
          </div>
          <FitnessCarousel />
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2 group">
              <div className="flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Users className="h-12 w-12 text-blue-200" />
              </div>
              <h3 className="text-3xl font-bold font-outfit">10,000+</h3>
              <p className="text-blue-100 font-light">Happy Members</p>
            </div>
            <div className="space-y-2 group">
              <div className="flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Award className="h-12 w-12 text-purple-200" />
              </div>
              <h3 className="text-3xl font-bold font-outfit">95%</h3>
              <p className="text-purple-100 font-light">Success Rate</p>
            </div>
            <div className="space-y-2 group">
              <div className="flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-12 w-12 text-indigo-200" />
              </div>
              <h3 className="text-3xl font-bold font-outfit">500+</h3>
              <p className="text-indigo-100 font-light">Workout Videos</p>
            </div>
            <div className="space-y-2 group">
              <div className="flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Target className="h-12 w-12 text-blue-200" />
              </div>
              <h3 className="text-3xl font-bold font-outfit">24/7</h3>
              <p className="text-blue-100 font-light">Expert Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Preview Section - Shows after registration */}
      {isRegistered && <VideoPreview />}

      {/* Registration Modal */}
      {showRegistration && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <RegistrationForm 
              onClose={() => setShowRegistration(false)}
              onSuccess={handleRegistrationSuccess}
            />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 font-outfit">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-light">
            Join thousands of people who have already started their journey to a healthier, 
            happier life in this modern world
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 text-lg px-8 py-6 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            onClick={() => setShowRegistration(true)}
          >
            Start Your Journey Today <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
