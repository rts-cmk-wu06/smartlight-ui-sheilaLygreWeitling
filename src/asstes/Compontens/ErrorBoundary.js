import React from "react";

class ErrorBoundary extends React.Component {
    state = { hasError: false }
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError == true) {
            return <h1>Oops, we done goofed up</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;