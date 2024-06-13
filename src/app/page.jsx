import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
          <h1 className={styles.title}>Creative Thoughts Agency.</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            blanditiis adipisci minima reiciendis a autem assumenda dolore.
          </p>
          <div className={styles.buttons}>
            <button className={styles.button}>Learn More</button>
            <button className={styles.button}>Contact</button>
          </div>
          <div className={styles.brand}>
            <img src="/brands.png" alt="" width={300} className={styles.brandImg}/>
          </div>  
      </div>
      <div className={styles.imgContainer}>
      <img src="https://burst.shopifycdn.com/photos/lensball-yellow-and-orange-lights.jpg?width=1000&format=pjpg&exif=0&iptc=0" alt="" width={400} height={400} className={styles.heroImg}/>
    </div>
    </div>
  );
};

export default Home;
