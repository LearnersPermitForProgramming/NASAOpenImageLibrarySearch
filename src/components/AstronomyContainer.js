import React, { Component } from 'react';
import AstronomyCard from './AstronomyCard';
import axios from 'axios';

class AstronomyContainer extends Component {

	constructor() {
		super();

		this.state = {
            astronomy: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    
    handleSubmit(event){
        console.log("The value is: " + this.input.value)
        const API_KEY = 'Ua3sVBbtIsiLyrOmiZpBygV2OvJ7cwR28inoFHHT';
		const LINK = 'https://images-api.nasa.gov/search?q='
        
            
            axios.get(LINK + this.input.value)
	     	.then(response => {
                console.log("hi")
                console.log(this.state.title)
                 const results = response.data.collection.items;
		 		   this.setState({
                    //  astronomy: results[0].data[0]
                    astronomy : results
                
               })
                
                console.log(results);

         	})
        

			.catch(error => {
				console.log(error, 'failed to fetch data')
			});

        
        event.preventDefault()
    }


	componentDidMount() {
		const API_KEY = 'Ua3sVBbtIsiLyrOmiZpBygV2OvJ7cwR28inoFHHT';
		const LINK = 'https://images-api.nasa.gov/search?q='
        
            
            axios.get(LINK + this.input.value)
	     	.then(response => {
                console.log("hi")
                console.log(this.state.title)
                 const results = response.data.collection.items;
		 		   this.setState({
                    //  astronomy: results[0].data[0]
                    astronomy : results
                
               })
                
                console.log(results);

         	})
        

			.catch(error => {
				console.log(error, 'failed to fetch data')
			});

        
}
// stuff=item.links[0]

imageRenderer(stuff, stuff1) {
    switch(stuff.render) {

       case('video'):
           return (
               <iframe
                   allowFullScreen
               frameBorder="0"
               height="520"
               width="720"
               src={stuff1.href}>
           </iframe>
           )

           case('image'):
               return (
               //	<a href={hdurl} className="astronomy-image-wrapper">
               //			<img src={url} alt={title} />
               //	</a> 
               <a className="astronomy-image-wrapper">
                   <img src={stuff.href}/>
               </a>
               )

           default:
           return(<a className="astronomy-image-wrapper">
           <img src={stuff.href} />
       </a>)
   }
}

	render() {
        

        if(this.state.astronomy!=null){
            return (
            
                <div className="cool">
                <center><form id="inp" onSubmit={this.handleSubmit}>
                <input type="text"  name="title" ref={(input) => this.input = input}/>
                </form></center>
                
     {this.state.astronomy.map(item =>
                   
                         <div className="astronomy-card">
                         <div className="astronomy-title">
                         <li key={item}>{item.data[0].title}</li>
                         </div>
                         <a className="astronomy-image-wrapper">
                         {/* <img src={item.links[0].href}/> */}
                         {this.imageRenderer(item.links[0], item.links[1])}
                         
                         </a>
                         <p>{item.data[0].description}</p>
                         <span>{item.data[0].date_created}</span>
                         </div>
                         /* <p key={item}>{astronomy.data[0].title}</p>
                        <img src={astronomy.links[0].href}/>  */
                    
                    
                 )}
         </div>
            )
        }
		
/* <ul>
 {this.state.test.map(episode =>
 <li key={episode.id}>{episode.data[0].title}</li>
 )}
</ul> */
            // <AstronomyCard data={astronomy}>
            
            
            //  </AstronomyCard>


  
            
		
	}
}

export default AstronomyContainer;