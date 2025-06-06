
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Smile,
  Apple,
  Dumbbell,
  Clock,
  Users
} from "lucide-react";

const BenefitsSection = () => {
  const junkFoodBenefits = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Heart Health",
      description: "Avoiding processed foods reduces cholesterol and improves cardiovascular health",
      stat: "50% lower risk",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      title: "Mental Clarity",
      description: "Natural foods boost brain function and improve focus in our digital age",
      stat: "40% better focus",
      image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&h=300&fit=crop"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Energy Levels",
      description: "Stable energy throughout the day without sugar crashes",
      stat: "3x more energy",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "Immune System",
      description: "Stronger immunity to fight modern lifestyle diseases",
      stat: "60% fewer sick days",
      image: "https://images.unsplash.com/photo-1528712306091-ed0763094c98?w=400&h=300&fit=crop"
    }
  ];

  const exerciseBenefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-500" />,
      title: "Productivity Boost",
      description: "Exercise enhances work performance and reduces stress in busy schedules",
      stat: "25% more productive",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    {
      icon: <Smile className="h-8 w-8 text-pink-500" />,
      title: "Mental Wellness",
      description: "Combat anxiety and depression naturally through regular movement",
      stat: "70% less stress",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop"
    },
    {
      icon: <Clock className="h-8 w-8 text-indigo-500" />,
      title: "Better Sleep",
      description: "Improve sleep quality crucial for modern lifestyle recovery",
      stat: "2 hours deeper sleep",
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=300&fit=crop"
    },
    {
      icon: <Users className="h-8 w-8 text-teal-500" />,
      title: "Social Connection",
      description: "Build community and relationships through fitness activities",
      stat: "10x more social",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Why Choose Healthy Living in 2024?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how avoiding junk food and embracing exercise transforms your life in our modern world
          </p>
        </div>

        {/* Avoiding Junk Food Benefits */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Apple className="h-10 w-10 text-red-500" />
              <h3 className="text-3xl font-bold text-gray-900">Benefits of Avoiding Junk Food</h3>
            </div>
            <p className="text-lg text-gray-600">
              Break free from processed foods and discover your body's natural potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {junkFoodBenefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    {benefit.icon}
                  </div>
                  <Badge className="absolute top-4 right-4 bg-white/90 text-gray-900">
                    {benefit.stat}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Exercise Benefits */}
        <div>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Dumbbell className="h-10 w-10 text-blue-500" />
              <h3 className="text-3xl font-bold text-gray-900">Benefits of Regular Exercise</h3>
            </div>
            <p className="text-lg text-gray-600">
              Transform your body and mind with movement designed for modern living
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exerciseBenefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    {benefit.icon}
                  </div>
                  <Badge className="absolute top-4 right-4 bg-white/90 text-gray-900">
                    {benefit.stat}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Quote Section */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face" 
                alt="Professional Trainer"
                className="w-20 h-20 rounded-full object-cover border-4 border-green-500"
              />
            </div>
            <blockquote className="text-xl md:text-2xl font-medium text-gray-900 mb-4 italic">
              "In today's fast-paced world, your health is your greatest asset. Every choice you make - 
              from avoiding processed foods to moving your body daily - is an investment in your future self."
            </blockquote>
            <p className="text-green-600 font-semibold">Dr. Sarah Johnson, Certified Fitness Professional</p>
            <p className="text-gray-500">15+ years helping people transform their lives</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
