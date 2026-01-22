async function askAI() {
  const question = document.getElementById("question").value;
  const answerBox = document.getElementById("answer");

  if(!question.trim()) {
    answerBox.innerText = "Please ask a question!";
    return;
  }

  answerBox.innerText = "Thinking... 🤖";

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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" // Replace with your API key
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: question }]
      })
    });

    const data = await response.json();
    answerBox.innerText = data.choices[0].message.content;

  } catch (error) {
    answerBox.innerText = "Error: Could not connect to AI API.";
    console.error(error);
  }
}