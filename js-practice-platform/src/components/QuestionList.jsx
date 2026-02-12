import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Clock, Code, Play } from 'lucide-react';
import { setQuestions, setCurrentQuestion } from '../store/slices/questionsSlice';

const QuestionList = ({ category, title, description }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const questionsData = useSelector((state) => state.questions); // Renamed to avoid unused var error
  const [loading, setLoading] = useState(true);
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  useEffect(() => {
    const loadQuestions = async () => {
      setLoading(true);
      try {
        let questionData = [];
        
        // Import the appropriate JSON file based on category
        switch (category) {
          case 'javascript-basics': {
            const basicsData = await import('../data/javascript-basics.json');
            questionData = basicsData.default;
            break;
          }
          case 'intermediate-javascript': {
            const intermediateData = await import('../data/intermediate-javascript.json');
            questionData = intermediateData.default;
            break;
          }
          case 'javascript-dom': {
            const domData = await import('../data/dom-exercises.json');
            questionData = domData.default;
            break;
          }
          case 'interview-questions': {
            const interviewData = await import('../data/interview-questions.json');
            questionData = interviewData.default;
            break;
          }
          default:
            questionData = [];
        }
        
        dispatch(setQuestions(questionData));
        setFilteredQuestions(questionData);
      } catch (error) {
        console.error('Error loading questions:', error);
      } finally {
        setLoading(false);
      }
    };

    loadQuestions();
  }, [category, dispatch]);

  const handleQuestionClick = (question) => {
    dispatch(setCurrentQuestion(question));
    navigate(`/question/${question.id}`);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'difficulty-easy';
      case 'medium':
        return 'difficulty-medium';
      case 'hard':
        return 'difficulty-hard';
      default:
        return 'difficulty-medium';
    }
  };

  if (loading) {
    return (
      <motion.div 
        className="flex items-center justify-center py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="loading-spinner"
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 1, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        <motion.span 
          className="ml-3 text-gray-600 dark:text-gray-400"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Loading questions...
        </motion.span>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="question-list-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h1 
          className="text-3xl font-bold text-gray-900 dark:text-white mb-3"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {title}
        </motion.h1>
        <motion.p 
          className="text-gray-600 dark:text-gray-400 text-lg"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {description}
        </motion.p>
        <motion.div 
          className="mt-4 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <span className="flex items-center gap-1">
            <Code size={16} />
            {filteredQuestions.length} Questions
          </span>
          <span className="flex items-center gap-1">
            <Clock size={16} />
            Est. 30-45 min
          </span>
        </motion.div>
      </motion.div>

      <motion.div 
        className="question-list"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {filteredQuestions.map((question, index) => (
          <motion.div
            key={question.id}
            className="question-card card"
            onClick={() => handleQuestionClick(question)}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="card-header">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full flex items-center justify-center font-bold text-sm"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {index + 1}
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="card-title text-lg"
                      whileHover={{ x: 5 }}
                    >
                      {question.title}
                    </motion.h3>
                    <motion.span 
                      className={`difficulty-badge ${getDifficultyColor(question.difficulty)}`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {question.difficulty}
                    </motion.span>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1, x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Play size={20} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                </motion.div>
              </div>
            </div>
            <div className="card-body">
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {question.description}
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">
                  {question.testCases?.length || 0} Test Cases
                </span>
                <motion.span 
                  className="text-blue-600 dark:text-blue-400 font-medium"
                  whileHover={{ x: 5 }}
                >
                  Start Coding →
                </motion.span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filteredQuestions.length === 0 && !loading && (
        <motion.div 
          className="text-center py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
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
            <Code size={48} className="text-gray-400 mx-auto mb-4" />
          </motion.div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            No questions found for this category.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default QuestionList;