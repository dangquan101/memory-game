import MemoryGame from './components/MemoryGame';
import './App.css';
import one from './assets/images/one.png';
import two from './assets/images/two.png';
import three from './assets/images/three.png';
import four from './assets/images/four.png';
import five from './assets/images/five.png';
import six from './assets/images/six.png';

const images = [one, two, three, four, five, six];

function App() {
  return (
    <>
      <MemoryGame images={images} />
    </>
  );
}

export default App;
