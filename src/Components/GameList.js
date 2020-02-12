import React, { Component } from 'react';

import Game from './Game'
export default class GameList extends Component {



    handleOnEdit(game){
       // console.log(game)

        this.props.onEdit(game)
    }

    render() {
        console.log(this.props.games);

        let gameList = this.props.games.map((item) => (<Game key={item.id} game={item} onEdit={this.handleOnEdit.bind(this)} />)

        )

        return (
            
            <div>
                <h1>{this.props.owner}'s store</h1>
           
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gameList}
                    </tbody>
                    </table>
                    </div>
                );
            }
}