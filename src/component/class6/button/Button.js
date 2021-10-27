import Styles from './Button.module.css'
function Button () {
    return (
        <div>
            <button className = {Styles.btn}>Click Me</button>
            <h2 className = {Styles.description}>this is a button component with module css</h2>
        </div>
    )
}

export default Button