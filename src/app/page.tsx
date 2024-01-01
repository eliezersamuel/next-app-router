import { Children } from "react";

async function getCars() {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	return ["audi", "ford", "bmw", "renault"];
}
export default async function Home() {
	const cars = await getCars();

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			Hello world!
			{Children.toArray(cars.map((car) => <li>{car}</li>))}
		</main>
	);
}
