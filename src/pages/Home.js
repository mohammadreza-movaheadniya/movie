import BannerHome from "../component/BannerHome";
import HorizontalScollCard from "../component/HorizontalScollCard";
import UseFetch from "../hooks/UseFetch.js";
import { useStore } from "../store/stoore.js";

const Home = () => {
 const trendingData=useStore(state=>state.bannerData)
  const { data: nowPlayingData } = UseFetch("/movie/now_playing");
  const { data: topRatedData } = UseFetch("/movie/top_rated");
  const { data: popularTvShowData } = UseFetch("/tv/popular");
  const { data: onTheAirShowData } = UseFetch("/tv/on_the_air");
  return (
    <div>
      <BannerHome />
      <HorizontalScollCard data={trendingData}  heading={"Trending"} trending={true}/>
      <HorizontalScollCard data={nowPlayingData} heading={"Now Playing"} media_type="movie"/>
      <HorizontalScollCard data={topRatedData} heading={"Top Rated Movies"}  media_type="movie" />
      <HorizontalScollCard data={popularTvShowData} heading={"Popular TV Show"} media_type="tv" />
      <HorizontalScollCard data={onTheAirShowData} heading={"On The Air"}  media_type="tv" />
    </div>
  );
};

export default Home;
