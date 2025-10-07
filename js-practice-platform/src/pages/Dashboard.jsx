import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Code, 
  Globe, 
  Target, 
  BrainCircuit,
  TrendingUp,
  Clock,
  Award
} from 'lucide-react';

const Dashboard = () => {
  const categories = [
    {
      title: 'JavaScript Basics',
      description: 'Learn fundamental JavaScript concepts including variables, functions, and control structures.',
      path: '/javascript-basics',
      icon: BookOpen,
      questionCount: 15,
      difficulty: 'Beginner',
      color: 'bg-green-100 text-green-800'
    },
    {
      title: 'Intermediate JavaScript',
      description: 'Dive deeper into closures, promises, async/await, and advanced array methods.',
      path: '/intermediate-javascript',
      icon: Code,
      questionCount: 12,
      difficulty: 'Intermediate',
      color: 'bg-yellow-100 text-yellow-800'
    },
    {
      title: 'JavaScript DOM Exercises',
      description: 'Master DOM manipulation, event handling, and interactive web development.',
      path: '/javascript-dom',
      icon: Globe,
      questionCount: 10,
      difficulty: 'Intermediate',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      title: 'JavaScript Practice',
      description: 'Practice with real-world scenarios and coding challenges.',
      path: '/javascript-practice',
      icon: Target,
      questionCount: 20,
      difficulty: 'Mixed',
      color: 'bg-purple-100 text-purple-800'
    },
    {
      title: 'Interview Questions',
      description: 'Prepare for technical interviews with commonly asked JavaScript questions.',
      path: '/interview-questions',
      icon: BrainCircuit,
      questionCount: 8,
      difficulty: 'Advanced',
      color: 'bg-red-100 text-red-800'
    }
  ];

  const stats = [
    {
      title: 'Total Questions',
      value: '65',
      icon: BookOpen,
      color: 'text-blue-600'
    },
    {
      title: 'Completed',
      value: '23',
      icon: Award,
      color: 'text-green-600'
    },
    {
      title: 'In Progress',
      value: '8',
      icon: Clock,
      color: 'text-yellow-600'
    },
    {
      title: 'Success Rate',
      value: '87%',
      icon: TrendingUp,
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="dashboard">
       <div className="dashboard-header mb-8">
    {/* Use a base class that should be dark in light mode, and ensure dark:text-white is present */}
    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
      Welcome to JavaScript Practice Platform
    </h1>
    
    <p className="text-gray-600 dark:text-gray-400 text-lg">
      Master JavaScript through hands-on practice and interactive exercises
    </p>
  </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark">
                    {stat.value}
                  </p>
                </div>
                <div className={`p-3 rounded-lg bg-gray-100 dark:bg-gray-800`}>
                  <Icon size={24} className={stat.color} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Link key={index} to={category.path} className="block group">
              <div className="card h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className="card-header">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800">
                      <Icon size={24} className="text-gray-700 dark:text-gray-300" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${category.color}`}>
                      {category.difficulty}
                    </span>
                  </div>
                  <h3 className="card-title text-xl">{category.title}</h3>
                </div>
                <div className="card-body">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">
                      {category.questionCount} Questions
                    </span>
                    <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700">
                      Start Practice →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Recent Activity Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Recent Activity
        </h2>
        <div className="card">
          <div className="text-center py-8">
            <Clock size={48} className="text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Start solving questions to see your recent activity here
            </p>
            <Link to="/javascript-basics" className="btn btn-primary mt-4">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
