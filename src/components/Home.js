import React from 'react';
import {Link} from 'react-router-dom';

const Home = () =>{
	return(
			<div className="home">
			<Link className='home-link' to='/nasaphoto'>See into the starts!</Link>
			</div>
		)
}

export default Home;