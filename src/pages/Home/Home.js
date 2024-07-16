import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Section from "../../components/Section/Section";
import api from "../../api/api";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await api.get("/videos");
        if (response.status === 200) {
          setVideos(response.data);
        } else {
          console.error("Failed to load videos");
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await api.delete(`/videos/${id}`);
      if (response.status === 200) {
        setVideos((prevVideos) =>
          prevVideos.filter((video) => video.id !== id)
        );
        console.log("Video eliminado:", id);
      } else {
        console.error("Error al eliminar el video");
      }
    } catch (error) {
      console.error("Error al eliminar el video:", error);
    }
  };

  const handleSave = (updatedVideo) => {
    setVideos((prevVideos) =>
      prevVideos.map((video) =>
        video.id === updatedVideo.id ? updatedVideo : video
      )
    );
    console.log("Video actualizado:", updatedVideo);
  };

  const categories = ["FRONT END", "BACK END", "INNOVACIÓN Y GESTIÓN"];
  const categorizedVideos = categories.map((category) => ({
    category,
    videos: videos.filter((video) => video.category === category),
  }));

  return (
    <>
      <Header />
      <Banner />
      {categorizedVideos.map(({ category, videos }) => (
        <Section
          key={category}
          title={category}
          videos={videos}
          onDelete={handleDelete}
          onSave={handleSave}
        />
      ))}
      <Footer />
    </>
  );
};

export default Home;
