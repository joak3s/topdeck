"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DatePicker from "react-datepicker";
import { differenceInMonths, format } from "date-fns";
import {
  Send,
  Upload,
  CheckCircle,
  Camera,
  Shield,
  BarChart3,
  Building,
  Clock,
  MapPin,
  FileText,
  Calendar
} from "lucide-react";

import "react-datepicker/dist/react-datepicker.css";

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  targetStartDate: Date | null;
  targetEndDate: Date | null;
  scope: string[];
  siteLocation: string;
  cameraCount: string;
  additionalMessage: string;
  siteMapFile?: File | null;
}

export default function RequestQuotePage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    projectType: "",
    targetStartDate: null,
    targetEndDate: null,
    scope: [],
    siteLocation: "",
    cameraCount: "",
    additionalMessage: "",
    siteMapFile: null,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    "Commercial Building",
    "Infrastructure",
    "Residential Development",
    "Industrial Construction",
    "Other"
  ];



  const scopeOptions = [
    { id: "reality-capture", label: "Reality Capture (AI Analytics)", icon: BarChart3 },
    { id: "construction-cameras", label: "Construction Cameras (Timelapse & Monitoring)", icon: Camera },
    { id: "security-cameras", label: "Security Cameras (Threat Detection)", icon: Shield },
    { id: "full-suite", label: "Full Suite Solution", icon: CheckCircle }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleScopeChange = (scopeId: string) => {
    setFormData(prev => ({
      ...prev,
      scope: prev.scope.includes(scopeId)
        ? prev.scope.filter(id => id !== scopeId)
        : [...prev.scope, scopeId]
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      siteMapFile: file
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    console.log("Quote request submitted:", formData);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: "",
      targetStartDate: null,
      targetEndDate: null,
      scope: [],
      siteLocation: "",
      cameraCount: "",
      additionalMessage: "",
      siteMapFile: null,
    });
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Card className="border-4 border-green-500 shadow-2xl rounded-modern">
            <CardContent className="p-12 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h1 className="text-4xl font-black text-black mb-4">
                Quote Request Submitted Successfully!
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Thank you for your interest in Topdeck.ai. Our team will review your project details and
                contact you within 24 hours with a customized quote and next steps.
              </p>
              <div className="space-y-4">
                <Button
                  onClick={resetForm}
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 font-bold border-2 border-red-500 hover:border-red-600 transition-all duration-200 rounded-modern"
                >
                  Submit Another Request
                </Button>
                <p className="text-gray-600">
                  Questions? Email us at{" "}
                  <a href="mailto:sales@topdeck.ai" className="text-red-500 hover:text-red-600 font-bold">
                    sales@topdeck.ai
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black/90 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-black text-white px-6 py-2 font-bold border-2 border-red-500 mb-6 rounded-modern">
              REQUEST QUOTE
            </Badge>
            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              REQUEST A <span className="text-red-500">CUSTOM QUOTE</span>
            </h1>
            <p className="text-white/90 text-xl font-medium max-w-4xl mx-auto">
              Provide details about your project to receive an accurate quote for our AI-driven construction solutions,
              including Reality Capture, Construction Cameras, and Security Cameras.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-4 border-black shadow-2xl rounded-modern">
            <CardHeader className="bg-black text-white">
              <CardTitle className="text-3xl font-black text-center tracking-tight">
                PROJECT DETAILS
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-black text-black mb-4 flex items-center">
                    <Building className="w-6 h-6 text-red-500 mr-3" />
                    CONTACT INFORMATION
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-black font-bold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-black focus:border-red-500 focus:ring-0 outline-none font-medium rounded-modern bg-white"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-black font-bold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-black focus:border-red-500 focus:ring-0 outline-none font-medium rounded-modern bg-white"
                        placeholder="your.email@company.com"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="company" className="block text-black font-bold mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-black focus:border-red-500 focus:ring-0 outline-none font-medium rounded-modern bg-white"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Information */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-black text-black mb-4 flex items-center">
                    <FileText className="w-6 h-6 text-red-500 mr-3" />
                    PROJECT INFORMATION
                  </h3>

                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-black font-bold mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-black focus:border-red-500 focus:ring-0 outline-none font-medium rounded-modern bg-white"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-black font-bold mb-2">
                        Target Start Date *
                      </label>
                      <DatePicker
                        selected={formData.targetStartDate}
                        onChange={(date) => setFormData(prev => ({ ...prev, targetStartDate: date }))}
                        selectsStart
                        startDate={formData.targetStartDate}
                        endDate={formData.targetEndDate}
                        minDate={new Date()}
                        dateFormat="MM/dd/yyyy"
                        placeholderText="Select start date"
                        className="w-full px-4 py-3 border-2 border-black focus:border-red-500 focus:ring-0 outline-none font-medium rounded-modern bg-white"
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                      />
                    </div>

                    <div>
                      <label className="block text-black font-bold mb-2">
                        Target End Date *
                      </label>
                      <DatePicker
                        selected={formData.targetEndDate}
                        onChange={(date) => setFormData(prev => ({ ...prev, targetEndDate: date }))}
                        selectsEnd
                        startDate={formData.targetStartDate}
                        endDate={formData.targetEndDate}
                        minDate={formData.targetStartDate || new Date()}
                        dateFormat="MM/dd/yyyy"
                        placeholderText="Select end date"
                        className="w-full px-4 py-3 border-2 border-black focus:border-red-500 focus:ring-0 outline-none font-medium rounded-modern bg-white"
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                      />
                    </div>
                    <div className="flex items-end">
                      {formData.targetStartDate && formData.targetEndDate && (
                        <div className="w-full px-4 py-3 border-2 border-gray-300 bg-gray-50 rounded-modern">
                          <p className="text-sm font-medium text-gray-700">
                            <span className="font-bold">Duration:</span>{" "}
                            {differenceInMonths(formData.targetEndDate, formData.targetStartDate)} months
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {format(formData.targetStartDate, "MMM dd, yyyy")} - {format(formData.targetEndDate, "MMM dd, yyyy")}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Scope Selection */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-black text-black mb-4 flex items-center">
                    <Camera className="w-6 h-6 text-red-500 mr-3" />
                    SOLUTION SCOPE *
                  </h3>
                  <p className="text-gray-600 font-medium">
                    Select all solutions you&apos;re interested in (multiple selections allowed):
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {scopeOptions.map((option) => {
                      const IconComponent = option.icon;
                      const isSelected = formData.scope.includes(option.id);
                      return (
                        <div
                          key={option.id}
                          onClick={() => handleScopeChange(option.id)}
                          className={`p-4 border-2 cursor-pointer transition-all duration-200 rounded-modern ${isSelected
                              ? "border-red-500 bg-red-50"
                              : "border-black hover:border-red-500 bg-white"
                            }`}
                        >
                          <div className="flex items-start space-x-3">
                            <div className={`p-2 rounded ${isSelected ? "bg-red-500" : "bg-gray-200"}`}>
                              <IconComponent className={`w-5 h-5 ${isSelected ? "text-white" : "text-gray-600"}`} />
                            </div>
                            <div className="flex-1">
                              <h4 className={`font-bold ${isSelected ? "text-red-500" : "text-black"}`}>
                                {option.label}
                              </h4>
                            </div>
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${isSelected ? "border-red-500 bg-red-500" : "border-gray-300"
                              }`}>
                              {isSelected && <CheckCircle className="w-3 h-3 text-white" />}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Site Information */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-black text-black mb-4 flex items-center">
                    <MapPin className="w-6 h-6 text-red-500 mr-3" />
                    SITE INFORMATION
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="siteLocation" className="block text-black font-bold mb-2">
                        Site Location *
                      </label>
                      <input
                        type="text"
                        id="siteLocation"
                        name="siteLocation"
                        required
                        value={formData.siteLocation}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-black focus:border-red-500 focus:ring-0 outline-none font-medium rounded-modern bg-white"
                        placeholder="City, State or full address"
                      />
                    </div>
                    <div>
                      <label htmlFor="cameraCount" className="block text-black font-bold mb-2">
                        Estimated Camera Count
                      </label>
                      <input
                        type="text"
                        id="cameraCount"
                        name="cameraCount"
                        value={formData.cameraCount}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-black focus:border-red-500 focus:ring-0 outline-none font-medium rounded-modern bg-white"
                        placeholder="e.g., 5-10 cameras or Not sure"
                      />
                    </div>
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-black font-bold mb-2">
                      Site Map/Plans (Optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 hover:border-red-500 transition-colors p-6 text-center rounded-modern bg-white">
                      <input
                        type="file"
                        id="siteMapFile"
                        onChange={handleFileUpload}
                        accept=".pdf,.jpg,.jpeg,.png,.dwg"
                        className="hidden"
                      />
                      <label
                        htmlFor="siteMapFile"
                        className="cursor-pointer flex flex-col items-center space-y-2"
                      >
                        <Upload className="w-8 h-8 text-gray-400" />
                        <span className="text-gray-600 font-medium">
                          {formData.siteMapFile ? formData.siteMapFile.name : "Click to upload site map or plans"}
                        </span>
                        <span className="text-sm text-gray-500">
                          PDF, JPG, PNG, DWG files accepted
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Additional Message */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-black text-black mb-4 flex items-center">
                    <Clock className="w-6 h-6 text-red-500 mr-3" />
                    ADDITIONAL DETAILS
                  </h3>
                  <div>
                    <label htmlFor="additionalMessage" className="block text-black font-bold mb-2">
                      Project Details & Special Requirements
                    </label>
                    <textarea
                      id="additionalMessage"
                      name="additionalMessage"
                      rows={6}
                      value={formData.additionalMessage}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-black focus:border-red-500 focus:ring-0 outline-none font-medium rounded-modern resize-none bg-white"
                      placeholder="Tell us about your specific needs, timeline, budget considerations, or any special requirements for your project..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting || formData.scope.length === 0 || !formData.targetStartDate || !formData.targetEndDate}
                    className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white px-8 py-6 font-black text-lg border-4 border-black hover:border-red-600 disabled:border-gray-400 transition-all duration-200 rounded-modern"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        PROCESSING REQUEST...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        SUBMIT QUOTE REQUEST
                      </>
                    )}
                  </Button>
                  {(formData.scope.length === 0 || !formData.targetStartDate || !formData.targetEndDate) && (
                    <div className="text-red-500 text-sm mt-2 text-center font-medium space-y-1">
                      {formData.scope.length === 0 && (
                        <p>Please select at least one solution scope to continue</p>
                      )}
                      {!formData.targetStartDate && (
                        <p>Please select a target start date</p>
                      )}
                      {!formData.targetEndDate && (
                        <p>Please select a target end date</p>
                      )}
                    </div>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
