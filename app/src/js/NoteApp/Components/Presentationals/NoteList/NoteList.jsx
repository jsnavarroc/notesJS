/* Dependencies */
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//Components Partials
import Note from './Note';

const NoteList = ({ notes, onSelectionNote }) => {
	return (
		<Grid className = "scssWhite">
			<div className="boxListNote">
				<Row around="lg">
				{
					notes.map((colNote, id) => (
						<Col lg={5} key = {id}>
						{
							colNote.map( note => (
								<Note handleSelector={onSelectionNote}
										key={note.idNote}
										idNote={note.idNote}
										noteTitle= {note.noteTitle}
										noteText = {note.noteText}
								/>
							))
						}
						</Col>
					))
				}
				</Row>
			</div>
		</Grid>
	);
};

NoteList.propTypes = {
    notes:PropTypes.array.isRequired,
	onSelectionNote: PropTypes.func.isRequired,
};

export default NoteList;
