import React, { ChangeEvent, ReactNode } from 'react';
import { StyledInput, StyledLabel } from './UploadInput.styled';

type UploadInputPropsType = {
	/**
	 * Можно ли добавлять несколько файлов 
	 ** true - можно добавить _несколько_ файлов
	 ** false - можно добавить только _один_ файл
	 */
	multiple?: boolean
	children?: ReactNode
	onChange: (files: UploadInputFile | UploadInputFile[]) => void
}
export type UploadInputFile = { id: string | number } & File

const getFileWithId = (file: File) => Object.assign(file, { id: Math.random() })

const UploadInput = (props: UploadInputPropsType) => {
	const { multiple, children, onChange } = props;

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		const eventFiles = e.currentTarget.files;

		if (eventFiles) {
			try {
				if (multiple) {
					const files = Object.values(eventFiles).map(getFileWithId)
					onChange && onChange(files as UploadInputFile & UploadInputFile[]);
				} else {
					const file = eventFiles[0];

					if (onChange && file) {
						onChange(getFileWithId(file));
					}
				}

			} catch (e) {
				// eslint-disable-next-line no-console
				console.error(e)
			}
		}
	};

	return (
		<div>
			<StyledInput type="file" onChange={handleFileChange} accept="image/*" id="fileInput" />
			<StyledLabel htmlFor="fileInput">
				{children}
			</StyledLabel>
		</div>
	);
};

export default UploadInput;
