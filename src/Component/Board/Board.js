import React, { Component, useState } from "react";
import {MoreHorizontal} from "react-feather";
import Dropdown from "../Dropdown/Dropdown";

import Editable from "../Editable/Editable";


import './Board.css';
import Card from "../Card/card";


function Board(props){
    const [showDropdown,setshowDropdown] = useState(false);
    const handleMoreClick = (event) => {
        event.stopPropagation();
        setshowDropdown(true);
      };
    return(
        <div className="board">
            <div className="board-top">
                <p className="board-top-title">
                    {props.board?.title} <span>{`${props.board?.cards?.length}`}</span>
                </p>
                <div className="board_top_more" onClick={handleMoreClick}>
                <MoreHorizontal style={{color:"white"}}/>
                {
                    showDropdown && (
                    <Dropdown
                    onClose = {()=>setshowDropdown(false)}
                    >
                    <div className="board_dropdown">
                        <p onClick={()=>props.removeBoard(props.board?.id)}>Delete Board</p>
                    </div>
                    </Dropdown>
                )}
                
                
                </div>
                
            </div>
            <div className="board_cards custom-scroll">
                {
                    props.board?.cards?.map(item=>(
                        <Card key={item.id} card={item}
                        removeCard={props.removeCard}
                        boardId ={props.board?.id}
                        handleDragEnd = {props.handleDragEnd}
                        handleDragEnter = {props.handleDragEnter}
                        updateCard={props.updateCard}
                        
                        
                         />
                        
                    ))
                }
                <Editable 
                displayClass="board_cards_add"
                text="Add Cards"
                placeholder="Enter item"
                onSubmit={(value)=>props.addCard(value,props.board?.id)}
                />

               

            </div>
        </div>
    )
}

export default Board;
