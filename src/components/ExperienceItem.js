import React from "react";

class ExperienceItem extends React.Component {
    render() {
    return(
        <div className='ExperienceItem'>
            <div>
                <h3>{this.props.name}</h3>
                <p className='ExperienceBody'>{this.props.description}</p>
            </div>
            <img className='logo' src={process.env.PUBLIC_URL + this.props.image} alt={this.props.image}></img>
        </div>
    );
    }

}

export default ExperienceItem;