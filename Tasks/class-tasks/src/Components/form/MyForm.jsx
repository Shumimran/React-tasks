import { useState } from "react";
import "./form.css"
const MyForm = ()=>{
    const [isShowForm, setIsShowForm]= useState(false)

    const showForm =()=>{
    
        setIsShowForm(!isShowForm)
    }
    
    

return(
    <div>
        <button className="button" onClick={showForm}>{isShowForm ? "Hide Form": "Show Form"}</button>
        {isShowForm == true && <form style={{background: "#797676ff",
        color: "#FFF",
        padding: "10px",
        marginTop: "10px",
        width: "550px",
        borderRadius:"5px",
        
        }}>
            <h1 style={{textAlign:"center"}}>Add Product</h1>
            <div className="div-main">
                <div className="div-style">
                     <label style={{padding:"20px"}} htmlFor="">Name:</label>

                     <input type="text" id="name" name="prod-name"/>
                </div>
             <br />
             <div className="div-style">
            <label style={{padding:"20px"}} htmlFor="">Price:</label>
            <input type="text" id="price" name="prod-price" />
            </div>
            <br />
            <div className="div-style">
            <label style={{padding:"20px"}} htmlFor="">Delivery Charges:</label>
            <input type="text" id="dc" name="prod-dc"  />
            </div>
</div>
            </form>}
    </div>

)
}


export default MyForm;




