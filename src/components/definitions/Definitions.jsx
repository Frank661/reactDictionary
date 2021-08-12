import React from 'react'
import './definitions.css'


const Definitions = ({meaning, word, category, LightMode}) => {
    return (


        <div className="meanings" >

            {
                 meaning[0] && word && category === 'en' && (
                    <audio
                    style={{ backgroundColor: '#fff', borderRadius: 10 }} 
                    src={meaning[0].phonetics[0] && meaning[0].phonetics[0].audio} 
                    controls
                    >
                        Your Browser does not support auido element.
                    </audio>
                )
            }

            {word ==="" ? (
                <span className="subTitle"> Start by typing a word in search </span>
            ) : (
                meaning.map((data) => (
                    data.meanings.map((item)=>(
                        item.definitions.map((def) => (
                            <div className="singleMean" style={{backgroundColor:LightMode?"#282c34":"white", color:LightMode? "white" : "black"}}> 

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
