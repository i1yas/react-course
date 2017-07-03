const NEWS = [
  {
    author: 'Alex Pechkin',
    text: 'В четверг, четвертого числа...'
  },
  {
    author: 'Vasya',
    text: 'Считаю, что $ должен стоить 35 рублей!'
  },
  {
    author: 'Guest',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
  }
];

const Article = function(props) {
  return (
      <div className="article">
        <div className="news__author">{props.data.author}</div>
        <div className="news__text">{props.data.text}</div>
      </div>
    )
}

const News = function(props) {
  let newsTemplate;
  if(props.data.length > 0) {
    newsTemplate = props.data.map((item, index) => {
      return (
          <div key={index}>
            <Article data={item} />
          </div>
        )
    })
  } else {
    newsTemplate = "Новостей нет"
  }
  
  return (
    <div className="news">
      {newsTemplate}
      <strong className={props.data.length > 0 ? 'news__count' : 'none'}>
        Всего новостей: {props.data.length}
      </strong>
    </div>
  )
}

const App = function() {
  return (
    <div className="app">
      <h1>Новости:</h1>
      <News data={NEWS} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);