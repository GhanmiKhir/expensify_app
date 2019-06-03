import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComonent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComonent {...props} />
    </div>
  );
};

const requireAuthentication = WrappedComonent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComonent {...props} />
      ) : (
        <p>Please login first</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={false} info="there are th details" />,
//   document.getElementById('app')
// );
ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="there are th details" />,
  document.getElementById('app')
);
