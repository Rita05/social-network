import { useState, MouseEvent } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { action } from '@storybook/addon-actions'

//components
import { Button, ButtonPropsType } from '../../../../elements/ui/button/Button';

const meta: Meta<typeof Button> = {
	title: 'UI/Button Story',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		onClick: { action: 'clicked' },
		isDisabled: { control: 'boolean' },
		children: { control: 'text' },
	},

	args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonStory: Story = (args: ButtonPropsType) => {
	return <Button {...args} />
}

ButtonStory.args = {
	className: '',
	children: 'Button',
	disabled: false
}

export const DisabledButtonStory: Story = {
	args: {
		children: 'Button',
		isDisabled: true
	}
}

export const ClickedButtonStory: Story = {
	args: {
		children: 'Button',
		isDisabled: false,
		onClick: action('clicked Button')
	}
}

export const ChangeButtonStyle: Story = {
	render: (args: ButtonPropsType) => {
		const { onClick } = args;

		const [color, setBorderColor] = useState('black');

		const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
			setBorderColor(prevColor => (prevColor === 'black' ? '#4848cb' : 'black'));
			onClick && onClick(event);
		}

		return (
			<Button
				{...args}
				onClick={handleClick}
				style={{ border: `2px solid ${color}`, borderRadius: '6px', backgroundColor: '#fff', height: '30px'}}
			>
				{'Изменить цвет кнопки'}
			</Button>
		)
	}
}


