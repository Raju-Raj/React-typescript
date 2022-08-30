import './App.css';
// import RandomChoice from './components/RestrictingProps/RandomChoice';
import Toast from './components/TemplateExcluded/Toast';
// import List from './components/GenericProps/List';
// import Private from './components/componentProps/Private';
// import Profile from './components/componentProps/Profile';
// import ClassComp from './components/ClassComp/ClassCounter';

// import MutableRefs from './components/REF/MutableRefs';
// import Domref from './components/REF/Domref';
// import User from './components/usecontext/User';
// import UserContext from './components/usecontext/UserContext';
// import Box from './components/usecontext/Box';
// import ThemeContextProvider from './components/usecontext/ThemeContext';
// import AuthUser from './components/AuthUser';
// import Counter from './components/Counter';
// import LoggedIn from './components/LoggedIn';
// import Container from './components/Container';
// import Input from './components/Input';
// import Button from './components/Button';
// import Heading from './components/Heading';
// import Oscar from './components/Oscar';
// import Status from './components/Status';
// import Greet from './components/Greet';
// import Person from './components/Person';
// import PersonsList from './components/PersonsList';


function App() {
  // const person ={
  //   name:'raju',
  //   age:25
  // }

  // const lists = [
  //   {
  //     name:'Raju',
  //     age:25
  //   },
  //   {
  //     name:'Rajesh',
  //     age:24
  //   },
  //   {
  //     name:'Ramu',
  //     age:28
  //   },
  //   {
  //     name:'Mahesh',
  //     age:26
  //   }
  // ]
  return (
    <div className="App">
     {/* <Greet name="Raju" age={10} isLogged={true}/> */}
     {/* <Person detail={person}/> */}
     {/* <PersonsList details={lists}/> */}
     {/* <Status status="success"/> */}
     {/* <Heading>Hello World</Heading> */}
     {/* <Oscar>
       <Heading>Oscar goes to Raju</Heading>
     </Oscar> */}
     {/* <Button handleProp={(event,id)=>{console.log(event,id)}}/> */}
     {/* <Input value='' handleProp={(event)=>console.log(event)}/> */}
     {/* <Container styles={{border:'1px solid red',padding:'10px'}}/> */}
     {/* <LoggedIn/> */}
     {/* <AuthUser/> */}
     {/* <Counter/> */}
     {/* <ThemeContextProvider>
       <Box/>
     </ThemeContextProvider> */}
     {/* <UserContext>
      <User/>
     </UserContext> */}
     {/* <Domref/> */}
     {/* <MutableRefs/> */}
     {/* <ClassComp message="The king is back"/> */}
     {/* <Private isLoggedIn={true} component={Profile}/> */}
     {/* <List items={['raju','ramu','mahesh']} onClick={(item)=>console.log(item)}/>
     <List items={[1,2,3]} onClick={(item)=>console.log(item)}/>
     <List items={[{name:'raju',age:15},{name:'rajesh',age:25},{name:'ramu',age:25}]} onClick={(item)=>console.log(item)}/> */}
     {/* <RandomChoice value={8} isPositive/> */}
     <Toast position="center"/>
    </div>
  );
}

export default App;
