import React from 'react';

const styleGroup = {
    titleText: {
        color: "white"
    },
    loginText: {
        color: "#FF9900"
    }
};

class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1 style={ styleGroup.titleText }> Hello React Skeleton </h1>
                    <a href="/">home</a>
                    <h3>
                        <a href="/login" style={ styleGroup.loginText }>login</a>
                    </h3>
                </div>
            </div>
        );
    }
}

export default App;