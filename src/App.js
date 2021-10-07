import logo from './logo.svg';
import './App.css';
function Header(){
  return(
    <header>
        <h1><a href="index.html">WEB</a></h1>
      </header>
  )
}
function Nav(){
  return(
    <nav>
        <ol>
          <li><a href="1.html">html</a></li>
          <li><a href="2.html">css</a></li>
          <li><a href="3.html">js</a></li>
        </ol>
    </nav>
  )
}

// 사용자 정의 태그!
function Article(props){
  console.log('props', props.title, props.body)
  return(
    <article>
          <h2>{props.title}</h2>
          {props.body}
    </article>
  )
}

function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article title="html" body="HTML is..."></Article>
      <Article title="css" body="CSS is..."></Article>
    </div>
  );
}

export default App;
