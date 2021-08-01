import React from 'react';
import { withRouter } from 'react-router-dom';

const Authorization = (WrappedComponent, allowedRoles, userType) => {
  if (allowedRoles===userType) {
    function WithAuthorization () {
        return <WrappedComponent {...this.props} />

    }
    return withRouter(WithAuthorization)
  }

};

export default Authorization;
