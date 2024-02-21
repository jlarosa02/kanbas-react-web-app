import JS from "./JavaScript";
import PathParameters from "./Routing/PathParameters";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight";
import TodoList from "./Todo/TodoList";
import Add from "./Add";

function Assignment3() {
    return (
        <div className="container">
            <h1>Assignment 3</h1>
            <ConditionalOutput />
            <Styles />
            <Classes />
            <PathParameters/>
            <JS/>
            <Highlight>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
            vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
            </Highlight>
            <Add a={3} b={4} />
            <TodoList />
        </div>
    );
}

export default Assignment3;