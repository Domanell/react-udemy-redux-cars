import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../store/slices/carsSlice';

function CarList() {
	const dispatch = useDispatch();

	const { cars, name } = useSelector(({ cars: { data, searchTerm }, form }) => {
		const filteredCars = data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()));

		return { cars: filteredCars, name: form.name };
	});

	const handleRemoveCar = (id) => {
		dispatch(removeCar(id));
	};

	const renderedCars = cars.map((car) => {
		// Decide if car should be bold
		const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

		return (
			<div key={car.id} className={`panel ${bold && 'bold'}`}>
				<p>
					{car.name} - ${car.cost}
				</p>
				<button
					className="button is-danger"
					onClick={() => {
						handleRemoveCar(car.id);
					}}
				>
					Delete
				</button>
			</div>
		);
	});

	return (
		<div className="car-list">
			{renderedCars}
			<hr />
		</div>
	);
}

export default CarList;
