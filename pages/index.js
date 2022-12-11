import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';
import { getSortedPostsData } from '../lib/posts';

const name = 'Matt Riesterer';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header>
        <>
          <center><Image
            priority
            src="/images/MandL2.jpg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt=""
          /></center>
          <center><h1 className={utilStyles.heading2X1}>{name}</h1></center>
        </>
      </header>
      <section className={utilStyles.headingMd}>
        <p>Hi my name is Matt and I'm a software engineer developing skills to become a game developer/designer.
        I started learning how to program by taking the Harvard CS50 course online in late 2020. After that I chose to work towards an associates degree in software engineering at Oakland Community College by signing up for classes in August 2021</p>
        
        <p>I graduated from Oakland University in 2018 with a Bachelor's Degree in English. I live in Metro-Detroit with my partner Jess and our dog Lucy.</p>

        <p>I built this website for easy access to my <Link href="/posts/Projects">projects,</Link><Link href="/posts/WebBlog"> web blog,</Link> and my music/tv/game <Link href="/posts/Reviews">reviews!</Link></p>

        <p><center>Thanks for stopping by! :)</center></p>
      </section>
    </div>
  );
}