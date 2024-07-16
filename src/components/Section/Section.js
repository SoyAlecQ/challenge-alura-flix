import styled from 'styled-components';
import Card from './Card/Card';
import Title from './Title/Title';

const colors = {
  'FRONT END': '#6BD1FF',
  'BACK END': '#00C86F',
  'INNOVACIÓN Y GESTIÓN': '#FFBA05',
};

const SectionStyled = styled.div`
  margin-bottom: 5vh;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 430px) {
    align-items: start;
    margin: 0 4.5vw;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  overflow-y: auto;
  gap: 4vw;
  margin-left: 2vw;

  & > * {
    flex: 0 0 calc(33vw - 4vw);
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #0056b3;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #2271d12b;
  }

  @media (max-width: 1024px) {
    box-sizing: border-box;
    margin-left: 1vw;

    & > * {
      flex: 0 0 calc(50vw - 4vw);
    }

    &::-webkit-scrollbar {
      background-color: black;
    }
  }

  @media (max-width: 430px) {
    width: 100%;

    & > * {
      flex: 0 0 calc(100vw - 9.5vw);
    }
  }
`;

const Section = ({ title, videos, onDelete, onSave }) => {
  const backgroundColor = colors[title];
  const borderColor = colors[title];

  return (
    <SectionStyled>
      <Title $backgroundColor={backgroundColor}>{title}</Title>
      <CardsContainer>
        {videos.map((video) => (
          <Card key={video.link} video={video} onDelete={onDelete} onSave={onSave} $borderColor={borderColor} />
        ))}
      </CardsContainer>
    </SectionStyled>
  );
};

export default Section;
