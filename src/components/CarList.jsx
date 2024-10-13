import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../store/slices/carsSlice';

function CarList() {
	const dispatch = useDispatch();

	const cars = useSelector(({ cars: { data, searchTerm } }) => {
		return data.filter((car) => car.name.toLowerCase().includes(searchTerm));
	});

	const handleRemoveCar = (id) => {
		dispatch(removeCar(id));
	};

	const renderedCars = cars.map((car) => {
		return (
			<div key={car.id} className="panel">
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
