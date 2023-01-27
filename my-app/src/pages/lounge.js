import React from "react";

export default function About() {
    return (
        <main>
        <div id="table-nav">
            <div id="filters">
                <nav>
                    <ul>
                        <details open>
                            <summary>Table Filters</summary>
                            <li>Current Bets</li>
                            <li>Active Bets</li>
                            <li>Winning Bets</li>
                            <li>Losing Bets</li>
                        </details>
                    </ul>
                </nav>
            </div>
            <div id="statistics">
                <nav>
                    <ul>
                        <details open>
                            <summary>Statistics</summary>
                            <li>Matches</li>
                            <li>Gains</li>
                            <li>Losses</li>
                            <li>To Date</li>
                        </details>
                    </ul>
                </nav>
            </div>
        </div>
        <div id="user-table">
            <table>
                <caption>Betting History</caption>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Match</th>
                        <th>Amount</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
        <div id="bet-actions">
            <h4>Bet Options</h4>
            <div id="buttons">
                <button>New Bet</button>
                <button>View Bet</button>
                <button>Edit Bet</button>
                <button>Cancel Bet</button>
            </div>

        </div>
    </main>
    )
}