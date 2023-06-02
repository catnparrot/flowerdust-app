import './App.css';
import {useState} from 'react';

function Header(props) {
  console.log('props.title:', props.title)
  return (
    <header>
      <h1><a href="/" onClick={function(event){
        event.preventDefault();
        props.onChangeMode();
      }}>
      {props.title}
      </a></h1>
    </header>
    )
}

function Nav(props) {
  const lis = [
    // <li><a href="/read/1">html</a></li>,
    // <li><a href="/read/2">css</a></li>,
    // <li><a href="/read/3">js</a></li>  
  ]
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i]
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event => {
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }}>
        {t.title}
      </a>
    </li>)
  }

  return(
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  )
}

function Article(props) {
  return(
    <article>
        <h2>{props.title}</h2>
          {props.body}
    </article>
  )
}

function Create () {
  return(
    <article>
      <h2>Create</h2>
      <form onSubmit={event=>{

      }}>
        <p><input type="text" name="title" placeholder="title" /></p>
        <p><textarea name="body" placeholder="body"></textarea></p>
      </form>
    </article>
  )
}

function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const topics = [
    {id:1, title: 'html', body: 'html is...'},
    {id:2, title: 'css', body: 'css is...'},
    {id:3, title: 'javascript', body: 'javascript is...'}
  ]

  let content= null;

  if(mode === 'WELCOME') {
    content=<Article title="Welcome" body="Hello, Web"></Article>
  
  }else if(mode === 'READ') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      console.log('topics[i].id', id);
      if(topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }      
    }
    content=<Article title={title} body={body}></Article>
  
  }else if(mode === 'CREATE'){
    content = <Create></Create>
  }

  return (
    
    <div>
      <Header title="WEB" onChangeMode={()=> {
        setMode('WELCOME');
      }}></Header>

      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('READ');
        setId(_id);
      }} />

      {content}
      <a href="/create" onClick={event=>{
        event.preventDefault();
        setMode('CREATE');
      }}>Create</a>
    </div>
  );
}

export default App;
