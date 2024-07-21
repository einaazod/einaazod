import './index.css';
import {Tile} from '../components/tile';
export function Home() {
    return (
        <div className="home flex home-grid-container">
            <div className="home-grid-col-1" style={{margin: "auto 0"}}>

                <h1 className="home-title">einaazod</h1>
                <Tile
                    title={"About Me"}
                    titleClassName={"purple-title"}
                    image={"self.svg"}
                    url={"/aboutme"}
                    />
            </div>
            <div className="home-grid-col-2 flex container">
                <Tile
                    title={"Portfolio"}
                    titleClassName={"blue-title"}
                    image={"portfolio.svg"}
                    url={"/portfolio"}
                    />
                <Tile
                    title={"Tech Stack"}
                    titleClassName={"purple-title"}
                    image={"stack.svg"}
                    url={"/tech-stack"}
                    />
                <Tile
                    title={"Soft Skills"}
                    titleClassName={"blue-title"}
                    image={"soft-skills.svg"}
                    url={"/soft-skills"}
                    />
                
                <Tile
                    title={"Education"}
                    titleClassName={"blue-title"}
                    image={"education.svg"}
                    url={"/education"}
                    />
                <Tile
                    title={"Certifications"}
                    titleClassName={"purple-title"} 
                    image={"certification.svg"}
                    url={"/certifications"}
                    />
                <Tile
                    title={"Contact"}
                    titleClassName={"blue-title"}
                    image={"contact.svg"}
                    url={"/contact"}
                    />
            </div>
            
        </div>
    );
}