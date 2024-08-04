const ChangeMessageState = ({handleMessage}) => {
    const messages = [
        {id: 1, text: 'Hello'},
        {id: 2, text: 'Hi'},
        {id: 3, text: 'Hey'},
    ]
  return (
    <>
        <button onClick={() => {handleMessage(messages[0].text)}}>1</button>
        <button onClick={() => {handleMessage(messages[1].text)}}>2</button>
        <button onClick={() => {handleMessage(messages[2].text)}}>3</button>
    </>
  )
}

export default ChangeMessageState