import ChannelsBox from '../components/chat/ChannelsBox';
import MessagesBox from '../components/chat/MessagesBox';

const Chat = () => (
  <div className="container h-100 my-4 overflow-hidden rounded shadow">
    <div className="row h-100 bg-white flex-md-row">
      <ChannelsBox />
      <MessagesBox />
    </div>
  </div>
);

export default Chat;
