import styles from './App.module.scss';
import Header from "./components/header/Header";

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <h1>Test My Portfolio</h1>
    </div>
  );
}
