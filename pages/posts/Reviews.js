import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

export default function Reviews({ allPostsData }) {
    return (
        <>
            <Head>
                <title>Reviews</title>
            </Head>
                <center><h1>Reviews</h1></center>
                 <center><h2>
                    the Legend of Zelda: Ocarina of Time
                </h2></center>
                <center><Image
                priority
                src="/images/OOT.jpg"
                height={263}
                width={378}
                alt=""
                /></center>
                <center><p>This is the game that I spent the most time playing as a kid. I spent hours exploring the map and solving the puzzles. The music helped build the world by giving every new area of the map its own atmosphere.
                    the idea that the player has to learn and play different songs along the way to teleport to different areas was so cool to me. I didn't ever want to put down the controller.</p></center>

                <center><h2>
                    Wolfmother @ the Fillmore Detroit. 6.30.07
                </h2></center>

                <center><iframe width="560" height="315" src="https://www.youtube.com/embed/J1wcLKR482w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
                <center><p>This show was the first live show I ever saw. This show is what made me want to be in a band and it was around this time that my friend gifted me the entire Led Zeppelin discography and I went on a 4 year binge of their music. Wolfmother even covered Communication Breakdown. My best friend Kyle and his
                    brother Stevie took me to this show and it's a show I'll never forget. My ears were ringing for two days. It turns out this was also the last show Wolfmother played as the original 3-piece lineup. 
                    </p></center>

                    <center><h2>
                    Scott Pilgrim vs. the World
                    </h2></center>
                    <center><iframe width="560" height="315" src="https://www.youtube.com/embed/7wd5KEaOtm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p>It's hard to choose a favorite movie but Scott Pilgrim vs. the World is up there in my number 1 spot tied with Shaun of the Dead. Both movies were directed by Edgar Wright and both movies are packed with action, good music, and quick cuts full of humor.
                        Scott Pilgrim does a really good job of aligning with the original comic books which are also very worth the read if you're into music and video games.</p></center>
        </>
    );
}