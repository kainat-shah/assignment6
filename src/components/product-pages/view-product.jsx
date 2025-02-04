import { Link } from "react-router-dom";
import {db} from "../firebase/config";
import { useEffect, useState } from "react";
import { getDocs ,collection, deleteDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";

const Products =()=>{

    const [products,setProducts] = useState();
    
   const getProductData = async (e) =>{
        try {
            const res = await getDocs(collection(db,'Product'))
            console.log(res.docs, "products");
            const products = res.docs.map((doc)=>{
                return ({
                    id: doc.id,
                    ...doc.data()
                })

            })
            setProducts(products);
            
        } catch (error) {
            console.log(error);
            
        }
    }
    
        
        useEffect(()=>{        
            getProductData();
        },[])

        const handleDelete = async (id) => {
            try {
                await deleteDoc(doc(db,"Product",id));
                getProductData();
            } catch (error) {
                console.log(error);
                
            }
            
        }
    return(
        <>
              <h2>Products</h2>
            <Link className="add_btn" to="/create">Add Product</Link>
         <table border={1}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Product Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.Name}</td>
                                <td>{item.Description}</td>
                                <td>{item.Price}</td>
                                <td>
                                    <Link className="action_btn" to={`/create/${item.id}`}>Edit</Link>
                                    <button
                                        className="action_btn" onClick={()=>{
                                            handleDelete(item.id)
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </>
    )
}
export default Products;