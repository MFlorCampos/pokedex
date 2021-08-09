import React from 'react'

function Search(props) {
    const {text, onSubmit, onChange} = props;

    return (
        <form 
            onSubmit= {onSubmit}
            className="buscador"
        >
            <input 
                className="form-control mr-sm-2" 
                type="text" 
                placeholder="Buscar" 
                aria-label="Buscar" 
                value={text}
                onChange={onChange}
            />
            <button 
                type="submit" 
                className="button button-search" 
                id="boton">
            </button>
        </form>  
    )
}

export default Search