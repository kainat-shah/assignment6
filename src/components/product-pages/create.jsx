import { addDoc, collection, getDoc, doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase/config";


const CreateProduct = () => {
  const [FormData, setFormData] = useState({
    Name: "",
    Description: "",
    Price: "",
  });

  const [Msg, setMsg] = useState(" ");
  const Navigate = useNavigate();
  const params = useParams();

  const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData({
      ...FormData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent from default behavior
    if (
      FormData.Name !== " " &&
      FormData.Description !== " " &&
      FormData.Price !== " "
    ) {
      if (params.id) {
        //Edit
        try {
          await updateDoc(doc(db, "Product", params.id), FormData);
          setFormData({
            Name: "",
            Description: "",
            Price: null,
          });
        
          setTimeout(function () {
            Navigate("/products");
          }, 1000);
        } catch (error) {
          console.log(error);
        }
      } else {
        //create
        const res = await addDoc(collection(db, "Product"), FormData);
        console.log(res, "res");

        setFormData({
          Name: "",
          Description: "",
          Price: null,
        });
   
        setTimeout(function () {
          Navigate("/products");
        }, 1000);
      }
    } else {
      setMsg("error!!");
    }
  };

  const getDataById = async (id) => {
    try {
      const res = await getDoc(doc(db, "Product", id));
      console.log("document data", res.data());

      const Product = {
        ...res.data(),
      };
      setFormData({
        Name: Product.Name ?? "",
        Description: Product.Description ?? "",
        Price: Product.Price ?? "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (params.id) {
      getDataById(params.id);
    }
  }, [params.id]);

  return (
    <>
      <h2>{params.id ? "Edit Product" : "Create Product"}</h2>
      <form onSubmit={handleSubmit}>
        {Msg && <h3 style={{ textAlign: "center" }}>{Msg}</h3>}
        <div>
          <label>Product Name</label>
          <input
            type="text"
            name="Name"
            onChange={handleInputChange}
            value={FormData.Name}
             placeholder="Product name"
          />{" "}
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            name="Description"
            onChange={handleInputChange}
            value={FormData.Description}
            placeholder="Description"
          />{" "}
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            name="Price"
            onChange={handleInputChange}
            value={FormData.Price}
            placeholder="Price"
          />{" "}
        </div>
      

        <div>
          <input
            className="submit_btn"
            value={params.id ? "Edit" : "Submit"}
            type="submit"
          />
        </div>
      </form>
   
    </>
  );
};
export default CreateProduct;
