import React from 'react'

class HistoryList extends React.Component {
  render() {
    return (
      <ul id="history-list">
        <li className="history-list-item">
          <div className="info-box">
            <p className="info-date">2007 | 2008</p>
            <h2 className="info-title">Defense of the Ancients</h2>
            <p className="info-subtitle">Eul | Icefrog</p>
            <p className="info-blurb">The birth of <span className="bold">TRUE MOBA</span> from a Warcraft III custom map</p>
            <div className="info-image">
              <img src="/images/timeline/dota-allstars.png" alt="Defense of the Ancients" />
            </div>
          </div>
          <div className="description-box">
            <p>One of the most popular custom maps in Warcraft III: Reign of Chaos is DotA (Defense of the Ancients).</p>
            <p>Although there were a lot of custom maps where you play as one hero, they were never as fun as a game of DotA with your friends.</p>
            <p>Back then, I never really "explored" the game enough to understand how it worked and how complicated it was. I guess I just never bothered to read.</p>
            <p>
              As time passed, a small community of OCE players showed up in Garena and decided to play online. 
              Of course I never really won and it may sound like an excuse, but the servers weren't that stable so a lot of the players would disconnect in the middle of the game without being able to reconnect.
            </p>
            <p>To briefly explain how complex that game was, the amount of possibilities with different hero and item combinations were limitless, which meant that any player could learn something just from playing a game.</p>
            <p>Unlike the current games these days where you have a <span className="bold">META</span> that diminishes the majority of options the players/teams can make, the game can only be said as endless possibilities.</p>
            <p>In the end of the game's life, there were 110 heroes available to play and amongst all, Earthshaker - Raigor Stonehoof was my pick.</p>
          </div>
        </li>
        <li className="history-list-item">
          <div className="info-box">
            <p className="info-date">2005 | 2006</p>
            <h2 className="info-title">Maplestory</h2>
            <p className="info-subtitle">Nexon | Wizet</p>
            <p className="info-blurb">Free-to-play 2D side-scrolling MMORPG</p>
            <div className="info-image">
              <img src="/images/timeline/maplestory.png" alt="Maplestory" />
            </div>
          </div>
          <div className="description-box">
            <p>Maplestory is probably a game that doesn't really need an explanation or review as it's a game that most people would have tried at least once during their childhood.</p>
            <p>The game itself has a very friendly atmosphere, the art style and music has an appealing feeling to it (even now it's still great) and lastly the gameplay was fun and simple.</p>
            <p>Although it was a MMORPG, I never really got into power leveling my character but more so enjoyed the actual world and the community that I was part of.</p>
            <p>There definitely was a "phase" for everyone where they would get stuck into the game and even create fan artwork and animations of their own, like myself.</p>
            <p>Before all the new characters were released the game was actually considered "pretty hard" as the levelling was incredibly slow and had to grind like a maniac just like every other Korean MMORPG.</p>
            <p>Maplestory was definitely recognised as a great game, however as more pay-to-win and easier content got released the game hit a downfall.</p>
            <p>So many years have passed since I played, but my favourite classes are <span id="battle-mage">Battle Mage</span> and <span id="dawn-warrior">Dawn Warrior</span>.</p>
          </div>
        </li>
        <li className="history-list-item">
          <div className="info-box">
            <p className="info-date">2003</p>
            <h2 className="info-title">StarCraft: Brood War</h2>
            <p className="info-subtitle">Blizzard</p>
            <p className="info-blurb">The father of real-time strategy, the video game that revolutionised the RTS genre</p>
            <div className="info-image">
              <img src="/images/timeline/starcraft.png" alt="Starcraft" />
            </div>
          </div>
          <div className="description-box">
            <p>Starcraft was one of the very first games I have ever played as a kid.</p>
            <p>Being a game that was developed back in the 1990s, the graphics and the overall quality of the game was outstanding.</p>
            <p>
              The game offered a pretty lengthy single-player campaign which included the opportunity to play all three races, of course I ended up not completing the campaign for all three as I only favoured the almighty Terran<br />
              (The almighty part is indeed my own opinion).
            </p>
            <p>In the beginning, I only had one computer available between the whole family, so I never really was able to experience the multiplayer (no Battle.net account) and LAN side of the game, and I continued to keep playing against bots AKA computers.</p>
            <p>Eventually I got into multiplayer (LAN) and continuously battled my brother, however sometimes playing the game normally wasn't enough which then made us explore the custom map (AKA use map) side of Starcraft.</p>
            <p>The amount of player created custom maps available online were incredible, they all had different styles and mechanics to win the map. Another aspect of the custom maps were that the more players you had the more fun it would be.</p>
            <p>Last but not least, Terran will always be the master race.</p>
          </div>
        </li>
      </ul>
    )
  }
}

export default HistoryList
