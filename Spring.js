import {useState} from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Spring=()=>{
    const [arr,setArr]=useState([]);
    const my_func1=()=>{
        axios.post(`http://localhost:2023/save`).then((posRes)=>{
            const {data}=posRes;
            setArr(data);
        },(errRes)=>{
            console.log(errRes)
        })
    }
    const my_func=()=>{
        axios.get(`http://localhost:2023/getAll`).then((posRes)=>{
            const {data}=posRes;
            setArr(data);
        },(errRes)=>{
            console.log(errRes);
        })
    }

    const func_one=(id)=>{
        axios.put(`http://localhost:2023/update/${id}`).then((posRes)=>{
            my_func1();
        },(errRes)=>{
            console.log(errRes);
        })
        
        
    }

    const func_two=(id)=>{
        axios.delete(`http://localhost:2023/delete/${id}`).then((posRes)=>{
            my_func();
            
        },(errRes)=>{
            console.log(errRes);
        })
    
    }

    return(
        <>
            <button className="btn btn-info" onClick={my_func}>Load</button>
     
     
            <table className=" table-hover table-empty" border={1}
                   align={"center"}
                   cellPadding={10}
                   cellSpacing={10}>
                <tr>
                    <th>stdId</th>
                    <th>stdName</th>
                    <th>course</th>
                    <th>fee</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                {
                    arr.map((element,index)=>{
                        return(
                            <tr key={element.stdId}>
                                <td>{element.stdId}</td>
                                <td>{element.stdName}</td>
                                <td>{element.course}</td>
                                <td>{element.fee}</td>

                                <td>
                                    <i className="fa fa-edit" onClick={func_one}><NavLink/> av</i>
                                </td>
                                <td>
                                    <i className="fa fa-trash" onClick={()=>func_two(element.stdId)}></i>
                                </td>
                                
                                  
                               

                               
                                
                            </tr>
                        )
                    })
                }
            </table>
     
     </>
    )
}
export default Spring;