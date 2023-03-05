import '../../theme/buttons.scss';
type props = {
    text:string,
    action?:()=>void,
    type:'primary' | 'gray',
    icon?:string
}
export const Button = ({text, action, type, icon}:props) => {
    return (
        <button
            className={`button-${type}`}
            onClick={action}
        >
            <span>{text}</span>
            {icon && (
                <img
                    src={icon}
                    alt={text}
                    className={`buttonIcon-${type}`}
                />
            )}
        </button>
    )
}