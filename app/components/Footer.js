import React from 'react';

export class Footer extends React.Component {
  render() {
    let currentYear = new Date().getFullYear();

    return (
      <div id="footer">
        <p>
          Website &copy; Copyright Mitul Mistry { currentYear } <br />
          All other materials copyright their respective holders <br />
          <a href="https://github.com/MitulMistry/react-google-news" target="_blank">Github repo for this site</a>
        </p>
      </div>
    );
  }
}
