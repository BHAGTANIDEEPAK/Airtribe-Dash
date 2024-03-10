import React, { Component, useState } from "react";
import './card.css';
import { CheckSquare, Clock, MoreHorizontal } from "react-feather";
import Chip from '../Chip/chip';
import Dropdown from "../Dropdown/Dropdown";
import CardInfo from "./CradInfo/CardInfo";

function Card(props){
    const [showDropdown,setshowDropdown] = useState(false);
    const [showModal,setShowModal] = useState(false);

    const handleMoreClick = (event) => {
        event.stopPropagation();
        setshowDropdown(true);
      };
        return(
            <>
            {
            showModal && (<CardInfo card={props.card} updateCard={props.updateCard} boardId={props.boardId} onClose={()=>setShowModal(false)}/>)
            }
            <div className="Card" draggable
            onDragEnd={()=>props.handleDragEnd(props.card?.id,props.boardId)}
            onDragEnter={()=>props.handleDragEnter(props.card?.id,props.boardId)}
            onClick={()=> setShowModal(true)}

            >
                
                
                <div className="card_top">
                    <div className="card_top_labels">
                        {
                            props.card?.labels?.map((item,index)=>(
                                <Chip 
                                key={index}
                                text = {item.text}
                                color = {item.color}

                                />
                            ))
                        }
                        
                        

                    </div>
                    <div className="card_top_more" onClick={handleMoreClick}>
                <MoreHorizontal/>
                {
                    showDropdown && (
                    <Dropdown
                    onClose = {()=>setshowDropdown(false)}
                    >
                    <div className="card_dropdown">
                        <p onClick={()=>props.removeCard(props.card?.id,props.boardId)}>Delete Card</p>
                    </div>
                    </Dropdown>
                )}
            
                
                </div>
                </div>

                <div className="card_title">
                   {props.card?.title}
                </div>
                <div className="card-footer">
                    {
                        props.card?.date && (
                            <p> <Clock/> {props.card?.date}  </p>
                        )
                    }
                    {
                        props.card?.tasks?.length>0 &&(
                        <p> <CheckSquare/> 
                        {props.card?.tasks?.filter(item=>item.completed).length}/{props.card?.tasks?.length}
                         </p>
                        )
                    }
                    
                </div>

            </div>
            </>
        )

}
export default Card;
