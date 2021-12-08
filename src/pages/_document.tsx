import Document, {
    DocumentContext,
    DocumentInitialProps,
    Head,
    Html,
    Main,
    NextScript,
} from "next/document";


class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);

        return initialProps;
    }

    render(): JSX.Element {
        return (
            <Html lang="ja">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="theme-color" content="#ffffff" />
                    <meta
                        name="description"
                        content="Logical Thinking Skills Learning App"
                    />
                    <link rel="icon" href="/favicon.ico" />

                    {/* Google Fonts */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap" rel="stylesheet" />
                </Head>

                <body className="bg-gray-100 font-opensans text-gray-600">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;