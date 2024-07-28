import MyComponents from "./MyComponents";
import Events from "./Challenge";

const FirstComponent = () => {
    // template expression é um forma de executar JS dentro do JSX, usando as {}
    return(
        <div>
            <MyComponents/>
            <Events />
        </div>
    )
}

export default FirstComponent;