import Head from "next/head"

const SEO = ({ ...props }) => <Head>
    <title>{props.title}</title>
    <meta name="description" content={props.description} />
    <link rel="icon" href={props.href} />
</Head>

export default SEO