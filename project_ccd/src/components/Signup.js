//We will import header for login page
//In case of Link, do not forget to register it in index,js with path and element

/*import { Link } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import axios from "axios";
import API_URL from "../constants";
import "./Signup.css";

function Signup() {

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [email, setemail] = useState('');
    const [mobile, setmobile] = useState('');


    const handleApi = () => {
        const url = API_URL + '/signup';
        const data = { username, password, mobile, email };
        axios.post(url, data)
            .then((res) => {
                if (res.data.message) {
                    alert(res.data.message);
                }
            })
            .catch((err) => {
                alert('SERVER ERR')
            })
    }
    return (
        <div>
            <Header />
            <div className="p-3 m-3">
                <h3> Welcome to Signup Page </h3>
                <br></br>
                USERNAME
                <input className="form-control" type="text" value={username}
                    onChange={(e) => {
                        setusername(e.target.value)
                    }} />
                <br></br>
                MOBILE
                <input className="form-control" type="text" value={mobile}
                    onChange={(e) => {
                        setmobile(e.target.value)
                    }} />
                <br></br>
                EMAIL
                <input className="form-control" type="text" value={email}
                    onChange={(e) => {
                        setemail(e.target.value)
                    }} />
                <br></br>
                PASSWORD
                <input className="form-control" type="text" value={password}
                    onChange={(e) => {
                        setpassword(e.target.value)
                    }} />
                <br></br>
                <button className="btn btn-primary mr-3" onClick={handleApi}> SIGNUP </button>
                <Link className="m-3" to="/login">  LOGIN </Link>
            </div>
        </div>
    )
}

export default Signup;
/*/


////////////////////////////////////////////////////////////////////////CORRECT//////////////
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import axios from 'axios';   //used for calling api requests
// import "./Signup.css";


// function Signup() {
//     //const [email, setEmail] = useState();
//     const [password, setPassword] = useState();
//     const [username, setusername] = useState();
//     const [mobile, setmobile] = useState();
//     const [email, setemail] = useState();
//     const [sid, setSid] = useState();
//     const [hostel, setHostel] = useState();
//     const [course, setCourse] = useState();

//     const navigate = useNavigate()

//     const handleSubmit = () =>{
//         console.log({username , password });
//         axios.post('http://localhost:4000/signup', {username, password, mobile, email, sid , hostel , course})
//         .then( (res) =>{
//              console.log(res.data)
//              if(res.data.message)
//              {
//                 alert(res.data.message);
//              }

//         })
//         // navigate('/login')
//         .catch( (err) => { console.log(err)
//             alert("server error")
//         })
//     }


 

//     return (
//         <Container>
//             <Row>
//                 <Col md={6} className="signup__form--container">
//                     <Form style={{ width: "100%" }} >
//                         <h1>SignUp Page</h1>
           
//                         <Form.Group>
//                             <Form.Label>Name</Form.Label>
//                             <Form.Control type="text" placeholder="Enter Your name" autoComplete="username"  value={username} required onChange={(e) => setusername(e.target.value)} />
//                         </Form.Group>

                             
//                         {/* <Form.Group>
//                             <Form.Label>Email Address</Form.Label>
//                             <Form.Control type="email" placeholder="Enter email" value={email} required onChange={(e) => setEmail(e.target.value)} />
//                         </Form.Group> */}

//                         <Form.Group className="mb-3">
//                             <Form.Label>Password</Form.Label>
//                             <Form.Control type="password" placeholder="Enter Password" autoComplete="current-password" value={password}
//                               required onChange={(e) => setPassword(e.target.value)} />
//                         </Form.Group>

//                         <Form.Group className="mb-3">
//                             <Form.Label>Mobile</Form.Label>
//                             <Form.Control type="text" placeholder="Enter mobile" autoComplete="current-sid" value={mobile} required onChange={(e) => setmobile(e.target.value)} />
//                         </Form.Group>

