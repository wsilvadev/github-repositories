import { HTTPClient } from 'boot/axios';

// setPosts  vai estar setando algo no estado..

const setPosts = ({ commit, getters }) => {
    return new Promise((resove, reject) => {
        HTTPClient.get('/users/' + getters.inputTextChanged)
            .then(suc => {
                resove(suc.data);
                commit('SET_POSTS', suc.data);
            })
            .catch(err => reject(err));
    });
};
const setRepos = ({ commit }, user) => {
    return new Promise((resove, reject) => {
        HTTPClient.get('/users/' + user + '/repos')
            .then(suc => {
                resove(suc.data);
                commit('SET_REPOS', suc.data);
            })
            .catch(err => reject(err));
    });
};

const setInputText = ({ commit }, text) => {
    commit('CHANGE_TEXT_INPUT', text);
};

export { setPosts, setInputText, setRepos };
