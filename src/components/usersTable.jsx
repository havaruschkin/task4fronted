import React from "react";

const UsersTable = props => {

  return (
    <React.Fragment>
      <table id="tablePreview" class="table table-sm">
        <thead>
        <tr>
          <th>
            <input type="checkbox"
                   checked={props.selectedFlagValue}
                   onClick={e => props.onSelectAll(e.currentTarget.checked)}/>
          </th>
          <th>Id</th>
          <th>Login</th>
          <th>Email</th>
          <th>Status</th>
          <th>Created TS</th>
          <th>Last login</th>
        </tr>
        </thead>
        <tbody>
        {props.users.map(user => (
          <tr key={user.id}>
            <td><input type="checkbox"
                       checked={user.isSelected}
                       onChange={() => props.onSelect(user)}
            />
            </td>
            <td>{user.id}</td>
            <td>{user.login}</td>
            <td>{user.email}</td>
            <td>{user.status}</td>
            <td>{user.createdTs}</td>
            <td>{user.lastLogin}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default UsersTable;
