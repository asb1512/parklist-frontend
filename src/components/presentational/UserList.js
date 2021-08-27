import Table from 'react-bootstrap/Table';

export default function UserList(props) {

  const userList = props.users?.map(user => {
    console.log("UserList Map", user)
    return (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.email}</td>
        <td>{user.bio}</td>
        <td>{user.admin ? "true" : "false"}</td>
      </tr>
    )
  })

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Bio</th>
            <th>Admin</th>
          </tr>
        </thead>
        <tbody>
          {props.users ? userList : null}
        </tbody>
      </Table>
    </>
  )
}