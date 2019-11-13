import React from 'react'

const Oppmuntring = (props) => {
    return (
        <div class="oppmuntring">
            <h1>Kom igjen {props.navn}</h1>
            <p>{props.emne} er ikke så vanskelig som du tror.</p>
            <p>Du må bare øve</p>
        </div>
    )
}

export default Oppmuntring