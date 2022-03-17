import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const Planet = () => {
    const {id} = useParams()
    const [planet, setPlanet ] = useState()

    useEffect(() =>{
        axios.get(`https://swapi.dev/api/planets/${id}/`)
        .then(res =>{
            console.log(res.data)
            setPlanet(res.data)
        })
        .catch(err => console.log(err))
    }, [id])
    

  return (
    <fieldset>
        <legend> Planet.jsx</legend>
        {planet &&
            <div>
                <h1> {planet.name}</h1>
                <h4> {planet.climate}</h4>
                <h4> {planet.terrain}</h4>
                <h4> {planet.surface_water}</h4>
                <h4> {planet.population}</h4>
            </div>
        }
    </fieldset>
  )
}

export default Planet