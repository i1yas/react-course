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

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  render() {
    let newsTemplate;
    if(this.props.data.length > 0) {
      newsTemplate = this.props.data.map((item, index) => {
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
        <strong
          className={this.props.data.length > 0 ? 'news__count' : 'none'}
        >
          Всего новостей: {this.props.data.length}
        </strong>
      </div>
    )
  }
}
News.propTypes = {
  data: PropTypes.array.isRequired
}

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
  }

  handleCheckboxClick() {
    this.setState({
      checked: !this.state.checked
    })
  }

  handleButtonClick(event) {
    event.preventDefault();

    const newsAuthor = this.refs.author.value;
    const newsText = this.refs.text.value;

    const alertMsg = `
    Author: ${newsAuthor}
    Text: ${newsText}`

    alert(alertMsg);
  }

  componentDidMount() {
    this.refs.author.focus();
  }

  render() {
    return (
      <form className="add">
        <input
          type="text"
          className="add__author"
          defaultValue=''
          ref='author'
          placeholder="Автор"
        />
        <textarea
          className="add__text"
          defaultValue=''
          ref='text'
          placeholder='Текст новости'
        />
        <label className="add__check-rule">
          <input
            type="checkbox"
            ref='checkRule'
            checked={this.state.checked}
            onChange={this.handleCheckboxClick.bind(this)}
          />
          <span> Я согласен с правилами</span>
        </label>
        <button
          className='add__alert-button'
          ref='alertButton'
          disabled={!this.state.checked}
          onClick={this.handleButtonClick.bind(this)}
        >
          Показать alert
        </button>
      </form>
    );
  }
}

const App = function() {
  return (
    <div className="app">
      <h1>Новости</h1>
      <Add/>
      <News data={NEWS}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);