import classes from './main.module.css';
import TestApp from './test';

function App() {
  const userImage={
    image:"https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
  }
  const userData=[
    {"id":"UserCard","name":"Sherwinsca","userRole":"Web Developer"},
    {"id":"UserCard","name":"Nashima","userRole":"Tester"},
    {"id":"UserCard","name":"Sherofin","userRole":"Student"},
  ]
  const userCards=userData.map((data,index)=>{
    return (
      <div key={index}>
        <h1 className={classes.headingStyle}>{data.id} {index+1} </h1>
          <div className={classes.mainpage}>
            <h1> {data.name} </h1>
            <img key={index} className={classes.imgStyle} src={userImage.image}></img>
            <h2>{data.userRole}</h2>              
          </div>
      </div>      
    );  
  });
  return(
    <div className="App">
      <main>
        <div>
            {userCards}
        </div>
        <TestApp name={"Madhu"} age={20}/>
      </main>
    </div>
  );
   
}
export default App;
