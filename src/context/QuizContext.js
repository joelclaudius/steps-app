import { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext();

const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],

  //'loading, 'error' , 'ready', 'active', 'finished'
  status: "loading",

  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  setMaxTime: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };

    case "dataFailed":
      return { ...state, status: "error" };

    case "start":
      return {
        ...state,
        status: "active",
        setMaxTime: state.questions.length * SECS_PER_QUESTION,
      };

    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };

    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };

    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };

    case "restart":
      return { ...initialState, questions: state.questions, status: "ready" };

    case "tick":
      return {
        ...state,
        setMaxTime: state.setMaxTime - 1,
        status: state.setMaxTime === 0 ? "finished" : state.status,
      };

    default:
      throw new Error("Action Unknown");
  }
};

function QuizProvider({ children }) {
  const [
    { questions, status, index, answer, points, highscore, setMaxTime },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  useEffect(() => {
    fetch("https://questions1-api.vercel.app/questions")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "dataReceived", payload: data.questions })
      )
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highscore,
        setMaxTime,
        dispatch,
        numQuestions,
        maxPossiblePoints,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside QuizProvider");
  return context;
}

export { QuizProvider, useQuiz };
