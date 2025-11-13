import Form from "./Form";
import Tasks from "./Tasks";

const tasks = [
  {id:1, content: "przejsc na react", done: false },
  {id:2, content: "zkesc obiad", done: true },
];

const hideDoneTask = true;

function App() {
  return (
    <div className="main">
        <header>
            <h1> Lista zadań</h1>
        </header>

        <section className="section">
            <h2 className="section__header"> Dodaj zadanie</h2>
            <Form />
        </section>

        <section className="section">
            <header className="section__header">
                <h3 className="section__header--height"> Lista zadań</h3>
                <div className=""></div>
            </header>
                
            <Tasks tasks={tasks} hideDoneTask={hideDoneTask} />
        </section>
    </div>
  );
}

export default App;
