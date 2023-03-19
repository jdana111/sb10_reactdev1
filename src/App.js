import Card from './Card';
import Avatar from './Avatar'
import './App.css';

function App() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );}

export default App;
