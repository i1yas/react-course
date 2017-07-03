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

const Comments = function() {
  return (
    <div className="comments">
      No news - no comments.
    </div>
  )
}

const News = function(props) {
  const newsTemplate = props.data.map((item, index) => {
    return (
      <div key={index}>
        <div className="news__author">{item.author}</div>
        <div className="news__text">{item.text}</div>
      </div>
    );
  });
  
  return (
    <div className="news">
      {newsTemplate}
      <strong className={props.data.length > 0 ? '' : 'none'}>
      	Всего новостей: {props.data.length}
      </strong>
    </div>
  )
}

const App = function() {
  return (
    <div className="app">
      Hi, I am App component, here some news:
      <News data={NEWS} />
      <Comments />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);