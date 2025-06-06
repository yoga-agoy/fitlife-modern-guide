
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Users, Award, Heart, Target } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 text-lg px-6 py-2">
              Transform Your Life Today
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
              FitLife Modern Guide
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100 leading-relaxed">
              Leading a healthy lifestyle in this modern world with professional guidance, 
              avoiding junk foods, and embracing fitness for the new generation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-6"
                onClick={() => setShowRegistration(true)}
              >
                Join Fitness Program <ArrowRight className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-6"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Choose Your Fitness Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-emerald-200" />
              </div>
              <h3 className="text-3xl font-bold">10,000+</h3>
              <p className="text-emerald-100">Happy Members</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center">
                <Award className="h-12 w-12 text-teal-200" />
              </div>
              <h3 className="text-3xl font-bold">95%</h3>
              <p className="text-teal-100">Success Rate</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center">
                <Heart className="h-12 w-12 text-cyan-200" />
              </div>
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-cyan-100">Workout Videos</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center">
                <Target className="h-12 w-12 text-emerald-200" />
              </div>
              <h3 className="text-3xl font-bold">24/7</h3>
              <p className="text-emerald-100">Expert Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Preview Section - Shows after registration */}
      {isRegistered && <VideoPreview />}

      {/* Registration Modal */}
      {showRegistration && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <RegistrationForm 
              onClose={() => setShowRegistration(false)}
              onSuccess={handleRegistrationSuccess}
            />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of people who have already started their journey to a healthier, 
            happier life in this modern world
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-lg px-8 py-6"
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
