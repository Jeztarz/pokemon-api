import '../../Styles/shortedButton.css'

function ShortedButton({toggleTime}) {
    return (
        <button className="shorted-container" onClick={toggleTime}>
            <img src='./shorted.png' alt='shorted' style={{width: '25px'}} />
        </button>
    )
}


export default ShortedButton;