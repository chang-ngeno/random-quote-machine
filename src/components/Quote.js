import React from 'react';

export default class Quote extends React.Component {

  render() {
    return (
      <div id='saying'>
        <div className='card border border-white'>
          <div className='card-body'>
            <div id="text" >
              <i className="fa fa-quote-left faa-lg" aria-hidden="true"></i>
              <span className=""> {this.props.quote.quote} </span>
              <i className="fa fa-quote-right fa-lg" aria-hidden="true"> </i>
            </div>
          </div>
          <div className='card-footer text-right' id="author" >
             Author ~ {this.props.quote.author}.
          </div>
        </div>
      </div>
    );
  };
}
