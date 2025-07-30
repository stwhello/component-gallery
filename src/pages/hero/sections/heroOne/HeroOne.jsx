import "./heroOne.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "A1", learners: 8000 },
  { name: "A2", learners: 10000 },
  { name: "B1", learners: 12000 },
  { name: "B2", learners: 9000 },
  { name: "C1", learners: 6000 },
  { name: "C2", learners: 5000 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const HeroOne = () => {
  return (
    <motion.section
      className="heroOne"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <motion.div className="heroOne__content">
        <motion.header variants={fadeUp}>
          <h1>
            Easy <span>language</span> mastery <br />
            with our platform
          </h1>
          <motion.div className="heroOne__buttons" variants={fadeUp}>
            <button className="primary">Start learning</button>
            <button className="outline">Explore courses</button>
          </motion.div>
        </motion.header>

        <motion.div className="heroOne__main">
          <motion.div className="heroOne__levels" variants={slideFromLeft}>
            <p>60k+<br />Learners</p>
            <div className="levels">
              <div className="level a1">A1<br />Beginner</div>
              <div className="level a2">A2<br />Pre-intermediate</div>
              <div className="level b1">B1<br />Intermediate</div>
              <div className="level b2">B2<br />Upper-intermediate</div>
              <div className="level c1">C1<br />Advanced</div>
              <div className="level c2">C2<br />Mastery</div>
            </div>
          </motion.div>

          <motion.div className="heroOne__centerImage" variants={fadeUp}>
            <img
              src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Online tutor smiling"
            />
          </motion.div>

          <motion.div className="heroOne__activity" variants={slideFromRight}>
            <p>
              Learn new languages at your own pace <br />
              and unlock a world of opportunities.
            </p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="learners" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroOne;
