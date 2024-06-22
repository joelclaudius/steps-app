import Button from "../components/Button";
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <h2 className="flex justify-center">Discover QuizMaster.</h2>

      <section className="md:px-10">
        <div
          className="h-full bg-cover bg-center rounded-xl"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/product.avif)`,
          }}
        >
          {/* <img
            src="product.avif"
            alt="people participating in a quiz"
            className="h-full bg-custom-img1"
          /> */}
        </div>
        <div>
          <p>
            QuizMaster offers an exciting platform where you can test your
            knowledge across various topics, from history and science to pop
            culture and more. With our interactive quizzes, learning has never
            been more fun and engaging.
          </p>
          <p>
            Compete with friends, track your progress, and challenge yourself
            with our vast collection of quizzes. Whether you're a trivia
            enthusiast or looking to sharpen your knowledge, QuizMaster is the
            perfect place to start your journey.
          </p>
        </div>
      </section>
      <footer>
        <Button type="primary">Sign Up Now</Button>
      </footer>
    </main>
  );
}
