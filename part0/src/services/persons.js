import axios from 'axios'
const baseUrl = 'http://localhost:8000/persons/'

const getAll = () => {
    const req = axios.get(baseUrl)
    return req.then(res => res.data)
}

const create = newPerson => {
    const req = axios.post(baseUrl, newPerson)
    return req.then(res => res.data)
}

const eliminate = (id) => {
    const req = axios.delete(`${baseUrl}/${id}`)
    return req.then(res => res.data)
}


export default  {
    getAll: getAll,
    create: create,
    eliminate: eliminate,
}
