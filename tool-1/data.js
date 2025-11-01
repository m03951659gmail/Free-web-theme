// ===== TOOLS DATA (Simulating tools.json) =====
        const toolsData = [
  
  {
        "id": 1,
        "name": "Text to Speech Converter",
        "description": "Convert written text into natural-sounding speech with adjustable voice and speed.",
        "icon": "🎤",
        "category": "writing",
        "tags": ["voice", "converter", "speech", "audio"],
        "link": "/tool-1/text to speech converter 1/"
    },
    {
        "id": 2,
        "name": "Word Counter",
        "description": "Count words, characters, and sentences in your text instantly.",
        "icon": "🔤",
        "category": "writing",
        "tags": ["words", "count", "text", "analysis"],
        "link": "/tool-1/word counter 2/"
    },
    {
        "id": 3,
        "name": "Character Counter",
        "description": "Track the number of characters in your text for precise writing.",
        "icon": "📏",
        "category": "writing",
        "tags": ["characters", "count", "text"],
        "link": "/tool-1/Character Counter 3/"
    },
    {
        "id": 4,
        "name": "Case Converter (Uppercase/Lowercase)",
        "description": "Change text to uppercase, lowercase, title case, or sentence case easily.",
        "icon": "🔄",
        "category": "text",
        "tags": ["uppercase", "lowercase", "converter", "text"],
        "link": "/tool-1/Case Converter Uppercase Lowercase 4/"
    },
    {
        "id": 5,
        "name": "Password Generator",
        "description": "Create strong and secure passwords with customizable options.",
        "icon": "🔑",
        "category": "security",
        "tags": ["password", "security", "generator"],
        "link": "/tool-1/Password Generator 5/"
    },
    {
        "id": 6,
        "name": "Text Repeater",
        "description": "Repeat any text multiple times instantly for fun or testing.",
        "icon": "🔁",
        "category": "fun",
        "tags": ["repeat", "text", "fun"],
        "link": "/tool-1/Text Repeater 6/"
    },
    {
        "id": 7,
        "name": "Number to Word Converter",
        "description": "Convert numbers into words in multiple languages.",
        "icon": "🔢",
        "category": "math",
        "tags": ["number", "word", "converter"],
        "link": "/tool-1/Number to Word converter 7/"
    },
    {
        "id": 8,
        "name": "Age Calculator",
        "description": "Find out your exact age in years, months, and days.",
        "icon": "🎂",
        "category": "date-time",
        "tags": ["age", "calculator", "date"],
        "link": "/tool-1/Age Calculator 8/"
    },
    {
        "id": 9,
        "name": "BMI Calculator",
        "description": "Calculate your Body Mass Index and check your fitness level.",
        "icon": "⚖️",
        "category": "health",
        "tags": ["bmi", "health", "fitness", "calculator"],
        "link": "/tool-1/bmi calculator 9/"
    },
    {
        "id": 10,
        "name": "Loan Calculator",
        "description": "Estimate monthly loan payments and total interest.",
        "icon": "💰",
        "category": "finance",
        "tags": ["loan", "finance", "calculator"],
        "link": "/tool-1/Loan Calculator 10/"
    },
    {
        "id": 11,
        "name": "Unit Converter",
        "description": "Convert units for length, weight, temperature, and more.",
        "icon": "📐",
        "category": "utility",
        "tags": ["unit", "converter", "measurement"],
        "link": "/tool-1/unit converter 11/"
    },
    {
        "id": 12,
        "name": "QR Code Generator",
        "description": "Create QR codes for text, URLs, and contact information.",
        "icon": "📱",
        "category": "utility",
        "tags": ["qr", "code", "generator"],
        "link": "/tool-1/QR Code Generator 12/"
    },
    {
        "id": 13,
        "name": "Text Comparison",
        "description": "Compare two pieces of text to find differences and similarities.",
        "icon": "📝",
        "category": "text",
        "tags": ["comparison", "text", "diff"],
        "link": "/tool-1/text Comparison 13/"
    },
    {
        "id": 14,
        "name": "Calculator",
        "description": "Perform basic and advanced mathematical calculations easily.",
        "icon": "🧮",
        "category": "math",
        "tags": ["calculator", "math", "calculation"],
        "link": "/tool-1/Calculator 14/"
    },
    {
        "id": 15,
        "name": "Color Picker",
        "description": "Select and identify colors with HEX, RGB, and HSL values.",
        "icon": "🎨",
        "category": "design",
        "tags": ["color", "picker", "hex", "rgb"],
        "link": "/tool-1/color picker 15/"
    },
    {
        "id": 16,
        "name": "Color Code Converter",
        "description": "Convert colors between HEX, RGB, and HSL formats.",
        "icon": "🌈",
        "category": "design",
        "tags": ["color", "converter", "hex", "rgb"],
        "link": "/tool-1/Color Code Converter 16/"
    },
    {
        "id": 17,
        "name": "Online Stopwatch",
        "description": "Track time precisely with a simple online stopwatch.",
        "icon": "⏱️",
        "category": "time",
        "tags": ["stopwatch", "timer", "time"],
        "link": "/tool-1/Online Stopwatch 17/"
    },
    {
        "id": 18,
        "name": "Countdown Timer",
        "description": "Set a countdown timer for tasks, cooking, or reminders.",
        "icon": "⏳",
        "category": "time",
        "tags": ["countdown", "timer", "time"],
        "link": "/tool-1/countdown timer 18/"
    },
    {
        "id": 19,
        "name": "Fake Internet Speed Test",
        "description": "Prank your friends with a fake internet speed result.",
        "icon": "📡",
        "category": "fun",
        "tags": ["fake", "speed", "prank", "fun"],
        "link": "/tool-1/fake internet speed test 19/"
    },
    {
        "id": 20,
        "name": "Love Calculator",
        "description": "Check compatibility between two names for fun.",
        "icon": "❤️",
        "category": "fun",
        "tags": ["love", "calculator", "fun"],
        "link": "/tool-1/love calculator 20/"
    },
    {
        "id": 21,
        "name": "Internet Speed Test",
        "description": "Measure your real download and upload internet speed.",
        "icon": "🚀",
        "category": "network",
        "tags": ["speed", "internet", "network"],
        "link": "/tool-1/internet speed test 21/"
    },
    {
        "id": 22,
        "name": "Meta Tag Generator",
        "description": "Create SEO-friendly meta tags for your website.",
        "icon": "🏷️",
        "category": "seo",
        "tags": ["meta", "seo", "tags"],
        "link": "/tool-1/meta tag generator 22/"
    },
    {
        "id": 23,
        "name": "Privacy Policy Generator",
        "description": "Generate a custom privacy policy for your website or app.",
        "icon": "🛡️",
        "category": "legal",
        "tags": ["privacy", "policy", "legal"],
        "link": "/tool-1/privacy policy generator 23/"
    },
    {
        "id": 24,
        "name": "Random Number Generator",
        "description": "Generate random numbers within your chosen range.",
        "icon": "🎲",
        "category": "math",
        "tags": ["random", "number", "generator"],
        "link": "/tool-1/Random Number Generator 24/"
    },
    {
        "id": 25,
        "name": "Percentage Calculator",
        "description": "Quickly calculate percentages for any number.",
        "icon": "💯",
        "category": "math",
        "tags": ["percentage", "calculator", "math"],
        "link": "/tool-1/percentage calculator 25/"
    },
    {
        "id": 26,
        "name": "Days Between Dates Calculator",
        "description": "Find the exact number of days between two dates.",
        "icon": "📅",
        "category": "date-time",
        "tags": ["days", "date", "calculator"],
        "link": "/tool-1/Days Between Dates Calculator 26/"
    },
    {
        "id": 27,
        "name": "Text ↔ Binary Converter",
        "description": "Convert text to binary and binary back to text instantly.",
        "icon": "💻",
        "category": "conversion",
        "tags": ["text", "binary", "converter"],
        "link": "/tool-1/Text to Binary  Binary to Text Converter 27/"
    },
    {
        "id": 28,
        "name": "Base64 to Image",
        "description": "Convert Base64-encoded data into downloadable image files.",
        "icon": "🖼️",
        "category": "conversion",
        "tags": ["base64", "image", "converter"],
        "link": "/tool-1/Base64 to Image 28/"
    },
    {
        "id": 29,
        "name": "Image Filter Tool",
        "description": "Apply various filters to images and preview results instantly.",
        "icon": "✨",
        "category": "image",
        "tags": ["image", "filter", "photo"],
        "link": "/tool-1/image filter tool 29/"
    },
    {
        "id": 30,
        "name": "Fake Facebook Status Generator",
        "description": "Create funny and realistic-looking fake Facebook statuses.",
        "icon": "📘",
        "category": "fun",
        "tags": ["fake", "facebook", "fun", "generator"],
        "link": "/tool-1/fake Facebook status generator 30/"
    },
    {
        "id": 31,
        "name": "Fake Instagram Post Generator",
        "description": "Design hilarious fake Instagram posts with custom text and images.",
        "icon": "📷",
        "category": "fun",
        "tags": ["fake", "instagram", "fun", "generator"],
        "link": "/tool-1/fake instagram post generator 31/"
    },
    {
        "id": 32,
        "name": "Fake Tweet Generator",
        "description": "Create fake tweets that look just like the real thing.",
        "icon": "🐦",
        "category": "fun",
        "tags": ["fake", "tweet", "twitter", "fun"],
        "link": "/tool-1/Fake Tweet generator 32/"
    },
    {
        "id": 33,
        "name": "Reverse Text Generator",
        "description": "Reverse your text instantly for fun or hidden messages.",
        "icon": "↩️",
        "category": "text",
        "tags": ["reverse", "text", "fun"],
        "link": "/tool-1/Reverse Text generator 33/"
    },
    {
        "id": 34,
        "name": "Upside Down Text Generator",
        "description": "Flip your text upside down for cool and funny effects.",
        "icon": "🙃",
        "category": "text",
        "tags": ["upside", "down", "text", "fun"],
        "link": "/tool-1/Upside down Text generator 34/"
    },
    {
        "id": 35,
        "name": "Funny Font Style Converter",
        "description": "Convert your text into fun and unique font styles.",
        "icon": "✍️",
        "category": "text",
        "tags": ["font", "style", "text", "fun"],
        "link": "/tool-1/Funny Font Style Converter 35/"
    },
    {
        "id": 36,
        "name": "Text Glitch Effect Generator",
        "description": "Add glitch effects to your text for a digital look.",
        "icon": "⚡",
        "category": "text",
        "tags": ["glitch", "effect", "text"],
        "link": "/tool-1/Text Glitch Effect generator 36/"
    },
    {
        "id": 37,
        "name": "Typewriter Animation Text",
        "description": "Create animated typewriter-style text effects.",
        "icon": "⌨️",
        "category": "text",
        "tags": ["typewriter", "animation", "text"],
        "link": "/tool-1/Typewriter Animation Text 37/"
    },
    {
        "id": 38,
        "name": "Morse Code Translator",
        "description": "Convert text to Morse code and decode Morse back to text.",
        "icon": "📟",
        "category": "conversion",
        "tags": ["morse", "code", "translator"],
        "link": "/tool-1/Morse Code translator 38/"
    },
    {
        "id": 39,
        "name": "Emoji Text Translator",
        "description": "Turn your words into emoji-based sentences.",
        "icon": "😊",
        "category": "fun",
        "tags": ["emoji", "translator", "fun"],
        "link": "/tool-1/Emoji Text translator 39/"
    },
    {
        "id": 40,
        "name": "Pig Latin Translator",
        "description": "Translate normal text into Pig Latin for fun conversations.",
        "icon": "🐷",
        "category": "fun",
        "tags": ["pig", "latin", "translator", "fun"],
        "link": "/tool-1/Pig Latin And translator 40/"
    },
    {
        "id": 41,
        "name": "Text to Emoji Art Generator",
        "description": "Create creative emoji art from your text automatically.",
        "icon": "🎭",
        "category": "fun",
        "tags": ["emoji", "art", "generator", "fun"],
        "link": "/tool-1/Text to Emoji Art generator 41/"
    },
    {
        "id": 42,
        "name": "Emoji Combiner",
        "description": "Mix and combine emojis to create new fun designs.",
        "icon": "😄",
        "category": "fun",
        "tags": ["emoji", "combiner", "fun"],
        "link": "/tool-1/Emoji Combiner 42/"
    },
    {
        "id": 43,
        "name": "Random Funny Quote Generator",
        "description": "Get hilarious random quotes every time you click.",
        "icon": "💬",
        "category": "fun",
        "tags": ["quote", "funny", "random", "fun"],
        "link": "/tool-1/Random Funny Quote Generator 43/"
    },
    {
        "id": 44,
        "name": "Invisible Ink Text Generator",
        "description": "Generate invisible ink styled text for fun tricks.",
        "icon": "👻",
        "category": "fun",
        "tags": ["invisible", "text", "fun"],
        "link": "/tool-1/Invisible Ink Text Generator 44/"
    },
    {
        "id": 45,
        "name": "Zalgo / Sarcasm Text Generator",
        "description": "Make creepy Zalgo or sarcastic-style distorted text.",
        "icon": "💀",
        "category": "fun",
        "tags": ["zalgo", "sarcasm", "text", "fun"],
        "link": "/tool-1/Zalgo Sarcasm Text Generator 45/"
    },
    {
        "id": 46,
        "name": "Friendship Calculator",
        "description": "Calculate fun friendship compatibility scores.",
        "icon": "🤝",
        "category": "fun",
        "tags": ["friendship", "calculator", "fun"],
        "link": "/tool-1/Friendship Calculator 46/"
    },
    {
        "id": 47,
        "name": "Funny Nickname & Crush Name Combiner",
        "description": "Mix two names to generate a funny nickname or crush name.",
        "icon": "👫",
        "category": "fun",
        "tags": ["nickname", "crush", "combiner", "fun"],
        "link": "/tool-1/Funny Nickname  Crush Name Combiner 47/"
    },
    {
        "id": 48,
        "name": "Lucky Number & Mood Detector",
        "description": "Find your lucky number and detect your mood with fun results.",
        "icon": "🔮",
        "category": "fun",
        "tags": ["lucky", "mood", "fun"],
        "link": "/tool-1/Lucky Number  Mood Detector 48/"
    },
    {
        "id": 49,
        "name": "Random Food Picker",
        "description": "Can't decide what to eat? Let this tool choose for you!",
        "icon": "🍕",
        "category": "fun",
        "tags": ["food", "random", "picker", "fun"],
        "link": "/tool-1/random food picker 49/"
    },
    {
        "id": 50,
        "name": "EXIF Data Viewer",
        "description": "View detailed metadata (EXIF) from your uploaded images.",
        "icon": "📸",
        "category": "image",
        "tags": ["exif", "metadata", "image"],
        "link": "/tool-1/EXIF data viewer 50/"
    }
  
  
  
        ];
