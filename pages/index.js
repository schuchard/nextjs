import { Component } from 'react';
import Link from 'next/link';
import { postIDS } from '../next.config';

export default class extends Component {
  static async getInitialProps() {
    return await { posts: [...postIDS] };
  }

  render() {
    return (
      <main>
        <h1>Next.js</h1>
        <section>
          {this.props.posts.map((id) => {
            return (
              <li>
                <Link href={{ pathname: '/post', query: { id } }} as={`/post/${id}`}>
                  <a>Read more...{id}</a>
                </Link>
              </li>
            );
          })}
        </section>
      </main>
    );
  }
}
