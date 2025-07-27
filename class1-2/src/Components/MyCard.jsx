

const MyCard = ({title="A Beautiful Picture", description="This is defult descriptio. ", src="https://images.unsplash.com/photo-1752801516481-cfb8c47ee9a3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",bgcolor="#d65fd0ff"})=>{
    return(
        <div 
        style={{
            width: "500px", 
            justifyContent:"center", 
            textAlign:"center",
            background: bgcolor, 
            padding: "20px" , 
            margin: "10px", 
            borderRadius: "10px"
            }}>

        <img className="img_card" src={src} bgcolor={bgcolor}/>
        <h3 className="card_title">{title}</h3>
        <p className="card_description">{description}</p>
        
 
        </div>
    )
    
}
export default MyCard