const mainAppbarPages = [
    {
        id:0,
        label: 'About',
        route: '/'
    },    {
        id:2,
        label: 'Betting Lounge',
        route: 'lounge/home'
    },    {
        id:1,
        label: 'Learn',
        route: 'learn'
    },
]
const mainAppbarSettings = [
    {
        id:0,
        label: 'Profile',
        route: 'profile',
        hasAccount: 'true'
    },    {
        id:1,
        label: 'Account',
        route: 'account',
        hasAccount: 'true'
    },    {
        id:2,
        label: 'Sign In',
        route: 'signin',
        hasAccount: 'false'
    },    {
        id:3,
        label: 'Logout',
        route: 'logout',
        hasAccount: 'true'
    },    {
        id:4,
        label: 'Create Account',
        route: 'signup',
        hasAccount: 'false'
    },
]
export { mainAppbarPages, mainAppbarSettings }