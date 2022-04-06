import React from "react";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    this.callAPI = this.callAPI.bind(this);
    this.callAPI();
  }

  callAPI() {
    fetch("https://1783-89-236-217-170.ngrok.io/api/active", {
      mode: "no-cors",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          list: data.data,
        });
      });
  }

  render() {
    let tb_data = this.state.list.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.city}</td>
          <td>{item.distnict}</td>
          <td>{item.address}</td>
          <td>{item.balance}</td>
          <td>{item.owner}</td>
          <td>{item.phone}</td>
          <td>{item.image}</td>
          <td>{item.status}</td>
          <td>{item.created_date}</td>
        </tr>
      );
    });

    return (
      <div>
        <table>
          <tbody>{tb_data}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
