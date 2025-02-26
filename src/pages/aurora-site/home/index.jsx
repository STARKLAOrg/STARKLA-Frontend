import React from "react";
import { ArrowRight, Brain, MessageSquare, Award } from "lucide-react";
import { NavLink } from "react-router-dom";
import StarklaIcon from "@/assets/S-icon.jpg";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
    <div className="w-12 h-12 bg-blue-50 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

const BenefitItem = ({ title, description }) => (
  <div className="flex gap-4">
    <div className="w-6 h-6 mt-1 rounded-full bg-blue-100 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
      <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
    </div>
    <div>
      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{title}</h4>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </div>
);

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      
      <nav className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <img
                src={StarklaIcon}
                alt="Starkla Icon"
                className="w-8 h-8 object-contain rounded-full"
              />
              <span className="text-xl font-semibold text-gray-900 dark:text-white">STARKLA</span>
            </div>
          </div>
        </div>
      </nav>

      
      <div className="bg-blue-600 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <p className="text-xl text-blue-100 dark:text-blue-200 mb-4">
              Say It Right, Learn It Bright – Meet Your AI Agent!
            </p>
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Transform Your English Learning Journey?
            </h2>
            <button
              className="inline-flex items-center gap-2 bg-white dark:bg-blue-600  px-6 py-3 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
              <NavLink data-testid="get-started" to="wallet-connection" className='text-blue-600 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700'> Get Started Now</NavLink>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Core Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <FeatureCard
            icon={Brain}
            title="Personalized Learning"
            description="Our AI tutor adapts lessons to your level, providing custom exercises based on your progress and areas for improvement."
          />
          <FeatureCard
            icon={MessageSquare}
            title="Real Conversation Practice"
            description="Practice real-life scenarios with our AI, from job interviews to daily conversations, with instant pronunciation feedback."
          />
          <FeatureCard
            icon={Award}
            title="Smart Gamification"
            description="Earn tokens on Starknet blockchain for completing objectives, maintaining streaks, and mastering new skills."
          />
        </div>
      </div>

      
      <div className="bg-white dark:bg-gray-800 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            The STARKLA Advantage
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            <div className="space-y-8">
              <BenefitItem
                title="Smart Adaptive System"
                description="Our AI continuously analyzes your performance to provide the perfect learning curve."
              />
              <BenefitItem
                title="Blockchain Integration"
                description="Secure, transparent progress tracking and rewards through Starknet technology."
              />
              <BenefitItem
                title="Comprehensive Assessment"
                description="Get certified based on CEFR (A1-C2 levels) standards in reading, writing, speaking, and listening."
              />
            </div>
            <div className="space-y-8">
              <BenefitItem
                title="Dynamic Content Generation"
                description="Lessons tailored to your interests, from general conversation to specific fields like IT or healthcare."
              />
              <BenefitItem
                title="Real-time Feedback"
                description="Instant corrections and suggestions for pronunciation, grammar, and vocabulary improvement."
              />
              <BenefitItem
                title="Multi-Device Access"
                description="Seamlessly continue your learning journey across all your devices."
              />
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-white dark:bg-gray-800 border-t dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center w-full max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Your Personalized Virtual English Tutor
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              STARKLA combines cutting-edge AI with blockchain technology to deliver a revolutionary
              approach to language learning. Experience personalized tutoring that adapts to your needs.
            </p>
            <button
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700  dark:hover:bg-gray-700 transition-colors">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;