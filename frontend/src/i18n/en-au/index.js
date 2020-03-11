// This is just an example,
// so you can safely delete all default props below

export default {
  menuLink: {
    rootIndex: 'Dashboard',
    dashboard: 'Dashboard',
    webcams: 'Webcams',
    login: 'Login',
    logout: 'Logout',
    register: 'Register',
    memberTools: 'Member Tools',
    reportIssue: 'Report Issue',
    submitProxy: 'Submit Proxy Vote',
    recentSwipes: 'Recent Swipes',
    lastSeen: 'Last Seen',
    membership: 'Membership',
    profile: 'Profile',
    checkAccess: 'Check Access',
    manageMemberbucks: 'Spacebucks',
  },
  error: {
    logoutFailed: 'There was an error logging out. Please refresh the page and try again.',
    loginFailed: 'Your username or password was incorrect.',
    pageNotFound: 'Page not found',
    400: ' Sorry, there was an error with your request. (Error 400)',
    401: ' Sorry, you need to be logged in to access this page. (Error 401)',
    403: ' Sorry, you don\'t have permission to access this page. (Error 403)',
    404: ' Sorry, that page could not be found. (Error 404)',
    500: ' Sorry, there was a server error. Please try again later. (Error 500)',
  },
  info: {
    webcamPageDescription: 'This page shows our public webcams, updated every minute for your convenience.',
    loginSuccess: 'Login successful, loading dashboard.',
    logoutSuccess: 'Logout successful.',
    registerHere: 'Register Here',
    notAMember: 'Not a member? ',
    loginToContinue: 'Please login to continue',
  },
  about: {
    title: 'About MemberMatters',
    description: 'This is an open source, full featured membership portal. It is designed for '
    + 'HSBNE (Hackerspace Brisbane). It was created by Jaimyn Mayer, with a little help from some '
    + 'HSBNE members.',
    linkText: 'on GitHub',
  },
  button: {
    submit: 'Submit',
    reset: 'Reset',
    cancel: 'Reset',
  },
  validation: {
    invalidEmail: 'Please type a valid email.',
    invalidPassword: 'Please type a valid password.',
  },
  access: {
    pageDescription: 'Your access permissions for doors and interlocks are shown below. Please '
      + 'contact the management committee if you believe you should have access to something that '
      + 'you don\'t.',
    authorised: 'Authorised',
    unauthorised: 'Unauthorised',
    door: 'Door',
    doors: 'Doors',
    interlock: 'Interlock',
    interlocks: 'Interlocks',
  },
  entityType: 'Association',
  failed: 'Action failed',
  success: 'Action was successful',
};
