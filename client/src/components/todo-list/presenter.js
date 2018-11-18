
const mapStateToDisplayProps = ({todo}) => {
  return {
    items: todo.map(({id, text, finished }) => ({ 
      id, 
      text, 
      checked: finished, 
      crossedOut: finished 
    }))
  }
}

export default mapStateToDisplayProps;