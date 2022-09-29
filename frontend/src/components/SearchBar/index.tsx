import './style.css'

function SearchBar() {
    return (

        <div className="search">
            <input id="search" type="text" placeholder="Buscar título..." autoFocus autoComplete='off' />
            <button type="submit" className="searchButton">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB7UlEQVRIS8WVQU7CUBCG32vpHm8AAU3c1cQad5REjDvhBuUGcgL1BOoJxBOAOwMksjRCYl2ZKAncQPZAx38a2mClr0QkdkPKe2+++f+ZN5Viw4/ccHwRC3i3SqYksrGhIKXMkBBpQeTi93WaStV3nx5GqyS3FIDgjibEFQKk44IQUW2737lOgvwADPaPGkLKsn+QqCk07c4jGs10fWx4non/TrHizAN38712UQX5BvjYPzqDHZz5GJBq/rnVXHaY7YPCR1aYpCQEvB2eZIzZ7MW3RcpKXPAAiGRsJMMQMdH1bFxNQsBC9nXIriZ5y+sDq3TLdkHFJepxsexMCAi9XyH7INDg4LiMmjS4Vvl+p6IGWKUhNmRUcqMBhqadnhnGJ9cMqrf+HeD76QlR3em166vUICg0fHZzvfaeUgE2X6ArzlV+RgOEZ4SIbYxom3IdwKAiuqKrUjHPvsF7oLoI1a5SAS8uXjRAKnGQeXC2NCOFvM71WrW4ZH6OCqvEl8fmA3zYI+8+NZ362WHImZrUTkmQg1d/TrH/2mRSzLrdcaKCYMOCkrjExoCjEcjGdDVVkKRxXUbhC6CY82xHCOjC8xv2nO+BZxiPKsjaH5wkyNoAVrYIiU7XPwEEEDSBE/0I/Rlg5TZVXa7frG1cwReb//kZ1bgO1QAAAABJRU5ErkJggg==" />
            </button>
        </div>
    )
}

export default SearchBar