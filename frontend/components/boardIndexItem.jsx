import React from 'react';

export const BoardIndexItem = (props) => {

    return(
        <div className="board-item-div" >
            <p>{props.board.name}</p>
            <p>{props.board.year}</p>
            <p>{props.maker.name}</p>
        </div>
    )
}

export default BoardIndexItem;