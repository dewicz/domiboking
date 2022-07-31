import './mailList.css';

const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle">Save time, save money!</h1>
        <span className="mailDesc">
            <div className="mailInputContainer">
                <input type="text" placeholder="Your Email" />
                <button>Subscribe</button>
            </div>
        </span>
    </div>
  )
}

export default MailList