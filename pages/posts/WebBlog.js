import Link from 'next/link';
import Head from 'next/head';

export default function WebBlog({ allPostsData }) {
    return (
        <>
            <Head>
                <title>Web Blog</title>
            </Head>
                <center><h1>Web Blog</h1></center>
                <center><h2>8/28 - 9/3</h2></center>
                <center><p>Project proposal phase. Decided to create a portfolio website from scratch.</p></center>
                <center><h2>9/4 - 9/10</h2></center>
                <center><p>Planning phase. Figuring out how I want the website to look and what needs to be included.</p></center>
                <center><h2>9/18 - 10/1</h2></center>
                <center><p> Started the NextJS website tutorial and began learning the basics of creating a website. 
                    In this phase I created the full website the tutorial goes through and then took the lessons I learned from the tutorial to start the final product.
                    I got the bare bones of the home page set and started the first linked page (projects page)</p></center>
                <center><h2>10/2 - 12/10</h2></center>
                <center><p>In this final phase I linked in this Web Blog page and the Reviews page. I looked through tutorials on YouTube and via Google for CSS tips which I still need to study.
                    The main goal in this phase was to have a working website with a navigation bar and a few different pages.</p></center>
        </>
    );
}