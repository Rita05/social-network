import React, { useEffect } from 'react';

//icons 
import leftArrow from '../../../assets/icons/left-arrow-pagination.svg';
import rightArrow from '../../../assets/icons/right-arrow-pagination.svg';

//styles
import { PageNumber, PaginationButton, PaginationContainer, PaginationDirectionIcon } from './Pagination.styled';


interface IPaginationProps {
	pageSize: number
	currentPage: number
	portionSize: number
	portionNumber: number
	totalPages: number
	onChange: (page: number) => void
	handleChangePortionNumber: (portionNumber: number) => void
}

export const Pagination = (props: IPaginationProps) => {
	const {
		pageSize,
		totalPages,
		currentPage,
		portionSize,
		portionNumber,
		onChange,
		handleChangePortionNumber
	} = props;

	let pages: Array<number> = [];

	const pagesCount = Math.ceil(totalPages / pageSize);
	pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

	const portionCount = Math.ceil(pagesCount / portionSize);
	const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	const rightPortionPageNumber = portionNumber * portionSize;

	const isFirstPage = portionNumber <= 1;
	const isLastPage = portionCount < portionNumber


	const handleChangePage = (page: number) => {
		onChange(page);
	}

	useEffect(() => {
		if (currentPage < leftPortionPageNumber || currentPage > rightPortionPageNumber) {
			handleChangePage(leftPortionPageNumber);
		}
	}, [portionNumber, currentPage]);

	const renderPageNumbers = () => {
		return pages
			.filter((page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
			.map((page, index) => {

				return (
					<PageNumber key={index} active={page === currentPage} onClick={() => handleChangePage(Number(page))}>
						{page}
					</PageNumber>
				);
			});
	};

	const handleChangePrevPage = () => {
		handleChangePortionNumber(portionNumber - 1);
	}

	const handleChangeNextPage = () => {
		handleChangePortionNumber(portionNumber + 1);
	}

	return (
		<PaginationContainer>
			<PaginationButton onClick={handleChangePrevPage} disabled={isFirstPage}>
				<PaginationDirectionIcon src={leftArrow} />
			</PaginationButton>
			{renderPageNumbers()}
			<PaginationButton onClick={handleChangeNextPage} disabled={isLastPage}>
				<PaginationDirectionIcon src={rightArrow} />
			</PaginationButton>
		</PaginationContainer>
	);
};


