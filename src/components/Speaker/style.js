import styled from 'styled-components';

const SpeakerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-right: 24px;
`;

const SpeakerImage = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center center;
  margin: 0 auto;
  display: inline-block;
`;



const SpeakerName = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  margin: 15px 0;
`;

const SpeakerExps = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const ExpItems = styled.div`
  font-size: 14px;
  text-align: center;
  margin-bottom: 5px;
`;

export { SpeakerWrapper, SpeakerImage, SpeakerName, SpeakerExps, ExpItems };
