import { useState } from "react";
import styled from "styled-components";
import Modal from "../../Modal/Modal";

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40vh;
  margin: 20px 0 10px 0;
  border: 2px solid ${(props) => props.$borderColor};
  box-shadow: 0 0 4px 4px ${(props) => props.$borderColor};
  border-radius: 20px;
  box-sizing: border-box;
  margin-bottom: 10vh;
`;

const VideoLink = styled.a`
  width: 100%;
  height: 80%;
  display: block;
  border-radius: 15px 15px 0 0;
`;

const VideoImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px 15px 0 0;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 2vw;
  justify-content: center;
  background: #000000e5;
  width: 100%;
  height: 20%;
  border-radius: 0 0 15px 15px;
  border-top: 4px solid ${(props) => props.$borderColor};
  box-shadow: 0 -4px 4px -4px ${(props) => props.$borderColor}; 
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5vw;
  background: transparent;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #171616da;
  }
`;

const ImgButton = styled.img`
  height: 3vh;
  padding-right: 5px;
`;

const Card = ({ video, onDelete, onSave, $borderColor }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleDelete = () => {
    onDelete(video.id);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = (updatedVideo) => {
    onSave(updatedVideo);
    setIsModalOpen(false);
  };

  return (
    <>
      <CardStyled $borderColor={$borderColor}>
        <VideoLink href={video.link} target="_blank" rel="noopener noreferrer">
          <VideoImage src={video.photo} alt={video.title} />
        </VideoLink>
        <ButtonsContainer $borderColor={$borderColor}>
          <Button onClick={handleDelete}>
            <ImgButton src="/img/delete.png" alt="Borrar" />
            BORRAR
          </Button>
          <Button onClick={handleEdit}>
            <ImgButton src="/img/edit.png" alt="Editar" />
            EDITAR
          </Button>
        </ButtonsContainer>
      </CardStyled>
      {isModalOpen && (
        <Modal
          show={isModalOpen}
          onClose={handleCloseModal}
          onSave={handleSave}
          videoData={video}
        />
      )}
    </>
  );
};

export default Card;
