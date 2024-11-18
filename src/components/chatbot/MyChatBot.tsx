import ChatBot from "react-chatbotify";
import GDG from "../../assets/gdg.jpg";
const MyChatBot = () => {
  const options = ["Documentation", "Contacts", "Discord"];

  const flow = {
    start: {
      message:
        "Hello, welcome to servicio el Ateneo. Reach out to me if you need assistance!",
      path: "help",
    },
    help: {
      message: "What can I help you with?",
      options: options,
      path: "documentation",
    },
    documentation: {
      message:
        "You can find our documentation here: https://servicioelateneo.com. Do you want another process?",
      options: options,
      path: "repeat",
    },
    repeat: {
      message:
        "I am still under development! You have reached the maximum amount of tickets, see ya!",
      chatDisabled: true,
    },
  };

  const settings = {
    general: {
      showHeader: true,
      showFooter: true,
      showInputRow: true,
      desktopEnabled: true,
      mobileEnabled: true,
      actionDisabledIcon: GDG,
      flowStartTrigger: "ON_LOAD",
    },
    tooltip: {
      mode: "START",
      text: "Need help? 😊",
    },
    chatButton: {
      icon: GDG,
    },
    chatHistory: {
      storageKey: "conversations_summary",
    },
    userBubble: {
      animate: true,
    },
    header: {
      title: (
        <div
          style={{
            cursor: "pointer",
            margin: 0,
            fontSize: 20,
            fontWeight: "bold",
          }}
          onClick={() => window.open("https://github.com/tjtanjin/")}
        >
          Qhaleed K
        </div>
      ),
      showAvatar: true,
      avatar: GDG,
      backgroundC: "blue",
    },
    chatWindow: {
      showScrollbar: false,
      autoJumpToBottom: false,
      showMessagePrompt: true,
      messagePromptText: "New Messages ↓",
      messagePromptOffset: 30,
      defaultOpen: false,
    },
    ariaLabel: {
      chatButton: "open chat",
      audioButton: "toggle audio",
      closeChatButton: "close chat",
      emojiButton: "emoji picker",
      fileAttachmentButton: "upload file",
      notificationButton: "toggle notifications",
      sendButton: "send message",
      voiceButton: "toggle voice",
      inputTextArea: "input text area",
    },
    botBubble: { simStream: true },
    notification: {
      disabled: false,
      defaultToggledOn: true,
      volume: 0.2,
      showCount: true,
    },
  };

  const styles = {
    headerStyle: {
      background: "#57707a",
      color: "#ffffff",
      padding: "10px",
    },
    chatWindowStyle: {
      backgroundColor: "#f2f2f2",
    },
    // ...other styles
  };

  return <ChatBot settings={settings} flow={flow} styles={styles} />;
};

export default MyChatBot;
