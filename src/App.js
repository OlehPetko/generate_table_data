import './App.css';
import {useState} from "react";
import {nanoid} from "nanoid";

function App() {
    const initialData = [
        [{id: nanoid()}, {id: nanoid()}],
        [{id: nanoid()}, {id: nanoid()}],
        [{id: nanoid()}, {id: nanoid()}],
        [{id: nanoid()}, {id: nanoid()}],
    ]
    const [columns, setColumns] = useState(1)
    const [row, setRow] = useState(1)
    const [tableData, setTableData] = useState(initialData)
    const minusCol = () => {
        if (columns > 1) {
            setColumns(columns - 1)
        }
    }
    const minusRow = () => {
        if (row > 1) {
            setRow(row - 1)
        }
    }
    return (
        <div className="App">
            <button onClick={() => setColumns(columns + 1)}>plus columns</button>
            {columns}
            <button onClick={minusCol}>minus columns</button>
            <hr/>
            <button onClick={() => setRow(row + 1)}>plus row</button>
            {row}
            <button onClick={minusRow}>minus row</button>
            <hr/>
            <table border={1}>
                <tbody>
                {tableData.map((row, index) =>
                <tr key={index}>
                    {row.map(col =>
                    <td key={col.id}>
                        {col.id}
                    </td>
                    )}
                </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}

export default App;
