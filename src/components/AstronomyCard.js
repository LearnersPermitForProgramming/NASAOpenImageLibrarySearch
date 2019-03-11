import React from 'react';

const AstronomyCard = (props) => {

	const { title,
	 url,
	 hdurl,
	 explanation,
	 date,
	 copyright,
     media_type,
     photos,
     img_src,
     i,
     item,
     href,
     date_created
	} = props.data;

	function renderContent() {
        
		switch(media_type) {

			case('video'):
				return (
					<iframe
						allowFullScreen
	    			frameBorder="0"
	    			height="520"
	    			width="720"
	    			src={url}>
    			</iframe>
				)

				case('image'):
					return (
					//	<a href={hdurl} className="astronomy-image-wrapper">
					//			<img src={url} alt={title} />
                    //	</a> 
                    <a href={href} className="astronomy-image-wrapper">
                        <img src={href} alt={title} />
                    </a>
                    )

                default:
                return(<a href={href} className="astronomy-image-wrapper">
                <img src={href} alt={title} />
            </a>)
		}
    }   

	return (
		<div className="astronomy-card">

			<h6 className="astronomy-title">{title}</h6>

			{renderContent()}

			<p>{explanation}</p>

			<span>{date_created}, {copyright}</span>

		</div>
	)
}

export default AstronomyCard;