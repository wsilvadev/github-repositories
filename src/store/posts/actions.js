import { HTTPClient } from 'boot/axios';

// setPosts  vai estar setando algo no estado..

const setPosts = ({ commit }, userName) => {
    return new Promise((resove, reject) => {
        HTTPClient.get(`/users/${userName}`)
            .then(suc => {
                resove(suc.data);
                commit('SET_POSTS', suc.data);
            })
            .catch(err => reject(err));
    });
};

export { setPosts };
