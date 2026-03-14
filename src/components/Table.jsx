import { useState } from "react"
import Mat from './Mat.jsx'

function Table() {
    const [points, setPoints] = useState(0);

    if (points > 100) {
        setPoints(0);
    }

    return(
        <>
            <div>Points: {points}</div>
            <Mat></Mat>
        </>
    )

}

export default Table;