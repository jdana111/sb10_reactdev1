import Panel from './Panel.js';
import { getImageUrl } from './utils.js';

export default function Profile({ myArray, myObj }) {
  let myNewArray = myArray.slice();
  let myNewObj1 = Object.assign({}, myObj);
  let myNewObj2 = { ...myObj };
  
  console.log(myNewArray, myNewObj1, myNewObj2);
  return (
    <Panel>
      <Header />
      <Avatar />
    </Panel>
  )
}

function Header() {
  return <h1>{currentPerson.name}</h1>;
}

function Avatar() {
  return (
    <img
      className="avatar"
      src={getImageUrl(currentPerson)}
      alt={currentPerson.name}
      width={50}
      height={50}
    />
  );
}
