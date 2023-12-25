const adviceList = [
    "Though distance may test earthly bonds, Christmas reminds us that our connection is spiritual and anchored in the love of Christ. You are missed, cherished, and connected to the joy of the season.",
    "Though physical distances may be great, the love and joy of Christmas unite us in spirit, for love knows no bounds.",
    "In the quiet moments of solitude, take refuge in the knowledge that God's love is a constant companion, even in the midst of physical separation.",
    "Remember, you are loved, and this feeling won't last forever.",
    "If you ever need someone to talk to, I'm just a message away.",
    "Even in solitude, your presence is felt in the warmth of friendship.",
    "Sending virtual hugs and positive vibes your way.",
    "You may be physically alone, but you're not alone in spirit.",
    "Use this time for self-reflection and self-care; you deserve it.",
    "The holiday season is just a moment; brighter days are ahead.",
    "Find joy in the small moments, and know that you're valued.",
    "Your worth is not determined by the presence of others; you matter.",
    "Consider reaching out to friends or family; they may be waiting for your call.",
    "Embrace the peace of solitude, and cherish the time for personal growth.",
    "You have the strength to overcome this temporary loneliness.",
    "Reflect on the positive memories you've created and look forward to making more.",
    "Focus on the things that bring you comfort and joy, even if it's a small gesture.",
    "You are a beacon of light, and others will be drawn to your warmth.",
    "This moment does not define your worth or the love surrounding you.",
    "Take this time to pamper yourself and indulge in activities that bring you happiness.",
    "The universe has a way of connecting us; trust that meaningful connections are on the horizon.",
];

function generateAdvice() {
    const adviceElement = document.getElementById("advice");
    const randomIndex = Math.floor(Math.random() * adviceList.length);
    adviceElement.textContent = adviceList[randomIndex];
}
