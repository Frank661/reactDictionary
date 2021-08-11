import React from 'react'
import './definitions.css'


const Definitions = ({meaning, word, category}) => {
    return (
        <div className="meanings" >
            {word ==="" ? (
                <span className="subTitle"> Start by typing a word in search </span>
            ) : (
                meaning.map((data) => (
                    data.meanings.map((item)=>(
                        item.definitions.map((def) => (
                            <div className="singleMean" style={{backgroundColor:"white", color: "black"}}> 

                                <b>{def.definition}</b>
                                <hr style={{ backgroundColor:"black", width:"100%"}}/>
                                {
                                    def.example && (
                                        <span>
                                            <b>Example: </b>
                                            {def.example}
                                        </span>
                                    )}
                                    {def.synonyms && (
                                        <span>
                                            <b>Synonyms: </b>
                                            {def.synonyms.map((s) => `${s}, `)}
                                        </span>
                                    )}

                            </div>
                        ))
                    ))
                ))
            )
            }
        </div>
    )
}

export default Definitions
