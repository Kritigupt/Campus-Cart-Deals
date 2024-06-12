import { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import API_URL from "../constants";

function MyProfile() {

    const [user, setuser] = useState({})

    useEffect(() => {
        let url = 'http://localhost:4000/my-profile/' + localStorage.getItem('userId');
        axios.get(url)
            .then((res) => {
                console.log(res.data)
                if (res.data.user) {
                    setuser(res.data.user);
                }
            })
            .catch((err) => {
                alert('Server Err.')
            })
    }, [])


    return (
        <div>
            <Header />
            <div className="m-3 p-3" >
                <h3 className="text-center mt-2"> USER PROFILE </h3>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <td> USERNAME </td>
                            <td>  {user.username} </td>
                            
                        </tr>
                        <tr>
                            <td> EMAIL ID </td>
                            <td>  {user.email} </td>
                            
                        </tr>
                        <tr>
                            <td> HOSTEL </td>
                            <td>  {user.hostel} </td>
                            
                        </tr>

                        <tr>
                            <td> COURSE </td>
                            <td>  {user.course} </td>
                            
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            
                            <td> MOBILE </td>
                            <td>  {user.mobile} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default MyProfile;