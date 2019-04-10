import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {


  render(){
    const botArray = this.props.bots.map( bot => (<BotCard onClick={this.props.onClick} key={bot.id} bot={bot}/>))
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {botArray}

    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
