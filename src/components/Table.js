export default class Table extends React.Component {
  constructor(props) {
    super(props);
    // this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    // this.getKeys = this.getKeys.bind(this);
  }

//   getKeys = function () {};

//   getHeader = function () {};

    getData = async () => {

    const response = await axios.get(
      "http://localhost:5000/tournament/tournamentData",
      // { headers: { "Content-Type": "text/plain" } }
    );

    return response.data
    
    // console.log(response.data)
    console.log(Object.keys(response.data).length)
    }

  getRowsData = function () {
    var items = this.props.data;
    var keys = this.getKeys();
    return items.map((row, index)=>{
    return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
    })
  };

  render() {
    return (
      <div>
        <table>
          
          
          <tbody>{this.getRowsData()}</tbody>
        </table>
      </div>
    );
  }
}
const RenderRow = (props) => {};
