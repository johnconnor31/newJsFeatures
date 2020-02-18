import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop, DragPreviewImage } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

export default function ReactDrag(props) {
    
    return(
        <DndProvider backend={Backend}>
            <ChessBoard />
        </DndProvider>
    );
}
function ChessBoard() {
    const [knightPos, setKnightPos] = useState([1,7]);
    return(
        <div style={{width: '1000px','height': '1000px', border: '1px solid grey'}}>
            <BoardSquares knightPos={knightPos} setKnightPos={setKnightPos} />
        </div>
    );
}

function BoardSquares({knightPos, setKnightPos}) {
    const squares = [];
    for(let i=0;i<64;i++) {
        squares.push(<BoardSquare index={i} knightPos={knightPos} setKnightPos={setKnightPos} />);
    }
    
    return (<div style={{display: 'flex', flexWrap: 'wrap'}}>{squares}</div>);
}

function BoardSquare({index, knightPos, setKnightPos}) {
    const x = index%8;
    const y = Math.floor(index/8);
    const [{isOver, canDrop}, drop] = useDrop({
        accept: 'div',
        drop: () =>setKnightPos([x,y]),
        collect: monitor => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    });
    
    console.log('black is', (x+y)%2);
    return (
        <div ref={drop} style={{position: 'relative', width: '12.5%', height: '125px'}}>
        <Square black={(x+y)%2===1}>
            {knightPos[0]===x && knightPos[1]===y ? <Knight /> : ''}
            <div style={{backgroundColor: isOver ? 'green': (canDrop ? 'yellow': '' ), width: '100%', height: '100%'}}>
            </div>
        </Square>
        </div>
    )


}

function Square({black, children}) {
    console.log('black1 is', black);
    const backgroundColor = black ? 'black': 'white';
    const color = black ? 'white' : 'black';
    return (
        <div style={{backgroundColor, color, position: 'relative', width:'100%', height: '100%'}}>
            {children}
        </div>
    );
}




function Knight() {
    const [{isDragging}, drag] = useDrag({
        item: {
            type: 'div'
        },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });

    return (
        <div ref={drag}
        style={{
            opacity: 1,
            fontSize: 25,
            fontWeight: 'bold',
            cursor: 'move',
          }}>
                Hello
        </div>
    );

}