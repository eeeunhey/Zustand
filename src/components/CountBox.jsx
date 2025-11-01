import counterStore from "../stores/counterStore"


const CountBox = () => {
    const {count, increase} = counterStore();
  return (
    <div><h2>{count}</h2></div>
  )
}

export default CountBox