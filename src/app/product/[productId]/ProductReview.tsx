"use client";
import { addReview } from "@/api/review";
import { experimental_useOptimistic as useOptimistic } from "react";

export const ProductReview = ({
	productId,
}: {
	productId: string;
}) => {
	const addedForm = false;
	const [optimisticQuantity, setOptimisticQuantity] =
		useOptimistic(addedForm);

	return (
		<div className="max-w flex justify-center">
			<div className="center flex w-full max-w-md flex-col justify-center border">
				<p className="text-center">Dodaj opinie</p>
				<form
					action={async () => {
						await addReview(productId);
						setOptimisticQuantity(true);
					}}
					data-testid="add-review-form"
					className="flex flex-col items-center gap-5"
				>
					<div className="flex w-full justify-around ">
						<label htmlFor="headline" className="w-1/3">
							Tytuł
						</label>
						<input type="text" name="headline" className="w-2/3" />
					</div>
					<div className="flex w-full justify-around">
						<label htmlFor="content" className="w-1/3">
							Treść
						</label>
						<input type="text" name="content" className="w-2/3" />
					</div>
					<div className="flex w-full justify-around">
						<label htmlFor="rating" className="w-1/3">
							Ocena
						</label>
						<input type="text" name="rating" className="w-2/3" />
					</div>
					<div className="flex w-full justify-around">
						<label htmlFor="name" className="w-1/3">
							Imię
						</label>
						<input type="text" name="name" className="w-2/3" />
					</div>
					<div className="flex w-full justify-around">
						<label htmlFor="email" className="w-1/3">
							Email
						</label>
						<input type="email" name="email" className="w-2/3" />
					</div>
					<button className="w-1/2 border border-black bg-white p-2 text-black transition-all hover:border-white hover:bg-black hover:text-white">
						Dodaj
					</button>
				</form>
				{optimisticQuantity && <p>Dodano opinie</p>}
			</div>
		</div>
	);
};
