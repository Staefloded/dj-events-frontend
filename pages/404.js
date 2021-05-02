import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "@/styles/404.module.css";

const NotFoundPage = () => {
  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle color="red" /> 404
        </h1>
        <h4>Sorry, there is nothing here</h4>
        <Link href="/">Sorry there is nothing here</Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
