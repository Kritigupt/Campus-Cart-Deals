//multer is used for passing image related information
import { useEffect, useState } from "react";
//import Header from "./Header";
import axios from "axios";
import { useNavigate, } from "react-router-dom";
import categories from "./CategoriesList";
//import API_URL from "../constants";

function AddProduct() {

    //useState ke andar input field ki value dogey to vo automatically frontend me show hone lagengi
    const navigate = useNavigate();
    const [pname, setpname] = useState('');
    const [pdesc, setpdesc] = useState('');
    const [price, setprice] = useState('');
    const [category, setcategory] = useState('');
    const [pimage, setpimage] = useState('');
   // const [pimage2, setpimage2] = useState('');

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login')
        }
    }, [])

    const handleApi = () => {

        navigator.geolocation.getCurrentPosition((position) => {
            const formData = new FormData();
            formData.append('plat', position.coords.latitude)
            formData.append('plong', position.coords.longitude)
            formData.append('pname', pname)
            formData.append('pdesc', pdesc)
            formData.append('price', price)
            formData.append('category', category)
            formData.append('pimage', pimage)
            //formData.append('pimage2', pimage2)
            formData.append('userId', localStorage.getItem('userId'))

           // const url = 'http://localhost:4000/add-product' + '/add-product';
           const url = 'http://localhost:4000/add-product' ;

            axios.post(url, formData)
                .then((res) => {
                    console.log(res)
                    if (res.data.message) {
                        alert(res.data.message); 
                         navigate('/home')
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        })
        }
return (
    <div>
       {/* // <Header /> */}
        <div className="p-3">

            <h2> ADD PRODUCT HERE : </h2>
            <label> Product Name * </label>
            <input className="form-control" type="text" value={pname}
                onChange={(e) => { setpname(e.target.value) }} />
            <label> Product Description * </label>
            <input className="form-control" type="text" value={pdesc}
                onChange={(e) => { setpdesc(e.target.value) }} />
            <label> Product Price *</label>
            <input className="form-control" type="text" value={price}
                onChange={(e) => { setprice(e.target.value) }} />
            <label> Product Category *</label>
            <select className="form-control" value={category}
                onChange={(e) => { setcategory(e.target.value) }}>
                <option> Electronics </option>
                <option> Calculator </option>
                <option> Uniform </option>
                <option> Miscellaneous </option>
                {
                    categories && categories.length > 0 &&
                    categories.map((item, index) => {
                        return (
                            <option key={'option' + index}> {item} </option>
                        )
                    })
                }
            </select>
            <label> Product Image * </label>
            <input className="form-control" type="file"
                onChange={(e) => {
                   setpimage(e.target.files[0])
                  // console.log(e.target.files[0])
                }} />

         {/* <label> Product Second Image </label>
            <input className="form-control" type="file"
                onChange={(e) => {
                    setpimage2(e.target.files[0])
                }} /> */}
            <button onClick={handleApi} className="btn btn-primary mt-3"> SUBMIT </button>
        </div>

    </div>
)
}

export default AddProduct;