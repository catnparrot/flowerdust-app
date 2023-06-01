import './App.css';

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
        props.onChangeMode(event.target.id);
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

function App() {
  const mode = 'READ'
  const topics = [
    {id:1, title: 'html', body: 'html is...'},
    {id:2, title: 'css', body: 'css is...'},
    {id:3, title: 'javascript', body: 'javascript is...'}
]

  let content= null;

  if(mode == 'WELCOME') {
    content=<Article title="Welcome" body="Hello, Web"></Article>
  }

  if(mode == "READ") {
    content=<Article title="Welcome" body="Hello, Read"></Article>
  }

  return (
    
    <div>
      <Header title="WEB" onChangeMode={function() {
        alert('Header');
      }}></Header>

      <Nav topics={topics} onChangeMode={(id)=>{
        alert(id);
      }} />

      {content}
    </div>
  );
}

export default App;
