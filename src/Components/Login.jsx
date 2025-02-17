import React from 'react'

function handleSubmit(event) {}

const Login = () => {
    return (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )
}

export default Login