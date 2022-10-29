import styles from './About.module.scss';

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.about__image}></div>
      <div className={styles.about__description}>
        <div className={styles.about__description__title}>
          <span className={styles.about__description__title__me}>
            👋 Sobre mim
          </span>
          <span className={styles.about__description__title__name}>
            Nícolas Cristiel Endrizzi
          </span>
        </div>
        <div className={styles.about__description__subtitle}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper
            eget duis at tellus at. Purus ut faucibus pulvinar elementum integer
            enim. Nisi porta lorem mollis aliquam.
          </p>
          <p>
            Vitae tempus quam pellentesque nec nam aliquam sem. Placerat
            vestibulum lectus mauris ultrices eros in cursus turpis massa. Eu
            tincidunt tortor aliquam nulla facilisi cras fermentum odio. Magna
            eget est lorem ipsum dolor sit. Aliquam nulla facilisi cras
            fermentum odio. Ipsum dolor sit amet consectetur adipiscing elit
            duis tristique.
          </p>
          <p>
            Ac felis donec et odio pellentesque diam volutpat commodo sed. Amet
            purus gravida quis blandit turpis cursus in hac habitasse. Quis
            imperdiet massa tincidunt nunc pulvinar sapien. Mattis rhoncus urna
            neque viverra justo nec. In massa tempor nec feugiat nisl pretium
            fusce id velit. Sapien faucibus et molestie ac feugiat sed lectus
            vestibulum. Amet mattis vulputate enim nulla aliquet. In hendrerit
            gravida rutrum quisque non tellus. Scelerisque varius morbi enim
            nunc faucibus a pellentesque. Auctor urna nunc id cursus metus
            aliquam eleifend.
          </p>
        </div>
      </div>
    </div>
  );
}
