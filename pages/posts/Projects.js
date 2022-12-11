import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

export default function Projects({ allPostsData }) {
    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>
            <center><h1>Projects</h1></center>

            <center><h3>!! I am still learning web development and I haven't yet figured out how to embed my games here but this page will eventually showcase interactive projects I work on with and without a group !!</h3></center>

            <center><h5>For creating games I have currently only worked within Unity. I've created a few 2D games as well as some 3D games. One of the first games I created was a simple rock, paper, scissors game. The player plays against the computer and selects one of the three options. When the player selects an option, the computer randomly generates it's own pick
                and the two choices slide in head to head. Below is a picture of the main choice table. Note the computer is a question mark and then the players three options are available to click at the bottom.
                </h5></center>
                <center><Image
                priority
                src="/images/RPS1.png"
                height={724}
                width={433}
                alt=""
                /></center>

                <center><h5>In this picture below, the player selects rock while the computer selects scissors. The player wins and the screen broadcasts the winning message.</h5></center>
                <center><Image
                priority
                src="/images/RPS2.png"
                height={724}
                width={433}
                alt=""
                /></center>

                <center><h5>In this picture below, the player and the computer picked paper resulting in a draw.</h5></center>
                <center><Image
                priority
                src="/images/RPS3.png"
                height={724}
                width={433}
                alt=""
                /></center>

                <center><h5>In this picture below, the player selected rock and the computer selected paper. Computer wins!</h5></center>
                <center><Image
                priority
                src="/images/RPS4.png"
                height={724}
                width={433}
                alt=""
                /></center>

                <center><h4>I've also created a 3rd person 3D game where the player runs around to collect orbs for energy, health, and magic. This game is a work in progress. I started this game to learn how to create objects a player can collect and also how to
                    open and close doors. I also learned basic character animation so this character model has running and jumping animations. I also started the basics of level design and using textures.</h4></center>
                    <center><Image
                    priority
                    src="/images/Game2.png"
                    height={388}
                    width={865}
                    alt=""
                /></center>

                <center><h5>In the picture below, there is a button on the wall the user can interact with to open the door besides them.</h5></center>
                <center><Image
                    priority
                    src="/images/Game2Door1.png"
                    height={388}
                    width={865}
                    alt=""
                /></center>

                <center><h5>In the picture below, the user has interacted with the button and now the door is open. The button changes colors to indicate it was pressed.</h5></center>
                <center><Image
                    priority
                    src="/images/Game2Door2.png"
                    height={388}
                    width={865}
                    alt=""
                /></center>

                <center><h5>In the picture below, I created a level with textures on the walls and for the background. I am also working on creating an enemy character that roams the level shooting out fire. Eventually I will make a maze puzzle game where the character
                    needs to collect enough orbs to move on without taking damage from the enemy.</h5></center>
                <center><Image
                    priority
                    src="/images/Game3.png"
                    height={388}
                    width={865}
                    alt=""
                /></center>
                

                

                    <center><p><h5>My schooling has been mainly remote due to covid and learning is a bit less hands on than I was expecting. Two classes where it seems I would have had 
                    more group projects to work on ended up being independent studies and it turned into a DIY for me and I have learned a lot. I'm looking to attend a Ludum Dare with my friends in 2023
                    and whatever we build there will most definitely go on this website.</h5></p></center>
        </>
    );
}