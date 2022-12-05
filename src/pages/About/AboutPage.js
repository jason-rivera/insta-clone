import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.aboutPageContainer}>
      <h1>About</h1>
      <p>This is the about page</p>
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
    </div>
  );
};

export default AboutPage;
