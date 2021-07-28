import React from 'react'
import "./Widgets.css"
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets(){
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
                <div className="widgets__articleRight">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
           
        </div>
    );
    return (
        <div className="widgets">
             <div className="widgets__header">
                 <h2>LinkedIn News</h2>
                 <InfoIcon />
             </div>

             {newsArticle("React new version is back", "Top news - 1,00,000 readers")}
             {newsArticle("Coronavirus: India updates", "Top news - 2,00,000 readers")}
             {newsArticle("Tesla hits new highs", "Car & auto - 5,00,000 readers")}
             {newsArticle("Is Redux too good?", "Code - 10,000 readers")}
             {newsArticle("Bitcoin Breaks", "Crypto - 2000 readers")}
             {newsArticle("Microsoft looking for software Developers", "Employment - 10,000 readers")}   
        </div>
    )
    }

export default Widgets

