import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const onChangeBalance = () => {
    updateBalance(value)
  }
  return (
    <li className="denom-item">
      <button className="button" type="button" onClick={onChangeBalance}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
