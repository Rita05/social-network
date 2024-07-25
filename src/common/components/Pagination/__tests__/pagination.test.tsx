import { render } from '@testing-library/react';
import React from 'react';

//components
import { Pagination } from '../Pagination';

describe('Pagination component tests', () => {
	test("pages count is 11 but should be show only 10", () => {
		const { container } = render(
			<Pagination
				totalPages={11}
				pageSize={1}
				portionSize={10}
				currentPage={1}
				portionNumber={1}
				onChange={() => { }}
				handleChangePortionNumber={() => { }}
			/>);

		const buttons = Array.from(container.querySelectorAll('button'));
		const pageButtons = buttons.slice(1, -1);

		expect(pageButtons.length).toBe(10);
	})

	test("if pages count is more than 10 button NEXT should be present", () => {
		const { container } = render(
			<Pagination
				totalPages={11}
				pageSize={1}
				portionSize={10}
				currentPage={1}
				portionNumber={1}
				onChange={() => { }}
				handleChangePortionNumber={() => { }}
			/>
		);

		const buttons = container.querySelectorAll('button');
		const nextButton = buttons[buttons.length - 1];

		expect(nextButton).toBeInTheDocument();
	})
})
