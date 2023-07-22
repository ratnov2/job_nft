import Button from '../../button/Button'
import style from './ButtonGroup.module.scss'

const ButtonGroup = () => {
	return (
		<div className={style.buttonGroup}>
			<Button variant='head_in'>Sign in</Button>
      <Button variant='head_active'>Sign up</Button>
		</div>
	)
}
export default ButtonGroup
