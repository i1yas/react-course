const Comments = function() {
  return (
    <div className="comments">
      No news - no comments.
    </div>
  )
}

const News = function() {
  return (
    <div className="news">
      Unfortunately, there is no news.
    </div>
  )
}

const App = function() {
  return (
    <div className="app">
      Hi, I am App component, here some news:
      <News />
      <Comments />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);