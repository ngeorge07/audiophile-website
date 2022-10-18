import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon-32x32.png" />
          <meta
            name="description"
            content="Audiophile is a mock headset store. It was made as a personal project by George Nicolae with a design from FrontEnd Mentor."
          />
        </Head>
        <body className="bg-background">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
