import { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const url = "http://127.0.0.1:8000/api/product";

export const EditProduct = () => {

  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${url}/${id}`, {
      description,
      price,
      stock
    });
    navigate("/");
  }

  useEffect(() => {
    const getProductsById = async () => {
      const response = await axios.get(`${url}/${id}`);
      setDescription(response.data.description)
      setPrice(response.data.price)
      setStock(response.data.stock)
    }
    getProductsById();
  }, []);

  return (
    <div>
      <h3>Edit Product</h3>
      <form onSubmit={ update }>
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
        <button type="submit" className='btn btn-success'>Update</button>
      </form>
    </div>
  )
}
