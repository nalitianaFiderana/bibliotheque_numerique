export default function GridCard({image, titre, auteur, nbConsult} :{
	image: any; titre : string;auteur : string; nbConsult?: number; 
}
){
	return nbConsult ?
		<div className="GridCard">
			<img src={image} alt={titre}/>
			<h3>{titre}</h3>{/*La belle au bois dormant*/}
			<p>{auteur} -- <i>{nbConsult} consultation</i></p>{/*Augustin Leroy -- <i>300 consultation</i>*/}
			<span></span>
		</div>
	 : 	<div className="card">
			<img src={image} alt={titre}/>
			<div className="minInfo">
				<h3>{titre}</h3>{/*La belle au bois dormant*/}
				<p>{auteur}</p>{/*Augustin Leroy*/}
			</div>
		</div>;
}