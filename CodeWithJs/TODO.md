# CodeWithJs Optimization Tasks

## 1. Extract Home component to separate file
- [x] Create `src/pages/Home.jsx`: Move Home component definition, question data imports, and required dependencies
- [x] Update `src/App.jsx`: Import Home component, remove inline definition and question imports

## 2. Implement lazy loading for routes
- [x] Update `src/App.jsx`: Use React.lazy for page components (Home, BasicQuestions, SignIn, SignUp)
- [x] Wrap Routes with Suspense

## 3. Extract pagination logic to custom hook
- [ ] Create `src/hooks/usePagination.js`: Extract pagination state and logic from BasicQuestions.jsx
- [ ] Update `src/pages/BasicQuestions.jsx`: Replace inline pagination logic with the custom hook

## 4. Move inline styles to CSS classes
- [ ] Create `src/pages/Home.css`: Define CSS classes for hero gradients, card hover effects, etc.
- [ ] Update `src/pages/Home.jsx`: Replace inline styles with className attributes

## 5. Optimize QuestionAccordion formatting logic
- [ ] Simplify formatAnswer function, add useMemo for expensive operations
- [ ] Add React.memo to QuestionAccordion component

## 6. Add performance optimizations
- [ ] Add React.memo to Home and BasicQuestions components
- [ ] Use useMemo for filtered questions and pagination calculations

## 7. Implement code splitting
- [ ] Covered by lazy loading implementation

## 8. Review and optimize dependencies
- [ ] Check `package.json` for unused dependencies

## 9. Add error boundaries
- [ ] Create `src/components/ErrorBoundary.jsx`: Basic error boundary component
- [ ] Wrap routes with ErrorBoundary in App.jsx

## 10. Optimize Redux usage for questions
- [ ] Update questionsSlice to store loaded questions
- [ ] Implement lazy loading for question data
