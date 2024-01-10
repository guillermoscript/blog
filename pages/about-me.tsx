import Head from "next/head";
import Layout from "../components/blog/layout";

export default function AboutMePage() {
    return (
        <Layout>
            <Head>
                <title>About Me</title>
            <meta
                name="description"
                content={`A brief introduction to Guillermo Marin.`}
            />
            <meta property="og:image" content={'/assets/blog/authors/hackers.jpg'} />
            </Head>
            <div
                className="max-w-2xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0"
            >
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">About Me</h1>
                <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none text-center md:text-left"> Guillermo Marin 🚀👨‍💻</h2>
                <div
                    className="flex gap-3 items-end "
                >
                    <h3
                        className="text-xl md:text-2xl lg:text-4xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left"
                    >
                        Full Stack Developer
                    </h3>
                    <span
                        className="text-[9px] flex mb-12"
                    > (or whatever that means anyway lol)</span>

                </div>
                <p
                    className="text-lg mb-4"
                >Hello, World! 👋 I&#39;m Guillermo, your friendly developer, I like to copy &amp; paste from the web and now I want to share some of the code  I have done in my free time.</p>
                <h2
                    className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left"
                >🌟 What I like the most in the programming world is:</h2>
                <ul
                    className="text-lg mb-4"
                >
                    <li
                        className="text-lg mb-4"
                    >🔍 You need to live under rock to not like AI, I mean its now easier to copy & paste, what a time to be alive.</li>
                    <li
                        className="text-lg mb-4"
                    >🌐 Web 3.0 enthusiast, I really like web3 as a solution for the byzantine general problem, for the shit tokens and ponzi scams, nahhh not my thing.</li>
                    <li
                        className="text-lg mb-4"
                    >React and the idea to over complicate the simplest thing, like a blog nah just joking I like JSX its cool</li>
                    <li
                        className="text-lg mb-4"
                    >
                        Relational databases, the idea to generate a ERD is something that I really enjoy, more than building a query so yeah</li>
                    <li
                        className="text-lg mb-4"
                    >
                        the satisfaction of have something build out of just text, its weird to think about it but with text you can do all of this crazy things.</li>
                    <li
                        className="text-lg mb-4"
                    >because I'm a masochistic and i really enjoy the pain of not finding a solution and then to come up with a quick after talking with my friend about how frustrated I am about the issue</li>
                </ul>
                <h2
                    className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left"
                >🛠 Why I post ?</h2>
                <p
                    className="text-lg mb-4"
                >Just to share some of the knowledge i have acquire all this years, I'm grateful that most of the content is for free, and this is a way to give back to anyone that finds useful anything that I share, and if that brings some money {">"}:) im good too hahahaha, but for real if it wasn't for the internet i would be much dumber and I love the idea to give a little back.</p>

            </div>
        </Layout>
    )
}