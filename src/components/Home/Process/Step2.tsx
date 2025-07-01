import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Step2 = () => {
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [showCursor, setShowCursor] = useState(true);

    const codeLines = [
        { text: 'class', color: 'text-purple-400', type: 'keyword' },
        { text: ' AutoTrigger:', color: 'text-white', type: 'normal' },
        { text: '\n  ', color: 'text-white', type: 'normal' },
        { text: 'def', color: 'text-cyan-400', type: 'keyword' },
        { text: ' __init__(self):', color: 'text-white', type: 'normal' },
        { text: '\n    self.status = ', color: 'text-white', type: 'normal' },
        { text: '"ready"', color: 'text-yellow-400', type: 'string' },
        { text: '\n\n  ', color: 'text-white', type: 'normal' },
        { text: 'def', color: 'text-cyan-400', type: 'keyword' },
        { text: ' ', color: 'text-white', type: 'normal' },
        { text: 'execute', color: 'text-blue-400', type: 'function' },
        { text: '(self):', color: 'text-white', type: 'normal' },
        { text: '\n    ', color: 'text-white', type: 'normal' },
        { text: 'if', color: 'text-gray-400', type: 'keyword' },
        { text: ' self.check():', color: 'text-white', type: 'normal' },
        { text: '\n      ', color: 'text-white', type: 'normal' },
        { text: 'return', color: 'text-gray-400', type: 'keyword' },
        { text: ' ', color: 'text-white', type: 'normal' },
        { text: '"success"', color: 'text-yellow-400', type: 'string' }
    ];

    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        if (!isTyping) return;

        const interval = setInterval(() => {
            if (currentLineIndex < codeLines.length) {
                const currentLine = codeLines[currentLineIndex];

                if (currentCharIndex < currentLine.text.length) {
                    setDisplayedText(prev => prev + currentLine.text[currentCharIndex]);
                    setCurrentCharIndex(prev => prev + 1);
                } else {
                    setCurrentLineIndex(prev => prev + 1);
                    setCurrentCharIndex(0);
                }
            } else {
                setIsTyping(false);
                setTimeout(() => {
                    setDisplayedText('');
                    setCurrentLineIndex(0);
                    setCurrentCharIndex(0);
                    setIsTyping(true);
                }, 3000);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [currentLineIndex, currentCharIndex, isTyping, codeLines]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);

    const renderColoredText = (text: string) => {
        const parts = [];
        let currentText = '';
        let currentColor = '';

        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            let foundMatch = false;

            for (const line of codeLines) {
                if (text.substring(i, i + line.text.length) === line.text) {
                    if (currentText) {
                        parts.push(
                            <span key={parts.length} className={currentColor}>
                                {currentText}
                            </span>
                        );
                        currentText = '';
                    }

                    parts.push(
                        <span key={parts.length} className={line.color}>
                            {line.text}
                        </span>
                    );

                    i += line.text.length - 1;
                    foundMatch = true;
                    break;
                }
            }

            if (!foundMatch) {
                currentText += char;
                currentColor = 'text-white';
            }
        }

        if (currentText) {
            parts.push(
                <span key={parts.length} className={currentColor}>
                    {currentText}
                </span>
            );
        }

        return parts;
    };

    return (
        <motion.div
            className="bg-[#0a0a0a] text-white p-6 w-[26rem] h-80 rounded-xl shadow-xl flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="flex flex-col mb-4">
                <motion.span
                    className="bg-white/10 text-white px-2 py-1 text-xs rounded-md self-start mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Step 2
                </motion.span>
                <motion.h2
                    className="text-xl font-bold mb-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    AI Development
                </motion.h2>
                <motion.p
                    className="text-gray-300 text-xs leading-tight"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    Building intelligent automation systems.
                </motion.p>
            </div>

            <motion.div
                className="flex-1 bg-black border border-white/30 rounded-md overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
            >
             
                <div className="flex items-center justify-between bg-white/5 px-3 py-1.5 text-xs border-b border-white/10">
                    <div className="flex items-center gap-2">
                        <motion.span
                            className="font-mono"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            automation.py
                        </motion.span>
                        <motion.div
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1 h-1 bg-green-400 rounded-full"
                        />
                    </div>
                    <motion.div
                        className="flex gap-1"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                        <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                    </motion.div>
                </div>

                <div className="text-xs p-3 font-mono leading-relaxed relative">
                    <pre className="whitespace-pre-wrap">
                        <code>
                            {renderColoredText(displayedText)}
                            <AnimatePresence>
                                {isTyping && showCursor && (
                                    <motion.span
                                        className="bg-white text-black ml-0.5"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        |
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </code>
                    </pre>

                    <div className="absolute left-0 top-3 text-gray-600 text-xs font-mono select-none pointer-events-none">
                        {displayedText.split('\n').map((_, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                transition={{ delay: index * 0.1 }}
                                className="h-4"
                            >
                                {index + 1}
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-white/5 px-3 py-1 text-xs border-t border-white/10 flex justify-between"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                >
                    <span className="text-gray-400">Python</span>
                    <div className="flex items-center gap-2">
                        <motion.div
                            animate={{
                                backgroundColor: ['#10b981', '#059669', '#10b981']
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-2 h-2 rounded-full"
                        />
                        <span className="text-green-400 text-xs">Running</span>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Step2;