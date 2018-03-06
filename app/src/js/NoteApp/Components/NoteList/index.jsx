/* Dependencies */
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

//Components Partials
import Note from './Note';

class NoteList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes:[
				{ idNote:'n1', noteTitle: 'Nota 1', noteText: 'Texto' },
				{ idNote:'n2', noteTitle: 'Nota 2', noteText: 'Texto' },
				{ idNote:'n3', noteTitle: 'Nota 3', noteText: 'Texto' },
				{ idNote:'n4', noteTitle: 'Nota 4', noteText: 'Texto' },
				{ idNote:'n5', noteTitle: 'Nota 5', noteText: 'Texto' },
				{ idNote:'n6', noteTitle: 'Nota 6', noteText: 'Texto' },
				{ idNote:'n7', noteTitle: 'Nota 7', noteText: 'Texto' },
				{ idNote:'n8', noteTitle: 'Nota 8', noteText: 'Texto' },
				{ idNote:'n9', noteTitle: 'Nota 9', noteText: 'Texto' },
				{ idNote:'n10', noteTitle: 'Nota 10', noteText: 'Texto' },
				{ idNote:'n11', noteTitle: 'Nota 11', noteText: 'Texto' },
				{ idNote:'n12', noteTitle: 'Nota 12', noteText: 'Texto' },
			],
		};
	}

	contentNotesList() {
		const { notes } = this.state;
		const index =  notes.length;
		const colNote1 = notes.splice(0,  index/2);
		const colNote2 = notes.splice( 0,  index);

		return (
			<Row around="lg">
				<Col lg={5}>
					{
						colNote1.map( note => (
							<Note key={note.idNote} idNote={note.idNote} noteTitle= {note.noteTitle} noteText = {note.noteText}/>
						))
					}
				</Col>
				<Col lg={5}>
					{
						colNote2.map( note => (
							<Note key={note.idNote} idNote={note.idNote} noteTitle= {note.noteTitle} noteText = {note.noteText}/>
						))
					}
				</Col>
			</Row>
		);
	}

	render() {

		return (
			<Grid>
				<Row>
					<Col xs={12} className = "scssWhite">
						<div className="boxListNote">
							{this.contentNotesList()}
						</div>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default NoteList;
