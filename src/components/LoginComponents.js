import React from 'react';

class LoginCard extends React.Component {
    render() {
        return (
            // <form id="login" name="login" action="/login" method="post">
            //     <input type="text" name="username" />
            //     <input type="password" name="password" />
            //     <input type="submit" value="login" />
            // </form>
            <a href="/auth/github">Login with Github</a>
        );
    }
}

export { LoginCard };