//                         <Form.Group className="mb-3">
//                             <Form.Label>Email</Form.Label>
//                             <Form.Control type="text" placeholder="Enter email" autoComplete="current-sid" value={email} required onChange={(e) => setemail(e.target.value)} />
//                         </Form.Group>

                        
//                         <Form.Group className="mb-3">
//                             <Form.Label>SmartCard Id</Form.Label>
//                             <Form.Control type="text" placeholder="Enter id" autoComplete="current-sid" value={sid} required onChange={(e) => setSid(e.target.value)} />
//                         </Form.Group>

//                         <Form.Group className="mb-3">
//                             <Form.Label>Hostel</Form.Label>
//                             <Form.Control type="text" placeholder="Enter hostel" autoComplete="current-hostel" value={hostel} required onChange={(e) => setHostel(e.target.value)} />
//                         </Form.Group>

//                         <Form.Group className="mb-3">
//                             <Form.Label>Course</Form.Label>
//                             <Form.Control type="text" placeholder="Enter course" autoComplete="current-course" value={course} required onChange={(e) => setCourse(e.target.value)} />
//                         </Form.Group>


//                         <Form.Group>
//                             <Button type="submit" onClick={handleSubmit}>
//                                SignUp
//                             </Button>
//                         </Form.Group>
//                         <p className="pt-3 text-center">
//                             Already have an account? <Link to="/login">Login</Link>{" "}
//                         </p>
//                     </Form>
//                 </Col>
//                 <Col md={6} className="signup__image--container"></Col>
//             </Row>
//         </Container>
//     );
// }

// export default Signup;
///////////////////////////////////////////////////////////////////////////////////


import { Link } from "react-router-dom";
// import Header from "./Header";
import { useState } from "react";
import axios from "axios";
import API_URL from "../constants";

function Signup() {

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [email, setemail] = useState('');
    const [mobile, setmobile] = useState('');
    const [sid, setSid] = useState();
    const [hostel, setHostel] = useState();
    const [course, setCourse] = useState();


    const handleApi = () => {
        const url = 'http://localhost:4000/signup'
        const data = { username, password, mobile, email, sid , hostel , course };
        axios.post(url, data)
            .then((res) => {
                if (res.data.message) {
                    alert(res.data.message);
                }
            })
            .catch((err) => {
                alert('SERVER ERR')
            })
    }
    return (
        <div>
            {/* <Header /> */}
            <div className="p-3 m-3">
                <h3> Welcome to Signup Page </h3>
                <br></br>
                USERNAME
                <input className="form-control" type="text" value={username}
                    onChange={(e) => {
                        setusername(e.target.value)
                    }} />
                <br></br>
                PASSWORD
                <input className="form-control" type="password" autoComplete="current-password" value={password}
                    onChange={(e) => {
                        setpassword(e.target.value)
                    }} />
                     <br></br>
                MOBILE
                <input className="form-control" type="text" value={mobile}
                    onChange={(e) => {
                        setmobile(e.target.value)
                    }} />
                <br></br>
                EMAIL
                <input className="form-control" type="text" value={email}
                    onChange={(e) => {
                        setemail(e.target.value)
                    }} />
                <br></br>
                SMARTCARD ID
                <input className="form-control" type="text" value={sid}
                    onChange={(e) => {
                        setSid(e.target.value)
                    }} />
                <br></br>
                HOSTEL
                <input className="form-control" type="text" value={hostel}
                    onChange={(e) => {
                        setHostel(e.target.value)
                    }} />
                <br></br>
                COURSE
                <input className="form-control" type="text" value={course}
                    onChange={(e) => {
                        setCourse(e.target.value)
                    }} />
                <br></br>
                <button className="btn btn-primary mr-3" onClick={handleApi}> SIGNUP </button>
                <Link className="m-3" to="/login">  LOGIN </Link>
            </div>
        </div>
    )
}

export default Signup;