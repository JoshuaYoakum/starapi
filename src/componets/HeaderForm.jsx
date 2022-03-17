import React, {useState} from 'react'
import{useHistory} from "react-router-dom"

const HeaderForm = () => {
    const [search, setSearch] = useState("")
    const [id, setId] = useState("")
    const history = useHistory()

    const handleSubmit =(e) =>{
        e.preventDefault()
        history.push(`${search}/${id}`)
    }
  return (
    <fieldset>
    <legend> HeaderForm.jsx</legend>
    <form onSubmit={handleSubmit}>
        <p>
            Search: 
            <select name="search" value={search} onChange={e=>setSearch(e.target.value)}>
                <option hidden> Choose a category</option>
                <option value="people"> People </option>
                <option hidden> Choose a category</option>
                <option value="planet"> Planet </option>
            </select>
            ID:
            <input type="text" name="id" value={id} onChange={e=>setId(e.target.value)} />
            <button> Search </button>
        </p>
    </form>
</fieldset>
)
}

export default HeaderForm