import { FaCheckCircle } from "react-icons/fa"; // Importing FontAwesome for list icons
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";
import Button from "../components/Button";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple Pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            With QuizMaster, you get unlimited access to all our quizzes for a
            simple monthly fee of just $9. Here’s what you can enjoy:
          </p>
          <ul className={styles.features}>
            <li>
              <FaCheckCircle className={styles.icon} /> Unlimited quizzes across
              various topics.
            </li>
            <li>
              <FaCheckCircle className={styles.icon} /> Real-time progress
              tracking and detailed statistics.
            </li>
            <li>
              <FaCheckCircle className={styles.icon} /> Competitive leaderboard
              to challenge your friends.
            </li>
            <li>
              <FaCheckCircle className={styles.icon} /> New quizzes added every
              week to keep you engaged.
            </li>
          </ul>
          <p>Join today and start mastering your knowledge with QuizMaster!</p>
        </div>
        <div
          className="h-full bg-cover bg-center rounded-xl md:px-10"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/product.avif)`,
          }}
        ></div>
        <footer>
          {" "}
          <Button type="primary">Sign Up Now</Button>
        </footer>
      </section>
    </main>
  );
}
