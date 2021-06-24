import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default class CustomDocument extends Document {
	render(): JSX.Element {
		return (
			<Html lang="tr">
				<Head>
					<meta charSet="utf-8" />
					<meta name="HandheldFriendly" content="true" />
					<meta name="robots" content="INDEX, FOLLOW" />
					<meta name="copyright" content="Barış DEMİRCİ" />
					<meta name="theme-color" content="#ffa33b" />
					<meta
						name="author"
						content="Barış DEMİRCİ, demirci.baris38@gmail.com"
					/>
					<meta
						name="description"
						content="Nasıl efektif olarak soru soracağınızı öğrenin. Gereksiz uzatmalara ve prosedürlere geçerek cevabınıza hızlıca ulaşın."
					/>
					<meta name="og:title" content="Nasıl Soru Sorulur" />
					<meta
						name="og:site_name"
						content="Nasıl Soru Sorulur"
						title="title"
					/>
					<meta
						name="og:url"
						content="https://barbarbar338.fly.dev/"
					/>
					<meta
						name="keywords"
						content="nasıl, soru, sorulur, sormak, efektif, gereksiz, uzatma, prosedür"
					/>
					<meta name="og:image" content="favicon.svg" />
					<meta name="twitter:image" content="favicon.svg" />
					<link rel="icon" href="favicon.svg" />
					<link
						rel="canonical"
						href="https://barbarbar338.fly.dev/"
					/>
				</Head>
				<body className="select-none">
					<Main />
					<Script src="https://cdn.polyfill.io/v3/polyfill.min.js" />
					<NextScript />
				</body>
			</Html>
		);
	}
}
