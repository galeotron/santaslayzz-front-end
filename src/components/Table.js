import React from 'react'

const Table = (props) => {

  const { columns, data } = props

  const tableHeader = () => {
    return columns.map((column) => {
      console.log('rendering column:' + column.key)
      console.log(column.label)
      return (
          <td key={column.key}>{column.label}</td>
      )
    })
  }

  const returnTableData = () => {
    return data.map((row, i) => {
      const { discordName,
        game1Kills,
        game1Placement,
        game2Kills,
        game2Placement,
        game3Kills,
        game3Placement,
        game4Kills,
        game4Placement,
        officialName1,
        officialName2,
        officialName3,
        officialName4,
        passcode,
        playerName1,
        playerName2,
        playerName3,
        playerName4,
        teamName, } = row;
      return (
        <tr data-id={i} key={i}>
          
          <td>{teamName}</td>
          <td>{discordName}</td>
          <td>{playerName1}</td>
          <td>{officialName1}</td>
          <td>{playerName2}</td>
          <td>{officialName2}</td>
          <td>{playerName3}</td>
          <td>{officialName3}</td>
          <td>{playerName4}</td>
          <td>{officialName4}</td>
          <td>{game1Kills}</td>
          <td>{game1Placement}</td>
          <td>{game2Kills}</td>
          <td>{game2Placement}</td>
          <td>{game3Kills}</td>
          <td>{game3Placement}</td>
          <td>{game4Kills}</td>
          <td>{game4Placement}</td>
          <td>{passcode}</td>
        </tr>
      )
    });
  }

  console.log('rendering')

  return (
    <>
      <table>
        <thead>
          <tr>
            {tableHeader()}
          </tr>
        </thead>
        <tbody>
          {returnTableData()}
        </tbody>
      </table>
    </>
  )
}

export default Table
