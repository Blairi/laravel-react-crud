import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const url = "http://127.0.0.1:8000/api/product";

export const CreateProduct = () => {

  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(url, {description, price, stock})
    navigate("/");
  }

  return (
    <div>
      <h3>Create Product</h3>
      <form onSubmit={ store }>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input 
            type="text"
            value={ description }
            onChange={ (e)=>setDescription(e.target.value) }
            className="form-control"
            id='description'
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input 
            type="number"
            value={ price }
            onChange={ (e)=>setPrice(e.target.value) }
            className="form-control"
            id='price'
          />
        </div>
        <div className="mb-3">
          <label htmlFor="stock" className="form-label">Stock</label>
          <input 
            type="text"
            value={ stock }
            onChange={ (e)=>setStock(e.target.value) }
            className="form-control"
            id='stock'
          />
        </div>
        <button type="submit" className='btn btn-success'>Store</button>
      </form>
    </div>
  )
}
