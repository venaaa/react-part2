import React from 'react';
import Button from 'react-bootstrap/Button';
import './post-status-filter.css';

const PostStatusFilter = () => {
	return (
		<div className="btn-group">
			<Button variant="outline-info">Все</Button>
			<button type="button" className='btn btn-info'>Все</button>
			<button type="button" className='btn btn-outline-secondary'>Понравилось</button>
		</div>
	);
};

export default PostStatusFilter;