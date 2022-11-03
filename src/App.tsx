import Header from "./Header"
import "./style.css"
import Review from "./Review"

function App (): JSX.Element{
    return(
    <div>
    <div className = "a">
        <Header />
    </div>
    <div>
       <Review />
    </div>
    </div>
    )
}

export default App;