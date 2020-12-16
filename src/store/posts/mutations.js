const SET_POSTS = function(state, payload) {
    state.posts.push(payload);
};
const SET_REPOS = function(state, payload) {
    state.repos = payload;
};

const CHANGE_TEXT_INPUT = function(state, payload) {
    state.inputText = payload;
};
export { SET_POSTS, CHANGE_TEXT_INPUT, SET_REPOS };
