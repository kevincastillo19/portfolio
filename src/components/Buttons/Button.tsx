import '../../theme/buttons.scss';
type props = {
    text:string,
    action?:()=>void,
    type:string
}
export const Button = ({text, action, type}:props) => {
    return (
        <button
            className={`button-${type}`}
            onClick={action}
        >
            {text}
        </button>
    )
}