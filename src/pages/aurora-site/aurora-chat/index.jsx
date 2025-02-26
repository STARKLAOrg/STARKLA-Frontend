import React, { useState } from "react";
import {
  Mic,
  ChevronLeft,
  ChevronRight,
  LightbulbIcon,
  FileIcon,
} from "lucide-react";
import ElizaBot from "elizabot";
import starklaImage from "@/assets/starkla.jpg";
import styles from "./aurora-chat.module.css";

const StarklaChat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const eliza = new ElizaBot();

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputText.trim()) {
      const userMessage = {
        type: "text",
        content: inputText,
        isEliza: false,
      };

      setMessages([...messages, userMessage]);
      setInputText("");

      setIsTyping(true);

      setTimeout(() => {
        const elizaResponse = {
          type: "text",
          content: eliza.transform(inputText),
          isEliza: true,
        };

        setMessages((prev) => [...prev, elizaResponse]);
        setIsTyping(false);
      }, 1500);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileType = file.type.split("/")[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const result = event.target.result;

      if (file.type === "application/pdf") {
        const blob = new Blob([result], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);

        setMessages((prevMessages) => [
          ...prevMessages,
          {
            type: "application",
            content: url,
            fileName: file.name,
            isEliza: false,
          },
        ]);

        // Optional: Cleanup URL when file is no longer needed
        setTimeout(() => URL.revokeObjectURL(url), 10000);
      } else if (fileType === "text") {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            type: "text",
            content: result,
            fileName: file.name,
            isEliza: false,
          },
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            type: fileType,
            content: result,
            fileName: file.name,
            isEliza: false,
          },
        ]);
      }
    };

    if (fileType === "image" || fileType === "audio") {
      reader.readAsDataURL(file);
    } else if (file.type === "application/pdf") {
      reader.readAsArrayBuffer(file);
    } else if (fileType === "text") {
      reader.readAsText(file);
    } else {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "file", content: file.name, isEliza: false },
      ]);
    }
  };

  const renderMessageContent = (message) => {
    switch (message.type) {
      case "image":
        return (
          <img
            src={message.content}
            alt={message.fileName}
            className="object-cover w-32 h-32"
          />
        );
      case "audio":
        return <audio controls src={message.content} />;
      case "text":
        return (
          <pre className="p-2 border-white border bg-white text-black max-h-24 max-w-[200px] overflow-scroll rounded">
            {message.content}
          </pre>
        );
      case "application":
        if (message.fileName.endsWith(".pdf")) {
          return (
            <embed
              src={message.content}
              type="application/pdf"
              className="w-full h-64"
              alt={message.fileName}
            />
          );
        }
        return <span>{message.fileName}</span>;
      default:
        return <span>{message.fileName}</span>;
    }
  };

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header */}
      <div className="flex items-center w-full px-6 py-2 border-b border-gray-100">
        {/* Left: Profile Section */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 overflow-hidden rounded-full">
            <img
              src={starklaImage}
              alt="Starkla Profile"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">STARKLA</h1>
            <h2 className="text-sm text-gray-600">
              Software Architecture lesson - Chapter 1
            </h2>
          </div>
        </div>

        {/* Right: Unit Navigation */}
        <div className="flex items-center gap-4 ml-auto">
          <span className="text-sm text-gray-600">Current unit: 1</span>
          <div className="flex gap-1">
            <button
              className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Previous unit"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Next unit"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col w-full gap-4 px-6 py-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${styles.message} ${
              message.isEliza ? styles.messageEliza : styles.messageUser
            } shadow-md p-4`}
          >
            {renderMessageContent(message)}
          </div>
        ))}

        {/* Eliza Typing */}
        {isTyping && (
          <div
            className={`${styles.message} ${styles.messageEliza} shadow-md p-4`}
          >
            <div className={styles.dotAnimate}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Controls */}
      <div className="sticky bottom-0 w-full px-6 py-4 bg-white border-t border-gray-100 shadow-lg">
        <div className="flex items-center w-full gap-4">
          <button className="flex items-center gap-2 px-4 py-2 text-white transition-colors bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">
            <LightbulbIcon className="w-5 h-5" />
            <span>Start learning</span>
          </button>

          <div className="relative flex-1 w-full">
            <input
              type="text"
              placeholder="Write something related to the topic"
              className="w-full px-4 py-2 pr-24 transition-colors bg-gray-100 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <div className="absolute flex items-center gap-2 transform -translate-y-1/2 right-2 top-1/2">
              <label className="cursor-pointer p-1.5 text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileUpload}
                />
                <FileIcon className="w-5 h-5" />
              </label>
              <button
                className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-full transition-colors shadow-md"
                aria-label="Voice Input"
              >
                <Mic className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarklaChat;
