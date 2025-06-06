
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { X, User, Phone, MapPin, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface RegistrationFormProps {
  onClose: () => void;
  onSuccess: () => void;
}

const RegistrationForm = ({ onClose, onSuccess }: RegistrationFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const validateIndianMobile = (mobile: string) => {
    // Indian mobile number validation: 10 digits starting with 6-9
    const indianMobileRegex = /^[6-9]\d{9}$/;
    return indianMobileRegex.test(mobile);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim()) {
      toast({
        title: "Error",
        description: "Please enter your name",
        variant: "destructive"
      });
      return;
    }

    if (!validateIndianMobile(formData.mobile)) {
      toast({
        title: "Invalid Mobile Number",
        description: "Please enter a valid Indian mobile number (10 digits starting with 6-9)",
        variant: "destructive"
      });
      return;
    }

    if (!formData.address.trim()) {
      toast({
        title: "Error",
        description: "Please enter your address",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate email sending (in real app, this would call an API)
      console.log("Sending registration details to naveenlinking@gmail.com:", formData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast({
        title: "Registration Successful!",
        description: "Your details have been sent successfully. You now have access to our fitness videos.",
      });

      onSuccess();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit registration. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Join Our Fitness Program</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <p className="text-gray-600 mb-6">
        Register now to get access to our exclusive fitness videos and personalized training programs.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div className="space-y-2">
          <Label htmlFor="name" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Full Name
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className="w-full"
            required
          />
        </div>

        {/* Mobile Number Field */}
        <div className="space-y-2">
          <Label htmlFor="mobile" className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            Mobile Number
          </Label>
          <Input
            id="mobile"
            type="tel"
            placeholder="Enter 10-digit mobile number"
            value={formData.mobile}
            onChange={(e) => {
              // Only allow numbers and limit to 10 digits
              const value = e.target.value.replace(/\D/g, '').slice(0, 10);
              handleInputChange("mobile", value);
            }}
            className="w-full"
            maxLength={10}
            required
          />
          <p className="text-sm text-gray-500">
            Enter a valid Indian mobile number (starts with 6, 7, 8, or 9)
          </p>
        </div>

        {/* Address Field */}
        <div className="space-y-2">
          <Label htmlFor="address" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Address
          </Label>
          <Textarea
            id="address"
            placeholder="Enter your complete address"
            value={formData.address}
            onChange={(e) => handleInputChange("address", e.target.value)}
            className="w-full min-h-[100px]"
            required
          />
        </div>

        {/* Email Info */}
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Mail className="h-4 w-4 text-blue-600" />
            <p className="text-sm font-semibold text-blue-800">Registration Details</p>
          </div>
          <p className="text-sm text-blue-700">
            Your registration details will be sent to: <strong>naveenlinking@gmail.com</strong>
          </p>
        </div>

        {/* Submit Button */}
        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg py-6"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Register for Fitness Program"}
        </Button>
      </form>

      {/* Benefits List */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-3">What you'll get:</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Access to 500+ professional fitness videos
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            Personalized workout plans
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            Nutrition guidance and meal plans
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            24/7 expert support and guidance
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RegistrationForm;
