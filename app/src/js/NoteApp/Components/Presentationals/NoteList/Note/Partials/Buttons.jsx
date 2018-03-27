import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/action/delete';
import ContentUpdate from 'material-ui/svg-icons/action/update';
import { withRouter } from 'react-router-dom';
const style = {
    marginRight: 20,
  };
const  handleOnClickAdd = (idNote, history) => {
    history.push(`/note/edit/${idNote}`);
};
const  handleOnClickDelet = (idNote, history) => {
    history.push(`/note/delete/${idNote}`);
};
const Buttons = ({ idNote, history }) => {
    return(
        <div>
            <FloatingActionButton mini={true} style={style} backgroundColor = "#34495E" onClick = {() => handleOnClickAdd(idNote, history)}>
                <ContentUpdate />
            </FloatingActionButton>
            <FloatingActionButton mini={true} style={style} backgroundColor = "#2ECC71"  onClick = {() => handleOnClickDelet(idNote, history)}>
                <ContentAdd />
            </FloatingActionButton>
        </div>

    );};

export default withRouter(Buttons);
