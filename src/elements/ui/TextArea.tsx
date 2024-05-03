import { ChangeEvent, forwardRef, useMemo, KeyboardEvent } from 'react'
import cls from 'classnames'

// types
import { ClassName, HtmlTextareaProps } from '../../types/html'

export type TextAreaVariant = 'default'
export const textareaVariantOptions: TextAreaVariant[] = ['default']

export interface ITextAreaProps extends Omit<HtmlTextareaProps, 'className' | 'ref' | 'value' | 'onChange'> {
	/**
	 * Классы стилей контейнера компонента
	 */
	className?: ClassName
	/**
	 * Название для id тэга textarea
	 */
	name: string
	/**
	 * Значение текста
	 */
	value?: string | null
	placeholder?: string
	/**
	 * Варианты стилей компонента
	 ** default
	 */
	variant?: TextAreaVariant
	/**
	 * Статус загрузки
	 ** true - есть загрузка, компонент задизейблен
	 ** false - нет загрузки, обычное поведение
	 */
	loading?: boolean
	/**
	 * Задизейблен ли компонент
	 ** true - задизейблен
	 ** false - ___не___ задизейблен
	 */
	disabled?: boolean
	/**
	 * Текст ошибки
	 */
	error?: string
	/**
	 * Хэндлер изменения текста
	 */
	onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,

	onKeyDown?: (e: KeyboardEvent<HTMLTextAreaElement>) => void
}

export const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaProps>((props, ref) => {
	const {
		name,
		value,
		placeholder,
		className,
		variant = 'default',
		loading,
		disabled,
		error,
		onChange,
		onKeyDown,
		onFocus,
		onBlur,
		...rest
	} = props

	const isVariant = Boolean(variant)
	const isError = Boolean(error)
	const isDisabled = disabled || loading

	const classes = useMemo(
		() => ({
			[`textarea-${variant}`]: isVariant,
			['textarea__error']: isError,
			['textarea__disabled']: disabled,
			['textarea__loading']: loading
		}),
		[variant, isVariant, disabled, loading, isError]
	)

	return (
		<textarea
			aria-errormessage={error}
			aria-invalid={!!error}
			className={cls('textarea cursor-text', classes, className)}
			data-testid={`textarea-${name}`}
			disabled={isDisabled}
			id={name}
			name={name}
			placeholder={placeholder}
			ref={ref}
			tabIndex={1}
			value={value || ''}
			onBlur={onBlur}
			onChange={onChange}
			onFocus={onFocus}
			onKeyDown={onKeyDown}
			{...rest}
		/>
	)
})

