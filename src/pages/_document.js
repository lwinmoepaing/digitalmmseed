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
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>

        {/* Styling Global For Whole Universal Body */}
        <style global jsx>
          {`
						body {
							/* background: red; */
						}
					`}
        </style>
      </html>
    )
  }
}

export default AppDocument
