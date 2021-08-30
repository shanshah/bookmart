import Head from 'next/head'
import Link from 'next/link'
import { createClient } from 'contentful';

import Header from '../components/Header';
import BookList from '../components/BookList';


export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const response = await client.getEntries({
     content_type: 'books'
  });

  return {
    props: {
      books: response.items,
    }
  }
}

export default function Home(props) {
  const { books } = props;

  return (
    <div className="container">
      <Head>
        <title>Books</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main>
        <div>
          <h1 style={{ margin: 15 }}>Books</h1>
          <BookList books={books} />
        </div>
      </main>

      <footer>
        &copy; 2021 - Book Mart. All rights reserved.
      </footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>

      <style jsx>{`
        .container {
          min-height: 100vh;
          // padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          width: 100%;
          padding: 1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  )
}
