import React from 'react'
import useState from 'react'

const Feedback = () => {
    const [modal, setModal] = useState(false)
  return (
    <div>
    <button onClick={()=> setModal(value => !value)}>Feedback</button>
    <div className='feedback'>
        <form>
            <div>
                <input type="text" placeholder='Name' name='name' />
            </div>
            <div>
            <input type="text" placeholder='Name' name='name' />
            </div>
            <div>
            <input type="text" placeholder='Name' name='name' />
            </div>
        </form>
    </div>
    </div>
  )
}

export default Feedback