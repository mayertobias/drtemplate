import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  XMarkIcon, 
  PaperAirplaneIcon, 
  ArrowPathIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';
import { useTheme } from '../../context/ThemeContext';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const SUGGESTED_QUESTIONS = [
  "What are your office hours?",
  "Do you accept my insurance?",
  "How do I schedule an appointment?",
  "What should I bring to my first visit?"
];

interface AIChatProps {
  onClose: () => void;
}

const AIChat = ({ onClose }: AIChatProps) => {
  const { isDarkMode } = useTheme();
  const [messages, setMessages] = useState<Message[]>(() => {
    // Load messages from localStorage if available
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('aiChatMessages');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          // Convert string timestamps back to Date objects
          return parsed.map((msg: any) => ({
            ...msg,
            timestamp: new Date(msg.timestamp)
          }));
        } catch (e) {
          console.error('Error parsing saved messages:', e);
          return [];
        }
      }
    }
    return [];
  });
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      try {
        // Convert Date objects to ISO strings for storage
        const messagesForStorage = messages.map(msg => ({
          ...msg,
          timestamp: msg.timestamp.toISOString()
        }));
        localStorage.setItem('aiChatMessages', JSON.stringify(messagesForStorage));
      } catch (e) {
        console.error('Error saving messages:', e);
      }
    }
  }, [messages]);

  // Initial greeting message
  useEffect(() => {
    setMessages([
      {
        id: 1,
        text: "Hello! I'm Dr. Sai's AI assistant. How can I help you today?",
        sender: 'ai',
        timestamp: new Date()
      }
    ]);
  }, []);

  // Auto-scroll to bottom when messages change or when typing indicator appears
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);
  
  // Simulate typing indicator
  const simulateTyping = useCallback(async () => {
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsTyping(false);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userInput = input.trim();
    if (!userInput) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: userInput,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // Clear any existing typing indicator
    setIsTyping(false);

    try {
      // Show typing indicator
      await simulateTyping();
      
      // In a real app, you would call your AI service here
      // const response = await fetch('/api/ai/chat', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ 
      //     message: userInput,
      //     conversationHistory: messages
      //   })
      // });
      // 
      // if (!response.ok) throw new Error('Failed to get response');
      // const data = await response.json();
      
      // For demo, generate a contextual response based on keywords
      let aiResponse = "";
      const lowerInput = userInput.toLowerCase();
      
      if (lowerInput.includes('hour') || lowerInput.includes('time') || lowerInput.includes('open')) {
        aiResponse = "Our office is open Monday to Friday from 8:00 AM to 5:00 PM, and on Saturdays from 9:00 AM to 1:00 PM. We're closed on Sundays and major holidays.";
      } else if (lowerInput.includes('appointment') || lowerInput.includes('schedule') || lowerInput.includes('book')) {
        aiResponse = "You can schedule an appointment by calling our office at (555) 123-4567 during business hours or by using our online patient portal. New patients are always welcome!";
      } else if (lowerInput.includes('insurance') || lowerInput.includes('payment') || lowerInput.includes('cover')) {
        aiResponse = "We accept most major insurance plans. Please have your insurance information ready when you call, and our staff will be happy to verify your coverage. We also offer self-pay options and payment plans.";
      } else if (lowerInput.includes('emergency') || lowerInput.includes('urgent')) {
        aiResponse = "For medical emergencies, please call 911 or go to the nearest emergency room. For urgent matters outside of office hours, please call our after-hours line at (555) 987-6543.";
      } else {
        const genericResponses = [
          "I can help with general questions about our practice. Would you like information about our services, office hours, or how to schedule an appointment?",
          "I'm here to help with non-emergency questions about pediatric care. For specific medical advice, please schedule an appointment with Dr. Sai.",
          "You can find more information on our website or by calling our office. Is there something specific you'd like to know?"
        ];
        aiResponse = genericResponses[Math.floor(Math.random() * genericResponses.length)];
      }
      
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: aiResponse,
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "I'm having trouble connecting right now. Please try again later or call our office at (555) 123-4567 for immediate assistance.",
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center px-4 pb-20 pt-4 sm:block sm:p-0">
      <div 
        className="fixed inset-0 transition-opacity" 
        aria-hidden="true"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-gray-500 opacity-75 dark:bg-gray-900 dark:opacity-80"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.2 }}
        className="fixed bottom-0 right-0 mb-4 mr-4 w-full max-w-md transform overflow-hidden rounded-t-lg bg-white dark:bg-gray-800 shadow-xl transition-all sm:right-4 sm:bottom-4 sm:rounded-lg sm:max-h-[calc(100%-2rem)] sm:max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`flex items-center justify-between px-4 py-3 ${isDarkMode ? 'bg-gray-800' : 'bg-indigo-600'} text-white`}>
          <div className="flex items-center">
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-white font-bold">AI</span>
            </div>
            <div className="ml-3">
              <h3 className="text-base font-medium">Dr. Sai's Assistant</h3>
              <p className="text-xs opacity-75">Online</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <span className="sr-only">Close chat</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Chat messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs sm:max-w-md px-4 py-2 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-indigo-600 text-white rounded-br-none'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs opacity-70 mt-1 text-right">
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg rounded-bl-none max-w-xs sm:max-w-md">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-4">
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <ArrowPathIcon className="h-5 w-5 animate-spin" />
              ) : (
                <PaperAirplaneIcon className="h-5 w-5 transform rotate-90" />
              )}
              <span className="sr-only">Send</span>
            </button>
          </form>
          {messages.length === 1 && !isLoading && (
            <div className="mt-4 space-y-2">
              <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center">
                <LightBulbIcon className="w-4 h-4 mr-1" />
                Try asking about:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {SUGGESTED_QUESTIONS.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setInput(question)}
                    className="text-xs text-left p-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}
          <p className="mt-4 text-xs text-center text-gray-500 dark:text-gray-400">
            Dr. Sai's AI Assistant • Not for medical emergencies • Messages are saved locally
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AIChat;
