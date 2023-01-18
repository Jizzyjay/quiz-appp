import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUserId } from "../redux/result_reducer";
import "../styles/Main.css";

export default function Main() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  function startQuiz() {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value));
    }
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <ol>
        <li>You will have to answer 10 questions.</li>
        <li>10 points is awarded for each correct answer.</li>
        <li>Each question will have 3 options.</li>
        <li>After 15 seconds, the question will be automatically submitted.</li>
        <li>You can review and change your answers before the quiz finish</li>
        <li>
          After answering all the questions, you will be able to see your score.
        </li>
      </ol>

      <form id="form">
        <input
          ref={inputRef}
          className="userId"
          type="text"
          placeholder="Username*"
        />
      </form>

      <div className="start">
        <Link className="btn" to={"quiz"} onClick={startQuiz}>
          Start Quiz
        </Link>
      </div>
    </div>
  );
}
