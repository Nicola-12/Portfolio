import styles from './App.module.scss';
import About from './components/about/About';
import Header from './components/header/Header';

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <About />
    </div>
  );
}
