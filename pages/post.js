import { Component } from 'react';
import Link from 'next/link';

export default class extends Component {
  static async getInitialProps({ query }) {
    return await { ...query };
  }

  render() {
    return (
      <main>
        <h1>Post {this.props.id}</h1>
        <span>
          Ut suscipit vero voluptatem molestiae. Veritatis itaque numquam perspiciatis. Deleniti
          autem nobis iste ut eaque et totam ipsum ut. Odio fugiat nihil consectetur eius provident.
          Cupiditate dolore facilis omnis et vel quia deleniti et. Rem ea ullam optio est quam.
          Beatae architecto consequatur laudantium et aut consequatur est eum quis. Dolore
          voluptatem amet qui tenetur quidem. Sunt veniam maxime architecto animi sequi libero quia
          architecto. Porro officia sequi quo. Qui commodi qui corporis molestias totam qui. Ipsa
          cum repellat. Est suscipit tempora non. Maiores excepturi rerum iure qui impedit. Ut
          suscipit vero voluptatem molestiae. Veritatis itaque numquam perspiciatis. Deleniti autem
          nobis iste ut eaque et totam ipsum ut. Odio fugiat nihil consectetur eius provident.
          Cupiditate dolore facilis omnis et vel quia deleniti et. Rem ea ullam optio est quam.
          Beatae architecto consequatur laudantium et aut consequatur est eum quis. Dolore
          voluptatem amet qui tenetur quidem. Sunt veniam maxime architecto animi sequi libero quia
          architecto. Porro officia sequi quo. Qui commodi qui corporis molestias totam qui. Ipsa
          cum repellat. Est suscipit tempora non. Maiores excepturi rerum iure qui impedit. Ut
          suscipit vero voluptatem molestiae. Veritatis itaque numquam perspiciatis. Deleniti autem
          nobis iste ut eaque et totam ipsum ut. Odio fugiat nihil consectetur eius provident.
          Cupiditate dolore facilis omnis et vel quia deleniti et. Rem ea ullam optio est quam.
          Beatae architecto consequatur laudantium et aut consequatur est eum quis. Dolore
          voluptatem amet qui tenetur quidem. Sunt veniam maxime architecto animi sequi libero quia
          architecto. Porro officia sequi quo. Qui commodi qui corporis molestias totam qui. Ipsa
          cum repellat. Est suscipit tempora non. Maiores excepturi rerum iure qui impedit. Ut
          suscipit vero voluptatem molestiae. Veritatis itaque numquam perspiciatis. Deleniti autem
          nobis iste ut eaque et totam ipsum ut. Odio fugiat nihil consectetur eius provident.
          Cupiditate dolore facilis omnis et vel quia deleniti et. Rem ea ullam optio est quam.
          Beatae architecto consequatur laudantium et aut consequatur est eum quis. Dolore
          voluptatem amet qui tenetur quide˝m. Sunt veniam maxime architecto animi sequi libero quia
          architecto. Porro officia sequi quo. Qui commodi qui corporis molestias totam qui. Ipsa
          cum repellat. Est suscipit tempora non. Maiores excepturi rerum iure qui impedit.
        </span>
        <Link href="/">
          <a>home</a>
        </Link>
      </main>
    );
  }
}
