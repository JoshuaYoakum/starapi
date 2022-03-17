import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const People = () => {
    const {id} = useParams()
    const [people, setPeople] = useState()

    useEffect(() =>{
        axios.get(`https://swapi.dev/api/people/${id}/`)
        .then(res =>{
            console.log(res.data)
            setPeople(res.data)
        })
        .catch(err => console.log(err))
    }, [id])
  return (
    <fieldset>
        <legend> People.jsx</legend>
        {people && 
        <div>
            <h1> {people.name}</h1>
            <h4> {people.mass}kg</h4>
            <h4> {people.hair_color}</h4>
            <h4> {people.skin_color}</h4>
        </div>
        }
    </fieldset>
  )
}

export default People