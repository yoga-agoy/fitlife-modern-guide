
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Lock, Star, Clock, Users, ArrowRight } from "lucide-react";

const VideoPreview = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const demoVideos = [
    {
      id: 1,
      title: "Morning Yoga Flow",
      duration: "15 mins",
      level: "Beginner",
      instructor: "Maya Patel",
      thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      description: "Start your day with gentle movements and mindfulness",
      views: "12K",
      rating: 4.8,
      isFree: true
    },
    {
      id: 2,
      title: "HIIT Fat Burner",
      duration: "30 mins",
      level: "Intermediate",
      instructor: "Raj Kumar",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      description: "High-intensity workout to maximize calorie burn",
      views: "25K",
      rating: 4.9,
      isFree: true
    },
    {
      id: 3,
      title: "Nutrition Masterclass",
      duration: "45 mins",
      level: "All Levels",
      instructor: "Dr. Priya Sharma",
      thumbnail: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop",
      description: "Learn the science of healthy eating for modern life",
      views: "18K",
      rating: 4.7,
      isFree: true
    }
  ];

  const premiumVideos = [
    {
      id: 4,
      title: "Advanced Strength Training",
      duration: "60 mins",
      level: "Advanced",
      instructor: "Mike Johnson",
      thumbnail: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop",
      description: "Professional muscle-building techniques",
      views: "35K",
      rating: 4.9,
      isFree: false
    },
    {
      id: 5,
      title: "Mindful Meditation Series",
      duration: "30 mins",
      level: "All Levels",
      instructor: "Lisa Chen",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      description: "Reduce stress and improve mental clarity",
      views: "22K",
      rating: 4.8,
      isFree: false
    },
    {
      id: 6,
      title: "Dance Fitness Fusion",
      duration: "45 mins",
      level: "Intermediate",
      instructor: "Carlos Rodriguez",
      thumbnail: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop",
      description: "Fun cardio workout with dance elements",
      views: "28K",
      rating: 4.6,
      isFree: false
    }
  ];

  const handlePaymentAccess = () => {
    // This would integrate with payment system
    alert("Payment integration will be implemented here to unlock premium videos!");
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 text-lg px-6 py-2">
            🎉 Welcome! You now have access to our fitness videos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Your Fitness Video Library
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start your journey with these demo videos, then unlock our complete premium collection
          </p>
        </div>

        {/* Free Demo Videos */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">
            Free Demo Videos - Available Now!
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoVideos.map((video) => (
              <Card key={video.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                      <Play className="mr-2 h-5 w-5" />
                      Play Now
                    </Button>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-green-500 text-white">
                    FREE
                  </Badge>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h4>
                  <p className="text-gray-600 mb-4">{video.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {video.views} views
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      {video.rating}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">{video.instructor}</p>
                      <p className="text-sm text-gray-500">{video.level}</p>
                    </div>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Watch Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Premium Videos */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              Premium Video Collection
            </h3>
            <p className="text-lg text-gray-600">
              Unlock access to 500+ professional fitness videos with our premium membership
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumVideos.map((video) => (
              <Card key={video.id} className="group relative overflow-hidden border-2 border-gray-200">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover filter blur-sm group-hover:blur-none transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Lock className="h-12 w-12 mx-auto mb-4" />
                      <p className="font-semibold">Premium Content</p>
                    </div>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-yellow-500 text-black">
                    PREMIUM
                  </Badge>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h4>
                  <p className="text-gray-600 mb-4">{video.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {video.views} views
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      {video.rating}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">{video.instructor}</p>
                      <p className="text-sm text-gray-500">{video.level}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Premium Access CTA */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-blue-600 text-white overflow-hidden">
            <CardContent className="p-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Unlock Your Full Potential?
              </h3>
              <p className="text-xl mb-8 text-purple-100">
                Get unlimited access to our complete library of 500+ professional fitness videos, 
                personalized meal plans, and 24/7 expert support.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <p className="text-purple-100">Professional Videos</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <p className="text-purple-100">Expert Support</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">∞</div>
                  <p className="text-purple-100">Unlimited Access</p>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 text-xl px-12 py-6"
                onClick={handlePaymentAccess}
              >
                Unlock Premium Access <ArrowRight className="ml-2" />
              </Button>
              
              <p className="mt-4 text-purple-200 text-sm">
                Cancel anytime • 30-day money-back guarantee
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VideoPreview;
