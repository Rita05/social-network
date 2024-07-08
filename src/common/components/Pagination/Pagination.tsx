import React, { useMemo, useState } from 'react';
import styled from 'styled-components';

//icons 
import leftArrow from '../../../assets/icons/left-arrow-pagination.svg';
import rightArrow from '../../../assets/icons/right-arrow-pagination.svg';

//styles
import { Ellipsis, PageNumber, PaginationButton, PaginationContainer, PaginationDirectionIcon } from './Pagination.styled';


// interface IPaginationProps {
// 	pages: Array<number>
// 	currentPage: number
// 	onChange: (page: number) => void
// }


// export const Pagination = (props: IPaginationProps) => {
// 	const {
// 		pages,
// 		currentPage,
// 		onChange
// 	} = props;


// 	return (
// 		<div>
// 			{pages.map((page) => {

// 				const handleChangePage = () => onChange(page)

// 				return (
// 					<SelectedPage
// 						active={page === currentPage}
// 						onClick={handleChangePage}
// 					>
// 						{page}
// 					</SelectedPage>
// 				)
// 			})}
// 		</div>
// 	)
// }




interface IPaginationProps {
	pageSize: number
	currentPage: number
	portionSize: number
	totalPages: number
	onChange: (page: number) => void
}

const range = (start: number, end: number) => {
	let length = end - start + 1;
	return Array.from({ length }, (_, idx) => idx + start);
};

export const DOTS = '...';

export const Pagination = (props: IPaginationProps) => {
	const {
		pageSize,
		totalPages,
		currentPage,
		portionSize,
		onChange
	} = props;

	const [portionNumber, setPortionNumber] = useState<number>(1);

	let pages: Array<number> = [];

	const pagesCount = Math.ceil(totalPages / pageSize);
	pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

	const portionCount = Math.ceil(pagesCount / portionSize);
	const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	const rightPortionPageNumber = portionNumber * portionSize;

	// const isFirstPage = currentPage === 1
	// const isLastPage = currentPage === totalPages

	const isPrevButton = currentPage > 1;
	const isNextButton = portionNumber < portionCount;

	// const renderPageNumbers = () => {
	// 	const pageNumbers = [];
	// 	for (let i = 1; i <= pages.length; i++) {
	// 		if (i === 1 || i === pages.length || (i >= currentPage - 1 && i <= currentPage + 1)) {
	// 			pageNumbers.push(
	// 				<PageNumber key={i} active={i === currentPage} onClick={() => onChange(i)}>
	// 					{i}
	// 				</PageNumber>
	// 			);
	// 		} else if (i === currentPage - 2 || i === currentPage + 2) {
	// 			pageNumbers.push(<Ellipsis key={i}>...</Ellipsis>);
	// 		}
	// 	}
	// 	return pageNumbers;
	// };



	// const renderPageNumbers = () => {
	// 	return pages.map((page, index) => {
	// 		if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
	// 			return (
	// 				<PageNumber
	// 					key={page}
	// 					active={page === currentPage}
	// 					onClick={handleChangePage(page)}
	// 				>
	// 					{page}
	// 				</PageNumber>
	// 			);
	// 		} else if (page === currentPage - 2 || page === currentPage + 2) {
	// 			return <Ellipsis key={index}>...</Ellipsis>;
	// 		}
	// 		return null;
	// 	});
	// };


	const handleChangePage = (page: number) => {
		onChange(page)
	}

	// const renderPageNumbers = () => {
	// 	return pages
	// 		.filter((page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
	// 		.map((page) => {
	// 			return (
	// 				<PageNumber key={page} active={page === currentPage} onClick={() => handleChangePage(page)}>
	// 					{page}
	// 				</PageNumber>
	// 			)
	// 		})
	// };

	const paginationRange = useMemo(() => {
		const totalPageNumbers = portionSize;
		const portionNumber = Math.ceil(currentPage / portionSize);
		const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
		const rightPortionPageNumber = Math.min(portionNumber * portionSize, totalPages);

		const leftSiblingIndex = Math.max(currentPage - 1, leftPortionPageNumber);
		const rightSiblingIndex = Math.min(currentPage + 1, rightPortionPageNumber);

		const shouldShowLeftDots = leftSiblingIndex > leftPortionPageNumber;
		const shouldShowRightDots = rightSiblingIndex < rightPortionPageNumber;

		let result = [];

		if (shouldShowLeftDots) {
			result.push('...');
		}

		result.push(...range(leftPortionPageNumber, rightPortionPageNumber));

		if (shouldShowRightDots) {
			result.push('...');
		}

		return result;
	}, [totalPages, currentPage, portionSize]);

	const renderPageNumbers = () => {
		return paginationRange
			// .filter((page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
			.map((page, index) => {
				if (page === '...') {
					return <Ellipsis key={index}>{page}</Ellipsis>;
				}

				return (
					<PageNumber key={page} active={page === currentPage} onClick={() => handleChangePage(Number(page))}>
						{page}
					</PageNumber>
				);
			});
	};

	const handleChangePrevPage = () => {
		handleChangePage(currentPage - 1);
		if (currentPage === leftPortionPageNumber && currentPage !== 1) {
			setPortionNumber(portionNumber - 1);
		}
	}

	const handleChangeNextPage = () => {
		handleChangePage(currentPage + 1);

		if (currentPage === rightPortionPageNumber) {
			setPortionNumber(portionNumber + 1);
		}
	}

	return (
		<PaginationContainer>
			<PaginationButton onClick={handleChangePrevPage} disabled={!isPrevButton}>
				<PaginationDirectionIcon src={leftArrow} />
			</PaginationButton>
			{renderPageNumbers()}
			<PaginationButton onClick={handleChangeNextPage} disabled={!isNextButton}>
				<PaginationDirectionIcon src={rightArrow} />
			</PaginationButton>
		</PaginationContainer>
	);
};


