import { Component } from 'react';
import Link from 'next/link';

export default class extends Component {
  static async getInitialProps({ query }) {
    return await {...query };
  }

  render() {
    return (
      <main>
        <h1>Post {this.props.id}</h1>
      </main>
    );
  }
}
