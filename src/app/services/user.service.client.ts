export class UserServiceClient {

  findUserById(userId) {
    return fetch('https://kt-whiteboard-nodejs-server.herokuapp.com/api/user/' + userId, {
      method: 'get',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
  }

  findUserByUsername(username) {
    console.log('username : ', username);
    return fetch('https://kt-whiteboard-nodejs-server.herokuapp.com/api/user/username/' + username,
      {
        method: 'get',
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(response => response.json());
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('https://kt-whiteboard-nodejs-server.herokuapp.com/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  logout() {
    return fetch('https://kt-whiteboard-nodejs-server.herokuapp.com/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  profile() {
    return fetch('https://kt-whiteboard-nodejs-server.herokuapp.com/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then((response) => {
        console.log('response in client at Profile : ', response);
        return response.json();
      })
      ;
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch('https://kt-whiteboard-nodejs-server.herokuapp.com/api/user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  updateUser(userId, user) {
    return fetch('https://kt-whiteboard-nodejs-server.herokuapp.com/api/user/' + userId, {
      method: 'put',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
