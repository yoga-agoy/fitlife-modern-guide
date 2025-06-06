
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Target, TrendingUp, TrendingDown } from "lucide-react";

const FitnessCarousel = () => {
  const [activeWeightLoss, setActiveWeightLoss] = useState(0);
  const [activeWeightGain, setActiveWeightGain] = useState(0);

  const weightLossPrograms = [
    {
      title: "Fat Burn HIIT",
      subtitle: "High-Intensity Interval Training",
      description: "Burn calories fast with our proven HIIT workouts designed for busy professionals",
      duration: "30 mins",
      level: "Intermediate",
      calories: "400-500",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop",
      beforeAfter: {
        before: "Starting weight: 180 lbs",
        after: "Target weight: 150 lbs"
      }
    },
    {
      title: "Cardio Blast",
      subtitle: "Heart-Pumping Workouts",
      description: "Dynamic cardio sessions that fit into your modern lifestyle",
      duration: "45 mins",
      level: "Beginner",
      calories: "300-400",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      beforeAfter: {
        before: "Starting weight: 200 lbs",
        after: "Target weight: 170 lbs"
      }
    },
    {
      title: "Strength & Lean",
      subtitle: "Build Lean Muscle",
      description: "Combine strength training with fat loss for a toned physique",
      duration: "60 mins",
      level: "Advanced",
      calories: "500-600",
      image: "https://images.unsplash.com/photo-1583500178690-f7dc10f9fb73?w=600&h=400&fit=crop",
      beforeAfter: {
        before: "Starting weight: 160 lbs",
        after: "Target weight: 140 lbs"
      }
    }
  ];

  const weightGainPrograms = [
    {
      title: "Muscle Builder",
      subtitle: "Mass Gaining Program",
      description: "Build serious muscle mass with progressive overload training",
      duration: "75 mins",
      level: "Intermediate",
      focus: "Muscle Mass",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop",
      beforeAfter: {
        before: "Starting weight: 140 lbs",
        after: "Target weight: 170 lbs"
      }
    },
    {
      title: "Power & Size",
      subtitle: "Strength Training",
      description: "Develop functional strength while building impressive muscle size",
      duration: "90 mins",
      level: "Advanced",
      focus: "Strength",
      image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=600&h=400&fit=crop",
      beforeAfter: {
        before: "Starting weight: 120 lbs",
        after: "Target weight: 150 lbs"
      }
    },
    {
      title: "Lean Bulk",
      subtitle: "Clean Muscle Gain",
      description: "Gain quality muscle mass without excess fat accumulation",
      duration: "60 mins",
      level: "Beginner",
      focus: "Lean Mass",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
      beforeAfter: {
        before: "Starting weight: 130 lbs",
        after: "Target weight: 155 lbs"
      }
    }
  ];

  const nextWeightLoss = () => {
    setActiveWeightLoss((prev) => (prev + 1) % weightLossPrograms.length);
  };

  const prevWeightLoss = () => {
    setActiveWeightLoss((prev) => (prev - 1 + weightLossPrograms.length) % weightLossPrograms.length);
  };

  const nextWeightGain = () => {
    setActiveWeightGain((prev) => (prev + 1) % weightGainPrograms.length);
  };

  const prevWeightGain = () => {
    setActiveWeightGain((prev) => (prev - 1 + weightGainPrograms.length) % weightGainPrograms.length);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Weight Loss Carousel */}
      <div className="space-y-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingDown className="h-8 w-8 text-red-500" />
            <h3 className="text-3xl font-bold text-gray-900">Weight Loss Programs</h3>
          </div>
          <p className="text-gray-600">Burn fat and achieve your ideal weight</p>
        </div>
        
        <div className="relative">
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative h-64">
              <img 
                src={weightLossPrograms[activeWeightLoss].image} 
                alt={weightLossPrograms[activeWeightLoss].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">
                Weight Loss
              </Badge>
            </div>
            <CardContent className="p-6 space-y-4">
              <div>
                <h4 className="text-2xl font-bold text-gray-900">{weightLossPrograms[activeWeightLoss].title}</h4>
                <p className="text-red-600 font-semibold">{weightLossPrograms[activeWeightLoss].subtitle}</p>
              </div>
              <p className="text-gray-600">{weightLossPrograms[activeWeightLoss].description}</p>
              
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900">{weightLossPrograms[activeWeightLoss].duration}</p>
                  <p className="text-gray-600">Duration</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900">{weightLossPrograms[activeWeightLoss].level}</p>
                  <p className="text-gray-600">Level</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900">{weightLossPrograms[activeWeightLoss].calories}</p>
                  <p className="text-gray-600">Calories</p>
                </div>
              </div>

              <div className="p-4 bg-red-50 rounded-lg">
                <h5 className="font-semibold text-red-800 mb-2">Transformation Goal</h5>
                <p className="text-sm text-red-700">{weightLossPrograms[activeWeightLoss].beforeAfter.before}</p>
                <p className="text-sm text-red-700">{weightLossPrograms[activeWeightLoss].beforeAfter.after}</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between items-center mt-4">
            <Button variant="outline" size="icon" onClick={prevWeightLoss}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {weightLossPrograms.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeWeightLoss ? 'bg-red-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={nextWeightLoss}>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Weight Gain Carousel */}
      <div className="space-y-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="h-8 w-8 text-green-500" />
            <h3 className="text-3xl font-bold text-gray-900">Weight Gain Programs</h3>
          </div>
          <p className="text-gray-600">Build muscle and gain healthy weight</p>
        </div>
        
        <div className="relative">
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative h-64">
              <img 
                src={weightGainPrograms[activeWeightGain].image} 
                alt={weightGainPrograms[activeWeightGain].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <Badge className="absolute top-4 left-4 bg-green-500 hover:bg-green-600">
                Weight Gain
              </Badge>
            </div>
            <CardContent className="p-6 space-y-4">
              <div>
                <h4 className="text-2xl font-bold text-gray-900">{weightGainPrograms[activeWeightGain].title}</h4>
                <p className="text-green-600 font-semibold">{weightGainPrograms[activeWeightGain].subtitle}</p>
              </div>
              <p className="text-gray-600">{weightGainPrograms[activeWeightGain].description}</p>
              
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900">{weightGainPrograms[activeWeightGain].duration}</p>
                  <p className="text-gray-600">Duration</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900">{weightGainPrograms[activeWeightGain].level}</p>
                  <p className="text-gray-600">Level</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900">{weightGainPrograms[activeWeightGain].focus}</p>
                  <p className="text-gray-600">Focus</p>
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">Transformation Goal</h5>
                <p className="text-sm text-green-700">{weightGainPrograms[activeWeightGain].beforeAfter.before}</p>
                <p className="text-sm text-green-700">{weightGainPrograms[activeWeightGain].beforeAfter.after}</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between items-center mt-4">
            <Button variant="outline" size="icon" onClick={prevWeightGain}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {weightGainPrograms.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeWeightGain ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={nextWeightGain}>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessCarousel;
