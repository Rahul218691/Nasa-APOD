import React,{useState,useEffect} from 'react';
import Navbar from './Navbar';

const NasaPhoto = () =>{
	const [photoData,setPhotoData] = useState(null);
	const [loading,setLoading] = useState(false);

	useEffect(()=>{
		fetchPhoto();
		async function fetchPhoto()	{
			setLoading(true)
			const res = await fetch(
				`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}`
				)
			const data = await res.json();
			setPhotoData(data);
			setLoading(false)
		}
	},[])

	if(!photoData) return <div />;

	return(
		<>
			{
				loading ? <div>
					<h1 style={{color:'white'}}>Loading...</h1>
				</div>:
				(
				<>
<Navbar />
			<div className="nasa-photo">
			{
				photoData.media_type === 'image' ? (
					<img src={photoData.url} alt={photoData.title} className="photo"/>
					):(
						<iframe 
						title="space-video"
						src={photoData.url}
						frameBorder='0'
						gesture='media'
						allow='encrypted-media'
						allowFullScreen
						className='photo'/>
					)
			}
				<div>
					<h1>{photoData.title}</h1>
					<p className="date">{photoData.date}</p>
					<p className="explanation">{photoData.explanation}</p>
				</div>
			</div>	
			</>
				)

			}
		</>
		)
}

export default NasaPhoto;