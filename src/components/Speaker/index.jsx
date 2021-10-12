import {
  SpeakerWrapper,
  SpeakerImage,
  SpeakerName,
  SpeakerExps,
  ExpItems,
} from './style';

const Speaker = ({ name, exps, img }) => (
  <SpeakerWrapper>
    <SpeakerImage src={img} alt='' />
    <SpeakerName>{name}</SpeakerName>
    <SpeakerExps>
      {exps.map((exp) => (
        <ExpItems key={exp}>{exp}</ExpItems>
      ))}
    </SpeakerExps>
  </SpeakerWrapper>
);

export default Speaker;
