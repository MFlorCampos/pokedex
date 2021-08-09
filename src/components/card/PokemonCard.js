import React from 'react'

const namespace = "ui-pokemon-list";

const PokemonCard = ({name, id, url, image, types}) => {
  
    return (
        <div className={`${namespace}__pokemon col-sm-12 col-lg-3`} id="resultado">
            <div className={`${namespace}__pokemon-img`}>
                <img src={image} alt="" />
            </div>
            <div className={`${namespace}__pokemon-id`}>N° {id}</div>
            <h4 className={`${namespace}__pokemon-title`}>{name} </h4>
            <span className={`${namespace}__pokemon-type`}>
            {types && types.map((type,i) => {
                return <span className={`${namespace}__pokemon-type-${type.type.name}`}  key={name+id+type.type.name}>{type.type.name} </span>
            })}
            </span>
        </div>   
    )
}

export default PokemonCard;