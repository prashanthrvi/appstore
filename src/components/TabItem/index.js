// Write your code here
import "./index.css"

const TabItem = (props) => {
  const { eachList, changeTab, isActive } = props
  const { displayText, tabId } = eachList

  const onClicking = () => {
    changeTab(tabId)
  }

  const check = isActive ? "add-style" : ""

  return (
    <li className={`tab-item ${check}`}>
      <button type="button" onClick={onClicking}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
