import classes from './main.module.css';

function TestApp(props){
    console.log(props);
    const defaultData={
        stuName:"No Name is provided",
        age:"No age is specified"
    }
    const {stuDetails=defaultData}=props;
    return(
        <div className={classes.mainpage}>
            <h3 >
                Student Detail
            </h3>
            <div className={classes.headingStyle}>Student:{stuDetails.stuName}</div>
            <div className={classes.headingStyle}>Student Age:{stuDetails.age}</div>
        </div>
    )
    
}
  export default TestApp;