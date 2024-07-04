import "./styleAc.css";
import GridCard from './cards';
import img from '../favicon.ico';

export default function Page(){
	return(
		<div className="container">
			{/*&#128269 search icon*/}
			<div className="AcContain">
				<div className="barSearch">
					<input className="search" type="text" placeholder="&#128269; Aaa"/><button>Rechercher</button><br/>
					<span>Trier par : </span>
					<select>
						<option value="type">type</option>
						<option value="auteur">auteur</option>
						<option value="recent">recent</option>
						<option value="ancien">ancien</option>
						<option value="titre">titre</option>
					</select>
				</div>
				<h5 className="type">Roman</h5>
				<div className="listGrid">
					<GridCard image={img} titre="le roi arthur" auteur="marc levy" nbConsult={10}/>
					<GridCard image={img} titre="le roi arthur" auteur="marc levy" nbConsult={10}/>
					<GridCard image={img} titre="le roi arthur" auteur="marc levy" nbConsult={10}/>
					<GridCard image={img} titre="le roi arthur" auteur="marc levy" nbConsult={10}/>
					<GridCard image={img} titre="le roi arthur" auteur="marc levy" nbConsult={10}/>
					<GridCard image={img} titre="le roi arthur" auteur="marc levy" nbConsult={10}/>
					<GridCard image={img} titre="le roi arthur" auteur="marc levy" nbConsult={10}/>
					<GridCard image={img} titre="le roi arthur" auteur="marc levy" nbConsult={10}/>
					<GridCard image={img} titre="le roi arthur" auteur="marc levy" nbConsult={10}/>
					<GridCard image={img} titre="le roi arthur" auteur="marc levy" nbConsult={10}/>
					<GridCard image={img} titre="le roi arthur" auteur="marc levy" nbConsult={10}/>
					<GridCard image={img} titre="le roi arthur" auteur="marc levy" nbConsult={10}/>
					<GridCard image={img} titre="le roi arthur" auteur="marc levy" nbConsult={10}/>
					<GridCard image={img} titre="le roi arthur" auteur="marc levy" nbConsult={10}/>
					<GridCard image={img} titre="le roi arthur" auteur="marc levy" nbConsult={10}/>
					<GridCard image={img} titre="le roi arthur" auteur="marc levy" nbConsult={10}/>
				</div>
			</div>
		</div>
	);
}