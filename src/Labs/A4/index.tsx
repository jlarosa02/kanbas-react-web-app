import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";

function Assignment4() {
    function sayHello() {
        alert("Hello");
      }
    
    return (
        <div className="container">
            <h1>Assignment 4</h1>
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello} />
        </div>
    );
}

export default Assignment4;