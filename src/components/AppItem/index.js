// Write your code here
import "./index.css"

const AppItem = (props) => {
  const { eachList } = props
  const { appName, imageUrl } = eachList
  return (
    <li className="app-list">
      <img src={imageUrl} alt={appName} className="app-img" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
