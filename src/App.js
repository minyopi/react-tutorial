import logo from './logo.svg';
import './App.css';
function Header(props){
  return(
      <header>
        <h1><a href="index.html">{props.title}</a></h1>
      </header>
  )
}
function Nav(props){
  // let lis = [
  //   <li><a href="1.html">html</a></li>,
  //   <li><a href="2.html">css</a></li>,
  //   <li><a href="3.html">js</a></li>
  // ]
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
  ]
  return (
    <div>
      <Header title="WEB"></Header>
      <Nav data={topics}></Nav>
      <Article title="html" body="HTML is..."></Article>
      <Article title="css" body="CSS is..."></Article>
    </div>
  );
}

export default App;
