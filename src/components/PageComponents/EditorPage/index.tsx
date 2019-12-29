import * as React from 'react';
import AboutCard from 'components/UIComponents/CommonComponents/AboutCard';

interface Props {}

const EditorPage: React.SFC<Props> = props => {
  return (
    <>
      <AboutCard />
    </>
  );
};

EditorPage.defaultProps = {};

export default EditorPage;
