export const projects = [
  {
    id: "02",
    anchor: "referu-ai",
    name: "ReferU.AI",
    category: "LEGAL TECHNOLOGY",
    description: "Retrieval and conversational AI for legal discovery.",
    image: "referu.png",
    url: "https://www.referu.ai/",
    stack: ["FastAPI", "LangChain", "PostgreSQL"],
    contribution: "Retrieval & API engineering",
    detail:
      "A legal discovery platform that connects people with attorneys whose experience aligns with their legal matters. My contribution focused on the retrieval and conversational AI services behind the product.",
    engineering:
      "Python and FastAPI services, LangChain retrieval workflows, PostgreSQL data access, and Docker deployment.",
    note: "Public product interface. Contribution: AI and backend services."
  },
  {
    id: "03",
    anchor: "emotion-detection",
    name: "Emotion Detection",
    category: "COMPUTER VISION",
    description: "Comparing CNN architectures for emotion recognition.",
    image: "emotion.png",
    url: "https://github.com/karrtik159/Flask_Face_detection",
    stack: ["PyTorch", "OpenCV", "Flask"],
    contribution: "Models & interactive web interface",
    detail:
      "A computer vision application comparing VGG19 and AlexNet for facial emotion recognition using the EMOTIC dataset, presented through an interactive web interface.",
    engineering:
      "CNN model comparison with PyTorch, image processing with OpenCV, and a Flask application for exploring the models and camera feed.",
    note: "Original project screenshot from this repository."
  },
  {
    id: "04",
    anchor: "dog-coloring-books",
    layout: "wide",
    name: "Dog Coloring Books",
    category: "GENERATIVE COMMERCE",
    description: "Generative imaging connected to print-on-demand fulfillment.",
    image: "dogbooks.png",
    url: "https://dogcoloringbooks.com/",
    stack: ["Gemini API", "Stripe", "Lulu API"],
    contribution: "Image generation & fulfillment",
    detail:
      "A service that turns dog photos into printable coloring books. My work connected image generation, commerce, and print-on-demand fulfillment.",
    engineering:
      "Image processing and Gemini API integration, Stripe payments, and automated print fulfillment with the Lulu API.",
    note: "Public product interface. Contribution: generation and automation."
  }
];
