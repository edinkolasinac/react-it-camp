

import JSONDATA from './MOCK_DATA.json'
function App2() {
    return (
        <div>
            <input placeholder="Search..."  ></input>
            {JSONDATA.map((val, key) => {
                return (
                    <p>{val.first_name}</p>
                )

            })}
            )



        </div>
    )
}


export default App2