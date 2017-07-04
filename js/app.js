const NEWS = [
  {
    author: 'Alex Pechkin',
    text: 'В четверг, четвертого числа...',
    bigText: 'В четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
  },
  {
    author: 'Vasya',
    text: 'Считаю, что $ должен стоить 35 рублей!',
    bigText: 'А евро 42!'
  },
  {
    author: 'Guest',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
    bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
  }
];

class Article extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false 
    }
  }

  handleReadMore() {
    this.setState({
      visible: true
    })
  }

  render () {
    const visible = this.state.visible;

    return (
      <div className="article">
        <div className="news__author">{this.props.data.author}</div>
        <div className="news__text">{this.props.data.text}</div>
        <a
          href="#"
          onClick={this.handleReadMore.bind(this)}
          className={"news__read-more " + (visible ? 'none' : '')}
        >
          Подробнее
        </a>
        <div className={"news__big-text " + (visible ? '' : 'none')}>{this.props.data.bigText}</div>
      </div>
    )
  }
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
News.propTypes = {
  data: PropTypes.array.isRequired
}

const App = function() {
  return (
    <div className="app">
      <h1>Новости:</h1>
      <News data={NEWS}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);