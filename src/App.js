import logo from './logo.svg';
import './App.css';
function Header(props){
  function aHandler(e){
    e.preventDefault();
    props.onSelect();
  }
  return(
      <header>
        <h1>
          <a href="index.html" onClick={aHandler}>
            {/* 리액트에서는 이벤트를 설정할때 prop의 값으로 함수를 줘야한다. */}
            {props.title}
          </a>
        </h1>
      </header>
  )
}
function Nav(props){
  let lis = [];
  for (let i = 0; i < props.data.length; i++){
    let item = props.data[i];
    lis.push(
      <li key={item.id}>
        <a href={item.id+".html"}>{item.title}</a>
      </li>
      );
  }
  return(
    <nav>
        <ol>
          {lis}
        </ol>
    </nav>
  )
}

function Article(props){
  return(
    <article>
          <h2>{props.title}</h2>
          {props.body}
    </article>
  )
}

function App() {
  let topics = [
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'}
  ];
  function onSelectHandler(){
    alert('Hi');
  }
  function onSelectHandler2(){
    alert('selected');
  }
  return (
    <div>
      <Header title="WEB" onSelect={onSelectHandler}></Header>
      <Header title="WEB" onSelect={onSelectHandler2}></Header>
      <Nav data={topics}></Nav>
      <Article title="html" body="HTML is..."></Article>
    </div>
  );
}

export default App;
