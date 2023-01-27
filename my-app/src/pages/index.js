import React from 'react'

export default function Home() {
    return (

            <main>
                <div id="informational">
                    <article id="matches">
                        <h2>Upcoming Matches</h2>
                        <div class="container">
                            Content
                        </div>
                    </article>
                    <article id="news">
                        <h2>Sports News</h2>
                        <div class="container">
                            Content
                        </div>
                    </article>
                </div>
                <aside id="home-feed">
                    <h2>Live Updates</h2>
                    <div class="container" id="live-updates">
                        <ul>
                            <li>No current live games</li>
                        </ul>
                    </div>
                </aside>
            </main>

    )
}