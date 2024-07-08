import { UserProfileType } from "../../../../../common/types/profile";
import { addPostAction, deleteProfilePost } from "../../../../../models/actions";
import { ProfilePageType, profileReducer } from "../profile-reducer";

let initialState: ProfilePageType;

beforeEach(() => {
	initialState = {
		posts: [
				{ id: 1, message: 'hi, how it`s going?', likesCount: 12 },
				{ id: 2, message: 'what is your name?', likesCount: 11 },
				{ id: 3, message: 'blabla', likesCount: 5 },
				{ id: 4, message: 'dadada', likesCount: 1 },
		],
		profile: {} as UserProfileType,
		newPostMessage: '',
		status: ''
	};
});

it('length of posts should be incremented', () => {
	const action = addPostAction("Next");
	const newState = profileReducer(initialState, action);
	expect(newState.posts.length).toBe(5);
	expect(newState.posts[4].message).toBe('Next');
})

it('message of added post should be correct', () => {
	const action = addPostAction("Next");
	const newState = profileReducer(initialState, action);
	expect(newState.posts[4].message).toBe('Next');
})

it('after deleting length of posts should be incremented', () => {
	const action = deleteProfilePost(1);
	const newState = profileReducer(initialState, action);
	expect(newState.posts.length).toBe(3);
})

it(`after deleting length of posts should't be decremented if id incorrect`, () => {
	const action = deleteProfilePost(9999);
	const newState = profileReducer(initialState, action);
	expect(newState.posts.length).toBe(4);
})
