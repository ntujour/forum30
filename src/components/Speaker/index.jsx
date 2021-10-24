import React from 'react';

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
      {exps
        .filter((exp) => exp !== '')
        .map((exp) => (
          <React.Fragment key={exp}>
            <ExpItems>{exp}</ExpItems>
          </React.Fragment>
        ))}
    </SpeakerExps>
  </SpeakerWrapper>
);

export default Speaker;
