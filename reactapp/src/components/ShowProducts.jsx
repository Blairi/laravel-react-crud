import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'

const url = "http://127.0.0.1:8000/api";

export const ShowProducts = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const response = await axios.get(`${url}/products`);
    setProducts(response.data);
  }

  const deleteProduct = async (id) => {
    await axios.delete(`${url}/product/${id}`);
    getAllProducts();
  }

  return (
    <div>
      <div className="pt-1 pb-1">
        <Link 
          to="/create"
          className="btn btn-success"
        >Create</Link>
      </div>
      <table className="table table-striped">
        <thead className="bg-primary text-white">
          <tr>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map( product => (
              <tr key={product.id}>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <Link to={`/edit/${product.id}`} className="btn btn-warning">Edit</Link>
                  <button 
                    onClick={ () => deleteProduct(product.id) }
                    className="btn btn-danger"
                  >Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
