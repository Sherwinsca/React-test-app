import classes from './main.module.css';

function TestApp(props){
    console.log(props);
    const {name,age}=props;
    return(
        <div className='mainpage'>
            <h3 >
                Joe root
            </h3>
            <div>{name}</div>
            <div>{age}</div>
        </div>
    )
    
}
  export default TestApp;