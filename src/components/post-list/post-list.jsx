/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import PostListItem from '../post-list-item';
import ListGroup from 'react-bootstrap/ListGroup';
import './post-list.css';

const PostList = ({posts}) => {

	const elements = posts.map((item) => {
		const {id, ...itemProps} = item;
		return (
			<li key={id} className='list-group-item'>
				<PostListItem
					label={itemProps.label}
					important={itemProps.important}
				/>
			</li>
		);
	});

	return (
		<ListGroup className="app-list">
			{elements}
		</ListGroup>
	);
};

export default PostList;