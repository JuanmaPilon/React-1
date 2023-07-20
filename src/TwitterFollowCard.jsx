import './App.css'

function TwitterFollowCard ({ UserName, name, isFollowing }) {
    const imgSrc = `https://unavatar.io/reddit/kikobeats${username}`

    return (
        <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img className="tw-followCard-img" alt='avatar de qcio' src={imgSrc}>
            </img>
            <div className="tw-followCard-div">
                <strong>{ name }</strong>
                <span className="tw-followCard-span">{ UserName }</span>
            </div>
        </header>
        <aside>
            <button className="tw-followCard-button">
                Follow me!
            </button>
        </aside>
    </article>
    )
}


export default TwitterFollowCard;