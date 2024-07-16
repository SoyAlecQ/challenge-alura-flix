import { useState, useEffect } from "react";
import styled from "styled-components";
import api from "../../api/api";

const colors = {
  "FRONT END": "#6BD1FF",
  "BACK END": "#00C86F",
  "INNOVACIÓN Y GESTIÓN": "#FFBA05",
};

const BannerStyled = styled.div`
  background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 255, 0.2) 50%,
      rgba(0, 0, 0, 0.9)
    ),
    url("img/Banner.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 1280px) {
    height: 40vh;
  }

  @media (max-height: 600px) {
    height: 70vh;
  }

  @media (max-width: 430px) {
    display: none;
  }
`;

const Card = styled.div`
  width: 100%;
  height: 50%;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2vw;
  gap: 4vw;

  @media (max-width: 1280px) {
    flex-direction: column;
    height: 100%;
  }
`;

const CardContentLeft = styled.div`
  color: #fff;
  width: 40%;
  margin-left: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1280px) {
    align-items: flex-start;
  }
`;

const TitleContainer = styled.button`
  display: inline-block;
  border: none;
  border-radius: 15px;
  padding: 0px 20px;
  background-color: ${(props) => colors[props.category] || "#6BD1FF"};
  height: 10vh;
  width: 40%;
  font-size: 5vh;
  font-weight: bold;
  color: #fff;

  @media (max-width: 1024px) {
    height: 4vh;
    font-size: 2vh;
  }
`;

const H2Challenge = styled.h2`
  font-size: 6vh;
  margin: 40px 0 0 0;
  font-weight: lighter;

  @media (max-width: 1024px) {
    font-size: 3vh;
  }
`;

const CardContentRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6BD1FF;
  width: 40%;
  margin-right: 2vw;
  border: 4px solid;
  border-radius: 20px;
  box-shadow: 0px 0px 5px 2px ${(props) => colors[props.category] || "#6BD1FF"};

  @media (max-width: 1280px) {
    margin-top: 2vh;
    width: 100%;
  }
`;

const CardImageLink = styled.a`
  display: block;
  width: 100%;
  height: 40vh;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 40vh;
  border-radius: 15px;
`;

const Banner = () => {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await api.get("/videos");
        const videos = response.data;
        if (Array.isArray(videos) && videos.length > 0) {
          const firstVideo = videos[0];
          setVideo(firstVideo);
        } else {
          console.error("No videos found in the response");
        }
      } catch (error) {
        console.error("Error fetching the video data:", error);
      }
    };

    fetchVideo();
  }, []);

  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <BannerStyled>
      <Card>
        <CardContentLeft>
          <TitleContainer category={video.category}>
            {video.category}
          </TitleContainer>
          <div className="cardText">
            {" "}
            {/* Aquí puedes aplicar estilos adicionales si es necesario */}
            <H2Challenge>Challenge React</H2Challenge>
            <p>
              Este challenge es una forma de aprendizaje. Es un mecanismo donde
              podrás comprometerte en la resolución de un problema para poder
              aplicar todos los conocimientos adquiridos en la formación React.
            </p>
          </div>
        </CardContentLeft>
        <CardContentRight category={video.category}>
          <CardImageLink
            href={video.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardImage src={video.photo} alt={video.title} />
          </CardImageLink>
        </CardContentRight>
      </Card>
    </BannerStyled>
  );
};

export default Banner;
