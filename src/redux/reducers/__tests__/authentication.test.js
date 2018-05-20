import { auth } from '../'
import {
  authenticateUser,
  authenticationSuccess,
  authenticationFailed,
} from '../authentication/authActions'


describe('Authentication Reducer tests:', () => {
  it('returns the same state on an unhandled action', () => {
    expect(auth(undefined, { type: 'NULL' })).toMatchSnapshot()
  })

  it('authenticateUser action returns state with isFetching: true', () => {
    const authData = {
      email: 'test@test.com',
      password: '123456789',
    }
    expect(auth(undefined, authenticateUser(authData))).toMatchSnapshot()
  })

  it('authenticationSuccess action returns state with isFetching: false & isAuthenticated: true', () => {
    expect(auth(undefined, authenticationSuccess())).toMatchSnapshot()
  })

  it('authenticationFailed action returns state with authenticataionError: true & errorMessage', () => {
    expect(auth(undefined, authenticationFailed({ message: 'Failed to authenticate' }))).toMatchSnapshot()
  })
})


// it('handles LOAD_REPOS_FAILURE action', () => {
//   const error = new Error('Look ma! I am an error');
//   expect(repos(initialState, receiveRepos.failure(error))).toMatchSnapshot();
// });
//
// it('handles LOAD_REPOS_REQUEST action', () => {
//   expect(repos(initialState, receiveRepos.request())).toMatchSnapshot();
// });
//
// it('handles LOAD_REPOS_SUCCESS action', () => {
//   // Damn, it feels I'm rewriting the reducer again
//   expect(repos(initialState, receiveRepos.success(data))).toEqual({
//     error: null,
//     isLoading: false,
//     repos: data,
//     selected: null,
//   });
//   // A bit better... (still rewriting the reducer behavior)
//   expect(repos(initialState, receiveRepos.success(data))).toEqual({
//     ...initialState,
//     isLoading: false,
//     repos: data
//   });
//   // BOOM. If we change that specific reducer case, we'll compare the Snapshot results
//   // and update them if the change is expected.
//   expect(repos(initialState, receiveRepos.success(data))).toMatchSnapshot();
// });
//
// it('handles SELECT_REPO action', () => {
//   const newState = repos(initialState, selectRepo(1));
//   expect(newState).toMatchSnapshot();
//   // Sending the same id should clean it
//   expect(repos(newState, selectRepo(1))).toMatchSnapshot();
// });
