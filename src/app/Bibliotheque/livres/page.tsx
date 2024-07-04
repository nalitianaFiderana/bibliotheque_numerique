import img from '../../favicon.ico';
import "./livres.css";
import ListCard from '../cards';

export default function Page(){
	return(
		<div className="container">
			<div className="left">
				<h3>Vos livres</h3>
				<div className="list">
					<ListCard image={img} titre="La belle au bois dormant et ses nains de 2018 a 2019  des annees 70 sans comptee sa vie" auteur="Augustin leroy"/>
					<ListCard image={img} titre="La belle au bois dormant et ses nains de 2018 a 2019  des annees 70 sans comptee sa vie" auteur="Augustin leroy"/>
					<ListCard image={img} titre="La belle au bois dormant et ses nains de 2018 a 2019  des annees 70 sans comptee sa vie" auteur="Augustin leroy"/>
					<ListCard image={img} titre="La belle au bois dormant et ses nains de 2018 a 2019  des annees 70 sans comptee sa vie" auteur="Augustin leroy"/>
					<ListCard image={img} titre="La belle au bois dormant et ses nains de 2018 a 2019  des annees 70 sans comptee sa vie" auteur="Augustin leroy"/>
					<ListCard image={img} titre="La belle au bois dormant et ses nains de 2018 a 2019  des annees 70 sans comptee sa vie" auteur="Augustin leroy"/>
				</div>
			</div>
			<div className="right">
			</div>
		</div>
	);
}