import {
    createStore
} from "vuex"

export default createStore({
    state: {
        data: [{
                id: 'jjjwjw',
                title: 'Post 1',
                detail: 'Agronet is a digital solution many have been expexting and is improving conventional marketing and sales processes as our web app will do the mapping and connection from needy to provider.'
            },
            {
                id: '2',
                title: 'Post 2',
                detail: 'Agronet is a digital solution many have been expexting and is improving conventional marketing and sales processes as our web app will do the mapping and connection from needy to provider.'
            },
            {
                id: '3',
                title: 'Post 3',
                detail: 'Agronet is a digital solution many have been expexting and is improving conventional marketing and sales processes as our web app will do the mapping and connection from needy to provider.'
            },
            {
                id: '4',
                title: 'Post 4',
                detail: 'Agronet is a digital solution many have been expexting and is improving conventional marketing and sales processes as our web app will do the mapping and connection from needy to provider.'
            },
            {
                id: '5',
                title: 'Post 5',
                detail: 'Agronet is a digital solution many have been expexting and is improving conventional marketing and sales processes as our web app will do the mapping and connection from needy to provider.'
            },
        ]
    },
    getters: {
        data(state) {
            return state.data
        }
    },
    mutations: {},
    actions: {},
    modules: {}
})
