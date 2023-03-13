
import About from "../json/about.json"

export default function ContactAbout() {
    return(
    <div>
        <div class="contactmecontainer">
        <br></br>
        <br></br>
        <h1> How to Contact Me</h1>
        <br></br>
        <br></br>

        <a href="mailto:swirth9092@gmail.com?subject = Feedback&body = Message">
        <img src="https://i.imgur.com/MkIuGkO.jpg" alt="email" class="contactlink"/>
        </a>

        <a href="{About.linkedinlink}" target="_blank" rel="noreferrer">
        <img src="https://i.imgur.com/sf8fhKd.jpg" alt="linkedin" class="contactlink"/>
        </a>

        <br></br>
        <br></br>
        <br></br>
        </div>
        <div class="brandstatementcontainer">
            <div className="brandstatementsection">
                <br></br>
                <br></br>
                <center><h1>About Me</h1></center>
                <br></br>
                <br></br>
                <center><img src={About.imagehalfbody} class="aboutmeimage" 
                    alt="sue" ></img></center>
                <br></br>
                <br></br>
                {About.brandStatements.map((brandStatement) =>  (
                    <div className="brandstatement"> 

                        <p>{brandStatement} </p>
                        <br></br>
                    </div>
                        ))
                }
            </div>
        </div>
    </div>)
}