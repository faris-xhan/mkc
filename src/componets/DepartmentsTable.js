import Table from "react-bootstrap/Table";

export const DepartmentsTable = (props) => {
  const { data } = props;
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Department Name</th>
          <th>Deparment City</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d) => (
          <tr key={d.id}>
            <td>{d.dname}</td>
            <td>{d.dcity}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
