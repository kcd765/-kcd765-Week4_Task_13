import './App.css';
import { Header2 } from './stories/components/Header/Header.stories';
import { Form1 } from './stories/components/Form/Form.stories';
import { Footer2 } from './stories/components/Footer/Footer.stories';
import { Card1 } from './stories/components/Card/Card.stories';

function App() {

  return (
    <div className="App">
      <Header2 backgroundColor="green" color="white" />
      <Form1 color="red" />
      <Card1 backgroundColor="#7777ff" color="white" height="200px" fontFamily="san-serif"/>
      <Footer2 color1="green" color2="red" height="5%" />
    </div>
  );
}

export default App;
