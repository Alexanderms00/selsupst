// import { useState } from 'react'

// const params = [
// 	{
// 		id: 0,
// 		name: 'Назначение',
// 	},
// 	{
// 		id: 1,
// 		name: 'Длина',
// 	},
// ]

function App() {
	// const [model, setModel] = useState([
	// 	{
	// 		paramId: 0,
	// 		value: 'повседневное',
	// 	},
	// 	{
	// 		paramId: 1,
	// 		value: 'макси',
	// 	},
	// ])
	return (
		<>
			{/* <div>
				{params.map(item => {
					return (
						<div key={item.id}>
							<span>{item.name}:</span>
							<span>
								{model.map(it => {
									if (item.id === it.paramId) {
										return (
											<input
												key={it.paramId}
												value={it.value}
												onChange={e =>
													setModel(prevState =>
														prevState.map(i =>
															i.paramId === it.paramId
                              ? { ...i, value: e.target.value }
                              : i
														)
													)
												}
											/>
										)
									}
									return 
								})}
							</span>
							<br />
						</div>
					)
				})}
			</div> */}
		</>
	)
}

export default App
