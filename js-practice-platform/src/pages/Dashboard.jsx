import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
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
      color: 'bg-green-100 text-green-800',
      gradient: 'from-green-400 to-green-600'
    },
    {
      title: 'Intermediate JavaScript',
      description: 'Dive deeper into closures, promises, async/await, and advanced array methods.',
      path: '/intermediate-javascript',
      icon: Code,
      questionCount: 12,
      difficulty: 'Intermediate',
      color: 'bg-yellow-100 text-yellow-800',
      gradient: 'from-yellow-400 to-yellow-600'
    },
    {
      title: 'JavaScript DOM Exercises',
      description: 'Master DOM manipulation, event handling, and interactive web development.',
      path: '/javascript-dom',
      icon: Globe,
      questionCount: 10,
      difficulty: 'Intermediate',
      color: 'bg-blue-100 text-blue-800',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      title: 'JavaScript Practice',
      description: 'Practice with real-world scenarios and coding challenges.',
      path: '/javascript-practice',
      icon: Target,
      questionCount: 20,
      difficulty: 'Mixed',
      color: 'bg-purple-100 text-purple-800',
      gradient: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Interview Questions',
      description: 'Prepare for technical interviews with commonly asked JavaScript questions.',
      path: '/interview-questions',
      icon: BrainCircuit,
      questionCount: 8,
      difficulty: 'Advanced',
      color: 'bg-red-100 text-red-800',
      gradient: 'from-red-400 to-red-600'
    }
  ];

  const stats = [
    {
      title: 'Total Questions',
      value: '65',
      icon: BookOpen,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Completed',
      value: '23',
      icon: Award,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'In Progress',
      value: '8',
      icon: Clock,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      title: 'Success Rate',
      value: '87%',
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  return (
    <motion.div 
      className="dashboard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="dashboard-header mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h1 
          className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Welcome to JavaScript Practice Platform
        </motion.h1>
        <motion.p 
          className="text-gray-600 dark:text-gray-400 text-lg"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Master JavaScript through hands-on practice and interactive exercises
        </motion.p>
      </motion.div>

      {/* Statistics Cards */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div 
              key={index} 
              className="card"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                </div>
                <motion.div 
                  className={`p-3 rounded-lg ${stat.bgColor} dark:bg-gray-800`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Icon size={24} className={stat.color} />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Categories Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to={category.path} className="block group">
                <div className="card h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div className="card-header">
                    <div className="flex items-center justify-between mb-3">
                      <motion.div 
                        className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Icon size={24} className="text-gray-700 dark:text-gray-300" />
                      </motion.div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${category.color}`}>
                        {category.difficulty}
                      </span>
                    </div>
                    <motion.h3 
                      className="card-title text-xl"
                      whileHover={{ x: 5 }}
                    >
                      {category.title}
                    </motion.h3>
                  </div>
                  <div className="card-body">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">
                        {category.questionCount} Questions
                      </span>
                      <motion.span 
                        className="text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700"
                        whileHover={{ x: 5 }}
                      >
                        Start Practice →
                      </motion.span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Recent Activity Section */}
      <motion.div 
        className="mt-12"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <motion.h2 
          className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          Recent Activity
        </motion.h2>
        <motion.div 
          className="card"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          whileHover={{ y: -5 }}
        >
          <div className="text-center py-8">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Clock size={48} className="text-gray-400 mx-auto mb-4" />
            </motion.div>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Start solving questions to see your recent activity here
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/javascript-basics" className="btn btn-primary mt-4">
                Get Started
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;