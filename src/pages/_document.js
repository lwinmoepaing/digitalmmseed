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
            content="Digital Myanmar Farming"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
          <link rel="preload" as="font" href="/fonts/GT-Walsheim-Pro-Regular.woff" type="font/woff2" crossOrigin="anonymous" />
          <link href="/font.css" rel="stylesheet" />
          <link
            rel="stylesheet"
            href="/css/ngprogress.css"
          />
          <link
            rel="stylesheet"
            href="/css/carousel.css"
          />
          <link href="https://fonts.googleapis.com/css?family=Padauk&display=swap" rel="stylesheet" />

          <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet" />
			
					

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

						.font-mm {
							font-family: 'Padauk';
							font-weight: bold;
							line-height: 1.7em;
						}

						.font-en {
							font-family: 'GTWalsheimProRegular';
							line-height: 1.5em;
						}
					`}
        </style>
      </html>
    )
  }
}

export default AppDocument
