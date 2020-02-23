import Document, { Head, NextScript, Main } from 'next/document'

class AppDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="robots" content="nofollow, noindex" />
          <meta
            name="description"
            content="Lwin Moe Paing | Pofolio"
          />
          <link href="/font.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Padauk&display=swap" rel="stylesheet" />
        </Head>

        <body>
          {/* <style dangerouslySetInnerHTML={{ __html: stylesheet }} /> */}
          <Main />
          <NextScript />
        </body>

        {/* Styling Global For Whole Universal Body */}
        <style global jsx>
          {`
						body {
							padding: 0;
							margin: 0;
							font-family: 'GTWalsheimProRegular';
						}
					`}
        </style>
      </html>
    )
  }
}

export default AppDocument
