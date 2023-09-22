// Write your code here
import './index.css'

const DenominationItem = props => {
  const {onDecrement, denominationsListItems} = props
  const {value} = denominationsListItems
  const onDecrementFifty = () => {
    onDecrement(value)
  }

  return (
    <li>
      <button type="button" className="btn" onClick={onDecrementFifty}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
