import { Component } from 'react';
import Link from 'next/link';
import { CONTENT } from '../next.config';

export default class extends Component {
  static async getInitialProps({ query }) {
    return await { body: CONTENT[query.id] };
  }

  render() {
    return (
      <main>
        <h1>Post {this.props.id}</h1>
        <span>{this.props.body}</span>
        <Link href="/">
          <a>home</a>
        </Link>
      </main>
    );
  }
}
