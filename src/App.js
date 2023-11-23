import logo from './logo.svg';
import './App.css';
import { DependencyProvider } from './Contexts/DependencyProvider';
import MyComponent from './Components/MyComponent';

function App() {
  const myService = {
    callMe: () => {console.log("this is some dependency")}
  }
  return (
    <DependencyProvider myService={myService}>
      <MyComponent> </MyComponent>
    </DependencyProvider>
  );
}

export default App;
