import React,{Component } from 'react';
import {intern} from '../shared/source';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../slider-animations.css';
import './styles.css';
import Gallery from './CardComponent';
import Featured from './FeaturedComponent';


class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            exprience:intern
        }
    }
    render(){
		const content=this.state.exprience.filter(item=>item.slider);
		const carddata=this.state.exprience.filter(item=>item.card);
		const featured=this.state.exprience.filter(item=>item.featured);
        console.log(content);
        return(
			<div>
            <div className="container">
                <div className="row justify-content-center" style={{margin:10}}>
                    <div className="col-12 col-md-10 ">
                    <Slider className="slider-wrapper" autoplay={3000}>
			            {content.map((item, index) => (
			        	<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
			    	>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<button>{item.button}</button>
					</div>
					<section>
						<img src={item.userProfile} alt={item.user} />
						<span>
							Posted by <strong>{item.user}</strong>
						</span>
					</section>
				</div>
			))}
			</Slider>
                    </div>
                </div>

            </div>
			<Gallery key={carddata.id} data={carddata}/>
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-9 mt-5 mb-5">
						<Featured featured={featured}/>
					</div>
				</div>
			</div>
		</div>
        );
    }
}
export default Home;