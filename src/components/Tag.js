import about from "../json/about.json"

export default function Tagline() {
    return(
    <div className="tagline">
        <h3>--{about.tagline}</h3>
    </div>)
}