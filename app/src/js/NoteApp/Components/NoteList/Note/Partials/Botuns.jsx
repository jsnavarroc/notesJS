import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/action/delete';

const style = {
    marginRight: 20,
  };
const Butuns = () => (
        <div>
            <FloatingActionButton mini={true} style={style} backgroundColor = "#2ECC71">
                <ContentAdd />
            </FloatingActionButton>
        </div>

    );

export default Butuns;
