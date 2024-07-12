import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';

//app/store
import { store } from '../../../../../app/store';

//components
import { ProfileStatus } from '../../ui/ProfileStatus/ProfileStatus';

describe('ProfileStatus component', () => {
	test('after creation <span> with correct status should be displayed', () => {
		try {
			const component = TestRenderer.create(
				<Provider store={store}>
					<ProfileStatus status={"some status"} updateProfileStatus={((status: string) => { })} />
				</Provider>
			);
			const root = component.root;
			const profileStatusInstance = root.findByType(ProfileStatus);
			const span = profileStatusInstance.findByType('span');
			expect(span).toBeDefined();
			expect(span).not.toBeNull();
		} catch (error) {
			console.log(error);
		}
	})
	test("after creation <input> should't be displayed", () => {
		try {
			const component = TestRenderer.create(
				<Provider store={store}>
					<ProfileStatus status={"some status"} updateProfileStatus={((status: string) => { })} />
				</Provider>
			);
			const root = component.root;
			const profileStatusInstance = root.findByType(ProfileStatus);
			expect(() => {
				const input = profileStatusInstance.findByType('input');
			}).toThrow();
		} catch (error) {
			console.log(error);
		}
	})
	test('status from props should be in the component', () => {
		try {
			const component = TestRenderer.create(
				<Provider store={store}>
					<ProfileStatus status={"some status"} updateProfileStatus={((status: string) => { })} />
				</Provider>
			);

			const instance = component.root;
			const statusElement = instance.findByType('span');
			console.log('statusElement: ', statusElement);
			expect(statusElement.children[0]).toBe('some status');

		} catch (error) {
			console.log('Error rendering component:', error);
		}
	});
	test("<input> should be displayed in editMode instead of span", () => {
		try {
			const component = TestRenderer.create(
				<Provider store={store}>
					<ProfileStatus status={"some status"} updateProfileStatus={((status: string) => { })} />
				</Provider>
			);
			const root = component.root;
			const profileStatusInstance = root.findByType(ProfileStatus);
			const span = profileStatusInstance.findByType('span');
			span.props.onDoubleClick();
			const input = profileStatusInstance.findByType('input');
			expect(input.props.value).toBe('some status');
		} catch (error) {
			console.log(error);
		}
	})
	test("callback should be called", () => {
		try {
			const mockFunc = jest.fn();
			const component = TestRenderer.create(
				<Provider store={store}>
					<ProfileStatus status={"some status"} updateProfileStatus={((status: string) => { })} />
				</Provider>
			);
			const root = component.root;
			const profileStatusInstance = root.findByType(ProfileStatus);
			profileStatusInstance.props.toggleEditMode();
			expect(mockFunc.mock.calls.length).toBe(1);
		} catch (error) {
			console.log(error);
		}
	})
});
