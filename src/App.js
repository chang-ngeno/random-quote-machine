import React from 'react';
import './App.scss';
import Quote from './components/Quote'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saying: {
        text: '',
        author: '',
        quote: '',
        permalink: ''
      },
    };
    this.refreshQuote = this.refreshQuote.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
  }
  componentDidMount() {
    this.refreshQuote();
  }
  onRefresh(e) {
    e.preventDefault();
    this.refreshQuote();
  }
  refreshQuote() {
    fetch('http://quotes.stormconsultancy.co.uk/random.json')
      .then(res => res.json())
      .then((data) => {
        this.setState({ saying: data })
      })
      .catch(console.log)
  }
  render() {
    let twitterUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(this.state.saying.quote) + '%0A'
      + encodeURIComponent('Author ~ ' +this.state.saying.author+'.') ;
    return (
      <div className="container" id="quote-box" >
        <Quote quote={this.state.saying} />

        <div className='button-group'>
          <a id="new-quote" onClick={e => this.onRefresh(e)} type='refreshQuote' className='btn btn-warning pull-left'>New Quote</a>
          <a id="tweet-quote" href={twitterUrl} className='btn pull-right' target='_blank' rel='noopener noreferrer'><i className='fa fa-twitter App-link'>Tweet</i></a>
        </div>
      </div>
    );
  };
}
