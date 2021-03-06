import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Article from './components/Article'
import Nav from './components/Nav'
import { Header } from './components/Header';
import { Create } from './components/Create';
import { UpDate } from './components/UpDate';
import { Control } from './components/Control';
import {BrowserRouter as Router,
        Route,
        Switch,
        Link,
        useHistory,
        useParams
      } from 'react-router-dom';

function Read(props){
  var params = useParams();
  var id = Number(params.id);
  var title, body;
  for(var i=0; i<props.topics.length; i++){
    var topic = props.topics[i];
    if(topic.id === id){
      title = topic.title;
      body = topic.body;
    }
  }
  return <Article title={title} body={body}></Article>
}

function App() {
  var history = useHistory();
  var [nextId,setNextId] = useState(3);
  var [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ..'},
    {id:2, title:'css', body:'css is ..'}
  ]);
  
    function updateHandler(_id, _title, _body){
      //id에 해당하는 topic의 값을 새로운 title, body를 교체한다.
      var newTopics = [];
      for(var i = 0; i < topics.length; i++){
          var topic = topics[i];
          if(topic.id === _id){
            newTopics.push({id: _id, title: _title, body: _body});
          } else {
            newTopics.push(topic);
          }
      }
      //새로운 topics의 값으로 state를 변경한다.
      setTopics(newTopics);
      //mode를 read로 변경한다.
      history.push('/read/'+_id);
    }

  function deleteHandler(id){
      var newTopics = [];
      for(var i=0; i<topics.length; i++){
        if(topics[i].id === id){
          
        } else {
          newTopics.push(topics[i]);
        }
      }
      setTopics(newTopics);
      history.push('/');
    }

  function createHandler(_title,_body){
    // topics.push({title:_title, body:_body});
    // setTopics(topics);
    var newTopics = [...topics];
    newTopics.push({id:nextId, title:_title, body:_body});
    setTopics(newTopics);
    history.push('/read/'+nextId);
    setNextId(nextId+1);
  }

  return (
    <div>
        <Header title="html" ></Header>
        <Nav src={topics}></Nav>
        <Route exact path="/">
          <Article title="Welcome" body="Hello, WEB"></Article>
        </Route>
        <Route path="/create">
          <Create onCreate={createHandler}></Create>
        </Route>
        <Route path="/read/:id" >
          <Read topics={topics}></Read>
        </Route>
        <Route path="/update/:id">
          <UpDate onUpdate={updateHandler} topics={topics}></UpDate>
        </Route>
        <Control onDelete={deleteHandler}></Control>
    </div>
  );
}

export default App;
