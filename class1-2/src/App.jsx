import { useState } from 'react';
// import MyCard from './Components/MyCard'
const App= ()=>{
    
    // const Card_Data = [
    //     {
    //         id: 101,
    //         title: "A Beautiful Picture",
    //         description: "Rain can be a source of inspiration, peace, and even joy. It can be seen as a symbol of cleansing, renewal, and the beauty of nature. Here are some quotes that capture the essence of rain",
    //         src:"https://wilderness-society.org/wp-content/uploads/2024/10/heavy-rain.jpg",
    //         bgcolor:"#1bdb7bff"

    //     },
    //     {
    //         id: 102,
    //         title: "A Gem",
    //         description:'A gem can represent a rare or unique person, a precious moment, or a hidden truth waiting to be discovered.',
    //         src:"https://images.unsplash.com/photo-1752801516481-cfb8c47ee9a3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //         bgcolor: "#d65fd0ff"

    //     },
    //     {
    //         id: 103,
    //         title: "A Journey of Life",
    //         description: 'The journey of life is a metaphor for the experiences and events that unfold from birth to death.',
    //         src:"https://media.licdn.com/dms/image/v2/C5612AQEbTcNPGzn0fg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1648469325689?e=2147483647&v=beta&t=t95ITBCXQmLwn954zUrbYMnKnqB8ClejZKGtZP-IDQ8",
    //         bgcolor:"#f0a502"

    //     }

    // ];
    // const [cardData ,setCardData] = useState([
    //     {
    //         id: 101,
    //         title: "A Beautiful Picture",
    //         description: "Rain can be a source of inspiration, peace, and even joy. It can be seen as a symbol of cleansing, renewal, and the beauty of nature. Here are some quotes that capture the essence of rain",
    //         src:"https://wilderness-society.org/wp-content/uploads/2024/10/heavy-rain.jpg",
    //         bgcolor:"#1bdb7bff"

    //     },
    //     {
    //         id: 102,
    //         title: "A Gem",
    //         description:'A gem can represent a rare or unique person, a precious moment, or a hidden truth waiting to be discovered.',
    //         src:"https://images.unsplash.com/photo-1752801516481-cfb8c47ee9a3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //         bgcolor: "#d65fd0ff"

    //     },
    //     {
    //         id: 103,
    //         title: "A Journey of Life",
    //         description: 'The journey of life is a metaphor for the experiences and events that unfold from birth to death.',
    //         src:"https://media.licdn.com/dms/image/v2/C5612AQEbTcNPGzn0fg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1648469325689?e=2147483647&v=beta&t=t95ITBCXQmLwn954zUrbYMnKnqB8ClejZKGtZP-IDQ8",
    //         bgcolor:"#f0a502"

    //     }

    // ]) 
    let a =10;

    let [valueOfA, setValueOfA] = useState(10);

    const clickme = ()=>{
        console.log("Button Clicked");
        setValueOfA(valueOfA*2)
        
    }
    const updatedValueOfA =()=>{
        setValueOfA(valueOfA + 1);
    
        
    }
    console.log('Outside Function');
    


    
    

    return (
    <div>
         {/* {cardData.map((prod) => (

        <MyCard
          key={prod.id}
          src={prod.src}
          title={prod.title}
          bgcolor={prod.bgcolor}
          description={prod.description}
        />
      ))} */}

      <button onClick={clickme} style={{background: '#efe148ff', padding:'10px 20px', borderRadius: '5px', fontSize: '16px'}}>Click Me</button>
      <br />
      <br />
      <br />


      <button onClick={updatedValueOfA} style={{background: '#e54fa6ff' ,padding:'10px 20px', borderRadius: '5px', fontSize: '16px'}}>updated Value Of A</button>
      <br />
      <br />
      <br />

      Value of ValueOfA = {valueOfA}

      <br />
      <br />
      <br />
    Value of a = {valueOfA}



   

        </div>
    );
};
export default App