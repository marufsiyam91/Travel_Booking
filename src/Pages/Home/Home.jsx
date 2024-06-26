import styles from "./Home.module.css";
import HeroComponent from "../../Components/HeroComponent/HeroComponent";
import Searchbox from "../../Components/Searchbox/Searchbox";
import Subscribe_main from "../../Components/Subscribe_main/Subscribe_main";
import About_us_info from "../../Components/About_us_info/About_us_info";
import Choose_Travic from "../../Components/Choose_Travic/Choose_Travic";
import TourPackages from "../../Components/TourPackages/TourPackages";
import Blog from "../../Components/Blog";

const Home = () => {
  return (
    <div>
      <div className={styles.home_wrapper}>
        <div className={styles.hero_area_wrapper}>
          <HeroComponent />
        </div>

        <div className={styles.hero_input_area}>
          <Searchbox />
        </div>

        <div className={styles.about_us_main_area}>
          <About_us_info />
        </div>

        <div className={styles.choose_travic_area}>
          <Choose_Travic />
        </div>

        <div className={styles.tourpackage}>
          <TourPackages />
        </div>

        <div>
          <Blog/>
        </div>

        <div className={styles.Subscribe_area}>
          <Subscribe_main />
        </div>
      </div>
    </div>
  );
};

export default Home;
