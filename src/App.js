import './App.css';
import classes from './main.module.css';

function App() {
  const userImage={
    image:"https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
  }
  const userData=[
    {"id":"UserCard 1","name":"Sherwinsca","userRole":"Web Developer"},
    {"id":"UserCard 2","name":"Nashima","userRole":"Tester"},
    {"id":"UserCard 3","name":"Sherofin","userRole":"Student"},
  ]
  const userCards=userData.map((data,index)=>{
    return (
      <div className="App">
        <main>
          <h1>{data.id}</h1>
          <div key={index} className={classes.mainpage}>
            <h1> {data.name} </h1>
            <img key={index} className={classes.imgStyle} src={userImage.image}></img>
            <h2>{data.userRole}</h2>
          </div>
        </main>
      </div>
    );  
  });
  return(
     userCards
  );
   
}
export default App;
