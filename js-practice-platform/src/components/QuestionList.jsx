import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Clock, Code, Play } from 'lucide-react';
import { setQuestions, setCurrentQuestion } from '../store/slices/questionsSlice';

const QuestionList = ({ category, title, description }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { questions } = useSelector((state) => state.questions);
  const [loading, setLoading] = useState(true);
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  useEffect(() => {
    const loadQuestions = async () => {
      setLoading(true);
      try {
        let questionData = [];
        
        // Import the appropriate JSON file based on category
        switch (category) {
          case 'javascript-basics':
            const basicsData = await import('../data/javascript-basics.json');
            questionData = basicsData.default;
            break;
          case 'intermediate-javascript':
            const intermediateData = await import('../data/intermediate-javascript.json');
            questionData = intermediateData.default;
            break;
          case 'javascript-dom':
            const domData = await import('../data/dom-exercises.json');
            questionData = domData.default;
            break;
          case 'interview-questions':
            const interviewData = await import('../data/interview-questions.json');
            questionData = interviewData.default;
            break;
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
      <div className="flex items-center justify-center py-12">
        <div className="loading-spinner"></div>
        <span className="ml-3 text-gray-600 dark:text-gray-400">Loading questions...</span>
      </div>
    );
  }

  return (
    <div className="question-list-container">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-100 dark:text-gray-800 mb-3">{title}</h1>
        <p className="text-gray-100 dark:text-gray-800 text-lg">{description}</p>
        <div className="mt-4 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1">
            <Code size={16} />
            {filteredQuestions.length} Questions
          </span>
          <span className="flex items-center gap-1">
            <Clock size={16} />
            Est. 30-45 min
          </span>
        </div>
      </div>

      <div className="question-list">
        {filteredQuestions.map((question, index) => (
          <div
            key={question.id}
            className="question-card card"
            onClick={() => handleQuestionClick(question)}
          >
            <div className="card-header">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="card-title text-lg">{question.title}</h3>
                    <span className={`difficulty-badge ${getDifficultyColor(question.difficulty)}`}>
                      {question.difficulty}
                    </span>
                  </div>
                </div>
                <Play size={20} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
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
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  Start Coding →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredQuestions.length === 0 && !loading && (
        <div className="text-center py-12">
          <Code size={48} className="text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            No questions found for this category.
          </p>
        </div>
      )}
    </div>
  );
};

export default QuestionList;
