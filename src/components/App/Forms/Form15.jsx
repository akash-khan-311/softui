import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Form15 = () => {
    return(
        <CodeBox stringCode={` <div className="card w-64 bg-white border border-gray-300 rounded-md shadow-md mx-auto">
        <div className="chat-header bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 text-lg font-semibold rounded-t-md">
          Chat
        </div>
        <div className="chat-window h-48 overflow-y-scroll">
          <ul className="message-list p-0"></ul>
        </div>
        <div className="chat-input flex border-t border-gray-300">
          <input type="text" className="message-input flex-1 border-none outline-none py-2 px-4 text-sm"
            placeholder="Type your message here" />
          <button className="send-button bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 px-4 text-sm hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out">
            Send
          </button>
        </div>
  </div>`}>
      <div className="card w-64 bg-white border border-gray-300 rounded-md shadow-md mx-auto">
      <div className="chat-header bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 text-lg font-semibold rounded-t-md">
        Chat
      </div>
      <div className="chat-window h-48 overflow-y-scroll">
        <ul className="message-list p-0"></ul>
      </div>
      <div className="chat-input flex border-t border-gray-300">
        <input type="text" className="message-input flex-1 border-none outline-none py-2 px-4 text-sm"
          placeholder="Type your message here" />
        <button className="send-button bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 px-4 text-sm transition duration-300 ease-in-out hover:from-blue-600 hover:to-blue-800">
          Send
        </button>
      </div>
      </div>
    </CodeBox>
    )
}
export default Form15;