import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

class BotsPage extends React.Component {
  state = {
    bots: [],
    botsArmy: []
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then( bots => this.setState({
      bots: bots

    })
  )
  }



    onClickRemove = (bot) => {
      const newBotsArmy = this.state.botsArmy.filter(b => b.id !== bot.id)
      this.setState({
        botsArmy: newBotsArmy
      })
    }
    onClickAdd = (bot) => {
    const newBotsArmy =  [...this.state.botsArmy, bot]
    this.setState({
      botsArmy: newBotsArmy
    })
  }

  render() {
    return (
      <div>

        <BotCollection onClick={this.onClickAdd} bots={this.state.bots} />
        <YourBotArmy onClick={this.onClickRemove} bots={this.state.botsArmy}/>
        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
