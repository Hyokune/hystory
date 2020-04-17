import React from 'react'

class HistoryList extends React.Component {
  render() {
    return (
      <ul id="history-list">
        <li className="history-list-item">
          <div className="info-box">
            <p className="info-date">2003</p>
            <h2 className="info-title">StarCraft: Brood War</h2>
            <p className="info-subtitle">Blizzard</p>
            <img src="/images/timeline/starcraft.png" />
            <p className="info-blurb">The father of real-time strategy, the video game that revolutionised the RTS genre</p>
          </div>
          <div className="description-box">
            <p>This is just a placeholder for some description.</p>
          </div>
        </li>
      </ul>
    )
  }
}

export default HistoryList
