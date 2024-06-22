import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />

      <section>
        <h1>
          Welcome to QuizMaster!
          <br />
          Challenge Yourself and Learn More.
        </h1>
        <h2>
          Explore a variety of quizzes that test your knowledge across multiple
          topics. Track your progress, compete with friends, and become a quiz
          master!
        </h2>
        <Link to="/app" className="cta">
          Start a Quiz Now
        </Link>
      </section>
    </main>
  );
}
