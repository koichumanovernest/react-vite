import { useEffect, useState } from "react";

const App = () => {
	const [data, setData] = useState([]);
	const [input, setInput] = useState("10");
  // console.log(input);

	const getData = async () => {
		try {
			const response = await fetch(
				`https://rickandmortyapi.com/api/character`
			);
			const responsData = await response.json();
      const filterData = await responsData.results.filter((item) =>item.id <= input)
      // console.log(filterData);
			// console.log(responsData.results);

			setData(filterData);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getData();
	}, []);
	return (
		<div>
			<input
				type="number"
				
				onChange={(e) => setInput(e.target.value)}
			/>
      <button onClick={()=>{
      getData(data)
      }}>Add</button>
			{data.map((item) => (
				<div key={item.id}>
					<h3>{item.name}</h3>
					<p>{item.status}</p>
          <img src={item.image} alt="" style={{width: 200}}/>
				</div>
			))}
      
		</div>
	);
};

export default App;
