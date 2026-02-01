import ControlledForm from './ControlledForm'
import UncontrolledForm from './UncontrolledForm'

const PracticeForm = () => {
  return (
    <div style={{display:'flex'}}>
        <UncontrolledForm />
        <ControlledForm />

    </div>
  )
}

export default PracticeForm