import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Movements from '../components/Movements/Movements'
import Spinner from '../components/Spinner/Spinner'
import { getMovements, reset } from '../features/movements/movementSlice'



function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { movements, isLoading, isError, message } = useSelector(
    (state) => state.movements
  )

  // useEffect(() => {
  //   if (isError) {
  //     console.log(message)
  //   }

    
  //   if (!user) {
  //     navigate('/login')
  //   }
    
  //   dispatch(getMovements())

  //   return () => {
  //     dispatch(reset())
  //   }
  // }, [])
  // [user, navigate, isError, message, dispatch]

  // if (isLoading) {
  //   return <Spinner />
  // }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Dashboard</p>
      </section>
      <section className='content'>
        
      </section>
    </>
  )
}

export default Dashboard
