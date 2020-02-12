import React, { Component } from 'react';


export default class Game extends Component {


    handleEdit(){
      //  console.log(this.props.game);
        this.props.onEdit(this.props.game);
    }
    render() {
        let game = this.props.game;
        return (

            <tr>
                <td>
                    {game.id}
                </td>
                <td>
                    {game.name}
                </td>
                <td>
                    {game.type}
                </td>

                <td>
                    {game.price}
                </td>
                <td>
                <button type="button" class="btn btn-primary space" onClick={this.handleEdit.bind(this)}>Editar</button>
                
                <button type="button" class="btn btn-danger space">Eliminar</button>
                </td>

            </tr>
        );
    }
}